import React from "react";
import "./Certification.css"
import Footbar from "./Footbar";
import gcp from "../image/gcp.png"

export default function Certification(){
    return(
    <div className="certification">
     <p className="titile">Google cloud Assosiate </p>
     <p className="expiry">Expiry Date Oct 2023 - Oct 2027</p>
     <p className="expiry">Issued by : Google <a href="https://www.credly.com/badges/b9706339-0a94-41a4-9d59-5fd360e0b6d6">[click Here]</a></p>
     <div className="cert-box">
     <div className="gcp-part1">
     <img className="gcp-image" src={gcp}/>
     </div>
     <div className="gcp-part2">
     <p className="typewriter" >Skills Earned </p>
     <ul className="cert-ul">
       <li className="cert-li">Compute Engine</li>
       <li className="cert-li">App Engine</li>
       <li className="cert-li">VPC</li>
       <li className="cert-li">Service Accounts</li>
       <li className="cert-li">Virtual Machines</li>
       <li className="cert-li">IAM</li>
       <li className="cert-li">SQL </li>
       <li className="cert-li">Cloud Storage</li>
       <li className="cert-li">Pub/Sub</li>
       <li className="cert-li">GKE</li>
       <li className="cert-li">Billing Account</li>
       <li className="cert-li">Cloud security</li>
       <li className="cert-li">Cloud Networking</li>
       <li className="cert-li">Cloud DNS</li>
       <li className="cert-li">Cloud VPN</li>
     </ul>
     </div>

    








     </div>
     <Footbar/>
    </div>
  
    )
}