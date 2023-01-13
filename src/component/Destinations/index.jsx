import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import image from "../../images/destination.jpeg";
import "./destinations.scss";

const destns = [
  {
    id: 1,
    img: "https://connectotransfers.com/static/images/dest_imgs/connectotransfers_com/thumb_dest-geneva-city-bay-2.jpg",
    name: "Geneva Airport",
    path: "geneva-airport",
    rating: "4.9",
    reviews: "1.2k",
    starNumn: [1, 2, 3, 4, 5],
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 2,
    img: "https://connectotransfers.com/static/images/dest_imgs/connectotransfers_com/thumb_dest-zurich-city-2.jpg",
    name: "Zurich Airport",
    path: "zurich-airport",
    rating: "4.9",
    reviews: "939",
    starNumn: [1, 2, 3],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 3,
    img: image,
    name: "Veinna Airport",
    path: "veninnaa-airport",
    rating: "5.0",
    reviews: "2k",
    starNumn: [1, 2, 3, 4, 5],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 4,
    img: image,
    name: "Milan Malpensa Airport",
    path: "milan-malpensa-airport",
    rating: "5.0",
    reviews: "589",
    starNumn: [1, 2],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 5,
    img: image,
    name: "Munich Airport",
    path: "munich-airport",
    rating: "4.9",
    reviews: "647",
    starNumn: [1, 2, 3],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 6,
    img: image,
    name: "Paris Charles De Gaulle Airport",
    path: "paris-charles-de-gaulle-airport",
    rating: "5.0",
    reviews: "287",
    starNumn: [1, 2, 3, 4, 5],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 7,
    img: image,
    name: "Barcelona Airport",
    path: "barcelona-airport",
    rating: "5.0",
    reviews: "277",
    starNumn: [1],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 8,
    img: image,
    name: "Rome Fiumicino Airport",
    path: "rome-fiumicino-airport",
    rating: "5.0",
    reviews: "561",
    starNumn: [1, 2],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 9,
    img: image,
    name: "Alicante Airport",
    path: "alicante-airport",
    rating: "5.0",
    reviews: "363",
    starNumn: [1, 2, 3],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 10,
    img: image,
    name: "Vernice Marco Polo Airport",
    path: "vernice-marco-polo-airport",
    rating: "5.0",
    reviews: "1.2k",
    starNumn: [1, 2, 3, 4, 5],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 11,
    img: image,
    name: "Malaga Airport",
    path: "malaga-airport",
    rating: "5.0",
    reviews: "426",
    starNumn: [1, 2, 3, 4],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 12,
    img: image,
    name: "Faro Airport",
    path: "faro-airport",
    rating: "5.0",
    reviews: "533",
    starNumn: [1, 2, 3],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 13,
    img: image,
    name: "Split Airport",
    path: "split-airport",
    rating: "5.0",
    reviews: "6.8k",
    starNumn: [1, 2, 3, 4, 5],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 14,
    img: image,
    name: "Berlin Brandenburg Airport",
    path: "berlin-brandenburg-airport",
    rating: "4.9",
    reviews: "77",
    starNumn: [1, 2],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 15,
    img: image,
    name: "Dubonvnik Airport",
    path: "dubonvnik-airport",
    rating: "5.0",
    reviews: "2.3k",
    starNumn: [1, 2, 3, 4, 5],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 16,
    img: image,
    name: "Zadar Airport",
    path: "zadar-airport",
    rating: "4.9",
    reviews: "1.1k",
    starNumn: [1, 2, 3, 4, 5],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 17,
    img: image,
    name: "Athens Airport",
    path: "athens-airport",
    rating: "4.9",
    reviews: "183",
    starNumn: [1, 2, 3],

    price: "Transfer Prices from EUR 20",
  },
  {
    id: 18,
    img: image,
    name: "Malloca Airport",
    path: "malloca-airport",
    rating: "4.9",
    reviews: "217",
    starNumn: [1, 2, 3, 4],
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 19,
    img: image,
    name: "Vienna Airport",
    path: "vienna-airport",
    rating: "5.0",
    reviews: "2k",
    starNumn: [1, 2, 3, 4, 5],
    price: "Transfer Prices from EUR 20",
  },
  {
    id: 20,
    img: image,
    name: "Millan Malpensa Airport",
    path: "millan-malpensa-airport",
    rating: "5.0",
    reviews: "589",
    starNumn: [1, 2, 3],
    price: "Transfer Prices from EUR 20",
  },
];

const params = {
  slidesPerView: 4,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is <= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
};

function Destinations() {
  const twoDestinations = destns.slice(0, 2);
  const eightTeenDestinations = destns.slice(2, 20);
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="container">
      <div className="two-destinations">
        {twoDestinations.map((destn) => (
          <div className="single-destination" key={destn.id}>
            <div className="destination-img">
              <img src={destn.img} alt={destn.name} className="wide-img" />
              <div className="overlayLink">
                <Link to={`/${destn.path}`} className="overlayLinkText">
                  Visit Destination
                </Link>
              </div>
            </div>
            <div className="destination-info">
              <h3>{destn.name}</h3>
              <div className="rating">
                <span className="rating-number">{destn.rating}</span>
                {destn.starNumn.map((star) => (
                  <FaStar key={star} className="rating-star" />
                ))}
                <span className="reviews">{destn.reviews} reviews</span>
              </div>
              <p>{destn.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="eighteen-destinations"
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          {...params}
          slidesPerView={4}
          navigation={mouseOver ? true : false}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {eightTeenDestinations.map((destn) => (
            <SwiperSlide className="single-destination-eight" key={destn.id}>
              <div className="destination-img">
                <img
                  src={destn.img}
                  alt={destn.name}
                  className="eight-destn-img"
                />
                <div className="overlayLink">
                  <Link to={`/${destn.path}`} className="overlayLinkText">
                    Visit Destination
                  </Link>
                </div>
              </div>
              <div className="destination-info">
                <h3>{destn.name}</h3>
                <div className="rating">
                  <span className="rating-number">{destn.rating}</span>
                  {destn.starNumn.map((star) => (
                    <FaStar key={star} className="rating-star" />
                  ))}
                  <span className="reviews">{destn.reviews} reviews</span>
                </div>
                <p>{destn.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Destinations;
