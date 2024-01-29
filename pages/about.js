// Importing necessary modules and components
import Head from 'next/head'; // Head component for managing document head
import styles from '../styles/Home.module.css'; // Stylesheet for the Home page
import Navbar from '../components/navbar.js'; // Navbar component
import { getAboutFiles } from '../lib/about_posts'; // Function to retrieve about files
import GoogleAnalytics from '../components/GoogleAnalytics'; // Google Analytics component
import CookieBanner from '../components/cookiebanner'; // Cookie banner component

// Function to get static props during build time
export async function getStaticProps() {
    // Retrieve about files using the function from the lib directory
    const about = getAboutFiles();
    
    // Return props to the component
    return {
        props: {
            about,
        },
    };
}

// About page component
export default function About({about}) {
    return (
        // Main container div with CSS class
        <div className={styles.container}>
            {/* Head component for managing document head */}
            <Head>
                {/* Title of the document */}
                <title>M&E Creative Cup About</title>
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
                {/* Grid container for about items */}
                <div className={styles.gridContainer}>
                    {/* Mapping over about items */}
                    {about.map(({ fileName, content, imagePath }) => (
                        // Each about item as a grid item
                        <div key={fileName} className={styles.gridItem}>
                            {/* Image for the about item */}
                            {<img src={imagePath} alt={fileName} />}
                            {/* Content of the about item */}
                            <p>{content}</p>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer section */}
            <footer className={styles.footer}>
                {/* Vercel link */}
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Powered by Vercel logo */}
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}
