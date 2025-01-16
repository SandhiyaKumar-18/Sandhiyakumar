import React from "react"
import image from "../image/github.svg"
import mail from "../image/mail.svg"
import linkedin from "../image/linkedin.svg"
import "./p.css";
import Footbar from "./Footbar";
import { useNavigate } from "react-router-dom";




export default function Project()
 {

// ===================================================================


// ====================================================================
    return(
    <div className="main-pr">
    <div className="pr-projects-grid" >
        <h1 className="pr-head"> Projects</h1>
{/* ==========================================================*/}





{/*=--------------------- pr-1 block --------------------*/}
<div className="lap">
        <div className="pr-1">
        <h1 className="pr-title">Nutrition Analyzer</h1>
        <div className="pr-flex">
            <div className="Discription">
                <h1 className="dis"> Discription</h1>
                <p className="dis-para">Nutrition Analyzer is a user-friendly tool designed to help users find the nutritional value of various fruits. This project aims to promote healthier dietary choices by providing detailed nutritional information about fruits in an easy-to-access format.</p>
                <h1 className="pr-front-tools"> Front End Tools</h1>
                <p className="pr-tools">Html,CSS,Reactjs,Figma</p>
                <h1 className="pr-back-tools"> Back End Tools</h1>
                <a href="https://github.com/SandhiyaKumar-18/Nutrition-Analyzer" style={{ textDecoration: 'none'}}>
                <button className="pr-button"> Go to Github!</button>
                </a>
            </div>
            <div className="pr-box">
            <div className="pr-box-part1">
            <iframe width="560" height="300" src="https://www.youtube.com/embed/rr25J_hu1L8?si=phc508KWfKA7h1nd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            </div>
            <div className="pr-box-part2">
            <div className="pr-images">
            {/* <img className="pr-logo" src={image} alt ="no" ></img>
            <img className="pr-logo" src={mail} alt ="no" ></img> */}
            </div>
            </div>
            </div>
        </div>
        </div>

{/* ------------------------------pr-2 block------------------------------------- */}
<div className="pr-1">
        <h1 className="pr-title">Personal Portfolio</h1>
        <div className="pr-flex">
            <div className="Discription">
                <h1 className="dis"> Discription</h1>
                <p className="dis-para">Created a personal profile for myself that is fully responsive and works seamlessly on both mobile and laptop devices..</p>
                <h1 className="pr-front-tools"> Front End Tools</h1>
                <p className="pr-tools">Html,CSS,Reactjs,Figma</p>
                <h1 className="pr-back-tools"> Back End Tools</h1>
                <p className="pr-tools">Github</p>
                <a href="https://github.com/SandhiyaKumar-18/Sandhiyakumar/" style={{ textDecoration: 'none'}}>
                <button className="pr-button"> Go to Github!</button>
                </a>
                
                
            </div>
            <div className="pr-box">
            <div className="pr-box-part1">
            <iframe width="560" height="300" src="https://www.youtube.com/embed/ccnse2HZn4I?si=5cpUpH6kdA5UDZFG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="pr-box-part2">
            <div className="pr-images">
            {/* <img className="pr-logo" src={image} alt ="no" ></img>
            <img className="pr-logo" src={mail} alt ="no" ></img> */}
            </div>
            </div>
            </div>
        </div>
        </div>

{/* ------------------------------pr-3 block------------------------------------- */}



{/* ------------------------------pr-4 block------------------------------------- */}





        </div>

{/* ---------------------------------pr - End ------------------------------------------------ */}

{/* ---------------------pr- mobile tab */}
<div className="mobile">
<div className="pr-1-mobile">
        <h1 className="pr-title-mobile">Nutrition Analyzer</h1>
        <div className="pr-flex-mobile">
            <div className="Discription-mobile">
                <h1 className="dis-mobile"> Discription</h1>
                <p className="dis-para-mobile">Nutrition Analyzer is a user-friendly tool designed to help users find the nutritional value of various fruits. This project aims to promote healthier dietary choices by providing detailed nutritional information about fruits in an easy-to-access format.</p>
                <h1 className="pr-front-tools-mobile"> Front End Tools</h1>
                <p className="pr-tools-mobile">Html,CSS</p>
                <h1 className="pr-back-tools-mobile">Back End Tools</h1>
                <p className="pr-tools-mobile">Python,Github</p>

                <div className="pr-box-mobile">

            <div className="pr-box-part1-mobile">
            <iframe width="300" height="250" src="https://www.youtube.com/embed/rr25J_hu1L8?si=phc508KWfKA7h1nd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



            </div>
            <div className="pr-box-part2-mobile">
            <div className="pr-images-mobile">
            {/* <img className="pr-logo-mobile" src={image} alt ="no" ></img>
            <img className="pr-logo-mobile" src={mail} alt ="no" ></img> */}
            </div>
            </div>
            </div>



            <a href="https://github.com/SandhiyaKumar-18/Nutrition-Analyzer" style={{ textDecoration: 'none'}}>
                <button className="pr-button-mobile"> Go to Github!</button>
                </a>
                
            </div>
        
        </div>
        </div>
</div>
{/* ------------------------------ */}

<div className="mobile">
<div className="pr-1-mobile">
        <h1 className="pr-title-mobile">Personal Portfolio</h1>
        <div className="pr-flex-mobile">
            <div className="Discription-mobile">
                <h1 className="dis-mobile"> Discription</h1>
                <p className="dis-para-mobile">Created a personal profile for myself that is fully responsive and works seamlessly on both mobile and laptop devices.</p>
                <h1 className="pr-front-tools-mobile"> Front End Tools</h1>
                <p className="pr-tools-mobile">Html,CSS,Reactjs,Figma</p>
                <h1 className="pr-back-tools-mobile"> Back End Tools</h1>
                <p className="pr-tools-mobile">Github</p>

                <div className="pr-box-mobile">
            <div className="pr-box-part1-mobile">
                
            <iframe width="300" height="250" src="https://www.youtube.com/embed/ccnse2HZn4I?si=5cpUpH6kdA5UDZFG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="pr-box-part2-mobile">
            <div className="pr-images-mobile">
            {/* <img className="pr-logo-mobile" src={image} alt ="no" ></img>
            <img className="pr-logo-mobile" src={mail} alt ="no" ></img> */}
            </div>
            </div>
            </div>


            <a href="https://github.com/SandhiyaKumar-18/Sandhiyakumar/" style={{ textDecoration: 'none'}}>
                <button className="pr-button-mobile"> Go to Github!</button>
                </a>

                
            </div>
        
        </div>
        </div>
</div>
{/* ------------------------------------------ */}

{/* -------------------------------------------------- */}

{/* ---------------------------------------------------------------------------*/}

</div>
{/* <div className="pr-footer"> 


</div> */}

<div>
<div className="footbar">
             <div className="footer">
       <div className="pr-items">
          </div>
          </div>
          </div> 
          </div>

</div>

    );
};

 