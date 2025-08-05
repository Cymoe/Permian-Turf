'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Home, Truck, Users, CheckCircle, DollarSign, Star } from 'lucide-react';
import styles from '../location.module.css';

export default function RVParkClient() {
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
            <h1>Water-Free RV Park Landscaping - Midland & Odessa</h1>
            <p className={styles.subtitle}>
              Drought-resistant artificial turf solutions for RV parks and oil field housing. 
              Eliminate irrigation costs with water-free landscaping designed for the Permian Basin drought.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get RV Park Quote
              </Link>
              <a href="tel:432-555-0100" className="btn btn-outline">
                Call (432) 555-0100
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
              <h2>Drought-Resistant RV Park Specialists</h2>
              <div className={styles.areaList}>
                <h3>RV Parks We&apos;ve Transformed</h3>
                <ul>
                  <li><CheckCircle size={16} /> Midessa RV Park</li>
                  <li><CheckCircle size={16} /> Permian Basin RV Resort</li>
                  <li><CheckCircle size={16} /> Oil Country RV Park</li>
                  <li><CheckCircle size={16} /> West Texas Mobile Estates</li>
                  <li><CheckCircle size={16} /> Lone Star RV Ranch</li>
                  <li><CheckCircle size={16} /> Desert Rose RV Community</li>
                </ul>

                <h3>Water-Free Services for RV Parks</h3>
                <ul>
                  <li><CheckCircle size={16} /> Drought-resistant common areas</li>
                  <li><CheckCircle size={16} /> Water-free lot upgrades</li>
                  <li><CheckCircle size={16} /> Zero-irrigation pet areas</li>
                  <li><CheckCircle size={16} /> Drought-proof recreation spaces</li>
                  <li><CheckCircle size={16} /> High-traffic water-free pathways</li>
                  <li><CheckCircle size={16} /> Pool surrounds with no water usage</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Home className={styles.icon} />
                  <div>
                    <strong>50+ Parks</strong>
                    <span>Water-free installations</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Star className={styles.icon} />
                  <div>
                    <strong>100% Water</strong>
                    <span>Savings guaranteed</span>
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
              <h2>Why RV Parks Choose Water-Free Landscaping</h2>
              
              <div className={styles.reasonCard}>
                <Truck className={styles.icon} />
                <h3>Drought-Resistant & Heavy Vehicle Ready</h3>
                <p>
                  Our water-free landscaping withstands both extreme drought and daily RV traffic. 
                  No irrigation needed, no mud problems - perfect for oil field housing 
                  and workforce accommodations in the Permian Basin.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Users className={styles.icon} />
                <h3>Attract Oil Field Workers</h3>
                <p>
                  Oil field housing demands quality amenities without water waste. 
                  Our drought-resistant turf helps maintain 95%+ occupancy with 
                  premium rates while eliminating all irrigation costs.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <DollarSign className={styles.icon} />
                <h3>Eliminate Water & Maintenance Costs</h3>
                <p>
                  Stop paying for irrigation, mowing, and mud cleanup. 
                  Our water-free landscaping saves RV parks $3,000-6,000 monthly 
                  on water and maintenance in drought conditions.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;Since installing drought-resistant turf, we&apos;ve eliminated our 
                  $2,500 monthly water bill and raised rates by $75. Best ROI ever.&quot;
                </blockquote>
                <cite>- Tom Baker, Midessa RV Park Owner</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Water-Free RV Park Success Stories</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Midessa RV Park transformation"
                width={400}
                height={300}
              />
              <h3>Midessa RV Park</h3>
              <p>260 units, 15,000 sq ft water-free areas</p>
              <span className={styles.savings}>Zero irrigation costs</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Oil Country RV Park"
                width={400}
                height={300}
              />
              <h3>Oil Country RV Resort</h3>
              <p>180 units with drought-resistant amenities</p>
              <span className={styles.savings}>$4,500/month water savings</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="West Texas Mobile Estates"
                width={400}
                height={300}
              />
              <h3>West Texas Mobile Estates</h3>
              <p>Complete water-free transformation</p>
              <span className={styles.savings}>Eliminated all irrigation</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>RV Park Water-Free ROI Calculator</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Typical RV Park Drought Costs</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Drought water rates</td>
                    <td>$2,500-4,000/month</td>
                  </tr>
                  <tr>
                    <td>Mowing service</td>
                    <td>$800-1,500/month</td>
                  </tr>
                  <tr>
                    <td>Irrigation repairs</td>
                    <td>$500-800/month</td>
                  </tr>
                  <tr>
                    <td>Drought damage</td>
                    <td>$1,000-2,000/month</td>
                  </tr>
                  <tr>
                    <td><strong>Total Monthly</strong></td>
                    <td><strong>$4,800-8,300</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *During Stage 4 water restrictions
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Water-Free RV Park Example</h3>
              <div className={styles.example}>
                <h4>150-Unit Oil Field Housing</h4>
                <ul>
                  <li>Common area: 20,000 sq ft</li>
                  <li>Current drought costs: $6,500/month</li>
                  <li>Annual expense: $78,000</li>
                  <li>Water-free investment: $65,000</li>
                  <li>Payback period: 10 months</li>
                  <li><strong>Zero water usage forever</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Water-Free Savings
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
              <h2>Transform Your RV Park with Water-Free Landscaping</h2>
              <p>
                Join leading RV parks and oil field housing that have eliminated 
                water usage completely with drought-resistant turf. Get your 
                custom water-free landscaping quote with financing options.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free drought assessment & design</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Phased water-free installation</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>10-year drought warranty</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Oil field housing specialist</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="rv-park-landscaping-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}