'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Droplets, AlertTriangle, Map, CheckCircle, TrendingDown, Cloud, Shield, Sun, Phone } from 'lucide-react';
import styles from '../location.module.css';

export default function PanhandleClient() {
  const panhandleCounties = [
    'Armstrong', 'Briscoe', 'Carson', 'Castro', 'Childress',
    'Collingsworth', 'Dallam', 'Deaf Smith', 'Donley', 'Gray',
    'Hall', 'Hansford', 'Hartley', 'Hemphill', 'Hutchinson',
    'Lipscomb', 'Moore', 'Ochiltree', 'Oldham', 'Parmer',
    'Potter', 'Randall', 'Roberts', 'Sherman', 'Swisher', 'Wheeler'
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
            <h1>Panhandle Drought-Resistant Turf Solutions</h1>
            <p className={styles.subtitle}>
              Protect the Ogallala Aquifer with water-free landscaping. Built for extreme 
              Panhandle weather - from scorching droughts to ice storms. Save 100% on irrigation forever.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Panhandle Quote
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
              <h2>Serving All 26 Panhandle Counties</h2>
              <div className={styles.areaList}>
                <h3>Complete Coverage Area</h3>
                <div className={styles.countyGrid}>
                  {panhandleCounties.map((county) => (
                    <span key={county} className={styles.countyItem}>
                      <CheckCircle size={14} /> {county}
                    </span>
                  ))}
                </div>

                <h3>Major Service Centers</h3>
                <ul>
                  <li><CheckCircle size={16} /> Amarillo & Canyon</li>
                  <li><CheckCircle size={16} /> Pampa & Borger</li>
                  <li><CheckCircle size={16} /> Dumas & Dalhart</li>
                  <li><CheckCircle size={16} /> Hereford & Dimmitt</li>
                  <li><CheckCircle size={16} /> Canadian & Perryton</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Map className={styles.icon} />
                  <div>
                    <strong>25,000 sq miles</strong>
                    <span>Service territory</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Droplets className={styles.icon} />
                  <div>
                    <strong>16 inches/year</strong>
                    <span>Average rainfall</span>
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
              <h2>The Panhandle Water Crisis</h2>
              
              <div className={styles.reasonCard}>
                <TrendingDown className={styles.icon} />
                <h3>Ogallala Aquifer Depletion</h3>
                <p>
                  The Panhandle has already depleted 50% of the Ogallala Aquifer. Current 
                  depletion rate: 2 feet per year. At this pace, irrigation becomes 
                  impossible within 30 years. Every gallon saved matters.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <AlertTriangle className={styles.icon} />
                <h3>Extreme Weather Events Increasing</h3>
                <p>
                  2023 saw record-breaking weather: 115°F heat waves, -15°F polar vortex, 
                  softball-sized hail, and 80mph straight-line winds. Natural grass can&apos;t 
                  survive these extremes - our turf thrives through it all.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Cloud className={styles.icon} />
                <h3>Dust Bowl 2.0 Prevention</h3>
                <p>
                  Reduced vegetation from drought creates dust storm conditions reminiscent 
                  of the 1930s. Our turf provides permanent ground cover that prevents 
                  erosion and dust, protecting air quality and property.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;We&apos;re fourth-generation Panhandle ranchers. Installing turf saved 
                  us 400,000 gallons last year - water we desperately need for cattle. It&apos;s 
                  about survival out here.&quot;
                </blockquote>
                <cite>- Jim Patterson, Castro County Rancher</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Panhandle Success Stories</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Panhandle ranch installation"
                width={400}
                height={300}
              />
              <h3>Deaf Smith County Ranch</h3>
              <p>25,000 sq ft headquarters area</p>
              <span className={styles.savings}>625,000 gallons saved annually</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Small town main street"
                width={400}
                height={300}
              />
              <h3>Downtown Dumas Beautification</h3>
              <p>Main street medians & parks</p>
              <span className={styles.savings}>City saves $45,000/year</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Agricultural facility"
                width={400}
                height={300}
              />
              <h3>Hansford County Co-op</h3>
              <p>40,000 sq ft grain facility</p>
              <span className={styles.savings}>Zero maintenance in harvest</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Panhandle Water Conservation Impact</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Ogallala Aquifer Facts</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr style={{backgroundColor: '#f8d7da'}}>
                    <td>Current depletion rate</td>
                    <td>2 feet/year</td>
                  </tr>
                  <tr>
                    <td>Panhandle irrigation usage</td>
                    <td>89% of water</td>
                  </tr>
                  <tr>
                    <td>Lawn water per household</td>
                    <td>250,000 gal/year</td>
                  </tr>
                  <tr>
                    <td>Well drilling depth increase</td>
                    <td>10 feet/year</td>
                  </tr>
                  <tr>
                    <td>Water table drop since 1950</td>
                    <td>150+ feet</td>
                  </tr>
                  <tr style={{backgroundColor: '#d4edda'}}>
                    <td><strong>With artificial turf</strong></td>
                    <td><strong>0 gallons used</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Panhandle Groundwater Conservation District
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Regional Impact Example</h3>
              <div className={styles.example}>
                <h4>If 1,000 Panhandle Homes Switch</h4>
                <ul>
                  <li>Water saved: 250 million gallons/year</li>
                  <li>Aquifer preservation: 768 acre-feet</li>
                  <li>Economic impact: $3.2 million saved</li>
                  <li>Carbon reduction: 1,200 tons/year</li>
                  <li><strong>Extends aquifer life significantly</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Conservation Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Panhandle-Specific Advantages</h2>
          <div className={styles.benefitGrid}>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield className={styles.icon} />
              <h3>Tornado & Hail Proof</h3>
              <p>
                Survives EF3 tornado winds and baseball-sized hail. After storms that 
                destroy everything else, your turf remains perfect. No replacement needed.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sun className={styles.icon} />
              <h3>UV Extreme Protection</h3>
              <p>
                7,000+ feet elevation means intense UV exposure. Our turf includes 
                maximum UV stabilizers to prevent fading in high-altitude sun.
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
              <h3>Fire Break Compatible</h3>
              <p>
                Creates defensible space without irrigation. Meets rural fire department 
                recommendations for property protection in drought conditions.
              </p>
            </motion.div>
          </div>

          <div className={styles.conservation}>
            <h3>Water Conservation Partners</h3>
            <div className={styles.partnerGrid}>
              <span>• Panhandle Groundwater Conservation District</span>
              <span>• North Plains Groundwater District</span>
              <span>• High Plains Underground Water District</span>
              <span>• Mesa Water District</span>
              <span>• Texas Alliance for Water Conservation</span>
              <span>• Ogallala Aquifer Program</span>
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
              <h2>Join the Panhandle Water Conservation Movement</h2>
              <p>
                Every installation helps preserve our precious Ogallala Aquifer. Get your 
                free quote and learn how switching to drought-resistant turf makes a real 
                difference for future generations.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Free water impact assessment</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Aquifer preservation certified</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Extreme weather warranty</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Regional installation teams</span>
                </div>
              </div>
              <div className={styles.urgency}>
                <strong>Limited Time: Conservation Rebates Available</strong>
                <p>Check with your water district for incentive programs</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="panhandle-drought" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}