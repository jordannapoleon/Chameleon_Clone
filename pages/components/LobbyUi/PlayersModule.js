import react from "react";
import css from '@/styles/GameElements.module.css'

import GameCard from "./gameCard";

export default function playerModule() {
    return (
        <>
        <div>Find Your Game</div>
            <div className={(`${css.playerCountContainer}`)}>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
            <div> prev / next</div>
        </>
    )
} 