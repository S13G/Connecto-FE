import React from "react";
import image from "../../images/destination.jpeg";
import SingleDestination from "./SingleDestination";

const destns = [
  {
    id: 1,
    img: image,
    name: "Geneva Airport",
    rating: "4.9",
    reviews: "1.2k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 2,
    img: image,
    name: "Zurich Airport",
    rating: "4.9",
    reviews: "939",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 3,
    img: image,
    name: "Veinna Airport",
    rating: "5.0",
    reviews: "2k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 4,
    img: image,
    name: "Milan Malpensa Airport",
    rating: "5.0",
    reviews: "589",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 5,
    img: image,
    name: "Munich Airport",
    rating: "4.9",
    reviews: "647",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 6,
    img: image,
    name: "Paris Charles De Gaulle Airport",
    rating: "5.0",
    reviews: "287",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 7,
    img: image,
    name: "Barcelona Airport",
    rating: "5.0",
    reviews: "277",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 8,
    img: image,
    name: "Rome Fiumicino Airport",
    rating: "5.0",
    reviews: "561",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 9,
    img: image,
    name: "Alicante Airport",
    rating: "5.0",
    reviews: "363",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 10,
    img: image,
    name: "Vernice Marco Polo Airport",
    rating: "5.0",
    reviews: "1.2k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 11,
    img: image,
    name: "Malaga Airport",
    rating: "5.0",
    reviews: "426",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 12,
    img: image,
    name: "Faro Airport",
    rating: "5.0",
    reviews: "533",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 13,
    img: image,
    name: "Split Airport",
    rating: "5.0",
    reviews: "6.8k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 14,
    img: image,
    name: "Berlin Brandenburg Airport",
    rating: "4.9",
    reviews: "77",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 15,
    img: image,
    name: "Dubonvnik Airport",
    rating: "5.0",
    reviews: "2.3k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 16,
    img: image,
    name: "Zadar Airport",
    rating: "4.9",
    reviews: "1.1k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 17,
    img: image,
    name: "Athens Airport",
    rating: "4.9",
    reviews: "183",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 18,
    img: image,
    name: "Malloca Airport",
    rating: "4.9",
    reviews: "217",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 19,
    img: image,
    name: "Vienna Airport",
    rating: "5.0",
    reviews: "2k",
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 20,
    img: image,
    name: "Millan Malpensa Airport",
    rating: "5.0",
    reviews: "589",
    price: "Transfer Prices from EUR 20",
  },
];

function Destinations() {
  return (
    <div className="home-destinations">
      <SingleDestination />
      <SingleDestination />
      <SingleDestination />
      <SingleDestination />
      <SingleDestination />
      <SingleDestination />
    </div>
  );
}

export default Destinations;
