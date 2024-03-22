import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';



export default function AttackScreen({playerOneHealth, playerTwoHealth, changePlayerOneHealth, changePlayerTwoHealth}) {
  const [attackDamage, damageChange] = useState(0);
  const [attackSpeed, speedChange] = useState(0);
  const [attackZone, zoneChange] = useState(0);
  
  const increaseDamage = () => damageChange((amount) => amount + 1);
  const decreaseDamage = () => damageChange((amount) => amount - 1);

  const increaseSpeed = () => speedChange((amount) => amount + 1);
  const decreaseSpeed = () => speedChange((amount) => amount - 1);

  const playerOneActivePlayer = false;
  const playerTwoActivePlayer = false;

  return (
        <Layout>
        <div className={styles.grid}>
            <button className={styles.health} onClick={changePlayerOneHealth}>
                <p>{playerOneHealth}</p>
            </button>
            <button className={styles.health} onClick={changePlayerTwoHealth}>
                <p>{playerTwoHealth}</p>
            </button>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p>Speed: {attackSpeed}</p>
          </div>
          <div>
          <button className={styles.card} onClick={increaseSpeed}>
            <p>+</p>
          </button>
          <button className={styles.card} onClick={decreaseSpeed}>
            <p>-</p>
          </button>
          </div>
          <div className={styles.card}>
            <p>Damage: {attackDamage}</p>
          </div>
          <div>
          <button className={styles.card} onClick={increaseDamage}>
            <p>+</p>
          </button>
          <button className={styles.card} onClick={decreaseDamage}>
            <p>-</p>
          </button>
          </div>
        </div>

        <div className={styles.damageGrid}>
            <button className={styles.card} onClick={changePlayerOneHealth}><Link href="/Versus/main-combat">Completely</Link></button><button className={styles.card}><Link href="/Versus/main-combat">Half</Link></button><button className={styles.card}><Link href="/Versus/main-combat">Full</Link></button>
            </div>
          <h2>
            <Link href="/">Back to Main</Link>
        </h2>
        </Layout>
    );
}