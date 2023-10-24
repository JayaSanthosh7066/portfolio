import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div id="header">
      <h1 id="h1">
        Port<span>Folio</span>
      </h1>
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Header;
