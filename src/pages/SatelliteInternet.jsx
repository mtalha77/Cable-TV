import React, { useEffect } from "react";
import HeroCommon from "./HeroCommon";
import SatelliteInternetImg from "../assests/satellite-int.png";
import ProvidersCommon from "./ProvidersCommon";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import Satellite_Internet_Blog from '../assests/satellite-internet-blog.png'
const SatelliteInternet = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject =
    pageData?.SatelliteInternet_Section?.SatelliteInternet?.image;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  const blogContentStyle = {
    // whiteSpace: "pre-line",
  };
  return (
    <div className="SatelliteInternet">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>
          Satellite Internet Providers Near Your Area | ShopSatelliteTV
        </title>
        <meta
          name="description"
          content="Connect to the world with leading satellite internet providers. Experience high-speed connectivity wherever you are, bridging the digital divide."
        />
        <meta name="slug" content="satellite-internet-providers" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}
      <HeroCommon
        heading={pageData?.SatelliteInternet_Section?.HeroCommon?.heading}
        description={
          pageData?.SatelliteInternet_Section?.HeroCommon?.description
        }
      />
      <ProvidersCommon
        imageSrc={Satellite_Internet_Blog}
        title={pageData?.SatelliteInternet_Section?.SatelliteInternet?.title}
        heading={
          pageData?.SatelliteInternet_Section?.SatelliteInternet?.heading
        }
        description={
          <div className="describe" style={blogContentStyle}>
            {
              pageData?.SatelliteInternet_Section?.SatelliteInternet
                ?.description
            }
          </div>
        }
      />
      <HeroSection />
    </div>
  );
};

export default SatelliteInternet;
