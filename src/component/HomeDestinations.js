import React from "react";
import styled from "styled-components";
import SingleDestination from "./SingleDestination";
import { Link } from "react-router-dom";
import Booking from "./Booking";
import Destinations from "./Destinations";
function HomeDestinations({ main }) {
  return (
    <>
      <Wrapper>
        <section className='home-destination'>
          <div className='home-destination-container'>
            {main && <h2>anywhere your mind takes you</h2>}
            {main && (
              <h4>go beyond regular service when driving with connecto!</h4>
            )}

            <Destinations className='home-destinations' />
            {main && (
              <button>
                <Link to='/destinations'>see all destinations</Link>
              </button>
            )}
          </div>
        </section>
      </Wrapper>
      {main && <Booking />}
    </>
  );
}

const Wrapper = styled.section`
  .home-destination-container {
    margin: 0 auto;
    max-width: var(--max-width);
    background-color: #fff;
    border-radius: 30px;
    padding: 0 40px;
    padding-top: 1px;
    h2,
    h4 {
      text-transform: capitalize;
      text-align: center;
    }
    h2 {
      font-size: 2.5rem;
      color: #1a1919;
      font-weight: 900;
    }
    h4 {
      color: #555;
      margin-top: 0;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-radius: 8px;
      border: 0;
      margin: 50px auto;
      background-color: var(--border-color);
      a {
        color: #fff;
        text-transform: capitalize;
      }
    }
  }
  .home-destinations {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  .home-destination .img-container a {
    color: #fff;
    font-weight: 600;
  }
  .home-destinations div:first-child {
    grid-column: 1/3;
  }
  .home-destinations div:nth-child(2) {
    grid-column: 3/5;
  }
  .home-destinations div:nth-child(3) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  .home-destinations div:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
  .home-destinations div:nth-child(5) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .home-destinations div:nth-child(6) {
    grid-column: 4/5;
    grid-row: 2/3;
  }

  @media (max-width: 937px) {
    .home-destination-container {
      max-width: 600px;
      margin: 0px auto;
    }
  }
`;
export default HomeDestinations;
