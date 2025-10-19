import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutStory from "../components/AboutStory";
import AboutValues from "../components/AboutValues";
import AboutGallery from "../components/AboutGallery";
import FounderSection from "../components/FounderSection";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutGallery />
      <FounderSection />
      <Footer />
    </>
  );
};

export default AboutPage;
