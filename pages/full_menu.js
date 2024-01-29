// Importing necessary modules and components
import Head from 'next/head'; // Head component for managing document head
import styles from '../styles/Home.module.css'; // Stylesheet for the Home page
import Navbar from '../components/navbar.js'; // Navbar component
import { getFullMenuContent } from '../lib/full_menu_post'; // Function to retrieve full menu content
import GoogleAnalytics from '../components/GoogleAnalytics'; // Google Analytics component
import CookieBanner from '../components/cookiebanner'; // Cookie banner component
import { marked } from 'marked'; // Library for converting Markdown to HTML
import joypixels from 'emoji-toolkit'; // Library for handling emojis

// Function to get static props during build time
export async function getStaticProps() {
  // Retrieve full menu content using the function from the lib directory
  const menuContent = getFullMenuContent(); 
  // Return props to the component
  return {
    props: {
      menuContent,
    },
  };
}

// Menu page component
export default function MenuPage({ menuContent }) { 
  // Convert Markdown to HTML
  let htmlContent = marked(menuContent.content); 
  // Convert emoji shortcodes to actual emojis
  htmlContent = joypixels.shortnameToUnicode(htmlContent);

  return (
    // Main container div with CSS class
    <div className={styles.container}>
      {/* Head component for managing document head */}
      <Head>
        {/* Title of the document */}
        <title>M&E Creative Cup - Menu</title> 
        {/* Link to the favicon */}
        <link rel="icon" href="/cafe_logo.jpg" />
      </Head>

      {/* Google Analytics component */}
      <GoogleAnalytics GA_MEASUREMENT_ID='G-0F7YYZ8TE4' />
      {/* Cookie banner component */}
      <CookieBanner />

      {/* Header section with navbar */}
      <header className={styles.navbar}>
        {/* Cafe logo */}
        <img src="/cafe_logo.jpg" alt="M&E Creative Cup" className={styles.cafelogo} />
        {/* Navbar component */}
        <Navbar />
      </header>

      {/* Main section */}
      <main className={styles.main}>
        {/* Grid container for menu content */}
        <div className={styles.gridContainer}>
          {/* Display the menu content as HTML */}
          <div className={styles.gridItem} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        </div>
      </main>

      {/* Footer section */}
      <footer className={styles.footer}>
        {/* Vercel link */}
        <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank" rel="noopener noreferrer">
          {/* Powered by Vercel logo */}
          Powered by <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

