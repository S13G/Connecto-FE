import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { TbArrowsRightLeft } from "react-icons/tb";
import { VscCalendar } from "react-icons/vsc";
import styles from "./book.module.scss";
function Book() {
  const [typingFrom, setTypingFrom] = useState(false);
  const [typingTo, setTypingTo] = useState(false);
  return (
    // <Wrapper>
    <section className={styles["book-section"]}>
      <div className={styles["book-container"]}>
        <button className={styles["btn-active"]}>with return</button>
        <button>one way</button>
        <form className={styles["book-form"]}>
          <div className={styles["from-cont"]}>
            <MdLocationPin />
            <input
              type="text"
              className={styles["from"]}
              placeholder="from"
              onKeyUp={() => {
                setTypingFrom(true);
                setTypingTo(false);
              }}
            />
            <ul
              className={`${typingFrom ? "options show-option " : "options "}`}
              onClick={() => setTypingFrom(false)}
            >
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
            </ul>
          </div>
          <TbArrowsRightLeft />
          <div className={styles["from-cont"]}>
            <MdLocationPin />
            <input
              type="text"
              className={styles["to"]}
              placeholder="to"
              onKeyUp={() => {
                setTypingTo(true);
                setTypingFrom(false);
              }}
            />
            <ul
              className={`${
                typingTo
                  ? "options optionTo  show-option "
                  : "options optionTo "
              }`}
              onClick={() => {
                setTypingTo(false);
              }}
            >
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
              <li className={styles["option"]}>
                {" "}
                <MdLocationPin /> Portugal
              </li>
            </ul>
          </div>
          <div className={styles["departure-cont"]}>
            <div className={styles["from-cont"]}>
              <VscCalendar />
              <input
                type="date"
                className={styles["departure"]}
                placeholder="departure"
              />
            </div>

            <div className="from-cont">
              <input
                type="date"
                className={styles["return"]}
                placeholder="return"
              />
            </div>
          </div>
          <div className={styles["people-cont"]}>
            <div className={styles["from-cont"]}>
              <AiOutlineMinus className={styles["count"]} />
              <FaRegUser />
              <input
                type="text"
                readOnly
                className={styles["people"]}
                value="5"
              />
              <AiOutlinePlus className={styles["count"]} />
            </div>
            <button type="submit" className={styles["from-cont"]}>
              see prices
            </button>
          </div>
        </form>
      </div>
    </section>
    // </Wrapper>
  );
}
// const Wrapper = styled.section`
//   .book-section {
//     position: relative;
//   }
//   .book-container {
//     position: relative;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }
//   .book-container button {
//     background-color: transparent;
//     padding: 10px 15px;
//     border: 0;
//     color: #fff;
//     border-radius: 10px 10px 0px 0;
//     text-transform: capitalize;
//   }
//   .book-container .btn-active {
//     background-color: #fff;
//     color: #175af5;
//   }
//   .book-form > svg {
//     color: #ccc;
//     font-weight: 800;
//     font-size: 1.6rem;
//   }
//   .book-form {
//     display: flex;
//     background-color: #fff;
//     align-items: center;
//     justify-content: space-around;
//     column-gap: 10px;
//     padding: 20px 10px;
//     border-top-right-radius: 5px;
//   }
//   .departure-cont {
//     display: flex;
//     width: 300px;
//     /* background-color: red; */
//     align-items: center;
//     justify-content: center;
//   }
//   .departure-cont .from-cont {
//     width: 50%;
//     border-radius: 0;

//     input {
//       width: 100%;
//       border: 0;
//     }
//   }
//   .departure-cont .from-cont:first-child {
//     border-right: 0;
//     border-radius: 5px 0px 0px 5px;
//   }
//   .departure-cont .from-cont:nth-child(2) {
//     border-radius: 0px 5px 5px 0px;
//   }
//   .from-cont {
//     border: 1px solid #ccc;
//     padding: 0 5px;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 5px;
//   }
//   .from-cont input {
//     height: 100%;
//     width: 100%;
//     margin: 0;
//     border: 0;
//     background-color: transparent;
//     text-transform: capitalize;
//     outline: none;
//   }
//   .from-cont svg {
//     font-size: 1.5rem;
//     color: #ccc;
//     margin-right: 5px;
//   }
//   .from-cont .count {
//     color: #000;
//     font-size: 0.8rem;
//     margin: 0 5px;
//   }
//   .people-cont > button {
//     background-color: #175af5;
//     border-radius: 7px;
//     color: #fff;
//     width: 100%;
//     &:hover {
//       background-color: #4e7ff1;
//       transition: 0.5s ease-in-out;
//     }
//   }
//   .from-cont .people {
//     width: 30px;
//     font-size: 1.2rem;
//     color: #555;
//     margin: 0 5px;
//   }
//   .people-cont {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     column-gap: 30px;
//   }
//   .options {
//     position: absolute;
//     /* bottom: 0; */
//     top: 100px;
//     left: 15px;
//     width: 50%;

//     border-radius: 5px;
//     border: 1px solid #ccc;
//     background-color: white;
//     display: none;
//   }
//   .option {
//     padding: 10px 15px;
//     font-size: 1rem;
//     display: flex;
//     align-items: center;
//   }
//   .optionTo {
//     left: unset;
//   }
//   .option:hover {
//     background-color: #175af5;
//     transition: 0.1s ease-in;
//   }
//   .show-option {
//     display: block;
//   }
//   @media (max-width: 937px) {
//     .departure-cont {
//       width: 100%;
//       margin-top: 20px;
//     }

//     .people-cont {
//       width: 100%;
//       column-gap: 10px;
//       margin-top: 20px;
//     }
//     .book-container {
//       max-width: 600px;
//     }
//   }
// `;

export default Book;
