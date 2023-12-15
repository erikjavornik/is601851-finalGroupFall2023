import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar.js'
import { getMenuFiles } from '../lib/menu_posts.js';
import { getTestimonyFiles } from '../lib/testimony_posts.js';

export async function getStaticProps() {
  const menu = getMenuFiles();
  const testimonies = getTestimonyFiles();
  
  return {
    props: {
      menu,
      testimonies,
    },
  };
}

export default function Home({menu, testimonies}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>M&E Creative Cup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.navbar}>
        <img src="/cafe_logo.jpg" alt="M&E Creative Cup" className={styles.logo} />
        <Navbar />
      </header>

      <main className={styles.main}>
            {menu.map(({ fileName, matterResults, content }) => (
                <div key={fileName}>
                    <h1>{matterResults.title}</h1>
                    <p>{content}</p>
                </div>
            ))}

            {testimonies.map(({ fileName, matterResults, content }) => (
                <div key={fileName}>
                    <h1>{matterResults.title}</h1>
                    <p>{content}</p>
                </div>
            ))}
      </main>


      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
