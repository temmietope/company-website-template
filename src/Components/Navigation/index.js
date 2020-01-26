import React from "react";
// import { NavLink } from "react-router-dom";
import "./Navigation.css";
import Scrollspy from "react-scrollspy";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="brand-name">
        <img src={require("../../assets/Doob-Logo.png")} alt="brandname" />
      </div>
      <nav className="nav-links">
        <Scrollspy
          items={["about", "portfolio", "blog", "contact"]}
          currentClassName="active"
        >
          <a href="#" className="link">Home.</a>
          <a href="#about" className="link">About us.</a>
          <a href="#portfolio" className="link">Portfolio.</a>
          <a href="#blog" className="link">Blog.</a>
          <a href="#contact" className="link">Contact us.</a>

          {/* <NavLink to="/" activeClassName="active" className="link"> */}
          {/* Home. */}
          {/* </NavLink> */}
          {/* <NavLink to="/about" activeClassName="active" className="link"> */}
          {/* About us. */}
          {/* </NavLink> */}
          {/* <NavLink to="/portfolio" activeClassName="active" className="link"> */}
          {/* Portfolio. */}
          {/* </NavLink> */}
          {/* <NavLink to="/blog" activeClassName="active" className="link"> */}
          {/* Blog. */}
          {/* </NavLink> */}
          {/* <NavLink to="/contact" activeClassName="active" className="link"> */}
          {/* Contact us. */}
          {/* </NavLink> */}
        </Scrollspy>
      </nav>
      <div className="others">
        <span>EN</span>
        <button>
          Contact Us <i className="fas fa-arrow-right fa-lg"></i>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
