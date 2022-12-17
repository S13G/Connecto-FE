import React from "react";
import image from "../images/partner.jpeg";
function PartnerpageHero() {
  return (
    <section className='partnerpage-hero'>
      <img src={image} alt='' />
      <div className='partnerpage-container'>
        <div>
          <h1>Come On Board and Start Receiving Transfers With Connecto</h1>
          <p>
            Connecto gives you the best transfers you can get on the market. Say
            goodbye to empty miles and get ready to be constantly rewarded. Come
            aboard today!
          </p>
          <form>
            <input type='email' placeholder='your email address' />
            <button type='submit'>
              <a href='#'>get started</a>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PartnerpageHero;
