import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Header = () => {
  return (
    <>
      <div className="top_header">
        <a href="tel:+19874561234">
          <i className="fa fa-phone"></i> +880 1521205892
        </a>
        <p className="m-0">Get 50% off on Selected Menu | Shop Now</p>
        <div className="top_header_flex">
          <select name="lang">
            <option value="eng">Eng</option>
            <option value="saab">Bangla</option>
          </select>

          <select name="location">
            <option value="Location">Location</option>
            <option value="us">Bangladesh</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
