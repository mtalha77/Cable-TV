import React, { useEffect } from "react";
import FooterLogo from "../assests/footer-logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "../assests/facebook-app-symbol.png";
import TwitterIcon from "../assests/twitter.png";
import YoutubeIcon from "../assests/youtube.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
const Footer = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  const makeCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleLinkClick = () => {
    // Scroll to the top of the page when a link is clicked
    window.scrollTo(0, 0);
  };
  return (
    <div className="Footer">
      <div className="app-container">
        <div className="row">
          <div className="col-3">
            <div className="FooterContent">
              <div className="footer-logo">
                <img src={FooterLogo} alt="" />
              </div>
              <div className="footer-text">
                <p>{pageData?.Home?.Footer?.footer_text}</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Important Links</h2>
              <ul className="list-items">
                <li className="list-item">
                  <Link to="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/aboutus" onClick={handleLinkClick}>
                    About
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/services" onClick={handleLinkClick}>
                    Services
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/blogs" onClick={handleLinkClick}>
                    Blogs
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/contactus" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Services</h2>
              <ul className="list-items">
                <li className="list-item">
                  <Link to="serviceproviders" onClick={handleLinkClick}>
                    Service Provider
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/services/cable-tv" onClick={handleLinkClick}>
                    Cable Tv
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/services/cable-internet" onClick={handleLinkClick}>
                    Cable Internet
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/services/satellite-tv" onClick={handleLinkClick}>
                    Satellite Tv
                  </Link>
                </li>
                <li className="list-item">
                  <Link
                    to="/services/satellite-internet"
                    onClick={handleLinkClick}
                  >
                    Satellite Internet
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Contact Us</h2>
              <ul className="list-items">
                <li
                  className="list-item"
                  onClick={() => makeCall("(866)236-3017")}
                >
                  <CallIcon /> (855) 843-7329
                </li>
                <li className="list-item">
                  <MailIcon /> support@shopsatellitetv.com
                </li>
                <li className="list-item">
                  <LocationOnIcon />
                  <hr />
                  Jamal Prime Inc 2759 Delk Road , SUITE 1620, Marietta, GA,
                  30067, USA.
                </li>
              </ul>
              <div className="SocialIcons">
                <Link
                  to="https://www.facebook.com/shopsatellitetv/"
                  target="_blank"
                >
                  <img src={FacebookIcon} alt="FacebookIcon" />
                </Link>
                <Link to="https://twitter.com/shopsatellite2v" target="_blank">
                  <img src={TwitterIcon} alt="TwitterIcon" />
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCVNIBxwfJH8HeiOR8-uP66g"
                  target="_blank"
                >
                  <img src={YoutubeIcon} alt="YoutubeIcon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="postFooter">
          <h2>
            © 2023 Shop Satellite Tv. All rights reserved By Jamal Prime Inc.
          </h2>
          <p className="privacy-policy">
            <Link to="/privacy-policy">PRIVACY POLICY</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
