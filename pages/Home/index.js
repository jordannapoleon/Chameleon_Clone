import React from "react";
import { useRouter } from "next/router";
import { indieFlower } from "../components/Fonts/Fonts";

//Styling
import css from '@/styles/HomePage.module.css'

const HomePage = () => {

    const router = useRouter();

    const goToHostGame = (role) => {
        router.push(`/Pregame?role=${role}`)
    }
    const goToLobby = (role => {
        router.push(`/Findgames`)
    })

    return (
            <main className={`${css.playerContainerHome}`}>
                <div className={`${css.usernameContainerHome}`}>
                    <label for="UserName">User Name:
                    </label>
                    <input></input>
                </div>
                <div className={`${css.selectionContainerHome}`}>
                    <button className={`${css.selectionButtonHome} ${indieFlower.className}`} type='button' onClick={() => goToHostGame('host')}>Host Game</button>
                    <button className={`${css.selectionButtonHome} ${indieFlower.className}`}type='button' onClick={() => goToLobby()}>Join Game</button>
                </div>
                {/* <div className={`${css.howToPlayHome} ${indieFlower.className}`}>
                    <h2>How To Play</h2>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                </div> */}
            </main>
        
    )
};

export default HomePage