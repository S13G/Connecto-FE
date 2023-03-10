import React from "react";
import AirportInfo from "../component/AirportInfo";
import Booking from "../component/Booking";
import Footer from "../component/Footer";

import Hero from "../component/Hero";
import HomeDestinations from "../component/HomeDestinations";
import Tripad from "../component/Tripad";

function Home() {
  return (
    <>
      <Hero form={true} />
      <Tripad />
      <HomeDestinations main={true} />

      <Footer />
    </>
  );
}

export default Home;
