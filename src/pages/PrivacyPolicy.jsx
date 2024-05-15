import React, { useEffect } from "react";
import "../styles/PrivacyPolicy.css";
import HeroCommon from "./HeroCommon";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
const PrivacyPolicy = () => {
  const pageData = useSelector((state) => state.pages.pageData);
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
    <div className="PrivacyPolicy">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title> Privacy Policy | ShopSatelliteTV</title>
        <meta
          name="description"
          content="Explore our Privacy Policy to learn how we protect your data and ensure your online privacy. Your trust matters to us."
        />
        <meta name="slug" content="privacy-policy" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}

      <HeroCommon
        heading={pageData?.PrivacyPolicy?.HeroCommon?.heading}
        description={pageData?.PrivacyPolicy?.HeroCommon?.description}
      />
      <div className="Content-PrivacyPolicy">
        <h2 className="title">
          {pageData?.PrivacyPolicy?.Content_PrivacyPolicy?.title}
        </h2>
        <h2 className="heading">
          {pageData?.PrivacyPolicy?.Content_PrivacyPolicy?.heading}
        </h2>
        <div style={blogContentStyle}>
          <p>{pageData?.PrivacyPolicy?.Content_PrivacyPolicy?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
