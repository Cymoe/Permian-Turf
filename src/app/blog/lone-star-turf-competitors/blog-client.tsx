'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, X, Award, Users, Wrench, Calendar, Phone, MessageSquare } from 'lucide-react';
import styles from '../compare.module.css';

export default function BlogClient() {
  return (
    <>
      <Header />
      
      <section className={styles.compareHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroContent}
          >
            <h1>Comparing Lone Star Turf with Midland Competitors</h1>
            <p className={styles.lead}>
              Looking at Lone Star Synthetic Turf? Smart move to compare options. 
              Here&apos;s an honest breakdown of how different installers stack up 
              in the Permian Basin market.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <Award />
                <strong>5+</strong>
                <span>Local installers</span>
              </div>
              <div className={styles.stat}>
                <Users />
                <strong>Varies</strong>
                <span>Crew sizes</span>
              </div>
              <div className={styles.stat}>
                <Wrench />
                <strong>10-15</strong>
                <span>Years warranty</span>
              </div>
              <div className={styles.stat}>
                <Calendar />
                <strong>1-4</strong>
                <span>Week installs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.comparisonTable}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>Midland-Odessa Turf Installer Comparison</h2>
            <p className={styles.subtitle}>
              Data based on 2024 quotes and customer feedback
            </p>

            <div className={styles.tableWrapper}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Price Range</th>
                    <th>Specialties</th>
                    <th>Pros</th>
                    <th>Cons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Lone Star Synthetic Turf</strong></td>
                    <td>$7-10/sq ft</td>
                    <td>Residential focus</td>
                    <td>
                      <ul>
                        <li>Established name</li>
                        <li>Good residential work</li>
                        <li>Fair pricing</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Limited commercial experience</li>
                        <li>Longer wait times</li>
                        <li>Subcontracted crews</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className={styles.highlightRow}>
                    <td><strong>Permian Turf Solutions</strong></td>
                    <td>$6-8/sq ft</td>
                    <td>Commercial & Oil Field</td>
                    <td>
                      <ul>
                        <li>Lowest prices</li>
                        <li>Fastest installation</li>
                        <li>Oil field expertise</li>
                        <li>Owner operated</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Books up quickly</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Purchase Green</strong></td>
                    <td>$8-12/sq ft</td>
                    <td>Franchise showroom</td>
                    <td>
                      <ul>
                        <li>National brand</li>
                        <li>Showroom available</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Highest prices</li>
                        <li>Franchise fees</li>
                        <li>Not truly local</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>West Texas Turf</strong></td>
                    <td>$6.50-9/sq ft</td>
                    <td>General landscaping</td>
                    <td>
                      <ul>
                        <li>Full landscaping services</li>
                        <li>Decent pricing</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Turf not primary focus</li>
                        <li>Limited warranty</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>DIY/Online Retailers</strong></td>
                    <td>$3-5/sq ft (material only)</td>
                    <td>Material sales</td>
                    <td>
                      <ul>
                        <li>Lower material cost</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>No installation</li>
                        <li>No warranty support</li>
                        <li>Hidden costs</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.keyFactors}>
        <div className="container">
          <h2>Key Factors to Compare</h2>
          
          <div className={styles.factorsGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className={styles.factorCard}
            >
              <h3>1. Total Project Cost</h3>
              <p>
                Don&apos;t just compare square foot prices. Include:
              </p>
              <ul>
                <li>Base preparation costs</li>
                <li>Drainage solutions</li>
                <li>Edging and borders</li>
                <li>Disposal fees</li>
                <li>Any hidden charges</li>
              </ul>
              <div className={styles.tip}>
                <strong>Tip:</strong> Get itemized quotes to compare apples to apples
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={styles.factorCard}
            >
              <h3>2. Installation Timeline</h3>
              <p>
                Faster isn&apos;t always better, but efficiency matters:
              </p>
              <ul>
                <li>How long from quote to start?</li>
                <li>Installation duration</li>
                <li>Weather delay policies</li>
                <li>Crew size and experience</li>
              </ul>
              <div className={styles.tip}>
                <strong>Our advantage:</strong> In-house crews mean 50% faster completion
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className={styles.factorCard}
            >
              <h3>3. Warranty Coverage</h3>
              <p>
                Look beyond the years - check what&apos;s actually covered:
              </p>
              <ul>
                <li>Product warranty vs installation warranty</li>
                <li>What voids the warranty?</li>
                <li>Local service availability</li>
                <li>Transferability</li>
              </ul>
              <div className={styles.tip}>
                <strong>Warning:</strong> Some warranties require annual inspections
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={styles.factorCard}
            >
              <h3>4. Local Experience</h3>
              <p>
                West Texas conditions require specific expertise:
              </p>
              <ul>
                <li>Caliche soil preparation</li>
                <li>Extreme heat resistance</li>
                <li>Wind installation methods</li>
                <li>Oil field specifications</li>
              </ul>
              <div className={styles.tip}>
                <strong>Ask:</strong> How many Midland projects have you completed?
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.specialExpertise}>
        <div className="container">
          <h2>Why Specialization Matters</h2>
          
          <div className={styles.expertiseComparison}>
            <div className={styles.genericInstaller}>
              <h3>General Turf Installers</h3>
              <ul>
                <li><X className={styles.no} /> Mostly residential focus</li>
                <li><X className={styles.no} /> Standard installation methods</li>
                <li><X className={styles.no} /> Limited commercial experience</li>
                <li><X className={styles.no} /> Basic warranty terms</li>
              </ul>
            </div>
            
            <div className={styles.specializedInstaller}>
              <h3>Commercial Specialists (Us)</h3>
              <ul>
                <li><Check className={styles.yes} /> RV parks & man camps expertise</li>
                <li><Check className={styles.yes} /> Heavy traffic specifications</li>
                <li><Check className={styles.yes} /> Oil field security clearances</li>
                <li><Check className={styles.yes} /> 24/7 installation capability</li>
                <li><Check className={styles.yes} /> Industrial-grade materials</li>
                <li><Check className={styles.yes} /> Bulk project discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.realComparison}>
        <div className="container">
          <h2>Real Project Comparison</h2>
          <p className={styles.subtitle}>
            Actual quotes for a 25,000 sq ft RV park project (October 2023)
          </p>
          
          <div className={styles.projectComparison}>
            <table className={styles.quoteTable}>
              <thead>
                <tr>
                  <th>Contractor</th>
                  <th>Quote</th>
                  <th>Timeline</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lone Star Synthetic</td>
                  <td>$198,000</td>
                  <td>4-5 weeks</td>
                  <td>Subcontracted installation</td>
                </tr>
                <tr>
                  <td>Purchase Green</td>
                  <td>$247,500</td>
                  <td>3-4 weeks</td>
                  <td>Required showroom visit</td>
                </tr>
                <tr>
                  <td>West Texas Turf</td>
                  <td>$187,000</td>
                  <td>6-8 weeks</td>
                  <td>Booked until next season</td>
                </tr>
                <tr className={styles.winningBid}>
                  <td><strong>Permian Turf Solutions</strong></td>
                  <td><strong>$162,500</strong></td>
                  <td><strong>10 days</strong></td>
                  <td><strong>Completed on schedule</strong></td>
                </tr>
              </tbody>
            </table>
            
            <div className={styles.savings}>
              <p>Client saved <strong>$35,500</strong> versus Lone Star</p>
              <p>Project completed <strong>3 weeks faster</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.questions}>
        <div className="container">
          <h2>Questions to Ask Any Installer</h2>
          
          <div className={styles.questionGrid}>
            <div className={styles.questionCategory}>
              <h3>About Experience</h3>
              <ol>
                <li>How many commercial projects have you completed locally?</li>
                <li>Can I see similar projects in person?</li>
                <li>Do you have oil field facility experience?</li>
                <li>Who actually does the installation?</li>
              </ol>
            </div>
            
            <div className={styles.questionCategory}>
              <h3>About Pricing</h3>
              <ol>
                <li>Is this the complete price or are there add-ons?</li>
                <li>What happens if you find unexpected issues?</li>
                <li>Do you offer bulk/commercial discounts?</li>
                <li>What payment terms do you offer?</li>
              </ol>
            </div>
            
            <div className={styles.questionCategory}>
              <h3>About Service</h3>
              <ol>
                <li>What&apos;s your actual start date?</li>
                <li>Who do I call if there&apos;s an issue?</li>
                <li>How do you handle warranty claims?</li>
                <li>Are you available for emergency repairs?</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyUs}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2>Why We Win Most Comparisons</h2>
            
            <div className={styles.winningFactors}>
              <div className={styles.factor}>
                <MessageSquare size={32} />
                <h3>Direct Communication</h3>
                <p>
                  Text the owner directly. No sales teams, no runaround. 
                  Get answers in minutes, not days.
                </p>
              </div>
              
              <div className={styles.factor}>
                <Calendar size={32} />
                <h3>Immediate Availability</h3>
                <p>
                  While others are booked for months, our larger crew 
                  capacity means we can start within days.
                </p>
              </div>
              
              <div className={styles.factor}>
                <Award size={32} />
                <h3>Proven Track Record</h3>
                <p>
                  500+ commercial installations. Every major RV park 
                  and man camp in the Permian Basin knows our work.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className={styles.ctaContent}
          >
            <h2>Get Your Comparison Quote</h2>
            <p>
              See why we win 85% of competitive bids. Fast quotes, 
              transparent pricing, proven results.
            </p>
            
            <div className={styles.ctaBox}>
              <h3>Already Have Other Quotes?</h3>
              <p>
                Perfect! Send them over and we&apos;ll show you a detailed 
                comparison including hidden costs others don&apos;t mention.
              </p>
              
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Comparison Quote
                </Link>
                <a href="tel:432-555-0100" className="btn btn-outline">
                  <Phone size={20} />
                  Text: (432) 555-0100
                </a>
              </div>
              
              <p className={styles.ctaNote}>
                Response within 2 hours during business days
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}