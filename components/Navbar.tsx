import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoIcon}>◓</span>
        SafeGuard Vision
      </Link>
      
      <div className={styles.navLinks}>
        <Link href="#tecnologia" className={styles.navLink}>Tecnologia</Link>
        <Link href="#roi" className={styles.navLink}>Gestão & ROI</Link>
        <Link href="#seguranca" className={styles.navLink}>Segurança NR-12</Link>
        <button className={styles.ctaButton}>Agendar Demo</button>
      </div>
    </nav>
  );
}
