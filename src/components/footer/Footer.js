import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="col1">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <hr />
          </ul>
        </div>
        <div className="col2">
          <ul>
            <li>
              <NavLink to="/quotation">Quotation</NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <hr />
          </ul>
        </div>
      </div>

      <div className="footer_bottom">
        <p>© Copyright 2023. All Rights Reserved. American Logistics</p>
      </div>
    </>
  );
};

export default Footer;
