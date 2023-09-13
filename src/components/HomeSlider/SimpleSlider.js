import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../Assets/h-slider-img1.jpg";
import img2 from "../../Assets/Truck-Transportation-Service.jpg";
import img3 from "../../Assets/part-load-truck-transport-service-1000x1000.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
const sliderdata =[
  {
    image:"img1",
    title:"Supply Chain Solutions",

  },
  {
    image:"img2",
    title:"Supply Chain Solutions",

  },
  {
    image:"img3",
    title:"Supply Chain Solutions",

  },
]
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
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
              <button>Read more...</button>
            </div>
          </div>
          <div className=" slider1">
            <img
              src={img2}
              alt="slider2"
              style={{ height: "60vh", width: "99vw" }}
            />
            <div className="slider-content">
              <h4 style={{ color: "black" }}>Helping Businesses Reach Their Goals</h4>
              <button>Read more...</button>
            </div>
          </div>
          <div className="slider1">
            <img
              src={img3}
              alt=""
              style={{ height: "60vh", width: "99vw", color: "black" }}
            />
            <div className="slider-content">
              <h4 style={{ color: "black" }}>Industry Leading Expertise</h4>
              <button>Read more...</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
