import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-text" id="header">
        <h1>The Spirit of Digital Agency.</h1>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos nesciunt.
        </p>
        <span className="more">
          <a href="#about" className="link">
            <button>More About Us</button>
          </a>
          <a href="#contact" className="link">
            <span>Get in Touch.</span>
          </a>
        </span>
      </div>
      <div className="header-image">
        <img
          src={require("../../assets/Vector Smart Object2.png")}
          alt="illustration"
        />
      </div>
    </header>
  );
};

export default Header;
