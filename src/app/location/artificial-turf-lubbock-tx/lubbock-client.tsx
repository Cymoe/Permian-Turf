'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CheckCircle, Calendar, School, Wheat, Shield } from 'lucide-react';
import styles from '../location.module.css';

export default function LubbockClient() {
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
            <h1>Artificial Turf Installation in Lubbock, TX</h1>
            <p className={styles.subtitle}>
              Beat water restrictions with professional synthetic grass installation. Serving Texas Tech, 
              South Plains, and all of Hub City with drought-resistant landscaping solutions.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Free Lubbock Quote
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
              <h2>Proudly Serving Lubbock & South Plains</h2>
              <div className={styles.areaList}>
                <h3>Lubbock Neighborhoods</h3>
                <ul>
                  <li><CheckCircle size={16} /> Tech Terrace</li>
                  <li><CheckCircle size={16} /> Overton</li>
                  <li><CheckCircle size={16} /> Lakewood Estates</li>
                  <li><CheckCircle size={16} /> Canyon Lakes</li>
                  <li><CheckCircle size={16} /> Kings Park</li>
                  <li><CheckCircle size={16} /> Shadow Hills</li>
                </ul>

                <h3>Commercial Districts</h3>
                <ul>
                  <li><CheckCircle size={16} /> Texas Tech Campus Area</li>
                  <li><CheckCircle size={16} /> Depot District</li>
                  <li><CheckCircle size={16} /> Medical District</li>
                  <li><CheckCircle size={16} /> South Loop 289</li>
                </ul>

                <h3>Surrounding Areas</h3>
                <ul>
                  <li><CheckCircle size={16} /> Wolfforth</li>
                  <li><CheckCircle size={16} /> Shallowater</li>
                  <li><CheckCircle size={16} /> Slaton</li>
                  <li><CheckCircle size={16} /> Levelland</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <MapPin className={styles.icon} />
                  <div>
                    <strong>Hub City Coverage</strong>
                    <span>All of Lubbock County</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <School className={styles.icon} />
                  <div>
                    <strong>Texas Tech Specialist</strong>
                    <span>Student housing expert</span>
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
              <h2>Why Lubbock Needs Water Conservation Landscaping</h2>
              
              <div className={styles.reasonCard}>
                <Calendar className={styles.icon} />
                <h3>Strict Water Restrictions (April-September)</h3>
                <p>
                  Lubbock enforces mandatory watering schedules from April 1st to September 30th. 
                  Limited to specific days based on address, with no watering 10am-6pm. Our 
                  artificial turf eliminates these restrictions completely - water whenever you want (never)!
                </p>
              </div>

              <div className={styles.reasonCard}>
                <School className={styles.icon} />
                <h3>Texas Tech Student Housing Demand</h3>
                <p>
                  With 40,000+ Red Raiders and dozens of apartment complexes, property managers 
                  need low-maintenance solutions. We specialize in student housing installations 
                  that eliminate maintenance headaches and attract quality tenants.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Wheat className={styles.icon} />
                <h3>South Plains Agricultural Heritage</h3>
                <p>
                  Hub City farmers and ranchers understand water conservation. Our synthetic grass 
                  is perfect for residential areas, equipment yards, and recreational spaces on 
                  agricultural properties throughout the South Plains.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;As a property manager near Texas Tech, water bills were killing us. 
                  Since installing artificial turf, we&apos;ve saved $2,800/month and students 
                  love the always-green common areas.&quot;
                </blockquote>
                <cite>- Jennifer Martinez, Tech Terrace Property Manager</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Recent Lubbock Installations</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Texas Tech area student housing"
                width={400}
                height={300}
              />
              <h3>Raiders Pass Apartments</h3>
              <p>22,000 sq ft student housing complex</p>
              <span className={styles.savings}>Zero water usage, 100% occupancy</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="South Plains commercial property"
                width={400}
                height={300}
              />
              <h3>South Loop Business Center</h3>
              <p>15,000 sq ft commercial installation</p>
              <span className={styles.savings}>Saves $1,800/month on water</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Lubbock residential installation"
                width={400}
                height={300}
              />
              <h3>Canyon Lakes Estate</h3>
              <p>8,500 sq ft luxury home project</p>
              <span className={styles.savings}>Beat all water restrictions</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Lubbock Water Restriction Savings</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Lubbock Water Restrictions & Rates</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr style={{backgroundColor: '#fff3cd'}}>
                    <td colSpan={2}><strong>Mandatory Schedule (Apr 1 - Sept 30)</strong></td>
                  </tr>
                  <tr>
                    <td>Address ending 0,3,4,9</td>
                    <td>Mon & Thu only</td>
                  </tr>
                  <tr>
                    <td>Address ending 1,5,6</td>
                    <td>Tue & Fri only</td>
                  </tr>
                  <tr>
                    <td>Address ending 2,7,8</td>
                    <td>Wed & Sat only</td>
                  </tr>
                  <tr>
                    <td>Time restrictions</td>
                    <td>No watering 10am-6pm</td>
                  </tr>
                  <tr>
                    <td>Max per zone</td>
                    <td>1.5 inches/week</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Violations result in fines starting at $200
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Texas Tech Area Property Example</h3>
              <div className={styles.example}>
                <h4>Student Housing Complex (20,000 sq ft)</h4>
                <ul>
                  <li>Current water: 45,000 gal/month</li>
                  <li>Water cost: $850/month</li>
                  <li>Maintenance: $1,200/month</li>
                  <li>Annual cost: $24,600</li>
                  <li><strong>With artificial turf: $0</strong></li>
                  <li><strong>ROI: 18 months</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Hub City Savings
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
              <h2>Get Your Free Lubbock Installation Quote</h2>
              <p>
                Join Texas Tech property managers and South Plains homeowners who&apos;ve 
                eliminated water restrictions forever. Get your custom quote with guaranteed 
                pricing and local installation.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free consultation in Lubbock</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Texas Tech student housing specialist</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>South Plains agricultural expertise</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Beat water restrictions permanently</span>
                </div>
              </div>
              <div className={styles.localBadges}>
                <Shield className={styles.badge} />
                <span>Licensed in Lubbock County</span>
                <span>•</span>
                <span>Red Raider Owned</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="lubbock-location-page" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}