import React from 'react';
import Project from "./Project";
import "../styles/projects.scss"
import KanbanBoard from '../assets/kanbanBoard_475x250.png';
import Dictionary from '../assets/dictionary_475x250.png';
import PaintAnalogue from '../assets/paintAnalogue_475x232.png'
const Projects = () => {
    return (
        <div className="screen proj">

            <div className="screen-text">
                Projects
            </div>
            <div className="projects">
                <Project txt={"Kanban board"} logoUrl={KanbanBoard}/>
                <Project txt={"Dictionary"} logoUrl={Dictionary}/>
                <Project txt={"Paint Analogue"} logoUrl={PaintAnalogue}/>
            </div>
            <div className="projects-text-bottom">
                *desktop-only applications
            </div>


        </div>
    );
};

export default Projects;