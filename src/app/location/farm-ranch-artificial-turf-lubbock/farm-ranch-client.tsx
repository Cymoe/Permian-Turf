'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Wheat, Home, Truck, CheckCircle, Droplets, Sun, Shield, TreePine, Phone } from 'lucide-react';
import styles from '../location.module.css';

export default function FarmRanchClient() {
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
            <h1>Farm & Ranch Artificial Turf - South Plains</h1>
            <p className={styles.subtitle}>
              Water-conscious synthetic grass solutions for West Texas agricultural properties. 
              Perfect for farm houses, equipment yards, and recreational areas where water is precious.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Agricultural Quote
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
              <h2>Serving South Plains Agriculture</h2>
              <div className={styles.areaList}>
                <h3>Agricultural Communities</h3>
                <ul>
                  <li><CheckCircle size={16} /> Wolfforth farming district</li>
                  <li><CheckCircle size={16} /> Shallowater ranch properties</li>
                  <li><CheckCircle size={16} /> New Deal agricultural area</li>
                  <li><CheckCircle size={16} /> Idalou farm country</li>
                  <li><CheckCircle size={16} /> Slaton ranch lands</li>
                  <li><CheckCircle size={16} /> Abernathy cotton country</li>
                </ul>

                <h3>Farm & Ranch Applications</h3>
                <ul>
                  <li><CheckCircle size={16} /> Ranch house lawns</li>
                  <li><CheckCircle size={16} /> Equipment yard areas</li>
                  <li><CheckCircle size={16} /> Shop surroundings</li>
                  <li><CheckCircle size={16} /> Entryway landscaping</li>
                  <li><CheckCircle size={16} /> Play areas for kids</li>
                  <li><CheckCircle size={16} /> Dog runs & pet areas</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Wheat className={styles.icon} />
                  <div>
                    <strong>Cotton Capital</strong>
                    <span>World&apos;s largest contiguous cotton-growing region</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Droplets className={styles.icon} />
                  <div>
                    <strong>Water Conservation</strong>
                    <span>Ogallala Aquifer preservation</span>
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
              <h2>Why Farmers & Ranchers Choose Artificial Turf</h2>
              
              <div className={styles.reasonCard}>
                <Droplets className={styles.icon} />
                <h3>Every Drop Counts</h3>
                <p>
                  South Plains farmers understand water value. Why waste precious irrigation 
                  on a lawn when it&apos;s needed for crops? Our turf uses zero water, 
                  helping preserve the Ogallala Aquifer for agricultural use.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Truck className={styles.icon} />
                <h3>Equipment-Friendly Durability</h3>
                <p>
                  Heavy farm equipment, diesel spills, and constant traffic won&apos;t damage 
                  our commercial-grade turf. Perfect for areas around shops, barns, and 
                  equipment storage where grass struggles to survive.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Sun className={styles.icon} />
                <h3>No Maintenance During Harvest</h3>
                <p>
                  During planting and harvest seasons, the last thing you need is lawn care. 
                  Our turf stays perfect year-round with zero maintenance, letting you focus 
                  on what matters - your agricultural operation.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;We farm 3,000 acres of cotton near Wolfforth. Put turf around our 
                  house and shop - haven&apos;t watered it once in 3 years. Looks better 
                  than any grass we ever had.&quot;
                </blockquote>
                <cite>- Bill Thompson, 4th Generation Cotton Farmer</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>South Plains Farm & Ranch Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Cotton farm house landscaping"
                width={400}
                height={300}
              />
              <h3>Wolfforth Cotton Farm</h3>
              <p>10,000 sq ft ranch house installation</p>
              <span className={styles.savings}>Zero water for landscaping</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Equipment yard artificial turf"
                width={400}
                height={300}
              />
              <h3>Shallowater Equipment Yard</h3>
              <p>15,000 sq ft shop & storage area</p>
              <span className={styles.savings}>Handles heavy machinery</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Ranch recreational area"
                width={400}
                height={300}
              />
              <h3>New Deal Ranch Recreation</h3>
              <p>8,000 sq ft play area & dog run</p>
              <span className={styles.savings}>Safe for kids & animals</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Agricultural Property Benefits</h2>
          <div className={styles.benefitGrid}>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Shield className={styles.icon} />
              <h3>Chemical Resistant</h3>
              <p>
                Herbicides, fertilizers, and equipment fluids won&apos;t damage our turf. 
                Unlike grass that dies from chemical exposure, synthetic stays perfect.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <TreePine className={styles.icon} />
              <h3>Windbreak Compatible</h3>
              <p>
                Install around windbreaks and tree lines where grass won&apos;t grow. 
                Perfect for shaded areas under equipment shelters and barn overhangs.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Home className={styles.icon} />
              <h3>Increase Property Value</h3>
              <p>
                Well-maintained landscaping increases farm property values. Impress 
                buyers, ag lenders, and visitors with professional appearance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Farm & Ranch Water Savings</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Agricultural Water Reality</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Irrigation water value</td>
                    <td>$200-400/acre-foot</td>
                  </tr>
                  <tr>
                    <td>Lawn water usage (5,000 sq ft)</td>
                    <td>125,000 gal/year</td>
                  </tr>
                  <tr>
                    <td>Equivalent crop irrigation</td>
                    <td>0.38 acres cotton</td>
                  </tr>
                  <tr>
                    <td>Lawn maintenance time</td>
                    <td>100+ hours/year</td>
                  </tr>
                  <tr style={{backgroundColor: '#d4edda'}}>
                    <td><strong>Opportunity cost</strong></td>
                    <td><strong>$3,000-5,000/year</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Water better used for crop production
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Typical Ranch House Example</h3>
              <div className={styles.example}>
                <h4>10,000 sq ft Rural Property</h4>
                <ul>
                  <li>Current water: 250,000 gal/year</li>
                  <li>Time spent mowing: 200 hours</li>
                  <li>Equipment fuel: $500/year</li>
                  <li>Turf investment: $35,000</li>
                  <li><strong>Water saved for crops</strong></li>
                  <li><strong>200 hours back for farming</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Agricultural Savings
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
              <h2>Get Your Farm & Ranch Quote</h2>
              <p>
                Join South Plains farmers and ranchers who&apos;ve eliminated landscape 
                watering forever. We understand agricultural properties and work around 
                your planting and harvest schedules.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Agricultural property expertise</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Flexible scheduling for farmers</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Heavy equipment safe installation</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Rural property experience</span>
                </div>
              </div>
              <div className={styles.localBadges}>
                <Wheat className={styles.badge} />
                <span>Ag Community Member</span>
                <span>•</span>
                <span>Water Conservation Partner</span>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="farm-ranch-lubbock" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}