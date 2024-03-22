import image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/Home.module.css';

import { getSortedCharactersData } from '../../lib/characters';

export async function getStaticProps() {
  const allCharacterData = getSortedCharactersData();
  return {
    props: {
      allCharacterData,
    }
  };
}



export default function MainVersus({ allCharacterData }) {
    return (
        <>
        <Layout>
            <Head>
                <title> Character Select</title>
            </Head>
            <h1>Characters</h1>
            <section className={'${utilStyles.headingMd} ${utilStyles.padding1px}'}>
            <ul className={utilStyles.list}>
                {allCharacterData.map(({id, characterName, health }) =>(
                    <li className={styles.card} key = {id}>
                        {characterName} 
                        <br/>
                        {health}
                    </li>
                ))}
            </ul>
            </section>
            <h2>
                <Link href="/">Back to Main</Link>
            </h2>
        </Layout>
        </>
    );
}