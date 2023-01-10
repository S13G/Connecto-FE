import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { VscCalendar } from "react-icons/vsc";
import "./searchForm.scss";

const SearchForm = () => {
  const [personCount, setPersonCount] = useState(1);
  const [activebtn, setActivebtn] = useState("return");

  function handleButtonClick(button) {
    setActivebtn(button);
  }
  return (
    <div className="container search-form-container">
      <div className="search-form-tab">
        <div
          data-way="return"
          className={`ways-btn ${activebtn === "return" ? "active" : ""}`}
          onClick={() => handleButtonClick("return")}
        >
          With return
        </div>
        <div
          data-way="one"
          className={`ways-btn ${activebtn === "oneway" ? "active" : ""}`}
          onClick={() => handleButtonClick("oneway")}
        >
          One way
        </div>
      </div>
      <form className={`search-form ${activebtn === "oneway" ? "btop" : ""}`}>
        <div className="search-form-input">
          <MdLocationPin className="google-start-pointing" />
          <input type="text" placeholder="Aiport, town, hotel" />
        </div>
        <TbArrowsRightLeft className="arrows" />

        <div className="search-form-input">
          <MdLocationPin className="google-start-pointing" />
          <input type="text" placeholder="Aiport, town, hotel" />
        </div>
        <div className="search-form-input">
          <VscCalendar className="google-start-pointing cal" />
          <input type="text" placeholder="Departure" />
          <div className="hr" />
          <input type="text" placeholder="Return" />
        </div>
        <div className="search-form-input persengers">
          <span className="count">-</span>
          <FaRegUser className="user" />
          <input
            type="hidden"
            name="persons-select"
            id="persons-select"
            value={personCount}
            autoComplete="off"
          />
          <span className="count">+</span>
        </div>
        <button className="cta-btn">See Prices</button>
      </form>
    </div>
  );
};

export default SearchForm;
