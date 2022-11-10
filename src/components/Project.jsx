import React from 'react';
import "../styles/project.scss"

const Project = ({txt, logoUrl}) => {
    return (
        <div className="project" style={{backgroundImage: `url(${logoUrl})`}}>
            <div className="project1">
                {txt}
            </div>
        </div>
    );
};

export default Project;