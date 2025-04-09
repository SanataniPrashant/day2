import styles  from '../ModuleCSS/Navbar.module.css';

import Link from 'next/link';
export default function Headder() {
  return (
    <>
    <div  className={styles.header}>

        <h1>Digital Store</h1>
      <div className={styles.nav}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#blog">Blog</Link>
      </div>
</div>
    </>
  )
}
