'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, Droplets, Building, Sun } from 'lucide-react';
import styles from '../location.module.css';

export default function OdessaClient() {
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
            <h1>Drought-Resistant Synthetic Grass Installation in Odessa, TX</h1>
            <p className={styles.subtitle}>
              Premium water-free landscaping solutions for Odessa homes and businesses. 
              Eliminate irrigation completely with drought-resistant synthetic grass designed for the Permian Basin.
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
              <h2>Proudly Serving Odessa</h2>
              <div className={styles.areaList}>
                <h3>Neighborhoods We Serve</h3>
                <ul>
                  <li><CheckCircle size={16} /> Parks Legado</li>
                  <li><CheckCircle size={16} /> Mission Estates</li>
                  <li><CheckCircle size={16} /> Quail Hollow</li>
                  <li><CheckCircle size={16} /> Sherwood</li>
                  <li><CheckCircle size={16} /> University Park</li>
                  <li><CheckCircle size={16} /> Downtown Odessa</li>
                </ul>

                <h3>Commercial Districts</h3>
                <ul>
                  <li><CheckCircle size={16} /> Music City Mall Area</li>
                  <li><CheckCircle size={16} /> East University Boulevard</li>
                  <li><CheckCircle size={16} /> JBS Parkway Business Center</li>
                  <li><CheckCircle size={16} /> Medical Center District</li>
                </ul>

                <h3>Extended Service</h3>
                <ul>
                  <li><CheckCircle size={16} /> West Odessa</li>
                  <li><CheckCircle size={16} /> Gardendale</li>
                  <li><CheckCircle size={16} /> Pleasant Farms</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <MapPin className={styles.icon} />
                  <div>
                    <strong>Quick Response</strong>
                    <span>15-minute drive to most Odessa locations</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Clock className={styles.icon} />
                  <div>
                    <strong>Installation Time</strong>
                    <span>Most projects complete in 1-3 days</span>
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
              <h2>Why Odessa Properties Need Water-Free Landscaping</h2>
              
              <div className={styles.reasonCard}>
                <Droplets className={styles.icon} />
                <h3>Permanent Drought Conditions</h3>
                <p>
                  Odessa&apos;s water crisis demands drought-resistant solutions. 
                  With rates up 40% and Stage 4 restrictions, water-free landscaping 
                  is the only sustainable option. Our synthetic grass uses zero water.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Building className={styles.icon} />
                <h3>Commercial Property Water Savings</h3>
                <p>
                  Odessa commercial property turf contractors trust us for water-free 
                  installations that eliminate irrigation costs completely while 
                  maintaining professional curb appeal year-round.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Sun className={styles.icon} />
                <h3>Extreme Heat & Drought Resilience</h3>
                <p>
                  With 250+ days of sunshine and severe drought, natural grass 
                  can&apos;t survive. Our drought-resistant turf thrives in 110°F heat 
                  without a drop of water.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;Our apartment complex near UTPB was spending $3,000/month 
                  on landscaping. Now it&apos;s zero, and residents love it.&quot;
                </blockquote>
                <cite>- Mike Rodriguez, Property Manager</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Recent Odessa Installations</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Parks Legado home installation"
                width={400}
                height={300}
              />
              <h3>Parks Legado Residence</h3>
              <p>6,500 sq ft luxury home installation</p>
              <span className={styles.savings}>$500/month water savings</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Medical office building"
                width={400}
                height={300}
              />
              <h3>Medical Center Office</h3>
              <p>8,000 sq ft medical facility</p>
              <span className={styles.savings}>Professional look, zero upkeep</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="University Park apartments"
                width={400}
                height={300}
              />
              <h3>University Park Apartments</h3>
              <p>25,000 sq ft student housing project</p>
              <span className={styles.savings}>Reduced maintenance 90%</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Odessa Water-Free Landscaping Savings</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Odessa Drought Water Rate Structure</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Base charge</td>
                    <td>$32.00/month</td>
                  </tr>
                  <tr>
                    <td>0 - 3,000 gallons</td>
                    <td>$4.75 per 1,000 gal</td>
                  </tr>
                  <tr>
                    <td>3,001 - 20,000 gallons</td>
                    <td>$6.25 per 1,000 gal</td>
                  </tr>
                  <tr>
                    <td>Over 20,000 gallons</td>
                    <td>$8.50 per 1,000 gal</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Rates effective 2024. Additional drought surcharges may apply.
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Water-Free Property Savings</h3>
              <div className={styles.example}>
                <h4>10,000 sq ft Commercial Property</h4>
                <ul>
                  <li>Current water use: 25,000 gal/month</li>
                  <li>Monthly water cost: $425</li>
                  <li>Annual landscaping: $6,000</li>
                  <li>Total annual cost: $11,100</li>
                  <li><strong>With water-free landscaping: $0</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Exact Savings
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
              <h2>Get Your Free Water-Free Landscaping Quote</h2>
              <p>
                Join Odessa property owners eliminating water usage completely with 
                drought-resistant turf. Get your personalized water-free landscaping 
                quote with complete ROI breakdown.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free drought assessment at your Odessa property</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Guaranteed pricing for 30 days</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Financing available with 0% for 12 months</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Odessa&apos;s highest-rated turf installer</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="odessa-location-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}