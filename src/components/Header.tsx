'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Calculator, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // Small delay before closing
    setHoverTimeout(timeout);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Permian Turf Solutions</span>
          </Link>

          <div className={styles.navLinks}>
            <div 
              className={styles.dropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={styles.dropdownTrigger}>
                Services
                <ChevronDown size={14} className={isServicesOpen ? styles.rotated : ''} />
              </button>
              {isServicesOpen && (
                <div className={styles.dropdownMenu}>
                  <Link href="/commercial" className={styles.dropdownLink}>
                    Commercial
                  </Link>
                  <Link href="/workforce-housing" className={styles.dropdownLink}>
                    Workforce Housing
                  </Link>
                  <Link href="/residential" className={styles.dropdownLink}>
                    Residential
                  </Link>
                  <Link href="/green-walls" className={styles.dropdownLink}>
                    Green Walls
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/water-savings" className={styles.navLink}>
              <Calculator size={16} />
              Calculator
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
            <div className={styles.mobileSection}>
              <span className={styles.mobileSectionTitle}>Services</span>
              <Link href="/commercial" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                Commercial
              </Link>
              <Link href="/workforce-housing" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                Workforce Housing
              </Link>
              <Link href="/residential" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                Residential
              </Link>
              <Link href="/green-walls" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
                Green Walls
              </Link>
            </div>
            
            <Link href="/water-savings" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>
              Calculator
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