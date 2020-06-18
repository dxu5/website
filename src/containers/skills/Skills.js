import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import { HoverCard } from "react-png-hovercard";
import { Fade } from "react-reveal";
import { BsCodeSlash } from "react-icons/bs";
import { GiVial, GiViolin } from "react-icons/gi";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className="skills-heading">{skillsSection.title} </h1>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <div className="container">
              <div className="box">
                <BsCodeSlash className="icon" />
                <div className="content">
                  <h3>Web Development</h3>
                  <p>
                    From React to Python to Javascript, I am well-equiped with
                    many different coding languages. When it comes to software
                    development, I am always motivated to learn and create
                    amazing tools and technologies that consumers can use. I am
                    actively looking for new opportunites for Software
                    Development.
                  </p>
                </div>
              </div>
              <div className="box">
                <GiViolin className="icon" />
                <div className="content">
                  <h3>Violin</h3>
                  <p>
                    Growing up, music has always been an close passion of mine.
                    I started playing the violin from a young age and I never
                    stopped since. I love being able to connect with people in a
                    way that language cannot. I am currently the concertmaster
                    of the Brown University Orchestra and teaching remotely
                    online.
                  </p>
                </div>
              </div>
              <div className="box">
                <GiVial className="icon" />
                <div className="content">
                  <h3>Biology</h3>
                  <p>
                    During my undergraduate career at Brown University, I
                    majored in biology and biotechnology. I am still facinated
                    by the plethora of different techniques and medical devices
                    that can be used in industry. I have done many biological
                    data analyses and program writing for labs during my time at
                    Brown University.
                  </p>
                </div>
              </div>
            </div>
            {/* <div>
              {skillsSection.skills.map((skills) => {
                return (
                  <div>
                    <p className="subTitle skills-text">{skills}</p>
                    <br></br>
                  </div>
                );
              })}
            </div> */}
          </div>
        </Fade>
      </div>
    </div>
    // <div className="main" id="skills">
    //   <div className="skills-main-div">
    //     <Fade right duration={1000}>
    //       <div className="skills-text-div">
    //         <h1 className="skills-heading">My Projects</h1>
    //         <HoverCard
    //           front={
    //             <div className="Front">
    //               <img
    //                 src="https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80"
    //                 alt=""
    //                 style={{ objectFit: "cover" }}
    //               />
    //             </div>
    //           }
    //           back={
    //             <div className="back">
    //               <p> I would do anything to be there</p>
    //             </div>
    //           }
    //           maxWidth={400}
    //           animationSpeed={500}
    //           height={300}
    //           margin={10}
    //         />

    //         <HoverCard
    //           front={
    //             <div className="Front">
    //               <img
    //                 src="https://images.unsplash.com/photo-1498910265115-9fb541931cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1089&q=80"
    //                 alt=""
    //                 style={{ objectFit: "cover" }}
    //               />
    //             </div>
    //           }
    //           back={
    //             <div className="back">
    //               <p> I would do anything to be there</p>
    //             </div>
    //           }
    //           maxWidth={400}
    //           animationSpeed={500}
    //           height={300}
    //           margin={10}
    //         />
    //         <Button
    //           text={"See More Projects"}
    //           className="project-button"
    //           href={socialMediaLinks.github}
    //           newTab={true}
    //         />
    //       </div>
    //     </Fade>
    //   </div>
    // </div>
  );
}
