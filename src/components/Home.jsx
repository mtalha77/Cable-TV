import React, { useState, useEffect } from "react";
import MainSection from "../assests/main-hero-sec-home.jpg";
import "../styles/Home.css";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import ServiceProvider from "../pages/ServiceProviders";
import HeroSection from "../pages/HeroSection";
import BlogArticles from "../pages/BlogArticles";
import ServiceSlider from "../pages/ServiceSlider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import Home_Background from '../assests/website-background.jpg'
function Home() {
  const navigate = useNavigate();
  const [zipCode, setzipCode] = useState("");

  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject = pageData?.Home?.main_section?.MainBG;
  const backgroundImageURL = backgroundImageObject || "Loading...";

  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  const handleClick = async () => {
    if (!zipCode) return;

    navigate(`/zipCode/${zipCode}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="app-container">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>
          Find The Best Cable TV & Internet Providers Near You | ShopSatelliteTV
        </title>
        <meta
          name="description"
          content=" Discover top Cable TV and Internet providers in your area with ShopSatelliteTV. Compare plans, prices, and packages to find the best deals near you."
        />
        <meta name="slug" content="" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}

      <div
        className="mainSection"
        style={{
          background: `url(${Home_Background})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mainContent">
          <h2 className="title">
            {pageData?.Home?.main_section?.title || "Loading..."}
          </h2>
          <h2 className="subTitle">
            {pageData?.Home?.main_section?.subtitle || "Loading..."}
          </h2>
          <p>{pageData?.Home?.main_section?.main_content || "Loading..."}</p>
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
      <ServiceSlider />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
      <BlogArticles />
    </div>
  );
}

export default Home;
