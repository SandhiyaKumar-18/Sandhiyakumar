import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homee from "./Homee";
import Skills from "./Skills";
import Project from "./P";
// import "./Nav.css";
import "./TempNav.css"
import certification from "./Certification";

import image from "../image/Vector.svg"
import skills from "./Skills";



// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//   };

  // =======chat gpt 
  const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate(); // For programmatic navigation
  
    const toggleMobileMenu = () => {
      setIsMobile(!isMobile);
    };
  
    const handleNavigation = (path) => {
      setIsMobile(false); // Close mobile menu if open
      navigate(path); // Navigate to the desired path
    };



  return (
    <nav className="navbar">
      <img className="logo" src={image} alt="Logo" />

           {/* Desktop Menu */}
           <ul className="nav-links">
           <li onClick={() => handleNavigation("/sandhiyakumar")} className="hover-underline-animation"></li>
        <li onClick={() => handleNavigation("/")} className="hover-underline-animation">Home</li>
       
        <li onClick={() => handleNavigation("/skills")}className="hover-underline-animation">Skills</li>
        <li onClick={() => handleNavigation("/project")}className="hover-underline-animation">Projects</li>
        <li onClick={() => handleNavigation("/certification")}className="hover-underline-animation">Certification</li>
        <li onClick={() => handleNavigation("/certification")}className="hover-underline-animation">Awards</li> 
      </ul>

      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>

      {isMobile && (
        <ul className="nav-links-mobile">
        <li onClick={() => handleNavigation("/sandhiyakumar")}></li>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/skills")}>Skills</li>
          <li onClick={() => handleNavigation("/project")}>Projects</li>
          <li onClick={() => handleNavigation("/certification")}>Certification</li>
        </ul>
      )}
    </nav>







    // ====================== Deleted ======================================
    // <nav className="navbar">
    //  <img className="logo" src={image} alt ="no" ></img>
    //  {/* <div className="list-nav"> */}
    //  <div className="ul">
      
    //   <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
    //     <li className="hover-underline-animation"><a href ="/" style={{ textDecoration: 'none' }} className="aclass">Ho</a></li>
    //     <li className="hover-underline-animation"><a href ="https://sandhiyakumar-18.github.io/Homee" style={{ textDecoration: 'none' }} className="aclass">Home</a></li>
    //     <li className="hover-underline-animation"><a href="/Skills" style={{ textDecoration: 'none' }}className="aclass">Skills</a></li>
    //     <li className="hover-underline-animation"><a href="https://sandhiyakumar-18.github.io/Skills" style={{ textDecoration: 'none' }}className="aclass">Skills</a></li>
    //     <li className="hover-underline-animation"><a href="/Project" style={{ textDecoration: 'none'}}className="aclass">Projects</a></li>
    //     <li className="hover-underline-animation"><a href="#contact" style={{ textDecoration: 'none' }}className="aclass">Certifications</a></li>
    //     <li> <Link to="/skills">Skills</Link> </li>
    //   </ul>
    //   </div>

    // <Router basename="/">
    // <div className="header">
    // {/* <img className="header-logo" src={image} alt ="no" ></img> */}
    // {/* <img className="hambug"  src={hambug} alt = "hambug"></img> */}
    // </div>
    // <div className="routes">
    // <Routes>
    // <Route path="/Sandhiyakumar" element={<Homee />} />
    // <Route path="/" element={<Homee />} />
    // <Route path="/skills" element={<Skills />} />
    // {/* <Route path="/contact" element={<Contact />} />                                                                                                                                          ` */} 
    // {/* <Route path="/blogs" element={<Blogs />} />  */}
    // <Route path="/project" element={<Project />} />     
    // </Routes>
    // </div>
    // </Router> 
    
    //   {/* </div> */}
    //   <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
    //     {isMobile ? <FaTimes /> : <FaBars />}
    //   </button>

    // </nav>



// ===================================================================================================




















  );
};

export default Navbar;
