import React from 'react';
import "../styles/separate-line.scss"
const SeparateLine = ({id,visible}) => {
    return (
        <div className={visible ? `separate-line` : 'separate-line hidden'} id={`sl ${id}`}>

        </div>
    );
};

export default SeparateLine;