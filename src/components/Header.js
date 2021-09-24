import React from "react";
import "../App.css";
import Img2 from "../images/cart.png";
import Img3 from "../images/menu.png";
import Img4 from "../images/image1.png";
import {Link} from 'react-router-dom'

const Header = () => {
  const menutoggle = () => {
    var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";
    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
           <h1>LOGO</h1> 
          </div>
          <nav>
            <ul id="MenuItems" style={{padding:"1vw"}}>
            
              <li>
              <Link to="/admin" style={{background:"coral",color:"white",padding:"1.5rem",borderRadius:"25px"}}>Admin</Link>
            </li>
            </ul>
            <img src={Img2} width="30px" height="30px" alt="" />
            <img alt ="" src={Img3} className="menu-icon" onClick={menutoggle} />
          </nav>
        </div>
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Outfit <br /> A New Style !
            </h1>
            <p>
              Success isn't always about greatness. It's about consistency .
              consistent <br />
              hard work gains Success . Greatness will come.
            </p>
            <a href="www.google.com" className="btn">
              Explore Now &#10132;
            </a>
          </div>
          <div className="col-2">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
