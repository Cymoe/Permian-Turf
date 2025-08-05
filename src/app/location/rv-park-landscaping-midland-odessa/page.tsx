'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Home, Truck, Users, CheckCircle, DollarSign, Star } from 'lucide-react';
import styles from '../location.module.css';

export default function RVParkLandscaping() {
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
            <h1>RV Park Landscaping - Midland & Odessa</h1>
            <p className={styles.subtitle}>
              Specialized artificial turf solutions for RV parks, mobile home communities, 
              and temporary workforce housing. Zero maintenance, maximum durability.
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
              <h2>RV Park Turf Specialists</h2>
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

                <h3>Services for RV Parks</h3>
                <ul>
                  <li><CheckCircle size={16} /> Common area landscaping</li>
                  <li><CheckCircle size={16} /> Individual lot upgrades</li>
                  <li><CheckCircle size={16} /> Pet relief areas</li>
                  <li><CheckCircle size={16} /> Recreation spaces</li>
                  <li><CheckCircle size={16} /> High-traffic pathways</li>
                  <li><CheckCircle size={16} /> Pool surrounds</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Home className={styles.icon} />
                  <div>
                    <strong>50+ Parks</strong>
                    <span>Served in Permian Basin</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Star className={styles.icon} />
                  <div>
                    <strong>15% Higher</strong>
                    <span>Average occupancy rates</span>
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
              <h2>Why RV Parks Choose Our Turf</h2>
              
              <div className={styles.reasonCard}>
                <Truck className={styles.icon} />
                <h3>Heavy Vehicle Resistant</h3>
                <p>
                  Our commercial-grade turf withstands daily RV traffic, 
                  including Class A motorhomes and heavy fifth wheels. 
                  No ruts, no mud, no damage - guaranteed.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Users className={styles.icon} />
                <h3>Attract Long-Term Residents</h3>
                <p>
                  Oil field workers prefer parks with quality amenities. 
                  Beautiful, mud-free grounds help you maintain 95%+ 
                  occupancy with premium monthly rates.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <DollarSign className={styles.icon} />
                <h3>Eliminate Maintenance Costs</h3>
                <p>
                  Stop paying for weekly mowing, irrigation repairs, and 
                  mud cleanup. Most parks save $2,000-5,000 per month 
                  on maintenance alone.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;Since installing turf, we&apos;ve raised our monthly rates 
                  by $75 and still have a waiting list. Best investment we&apos;ve made.&quot;
                </blockquote>
                <cite>- Tom Baker, Midessa RV Park Owner</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>RV Park Success Stories</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Midessa RV Park transformation"
                width={400}
                height={300}
              />
              <h3>Midessa RV Park</h3>
              <p>260 units, 15,000 sq ft common areas</p>
              <span className={styles.savings}>100% occupancy since install</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Oil Country RV Park"
                width={400}
                height={300}
              />
              <h3>Oil Country RV Resort</h3>
              <p>180 units with premium amenities</p>
              <span className={styles.savings}>$4,500/month maintenance savings</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="West Texas Mobile Estates"
                width={400}
                height={300}
              />
              <h3>West Texas Mobile Estates</h3>
              <p>Complete property transformation</p>
              <span className={styles.savings}>Increased rates by $100/month</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>RV Park ROI Calculator</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Typical RV Park Costs</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Water (common areas)</td>
                    <td>$1,500-3,000/month</td>
                  </tr>
                  <tr>
                    <td>Mowing service</td>
                    <td>$800-1,500/month</td>
                  </tr>
                  <tr>
                    <td>Irrigation maintenance</td>
                    <td>$300-600/month</td>
                  </tr>
                  <tr>
                    <td>Mud/drainage issues</td>
                    <td>$500-1,000/month</td>
                  </tr>
                  <tr>
                    <td><strong>Total Monthly</strong></td>
                    <td><strong>$3,100-6,100</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Based on 100-200 unit RV park averages
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Real RV Park Example</h3>
              <div className={styles.example}>
                <h4>150-Unit RV Park Analysis</h4>
                <ul>
                  <li>Common area: 20,000 sq ft</li>
                  <li>Current costs: $4,500/month</li>
                  <li>Annual expense: $54,000</li>
                  <li>Turf investment: $65,000</li>
                  <li>Payback period: 14 months</li>
                  <li><strong>Can raise rates: $50-100/unit</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Park&apos;s Savings
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
              <h2>Transform Your RV Park</h2>
              <p>
                Join the leading RV parks in Midland-Odessa that have eliminated 
                maintenance headaches and increased occupancy rates. Get your 
                custom quote with financing options.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free consultation & design</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Phased installation available</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>10-year commercial warranty</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Preferred RV park pricing</span>
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