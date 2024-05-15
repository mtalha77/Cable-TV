import React, { useEffect } from "react";
import SatelliteTvImg from "../assests/satellite-tv.png";
import ProvidersCommon from "./ProvidersCommon";
import HeroCommon from "./HeroCommon";
import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import Satellite_Blog from '../assests/satellite-tv-blog.png'
const SatelliteTv = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject =
    pageData?.SatelliteTv_Section?.SatelliteTv?.image;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  const blogContentStyle = {
    whiteSpace: "pre-line",
  };
  return (
    <div className="SatelliteTv">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title> Satellite TV Providers Near Your Area | ShopSatelliteTV</title>
        <meta
          name="description"
          content=" Embark on a journey of unparalleled television entertainment with top satellite TV providers. Explore a galaxy of channels and shows from the comfort of your home."
        />
        <meta name="slug" content="satellite-tv-providers" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}
      <HeroCommon
        heading={pageData?.SatelliteTv_Section?.HeroCommon?.heading}
        description={pageData?.SatelliteTv_Section?.HeroCommon?.description}
      />
      <ProvidersCommon
        imageSrc={Satellite_Blog}
        title={pageData?.SatelliteTv_Section?.SatelliteTv?.title}
        heading={pageData?.SatelliteTv_Section?.SatelliteTv?.heading}
        description={
          <div className="describe" style={blogContentStyle}>
            {pageData?.SatelliteTv_Section?.SatelliteTv?.description}
          </div>
        }
      />
      <HeroSection />
    </div>
  );
};

export default SatelliteTv;
