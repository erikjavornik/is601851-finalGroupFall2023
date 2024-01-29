// Importing the Link component from the 'next/link' module
import Link from 'next/link';

// Importing the CSS module for styling the navbar
import style from './navbar.module.css'

// Defining a functional component called Navbar
export default function Navbar()  {
    // Returning JSX representing the navbar component
    return (
        // Wrapping the navigation links in a <nav> element
        <nav>
            {/* Creating a Link component for navigating to the Home page */}
            <Link className={style.menuitem} href="/">Home</Link>
            {/* Creating a Link component for navigating to the About page */}
            <Link className={style.menuitem} href="/about">About</Link>
            {/* Creating a Link component for navigating to the Full Menu page */}
            <Link className={style.menuitem} href="/full_menu">Menu</Link>
            {/* Creating a Link component for navigating to the Order page */}
            <Link className={style.menuitem} href="/order">Order</Link>
        </nav>
    )
}
