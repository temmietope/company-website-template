import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-div" id="about">
      <div className="about-image">
        <img
          src={require("../../assets/Ilustration 1.png")}
          alt="illustration"
        />
      </div>
      <div className="about-us">
        <h6 className="about-company">OUR COMPANY</h6>
        <h3 className="about-header">
          Some Fine
          Words About Us
        </h3>
        <p className="about-summary">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <span className="arrows">
          <i className="fas fa-arrow-left small-icon" />
          <i className="fas fa-arrow-right long-icon" />
        </span>
      </div>
    </div>
  );
};

export default About;
