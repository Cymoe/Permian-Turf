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
    title: 'Workforce Housing Expertise',
    description: 'Specialized solutions for man camps, RV parks, and oil field housing with volume pricing.',
  },
  {
    icon: Users,
    title: 'Property Management Partners',
    description: 'Annual contracts with dedicated support for apartment complexes and commercial properties.',
  },
  {
    icon: Shield,
    title: '10-Year Commercial Warranty',
    description: 'Industry-leading warranty coverage specifically designed for high-traffic commercial use.',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Average payback in 3-4 years with documented water and maintenance savings.',
  },
  {
    icon: Clock,
    title: 'Rapid Installation',
    description: 'Minimal disruption to your operations with professional crews and efficient timelines.',
  },
  {
    icon: Award,
    title: 'Certified Installation',
    description: 'Factory-trained installers ensuring proper drainage, seaming, and longevity.',
  },
];

export default function Commercial() {
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
              The Permian Basin&apos;s only turf specialist focused on commercial properties. 
              From RV parks to apartment complexes, we deliver water-free landscapes that save money.
            </p>
            <div className={styles.heroStats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workforce Housing Section */}
      <section id="workforce" className={`section ${styles.workforce}`}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Workforce Housing Specialists</h2>
            <p>
              The oil boom has created unique housing challenges. We&apos;re the only company 
              that understands the specific needs of man camps, RV parks, and workforce housing.
            </p>
          </motion.div>

          <div className={styles.workforceGrid}>
            <motion.div
              className={styles.workforceContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Why Workforce Housing Chooses Us</h3>
              <ul className={styles.checkList}>
                <li>Volume pricing for projects over 10,000 sq ft</li>
                <li>Zero water usage in drought conditions</li>
                <li>No maintenance staff required</li>
                <li>Improved property appearance = higher occupancy</li>
                <li>Withstands heavy foot traffic and vehicle parking</li>
                <li>Pet-friendly with antimicrobial infill</li>
              </ul>

              <div className={styles.caseStudy}>
                <h4>Case Study: Midessa RV Park</h4>
                <p>
                  &quot;Permian Turf Solutions transformed our 260-unit RV park. 
                  We&apos;re saving $8,000/month on water and our occupancy is up 15% 
                  due to the improved appearance.&quot;
                </p>
                <cite>- Jake Thompson, Property Manager</cite>
              </div>
            </motion.div>

            <motion.div
              className={styles.workforceImage}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/api/placeholder/600/400" 
                alt="RV Park with artificial turf"
                width={600}
                height={400}
                className={styles.projectImage}
              />
              <div className={styles.imageCaption}>
                Before & After: 15,000 sq ft RV park transformation
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Property Management Section */}
      <section id="property" className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Property Management Solutions</h2>
            <p>
              Partner with us for all your commercial properties. We understand the challenges 
              of maintaining multiple locations with limited staff.
            </p>
          </motion.div>

          <div className={styles.propertyGrid}>
            <div className={styles.propertyCard}>
              <h3>Apartment Complexes</h3>
              <ul>
                <li>Common area installations</li>
                <li>Pet relief areas</li>
                <li>Pool surrounds</li>
                <li>Playground surfaces</li>
              </ul>
            </div>
            <div className={styles.propertyCard}>
              <h3>Office Buildings</h3>
              <ul>
                <li>Courtyard transformations</li>
                <li>Rooftop gardens</li>
                <li>Entry landscapes</li>
                <li>Break area upgrades</li>
              </ul>
            </div>
            <div className={styles.propertyCard}>
              <h3>Retail Centers</h3>
              <ul>
                <li>Median strips</li>
                <li>Outdoor seating areas</li>
                <li>Display gardens</li>
                <li>Event spaces</li>
              </ul>
            </div>
          </div>

          <div className={styles.partnership}>
            <h3>Annual Maintenance Contracts</h3>
            <p>
              Lock in preferred pricing and priority service with our annual contracts. 
              Perfect for property management companies with multiple locations.
            </p>
            <ul className={styles.contractBenefits}>
              <li>15% discount on all installations</li>
              <li>Priority scheduling</li>
              <li>Quarterly inspections included</li>
              <li>Emergency response guarantee</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className={`section ${styles.benefits}`}>
        <div className="container">
          <h2>The Commercial Advantage</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <benefit.icon className={styles.benefitIcon} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Commercial Property?</h2>
            <p>
              Get a custom quote with ROI analysis for your property. 
              We&apos;ll show you exactly how much you&apos;ll save.
            </p>
            <div className={styles.ctaActions}>
              <button className="btn btn-primary">Get Commercial Quote</button>
              <a href="tel:432-555-0100" className="btn btn-outline">
                Call (432) 555-0100
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}