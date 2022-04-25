import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiGotomeeting } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    // <!-- Navbar Section -->
    <nav class="navbar">
      <div class="navbar__container"> 
        <div className="logo">
          <SiGotomeeting color="#fff" size={33} />
          <p className="logo-text">
            Meet<span>U</span>
          </p>
      </div>
          {/* <a href="#home" id="navbar__logo">CHIRAG</a> */}
      <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
      </div>
      <ul class="navbar__menu">
          <li class="navbar__item">
              <a href="#home" class="navbar__links" id="home-page">Home</a>
          </li>
          <li class="navbar__item">
              <a href="#about" class="navbar__links" id="features-page">Features</a>
          </li>
          {/* <li class="navbar__item">
              <a href="#skills" class="navbar__links" id="skills-page">Skills</a>
          </li>
          <li class="navbar__item">
              <a href="#experiences" class="navbar__links" id="experiences-page">Experience</a>
          </li>
          <li class="navbar__item">
              <a href="#cats" class="navbar__links" id="cat-page"><i class="fas fa-solid fa-cat"></i></a>
          </li> */}
          <li class="navbar__btn">
              <a href="https://www.linkedin.com/in/chirag-rastogi-0baa72178/" target="_blank" class="button" id="temp-page">LinkedIn</a>
          </li>
      </ul>
      </div>
    </nav>
    // <nav className="navbar container">
    //   <div className="logo">
    //     <SiGotomeeting color="#fff" size={33} />
    //     <p className="logo-text">
    //       Meet<span>U</span>
    //     </p>
    //   </div>
    //   <menu>
    //     <ul
    //       className="nav-links"
    //       id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
    //     >
    //       <li>
    //         <a href="#">Home</a>
    //       </li>
    //       <li>
    //         <a href="#features">Features</a>
    //       </li>
    //       <li>
    //         <a href="#download">Download</a>
    //       </li>
    //       {/* <li> */}
    //         {/* <a href="#subscribe">Subscribe</a>
    //       </li>

    //       <li>
    //         <a href="#" className="btn btn-dark">
    //           Get Started
    //         </a>
    //       </li>
    //       <li className="nav-btn">
    //         <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
    //       </li> */}
    //     </ul>
    //   </menu>
    //   <div className="menu-icons" onClick={toggleMenu}>
    //     {showMenu ? (
    //       <RiCloseLine color="#fff" size={30} />
    //     ) : (
    //       <AiOutlineBars color="#fff" size={27} />
    //     )}
    //   </div>
    // </nav>
  );
};

export default Navbar;
