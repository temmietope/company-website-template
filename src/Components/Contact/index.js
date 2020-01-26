import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <p>CONTACT US</p>
      <h1>Get in Touch</h1>
      <form>
        <div className="input-section">
          <input type="email" placeholder="Your email" />
          <input type="text" placeholder="Subject" />
          <textarea rows="3" placeholder="Message here..." />
        </div>
        <div className="submit-section">
          <button>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
