import React from "react";
import Footbar from "./Footbar";
import "./s.css";


export default function  Skills(){
return(
  <div className="with-foot">
    <div class="main-container">
    <div class="heading">
      <h1 className="skills">Skills</h1>
      <p className="skill-para">Atomic skills, built one step at a time, lead to mastery. Small, consistent improvements today shape the expert of tomorrow.</p>
     
    </div>
    <div class="cards">
 
      {/* ------------------ */}
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="flex">
        <h2 class="cardtitle"> Work Space Experience</h2>       
        <ul class="card__list">
        <li>OKTA</li>
        <li>IAM </li>
        <li>Active directory</li>
        <li>Linux</li>
        <li>Cyber Ark</li>
        <li> CA Site Minder</li>
        <li>Java</li>
        <li>Kettle Scripts</li>
        <li>Python</li>
        <li>SQL</li>
        <li>Access Governance</li>
        <li> Compilance</li>
        <li>Identity Mangement</li>
        </ul>
       </div>
      </div>
      {/* -------------------- */}
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="flex">
        <h2 class="cardtitle">Cloud Security</h2>       
        <h2 class="cardtitle">Azure</h2>       
        <ul class="card__list">
        <li>Sentinel, Defender</li>
        <li>Virtual Machine security, AKS, Key vault etc.</li>
        </ul>
        <h2 class="cardtitle">GCP </h2> 
        <ul class="card__list">
        <li>Armor</li>
        <li>Service accounts, IAM ploicies</li>
        <li>APP engine,Compute Engine,VPC etc,.</li></ul>
        </div>
      </div>
      {/* ------------- */}
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="flex">
        <h2 class="cardtitle">Web Security (Learning)</h2>            
        <ul class="card__list">
        <li>OWASP Top 10</li>
        <li>Burp Suite</li>
        <li>Nmap, Meta spoilt, Wireshark</li>
        <li>Splunk</li>
        <li>NIST</li>
        <li>Vulnerability Mangement</li>
        <li>Windows, Linux</li>
        <li>Java Script</li>
        <li>Secure coding</li>
        <li>Networking Fundamentals</li>
        </ul>
      
        </div>
      </div>
      {/* ----------------- */}
    
       </div>
      
     </div>
     <Footbar/>
     </div>
  
)
    

}