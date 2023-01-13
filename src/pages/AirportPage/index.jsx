import React from "react";
import Hero from "../../component/Hero";
import Tripad from "../../component/Tripad";
import AirportInfo from "../../component/AirportInfo";
import Booking from "../../component/Booking";
import Footer from "../../component/Footer";

function AirportPage() {
  return (
    <>
      <Hero form={true} />
      <Tripad />
      <AirportInfo />
      <Booking />
      <Footer />
    </>
  );
}

export default AirportPage;
