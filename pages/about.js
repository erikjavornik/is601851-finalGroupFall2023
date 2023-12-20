import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar.js'
import { getAboutFiles } from '../lib/about_posts';
import GoogleAnalytics from '../components/GoogleAnalytics';
import CookieBanner from '../components/cookiebanner';
import NewsLetterSignUpForm from '../components/signupform';

export async function getStaticProps() {
    const about = getAboutFiles();
    
    return {
      props: {
        about,
      },
    };
  }

export default function About({about}) {
    return (
        <div className={styles.container}>
            <Head>
            <title>M&E Creative Cup About</title>
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

                    {about.map(({ fileName, content, imagePath }) => (
                        <div key={fileName} className={styles.gridItem}>
                            {<img src={imagePath} alt={fileName} />}
                            <p>{content}</p>
                        </div>
                    ))}
                    
                </div>
            </main>

            <footer className={styles.footer}>
        <NewsLetterSignUpForm />
      </footer>


        </div>
    );
}