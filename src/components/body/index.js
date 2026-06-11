import './body.css';
import About from '../body/about/index';
import Contact from '../body/contact/index';
import Skills from '../body/skills/index';
import Work from '../body/work/index';
import Licenses from './certificates';
import Packages from './packages';
import AsciiArt from '../terminal/AsciiArt';
import TerminalPrompt from '../terminal/TerminalPrompt';
import TerminalStatusBar from '../terminal/TerminalStatusBar';

const Body = () => {
  return (
    <div className="body">
      <AsciiArt />

      <section id="about">
        <TerminalPrompt command="cat about.txt" />
        <About />
      </section>

      <section id="work">
        <TerminalPrompt command="cat work.log" />
        <Work />
      </section>

      <section id="skills">
        <TerminalPrompt command="cat skills.json" />
        <Skills />
      </section>

      <section id="packages">
        <TerminalPrompt command="npm ls --depth=0" />
        <Packages />
      </section>

      <section id="certificates">
        <TerminalPrompt command="ls -la ~/certificates/" />
        <Licenses />
      </section>

      <section id="contact">
        <TerminalPrompt command="cat contact.md" />
        <Contact />
      </section>

      <TerminalStatusBar />
    </div>
  );
};

export default Body;
