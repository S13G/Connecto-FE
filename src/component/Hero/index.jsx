import React from "react";
import Navbar from "../Navbar";
import SearchForm from "../SearchForm";
import image from "./assets/hero.jpeg";
function Hero() {
  return (
    <section className="hero-section">
      <div className="img-container">
        <div className="gradient"></div>
        <img src={image} alt="" />
      </div>
      <div className="hero-container">
        <Navbar />
        <div className="hero-contents">
          <h1>Simple Way to Reach Your Vacation Destination</h1>
          <h4>Safe, Reliable and More Affordable Airport Transfers</h4>
        </div>
      </div>
      <div className="search">
        <SearchForm />
      </div>
    </section>
  );
}

export default Hero;
