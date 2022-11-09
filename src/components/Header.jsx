import React from 'react';
import "../styles/header.scss"
const Header = () => {
    return (
        <div className="header">
            <div className="photo-header">

            </div>
            <div className="header-links">
                <div className="header-link" style={{width:250}}>
                    About Me
                </div>

                <div className="header-link">
                    Experience
                </div>
                <div className="header-link">
                    Projects
                </div>
                <div className="header-link">
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Header;