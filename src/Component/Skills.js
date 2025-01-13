import React from "react";
import Footbar from "./Footbar";
import "./s.css";


export default function  Skills(){
return(
  <div className="with-foot">
    <div class="main-container">
    <div class="heading">
      <h1 className="skills">Skills</h1>
      <p className="skill-para">Yes..it is seems like lots of stuffs..The reason behind this is my Computer Science Degree and my Curiosity about things...Both of them allowed me to explore new things..</p>
     
    </div>
    <div class="cards">
 
      {/* ------------------ */}
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="flex">
        <h2 class="cardtitle">Language</h2>       
        <ul class="card__list">
        <li>Java (....Oh my Love!)</li>
        <li>Python(...Hi friend)</li>
        <li>C(...Hello)</li>
        <li>Java script(...Hello)</li>
        </ul>
        <h2 class="cardtitle">Cyber Security </h2> 
        <ul class="card__list">
        <li>Networks(Basics)</li>
        <li>Deep Learning</li>
        <li>NLP</li></ul>
        </div>
      </div>
      {/* -------------------- */}
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="flex">
        <h2 class="cardtitle">Full Stack</h2>       
        <h2 class="cardtitle">Front End</h2>       
        <ul class="card__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>Figma</li>
        <li>React Js</li>
        </ul>
        <h2 class="cardtitle">Back End </h2> 
        <ul class="card__list">
        <li>MySql</li>
        <li>MangoDB</li>
        <li>Node Js</li></ul>
        </div>
      </div>
      {/* ------------- */}
      <div class="card card-1">
        <div class="card__icon"><i class="fas fa-bolt"></i></div>
        <p class="card__exit"><i class="fas fa-times"></i></p>
        <div class="flex">
        <h2 class="cardtitle">Machine Learning</h2>       
        <h2 class="cardtitle">Libraries</h2>      
        <ul class="card__list">
        <li>Scikit-learn</li>
        <li>Tensor flow</li>
        <li>Numpy,Pandas,Matplotlib</li>
        <li>NLTK</li>
        </ul>
        <h2 class="cardtitle">Deep Learning</h2> 
        <ul class="card__list">
        <li>Image Processing</li>
        <li>Natural Language Processing</li>
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