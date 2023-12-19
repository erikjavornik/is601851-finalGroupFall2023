import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar.js'
import { getMenuFiles } from '../lib/menu_posts.js';
import { getTestimonyFiles } from '../lib/testimony_posts.js';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/cookiebanner';

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
        <link rel="icon" href="/cafe_logo.jpg" />
      </Head>

      <GoogleAnalytics GA_MEASUREMENT_ID='G-0F7YYZ8TE4' />
      <CookieBanner />

      <header className={styles.navbar}>
        <img src="/cafe_logo.jpg" alt="M&E Creative Cup" className={styles.cafelogo} />
        <Navbar />
      </header>

      <main className={styles.main}>
        <div className={styles.gridContainer}>

          {menu.map(({ fileName, content, imagePath }) => (
              <div key={fileName} className={styles.gridItem}>
                {<img src={imagePath} alt={fileName} />}
                  <p>{content}</p>
              </div>
          ))}

          {testimonies.map(({ fileName, content, imagePath }) => (
              <div key={fileName}>
                  {<img src={imagePath} alt={fileName} />}

                  <p>{content}</p>
              </div>
          ))}
        </div>
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
