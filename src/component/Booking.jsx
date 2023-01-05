import React from "react";
import image1 from "../images/transfer.png";
import image2 from "../images/driver.png";
import image3 from "../images/vacation.png";
import Video from "./Video";
function Booking() {
  return (
    <>
      <div className='booking-process container'>
        <h2>simple booking process</h2>
        <h4>a service designed with simplicity in Mind</h4>
        <div className='bookings'>
          <div className='single-booking'>
            <img src={image1} alt='book your transfers' />
            <h3>
              <span>1</span> book your transfers
            </h3>
            <p>
              Using our intuitive online booking system you can book your
              transfer from the comfort of your home, in a matter of minutes!
            </p>
          </div>
          <div className='single-booking'>
            <img src={image2} alt='book your transfers' />
            <h3>
              <span>2</span> meet your driver
            </h3>
            <p>
              On the day of your transfer, your driver will be waiting for you
              at the pick-up spot you specified.
            </p>
          </div>
          <div className='single-booking'>
            <img src={image3} alt='book your transfers' />
            <h3>
              <span>3</span> enjoy your vacation
            </h3>
            <p>
              Your driver drops you off at desired location and brings you right
              at the start of your vacation.
            </p>
          </div>
        </div>
      </div>
      <Video />
    </>
  );
}

export default Booking;
