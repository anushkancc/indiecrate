import React from "react";
import founderImage from "../assets/anu.jpeg";

import "../css/AboutPage.css";

export default function FounderSection() {
  return (
    <section className="founder-section">
      <div className="founder-content">
        <div className="founder-image">
          <img src={founderImage} alt="Founder" />

        </div>
        <div className="founder-text">
          <h2>Meet the Founder</h2>
          <p>
            Hi, I'm <strong>Anushka Anchal</strong> - the heart behind <em>IndieCrate</em>.  
            This platform was born from my love for local art and handcrafted stories.  
            I believe every handmade piece carries not just beauty but also the soul of its creator.
          </p>
          <p>
            My mission is simple: give artisans the platform they deserve and help
            their craft reach homes across the world. Thank you for being part of this journey.
          </p>
        </div>
      </div>
    </section>
  );
}
