import React from "react";

//Styling
import css from '@/styles/HomePage.module.css'

const HomePage = () => {
    return (
        <>
            <div className={`${css.playerContainerHome}`}>
                <div className={`${css.usernameInputHome}`}>
                </div>
                <div className={`${css.selectionContainerHome}`}>
                    <button className={`${css.selectionButtonHome}`}>Host Game</button>
                    <button className={`${css.selectionButtonHome}`}>Join Game</button>
                </div>
            </div>
        </>
        
    )
};

export default HomePage