import React from "react";
import "./services.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="service-container">
        <div className="service_header">
          <img
            src="https://static.wixstatic.com/media/1525cd_663c38c007e24e38932fbd8483b2d94f~mv2.jpg/v1/fill/w_1899,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1525cd_663c38c007e24e38932fbd8483b2d94f~mv2.jpg"
            alt="service"
          />
        </div>
        <div className="service-heading">
          <h1>Our Services</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
