'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Wind, CheckCircle, Factory, Droplets, Shield, AlertTriangle } from 'lucide-react';
import styles from '../location.module.css';

export default function AmarilloClient() {
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
            <h1>Synthetic Grass Installation in Amarillo, TX</h1>
            <p className={styles.subtitle}>
              Panhandle-tough artificial turf built for extreme weather. Withstands 70mph winds, 
              hail, and severe drought while saving 55 gallons per sq ft annually.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Free Amarillo Quote
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
              <h2>Serving All of Amarillo & The Panhandle</h2>
              <div className={styles.areaList}>
                <h3>Amarillo Neighborhoods</h3>
                <ul>
                  <li><CheckCircle size={16} /> Wolflin</li>
                  <li><CheckCircle size={16} /> The Colonies</li>
                  <li><CheckCircle size={16} /> Sleepy Hollow</li>
                  <li><CheckCircle size={16} /> Puckett Place</li>
                  <li><CheckCircle size={16} /> Westcliff</li>
                  <li><CheckCircle size={16} /> Tascosa</li>
                </ul>

                <h3>Commercial & Industrial</h3>
                <ul>
                  <li><CheckCircle size={16} /> Bell Helicopter facilities</li>
                  <li><CheckCircle size={16} /> Tyson Foods properties</li>
                  <li><CheckCircle size={16} /> BNSF Railway areas</li>
                  <li><CheckCircle size={16} /> Medical Center District</li>
                  <li><CheckCircle size={16} /> Amarillo Civic Center</li>
                </ul>

                <h3>Extended Coverage</h3>
                <ul>
                  <li><CheckCircle size={16} /> Canyon</li>
                  <li><CheckCircle size={16} /> Bushland</li>
                  <li><CheckCircle size={16} /> Lake Tanglewood</li>
                  <li><CheckCircle size={16} /> Palo Duro</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <MapPin className={styles.icon} />
                  <div>
                    <strong>Panhandle Hub</strong>
                    <span>Serving 26 counties</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Wind className={styles.icon} />
                  <div>
                    <strong>Wind Rated</strong>
                    <span>Tested to 70+ mph</span>
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
              <h2>Why Amarillo Needs Extreme Weather Turf</h2>
              
              <div className={styles.reasonCard}>
                <Wind className={styles.icon} />
                <h3>Panhandle Wind & Hail Resistant</h3>
                <p>
                  Amarillo averages 13.5 mph winds with frequent 50-70 mph gusts. Our turf 
                  uses specialized anchoring systems and heavy-duty backing that won&apos;t 
                  lift, tear, or damage in extreme Panhandle weather.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Droplets className={styles.icon} />
                <h3>Ogallala Aquifer Conservation</h3>
                <p>
                  The Panhandle Groundwater Conservation District promotes water preservation. 
                  Save 55 gallons per sq ft annually - that&apos;s 275,000 gallons for a 
                  typical 5,000 sq ft lawn. Critical for our depleting aquifer.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <AlertTriangle className={styles.icon} />
                <h3>Extreme Temperature Swings</h3>
                <p>
                  From 110°F summers to -10°F winters with ice storms, Amarillo weather 
                  destroys natural grass. Our UV-stable, freeze-resistant turf maintains 
                  perfect appearance through any weather extreme.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;After the 2023 hailstorm destroyed our landscaping for the third time, 
                  we went with synthetic. It&apos;s survived two more storms without a scratch.&quot;
                </blockquote>
                <cite>- Maria Gonzalez, Wolflin Historic District</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Recent Amarillo Installations</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Commercial property Amarillo"
                width={400}
                height={300}
              />
              <h3>Bell Helicopter Campus</h3>
              <p>35,000 sq ft industrial installation</p>
              <span className={styles.savings}>Zero maintenance in high winds</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Amarillo medical facility"
                width={400}
                height={300}
              />
              <h3>BSA Medical Plaza</h3>
              <p>20,000 sq ft healthcare facility</p>
              <span className={styles.savings}>Professional year-round</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Residential Amarillo installation"
                width={400}
                height={300}
              />
              <h3>The Colonies Estate</h3>
              <p>12,000 sq ft luxury home project</p>
              <span className={styles.savings}>Hail & wind proof</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Amarillo Water Conservation Analysis</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Panhandle Water Crisis Facts</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr style={{backgroundColor: '#f8d7da'}}>
                    <td>Ogallala depletion rate</td>
                    <td>2 feet/year</td>
                  </tr>
                  <tr>
                    <td>Amarillo water cost increase</td>
                    <td>40% since 2020</td>
                  </tr>
                  <tr>
                    <td>Annual lawn water usage</td>
                    <td>275,000 gal/5,000 sq ft</td>
                  </tr>
                  <tr>
                    <td>Summer restrictions</td>
                    <td>2 days/week max</td>
                  </tr>
                  <tr>
                    <td>Wind damage repairs</td>
                    <td>$1,000-3,000/year</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Panhandle Groundwater Conservation District data
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Amarillo Property Example</h3>
              <div className={styles.example}>
                <h4>15,000 sq ft Commercial Property</h4>
                <ul>
                  <li>Current water: 825,000 gal/year</li>
                  <li>Water cost: $750/month</li>
                  <li>Wind damage: $2,000/year</li>
                  <li>Maintenance: $1,500/month</li>
                  <li>Total annual: $29,000</li>
                  <li><strong>With synthetic grass: $0</strong></li>
                  <li><strong>ROI: 24 months</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Panhandle Savings
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Panhandle-Specific Benefits</h2>
          <div className={styles.benefitGrid}>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield className={styles.icon} />
              <h3>Dust Storm Proof</h3>
              <p>
                Permeable backing allows dust to pass through without accumulation. 
                No dead spots from sand deposits like natural grass experiences.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Factory className={styles.icon} />
              <h3>Industrial Grade</h3>
              <p>
                Same durability standards used by Tyson Foods and Bell Helicopter. 
                Handles heavy equipment and high traffic without damage.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <AlertTriangle className={styles.icon} />
              <h3>Insurance Savings</h3>
              <p>
                No hail damage claims for landscaping. Some insurers offer credits 
                for water-conserving improvements. Check with your provider.
              </p>
            </motion.div>
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
              <h2>Get Your Free Amarillo Installation Quote</h2>
              <p>
                Join Panhandle property owners who&apos;ve eliminated water usage and 
                weather damage forever. Get your custom quote with guaranteed pricing 
                and extreme weather warranty coverage.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free Amarillo consultation</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Panhandle weather warranty</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Industrial-grade materials</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Water conservation certified</span>
                </div>
              </div>
              <div className={styles.localBadges}>
                <Shield className={styles.badge} />
                <span>Panhandle Groundwater Partner</span>
                <span>•</span>
                <span>WindStorm Certified</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="amarillo-location-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}