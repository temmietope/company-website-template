import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer-brandname">DOOB</p>
      <h1>CREATIVITY ABOVE</h1>
      <nav className="nav-links">
        <a href="/#" className="link">
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
