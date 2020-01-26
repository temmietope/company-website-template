import React from "react";
import "./Navigation.css";
import Scrollspy from "react-scrollspy";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="brand-name">
        <a href="/#" className="link">
          <img src={require("../../assets/Doob-Logo.png")} alt="brandname" />
        </a>
      </div>
      <nav className="nav-links">
        <Scrollspy
          items={["header", "about", "portfolio", "blog", "contact"]}
          currentClassName="active"
        >
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
        </Scrollspy>
      </nav>
      <div className="others">
        <span>EN</span>
        <a href="#contact" className="link">
          <button>
            Contact Us <i className="fas fa-arrow-right fa-lg"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
