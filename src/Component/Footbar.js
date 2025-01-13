import React from "react";

import avatar from "../image/avataaars.png"
import github from "../image/github.svg"

import linkedin from "../image/linkedin.svg"
import mail from "../image/mail.svg"
export default function Footbar(){
    return(
        <div className="footbar">
             <div className="footer">
       <div className="items">
          <img className="icon" src={github}  alt="img"  ></img>
          <img className="icon" src={linkedin}  alt="IMG"></img>
          <img className="icon" src={mail}  alt="img"></img>
          </div>  
       </div>
        </div>
    )
}