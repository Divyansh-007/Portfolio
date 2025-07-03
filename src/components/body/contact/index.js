import './contact.css';
import SocialContact from '../../common/social-contact/index';
import { SocialData } from '../../data/socialData';

const Contact = () => {
  return (
    <div className="contact">
      <label className="section-title">Contact</label>
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-message">
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology.
              </p>
            </div>
            <div className="contact-options">
              <a
                href="mailto:divyanshjais8@gmail.com"
                className="contact-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
                <span>Email me directly</span>
              </a>
              <a
                href={
                  SocialData.find(social => social.platform === 'linkedIn')
                    ?.link
                }
                className="contact-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-comments"></i>
                <span>Let's have a conversation</span>
              </a>
              <a
                href={
                  SocialData.find(social => social.platform === 'gitHub')?.link
                }
                className="contact-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-handshake"></i>
                <span>Collaborate on projects</span>
              </a>
            </div>
            <SocialContact />
          </div>
          <div className="contact-right">
            <div className="download-section">
              <div className="download-card">
                <div className="download-icon">
                  <i className="fas fa-file-download"></i>
                </div>
                <div className="download-content">
                  <h4>Download Resume</h4>
                  <p>Get a detailed overview of my experience and skills</p>
                </div>
                <a
                  href="https://drive.google.com/drive/folders/141ClIvfepSzNhSMTGU6mhawfa3piVhi5?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-button"
                >
                  <i className="fas fa-download"></i>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
