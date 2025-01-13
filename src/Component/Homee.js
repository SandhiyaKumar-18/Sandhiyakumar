import React from "react";
import Navbar from "./Navbar";
import "./h.css";

import avatar from "../image/avataaars.png"
import github from "../image/github.svg"

import linkedin from "../image/linkedin.svg"
import mail from "../image/mail.svg"

export default function Home(){
  
    return(
        <>
        
        <div className="home-main-container">
        
        {/* ------------Hero Container------------- */}

        <div className="hero-container">
        <div className="intro">
               <h1 className="hello">Hello!...</h1>
               <h1 className="name">I'm Sandhiya</h1>
               <p className="cse">Computer Science Engineering</p>
               <p className="intro-dia">Who just fall in love with learning & Creating Stuffs!  </p>
               <p className="intro-dia"></p> 
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


        {/* -----------------About Me Section-------------- */}

        <div className="aboutme">
        <h1 className="about">About me</h1>
        <div className="full-para">
        <p className="about-para">
        I’m Sandhiya K,Studying Engineering in Computer science
        Talking About persnolity,I’m kind of girl who always love to learn and experiment with new things.
        </p>

        <p className="about-para">
        Always trying to be creative and perfect with new things that I learn!
        To me learning new things and trying to be perfect in that makes so much joy!..
        Now I’m fall in love with Full stack Development and Machine learning..
        </p>
        <p className="about-para">
        Wanted to be in touch  with me ..? buy me a coffee and come up with any new things that you tried..we will talk about that in hours!
        </p>

        <p className="about-para">
        I’m Sandhiya K,Studying Engineering in Computer science
        Talking About persnolity,I’m kind of girl who always love to learn and experiment with new things.
        </p>

        <p className="about-para">
        Always trying to be creative and perfect with new things that I learn!
        To me learning new things and trying to be perfect in that makes so much joy!..
        Now I’m fall in love with Full stack Development and Machine learning..
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
          <img className="icon" src={github}  alt="img"  ></img>
          <img className="icon" src={linkedin}  alt="IMG"></img>
          <img className="icon" src={mail}  alt="img"></img>
          </div>  
       </div>

    {/* -------------------------------------------------------------------- */}

  







    {/* ------------------------------------------------------------------- */}
        
    </div>
        
     
    </>     
       
    )

}
