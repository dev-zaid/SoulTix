import spotify from "../images/spotifylogo-removebg-preview.png";

interface SpotifyLoginButtonProps {
  CLIENT_ID: string;
  REDIRECT_URI: string;
}

export function SpotifyLoginButton({
  CLIENT_ID,
  REDIRECT_URI,
}: SpotifyLoginButtonProps) {
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      className="flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-white px-4 py-2 rounded-full transition-all duration-200 font-medium"
    >
      <img src={spotify} alt="Spotify" className="w-6 h-6 object-contain" />
      <span>Login with Spotify</span>
    </a>
  );
}
