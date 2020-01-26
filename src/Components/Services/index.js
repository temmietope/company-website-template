import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <section className="header">
        <h2>Anything you need, we've got you covered</h2>
        <a href="#contact" className="link">
          <button>Get in Touch</button>
        </a>
      </section>
      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Web & Graphic Design</h4>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </section>
      <section className="app-dev">
        <img
          src={require("../../assets/Vector Smart Object4.png")}
          alt="icon"
        />
        <h4>Web & App Development</h4>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </section>
    </div>
  );
};

export default Services;
