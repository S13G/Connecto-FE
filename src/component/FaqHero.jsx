import React from "react";
import styled from "styled-components";
import Book from "./Book";
import Navbar from "./Navbar";
import image from "../images/hero.jpeg";
import { FaChevronRight, FaSearch } from "react-icons/fa";
import Footer from "./Footer";
function FaqHero() {
  return (
    <>
      <Wrapper>
        <section className='hero-section'>
          <div className='img-container'>
            <div className='gradient'></div>
            <img src={image} alt='' />
          </div>
          <div className='faqhero-container'>
            <Navbar />
            <div className='faqhero-contents'>
              <h1>help & support</h1>
              <h4>Find an answer to anything you need in our knowledge base</h4>
              <div className='faq-inputs'>
                <input type='text' placeholder="what's your question?" />
                <button>
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
          <div className='faq-section'>
            <div className='faq-categories'>
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
      </Wrapper>
      <Footer />
    </>
  );
}
const Wrapper = styled.section`
  .faqhero-contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    justify-content: center;
    color: #fff;
    margin: 60px 0;
    margin-bottom: 130px;
    h1 {
      font-size: 3.5rem;
      font-weight: bolder;
      margin-bottom: 0;
      text-transform: capitalize;
    }
    h4 {
      font-weight: 300;
      font-size: 1.3rem;
      margin: 15px 0;
    }
  }
  .faq-inputs input,
  .faq-inputs button {
    border-radius: 5px;
    padding: 16px 15px;
    text-transform: capitalize;
    border: 1px solid #ccc;
    width: 250px;
    margin-right: 30px;
    font-size: 0.9rem;
  }
  .faq-inputs button {
    width: 120px;
    margin: 0;
    background-color: var(--border-color);
    border: 1px solid var(--border-color);
    color: #fff;
  }
  .faq-section {
    padding: 0 30px;
    margin-bottom: 60px;
  }
  .faq-categories {
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 25px 50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    background-color: #fff;
    border-radius: 30px;
    column-gap: 30px;
  }
  .faq-categories div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #2d303c;
    padding-bottom: 20px;
    border-bottom: 1px solid #e4e1e1cc;
    svg {
      color: #a5a3a3;
    }
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 2rem;
      text-align: center;
    }
    h4 {
      text-align: center;
      font-size: 1rem;
    }
    .faqhero-contents {
      max-width: 350px;
      margin: 20px auto;
    }
    .faq-inputs {
      display: flex;
    }
    input,
    button {
      width: 100%;
    }
    .faq-categories {
      grid-template-columns: unset;
      padding: 10px 20px;
    }
    .faq-categories div {
      column-gap: 10px;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 0.9rem;
    }
    .faqhero-contents {
      max-width: 250px;
    }
    .faq-inputs {
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      justify-content: center;
      input {
        width: 100%;
        margin: 0;
      }
      button {
        width: 100%;
        margin: 0;
      }
    }
  }
`;
export default FaqHero;
