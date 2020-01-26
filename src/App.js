import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./Components/Services";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div className="app">
      <Home/>
      {/* <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/footer" component={Footer} />
      </Router> */}
    </div>
  );
}

export default App;
