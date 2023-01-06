import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import styles from "./footer.module.scss";

function Footer() {
  return (
    // <Wrapper>
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className="footer-content">
          <div>
            <h3>Social Media</h3>
            <ul className={styles["social-links"]}>
              <li>
                <a href="www.facebook.com" target="blank">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="www.instagram.com" target="blank">
                  <FaInstagram /> instagram
                </a>
              </li>
              <li>
                <a href="www.youtube.com" target="blank">
                  <FaYoutube /> youtube
                </a>
              </li>
              <li>
                <a href="www.twitter.com" target="blank">
                  <FaTwitter /> twitter
                </a>
              </li>
              <li>
                <a href="www.tripadvisor.com" target="blank">
                  <FaTripadvisor /> TripAdvisor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Subscribe to our Weekly Newsletter</h2>
            <h4>Get Latest Travel Ideas and Deals in Your Mailbox.</h4>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">subscribe</button>
            </form>
          </div>
          <div>
            <h3>Explore/More</h3>
            <ul className={styles["footer-links"]}>
              <li>
                <Link to="/destination">Destinations</Link>
              </li>
              <li>
                <Link to="/faq">help & support</Link>
              </li>
              <li>
                <Link to="/about">about us</Link>
              </li>
              <li>
                <Link to="/partner">become a partner</Link>
              </li>
              <li>
                <Link to="/terms">terms & conditions</Link>
              </li>
              <li>
                <Link to="#">partner login</Link>
              </li>
            </ul>
          </div>
        </div>
        <h5>All rights reserved &copy; connecto {new Date().getFullYear()}.</h5>
      </div>
      {/* </Wrapper> */}
    </footer>
  );
}

// const Wrapper = styled.div`
//   background-color: #363948;
//   border-radius: 30px 30px 0px 0;
//   padding: 0 30px;
//   .footer-container {
//     max-width: var(--max-width);
//     margin: 0 auto;
//   }
//   .footer-content {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     column-gap: 10px;
//   }
//   h3 {
//     color: #fff;
//   }
//   ul {
//     margin: 0;
//     padding: 0;
//     li {
//       margin-bottom: 7px;
//     }
//     li a {
//       color: #9a9b9e;
//       font-weight: 500;
//       text-transform: capitalize;
//     }
//     li svg {
//       margin-right: 10px;
//     }
//   }
//   .footer-links li:hover a {
//     border-bottom: 1px solid #9a9b9e;
//     transition: 0.5s ease-in-out;
//   }
//   h2,
//   h4 {
//     color: #fff;
//     text-align: center;
//   }
//   h2 {
//     margin-bottom: 10px;
//   }
//   h4 {
//     font-weight: 300;
//     margin-top: 0;
//   }
//   form input {
//     background: transparent;
//     padding: 10px 10px;
//     border-radius: 5px;
//     border: 1px solid #9a9b9e;
//     text-transform: capitalize;
//     width: 70%;
//     margin-right: 15px;
//   }
//   form button {
//     background: transparent;
//     padding: 10px 10px;
//     border: 1px solid var(--gradient-blue);
//     border-radius: 5px;
//     color: var(--gradient-blue);
//     text-transform: capitalize;
//     width: 25%;
//   }
//   h5 {
//     text-align: center;
//     margin-bottom: 0;
//     padding: 20px 0;
//     color: #8e8e8f;
//     font-weight: 400;
//     text-transform: capitalize;
//     font-size: 1rem;
//   }
//   @media (max-width: 750px) {
//     .footer-content {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       align-items: flex-start;
//       justify-content: center;
//       max-width: 500px;
//       margin: 0 auto;
//       padding-top: 30px;
//       row-gap: 20px;
//     }
//     .footer-content div:nth-child(2) {
//       grid-column: 1/3;
//       grid-row: 1/2;
//       button {
//         width: 100%;
//       }
//       input {
//         width: 100%;
//         margin-bottom: 20px;
//       }
//     }
//   }
// `;
export default Footer;
