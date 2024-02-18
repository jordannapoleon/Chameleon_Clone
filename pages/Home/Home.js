import React from "react";

//Styling
import css from '@/styles/HomePage.module.css'

const HomePage = () => {
    return (
        <>
            <div className={`${css.ButtonContainer}`}>
                <button className={`${css.button}`} >Host Game</button>
                <button className={`${css.button}`}>Join Game</button>
            </div>
            <div className={`${css.HowToPlay}`}>
                <h1> How To Play</h1>
            </div>
        </>
        
    )
};

export default HomePage