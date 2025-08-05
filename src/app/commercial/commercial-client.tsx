'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Building2, Users, Shield, TrendingUp, Clock, Award } from 'lucide-react';
import styles from './commercial.module.css';

const stats = [
  { label: 'RV Parks Served', value: '25+' },
  { label: 'Water Saved Annually', value: '15M Gal' },
  { label: 'Average ROI', value: '3.2 Years' },
  { label: 'Commercial Projects', value: '50+' },
];

const benefits = [
  {
    icon: Building2,
    title: 'RV Parks & Campgrounds',
    description: 'Transform muddy, high-maintenance areas into beautiful, durable landscapes that attract long-term residents.',
  },
  {
    icon: Users,
    title: 'Workforce Housing',
    description: 'Create professional, zero-maintenance environments for man camps and oil field housing facilities.',
  },
  {
    icon: Shield,
    title: 'Property Management',
    description: 'Reduce operational costs and maintenance headaches for apartment complexes and commercial properties.',
  },
  {
    icon: TrendingUp,
    title: 'Hotels & Hospitality',
    description: 'Enhance curb appeal and eliminate irrigation costs for hotels, motels, and hospitality properties.',
  },
  {
    icon: Clock,
    title: 'Office Complexes',
    description: 'Professional landscapes that impress clients without the ongoing maintenance requirements.',
  },
  {
    icon: Award,
    title: 'Municipal Projects',
    description: 'Long-lasting solutions for parks, medians, and public spaces that save taxpayer dollars.',
  },
];

export default function CommercialPageClient() {
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
            <h1>Commercial Turf Solutions</h1>
            <p className={styles.subtitle}>
              Specialized artificial turf installation for RV parks, workforce housing, 
              and commercial properties across the Permian Basin.
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
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className={styles.benefits}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Industries We Serve</h2>
            <p>
              From high-traffic RV parks to workforce housing facilities, 
              we deliver durable, water-saving turf solutions that perform in West Texas conditions.
            </p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <benefit.icon size={32} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className={styles.caseStudy}>
        <div className="container">
          <div className={styles.caseStudyGrid}>
            <motion.div
              className={styles.caseStudyContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Success Story: Midessa RV Resort</h2>
              <div className={styles.results}>
                <div className={styles.result}>
                  <strong>$8,000/month</strong>
                  <span>Water Savings</span>
                </div>
                <div className={styles.result}>
                  <strong>15%</strong>
                  <span>Occupancy Increase</span>
                </div>
                <div className={styles.result}>
                  <strong>2.8 years</strong>
                  <span>ROI Achievement</span>
                </div>
              </div>
              <p>
                "We're saving a fortune on water and our residents love it. 
                The turf looks perfect year-round, even with heavy RV traffic. 
                Best investment we've made for our property."
              </p>
              <cite>- Jake Thompson, Property Manager</cite>
            </motion.div>
            <motion.div
              className={styles.caseStudyImage}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/api/placeholder/600/400"
                alt="Midessa RV Resort turf installation"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
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
            <h2>Our Commercial Installation Process</h2>
            <p>Professional, efficient, and designed to minimize disruption to your operations</p>
          </motion.div>

          <div className={styles.processSteps}>
            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>01</div>
              <h3>Property Assessment</h3>
              <p>Free on-site evaluation including drainage analysis, traffic patterns, and custom design recommendations.</p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.stepNumber}>02</div>
              <h3>ROI Analysis</h3>
              <p>Detailed cost breakdown showing water savings, maintenance reduction, and payback timeline.</p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.stepNumber}>03</div>
              <h3>Phased Installation</h3>
              <p>Work around your schedule with minimal disruption. Most projects completed in 3-5 days.</p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.stepNumber}>04</div>
              <h3>10-Year Warranty</h3>
              <p>Commercial-grade materials backed by comprehensive warranty and ongoing support.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Reduce Your Water Bills?</h2>
            <p>
              Get a free property assessment and ROI analysis. 
              See exactly how much you'll save with commercial-grade artificial turf.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/quote" className="btn btn-primary">Get Commercial Quote</a>
              <a href="tel:432-555-0100" className="btn btn-outline">Call (432) 555-0100</a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}