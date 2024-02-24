import React from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
import GameInstance from "../components/GameLogic/gameInstance.js"

import css from '@/styles/PreGamePage.module.css'

export default function Pregame(){
    const router = useRouter();
    const { role } = router.query;
    const game = new GameInstance('Jordan')
    
    const renderedContent = (gameInstance) => {
        
        
        if( role === 'host') {

            console.log(game)
            
            return(
                <>
                    <main className={`${css.preGameContainer}`}>
                        <div className={`${css.preGameTopSection}`}>
                            <h1>`${}`</h1>
                        </div>
                        <div className={`${css.preGameBottomSection}`}>
                            <h1>Game Settings</h1>
                        </div>

                    </main>
                
                </>
            )
                

        } else if ( role === 'player') {

            return (
                <>
                    
                        Player
                    
                </>
            )
        } else {

            return (
                <h1> The chameleon escaped contact customer support</h1>
            ) 
        }

    }

    return (
        <Layout>
            {renderedContent(game)}
        </Layout>
    )

    
}