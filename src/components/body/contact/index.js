import React from 'react';
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";

const Contact = () => {
    return (
        <div className='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-let'>
                    <p>Want to get in touch? Contact me on any platform</p>
                    <SocialContact />
                </div>
                <div className='download'>
                    <a href="https://drive.google.com/drive/folders/141ClIvfepSzNhSMTGU6mhawfa3piVhi5?usp=sharing" target='blank'>
                    <i class="fas fa-file-download download-icon"></i>Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;