import React from 'react';
import {aboutMe} from "../assets/txts";
import "../styles/screen.scss"
import "../styles/about-me.scss"

const AboutMe = () => {
    return (
        <div className="screen">
            <div className="screen-text">
                About me
            </div>
            <div className="about-me">

                <div className="about-me-photo">
                    <div className="about-me-photo1"></div>
                </div>
                <div className="about-me-txt">
                    {aboutMe}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;