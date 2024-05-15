import React from "react";
import HeroBG from "../assests/hero-section-and-pre-footer-bg.jpg";
import "../styles/About.css";

const About = ({ heading }) => {
  return (
    <div className="HeroSection">
      <div className="app-container">
        <div
          className="HeroContent"
          style={{
            backgroundImage: `url(${HeroBG})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="heading">{heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
