'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Truck, Shield, DollarSign, Clock } from 'lucide-react';
import styles from '../blog.module.css';

export default function BlogClient() {
  return (
    <>
      <Header />
      
      <article className={styles.blogPost}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.postHeader}
          >
            <h1>Man Camp Landscaping: Zero Maintenance Solutions for Oil Field Housing</h1>
            
            <div className={styles.postMeta}>
              <span>
                <Calendar size={16} />
                January 22, 2024
              </span>
              <span>
                <User size={16} />
                By Permian Turf Solutions
              </span>
            </div>

            <Image
              src="/api/placeholder/800/400"
              alt="Man camp with artificial turf landscaping"
              width={800}
              height={400}
              className={styles.featuredImage}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.postContent}
          >
            <p className={styles.lead}>
              Managing man camps and workforce housing in West Texas oil fields presents unique 
              challenges. With 24/7 operations, heavy equipment traffic, and rotating crews, 
              traditional landscaping becomes a costly maintenance nightmare. Here&apos;s why 
              artificial turf has become the go-to solution for smart property managers.
            </p>

            <h2>The Man Camp Maintenance Challenge</h2>
            
            <p>
              Oil field housing operates differently than any other type of property. Workers 
              arrive and depart at all hours, heavy trucks constantly move through the property, 
              and there&apos;s no &ldquo;downtime&rdquo; for regular maintenance. Traditional grass simply 
              can&apos;t survive this environment.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <Truck className={styles.icon} />
                <strong>500+</strong>
                <span>Daily vehicle movements</span>
              </div>
              <div className={styles.stat}>
                <Shield className={styles.icon} />
                <strong>24/7</strong>
                <span>Continuous operations</span>
              </div>
              <div className={styles.stat}>
                <DollarSign className={styles.icon} />
                <strong>$8,000/mo</strong>
                <span>Average landscaping cost</span>
              </div>
              <div className={styles.stat}>
                <Clock className={styles.icon} />
                <strong>0 Hours</strong>
                <span>Maintenance with turf</span>
              </div>
            </div>

            <h2>Why Artificial Turf Works for Workforce Housing</h2>

            <h3>1. Truly Zero Maintenance</h3>
            <p>
              Once installed, artificial turf requires absolutely no maintenance. No mowing 
              crews disrupting sleep schedules. No irrigation systems to repair. No muddy 
              walkways during shift changes. Your maintenance team can focus on what really 
              matters - keeping housing units operational.
            </p>

            <h3>2. Handles Heavy Equipment</h3>
            <p>
              Our commercial-grade turf is engineered for industrial use. Service trucks, 
              welding rigs, and crew transport vehicles can drive over it daily without 
              creating ruts or dead spots. The specialized backing and infill system 
              distributes weight evenly, maintaining a perfect appearance year-round.
            </p>

            <h3>3. Improves Safety & Security</h3>
            <p>
              Eliminate slip hazards from mud and standing water. Create clear sight lines 
              for security cameras with no overgrown areas. Reduce pest habitats that attract 
              snakes and rodents. Workers appreciate coming home to a clean, professional 
              environment after long shifts.
            </p>

            <h3>4. Immediate ROI</h3>
            <p>
              Most man camps see payback within 8-12 months. Eliminate monthly landscaping 
              contracts, water bills, and equipment costs. No more emergency repairs when 
              irrigation lines break or mowers fail. That $8,000 monthly landscaping expense 
              becomes $0 forever.
            </p>

            <h2>Real Results: Eagle Ford Man Camp Case Study</h2>

            <div className={styles.caseStudyBox}>
              <h4>35,000 sq ft Installation - Completed in 4 Days</h4>
              <ul>
                <li>Previous annual landscaping cost: $96,000</li>
                <li>Water usage eliminated: 1.5 million gallons/year</li>
                <li>Installation cost: $115,000</li>
                <li>Payback period: 14 months</li>
                <li>5-year savings: $365,000</li>
              </ul>
              <p className={styles.testimonial}>
                &ldquo;We installed turf two years ago and haven&apos;t spent a dime on landscaping 
                since. The property looks better than ever, and our residents love it.&rdquo;
                <cite>- Frank Morrison, Property Manager</cite>
              </p>
            </div>

            <h2>Installation Process for Active Properties</h2>

            <p>
              We understand you can&apos;t shut down operations for landscaping. Our crews work 
              around your schedule:
            </p>

            <ul>
              <li>
                <strong>Phased Installation:</strong> Complete sections while maintaining 
                full property access
              </li>
              <li>
                <strong>Weekend Work:</strong> Take advantage of lower occupancy periods
              </li>
              <li>
                <strong>Night Crews:</strong> Work while residents sleep
              </li>
              <li>
                <strong>Rapid Deployment:</strong> Most projects complete in under a week
              </li>
            </ul>

            <h2>Perfect for All Workforce Housing Types</h2>

            <div className={styles.housingTypes}>
              <div className={styles.typeCard}>
                <h4>Traditional Man Camps</h4>
                <p>Modular units with high-traffic common areas</p>
              </div>
              <div className={styles.typeCard}>
                <h4>Lodge-Style Housing</h4>
                <p>Multi-story facilities with central courtyards</p>
              </div>
              <div className={styles.typeCard}>
                <h4>RV Workforce Parks</h4>
                <p>Temporary housing with utility corridors</p>
              </div>
              <div className={styles.typeCard}>
                <h4>Corporate Housing</h4>
                <p>Extended-stay facilities for professionals</p>
              </div>
            </div>

            <h2>Environmental Benefits</h2>

            <p>
              Beyond maintenance savings, artificial turf helps workforce housing meet 
              environmental goals:
            </p>

            <ul>
              <li>100% water conservation in landscaped areas</li>
              <li>No chemical runoff from fertilizers or pesticides</li>
              <li>Reduced carbon emissions from maintenance equipment</li>
              <li>Helps meet corporate sustainability targets</li>
              <li>Qualifies for water conservation incentives</li>
            </ul>

            <h2>The Bottom Line</h2>

            <p>
              For man camps and workforce housing, artificial turf isn&apos;t just an 
              upgrade - it&apos;s an operational necessity. Zero maintenance means zero 
              disruption to your residents and zero ongoing costs for your budget.
            </p>

            <p>
              With oil field activity increasing across the Permian Basin, now is the 
              time to eliminate landscaping headaches forever. Your maintenance team, 
              accounting department, and residents will thank you.
            </p>

            <div className={styles.cta}>
              <h3>Ready to Eliminate Landscaping Costs?</h3>
              <p>
                Get a free assessment for your workforce housing property. We&apos;ll show 
                you exactly how much you&apos;ll save with zero-maintenance turf.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Free Assessment
                </Link>
                <Link href="/case-studies/eagle-ford-man-camp-success" className="btn btn-outline">
                  View Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
      
      <Footer />
    </>
  );
}