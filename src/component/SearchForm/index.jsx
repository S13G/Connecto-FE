import React, { useState } from "react";
import { FaBuilding, FaRegUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { VscCalendar } from "react-icons/vsc";

import "./searchForm.scss";

const locations = [
  { id: 1, name: "Lagos" },
  { id: 2, name: "Abuja" },
  { id: 3, name: "Port Harcourt" },
  { id: 4, name: "Kano" },
  { id: 5, name: "Ibadan" },
  { id: 6, name: "Benin" },
  { id: 7, name: "Enugu" },
  { id: 8, name: "Aba" },
  { id: 9, name: "Ilorin" },
  { id: 10, name: "Owerri" },
  { id: 11, name: "Uyo" },
  { id: 12, name: "Asaba" },
  { id: 13, name: "Jos" },
  { id: 14, name: "Abeokuta" },
  { id: 15, name: "Ikeja" },
  { id: 16, name: "Frankfurt" },
  { id: 17, name: "Berlin" },
  { id: 18, name: "Hamburg" },
  { id: 19, name: "Munich" },
  { id: 20, name: "Cologne" },
];

const SearchForm = () => {
  const [personCount, setPersonCount] = useState(1);
  const [activebtn, setActivebtn] = useState("return");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [typingFrom, setTypingFrom] = useState("");
  const [typingTo, setTypingTo] = useState("");

  function handleButtonClick(button) {
    setActivebtn(button);
  }

  const handlePersonCount = (e) => {
    const { innerText } = e.target;
    if (innerText === "+") {
      if (personCount < 50) {
        setPersonCount(personCount + 1);
      }
    } else if (innerText === "-") {
      if (personCount > 1) {
        setPersonCount(personCount - 1);
      }
    }
  };

  const handleFrom = (e) => {
    setFrom(e);
    setTypingFrom(e);
    setTypingTo("");
  };

  const handleTo = (e) => {
    setTo(e);
    setTypingTo(e);
    setTypingFrom("");
  };

  const getSelectedFrom = (location) => {
    setFrom(location);
    setTypingFrom("");
    setTypingTo("");
  };
  const getSelectedTo = (location) => {
    setTo(location);
    setTypingFrom("");
    setTypingTo("");
  };

  const handleLocation = (locs, keyword) => {
    return locs.filter((location) => {
      return location.name.toLowerCase().includes(keyword.toLowerCase());
    });
  };
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
        <div className="select-locale">
          <div className="search-form-input">
            <MdLocationPin className="google-start-pointing" />
            <input
              type="text"
              onChange={(e) => handleFrom(e.target.value)}
              placeholder="From: Aiport, town, hotel"
              value={from}
            />
            {typingFrom !== "" && (
              <div className="locations">
                {handleLocation(locations, from).map((location) => (
                  <div
                    key={location.id}
                    className="location"
                    onClick={() => getSelectedFrom(location.name)}
                  >
                    <FaBuilding className="google-start-pointing building" />
                    {location.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <TbArrowsRightLeft className="arrows" />

          <div className="search-form-input">
            <MdLocationPin className="google-start-pointing" />
            <input
              type="text"
              onChange={(e) => handleTo(e.target.value)}
              placeholder="To: Aiport, town, hotel"
              value={to}
            />
            {typingTo !== "" && (
              <div className="locations">
                {handleLocation(locations, to).map((location) => (
                  <div
                    key={location.id}
                    className="location"
                    onClick={() => getSelectedTo(location.name)}
                  >
                    <FaBuilding className="google-start-pointing building" />
                    {location.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="search-form-input">
          <VscCalendar className="google-start-pointing cal" />
          <input type="text" placeholder="Departure" />
          <div className="hr" />
          <input type="text" placeholder="Return" />
        </div>
        <div className="passengers_prices">
          <div className="search-form-input persengers">
            <span onClick={(e) => handlePersonCount(e)} className="count">
              -
            </span>
            <FaRegUser className="user" />
            <span>{personCount}</span>
            <span onClick={(e) => handlePersonCount(e)} className="count">
              +
            </span>
          </div>
          <button className="cta-btn prices">See Prices</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
