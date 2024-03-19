import css from '@/styles/PreGamePage.module.css'

import React from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

//TEST
import { testGameObj } from "../components/Test/Test-GameInstance"


export default function Pregame() {
    const router = useRouter();
    const { role, hostName} = router.query;

    
    


    const renderedContent = (gameObj) => {
         console.log(gameObj)
        switch (role) {

            case 'host':
                return (
                    <main className={`${css.preGameContainer}`}>
                        <div className={`${css.preGamePlayersPanel}`}>
                            <h1>Players: {gameObj.currentGroupSize} / {gameObj.maxGroupSize}</h1>
                            <div className={`${css.playerWrapper}`}>
                                {gameObj.players.map((player, index) => (<div key={index}>{player}</div>))}
                                <div className={`${css.invitePlayer}`}>+</div>
                            </div>
                                <div className={`${css.privacyWrapper}`}>
                                    <h2>Privacy:</h2>
                                    <button>Closed</button>
                                </div>
                        </div>
                        <div className={`${css.preGameSettingsPanel}`}>
                            <div className={`${css.settingsWrapper}`}>
                            </div>
                        </div>
                    </main>
                );

            case 'player':
                return (
                    <main className={`${css.preGameContainer}`}>
                        <div className={`${css.preGameTopSection}`}>
                            <h1>{ }</h1>
                            <h3>You are a player</h3>
                        </div>
                        <div className={`${css.preGameBottomSection}`}>
                            <h1>Game Settings</h1>
                        </div>

                    </main>
                );

            default:
                return <h1> The chameleon escaped contact customer support</h1>
        };
    }

    return (
        <Layout>
            {renderedContent(testGameObj)}
        </Layout>
    )


}