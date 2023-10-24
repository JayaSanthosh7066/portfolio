import React from "react";
import "./header.css";
const about = () => {
  return (
    <div id="main">
      <h1>My Projects</h1>
      <div id="row">
        <div className="col">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*6uJgYvJ3ZyIzy0fUlQ20vg.png"
            className="image"
          ></img>
          <h1 className="head">
            <p>Project Name:</p>
            <a href="">Wishlist</a>
          </h1>
        </div>
        <div className="col">
          <img
            src="https://images.yourstory.com/cs/2/dc9aa1302d6c11e9aa979329348d4c3e/WCC2SplashScreen1920X1080211-1599058754576.jpg"
            className="image"
          ></img>
          <h1 className="head">
            <p>Project Name:</p>
            <a href="">Cricket</a>
          </h1>
        </div>
        <div className="col">
          <img
            src="https://play-lh.googleusercontent.com/aeLzzmIFeBXkKdNWQACSRxJ9eG_XnaAU_fsRlo3Ti9rYh3yutQmjqUnTcB_ECfO0mAk"
            className="image"
          ></img>
          <h1 className="head">
            <p>Project Name:</p>
            <a href="">Uno</a>
          </h1>
        </div>
        <div className="col">
          <img
            src="https://static-prod-web.miniclip.com/assets/games/8bp/02_PageThumbnail/MN_8BP_PageThumbnail.jpg"
            className="image"
          ></img>
          <h1 className="head">
            <p>Project Name:</p>
            <a href="">8 Ball Pool</a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default about;
