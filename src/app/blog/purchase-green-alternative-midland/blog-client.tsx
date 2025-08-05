'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, X, DollarSign, Clock, Shield, MapPin, Phone, Star } from 'lucide-react';
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
            <h1>Looking for a Purchase Green Alternative in Midland?</h1>
            <p className={styles.lead}>
              Get the same premium artificial turf with better prices, faster installation, 
              and true local expertise. Why pay franchise fees when you can work directly 
              with Midland&apos;s trusted turf professionals?
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <DollarSign />
                <strong>30% Less</strong>
                <span>Average savings</span>
              </div>
              <div className={styles.stat}>
                <Clock />
                <strong>2x Faster</strong>
                <span>Installation time</span>
              </div>
              <div className={styles.stat}>
                <Shield />
                <strong>15 Year</strong>
                <span>Warranty</span>
              </div>
              <div className={styles.stat}>
                <MapPin />
                <strong>100%</strong>
                <span>Local owned</span>
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
            <h2>Side-by-Side Comparison</h2>
            <p className={styles.subtitle}>
              See why more Midland property owners choose Permian Turf Solutions
            </p>

            <div className={styles.tableWrapper}>
              <table className={styles.compareTable}>
                <thead>
                  <tr>
                    <th>Service Features</th>
                    <th className={styles.competitor}>Purchase Green</th>
                    <th className={styles.us}>Permian Turf Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Average Price per sq ft</td>
                    <td>$8-12</td>
                    <td className={styles.highlight}>$6-8</td>
                  </tr>
                  <tr>
                    <td>Franchise Fees Added</td>
                    <td><X className={styles.no} /> Yes (15-20%)</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> None</td>
                  </tr>
                  <tr>
                    <td>Installation Timeline</td>
                    <td>3-4 weeks</td>
                    <td className={styles.highlight}>1-2 weeks</td>
                  </tr>
                  <tr>
                    <td>Local Crews</td>
                    <td><X className={styles.no} /> Subcontracted</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> Our employees</td>
                  </tr>
                  <tr>
                    <td>Showroom Required Visit</td>
                    <td><X className={styles.no} /> Yes</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> We come to you</td>
                  </tr>
                  <tr>
                    <td>Commercial Expertise</td>
                    <td>Limited</td>
                    <td className={styles.highlight}>Specialized</td>
                  </tr>
                  <tr>
                    <td>Oil Field Experience</td>
                    <td><X className={styles.no} /> None</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> Extensive</td>
                  </tr>
                  <tr>
                    <td>Owner Availability</td>
                    <td><X className={styles.no} /> Corporate</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> Direct access</td>
                  </tr>
                  <tr>
                    <td>Weekend/Emergency Service</td>
                    <td><X className={styles.no} /> No</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> Available</td>
                  </tr>
                  <tr>
                    <td>BBB Accredited</td>
                    <td>Check location</td>
                    <td className={styles.highlight}><Check className={styles.yes} /> A+ Rating</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.whyPayMore}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Why Are We 30% Less Expensive?</h2>
            <div className={styles.reasonsGrid}>
              <div className={styles.reason}>
                <h3>No Franchise Fees</h3>
                <p>
                  Purchase Green franchisees pay 6-8% royalties plus 2% marketing fees 
                  on every sale. These costs get passed directly to you. As an independent 
                  local business, we have zero franchise overhead.
                </p>
              </div>
              <div className={styles.reason}>
                <h3>Direct Manufacturer Relationships</h3>
                <p>
                  We buy directly from the same turf manufacturers but at better prices 
                  due to our volume in West Texas. No middleman markups or required 
                  franchise suppliers.
                </p>
              </div>
              <div className={styles.reason}>
                <h3>Lower Operating Costs</h3>
                <p>
                  No expensive showroom lease in prime retail space. No corporate 
                  marketing requirements. We operate lean and pass the savings to you.
                </p>
              </div>
              <div className={styles.reason}>
                <h3>Local Efficiency</h3>
                <p>
                  Our crews live here, our equipment is here, our warehouse is here. 
                  No travel costs, no out-of-town subcontractors, no delays waiting 
                  for corporate approval.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.realDifference}>
        <div className="container">
          <h2>The Real Difference: Local Expertise</h2>
          
          <div className={styles.expertiseGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={styles.expertiseCard}
            >
              <h3>We Know Permian Basin Challenges</h3>
              <ul>
                <li>Extreme heat resistance (110°F+ summers)</li>
                <li>Caliche soil preparation techniques</li>
                <li>Oil field traffic specifications</li>
                <li>Local water restriction compliance</li>
                <li>West Texas wind installation methods</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className={styles.expertiseCard}
            >
              <h3>Specialized Project Experience</h3>
              <ul>
                <li>500+ RV parks and man camps</li>
                <li>Major apartment complexes</li>
                <li>Oil company facilities</li>
                <li>Municipal projects</li>
                <li>Workforce housing specialists</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className="container">
          <h2>What Our Customers Say About Switching</h2>
          
          <div className={styles.testimonialGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={styles.testimonial}
            >
              <div className={styles.stars}>
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
              </div>
              <p>
                &ldquo;Purchase Green quoted us $165,000. Permian Turf did the same 
                job for $118,000 with better turf and faster installation. No 
                contest.&rdquo;
              </p>
              <cite>- Mike Harrison, Permian Plaza Apartments</cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={styles.testimonial}
            >
              <div className={styles.stars}>
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
              </div>
              <p>
                &ldquo;The Purchase Green salesperson was nice but couldn&apos;t answer 
                questions about oil field installations. Permian Turf has done 
                dozens of man camps. Experience matters.&rdquo;
              </p>
              <cite>- Jennifer Rodriguez, Eagle Ford Camp Manager</cite>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={styles.testimonial}
            >
              <div className={styles.stars}>
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
                <Star className={styles.star} />
              </div>
              <p>
                &ldquo;Having the owner&apos;s cell phone number made all the difference. 
                When we had a question on Sunday, he answered. Try that with a 
                franchise.&rdquo;
              </p>
              <cite>- David Chen, Midland Business Park</cite>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <h2>Common Questions About Switching</h2>
          
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Is your turf the same quality as Purchase Green?</h3>
              <p>
                Yes, often better. We source from the same major manufacturers 
                (like SYNLawn and Global Syn-Turf) but also have access to 
                commercial-grade products they don&apos;t carry. All with equal 
                or better warranties.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Do I need to visit a showroom?</h3>
              <p>
                No. We bring samples directly to your property where you can 
                see them in your actual lighting and setting. Much more convenient 
                and realistic than a showroom.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>What if I already got a quote from Purchase Green?</h3>
              <p>
                Perfect! Send it over and we&apos;ll provide a detailed comparison. 
                We typically beat their price by 25-35% for the exact same 
                specifications.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Are you really local?</h3>
              <p>
                100% Midland owned and operated since 2018. Our owner lives here, 
                our crews live here, and we&apos;re invested in this community. Not 
                a franchise, not a branch office - truly local.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className={styles.ctaContent}
          >
            <h2>Get Your Free Comparison Quote</h2>
            <p>
              See exactly how much you&apos;ll save versus Purchase Green. Same day 
              quotes, no showroom visit required.
            </p>
            
            <div className={styles.ctaBox}>
              <h3>Already Have a Purchase Green Quote?</h3>
              <p>Send it to us and we&apos;ll beat it by at least 20% - guaranteed.</p>
              
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Comparison Quote
                </Link>
                <a href="tel:432-555-0100" className="btn btn-outline">
                  <Phone size={20} />
                  (432) 555-0100
                </a>
              </div>
              
              <p className={styles.ctaNote}>
                Average savings: $47,000 on commercial projects
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}