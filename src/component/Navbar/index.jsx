import React from "react";
import { Link, NavLink } from "react-router-dom";
import image2 from "./assets/logo-black.png";
import image from "./assets/logo-white.png";
import "./navbar.scss";
function Navbar() {
  const [useScroll, setUseScroll] = React.useState(false);

  const changeNavEffect = () => {
    if (window.scrollY >= 35) {
      setUseScroll(true);
    } else {
      setUseScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavEffect);

  return (
    <nav className={useScroll ? "navbar active" : "navbar"}>
      <div className="nav-container">
        <Link to="/" className="home-link">
          <img src={image2} alt="connecto" className="activeImg" />
          <img src={image} alt="connecto" className="defaultImg" />
        </Link>
        <div className="nav-contents">
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="/destinations" activeclassname="active-nav">
                Destinations
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/faq" activeclassname="active-nav">
                FAQ
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/partners" activeclassname="active-nav">
                Partner
              </NavLink>
            </li>
            <div className="hrs">
              <hr className="top-hr" />
              <hr className="bottom-hr" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
