'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { HardHat, Users, TrendingUp, Shield, Clock, DollarSign, CheckCircle, ChevronRight } from 'lucide-react';
import styles from './workforce-housing.module.css';

const stats = [
  { value: '400+', label: 'Units Completed' },
  { value: '27%', label: 'Better Retention' },
  { value: '$0', label: 'Maintenance Cost' },
  { value: '24/7', label: 'Always Perfect' },
];

const challenges = [
  {
    icon: HardHat,
    title: 'Heavy Traffic & Mud',
    description: 'F-350s, equipment haulers, and 24/7 operations create mud and dust that impacts worker satisfaction.',
  },
  {
    icon: Clock,
    title: 'No Maintenance Windows',
    description: 'Three-shift operations mean zero downtime for mowing or landscaping without disturbing workers.',
  },
  {
    icon: Users,
    title: 'Worker Retention Crisis',
    description: 'Poor living conditions lead to 68% annual turnover. Better facilities keep better workers.',
  },
  {
    icon: Shield,
    title: 'Safety & Liability',
    description: 'Slip-and-fall incidents from mud create workers comp claims and OSHA concerns.',
  },
];

const benefits = [
  'Volume pricing for projects over 10,000 sq ft',
  'Phased installation to work around operations',
  'Heavy-duty turf rated for vehicle traffic',
  'Advanced drainage for flash flood conditions',
  'Zero water usage in drought restrictions',
  'Antimicrobial infill for 400+ residents',
  'No maintenance staff required',
  'Improved appearance increases occupancy',
];

export default function WorkforceHousingClient() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.badge}>Workforce Housing Specialists</span>
            <h1>Zero-Maintenance Landscaping for Oil Field Housing</h1>
            <p className={styles.subtitle}>
              Transform your man camp, RV park, or workforce housing with commercial-grade 
              artificial turf. Eliminate mud, reduce turnover, and create professional 
              environments that attract and retain quality workers.
            </p>
            
            <div className={styles.heroStats}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.stat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <div className={styles.heroActions}>
              <Link href="/case-studies/eagle-ford-man-camp-success" className="btn btn-primary">
                View Case Study
              </Link>
              <Link href="/quote" className="btn btn-outline">
                Get Volume Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className={styles.challenges}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Workforce Housing Challenge</h2>
            <p>
              Managing landscaping for 24/7 operations with hundreds of workers 
              creates unique challenges that traditional solutions can&apos;t handle.
            </p>
          </motion.div>

          <div className={styles.challengesGrid}>
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                className={styles.challengeCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <challenge.icon size={32} />
                </div>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solution}>
        <div className="container">
          <div className={styles.solutionGrid}>
            <motion.div
              className={styles.solutionContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>The Professional Solution</h2>
              <p className={styles.lead}>
                Our commercial-grade artificial turf is specifically engineered for the 
                extreme demands of workforce housing in the Permian Basin.
              </p>

              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle size={20} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className={styles.solutionImage}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/api/placeholder/600/400"
                alt="Man camp with artificial turf"
                width={600}
                height={400}
              />
              <div className={styles.imageCaption}>
                Eagle Ford Lodge - 35,000 sq ft installation
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className={styles.roi}>
        <div className="container">
          <motion.div
            className={styles.roiContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>The Numbers Don&apos;t Lie</h2>
            <p className={styles.subtitle}>
              Real data from our workforce housing installations across the Permian Basin
            </p>

            <div className={styles.roiGrid}>
              <div className={styles.roiCard}>
                <DollarSign className={styles.roiIcon} />
                <h3>Monthly Savings</h3>
                <div className={styles.roiNumber}>$6,500+</div>
                <p>Eliminate water, maintenance, and equipment costs</p>
              </div>

              <div className={styles.roiCard}>
                <TrendingUp className={styles.roiIcon} />
                <h3>ROI Timeline</h3>
                <div className={styles.roiNumber}>14 Months</div>
                <p>Average payback period with documented savings</p>
              </div>

              <div className={styles.roiCard}>
                <Users className={styles.roiIcon} />
                <h3>Retention Impact</h3>
                <div className={styles.roiNumber}>27% Better</div>
                <p>Improved worker retention saves $180k+ annually</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className={styles.caseStudy}>
        <div className="container">
          <motion.div
            className={styles.caseStudyCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.caseStudyContent}>
              <span className={styles.caseLabel}>Success Story</span>
              <h3>Eagle Ford Lodge: 400-Bed Transformation</h3>
              <blockquote>
                &quot;We had guys refusing room assignments near high-traffic areas because 
                of the mud. Now we have a waiting list for those same rooms. The turf 
                completely changed our facility&apos;s reputation.&quot;
              </blockquote>
              <cite>- Frank Morrison, Facility Manager</cite>
              
              <div className={styles.caseResults}>
                <div>
                  <strong>Zero</strong>
                  <span>Mud complaints</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Fewer injuries</span>
                </div>
                <div>
                  <strong>$126k</strong>
                  <span>Annual savings</span>
                </div>
              </div>

              <Link href="/case-studies/eagle-ford-man-camp-success" className={styles.caseLink}>
                Read Full Case Study
                <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Workforce Housing Process</h2>
            <p>Designed specifically for 24/7 operations with zero disruption</p>
          </motion.div>

          <div className={styles.processSteps}>
            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>01</div>
              <h3>Operations Assessment</h3>
              <p>
                We study your shift patterns, traffic flow, and operational requirements 
                to create a zero-disruption installation plan.
              </p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.stepNumber}>02</div>
              <h3>Phased Installation</h3>
              <p>
                Work in 8-hour sections during shift changes. Most 35,000 sq ft 
                projects complete in 7-10 days without disturbing operations.
              </p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.stepNumber}>03</div>
              <h3>Heavy-Duty Materials</h3>
              <p>
                Military-grade turf with reinforced backing, advanced drainage, 
                and UV protection specifically for West Texas conditions.
              </p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.stepNumber}>04</div>
              <h3>Lifetime Support</h3>
              <p>
                10-year commercial warranty with 24/7 support. Annual inspections 
                included for workforce housing facilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Eliminate Your Landscaping Headaches?</h2>
            <p>
              Get a free assessment and ROI analysis for your workforce housing facility. 
              Volume pricing available for projects over 10,000 sq ft.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Volume Pricing Quote
              </Link>
              <a href="tel:432-555-0100" className="btn btn-outline">
                24/7 Support: (432) 555-0100
              </a>
            </div>
            <p className={styles.ctaNote}>
              Currently serving: Midland, Odessa, Big Spring, Andrews, and all Permian Basin locations
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}