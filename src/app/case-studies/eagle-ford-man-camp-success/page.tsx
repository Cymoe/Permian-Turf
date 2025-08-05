'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Ruler, DollarSign, Wrench, Shield, CheckCircle } from 'lucide-react';
import styles from '../case-study.module.css';

export default function EagleFordCaseStudy() {
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
            <span className={styles.category}>Workforce Housing Case Study</span>
            <h1>Eagle Ford Lodge: Zero Maintenance for 400 Workers</h1>
            <p className={styles.subtitle}>
              Discover how this 400-bed facility eliminated maintenance headaches 
              and improved worker retention with commercial-grade turf
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
                    <span>Big Spring, TX</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <Calendar className={styles.icon} />
                  <div>
                    <strong>Installation Date</strong>
                    <span>July 2023</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <Ruler className={styles.icon} />
                  <div>
                    <strong>Project Size</strong>
                    <span>35,000 sq ft total area</span>
                  </div>
                </div>
                <div className={styles.detail}>
                  <DollarSign className={styles.icon} />
                  <div>
                    <strong>Investment</strong>
                    <span>$105,000</span>
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
                  <Wrench className={styles.resultIcon} />
                  <strong>$6,500/month</strong>
                  <span>Maintenance Savings</span>
                </div>
                <div className={styles.result}>
                  <Shield className={styles.resultIcon} />
                  <strong>100%</strong>
                  <span>Fewer Complaints</span>
                </div>
                <div className={styles.result}>
                  <DollarSign className={styles.resultIcon} />
                  <strong>14 months</strong>
                  <span>ROI Period</span>
                </div>
                <div className={styles.result}>
                  <CheckCircle className={styles.resultIcon} />
                  <strong>27%</strong>
                  <span>Better Retention</span>
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
              Eagle Ford Lodge houses 400 oil field workers in a 24/7 operation where 
              first impressions and living conditions directly impact workforce stability.
            </p>

            <div className={styles.challengeGrid}>
              <div className={styles.challengeItem}>
                <h3>Constant Mud and Dust</h3>
                <p>
                  Heavy truck traffic from F-350s and equipment haulers created perpetual 
                  mud during rain and dust clouds during dry periods. Workers tracked mud 
                  into living quarters, creating cleaning nightmares and safety hazards.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Zero Maintenance Windows</h3>
                <p>
                  With three shifts operating continuously, finding time for landscaping 
                  was impossible. Mowing at any hour disturbed sleeping workers, leading 
                  to complaints and decreased productivity.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>High Worker Turnover</h3>
                <p>
                  Poor living conditions contributed to a 68% annual turnover rate. Workers 
                  chose competitors with better amenities, costing thousands in recruitment 
                  and training expenses.
                </p>
              </div>

              <div className={styles.challengeItem}>
                <h3>Safety Liability</h3>
                <p>
                  Slip-and-fall incidents from mud averaged 3 per month, creating workers&apos; 
                  compensation claims and OSHA concerns. The facility risked significant 
                  penalties and increased insurance costs.
                </p>
              </div>
            </div>

            <blockquote className={styles.quote}>
              <p>
                &quot;We had guys refusing room assignments near high-traffic areas because 
                of the mud. When your workers are already doing 12-hour shifts in 100-degree 
                heat, the last thing they need is a muddy mess at home.&quot;
              </p>
              <cite>- Frank Morrison, Facility Manager</cite>
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
              We developed a comprehensive turf installation plan that addressed the unique 
              demands of 24/7 workforce housing operations.
            </p>

            <div className={styles.solutionSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>01</span>
                <div>
                  <h3>Heavy-Duty Product Selection</h3>
                  <p>
                    We specified military-grade artificial turf with reinforced backing designed 
                    for vehicle traffic. The selected product features enhanced UV stability 
                    and compression recovery, ensuring it maintains appearance despite constant 
                    heavy use.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>02</span>
                <div>
                  <h3>Advanced Drainage System</h3>
                  <p>
                    We installed a comprehensive sub-base drainage system capable of handling 
                    50+ inches per hour. This eliminated standing water and mud formation even 
                    during West Texas flash floods, ensuring safe, dry surfaces year-round.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>03</span>
                <div>
                  <h3>Phased Installation Plan</h3>
                  <p>
                    Working with facility management, we divided the property into 8 sections. 
                    Each section was completed in 24-48 hours during shift changes, ensuring 
                    zero disruption to operations or worker rest periods.
                  </p>
                </div>
              </div>

              <div className={styles.step}>
                <span className={styles.stepNumber}>04</span>
                <div>
                  <h3>Safety Enhancement Features</h3>
                  <p>
                    We incorporated designated walkways with contrasting colors, anti-slip 
                    surfaces in high-traffic areas, and proper lighting integration. These 
                    features significantly reduced nighttime navigation hazards.
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
              The transformation exceeded expectations, delivering immediate operational 
              improvements and long-term financial benefits.
            </p>

            <div className={styles.resultsDetail}>
              <h3>Operational Excellence</h3>
              <div className={styles.financialGrid}>
                <div className={styles.metric}>
                  <span className={styles.label}>Ground Complaints</span>
                  <span className={styles.value}>Zero</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Slip Incidents</span>
                  <span className={styles.value}>-100%</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Maintenance Hours</span>
                  <span className={styles.value}>-95%</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Water Usage</span>
                  <span className={styles.value}>Zero</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>Equipment Needs</span>
                  <span className={styles.value}>None</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>24/7 Ready</span>
                  <span className={styles.value}>Always</span>
                </div>
              </div>

              <h3>Financial Impact</h3>
              <ul className={styles.improvementList}>
                <li>
                  <CheckCircle size={20} />
                  <span>Monthly savings of $6,500 in maintenance and water costs</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Eliminated 3 full-time groundskeeper positions</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Workers&apos; comp claims reduced to zero (saving $4,000/month)</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Total annual savings: $126,000</span>
                </li>
              </ul>

              <h3>Workforce Benefits</h3>
              <p>
                The improved living conditions had profound effects on workforce stability:
              </p>
              <ul className={styles.growthList}>
                <li>Worker retention improved by 27% (saving $180,000 in recruiting)</li>
                <li>New hire acceptance rate increased by 40%</li>
                <li>Became preferred housing for 3 major drilling contractors</li>
                <li>Waiting list maintained for premium rooms near turf areas</li>
              </ul>

              <h3>Long-Term Value</h3>
              <p>
                Three years post-installation, the turf shows minimal wear despite:
              </p>
              <ul className={styles.improvementList}>
                <li>
                  <CheckCircle size={20} />
                  <span>Daily traffic from 400+ workers and 200+ vehicles</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Exposure to oil, chemicals, and heavy equipment</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Extreme temperature variations (25°F to 115°F)</span>
                </li>
                <li>
                  <CheckCircle size={20} />
                  <span>Zero maintenance beyond occasional debris removal</span>
                </li>
              </ul>
            </div>

            <blockquote className={styles.quote}>
              <p>
                &quot;The turf transformed our facility from a muddy work camp to professional 
                workforce housing. We&apos;re not just saving money – we&apos;re keeping 
                better workers. That&apos;s invaluable in this industry.&quot;
              </p>
              <cite>- Frank Morrison, Facility Manager</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <h2>Transformation Gallery</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Before: Muddy conditions"
                width={600}
                height={400}
              />
              <p>Before: Constant mud from heavy vehicle traffic</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="After: Clean professional grounds"
                width={600}
                height={400}
              />
              <p>After: Professional appearance maintained 24/7</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Heavy equipment on turf"
                width={600}
                height={400}
              />
              <p>Turf handles daily heavy equipment traffic</p>
            </div>
            <div className={styles.galleryItem}>
              <Image 
                src="/api/placeholder/600/400" 
                alt="Night shift accessibility"
                width={600}
                height={400}
              />
              <p>Safe, clean access for all shift workers</p>
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
            <h2>Facility Manager&apos;s Testimonial</h2>
            <blockquote>
              <p>
                &quot;I&apos;ve managed oil field housing for 15 years, and mud has always 
                been our biggest enemy. Workers hate it, it&apos;s dangerous, and it makes 
                the whole facility look unprofessional.
              </p>
              <p>
                When Permian Turf Solutions showed me their commercial-grade product, I was 
                skeptical it could handle our abuse. But after seeing other installations, 
                we decided to try it. Best decision we&apos;ve ever made.
              </p>
              <p>
                No more 3 AM complaints about mowing. No more workers slipping in mud. No 
                more choosing between dust control and water bills. The turf just works, 
                every day, no matter what we throw at it.
              </p>
              <p>
                The ROI was faster than projected, but the real value is in worker satisfaction. 
                When you house 400 guys working brutal shifts, every comfort matters. This 
                investment shows we care about their living conditions, and they&apos;ve 
                responded by staying longer and referring better workers.&quot;
              </p>
            </blockquote>
            <cite>
              <strong>Frank Morrison</strong>
              <span>Facility Manager, Eagle Ford Lodge</span>
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
            <h2>Eliminate Your Maintenance Headaches</h2>
            <p>
              Like Eagle Ford Lodge, your workforce housing can achieve zero landscaping 
              maintenance while improving worker satisfaction. Let us show you how 
              commercial-grade artificial turf solves your toughest challenges.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Your Facility Assessment
              </Link>
              <Link href="/commercial" className="btn btn-outline">
                Learn More About Commercial Solutions
              </Link>
            </div>
            <p className={styles.contact}>
              24/7 Support Line: <a href="tel:432-555-0100">(432) 555-0100</a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}