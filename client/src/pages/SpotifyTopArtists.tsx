import { useEffect, useState } from "react";
import axios from "axios";

interface Artist {
  id: string;
  name: string;
  images: Array<{ url: string }>;
}

function SpotifyTopArtists() {
  const CLIENT_ID = "552366a516f2483caccc7e19b23cb67a";
  const REDIRECT_URI = "http://localhost:3000/spotify";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);

  // const getToken = () => {
  //     let urlParams = new URLSearchParams(window.location.hash.replace("#","?"));
  //     let token = urlParams.get('access_token');
  // }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const foundToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];

      if (foundToken) {
        token = foundToken;
        window.location.hash = "";
        window.localStorage.setItem("token", foundToken);
      }
    }

    setToken(token || "");
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await axios.get<{ artists: { items: Artist[] } }>(
      "https://api.spotify.com/v1/search",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "artist",
        },
      }
    );

    setArtists(data.artists.items);
  };

  interface Artist {
    id: string;
    name: string;
    images: Array<{ url: string }>;
  }

  const renderArtists = () => {
    return artists.map((artist: Artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div className="m-16">
      <h1>Spotify React</h1>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      {token ? (
        <form onSubmit={searchArtists}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type={"submit"}>Search</button>
        </form>
      ) : (
        <h2>Please login</h2>
      )}

      {renderArtists()}
    </div>
  );
}

export default SpotifyTopArtists;
