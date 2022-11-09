import React from 'react';
import "../../styles/experience.scss"
import "../../styles/screen.scss"
import {languages, skills} from "../../assets/txts";
import Language from "./Language";
import Skill from "./Skill";
const Experience = () => {
    return (
        <div className="screen">
            <div className="screen-text">
                    Experience
            </div>
            <div className="experience">
                <div className="skills-zone">
                    <div className="skills">
                        <div className="skills-text">
                            Skills:
                        </div>
                        {skills.map((skill,id) => <Skill txt={skill.txt} id={id}/> )}

                    </div>
                </div>
                <div className="languages-zone">
                    <div className="languages">
                        <div className="languages-text">
                            Languages:
                        </div>
                        {languages.map((language,id)=>
                            <Language id={id} txt={language.txt} level={language.level}/> )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;