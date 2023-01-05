import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import image from "../images/hero.jpeg";
function Adventure() {
  return (
    <section className="adventure-section container">
      <h2>get inspired for your next adventure</h2>
      <h4>explore the world of connecto stories</h4>
      <div className="adventures">
        <div className="single-adventure">
          <img src={image} alt="" />
          <div className="single-info">
            <h5>what you need to know | CIOVID-19</h5>
            <p>
              Read story <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="single-adventure">
          <img src={image} alt="" />
          <div className="single-info">
            <h5>what you need to know | CIOVID-19</h5>
            <p>
              Read story <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="single-adventure">
          <img src={image} alt="" />
          <div className="single-info">
            <h5>what you need to know | CIOVID-19</h5>
            <p>
              Read story <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="single-adventure">
          <img src={image} alt="" />
          <div className="single-info">
            <h5>what you need to know | CIOVID-19</h5>
            <p>
              Read story <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="single-adventure">
          <img src={image} alt="" />
          <div className="single-info">
            <h5>what you need to know | CIOVID-19</h5>
            <p>
              Read story <AiOutlineArrowRight />
            </p>
          </div>
        </div>
        <div className="single-adventure">
          <img src={image} alt="" />
          <div className="single-info">
            <h5>what you need to know | CIOVID-19</h5>
            <p>
              Read story <AiOutlineArrowRight />
            </p>
          </div>
        </div>
      </div>
      <button>
        <Link to="/stories">read all stories</Link>
      </button>
    </section>
  );
}

export default Adventure;
