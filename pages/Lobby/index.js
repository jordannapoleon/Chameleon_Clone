import React from "react";
import Layout from "../components/Layout/Layout";
import PlayersModule from "../components/Lobby/PlayersModule";

export default function Lobby(){
    return (
        <>
            <Layout>
                <PlayersModule />
            </Layout>
        </>
    )
}