import React, {useEffect, useState} from 'react';
import "../styles/header.scss"
import {useScrollDirection} from "../hooks/useScrollDirection";
const Header = () => {

    const scrollDirection = useScrollDirection();

    const handleClickScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={scrollDirection==="up" ? "header active":"header hidden"}>

          <div className="photo-header" onClick={() => handleClickScroll("sl 0")}>

            </div>
            <ul className="header-links">
                <li className="header-link" style={{width:250}} onClick={() => handleClickScroll("sl 1")}>
                        About Me
                </li>
                <li className="header-link" onClick={() => handleClickScroll("sl 2")}>
                    Experience
                </li>
                <li className="header-link" onClick={() => handleClickScroll("sl 3")}>
                    Projects
                </li>
                <li className="header-link"onClick={() => handleClickScroll("sl 4")}>
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Header;