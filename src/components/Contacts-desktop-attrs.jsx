import React from 'react';
import "../styles/contacts-desktop-attr.scss"
const ContactsDesktopAttrs = () => {
    return (
        <div className="contacts-attrs">
            <a className="email-desktop" href={"mailto:uladzhera@gmail.com"}>
                uladzhera@gmail.com
            </a>
            <div className="social-media-desktop">
                <a className="social-media github" href="https://github.com/vlzher">

                </a>
                <a className="social-media linkedin" href="https://www.linkedin.com/in/uladzislau-zherabiatsyeu-b90882229/">

                </a>
            </div>
        </div>
    );
};

export default ContactsDesktopAttrs;