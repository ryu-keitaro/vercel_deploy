import Head from 'next/head'/* header で動いてる　よく分からん*/
import MainLayout from '../layouts'
import styles from '../styles/Home.module.scss'
import Nav from "../components/nav";
import BBS from '../components/BBS';
import React from "react";

export default function Home() {
 
  return (
    <MainLayout children={undefined}>
      <Head>
        
        
      </Head>
       <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} >
        
                 
        <BBS />
      
        </div>
      </div>
      
  
    </MainLayout>
  )
}

