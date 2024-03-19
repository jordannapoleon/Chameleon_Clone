import React from "react";
import css from '@/styles/GameElements.module.css'

import GameCard from "./GameCard";

export default function playerModule() {
    return (
            <div className={(`${css.playerCountContainer}`)}>
                <GameCard 
                host={"Jordan"}
                playerCount={5}
                isPrivate= {true}
                />
                <GameCard 
                host={"Jordan"}
                playerCount={1}
                isPrivate= {false}
                />
            </div>
    )
} 