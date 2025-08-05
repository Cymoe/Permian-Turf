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
              The Permian Basin's premier commercial turf specialist. 
              Water-smart landscapes that save money and look great year-round.
            </p>
            <div className={styles.certifications}>
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>BBB Accredited</span>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Services</h4>
            <Link href="/commercial#workforce">Workforce Housing</Link>
            <Link href="/commercial#property">Property Management</Link>
            <Link href="/residential">Residential</Link>
            <Link href="/portfolio">Portfolio</Link>
          </div>

          <div className={styles.links}>
            <h4>Resources</h4>
            <Link href="/water-savings">ROI Calculator</Link>
            <Link href="/financing">Financing Options</Link>
            <Link href="/warranty">10-Year Warranty</Link>
            <Link href="/faq">FAQ</Link>
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
                Serving Midland, Odessa,<br />
                and the Permian Basin
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