import React, { useEffect,useState } from "react";
import "../styles/ServiceProvider.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
const ServiceProvider = () => {
  const pageData = useSelector((state) => state.pages.pageData);
 
  const backgroundImageObject = pageData?.Home?.checkservicesproviders?.image;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchPageData());
  }, [dispatch]);



  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Function to check if an element is in the viewport
    const isInViewport = (elem) => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Handler function to check if the component is in view
    const handleScroll = () => {
      const element = document.getElementById('serviceProviderSection');
      if (isInViewport(element)) {
        setInView(true);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




 // Reference for the component



  

 


// code addded by ahsan for circular responsive bar 
useEffect(() => {
  const number = document.getElementById("number");
  let counter = 0;
  const interval = setInterval(() => {
    if (counter === 90) {
      clearInterval(interval);
    } else {
      counter += 1;
      number.innerHTML = counter + "+";
    }
  }, 20);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  const number = document.getElementById("number-350");
  let counter = 0;
  const interval = setInterval(() => {
    if (counter === 350) {
      clearInterval(interval);
    } else {
      counter += 1;
      number.innerHTML = counter +'+';
    }
  }, 5);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="ServiceProviderSection" id="serviceProviderSection">
    
      {/* START POINT FOR SEO PURPOSE */}
      {/* <Helmet>
        <title> Service Providers | ShopSatelliteTV</title>
        <meta
          name="description"
          content=" Explore the list of best internet, satellite TV, cable TV, and phone service providers with Shop Satellite TV. Elevate your entertainment and connectivity experience."
        />
        <meta name="slug" content="service-providers" />
      </Helmet> */}
      {/* END POINT FOR SEO PURPOSE */}
      <div className="AboutContent-provider">
        <div className="leftSide-provider">
          <h2 className="title-service-provider">
            {pageData?.Home?.checkservicesproviders?.title}
          </h2>
          <h2 className="heading-service-provider">
            {pageData?.Home?.checkservicesproviders?.heading}
          </h2>
          <p className="SatelliteSectionDesc-provider">
            {pageData?.Home?.checkservicesproviders?.description}
          </p>
          <div className="figures-provider">
          <div className="skill">
                <div className="outer">
                  <div className="inner">
                    <div id="number-4k">4k</div>
                  </div>
                </div>
              <p className="figures1-provider-p2">Ultra HD Quality</p>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
  <stop offset="100%" stopColor="#2196f3" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
            </div>
            <div className="skill" >
                <div className="outer">
                  <div className="inner">
                    <div id="number">0</div>
                  </div>
                </div>
                <p className="figures1-provider-p2">Online Channels</p>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
  <stop offset="100%" stopColor="#2196f3" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
 </div>





              
           
 <div className="skill" >
                <div className="outer">
                  <div className="inner">
                    <div id="number-350">0</div>
                  </div>
                </div>
                <p className="figures1-provider-p2">Internet Speed</p>
                
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
  <stop offset="100%" stopColor="#2196f3" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
 </div>
          </div>
          <div className="btn btn-provider">
            <Link to="serviceproviders">
              <button className="CheckNow">Check Now</button>
            </Link>
          </div>
        </div>
        <div className="rightSide">
          {/* <div className="Counter">
            <p>UP TO </p>
            <h1>40 MB</h1>
            <h2>PER Second</h2>
          </div> */}
          <div className="serviceimg">
            <img src={backgroundImageURL} alt="" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ServiceProvider;
