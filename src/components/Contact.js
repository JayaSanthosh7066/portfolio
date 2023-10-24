import React from "react";
import "./header.css";
const Contact = () => {
  return (
    <div>
      <h1 className="heady">Contact me</h1>
      <div id="contact-box">
        <input type="name" placeholder="Your Name" />
        <input type="emial" placeholder="Your Email" />
        <textarea rows={7} cols={2} placeholder="Write Something" />
      </div>
      <button id="butto">Submit</button>
    </div>
  );
};

export default Contact;
