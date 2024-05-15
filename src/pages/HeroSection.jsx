import React, { useState, useEffect } from "react";
import HeroBG from "../assests/hero-section-and-pre-footer-bg.jpg";
import "../styles/HeroSection.css";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action

const HeroSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [zipCode, setzipCode] = useState("");
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject = pageData?.Home?.hero_section?.image;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  // Log the pageData to verify if it's updating
  const handleClick = async () => {
    if (!zipCode) return;

    try {
      const res = await axios.post(`${apiUrl}`, {
        zipCode: zipCode,
      });

      dispatch(setZipCodeData(res.data));

      navigate(`/zipCode/${zipCode}`);
    } catch (error) {
      // show error on screen
      console.log(error);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="HeroSection">
      <div className="app-container">
        <div
          className="HeroContent"
          style={{
            backgroundImage: `url(${backgroundImageURL})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="title">{pageData?.Home?.hero_section?.title}</h2>
          <h2 className="subTitle">{pageData?.Home?.hero_section?.heading}</h2>
          <p>{pageData?.Home?.hero_section?.description}</p>
          <div className="searchBar">
            <input
              className="searchBar"
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setzipCode(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="btn-findnow" onClick={handleClick}>
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
