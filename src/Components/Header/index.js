import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-text">
        <h1>The Spirit of Digital Agency.</h1>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos nesciunt.
        </p>
        <span className="more">
          <button>More About Us</button>
          <span>Get in Touch.</span>
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
