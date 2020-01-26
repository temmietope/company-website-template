import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const work_images = [
    require("../../assets/Ilustration 1.png"),
    require("../../assets/Vector Smart Object2.png"),
    require("../../assets/Ilustration 1.png"),
    require("../../assets/Vector Smart Object2.png"),
    require("../../assets/Ilustration 1.png"),
    require("../../assets/Vector Smart Object2.png")
  ];
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h1>See some of our Creative work.</h1>
        <span className="arrows">
          <i className="fas fa-arrow-left small-icon" />
          <i className="fas fa-arrow-right long-icon" />
        </span>
      </div>
      <div className="work-image">
        {work_images.map((image, index) => {
          return (
            <div className="image" key={index}>
              <img src={image} alt="work_image" loading="lazy" />
            </div>
          );
        })}
      </div>
      <div className="see-more">
        <span>See More of These.</span>
      </div>
    </div>
  );
};

export default Portfolio;
