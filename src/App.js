import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homee from "./Component/Homee";
import image from "./image/Vector.svg"
import Skills from "./Component/Skills";
import Project from "./Component/P";
import hambug from "./image/icon-hamburger.svg";
import Navbar from "./Component/Navbar"
import "./Component/TempNav.css"
import Certification from "./Component/Certification";
// import "./Component/Navbarr.css";
import "./App.css"
function App() {
  // =============Return Function===============
  return (

// ===========App===============================
    <div className="App">

   
    <Router basename="/">
    <Navbar/> 
    <div className="header">
    {/* <img className="header-logo" src={image} alt ="no" ></img> */}
    {/* <img className="hambug"  src={hambug} alt = "hambug"></img> */}
    </div>
    <div className="routes">
    <Routes>
    <Route path="/Sandhiyakumar" element={<Homee />} />
    <Route path="/" element={<Homee />} />
    <Route path="/skills" element={<Skills />} />
    {/* <Route path="/contact" element={<Contact />} />                                                                                                                                          ` */} 
    {/* <Route path="/blogs" element={<Blogs />} />  */}
    <Route path="/project" element={<Project />} />  
    <Route path="/certification" element={<Certification />} />    
    </Routes>
    </div>
    </Router> 

</div>
// ========================App End ======================================

  );
}

export default App;
