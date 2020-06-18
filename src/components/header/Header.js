import React from "react";
import "./Header.css";
import logo from "./derekxu.png";
import { Fade } from "react-reveal";
import { greeting, workExperiences } from "../../portfolio";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#skills">About Me</a>
            </li>
            {exp === true && (
              <li>
                <a href="#experience">Work Experiences</a>
              </li>
            )}
            <li>
              <a href="#opensource">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
