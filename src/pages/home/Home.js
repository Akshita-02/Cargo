import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import SimpleSlider from "../../components/HomeSlider/SimpleSlider";

// import Slider from "react-slick";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="slide">
        <SimpleSlider />
      </div>
      <div className="news">
        <div className="news-top">
          <h3>Global Supply Chain News</h3>
          <span class="web_link">
            <Link to="https://www.freightwaves.com">Freightwaves.com</Link>
          </span>
        </div>
        <div className="news_section">
          <iframe
            class="wuksD5"
            title="Embedded Content"
            name="htmlComp-iframe"
            width="100%"
            height="100%"
            data-src=""
            src="https://www.freightwaves.com/"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
