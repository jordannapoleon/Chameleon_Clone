//Styling
import css from '@/styles/HomePage.module.css'
//Imports -> Hooks
import { React, useState } from "react";
import { useRouter } from 'next/router';
import GameInstance from '../components/GameLogic/gameInstance';
import { indieFlower } from "../components/Fonts/Fonts";


const HomePage = () => {

    const [hostName, setHostName] = useState('Jordan'); //HARD CODED CHANGE LATER
    const router = useRouter();

    //Handle Host Button Logic and creating a gameObj
    const goToHostGame = () => {


        router.push({
          pathname: '/Pregame',
          query: { role: 'host', hostName: hostName}
        });
      };
    
      const goToLobby = () => {
        router.push('/Lobby');
      };


    return (
        <main className={`${css.homeContainer}`}>
            {/* <div className={`${css.usernameWrapper}`}>
                <label for="UserName">User Name:</label>
                <input type='text' id='UserName'></input>
            </div> */}
               <div className={`${css.selectionWrapper}`}>
                <button className={`${css.selectionButton} ${indieFlower.className}`} type='button' onClick={() => goToHostGame('host')}>Host Game</button>
                <button className={`${css.selectionButton} ${indieFlower.className}`}type='button' onClick={() => goToLobby()}>Join Game</button>
            </div>
            <div className={`${css.howToPlayWrapper} ${indieFlower.className}`}>
                <h2>How To Play!</h2>
                <div>
                    <ul>
                        <li>
                            One of you is the Chameleon - blend in and don’t get caught! <br />
                        </li>
                        <li>
                            Each player, except the Chameleon, gets a secret topic.
                            The Chameleon has to guess the topic while blending in.
                        </li>
                        <li>
                            Each player must choose a word related to the secret topic.
                            If your word is too obvious, the Chameleon might <br />
                            figure out the secret topic. If it’s too vague, other players might think you’re the Chameleon!
                        </li>
                        <li>
                            After everyone shares their word, debate and vote on who the Chameleon is. If the Chameleon isn't caught, <br />
                            they escape; if caught, they can guess the topic to escape.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
};

export default HomePage