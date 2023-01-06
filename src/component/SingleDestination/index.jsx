import React from "react";
import { FaChevronRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../images/destination.jpeg";
import styles from "./singleDestination.module.scss";
function SingleDestination() {
  return (
    <>
      <div className={styles["img-container"]}>
        <div className={styles["img-gradient"]}>
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
// const Wrapper = styled.div`
//   .img-container img {
//     width: 100%;
//     border-radius: 20px;
//     height: 100%;
//   }
//   .img-container {
//     height: 300px;
//     position: relative;
//   }
//   h3 {
//     text-transform: capitalize;
//     margin-bottom: 0;
//   }
//   p:nth-child(3) {
//     color: var(--border-color);
//   }
//   p {
//     margin: 10px 0;
//   }
//   svg {
//     color: var(--border-color);
//   }
//   p span {
//     color: #b1aeae;
//     margin-left: 10px;
//   }
//   .img-gradient {
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     column-gap: 5px;
//     background-color: rgba(0, 0, 0, 0.6);
//     border-radius: 20px;
//     color: #fff;

//     opacity: 0;
//     h5,
//     a {
//       font-weight: 100;
//       font-size: 1.1rem;
//     }
//     svg {
//       color: #fff;
//       margin: 0;
//     }
//   }
//   @media (hover: hover) {
//     .img-container:hover {
//       .img-gradient {
//         opacity: 1;
//         transition: 0.5s ease-in-out;
//       }
//     }
//   }
// `;
export default SingleDestination;
