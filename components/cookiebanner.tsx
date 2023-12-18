'use client';

import Link from 'next/link'
import styles from '/cookieBanner.module.css'

import { getLocalStorage, setLocalStorage } from '/lib/storageHelper.ts';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(null);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent);
    }, []); // Run only once on mount to get the initial state

    useEffect(() => {
        if (cookieConsent !== null) {
            const newValue = cookieConsent ? 'granted' : 'denied';

            window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });

            setLocalStorage("cookie_consent", cookieConsent);

            // For Testing
            console.log("Cookie Consent: ", cookieConsent);
        }
    }, [cookieConsent]);

    if (cookieConsent !== null && cookieConsent) {
        return null; // Don't render anything if consent is granted
    }
    
    return (
        <div className={`${cookieConsent ? "hidden" : "flex"}`}>
    
            <div className='text-center'>
                <Link href="/cookies"><p>We use <span className='font-bold text-sky-400'>cookies</span> on our site.</p></Link>
            </div>
    
            <div className='flex gap-2'>
                <button className='...' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='...' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>   
        </div>
    )
    }