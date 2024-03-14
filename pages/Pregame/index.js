import css from '@/styles/PreGamePage.module.css'

import React from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";
const GameInstance = require('../components/GameLogic/gameInstance');


export default function Pregame() {
    const router = useRouter();
    const { role } = router.query;


    const renderedContent = (gameObj) => {

        switch (role) {

            case 'host':
                return (
                    <main className={`${css.preGameContainer}`}>
                        <div className={`${css.preGamePlayersPanel}`}>
                            <div className={`${css.playerWrapper}`}>
                                <div>Jordan</div>
                                <div>Jordan</div>
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
            {renderedContent()}
        </Layout>
    )


}