import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <div className="cross-btn">
              <AiOutlineCloseCircle />
            </div>
          ) : (
            <div className="hamburger-btn">
              <FaBars />
            </div>
          )}
        </div>
        <div className="logo">
          <img src={logo} alt="img" />
        </div>
        <div className="pages">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/quotation">Quotation</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
