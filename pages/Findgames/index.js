import React from "react";
import Layout from "../components/Layout/Layout";
import PlayersModule from "../components/LobbyUi/PlayersModule";

export default function FindGame(){
    return (
        <>
            <Layout>
                <PlayersModule />
            </Layout>
        </>
    )
}