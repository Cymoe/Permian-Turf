'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Ruler, DollarSign, TrendingDown, Users, CheckCircle } from 'lucide-react';
import styles from '../case-study.module.css';

export default function MidessaRVParkCaseStudy() {
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
            <span className={styles.category}>RV Park Case Study</span>
            <h1>Midessa RV Park: From Mud to Money</h1>
            <p className={styles.subtitle}>
              How one RV park eliminated $8,000 in monthly water costs and achieved 
              100% occupancy with artificial turf installation
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.overview}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <motion.div
              className={styles.projectDetails}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Project Overview</h2>
              <div className={styles.detailsList}>
                <div className={styles.detail}>
                  <MapPin className={styles.icon} />
                  <div>
                    <strong>Location</strong>
                    <span>Odessa, TX (Between Midland & Odessa)</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <Calendar className={styles.icon} />
                  <div>
                    <strong>Installation Date</strong>
                    <span>October 2023</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <Ruler className={styles.icon} />
                  <div>
                    <strong>Project Size</strong>
                    <span>15,000 sq ft common areas</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <DollarSign className={styles.icon} />
                  <div>
                    <strong>Investment</strong>
                    <span>$45,000</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.keyResults}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Key Results</h2>
              <div className={styles.resultsGrid}>
                <div className={styles.result}>
                  <TrendingDown className={styles.resultIcon} />
                  <strong>$8,000/month</strong>
                  <span>Water Savings</span>
                </div>
                <div className={styles.result}>
                  <Users className={styles.resultIcon} />
                  <strong>100%</strong>
                  <span>Occupancy Rate</span>
                </div>
                <div className={styles.result}>
                  <DollarSign className={styles.resultIcon} />
                  <strong>5.6 months</strong>
                  <span>Payback Period</span>
                </div>
                <div className={styles.result}>
                  <CheckCircle className={styles.resultIcon} />
                  <strong>$75/month</strong>
                  <span>Rate Increase</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.challenge}>
        <div className="container">
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Challenge</h2>
            <p className={styles.lead}>
              Midessa RV Park, a 260-unit facility strategically located between Midland 
              and Odessa, was facing a crisis that threatened their business model.
            </p>

            <div className={styles.challengeGrid}>
              <div className={styles.challengeItem}>
                <h3>Skyrocketing Water Bills</h3>
                <p>
                  Monthly water costs had reached $8,000 during summer months, with rates 
                  continuing to climb due to drought conditions and municipal rate increases. 
                  The park&apos;s large common areas required constant irrigation to maintain 
                  any semblance of green space.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Constant Resident Complaints</h3>
                <p>
                  The combination of heavy RV traffic and occasional rain created a muddy 
                  mess that residents tracked into their units. During dry periods, dust 
                  clouds made outdoor activities unpleasant. The park was receiving 15-20 
                  complaints weekly about ground conditions.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Declining Occupancy</h3>
                <p>
                  Despite being in a prime location for oil field workers, occupancy had 
                  dropped to 75%. Prospective residents often chose competitors with better 
                  amenities, and long-term residents were leaving for parks with more 
                  professional appearances.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Maintenance Nightmare</h3>
                <p>
                  The park employed two full-time groundskeepers just to manage mowing, 
                  irrigation repairs, and constant reseeding of dead areas. Equipment 
                  breakdowns and labor costs were eating into already thin margins.
                </p>
              </div>
            </div>

            <blockquote className={styles.quote}>
              <p>
                &quot;We were in a death spiral. Water costs kept going up, occupancy kept 
                going down, and no matter how much we spent on landscaping, the place 
                looked terrible by August.&quot;
              </p>
              <cite>- Tom Baker, Owner</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className={styles.solution}>
        <div className="container">
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Solution</h2>
            <p className={styles.lead}>
              After analyzing the property and understanding their specific needs, we designed 
              a comprehensive artificial turf solution that would address every challenge.
            </p>

            <div className={styles.solutionSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>01</span>
                <div>
                  <h3>Strategic Planning</h3>
                  <p>
                    We identified high-impact areas: the main entrance, office surroundings, 
                    central common areas, and walking paths. By focusing on these 15,000 sq ft, 
                    we could transform the park&apos;s appearance while staying within budget.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>02</span>
                <div>
                  <h3>Premium Product Selection</h3>
                  <p>
                    We specified commercial-grade turf with enhanced drainage backing, capable 
                    of handling 30+ inches of rain per hour. The selected product featured 
                    realistic color variation and optimal blade height for high-traffic areas.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>03</span>
                <div>
                  <h3>Professional Installation</h3>
                  <p>
                    Our crew completed the installation in just 5 days, working in sections to 
                    minimize disruption to residents. Advanced drainage systems were installed 
                    to handle West Texas flash floods, ensuring no more mud issues.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>04</span>
                <div>
                  <h3>Amenity Enhancement</h3>
                  <p>
                    We added value by creating defined pet relief areas and installing decorative 
                    rock borders. These touches elevated the property&apos;s appearance from 
                    basic RV parking to premium workforce housing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.results}>
        <div className="container">
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Results</h2>
            <p className={styles.lead}>
              The transformation was immediate and dramatic, exceeding even our most 
              optimistic projections.
            </p>

            <div className={styles.resultsDetail}>
              <h3>Financial Impact</h3>
              <div className={styles.financialGrid}>
                <div className={styles.metric}>
                  <span className={styles.label}>Monthly Water Savings</span>
                  <span className={styles.value}>$8,000</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Annual Water Savings</span>
                  <span className={styles.value}>$96,000</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Maintenance Savings</span>
                  <span className={styles.value}>$3,000/month</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Total Investment</span>
                  <span className={styles.value}>$45,000</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Payback Period</span>
                  <span className={styles.value}>5.6 months</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>10-Year Net Savings</span>
                  <span className={styles.value}>$1,275,000</span>
                </div>
              </div>

              <h3>Operational Improvements</h3>
              <ul className={styles.improvementList}>
                <li>
                  <CheckCircle size={20} />
                  <span>Reduced grounds staff from 2 full-time to 1 part-time employee</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Eliminated 100% of landscape-related resident complaints</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Zero irrigation system repairs or maintenance needed</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>No equipment costs for mowers, trimmers, or irrigation supplies</span>
                </li>
              </ul>

              <h3>Business Growth</h3>
              <p>
                The improved appearance allowed Midessa RV Park to reposition itself as a 
                premium option for oil field workers:
              </p>
              <ul className={styles.growthList}>
                <li>Increased monthly rates by $75 without losing a single tenant</li>
                <li>Achieved 100% occupancy within 60 days of installation</li>
                <li>Maintains a waiting list of 20+ units</li>
                <li>Increased revenue by $19,500/month from rate increases alone</li>
              </ul>
            </div>

            <blockquote className={styles.quote}>
              <p>
                &quot;We&apos;re not just saving money – we&apos;re making money. The turf 
                paid for itself in under 6 months, and now it&apos;s pure profit. Plus, 
                our residents love it. We haven&apos;t had a single ground-related complaint 
                since installation.&quot;
              </p>
              <cite>- Tom Baker, Owner</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <h2>Project Gallery</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Before: Muddy common areas"
                width={600}
                height={400}
              />
              <p>Before: Muddy common areas after typical rain</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="After: Clean, professional appearance"
                width={600}
                height={400}
              />
              <p>After: Clean, professional appearance year-round</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Pet area with drainage"
                width={600}
                height={400}
              />
              <p>Dedicated pet areas with superior drainage</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="High-traffic durability"
                width={600}
                height={400}
              />
              <p>High-traffic areas showing zero wear after 1 year</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className="container">
          <motion.div
            className={styles.testimonialContent}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Owner&apos;s Perspective</h2>
            <blockquote>
              <p>
                &quot;I was skeptical about the investment at first, but the numbers don&apos;t 
                lie. We&apos;re saving over $11,000 a month between water and maintenance. 
                But the real victory is having happy residents and a waiting list. 
              </p>
              <p>
                The Permian Turf Solutions team understood our business. They didn&apos;t just 
                install turf – they solved our biggest operational headache. Now I can focus 
                on growing the business instead of dealing with mud and dead grass.
              </p>
              <p>
                If you&apos;re running an RV park in West Texas without artificial turf, 
                you&apos;re literally throwing money away. Make the call.&quot;
              </p>
            </blockquote>
            <cite>
              <strong>Tom Baker</strong>
              <span>Owner, Midessa RV Park</span>
            </cite>
          </motion.div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Transform Your RV Park Today</h2>
            <p>
              Like Midessa RV Park, you can eliminate water costs, reduce maintenance, 
              and increase occupancy rates. Let us show you exactly how artificial turf 
              can transform your property and your profits.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Your Free Consultation
              </Link>
              <Link href="/water-savings" className="btn btn-outline">
                Calculate Your Savings
              </Link>
            </div>
            <p className={styles.contact}>
              Or call us directly: <a href="tel:432-555-0100">(432) 555-0100</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}