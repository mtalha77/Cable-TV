import React, { useEffect, useRef } from "react";
import "../styles/Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { fetchPageData } from "../actions/pagesActions";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
// import ServiceBG from "../assests/service-sec-bg.png";
import ServiceBG from "../assests/service-sec-bg.png";
import CableTv from '../assests/cable-tv.png'
import SatelliteInt from '../assests/satellite-int.png'
import CableInt from '../assests/cable-int.png'
import SatelliteTv from '../assests/satellite-tv.png'




const Slide = ({ image, title, description, linkTo }) => {
  
  return (
    <div className="slide">
      <div
        className="slide-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="slide-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {
          <Link to={linkTo}>
            <button>Learn More</button>
          </Link>
        }
      </div>
    </div>
  );
};

const ServiceSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Function to automatically move to the next slide
    const autoSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    // Start auto-sliding every 3 seconds
    const interval = setInterval(autoSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const isMobile = window.innerWidth < 768;

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Show only 1 slide if isMobile is true, else show 3 slides
    slidesToScroll: 1,
  };
  const pageData = useSelector((state) => state.pages.pageData);
  // const backgroundImageObject = pageData?.Home?.service_cabletv_slider?.image;
  // const backgroundImageURL = backgroundImageObject || "Loading...";

  // const CableInternetImgObject =
  //   pageData?.Home?.service_cableinternet_slider?.image;
  // const CableInternetImgURL = CableInternetImgObject || "Loading...";

  // const SatelliteTVImgObject =
  //   pageData?.Home?.service_satellitetv_slider?.image;
  // const SatelliteTVImgURL = SatelliteTVImgObject || "Loading...";

  // const SatelliteInternetImgObject =
  //   pageData?.Home?.service_satelliteinternet_slider?.image;
  // const SatelliteInternetImgURL = SatelliteInternetImgObject || "Loading...";

  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);
  return (
    <div className="Services">
      {isMobile ? (
        <div>
          <div className="app-container">
            <div className="heroContent">
              <h2 className="heading">
                {pageData?.Home?.services?.heading || "Loading..."}
              </h2>
              <h2 className="title">
                {pageData?.Home?.services?.title || "Loading..."}
              </h2>
              <p>{pageData?.Home?.services?.description || "Loading..."}</p>
            </div>
            <div className="slide-container">
              <Link to="services/cable-tv">
                <Slide
                  image={CableTv}
                  title={pageData?.Home?.service_cabletv_slider?.title}
                  description={
                    pageData?.Home?.service_cabletv_slider?.description
                  }
                  linkTo="services/cable-tv"
                />
              </Link>
              <Link to="services/cable-internet">
                <Slide
                  image={CableInt}
                  title={pageData?.Home?.service_cableinternet_slider?.title}
                  description={
                    pageData?.Home?.service_cableinternet_slider?.description
                  }
                  linkTo="services/cable-internet"
                />
              </Link>
              <Link to="services/satellite-tv">
                <Slide
                  image={SatelliteTv}
                  title="Satellite Tv"
                  description={
                    pageData?.Home?.service_satellitetv_slider?.description
                  }
                  linkTo="services/satellite-tv"
                />
              </Link>
              <Link to="services/satellite-internet">
                <Slide
                  image={SatelliteInt}
                  title={
                    pageData?.Home?.service_satelliteinternet_slider?.title
                  }
                  description={
                    pageData?.Home?.service_satelliteinternet_slider
                      ?.description
                  }
                  linkTo="services/satellite-internet"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="Services">
          <div
            className="service-bg-img"
            style={{
              background: `url(${ServiceBG})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="app-container">
              <div className="heroContent">
                <h2 className="heading">
                  {pageData?.Home?.services?.heading || "Loading..."}
                </h2>
                <h2 className="title">
                  {pageData?.Home?.services?.title || "Loading..."}
                </h2>
                <p>{pageData?.Home?.services?.description || "Loading..."}</p>
              </div>
              <div className="slider-app-container">
                <Slider {...sliderSettings} ref={sliderRef}>
                  <Link to="services/cable-tv">
                    <Slide
                      image={CableTv}
                      title={pageData?.Home?.service_cabletv_slider?.title}
                      description={
                        pageData?.Home?.service_cabletv_slider?.description
                      }
                      linkTo="services/cable-tv"
                    />
                  </Link>
                  <Link to="services/cable-internet">
                    <Slide
                      image={CableInt}
                      title={
                        pageData?.Home?.service_cableinternet_slider?.title
                      }
                      description={
                        pageData?.Home?.service_cableinternet_slider
                          ?.description
                      }
                      linkTo="services/cable-internet"
                    />
                  </Link>
                  <Link to="services/satellite-tv">
                    <Slide
                      image={SatelliteTv}
                      title="Satellite Tv"
                      description={
                        pageData?.Home?.service_satellitetv_slider?.description
                      }
                      linkTo="services/satellite-tv"
                    />
                  </Link>
                  <Link to="services/satellite-internet">
                    <Slide
                      image={SatelliteInt}
                      title={
                        pageData?.Home?.service_satelliteinternet_slider?.title
                      }
                      description={
                        pageData?.Home?.service_satelliteinternet_slider
                          ?.description
                      }
                      linkTo="services/satellite-internet"
                    />
                  </Link>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceSlider;
