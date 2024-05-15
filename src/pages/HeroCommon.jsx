import React from "react";
import HeroBG from "../assests/hero-section-and-pre-footer-bg.jpg";
import "../styles/HeroCommon.css";

const HeroCommon = ({ heading, description }) => {
  return (
    <div className="HeroCommon">
      <div className="app-container">
        <div
          className="HeroBackground"
          style={{
            backgroundImage: `url(${HeroBG})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="heading">{heading}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCommon;
