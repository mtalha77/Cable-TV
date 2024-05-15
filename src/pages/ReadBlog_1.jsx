import React, { useEffect } from "react";
import ProvidersCommon from "./ProvidersCommon";
import HeroCommon from "./HeroCommon";
import HeroSection from "./HeroSection";
import "../styles/CableTv.css";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch

const ReadBlog_1 = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject = pageData?.Home?.blog_card_1?.image;
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
    <div className="CableTv">
      <HeroCommon
        heading={pageData?.Home?.blog_card_1?.heading}
        description={pageData?.Home?.blog_card_1?.description}
      />
      <ProvidersCommon
      
        // imageSrc= {backgroundImageURL}
        heading={pageData?.Home?.blog_card_1?.heading}
        description={
          <div className="describe" style={blogContentStyle}>
            {pageData?.FullBlog_1?.description}
          </div>
        }
      />
      <HeroSection />
    </div>
  );
};

export default ReadBlog_1;
