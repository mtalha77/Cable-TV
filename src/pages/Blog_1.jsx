import React, { useEffect } from "react";
import ProvidersCommon from "./ProvidersCommon";
import HeroCommon from "./HeroCommon";
import HeroSection from "./HeroSection";
import "../styles/CableTv.css";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch

const Blog_1 = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject = pageData?.Home?.blog_card_1?.image;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  return (
    <div className="CableTv">
      <HeroCommon heading="Card 1" description="Description" />
      <ProvidersCommon
        imageSrc={backgroundImageURL}
        image={pageData?.Home?.blog_card_1?.image}
        heading={pageData?.Home?.blog_card_1?.heading}
        description={pageData?.Home?.blog_card_1?.description}
      />
      <HeroSection />
    </div>
  );
};

export default Blog_1;
