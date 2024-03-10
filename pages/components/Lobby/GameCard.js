import React from "react";
import css from '@/styles/GameElements.module.css'

export default function GameCard({host, playerCount, isPrivate}){
    return (
        <div className={(`${css.cardWrapper}`)}>
            <div>Host Name: {host}</div>
            <div>Players: {playerCount}/5</div>
            {isPrivate ? 
            (<button className={(`${css.cardJoinButton}`)} type="button">Private</button>):
            (<button className={(`${css.cardJoinButton}`)} type="button">Joinable</button>)}
        </div>
    )
}