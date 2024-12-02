import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import concert from "../images/concert.jpg";
import alan from "../images/nft3.webp";
import { Link } from "react-router-dom";
export default function Discover() {
  const events = [
    {
      id: "1",
      name: "Renaissance World Tour",
      artist: "Beyoncé",
      image: concert,
      bookingstartDate: "2024-04-01T10:00:00Z",
      bookingendDate: "2024-06-15T23:59:59Z",
      eventDate: "2024-06-20T19:30:00Z",
      doors: "2024-06-20T18:00:00Z",
      duration: "180", // in minutes

      venue: "SoFi Stadium",
      pricing: {
        currency: "USD",
        tiers: [
          {
            name: "VIP",
            price: 499.99,
            benefits: ["Meet & Greet", "Early Entry", "Exclusive Merch"],
          },
          {
            name: "Premium",
            price: 299.99,
            benefits: ["Premium Seating", "Dedicated Entrance"],
          },
          {
            name: "General",
            price: 99.99,
            benefits: ["Standard Seating"],
          },
        ],
      },
    },
    {
      id: "2",
      name: "The Eras Tour",
      artist: "Taylor Swift",
      image: alan,
      bookingstartDate: "2024-05-01T10:00:00Z",
      bookingendDate: "2024-07-15T23:59:59Z",
      status: "upcoming",
      date: "2024-07-25T20:00:00Z",
      doors: "2024-07-25T18:30:00Z",
      duration: "210",
      venue: "MetLife Stadium",
      pricing: {
        currency: "USD",
        tiers: [
          {
            name: "VIP Package",
            price: 899.99,
            benefits: ["VIP Lounge", "Meet & Greet", "Exclusive Merch"],
          },
          {
            name: "Premium",
            price: 399.99,
            benefits: ["Premium Seating", "Early Entry"],
          },
          {
            name: "General",
            price: 149.99,
            benefits: ["Standard Seating"],
          },
        ],
      },
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-20 ">
      <div className="text-4xl text-white">Find Your Favs Here</div>
      <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
        {events.map((item, index) => (
          <Link key={index} to={`/event/${item.id}`}>
            <div
              className="relative overflow-hidden bg-white shadow-md rounded-xl p-9 transition duration-300 ease-in-out hover:bg-white-300 hover:scale-110"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                width: "300px",
              }}
            >
              <div className="p-9 bg-opacity-75"></div>
              <p className="opacity-0 hover:opacity-100 duration-300 absolute inset-0  flex justify-center items-center">
                {item.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
