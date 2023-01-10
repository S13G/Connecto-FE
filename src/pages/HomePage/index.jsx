import React from "react";
import Footer from "../../component/Footer";
import Hero from "../../component/Hero";
import HomeDestinations from "../../component/HomeDestinations";
import Tripad from "../../component/Tripad";

function Home() {
  return (
    <>
      <Hero />
      <Tripad />
      <HomeDestinations main={true} />

      <Footer />
    </>
  );
}

export default Home;
