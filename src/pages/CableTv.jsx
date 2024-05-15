import React, { useEffect } from "react";
import ProvidersCommon from "./ProvidersCommon";
import CableTvImg from "../assests/cable-tv.png";
import HeroCommon from "./HeroCommon?";
import HeroSection from "./HeroSection";
import "../styles/CableTv.css";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import Cable_Blog from '../assests/cable-blog.png'

const CableTv = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject = pageData?.CableTv_Section?.CableTv?.image;
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
    <div className="CableTv?">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title> Cable TV Providers Near Your Area | ShopSatelliteTV</title>
        <meta
          name="description"
          content=" Unlock a world of entertainment with leading cable TV providers. Choose from a diverse range of channels and shows for an immersive viewing experience"
        />
        <meta name="slug" content="cable-tv-providers" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}

      <HeroCommon
        heading={pageData?.CableTv_Section?.HeroCommon?.heading}
        description={pageData?.CableTv_Section?.HeroCommon?.description}
      />
      <ProvidersCommon
        imageSrc={Cable_Blog}
        title={pageData?.CableTv_Section?.CableTv?.title}
        
        heading={pageData?.CableTv_Section?.CableTv?.heading}
        description={
          <div className="describe" style={blogContentStyle}>
            {pageData?.CableTv_Section?.CableTv?.description}
          </div>
        }
      />
      <HeroSection />
    </div>
  );
};

export default CableTv;
