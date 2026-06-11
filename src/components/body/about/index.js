import SocialContact from '../../common/social-contact';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-bio">
        <span className="about-line">
          <span className="about-key">name</span>
          <span className="about-sep">: </span>
          <span className="about-val-string">"Divyansh Jaiswal"</span>
        </span>
        <span className="about-line">
          <span className="about-key">role</span>
          <span className="about-sep">: </span>
          <span className="about-val-string">
            "Backend And AI Engineer &amp; Builder"
          </span>
        </span>
        <span className="about-line">
          <span className="about-key">bio</span>
          <span className="about-sep">: </span>
          <span className="about-val-string">
            "I love building solutions &amp; working with tech."
          </span>
        </span>
      </div>

      <pre className="about-stats-table">
        {`┌──────────────────┬────────┐
│ Experience       │  4+ yr │
│ Projects         │   50+  │
│ Technologies     │   10+  │
└──────────────────┴────────┘`}
      </pre>

      <SocialContact />
    </div>
  );
};

export default About;
