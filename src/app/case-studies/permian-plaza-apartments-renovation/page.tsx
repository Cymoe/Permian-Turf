'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Ruler, DollarSign, Home, TrendingUp, TrendingDown, CheckCircle } from 'lucide-react';
import styles from '../case-study.module.css';

export default function PermianPlazaCaseStudy() {
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
            <span className={styles.category}>Multi-Family Case Study</span>
            <h1>Permian Plaza: Multi-Family Property Transformation</h1>
            <p className={styles.subtitle}>
              See how this apartment complex reduced costs by 75% and increased 
              occupancy rates with strategic turf installation
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
                    <span>Midland, TX - Downtown District</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <Calendar className={styles.icon} />
                  <div>
                    <strong>Installation Date</strong>
                    <span>August 2023</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <Ruler className={styles.icon} />
                  <div>
                    <strong>Project Size</strong>
                    <span>22,000 sq ft across 8 buildings</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <DollarSign className={styles.icon} />
                  <div>
                    <strong>Investment</strong>
                    <span>$77,000</span>
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
                  <strong>75%</strong>
                  <span>Cost Reduction</span>
                </div>
                <div className={styles.result}>
                  <Home className={styles.resultIcon} />
                  <strong>15%</strong>
                  <span>Occupancy Increase</span>
                </div>
                <div className={styles.result}>
                  <DollarSign className={styles.resultIcon} />
                  <strong>$12,000</strong>
                  <span>Monthly Revenue</span>
                </div>
                <div className={styles.result}>
                  <TrendingUp className={styles.resultIcon} />
                  <strong>94%</strong>
                  <span>Satisfaction Rate</span>
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
              Permian Plaza Apartments, a 156-unit complex in downtown Midland, was struggling 
              to compete with newer properties while managing escalating maintenance costs.
            </p>

            <div className={styles.challengeGrid}>
              <div className={styles.challengeItem}>
                <h3>Unsustainable Water Costs</h3>
                <p>
                  With multiple courtyards and common areas totaling 22,000 sq ft, monthly 
                  water bills exceeded $5,500 during summer. Stage 4 restrictions made it 
                  impossible to maintain attractive grounds, hurting curb appeal.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Declining Occupancy</h3>
                <p>
                  As newer complexes opened with modern amenities, occupancy dropped to 82%. 
                  Dead grass and brown patches made the property look dated and poorly 
                  maintained, despite significant investment in other upgrades.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Maintenance Complexity</h3>
                <p>
                  Eight separate buildings with individual courtyards required coordinated 
                  maintenance schedules. The landscaping crew of 3 full-time employees 
                  couldn&apos;t keep up with mowing, irrigation repairs, and replanting.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Pet Area Problems</h3>
                <p>
                  Designated pet areas were constantly damaged, creating bare dirt patches 
                  that turned to mud. Pet owners complained about tracking dirt into 
                  apartments, while non-pet residents complained about the unsightly areas.
                </p>
              </div>
            </div>

            <blockquote className={styles.quote}>
              <p>
                &quot;We were caught in a terrible cycle. Spend more on water and watch it 
                evaporate, or let the grass die and watch residents leave. Either way, we 
                were losing money.&quot;
              </p>
              <cite>- Robert Chen, Regional Manager, LMB Properties</cite>
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
              We developed a comprehensive renovation plan that transformed Permian Plaza 
              into a modern, water-smart community that attracts premium residents.
            </p>

            <div className={styles.solutionSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>01</span>
                <div>
                  <h3>Strategic Area Selection</h3>
                  <p>
                    We identified high-impact zones: building entrances, pool areas, central 
                    courtyards, and pet relief stations. By focusing on these 22,000 sq ft, 
                    we maximized visual impact while controlling costs.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>02</span>
                <div>
                  <h3>Premium Residential Turf</h3>
                  <p>
                    Selected a luxury residential product with varied blade heights and 
                    realistic color variations. The soft feel and natural appearance elevated 
                    the property&apos;s perceived value immediately.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>03</span>
                <div>
                  <h3>Amenity Enhancement</h3>
                  <p>
                    Created dedicated pet areas with antimicrobial turf and superior drainage. 
                    Added putting greens near the pool and decorative rock gardens to create 
                    Instagram-worthy spaces that residents love.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>04</span>
                <div>
                  <h3>Phased Installation</h3>
                  <p>
                    Completed one building at a time over 3 weeks, allowing residents to see 
                    the transformation progress. This built excitement and minimized disruption 
                    while generating positive word-of-mouth.
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
              The transformation repositioned Permian Plaza as a premium property, 
              delivering immediate financial returns and long-term value creation.
            </p>

            <div className={styles.resultsDetail}>
              <h3>Immediate Cost Savings</h3>
              <div className={styles.financialGrid}>
                <div className={styles.metric}>
                  <span className={styles.label}>Water Bill Reduction</span>
                  <span className={styles.value}>$5,500/mo</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Landscape Labor</span>
                  <span className={styles.value}>-$4,200/mo</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Annual Savings</span>
                  <span className={styles.value}>$116,400</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Payback Period</span>
                  <span className={styles.value}>8 months</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>5-Year Savings</span>
                  <span className={styles.value}>$582,000</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Property Value</span>
                  <span className={styles.value}>+12%</span>
                </div>
              </div>

              <h3>Occupancy & Revenue Growth</h3>
              <ul className={styles.improvementList}>
                <li>
                  <CheckCircle size={20} />
                  <span>Occupancy increased from 82% to 97% within 90 days</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Average rent increased by $50/unit without resistance</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Pet deposits increased 40% with new premium pet areas</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Total monthly revenue increase: $12,000</span>
                </li>
              </ul>

              <h3>Resident Satisfaction</h3>
              <p>
                Post-installation surveys revealed dramatic improvements:
              </p>
              <ul className={styles.growthList}>
                <li>94% satisfaction with property grounds (up from 61%)</li>
                <li>87% would recommend to friends (up from 52%)</li>
                <li>92% of pet owners &quot;very satisfied&quot; with pet areas</li>
                <li>Online reviews improved from 3.2 to 4.6 stars</li>
              </ul>

              <h3>Operational Benefits</h3>
              <ul className={styles.improvementList}>
                <li>
                  <CheckCircle size={20} />
                  <span>Reduced landscape staff from 3 to 1 part-time employee</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Eliminated all irrigation system maintenance</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Zero landscape-related resident complaints</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Property manager saves 10+ hours weekly on landscape issues</span>
                </li>
              </ul>
            </div>

            <blockquote className={styles.quote}>
              <p>
                &quot;The turf completely changed our property&apos;s trajectory. We went 
                from struggling to maintain 82% occupancy to having a waiting list. The 
                ROI was incredible, but the operational simplicity is priceless.&quot;
              </p>
              <cite>- Robert Chen, Regional Manager</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <h2>Property Transformation</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Before: Dead grass in courtyard"
                width={600}
                height={400}
              />
              <p>Before: Struggling grass in central courtyard</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="After: Lush green courtyard"
                width={600}
                height={400}
              />
              <p>After: Permanently green gathering space</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Premium pet area"
                width={600}
                height={400}
              />
              <p>New pet areas residents love</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Pool area enhancement"
                width={600}
                height={400}
              />
              <p>Resort-style pool area with putting green</p>
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
            <h2>Property Management Perspective</h2>
            <blockquote>
              <p>
                &quot;As a regional manager overseeing 12 properties, Permian Plaza was my 
                biggest headache. The landscaping alone consumed 20% of my time - dealing 
                with contractors, resident complaints, and constant irrigation issues.
              </p>
              <p>
                When we installed artificial turf, everything changed overnight. Not only 
                did we eliminate the maintenance nightmare, but the property transformed 
                into one of our top performers. We&apos;re now at 97% occupancy with the 
                highest resident satisfaction scores in our portfolio.
              </p>
              <p>
                The financial impact was immediate - we&apos;re saving nearly $10,000 monthly 
                while generating an extra $12,000 in revenue. But beyond the numbers, I&apos;ve 
                reclaimed countless hours to focus on actual property improvements instead 
                of fighting a losing battle with dead grass.
              </p>
              <p>
                We&apos;re now planning turf installations at three more properties. In this 
                market, with these water costs, it&apos;s not just smart - it&apos;s essential.&quot;
              </p>
            </blockquote>
            <cite>
              <strong>Robert Chen</strong>
              <span>Regional Manager, LMB Properties</span>
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
            <h2>Transform Your Multi-Family Property</h2>
            <p>
              Like Permian Plaza, your apartment complex can reduce costs, increase 
              occupancy, and delight residents with beautiful, maintenance-free grounds. 
              Let us show you the possibilities.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">
                Schedule Property Assessment
              </Link>
              <Link href="/portfolio" className="btn btn-outline">
                View More Projects
              </Link>
            </div>
            <p className={styles.contact}>
              Property Manager Hotline: <a href="tel:432-555-0100">(432) 555-0100</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}