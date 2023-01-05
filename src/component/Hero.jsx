import React from "react";
import Navbar from "./Navbar";
import image from "../images/hero.jpeg";
import Book from "./Book";
import HomeDestinations from "./HomeDestinations";
import { FaSearch } from "react-icons/fa";
function Hero({ form }) {
  return (
    <>
      <section className='hero-section'>
        <div className='img-container'>
          <div className='gradient'></div>
          <img src={image} alt='' />
        </div>
        <div className='hero-container'>
          <Navbar />
          <div className='hero-contents'>
            <h1>Simple Way to Reach Your Vacation Destination</h1>
            <h4>Safe, Reliable and More Affordable Airport Transfers</h4>
            {form || (
              <div className='hero-input'>
                <input type='text' placeholder='Find your destination' />
                <FaSearch />
              </div>
            )}
          </div>
        </div>
        {form ? <Book /> : <HomeDestinations main={false} />}
      </section>
    </>
  );
}

export default Hero;
