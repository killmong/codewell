// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../header/Header";
import HeroSection from "../heroSection/HeroSection";
import Feature from "../features/Feature";
import Agents from "../agents/Agent";
import Feedback from "../feedback/Feedback";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <section>
        <img
          src="/src/assets/heroBackground.svg"
          className="absolute top-0 right-0"
          alt=""
        />
        <HeroSection />
      </section>

      <Feature />
      <Agents />
      <Feedback />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
