import React, {useEffect, useState} from 'react';
import "../styles/header.scss"
import {useScrollDirection} from "../hooks/useScrollDirection";
const Header = () => {
    const [headerLinks, setHeaderLinks] = useState([false,false,false,false]);
    const scrollDirection = useScrollDirection();
    const [isMenuOpen, setIsMenuOpen] = useState(false);




    function scrollHandler(e) {
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const height = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if(height < 0.6*vh){
            setHeaderLinks([false,false,false,true])
        }
        if(height > 0.6*vh && height<1.6*vh){
            setHeaderLinks([false,false,true,false])
        }
        if(height > 1.6*vh && height < 2.6*vh){
            setHeaderLinks([false,true,false,false])
        }
        if(height > 2.6*vh){
            setHeaderLinks([true,false,false,false])
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    const mobileButtonFunction = (goTo) => {
        handleClickScroll(goTo)
        setIsMenuOpen(false)
    }



    const handleClickScroll =  (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className={(scrollDirection==="up"||isMenuOpen) ? "header active":"header hidden"}>

          <div className="photo-header" onClick={() => handleClickScroll("sl 0")}>

            </div>
            <div className={ isMenuOpen ? "menu-mobile active" :"menu-mobile"} onClick={() => setIsMenuOpen(!isMenuOpen)}></div>
            <div className={ isMenuOpen ? "menu-mobile-list active" : "menu-mobile-list"}>
                <li className={"header-link"} onClick={() => mobileButtonFunction("sl 1")}>
                    About Me
                </li>
                <li className={"header-link"} onClick={() => mobileButtonFunction("sl 2")}>
                    Experience
                </li>
                <li className={"header-link"} onClick={() => mobileButtonFunction("sl 3")}>
                    Projects
                </li>
                <li className={"header-link"} onClick={() => mobileButtonFunction("sl 4")}>
                    Contact
                </li>
            </div>
            <ul className="header-links">
                <li className={ headerLinks[0] ? "header-link active" : "header-link"} onClick={() => handleClickScroll("sl 1")}>
                        About Me
                </li>
                <li className={ headerLinks[1] ? "header-link active" : "header-link"} onClick={() => handleClickScroll("sl 2")}>
                    Experience
                </li>
                <li className={ headerLinks[2] ? "header-link active" : "header-link"} onClick={() => handleClickScroll("sl 3")}>
                    Projects
                </li>
                <li className={ headerLinks[3] ? "header-link active" : "header-link"} onClick={() => handleClickScroll("sl 4")}>
                    Contact
                </li>
            </ul>
        </div>
    );
};

export default Header;