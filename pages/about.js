import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar.js'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
            <title>M&E Creative Cup About</title>
            <link rel="icon" href="/cafe_logo.jpg" />
            </Head>

            <header className={styles.navbar}>
            <img src="/cafe_logo.jpg" alt="M&E Creative Cup" className={styles.logo} />
            <Navbar />
            </header>

            <main className={styles.main}>
                <h1>Test</h1>
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