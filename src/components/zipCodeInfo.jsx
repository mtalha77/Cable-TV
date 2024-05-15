import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/zipCodeInfo.css";
import CallIcon from "@mui/icons-material/Call";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DoneIcon from "@mui/icons-material/Done";
import HeroCommon from "../pages/HeroCommon";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useParams } from "react-router-dom";
function Tab(props) {
  return (
    <button
      className={`tab ${props.active ? "active" : ""}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

function ZipCodeInfo() {
  const apiUrl = process.env.REACT_APP_API_URL;

  const zipCodeInfo = useSelector((state) => state.zipCodeReducer.zipCodeData);
  const dispatch = useDispatch();
  const { zipCode } = useParams();

  const fetchZipCodeInfo = async () => {
    try {
      const res = await axios.post(`${apiUrl}`, {
        zipCode: zipCode,
      });
      dispatch(setZipCodeData(res.data));
    } catch (error) {}
  };
  useEffect(() => {
    fetchZipCodeInfo();

    return () => {
      setZipCodeData([]);
    };
  }, []);

  const getList = (obj) => {
    let arr = [];
    obj.Features.forEach((e) => {
      arr.push(
        <li>
          <DoneIcon />
          {e}
        </li>
      );
    });

    return arr;
  };

  const makeCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 50, // Adjust scroll position
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Create refs for each section
  const internetRef = useRef(null);
  const tvRef = useRef(null);
  const bundlesRef = useRef(null);

  const [activeTab, setActiveTab] = useState("Internet"); // Initialize the active tab state

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    scrollToRef(
      tab === "Internet" ? internetRef : tab === "TV" ? tvRef : bundlesRef
    );
  };

  useLayoutEffect(() => {
    if (activeTab === "Internet") {
      scrollToRef(internetRef);
    } else if (activeTab === "TV") {
      scrollToRef(tvRef);
    } else if (activeTab === "Bundles") {
      scrollToRef(bundlesRef);
    }
  }, [activeTab, internetRef, tvRef, bundlesRef]);

  function renderRatingStars(rating) {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<StarIcon key={`filled-${i}`} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOutlineIcon key={`empty-${i}`} />);
    }

    return stars;
  }
  return (
    <>
      <HeroCommon
        heading="Internet And Cable Providers In Your Area"
        description="Discover Available Cable TV, Internet, And Satellite Options Tailored To Your Area's Unique Needs."
      />
      <div className="custom-container">
        <div className="jump-to-links">
          <div className="jump">Jump To:</div>
          <Tab
            label="Internet"
            active={activeTab === "Internet"}
            onClick={() => handleTabClick("Internet")}
          />
          <Tab
            label="TV"
            active={activeTab === "TV"}
            onClick={() => handleTabClick("TV")}
          />
          <Tab
            label="Bundles"
            active={activeTab === "Bundles"}
            onClick={() => handleTabClick("Bundles")}
          />
        </div>

        {/* <hr className="rule--is-medium medium-12 small-10"></hr>
         */}
        {/* <hr className="rule--is-medium" /> */}

        <div>
          <div className="table-container">
            <div className="table-scroll-container">
              {activeTab === "Internet" && (
                <div>
                  <h2
                    className="ref"
                    ref={internetRef}
                    style={{ textAlign: "center" }}
                  >
                    Internet Provider
                  </h2>

                  <table
                    className="table table-striped w-auto table table-bordered"
                    ref={internetRef}
                  >
                    <thead className="head head-info">
                      <tr>
                        <th className="table-head" scope="col">
                          Provider
                        </th>
                        <th className="table-head" scope="col">
                          Prices starting at*
                        </th>
                        <th className="table-head" scope="col">
                          Max download speeds up to
                        </th>
                        <th className="table-head" scope="col">
                          Features
                        </th>
                        <th className="table-head" scope="col">
                          Customer Rating
                        </th>
                        <th className="table-head" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {zipCodeInfo &&
                        zipCodeInfo?.internetProviders.map((i) => {
                          return (
                            <tr>
                              <th className="img-col" scope="row">
                                <img
                                  src={`/companies/${i.CompanyName}.png`}
                                  alt="image"
                                />
                              </th>
                              <td className="table-data">${i.Price}/mo.</td>
                              <td className="table-data">
                                {i.MaxDownloadSpeedsUpTo}
                              </td>
                              <td className="table-data">
                                <ul>{getList(i)}</ul>
                              </td>
                              <td className="table-data">
                                {renderRatingStars(i.rating)}
                              </td>
                              {/* Render stars here */}
                              <td className="table-data">
                                <button
                                  className="Call-Now"
                                  onClick={() => makeCall("(866)236-3017")}
                                >
                                  <CallIcon /> (866)236-3017
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "TV" && (
                <div>
                  <h2
                    className="ref"
                    ref={tvRef}
                    style={{ textAlign: "center" }}
                  >
                    Tv Providers
                  </h2>

                  <table className="table table-striped w-auto table table-bordered">
                    <thead>
                      <tr>
                        <th className="table-head" scope="col">
                          Provider
                        </th>
                        <th className="table-head" scope="col">
                          Prices starting at*
                        </th>
                        <th className="table-head" scope="col">
                          Max download speeds up to
                        </th>
                        <th className="table-head" scope="col">
                          Features
                        </th>
                        <th className="table-head" scope="col">
                          Customer Rating
                        </th>
                        <th className="table-head" scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {zipCodeInfo &&
                        zipCodeInfo?.tvProviders.map((i) => {
                          return (
                            <tr>
                              <th className="img-col" scope="row">
                                <img
                                  src={`/companies/${i.CompanyName}.png`}
                                  alt="image"
                                />
                              </th>
                              <td className="table-data">${i["Price"]}/mo.</td>
                              <td className="table-data">{i.Channels}</td>
                              <td className="table-data">
                                <ul>{getList(i)}</ul>
                              </td>
                              <td className="table-data">
                                {renderRatingStars(i.rating)}
                              </td>
                              <td className="table-data">
                                <button
                                  className="Call-Now"
                                  onClick={() => makeCall("(866)236-3017")}
                                >
                                  <CallIcon /> (866)236-3017
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "Bundles" && (
                <div>
                  <h2
                    className="ref"
                    ref={bundlesRef}
                    style={{ textAlign: "center" }}
                  >
                    Bundles
                  </h2>

                  <table className="table table-striped w-auto table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Provider</th>
                        <th scope="col">Prices starting at*</th>
                        <th scope="col">Max download speeds up to</th>
                        <th scope="col">Features </th>
                        <th scope="col">Customer Rating</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {zipCodeInfo &&
                        zipCodeInfo?.bundles.map((i) => {
                          return (
                            <tr>
                              <th scope="row">
                                <img
                                  src={`/companies/${i.CompanyName}.png`}
                                  alt="image"
                                />
                              </th>
                              <td className="table-data">${i["Price"]}/mo.</td>
                              <td className="table-data">
                                {i.MaxDownloadSpeedsUpTo}
                              </td>
                              <td className="table-data">
                                <ul>{getList(i)}</ul>
                              </td>
                              <td className="table-data">
                                {renderRatingStars(i.rating)}
                              </td>
                              <td className="table-data">
                                <button
                                  className="Call-Now"
                                  onClick={() => makeCall("(866)236-3017")}
                                >
                                  <CallIcon /> (866)236-3017
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ZipCodeInfo;
