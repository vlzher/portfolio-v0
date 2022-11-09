import React from 'react';
import "../../styles/language.scss"
const Language = ({txt,level}) => {
    return (
        <div className="language">
            <div className="language-txt">
                {txt}
            </div>
            <div className="language-level">
                {level}
            </div>

        </div>
    );
};

export default Language;