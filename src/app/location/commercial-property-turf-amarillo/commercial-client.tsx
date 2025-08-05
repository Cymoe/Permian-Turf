'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Building2, Factory, Truck, CheckCircle, DollarSign, Clock, Shield, Award, Phone } from 'lucide-react';
import styles from '../location.module.css';

export default function CommercialClient() {
  const majorEmployers = [
    { name: 'Tyson Foods', employees: '3,500+', type: 'Meat Processing' },
    { name: 'Bell Helicopter', employees: '1,600+', type: 'Aerospace' },
    { name: 'BNSF Railway', employees: '1,200+', type: 'Transportation' },
    { name: 'Pantex Plant', employees: '3,200+', type: 'Federal Facility' },
    { name: 'BSA Health System', employees: '3,000+', type: 'Healthcare' },
    { name: 'Northwest Texas Healthcare', employees: '2,500+', type: 'Healthcare' },
  ];

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
            <h1>Commercial Property Turf Solutions - Amarillo</h1>
            <p className={styles.subtitle}>
              Industrial-grade artificial turf for Amarillo&apos;s major employers. From Bell Helicopter 
              to Tyson Foods, we deliver zero-maintenance landscaping that withstands extreme conditions.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Commercial Quote
              </Link>
              <a href="tel:432-555-0100" className="btn btn-outline">
                <Phone size={18} />
                Commercial Sales Team
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
              <h2>Amarillo&apos;s Commercial Turf Experts</h2>
              <div className={styles.areaList}>
                <h3>Major Employers We Serve</h3>
                <div className={styles.employerGrid}>
                  {majorEmployers.map((employer) => (
                    <div key={employer.name} className={styles.employerCard}>
                      <strong>{employer.name}</strong>
                      <span>{employer.employees} employees</span>
                      <span className={styles.employerType}>{employer.type}</span>
                    </div>
                  ))}
                </div>

                <h3>Commercial Applications</h3>
                <ul>
                  <li><CheckCircle size={16} /> Corporate campus landscaping</li>
                  <li><CheckCircle size={16} /> Industrial facility grounds</li>
                  <li><CheckCircle size={16} /> Employee recreation areas</li>
                  <li><CheckCircle size={16} /> Parking lot medians</li>
                  <li><CheckCircle size={16} /> Security perimeters</li>
                  <li><CheckCircle size={16} /> Helicopter landing zones</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Factory className={styles.icon} />
                  <div>
                    <strong>15,000+ Employees</strong>
                    <span>In top 6 employers</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Building2 className={styles.icon} />
                  <div>
                    <strong>500+ Acres</strong>
                    <span>Commercial property</span>
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
              <h2>Why Amarillo Businesses Choose Our Turf</h2>
              
              <div className={styles.reasonCard}>
                <Truck className={styles.icon} />
                <h3>Heavy Equipment & Vehicle Safe</h3>
                <p>
                  From Bell Helicopter&apos;s aerospace equipment to Tyson&apos;s heavy trucks, 
                  our commercial-grade turf handles extreme loads. No ruts, no damage, no 
                  downtime - even with 24/7 industrial traffic.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <DollarSign className={styles.icon} />
                <h3>Reduce Operating Expenses</h3>
                <p>
                  Major employers report 60-80% reduction in landscape maintenance costs. 
                  Eliminate weekly mowing contracts, irrigation repairs, and seasonal 
                  replanting. Redirect savings to core business operations.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Shield className={styles.icon} />
                <h3>Security & Safety Compliant</h3>
                <p>
                  Meet federal facility requirements with clear sight lines and no hiding 
                  spots. Fire-resistant materials meet industrial safety standards. Perfect 
                  for Pantex and other high-security installations.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;We installed synthetic turf at our main facility entrance and employee 
                  areas. Zero maintenance during production peaks, and it survived the worst 
                  hailstorm in decades without damage.&quot;
                </blockquote>
                <cite>- Facilities Director, Major Amarillo Manufacturer</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Amarillo Commercial Installations</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Industrial facility landscaping"
                width={400}
                height={300}
              />
              <h3>Aerospace Manufacturing Campus</h3>
              <p>45,000 sq ft multi-building complex</p>
              <span className={styles.savings}>Handles helicopter downwash</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Food processing plant"
                width={400}
                height={300}
              />
              <h3>Food Processing Facility</h3>
              <p>30,000 sq ft employee & visitor areas</p>
              <span className={styles.savings}>USDA compliant installation</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Railway facility grounds"
                width={400}
                height={300}
              />
              <h3>Transportation Hub</h3>
              <p>50,000 sq ft railway facility</p>
              <span className={styles.savings}>Zero maintenance near tracks</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Commercial Property ROI Analysis</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Typical Commercial Costs</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Landscape contractor</td>
                    <td>$3,000-6,000/month</td>
                  </tr>
                  <tr>
                    <td>Water (50,000 sq ft)</td>
                    <td>$2,500-4,000/month</td>
                  </tr>
                  <tr>
                    <td>Irrigation maintenance</td>
                    <td>$1,000-2,000/month</td>
                  </tr>
                  <tr>
                    <td>Storm damage repairs</td>
                    <td>$5,000-10,000/year</td>
                  </tr>
                  <tr>
                    <td>Employee downtime</td>
                    <td>$2,000-5,000/month</td>
                  </tr>
                  <tr style={{backgroundColor: '#d4edda'}}>
                    <td><strong>Annual Total</strong></td>
                    <td><strong>$102,000-204,000</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Based on 50,000+ sq ft properties
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Major Employer Example</h3>
              <div className={styles.example}>
                <h4>Manufacturing Facility (60,000 sq ft)</h4>
                <ul>
                  <li>Current annual cost: $156,000</li>
                  <li>Turf investment: $210,000</li>
                  <li>Annual savings: $156,000</li>
                  <li>Federal tax credits: Available</li>
                  <li><strong>ROI: 16 months</strong></li>
                  <li><strong>10-year savings: $1.35M</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Facility&apos;s ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Commercial & Industrial Benefits</h2>
          <div className={styles.benefitGrid}>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Clock className={styles.icon} />
              <h3>24/7/365 Perfect Appearance</h3>
              <p>
                No seasonal dormancy or weather damage. Your facility looks professional 
                for customers, investors, and employees every single day.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Award className={styles.icon} />
              <h3>LEED Points Available</h3>
              <p>
                Water conservation and reduced maintenance equipment emissions can 
                contribute to LEED certification. We provide documentation for credits.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Building2 className={styles.icon} />
              <h3>Increase Property Value</h3>
              <p>
                Commercial appraisers recognize reduced operating costs. Properties 
                with permanent landscaping solutions command premium valuations.
              </p>
            </motion.div>
          </div>

          <div className={styles.certifications}>
            <h3>Commercial Certifications & Compliance</h3>
            <div className={styles.certGrid}>
              <span>• GSA Approved Vendor</span>
              <span>• OSHA Safety Compliant</span>
              <span>• Fire Marshal Certified</span>
              <span>• ADA Accessible Options</span>
              <span>• Storm Water Management</span>
              <span>• Federal Facility Cleared</span>
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
              <h2>Transform Your Commercial Property</h2>
              <p>
                Join Amarillo&apos;s leading employers who&apos;ve eliminated landscape 
                maintenance forever. Get your custom commercial quote with volume pricing, 
                phased installation options, and flexible payment terms.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free facility assessment</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Weekend/shutdown installation</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Federal vendor approved</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Net payment terms available</span>
                </div>
              </div>
              <div className={styles.urgency}>
                <strong>2024 Tax Benefits Available</strong>
                <p>Claim accelerated depreciation on qualifying installations</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="commercial-amarillo" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}