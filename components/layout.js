import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = "M&E's Creative Cup";

export default function Layout({ children, home }) {
return (
    <div className={styles.container}>
        <Head>
        <meta
            name="description"
            content="Sample website/Final Project for cafe"
        />
        <meta name="og:title" content={siteTitle} />
        </Head>
    </div>
    );
}
