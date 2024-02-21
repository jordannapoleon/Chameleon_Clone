import React from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

export default function Pregame(){
    const router = useRouter();
    const { role } = router.query;
    
    const renderedContent = () => {
        
        if( role === 'host') {
            
            return(
                <>
                
                        Host
                
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
            {renderedContent()}
        </Layout>
    )

    
}