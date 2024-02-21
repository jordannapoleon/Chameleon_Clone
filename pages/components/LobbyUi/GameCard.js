import React from "react";
import css from '@/styles/GameElements.module.css'

export default function GameCard(){
    return (
        <div className={(`${css.cardWrapper}`)}>
            <div>Host Name: Jordan</div>
            <div>Players 5/5</div>
            <button className={(`${css.cardJoinButton}`)} type="button">Join</button>
        </div>
    )
}