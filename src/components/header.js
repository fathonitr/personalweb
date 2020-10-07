import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="head">
        <div className="icon">FATHONI RACHMATULLAH</div>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <li>WORKS</li>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
