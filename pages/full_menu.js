import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar.js';
import { getFullMenuContent } from '../lib/full_menu_post'; 
import GoogleAnalytics from '../components/GoogleAnalytics'; 
import CookieBanner from '../components/cookiebanner';
import {marked} from 'marked'; // Use the correct import statement here

export async function getStaticProps() {
  const menuContent = getFullMenuContent(); 
  return {
    props: {
      menuContent,
    },
  };
}

export default function MenuPage({ menuContent }) { 
  const htmlContent = marked(menuContent.content); // Convert Markdown to HTML


  return (
    <div className={styles.container}>
      <Head>
        <title>M&E Creative Cup - Menu</title> 
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
          {/* Display the menu content as HTML */}
          <div className={styles.gridItem} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank" rel="noopener noreferrer">
          Powered by <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
