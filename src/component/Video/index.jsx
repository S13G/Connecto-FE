import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import image from "./assets/hero.jpeg";
import Adventure from "../Adventure";
function Video() {
  return (
    <section className="container">
      <div className="video-section">
        <img src={image} alt="" />
        <div className="video-info">
          <div>
            <h2>see how we're improving the way you travel</h2>
            <h4>connecting the world for over a decade</h4>
            <button>read about us</button>
          </div>
          <FaRegPlayCircle />
        </div>
      </div>
      <Adventure />
    </section>
  );
}

export default Video;
