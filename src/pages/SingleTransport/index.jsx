import React from "react";
import { FaChevronRight, FaSuitcase } from "react-icons/fa";
import Book from "../../component/Book";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

function SingleTransport() {
  return (
    <section className="single-transport-section">
      <div className="bcg"></div>
      <div className="single-transport-container">
        <Navbar />
        <Book />
        <div className="transfer-vehicles">
          <div className="top">
            <h4>My Transfer Vehicle</h4>
            <p>Step 1 of 3</p>
          </div>
          <div className="vehicle-content">
            <img
              src="https://connectotransfers.com/static/modular/img/vehicles/eu/fv2/minibus.jpg"
              alt=""
            />
            <div className="info">
              <h5>The Economy Vehicle</h5>
              <p>
                4.9 🌟🌟🌟🌟🌟 <span>1.7k reviews</span>
              </p>
              <p className="learn">Learn More</p>
              <ul>
                <li>
                  <FaSuitcase /> Fits 8 medium suitcase
                </li>
                <li>
                  <FaSuitcase /> Fits 8 medium suitcase
                </li>
              </ul>
            </div>
            <div className="info">
              <ul>
                <li>
                  <FaSuitcase /> Fits 8 medium suitcase
                </li>
                <li>
                  <FaSuitcase /> Fits 8 medium suitcase
                </li>
                <li>
                  <FaSuitcase /> Fits 8 medium suitcase
                </li>
              </ul>
              <p className="small">39 vehicles booked in the last 24 hours!</p>
              <button className="btn date-btn">
                Choose date <FaChevronRight />
              </button>
            </div>
          </div>
          <h2>Feeling Curious? Here's More</h2>
          <div className="other-vehicles">
            <div className="vehicle-content">
              <img
                src="https://connectotransfers.com/static/modular/img/vehicles/eu/fv2/minibus.jpg"
                alt=""
              />
              <div className="info">
                <h5>The Economy Vehicle</h5>
                <p>
                  4.9 🌟🌟🌟🌟🌟 <span>1.7k reviews</span>
                </p>
                <p className="learn">Learn More</p>
                <ul>
                  <li>
                    <FaSuitcase /> Fits 8 medium suitcase
                  </li>
                  <li>
                    <FaSuitcase /> Fits 8 medium suitcase
                  </li>
                </ul>
              </div>
              <div className="info">
                <small>One way price:</small>
                <h4>Choose date</h4>
                <button className="btn date-btn">
                  Choose this vehicle <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="vehicle-content">
              <img
                src="https://connectotransfers.com/static/modular/img/vehicles/eu/fv2/minibus.jpg"
                alt=""
              />
              <div className="info">
                <h5>The Economy Vehicle</h5>
                <p>
                  4.9 🌟🌟🌟🌟🌟 <span>1.7k reviews</span>
                </p>
                <p className="learn">Learn More</p>
                <ul>
                  <li>
                    <FaSuitcase /> Fits 8 medium suitcase
                  </li>
                  <li>
                    <FaSuitcase /> Fits 8 medium suitcase
                  </li>
                </ul>
              </div>
              <div className="info">
                <small>One way price:</small>
                <h4>Choose date</h4>
                <button className="btn date-btn">
                  Choose this vehicle <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="vehicle-content">
              <img
                src="https://connectotransfers.com/static/modular/img/vehicles/eu/fv2/minibus.jpg"
                alt=""
              />
              <div className="info">
                <h5>The Economy Vehicle</h5>
                <p>
                  4.9 🌟🌟🌟🌟🌟 <span>1.7k reviews</span>
                </p>
                <p className="learn">Learn More</p>
                <ul>
                  <li>
                    <FaSuitcase /> Fits 8 medium suitcase
                  </li>
                  <li>
                    <FaSuitcase /> Fits 8 medium suitcase
                  </li>
                </ul>
              </div>
              <div className="info">
                <small>One way price:</small>
                <h4>Choose date</h4>
                <button className="btn date-btn">
                  Choose this vehicle <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default SingleTransport;
