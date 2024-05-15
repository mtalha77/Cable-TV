import React, { useEffect } from "react";
import ServiceSlider from "../pages/ServiceSlider";
import HeroSection from "../pages/HeroSection";
import HeroCommon from "../pages/HeroCommon";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
const Services = () => {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pages.pageData);
  // Access dispatch function to dispatch actions

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);
  return (
    <div className="services">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title> Services | ShopSatelliteTV</title>
        <meta
          name="description"
          content=" Discover unparalleled internet, satellite TV, cable TV, and phone services through Shop Satellite TV. Transforming your connectivity and entertainment options."
        />
        <meta name="slug" content="services" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}

      <HeroCommon
        heading={pageData?.Services?.HeroCommon?.heading}
        description={pageData?.Services?.HeroCommon?.description}
      />
      <ServiceSlider />
      <HeroSection />
    </div>
  );
};

export default Services;
