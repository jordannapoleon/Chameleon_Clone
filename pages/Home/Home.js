import React from "react";
import { useRouter } from "next/router";
import { indieFlower } from "../components/Fonts/Fonts";

//Styling
import css from '@/styles/HomePage.module.css'

const HomePage = () => {

    const router = useRouter();

    return (
        <>
            <div className={`${css.playerContainerHome}`}>
                <div className={`${css.usernameContainerHome}`}>
                    <label for="UserName">User Name:
                    </label>
                    <input></input>
                </div>
                <div className={`${css.selectionContainerHome}`}>
                    <button className={`${css.selectionButtonHome} ${indieFlower.className}`} type='button' onClick={() => router.push('/Pregame')}>Host Game</button>
                    <button className={`${css.selectionButtonHome} ${indieFlower.className}`}type='button' onClick={() => router.push('/Findgames')}>Join Game</button>
                </div>
                <div className={`${css.howToPlayHome} ${indieFlower.className}`}>
                    <h2>How To Play</h2>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>ontrary to popular belief, Lorem Ipsum is not simply random text.</li>
                </div>
            </div>
        </>
        
    )
};

export default HomePage