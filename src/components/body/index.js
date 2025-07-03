import React from 'react';

import './body.css';
import About from '../body/about/index';
import Contact from '../body/contact/index';
import Skills from '../body/skills/index';
import Work from '../body/work/index';

import Licenses from './certificates';
import Packages from './packages';

const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="packages">
        <Packages />
      </section>
      <section id="certificates">
        <Licenses />
      </section>
      {/* <section id="projects">
        <Projects />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
