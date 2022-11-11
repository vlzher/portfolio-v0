import React from 'react';
import "../styles/project.scss"

const Project = ({txt, logoUrl,url}) => {
    return (
        <div className="project" style={{backgroundImage: `url(${logoUrl})`}}>

                <a href={url} className={"project-link"}>
                    <div className="project1">
                        {txt}
                    </div>
                </a>

        </div>
    );
};

export default Project;