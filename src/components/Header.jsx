import React from 'react';
import "../styles/header.scss"
const Header = () => {
    const handleClickScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="header">
            <div className="photo-header">

            </div>
            <ul className="header-links">
                <li className="header-link" style={{width:250}} onClick={() => handleClickScroll("about-me")}>
                        About Me
                </li>
                <li className="header-link" onClick={() => handleClickScroll("experience")}>
                    Experience
                </li>
                <li className="header-link" onClick={() => handleClickScroll("projects")}>
                    Projects
                </li>
                <li className="header-link"onClick={() => handleClickScroll("...")}>
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Header;