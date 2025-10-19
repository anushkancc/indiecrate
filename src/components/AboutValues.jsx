import React from "react";
import "../css/AboutPage.css";

const values = [
  { icon: "🌿", title: "Eco-Friendly", text: "We prioritize sustainable and ethical practices." },
  { icon: "👐", title: "Community", text: "Supporting local artisans is at the heart of what we do." },
  { icon: "🎨", title: "Authenticity", text: "Each product is unique and tells a story." },
  { icon: "✨", title: "Craftsmanship", text: "We celebrate handmade excellence." },
];

const AboutValues = () => {
  return (
    <section className="about-values">
      {values.map((val, idx) => (
        <div className="value-card" key={idx}>
          <span>{val.icon}</span>
          <h3>{val.title}</h3>
          <p>{val.text}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutValues;
