import React from 'react';
import {contactTxt} from "../assets/txts";
import "../styles/contacts.scss"
const Contacts = () => {
    return (
        <div className={"screen"}>
            <div className={"screen-text"}>
                Get In Touch
            </div>
            <div className="contacts-zone">
                <div className="contacts-text">
                    {contactTxt}
                </div>
                <a className="email-link" href="mailto:uladzhera@gmail.com">Say Hello</a>
            </div>

            <div className="mobile-footer-contacts">
                <a className="footer-contact github" href="https://github.com/vlzher"></a>
                <a className="footer-contact linkedin" href="https://www.linkedin.com/in/uladzislau-zherabiatsyeu-b90882229/"></a>
            </div>

            <div className="footer">
                Wroclaw, 2022
            </div>
        </div>
    );
};

export default Contacts;