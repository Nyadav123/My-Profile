import { Link } from "react-router-dom";
import "./intro.css";
import Me from "./../../img/121.png";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
      <div id="mySidenav" className="sidenav">
 <Link to="/" id="about">Home<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#9839;</Link>
  <Link to="/hobbies" id="projects">Projects<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9745;</Link>
   <Link to="/about" id="blog">About<br/>&nbsp;&nbsp;&nbsp;&nbsp;&#9739;</Link>
  <Link to="/contact-us" id="contact">Contact<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9743;</Link>
 </div>
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Nipun Yadav</h1>
          <h2 className="i-intro">Welcome to my Profile</h2>
          <h1 className="i-name">I'm a</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Devouter</div>
              <div className="i-title-item">Socialism</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
    
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;