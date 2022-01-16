import React from 'react';
import "./about.css";
import image from "../../../assets/coder.jpg";

const About = () => {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello there 👋, I am
                    <br /> <span className='about-name'>Random Guy</span>,
                    <br />I love working with web.
                </div>
                <div className='about-photo'>
                    <img src={image} alt='coder' className='abt-pic' />
                </div>
            </div>
            <div className='about-bottom'>This is Contact</div>
        </div>
    );
};

export default About;