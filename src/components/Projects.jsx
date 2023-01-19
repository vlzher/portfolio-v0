import React from 'react';
import Project from "./Project";
import "../styles/projects.scss"
import KanbanBoard from '../assets/kanbanBoard_475x250.png';
import Dictionary from '../assets/dictionary.png';
import PaintAnalogue from '../assets/paintAnalogue_475x232.png'
import CryptoPriceChecker from '../assets/coin-price-checker.png'
import Clock from '../assets/clock.png'
import {projectUrls} from "../assets/txts";
const Projects = () => {
    return (
        <div className="screen proj" id={"projects"}>

            <div className="screen-text">
                Projects
            </div>
            <div className="projects">
                <Project txt={"Crypto Price Checker"} logoUrl={CryptoPriceChecker} url={projectUrls[0]}/>
                <Project txt={"Dictionary\n\nemail: test@test.com\npass: test "} logoUrl={Dictionary} url={projectUrls[1]}/>
                <Project txt={"Paint Analogue"} logoUrl={PaintAnalogue} url={projectUrls[2]}/>

            </div>
            <div className="projects">
                <Project txt={"Kanban board"} logoUrl={KanbanBoard} url={projectUrls[3]}/>
                <Project txt={"Clock"} logoUrl={Clock} url={projectUrls[4]}/>
                <Project txt={"Kanban board"} logoUrl={KanbanBoard} url={projectUrls[3]}/>
            </div>


        </div>
    );
};

export default Projects;