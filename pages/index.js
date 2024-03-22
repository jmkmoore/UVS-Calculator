import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        {siteTitle}
      </Head>
      <section className={utilStyles.headingMd}>
      <main>
        <h1 className={utilStyles.title}>
          Choose <Link href="/Versus/main-versus">Character</Link>
        </h1>
        

        <h1 className={utilStyles.title}>
           <Link href="/Versus/main-combat">Go to Combat</Link>
        </h1>
      </main>
      
      <footer>
        <Link href="/Settings/settings">Settings</Link>
      </footer>
      </section>
      </Layout>

  );
}
