import React, { useRef } from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import Services from "../Services";
import About from "../About";
import Portfolio from "../Portfolio";
import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer";
import "./Home.css";

const Home = () => {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="home">
      <Navigation />
      <Header />
      <Services id="services" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Blog id="blog" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
