import { SocialData } from '../../data/socialData';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        {'# '}
        {"Let's Connect!"}
      </div>
      <p className="contact-text">
        {"I'm always open to discussing new opportunities, interesting"}
        <br />
        {'projects, or just having a chat about technology.'}
      </p>
      <div className="contact-links">
        <div className="contact-link-row">
          {'→ Email:    '}
          <a href="mailto:divyanshjais8@gmail.com">divyanshjais8@gmail.com</a>
        </div>
        <div className="contact-link-row">
          {'→ LinkedIn: '}
          <a
            href={
              SocialData.find(social => social.platform === 'linkedIn')?.link
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Let's have a conversation"}
          </a>
        </div>
        <div className="contact-link-row">
          {'→ GitHub:   '}
          <a
            href={SocialData.find(social => social.platform === 'gitHub')?.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Collaborate on projects
          </a>
        </div>
      </div>
      <pre className="contact-resume-box">
        {`┌──────────────────────────┐
│ 📄 Download Resume (PDF) │
└──────────────────────────┘`}
      </pre>
      <a
        href="https://drive.google.com/drive/folders/141ClIvfepSzNhSMTGU6mhawfa3piVhi5?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-download"
      >
        → download resume.pdf
      </a>
    </div>
  );
};

export default Contact;
