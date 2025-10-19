import React from "react";
import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import PromiseSection from "../components/PromiseSection";
import ProductSection from "../components/Products";
import Footer from "../components/Footer";
import WhyIndieCrate from "../components/WhyIndieCrate";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
      <WhyIndieCrate/>
      <PromiseSection />
      <Footer />
    </>
  );
};

export default HomePage;
