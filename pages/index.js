// Importing necessary modules and components
import Head from 'next/head'; // Head component for managing document head
import styles from '../styles/Home.module.css'; // Stylesheet for the Home page
import Navbar from '../components/navbar.js'; // Navbar component
import { getMenuFiles } from '../lib/menu_posts.js'; // Function to retrieve menu files
import { getTestimonyFiles } from '../lib/testimony_posts.js'; // Function to retrieve testimony files
import GoogleAnalytics from '../components/GoogleAnalytics'; // Google Analytics component
import CookieBanner from '../components/cookiebanner'; // Cookie banner component
import NewsLetterSignUpForm from '../components/signupform'; // Newsletter sign-up form component

// Function to get static props during build time
export async function getStaticProps() {
  // Retrieve menu files using the function from the lib directory
  const menu = getMenuFiles();
  // Retrieve testimony files using the function from the lib directory
  const testimonies = getTestimonyFiles();
  
  // Return props to the component
  return {
    props: {
      menu,
      testimonies,
    },
  };
}

// Home page component
export default function Home({menu, testimonies})  {
  return (
    // Main container div with CSS class
    <div className={styles.container}>
      {/* Head component for managing document head */}
      <Head>
        {/* Title of the document */}
        <title>M&E Creative Cup</title>
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
        {/* Grid container for menu items and testimonies */}
        <div className={styles.gridContainer}>

          {/* Rendering menu items */}
          {menu.map(({ fileName, content, imagePath }) => (
              <div key={fileName} className={styles.gridItem}>
                {/* Menu item image */}
                {<img src={imagePath} alt={fileName} />}
                {/* Menu item content */}
                <p>{content}</p>
              </div>
          ))}

          {/* Rendering testimonies */}
          {testimonies.map(({ fileName, content, imagePath }) => (
              <div key={fileName}>
                {/* Testimony image */}
                {<img src={imagePath} alt={fileName} />}
                {/* Testimony content */}
                <p>{content}</p>
              </div>
          ))}
        </div>
      </main>

      {/* Footer section with newsletter sign-up form */}
      <footer className={styles.footer}>
        {/* Newsletter sign-up form component */}
        <NewsLetterSignUpForm />
      </footer>
    </div>
  );
}
