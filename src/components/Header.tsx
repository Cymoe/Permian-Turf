'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Calculator } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Permian Turf Solutions</span>
          </Link>

          <div className={styles.navLinks}>
            <Link href="/commercial" className={styles.navLink}>
              Commercial
            </Link>
            <Link href="/residential" className={styles.navLink}>
              Residential
            </Link>
            <Link href="/water-savings" className={styles.navLink}>
              <Calculator size={16} />
              ROI Calculator
            </Link>
            <Link href="/portfolio" className={styles.navLink}>
              Portfolio
            </Link>
            <Link href="/case-studies" className={styles.navLink}>
              Case Studies
            </Link>
            <Link href="/blog" className={styles.navLink}>
              Resources
            </Link>
          </div>

          <div className={styles.navActions}>
            <a href="tel:432-555-0100" className={styles.phoneLink}>
              <Phone size={16} />
              <span>(432) 555-0100</span>
            </a>
            <Link href="/quote" className="btn btn-primary">
              Get Quote
            </Link>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/commercial" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Commercial
            </Link>
            <Link href="/residential" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Residential
            </Link>
            <Link href="/water-savings" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              ROI Calculator
            </Link>
            <Link href="/portfolio" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </Link>
            <Link href="/case-studies" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </Link>
            <Link href="/blog" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Resources
            </Link>
            <a href="tel:432-555-0100" className={styles.mobileLink}>
              Call (432) 555-0100
            </a>
            <Link href="/quote" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}