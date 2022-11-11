import React from 'react';
import "../styles/first-screen.scss"
import "../styles/screen.scss"
const FirstScreen = () => {
    return (
        <div className="screen first" id={"first-screen"}>
            <div className="first-screen">
                <div className="first-screen-photo">

                </div>
                <div className={"first-screen-name"}>
                    Uladzislau Zherabiatsyeu
                </div>
                <div className={"first-screen-quote"}>
                    „ Trying to be ahead of the curve! ”
                </div>
            </div>

        </div>
    );
};

export default FirstScreen;