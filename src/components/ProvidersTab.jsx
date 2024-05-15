import React, { useState, useEffect } from "react";
import HeroCommon from "../pages/HeroCommon";
import "../styles/ProvidersTab.css";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
const ProvidersTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [zipCode, setzipCode] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const pageData = useSelector((state) => state.pages.pageData);
  // Access dispatch function to dispatch actions

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);
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
    <div className="Service-Providers">
      <HeroCommon
        heading={pageData?.ServiceProviders?.HeroCommon?.heading}
        description={pageData?.ServiceProviders?.HeroCommon?.description}
      />
      <div className="CheckProviders">
        <h2 className="title">{pageData?.Home?.hero_section?.title}</h2>
        <h2 className="heading">{pageData?.Home?.hero_section?.heading}</h2>
        <p>{pageData?.Home?.hero_section?.description}</p>
        <div className="searchBar">
          <input
            className="searchBar"
            type="text"
            placeholder="Enter Zip Code"
            onChange={(e) => setzipCode(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn-findnow" onClick={handleClick}>
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvidersTab;
