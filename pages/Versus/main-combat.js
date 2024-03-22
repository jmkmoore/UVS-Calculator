import Image from 'next/image';
import Layout, {siteTitle} from '../../components/layout';
import React, { useState } from 'react';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';


export default function MainCombat({playerOneHealth, playerTwoHealth, changePlayerOneHealth, changePlayerTwoHealth}){


    return (
        <Layout>
        <div className={styles.grid}>
            <button className={styles.health}>
                <p>{playerOneHealth}</p>
            </button>
            <button className={styles.health}>
                <p>{playerTwoHealth}</p>
            </button>
        </div>
        <div className={styles.grid}>
            <button>
            <Link href="/Versus/attack-screen">
            
                <Image
                    priority
                    src="/images/019-preview.jpg"
                    className={utilStyles.Image}
                    height={180}
                    width={180}
                    alt=""/>
            </Link>
            </button>
            <button>
            <Link href="/Versus/attack-screen">
                <Image
                    priority
                    src="/images/001-preview.jpg"
                    height={180}
                    width={180}
                    alt=""/>
            </Link>
        
            </button>
        </div>

        <h2>
            <Link href="/">Return</Link>
        </h2>
        </Layout>
    );

}