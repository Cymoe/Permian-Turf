import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.company}>
            <h3>Permian Turf Solutions</h3>
            <p>
              The Permian Basin&apos;s premier drought-resistant turf specialist. 
              Water-free landscaping solutions that eliminate irrigation costs completely.
            </p>
            <div className={styles.certifications}>
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>BBB Accredited</span>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Water-Free Services</h4>
            <Link href="/workforce-housing">Oil Field Housing Turf</Link>
            <Link href="/commercial#property">Commercial Property Turf</Link>
            <Link href="/residential">Drought-Resistant Residential</Link>
            <Link href="/portfolio">Water-Free Portfolio</Link>
          </div>

          <div className={styles.links}>
            <h4>Drought Resources</h4>
            <Link href="/water-savings">Drought Water Savings</Link>
            <Link href="/financing">Water-Free Financing</Link>
            <Link href="/warranty">Drought Warranty</Link>
            <Link href="/blog">Drought Tips & Resources</Link>
          </div>

          <div className={styles.contact}>
            <h4>Get In Touch</h4>
            <a href="tel:432-555-0100" className={styles.contactItem}>
              <Phone size={18} />
              (432) 555-0100
            </a>
            <a href="mailto:info@permianturfpro.com" className={styles.contactItem}>
              <Mail size={18} />
              info@permianturfpro.com
            </a>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>
                Drought-Resistant Turf Installation<br />
                Midland, Odessa & Permian Basin
              </span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 Permian Turf Solutions. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}