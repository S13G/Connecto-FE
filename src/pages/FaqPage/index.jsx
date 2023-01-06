import React from "react";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Navbar from "../../component/Navbar";
import image from "./assets/hero.jpeg";
import "./faq.scss";

function FAQ() {
  return (
    <section className="hero-section">
      <div className="img-container">
        <div className="gradient"></div>
        <img src={image} alt="" />
      </div>
      <div className="faqhero-container">
        <Navbar />
        <div className={"faqhero-contents"}>
          <h1>help & support</h1>
          <h4>Find an answer to anything you need in our knowledge base</h4>
          <div className="faq-inputs">
            <input type="text" placeholder="what's your question?" />
            <button>
              <FaSearch /> Search
            </button>
          </div>
        </div>
      </div>
      <div className="faq-section">
        <div className="faq-categories">
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
          <div>
            <p>Booking process</p>
            <FaChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
