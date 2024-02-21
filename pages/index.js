import Head from 'next/head';
import { useEffect, useContext, useState } from 'react';
import { appContext } from "./_app";
import Layout from './components/Layout/Layout';
import styles from '@/styles/Home.module.css';
import HomePage from './Home/Home.js';
 
export default function Home() {

  // const { isLoading, setIsLoading } = useContext(appContext);



  return (
    <>
      <Head>
        <title>Development Branch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <>
            <Layout>
                <HomePage/>
            </Layout>
        </>

        
    </>
  )
}
