import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import Typical from "react-typical";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text"> Hi, I'm Derek</h1>
              <p className="greeting-text-p subTitle">
                I am a{" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Full-stack Developer",
                    1500,
                    "Violinist",
                    1500,
                    "Leader",
                    1500,
                    "Web Developer",
                    1500,
                    "Leader",
                    1500,
                  ]}
                />
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              className="profile-img"
              alt="saad sitting on table"
              src={require("../../assets/images/profile-picture.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
