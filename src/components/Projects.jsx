import React from 'react';
import Project from "./Project";
import "../styles/projects.scss"
import KanbanBoard from '../assets/kanbanBoard_475x250.png';
import Dictionary from '../assets/dictionary_475x250.png';
import PaintAnalogue from '../assets/paintAnalogue_475x232.png'
import {projectUrls} from "../assets/txts";
const Projects = () => {
    return (
        <div className="screen proj" id={"projects"}>

            <div className="screen-text">
                Projects
            </div>
            <div className="projects">
                <Project txt={"Kanban board"} logoUrl={KanbanBoard} url={projectUrls[0]}/>
                <Project txt={"Dictionary"} logoUrl={Dictionary} url={projectUrls[1]}/>
                <Project txt={"Paint Analogue"} logoUrl={PaintAnalogue} url={projectUrls[2]}/>
            </div>
            <div className="projects-text-bottom">
                *desktop-only applications
            </div>


        </div>
    );
};

export default Projects;