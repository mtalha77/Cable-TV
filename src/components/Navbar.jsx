import React, { useState } from "react";
import logo from "../assests/header-Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const servicesOptions = [
  "Cable Tv",
  "Cable Internet",
  "Satellite Tv",
  "Satellite Internet",
];

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [zipCode, setzipCode] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleSearch = async () => {
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
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setzipCode(""); // Clear the search bar after search
    }
  };

  return (
    <div className="app-container">
      <div className="Navbar">
        <Link to="/">
          <div className="leftSide">
            <img className="ImgLogo" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/aboutus"> About Us</Link>
          <div className="dropdown">
            <button className="dropbtn">
              <Link to="/services"> Services</Link>
            </button>
            <div className="dropdown-content">
              {servicesOptions.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.replace(" ", "-").toLowerCase()}`}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/serviceproviders"> Service Providers</Link>
          <Link to="/contactus"> Contact Us</Link>
          <>
            <input
              className="header-searchBar"
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setzipCode(e.target.value)}
              onKeyDown={handleKeyDown} // Call the handleKeyPress function on key press
            />

            {/* </div> */}
            {/* <div className="btn"> */}
            {/* <button className="btn-findnow" onClick={handleClick}>
                            Find Now
            </button> */}
          </>
        </div>
        <button className="menu-button" onClick={toggleSidebar}>
          ☰ Menu
        </button>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <button className="close-button" onClick={toggleSidebar}>
              ×
            </button>
          </div>
          <div className="sidebar-content">
            {/* {/ Links /} */}
            <Link to="/"> Home </Link>
            <Link to="/aboutus"> About Us</Link>
            <Link to="/services"> Services</Link>
            {/* <div className="dropdown">
              <button className="dropbtn">
                <Link to="/services"> Services</Link>
              </button>
              <div className="dropdown-content">
                {servicesOptions.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.replace(" ", "-").toLowerCase()}`}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div> */}

            <Link to="/serviceproviders"> Service Providers</Link>
            <Link to="/contactus"> Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
