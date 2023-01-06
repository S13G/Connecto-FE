import React from "react";
import { FaStar } from "react-icons/fa";
import image4 from "./assets/calendar.png";
import image5 from "./assets/head.png";
import image2 from "./assets/heart.png";
import image3 from "./assets/shield.png";
import image from "./assets/tripadvisor.png";
import "./tripad.scss";

function Tripad() {
  return (
    <div className={"tripad"}>
      <div className={"tripad-container"}>
        <div className={"left-tripad"}>
          <img src={image} alt="" />
          <div className={"stars"}>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </div>
          <p>Rated 4.7 by thousands of travelers.</p>
        </div>
        <div className={"right-tripad"}>
          <div className={"tripad-img"}>
            <img src={image2} alt="" />
            <h4>Trusted by Millions</h4>
          </div>
          <div className={"tripad-img"}>
            <img src={image3} alt="" />
            <h4>Secure Online Payment</h4>
          </div>
          <div className={"tripad-img"}>
            <img src={image4} alt="" />
            <h4>Free Cancelation</h4>
          </div>
          <div className={"tripad-img"}>
            <img src={image5} alt="" />
            <h4>24/7 Support Service</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tripad;
