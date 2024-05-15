import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import "./App.css";
import "./App.css";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ProvidersTab from "./components/ProvidersTab";
import ContatctUs from "./components/ContatctUs";
import CableInternet from "./pages/CableInternet";
import SatelliteInternet from "./pages/SatelliteInternet";
import SatelliteTv from "./pages/SatelliteTv";
import CableTv from "./pages/CableTv";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ZipCodeInfo from "./components/zipCodeInfo";
import Blog_1 from "./pages/Blog_1";
import Blog_2 from "./pages/Blog_2";
import PopupCard from "./pages/PopUpCard";
import Modal from "react-modal"; // Import react-modal
import ReadBlog_1 from "./pages/ReadBlog_1";
import ReadBlog_2 from "./pages/ReadBlog_2";
import ReadBlog_3 from "./pages/ReadBlog_3";
import AllBlogs from "./pages/AllBlogs";
Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <PopupCard />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog_1" element={<ReadBlog_1 />} />
        <Route path="/blog_2" element={<ReadBlog_2 />} />
        <Route path="/blog_3" element={<ReadBlog_3 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/serviceproviders" element={<ProvidersTab />} />
        <Route path="/aboutus/serviceproviders" element={<ProvidersTab />} />
        <Route path="/contactus" element={<ContatctUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="blog/cabletv" element={<Blog_1 />} />
        <Route path="blog/satellitetv" element={<Blog_2 />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/blog_1" element={<ReadBlog_1 />} />
        <Route path="/blogs/blog_2" element={<ReadBlog_2 />} />
        <Route path="/blogs/blog_3" element={<ReadBlog_3 />} />
        <Route
          path="services/satellite-internet"
          element={<SatelliteInternet />}
        />
        <Route path="services/cable-internet" element={<CableInternet />} />
        <Route path="services/cable-tv" element={<CableTv />} />
        <Route path="services/satellite-tv" element={<SatelliteTv />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/zipCode/:zipCode" element={<ZipCodeInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
