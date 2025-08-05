'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { HardHat, Truck, Shield, CheckCircle, Clock, Wrench, AlertTriangle } from 'lucide-react';
import styles from '../location.module.css';

export default function ManCampBigSpring() {
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
            <h1>Man Camp Turf Installation - Big Spring, TX</h1>
            <p className={styles.subtitle}>
              Heavy-duty artificial turf engineered for oil field workforce housing. 
              Zero maintenance, maximum durability for 24/7 operations.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Man Camp Quote
              </Link>
              <a href="tel:432-555-0100" className="btn btn-outline">
                Emergency: (432) 555-0100
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
              <h2>Big Spring & Howard County Service</h2>
              <div className={styles.areaList}>
                <h3>Man Camps We Service</h3>
                <ul>
                  <li><CheckCircle size={16} /> Eagle Ford Lodge</li>
                  <li><CheckCircle size={16} /> Permian Basin Housing</li>
                  <li><CheckCircle size={16} /> Big Spring Energy Camp</li>
                  <li><CheckCircle size={16} /> Howard County Workforce</li>
                  <li><CheckCircle size={16} /> Desert Sky Lodge</li>
                  <li><CheckCircle size={16} /> Lone Star Quarters</li>
                </ul>

                <h3>Extended Coverage</h3>
                <ul>
                  <li><CheckCircle size={16} /> Coahoma</li>
                  <li><CheckCircle size={16} /> Forsan</li>
                  <li><CheckCircle size={16} /> Sand Springs</li>
                  <li><CheckCircle size={16} /> Stanton</li>
                  <li><CheckCircle size={16} /> Garden City</li>
                  <li><CheckCircle size={16} /> Colorado City</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <HardHat className={styles.icon} />
                  <div>
                    <strong>10,000+ Workers</strong>
                    <span>Housed on our turf</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Clock className={styles.icon} />
                  <div>
                    <strong>24/7 Support</strong>
                    <span>Emergency repairs available</span>
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
              <h2>Why Man Camps Need Industrial Turf</h2>
              
              <div className={styles.reasonCard}>
                <Truck className={styles.icon} />
                <h3>Heavy Equipment Rated</h3>
                <p>
                  Our turf handles F-350s, welding trucks, and heavy equipment 
                  daily. No ruts, no dust, no mud - even with 24/7 shift changes 
                  and constant vehicle traffic.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Shield className={styles.icon} />
                <h3>Safety & Compliance</h3>
                <p>
                  Eliminate slip hazards from mud and standing water. Our turf 
                  provides consistent, safe surfaces that help meet OSHA 
                  requirements and reduce worker injuries.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Wrench className={styles.icon} />
                <h3>Zero Downtime Installation</h3>
                <p>
                  We work around your operations. Install in phases without 
                  disrupting worker housing. Most sections complete in 1-2 days 
                  with immediate use.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;No more mud complaints. No more weekend mowing. Our 400-bed 
                  facility looks professional year-round with zero effort.&quot;
                </blockquote>
                <cite>- Frank Morrison, Facility Manager</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Big Spring Area Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Eagle Ford Lodge man camp"
                width={400}
                height={300}
              />
              <h3>Eagle Ford Lodge</h3>
              <p>35,000 sq ft, 400-bed facility</p>
              <span className={styles.savings}>Zero maintenance for 3 years</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Big Spring Energy Camp"
                width={400}
                height={300}
              />
              <h3>Big Spring Energy Camp</h3>
              <p>28,000 sq ft common areas</p>
              <span className={styles.savings}>Eliminated dust complaints</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Howard County Workforce Housing"
                width={400}
                height={300}
              />
              <h3>Howard County Housing</h3>
              <p>45,000 sq ft phased installation</p>
              <span className={styles.savings}>$8,000/month savings</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Man Camp Cost Analysis</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Current Man Camp Expenses</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Dust control/watering</td>
                    <td>$2,000-4,000/month</td>
                  </tr>
                  <tr>
                    <td>Grading/mud removal</td>
                    <td>$1,500-3,000/month</td>
                  </tr>
                  <tr>
                    <td>Mowing (if applicable)</td>
                    <td>$1,000-2,000/month</td>
                  </tr>
                  <tr>
                    <td>Lost productivity (mud)</td>
                    <td>$2,000-5,000/month</td>
                  </tr>
                  <tr>
                    <td><strong>Total Monthly Impact</strong></td>
                    <td><strong>$6,500-14,000</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Includes direct costs and productivity losses
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>300-Bed Facility Example</h3>
              <div className={styles.example}>
                <h4>Typical Man Camp ROI</h4>
                <ul>
                  <li>Area: 40,000 sq ft</li>
                  <li>Monthly costs: $10,000</li>
                  <li>Annual expense: $120,000</li>
                  <li>Turf investment: $150,000</li>
                  <li>Payback: 15 months</li>
                  <li><strong>Improved worker retention</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Get Your Facility Analysis
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
              <h2>Upgrade Your Man Camp</h2>
              <p>
                Eliminate maintenance headaches and create a professional 
                environment that helps attract and retain quality workers. 
                Get your Big Spring facility quote today.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Phased installation - no disruption</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Heavy equipment certified</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>10-year warranty on materials</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Emergency repair service included</span>
                </div>
              </div>

              <div className={styles.reasonCard} style={{ marginTop: '2rem', background: '#FEF3C7' }}>
                <AlertTriangle className={styles.icon} style={{ color: '#F59E0B' }} />
                <h3 style={{ color: '#92400E' }}>Limited Time Offer</h3>
                <p style={{ color: '#78350F' }}>
                  20% discount for man camps booking before end of quarter. 
                  Lock in 2024 pricing before materials increase.
                </p>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="man-camp-big-spring-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}