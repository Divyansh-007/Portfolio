import React from "react";
import "./about.css";
import image from "../../../assets/coder.jpg";
import SocialContact from "../../common/social-contact";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there 👋, I am
          <br /> <span className="about-name">Random Guy</span>,
          <br />who love building solutions & working with tech.
        </div>
        <div className="about-photo">
          <img src={image} alt="coder" className="abt-pic" />
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
};

export default About;
