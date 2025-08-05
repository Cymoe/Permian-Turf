'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, TrendingDown, Users, Shield } from 'lucide-react';
import styles from '../location.module.css';

export default function MidlandTX() {
  return (
    <>
      <Header />
      
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Drought-Resistant Artificial Turf Installation in Midland, TX</h1>
            <p className={styles.subtitle}>
              Transform your Midland property with water-free landscaping solutions. Our drought-resistant 
              artificial turf eliminates water usage completely - perfect for Permian Basin water restrictions.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Free Quote
              </Link>
              <a href="tel:432-555-0100" className="btn btn-outline">
                <Phone size={18} />
                (432) 555-0100
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.localInfo}>
        <div className="container">
          <div className={styles.infoGrid}>
            <motion.div
              className={styles.serviceArea}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Serving All of Midland</h2>
              <div className={styles.areaList}>
                <h3>Popular Neighborhoods</h3>
                <ul>
                  <li><CheckCircle size={16} /> Grassland Estates</li>
                  <li><CheckCircle size={16} /> Saddle Club North</li>
                  <li><CheckCircle size={16} /> Midland Country Club</li>
                  <li><CheckCircle size={16} /> Greathouse</li>
                  <li><CheckCircle size={16} /> Trinity Park</li>
                  <li><CheckCircle size={16} /> Downtown Midland</li>
                </ul>

                <h3>Commercial Areas</h3>
                <ul>
                  <li><CheckCircle size={16} /> Loop 250 Business District</li>
                  <li><CheckCircle size={16} /> Big Spring Street Corridor</li>
                  <li><CheckCircle size={16} /> Energy Park</li>
                  <li><CheckCircle size={16} /> Midland Airpark</li>
                </ul>

                <h3>Also Serving</h3>
                <ul>
                  <li><CheckCircle size={16} /> Greenwood</li>
                  <li><CheckCircle size={16} /> Cotton Flat</li>
                  <li><CheckCircle size={16} /> Spraberry</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <MapPin className={styles.icon} />
                  <div>
                    <strong>Local Office</strong>
                    <span>1234 Business Park Dr, Midland</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Clock className={styles.icon} />
                  <div>
                    <strong>Response Time</strong>
                    <span>Same-day quotes in Midland</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.whyLocal}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Why Midland Chooses Water-Free Landscaping</h2>
              
              <div className={styles.reasonCard}>
                <TrendingDown className={styles.icon} />
                <h3>Drought-Resistant Solution for Stage 4 Restrictions</h3>
                <p>
                  With permanent drought conditions and Stage 4 water restrictions, 
                  natural grass is no longer viable in Midland. Our water-free landscaping 
                  provides a 100% drought-resistant alternative that stays green year-round.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Users className={styles.icon} />
                <h3>Oil Industry Housing Needs</h3>
                <p>
                  Midland&apos;s booming oil industry means high-traffic 
                  workforce housing. Our commercial-grade turf handles heavy 
                  use while looking pristine year-round.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Shield className={styles.icon} />
                <h3>100+ Degree Summers</h3>
                <p>
                  When temperatures soar above 100°F for weeks, natural grass 
                  burns and dies. Our UV-resistant turf stays green and cool 
                  even in extreme heat.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;After the 2022 drought killed our grass for the third time, 
                  we finally made the switch. Should have done it years ago!&quot;
                </blockquote>
                <cite>- Sarah M., Grassland Estates Resident</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Recent Midland Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Saddle Club North residential installation"
                width={400}
                height={300}
              />
              <h3>Saddle Club North Home</h3>
              <p>5,000 sq ft residential installation</p>
              <span className={styles.savings}>Saving $450/month on water</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Loop 250 commercial property"
                width={400}
                height={300}
              />
              <h3>Loop 250 Office Complex</h3>
              <p>12,000 sq ft commercial project</p>
              <span className={styles.savings}>Zero maintenance for 3 years</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Downtown Midland apartment complex"
                width={400}
                height={300}
              />
              <h3>Downtown Apartments</h3>
              <p>18,000 sq ft multi-family installation</p>
              <span className={styles.savings}>15% increase in occupancy</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Midland Water Savings Calculator</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Current Midland Water Rates</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>First 2,000 gallons</td>
                    <td>$28.50 base</td>
                  </tr>
                  <tr>
                    <td>2,001 - 15,000 gallons</td>
                    <td>$4.25 per 1,000 gal</td>
                  </tr>
                  <tr>
                    <td>15,001 - 30,000 gallons</td>
                    <td>$5.50 per 1,000 gal</td>
                  </tr>
                  <tr>
                    <td>Over 30,000 gallons</td>
                    <td>$7.25 per 1,000 gal</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Commercial rates are 25% higher. Rates increased 15% in 2023.
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Typical Midland Savings</h3>
              <div className={styles.example}>
                <h4>5,000 sq ft Residential Lawn</h4>
                <ul>
                  <li>Water usage: 15,000 gal/month (summer)</li>
                  <li>Current cost: $285/month</li>
                  <li>With turf: $0/month</li>
                  <li><strong>Annual savings: $3,420</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className="container">
          <div className={styles.quoteGrid}>
            <motion.div
              className={styles.quoteContent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Get Your Free Drought-Resistant Turf Quote</h2>
              <p>
                Join hundreds of Midland property owners who&apos;ve eliminated water usage 
                with drought-resistant turf. Get your custom water-free landscaping quote 
                with complete ROI analysis today.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free on-site consultation in Midland</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Same-day quotes available</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>10-year warranty on all installations</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Local Midland installation team</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="midland-location-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}