import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../Assets/h-slider-img1.webp";
import img2 from "../../Assets/1525cd_e9d06c76d7714705bfb90f3f2498d339~mv2.webp";
import img3 from "../../Assets/1525cd_4aaf1bf70d474666b1ab7dc14839dd86~mv2.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slider_container">
        <Slider {...settings} className="slider-container">
          <div className="slider1">
            <img
              src={img1}
              alt="slider1"
              style={{ height: "60vh", width: "99vw" }}
            />
            <div className="slider-content">
              <h4>Supply Chain Solutions</h4>
              <button>Read more</button>
            </div>
          </div>
          <div className=" slider1">
            <img
              src={img2}
              alt="slider2"
              style={{ height: "60vh", width: "99vw" }}
            />
            <div className="slider-content">
              <h4>Supply Chain Solutions</h4>
              <button>Read more</button>
            </div>
          </div>
          <div className="slider1">
            <img src={img3} alt="" style={{ height: "60vh", width: "99vw" }} />
            <div className="slider-content">
              <h4>Supply Chain Solutions</h4>
              <button>Read more</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
