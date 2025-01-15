import React from "react";
import Navbar from "./Navbar";
import "./h.css";

import avatar from "../image/avataaars.png"
import github from "../image/github.svg"

import linkedin from "../image/linkedin.svg"
import mail from "../image/mail.svg"
import Timeline from "./Timeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home(){
  
    return(
        <>
        
        <div className="home-main-container">
        
        {/* ------------Hero Container------------- */}

        <div className="hero-container">
        <div className="intro">
               <h1 className="hello">Hello!...</h1>
               <h1 className="name">I'm Sandhiya</h1>
               <p className="cse">Cyber Security Enthusiast </p>
               <p className="intro-dia">Security Analyst @Cognizant</p>
               <p className="intro-dia">Who just fell in love with learning & Protecting Stuffs!  </p>
               <p className="intro-dia">OKTA | IAM | Cloud Security | Web App security</p>
               <p className="intro-dia"></p> 
               <div className="fontaw-icon" style={{ display: "flex" , flexDirection:"column", display:"block", gap: "1rem"}}>
      <a
        href="https://www.linkedin.com/in/sandhiya-kumar18/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" />
      </a>
  
    <a
      href="https://github.com/SandhiyaKumar-18"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" color="#333" />
    </a>
    <a href="mailto:ksandhiya484@gmail.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} size="2x" color="#D44638" />
      </a>
    </div>
        </div>
        <div className="avatar" >
            <img src={avatar}  alt ="nothing"></img>
        </div>
        </div>

        {/* --------------------------------------- */}
    <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
    <div class="bubble x11"></div>
    <div class="bubble x12"></div>
    <div class="bubble x13"></div>
    <div class="bubble x14"></div>
    <div class="bubble x15"></div>
    <div class="bubble x16"></div>
    <div class="bubble x17"></div>
    <div class="bubble x18"></div>
    <div class="bubble x19"></div>
    <div class="bubble x20"></div>
    <div class="bubble x21"></div>
    <div class="bubble x22"></div>
    <div class="bubble x23"></div>
    <div class="bubble x24"></div>
    <div class="bubble x25"></div>
</div>

{/* ===================================================================== */}


     <Timeline />


























        {/* -----------------About Me Section-------------- */}

        <div className="aboutme">
        <h1 className="about">About me</h1>
        <div className="full-para">
        <p className="about-para">
        I’m kind of person who’s love for learning is endless!! 
        </p>

        <p className="about-para">
        My journey began at Adhiparasakthi Engineering College, where I graduated with an 8.9 CGPA in Computer Science. 
        Those college days were more than just lectures and assignments – they shaped my passion for front end development and sparked a growing interest in machine learning. 
        </p>
        <p className="about-para">
        During this time, I developed Nutrition Analyzer, a project tailored for fitness enthusiasts, with valuable support from <h1 className="ibm">IBM</h1> The journey of building this project is a story in itself, as we adhered to industry standards and gained hands-on experience throughout the process. You can explore all the details in the Projects section of this site. 
        </p>

        <p className="about-para">
        In my third year, I joined <h3 className="ibm">Cognizant’s Digital Nurture Program,</h3>where I dove headfirst into the world of cybersecurity. After clearing multiple rounds (a mini adventure in itself), I became part of a program that spanned my entire sixth semester. I completed the training
        </p>

        <p className="about-para">
        Fast forward to today, after four months of internship and now 1.9 years of full-time experience, I’m thriving as a cybersecurity professional at Cognizant. Every day is a new challenge, a new opportunity to learn, and yes, a new reason to geek out about tech!
        </p>

        <p className="about-para">
        Wanted to be in touch  with me ..? buy me a coffee and come up with any new things that you tried..we will talk about that in hours!
        </p>
        </div>
        </div>

    {/* ---------------------------------------------------------------- */}


    {/* ------------------ Footer----------------------------------------- */}

       <div className="footer">
       <div className="items">
      
       {/* <a href="https://github.com/SandhiyaKumar-18"><img className="icon" src={github}  alt="img"  /></a>
        
          
          <img className="icon" src={linkedin}  alt="IMG"></img>
          <img className="icon" src={mail}  alt="img"></img> */}
          </div>  
       </div>

    {/* -------------------------------------------------------------------- */}

  







    {/* ------------------------------------------------------------------- */}
        
    </div>
        
     
    </>     
       
    )

}
