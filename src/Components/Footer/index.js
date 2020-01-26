import React from "react";
// import { NavLink } from "react-router-dom";
import Scrollspy from "react-scrollspy";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer-brandname">DOOB</p>
      <h1>CREATIVITY ABOVE</h1>
      <nav className="nav-links">
        <Scrollspy
          items={["about", "portfolio", "blog", "contact"]}
          currentClassName="active"
        >
          <a href="#" className="link">
            Home.
          </a>
          <a href="#about" className="link">
            About us.
          </a>
          <a href="#portfolio" className="link">
            Portfolio.
          </a>
          <a href="#blog" className="link">
            Blog.
          </a>
          <a href="#contact" className="link">
            Contact us.
          </a>
        </Scrollspy>
        {/* <NavLink to="/" activeClassName="active" className="link">
          Home.
        </NavLink>
        <NavLink to="/about" activeClassName="active" className="link">
          About us.
        </NavLink>
        <NavLink to="/portfolio" activeClassName="active" className="link">
          Portfolio.
        </NavLink>
        <NavLink to="/blog" activeClassName="active" className="link">
          Blog.
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="link">
          Contact us.
        </NavLink> */}
      </nav>
      <small>
        &copy; {new Date().getFullYear()} - Doob, All Right Reserved
      </small>
      <p className="social-media-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-dribbble"></i>
      </p>
    </footer>
  );
};

export default Footer;
