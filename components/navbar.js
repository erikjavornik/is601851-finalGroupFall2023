import Link from 'next/link';
import style from './navbar.module.css'

export default function Navbar()  {
    return (

        <nav>
            <Link className={style.menuitem} href="/">Home</Link>
            <Link className={style.menuitem} href="/about">About</Link>
            <Link className={style.menuitem} href="/menu">Menu</Link>
            <Link className={style.menuitem} href="/order">Order</Link>
        </nav>
    )
}