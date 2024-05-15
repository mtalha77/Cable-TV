import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import HeroSection from "../pages/HeroSection";
import HeroCommon from "../pages/HeroCommon";
import ServiceProvider from "../pages/ServiceProviders";
import "../styles/About.css";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
const AboutUs = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  return (
    <div>
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>About our company | ShopSatelliteTV</title>
        <meta
          name="description"
          content="Navigating the world of premium internet, satellite TV, cable TV, and phone services. Learn about us and make informed choices with Shop Satellite TV."
        />
        <meta name="slug" content="about-us" />
      </Helmet>

      {/* END POINT FOR SEO PURPOSE */}
      <HeroCommon
        heading={pageData?.AboutUs?.HeroCommon?.heading}
        description={pageData?.AboutUs?.HeroCommon?.description}
      />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
    </div>
  );
};

export default AboutUs;
