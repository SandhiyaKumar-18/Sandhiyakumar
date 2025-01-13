import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "./Nav.css";
import "./TempNav.css"
import Homee from "./Homee"
import image from "../image/Vector.svg"
import Skills from "./Skills";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
     <img className="logo" src={image} alt ="no" ></img>
     {/* <div className="list-nav"> */}
     <div className="ul">
      
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li className="hover-underline-animation"><a href ="/" style={{ textDecoration: 'none' }} className="aclass">Ho</a></li>
        <li className="hover-underline-animation"><a href ="/Homee" style={{ textDecoration: 'none' }} className="aclass">Home</a></li>
        <li className="hover-underline-animation"><a href="/Skills" style={{ textDecoration: 'none' }}className="aclass">Skills</a></li>
        <li className="hover-underline-animation"><a href="https://sandhiyakumar-18.github.io/Skills" style={{ textDecoration: 'none' }}className="aclass">Skills</a></li>
        <li className="hover-underline-animation"><a href="/Project" style={{ textDecoration: 'none'}}className="aclass">Projects</a></li>
        <li className="hover-underline-animation"><a href="#contact" style={{ textDecoration: 'none' }}className="aclass">Certifications</a></li>
      </ul>
      </div>
    
      {/* </div> */}
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>

    </nav>
  );
};

export default Navbar;
