'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, CheckCircle, DollarSign, Users, Award } from 'lucide-react';
import styles from '../location.module.css';

export default function CommercialPermianBasin() {
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
            <h1>Commercial Turf Installation - Permian Basin</h1>
            <p className={styles.subtitle}>
              Specialized commercial-grade artificial turf for oil field properties, 
              corporate campuses, and multi-family housing throughout the Permian Basin.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Commercial Quote
              </Link>
              <Link href="/commercial" className="btn btn-outline">
                View Services
              </Link>
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
              <h2>Serving the Entire Permian Basin</h2>
              <div className={styles.areaList}>
                <h3>Major Service Areas</h3>
                <ul>
                  <li><CheckCircle size={16} /> Midland</li>
                  <li><CheckCircle size={16} /> Odessa</li>
                  <li><CheckCircle size={16} /> Big Spring</li>
                  <li><CheckCircle size={16} /> Andrews</li>
                  <li><CheckCircle size={16} /> Pecos</li>
                  <li><CheckCircle size={16} /> Fort Stockton</li>
                  <li><CheckCircle size={16} /> Monahans</li>
                  <li><CheckCircle size={16} /> Kermit</li>
                </ul>

                <h3>Industries We Serve</h3>
                <ul>
                  <li><CheckCircle size={16} /> Oil & Gas Facilities</li>
                  <li><CheckCircle size={16} /> Workforce Housing</li>
                  <li><CheckCircle size={16} /> Corporate Campuses</li>
                  <li><CheckCircle size={16} /> Multi-Family Properties</li>
                  <li><CheckCircle size={16} /> Hotels & Hospitality</li>
                  <li><CheckCircle size={16} /> Medical Facilities</li>
                  <li><CheckCircle size={16} /> Retail Centers</li>
                  <li><CheckCircle size={16} /> Government Buildings</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Building2 className={styles.icon} />
                  <div>
                    <strong>500,000+ sq ft</strong>
                    <span>Commercial turf installed</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Award className={styles.icon} />
                  <div>
                    <strong>5-Year Guarantee</strong>
                    <span>Commercial warranty</span>
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
              <h2>Why Permian Basin Businesses Choose Us</h2>
              
              <div className={styles.reasonCard}>
                <TrendingUp className={styles.icon} />
                <h3>ROI in Under 2 Years</h3>
                <p>
                  Commercial properties typically see full return on investment 
                  in 18-24 months through eliminated water bills, zero maintenance 
                  costs, and increased property values.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Users className={styles.icon} />
                <h3>Oil Field Expertise</h3>
                <p>
                  We understand the unique challenges of oil field properties - 
                  heavy equipment, 24/7 operations, and transient workforce. 
                  Our commercial-grade turf is engineered for extreme durability.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <DollarSign className={styles.icon} />
                <h3>Bulk Pricing Available</h3>
                <p>
                  Managing multiple properties? We offer significant discounts 
                  for large-scale projects and portfolio-wide installations. 
                  Save up to 25% on projects over 50,000 sq ft.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;We installed turf at all 6 of our man camps. Cut our 
                  landscaping budget by 85% and improved resident satisfaction.&quot;
                </blockquote>
                <cite>- Regional Director, Permian Workforce Housing LLC</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Major Commercial Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Oil field man camp installation"
                width={400}
                height={300}
              />
              <h3>Eagle Ford Man Camp</h3>
              <p>35,000 sq ft workforce housing</p>
              <span className={styles.savings}>400-bed facility, zero maintenance</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Corporate campus project"
                width={400}
                height={300}
              />
              <h3>Energy Corp Headquarters</h3>
              <p>42,000 sq ft corporate campus</p>
              <span className={styles.savings}>LEED certified, 100% water reduction</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Multi-site portfolio installation"
                width={400}
                height={300}
              />
              <h3>Basin Properties Portfolio</h3>
              <p>125,000 sq ft across 8 locations</p>
              <span className={styles.savings}>$450,000 annual savings</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Commercial ROI Calculator</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Typical Commercial Costs</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Water (per 10,000 sq ft)</td>
                    <td>$800-1,200/month</td>
                  </tr>
                  <tr>
                    <td>Mowing & Maintenance</td>
                    <td>$600-900/month</td>
                  </tr>
                  <tr>
                    <td>Fertilizer & Chemicals</td>
                    <td>$200-400/month</td>
                  </tr>
                  <tr>
                    <td>Irrigation Repairs</td>
                    <td>$150-300/month</td>
                  </tr>
                  <tr>
                    <td><strong>Total Monthly Cost</strong></td>
                    <td><strong>$1,750-2,800</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Based on average Permian Basin commercial rates 2024
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Real Commercial Savings</h3>
              <div className={styles.example}>
                <h4>50,000 sq ft Property Analysis</h4>
                <ul>
                  <li>Current annual cost: $126,000</li>
                  <li>Turf installation: $200,000</li>
                  <li>Annual savings: $126,000</li>
                  <li>Payback period: 1.6 years</li>
                  <li><strong>10-year savings: $1,060,000</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Get Detailed ROI Analysis
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
              <h2>Request Commercial Consultation</h2>
              <p>
                Get a comprehensive site analysis, custom design recommendations, 
                and detailed ROI projections for your commercial property. Our 
                commercial specialists serve the entire Permian Basin.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free multi-site assessments</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Volume discounts up to 25%</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Dedicated project management</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Flexible payment terms available</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="commercial-permian-basin-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}