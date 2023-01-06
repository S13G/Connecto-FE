import React from "react";
import { FaChevronRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../images/destination.jpeg";
import "./singleDestination.scss";
function SingleDestination() {
  return (
    <>
      <div className={"img-container"}>
        <div className={"img-gradient"}>
          <Link to="/airport">View destination</Link>
          <FaChevronRight />
        </div>
        <img src={image} alt="" />
      </div>
      <h3>split airport</h3>
      <p>
        5.0 <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <span>657 reviews</span>
      </p>
      <p>Transfer Prices from EUR 20</p>
    </>
  );
}

export default SingleDestination;
