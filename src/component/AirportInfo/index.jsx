import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import styles from "./airportInfo.module.scss";
import { Link } from "react-router-dom";

function AirportInfo() {
  return (
    <div className={styles["faq-section"]}>
      <div className={styles["faq-categories"]}>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>

          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
        <div>
          <div className={styles["left-info"]}>
            <h4>
              Split Airport <BsArrowRight /> Split
            </h4>
            <p>
              Price From <span>EUR 30.90</span>
            </p>
          </div>
          <Link to="/transport">
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

// const Wrapper = styled.section`
//   .faq-section {
//     padding: 0 30px;
//     margin-bottom: 60px;
//   }
//   .faq-categories {
//     margin: 0 auto;
//     max-width: var(--max-width);
//     padding: 25px 50px;
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     align-items: center;

//     background-color: #fff;
//     border-radius: 30px;
//     column-gap: 30px;
//   }
//   .faq-categories > div {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     color: #2d303c;
//     padding-bottom: 20px;
//     margin-bottom: 10px;
//     border-bottom: 1px solid #e4e1e1cc;
//     box-shadow: 0px 0px 20px #ccc;
//     padding: 10px 15px;
//     border-radius: 10px;
//     svg {
//       color: #a5a3a3;
//     }
//   }
//   .left-info h4 svg {
//     font-size: 1.2rem;
//     margin: 0 15px;
//   }
//   .left-info h4 {
//     margin: 10px 0;
//     display: flex;
//     align-items: center;
//     font-weight: 400;
//   }
//   .left-info p {
//     margin: 5px 0;
//     font-size: 0.95rem;
//   }
//   .left-info span {
//     color: #1919c0;
//     font-weight: 600;
//   }
//   @media (max-width: 930px) {
//     .faq-categories {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default AirportInfo;
