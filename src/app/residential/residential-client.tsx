'use client';

import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Home, Heart, Shield, Zap, Sun, PawPrint } from 'lucide-react';
import styles from './residential.module.css';

const benefits = [
  {
    icon: Heart,
    title: 'Perfect for Families',
    description: 'Safe, soft surface for kids to play. No chemicals, pesticides, or fertilizers needed.',
  },
  {
    icon: PawPrint,
    title: 'Pet-Friendly',
    description: 'Durable, easy to clean, and designed with special drainage for pet areas.',
  },
  {
    icon: Sun,
    title: 'Year-Round Beauty',
    description: 'Stays green through West Texas heat and drought. No brown spots or dead patches.',
  },
  {
    icon: Zap,
    title: 'Zero Maintenance',
    description: 'No mowing, watering, or fertilizing. Spend weekends enjoying your yard, not working on it.',
  },
  {
    icon: Shield,
    title: 'Commercial Quality',
    description: 'The same professional-grade turf we install for businesses, now for your home.',
  },
  {
    icon: Home,
    title: 'Increases Home Value',
    description: 'Beautiful curb appeal that lasts. A smart investment in your property.',
  },
];

const applications = [
  {
    title: 'Front & Back Yards',
    description: 'Transform your entire lawn with lush, green turf that neighbors will envy.',
    features: ['Custom contouring', 'Seamless installation', 'Natural appearance'],
  },
  {
    title: 'Pool & Patio Areas',
    description: 'No more grass clippings in the pool. Soft, slip-resistant surface.',
    features: ['Chlorine resistant', 'Quick drainage', 'Stays cool'],
  },
  {
    title: 'Putting Greens',
    description: 'Practice your short game at home with professional-grade putting surfaces.',
    features: ['Custom speeds', 'Multiple holes', 'Realistic roll'],
  },
  {
    title: 'Play Areas',
    description: 'Safe surfaces for swing sets and trampolines that cushion falls.',
    features: ['Impact certified', 'ADA compliant options', 'Antimicrobial'],
  },
];

export default function Residential() {
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
            <h1>Commercial-Grade Turf for Your Home</h1>
            <p className={styles.subtitle}>
              Get the same water-saving, maintenance-free turf trusted by Permian Basin businesses. 
              Professional quality, residential comfort.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">Get Free Quote</Link>
              <Link href="/portfolio" className="btn btn-outline">View Gallery</Link>
            </div>
            <p className={styles.trust}>
              Join 200+ West Texas homeowners who&apos;ve made the switch
            </p>
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image 
              src="/api/placeholder/600/400" 
              alt="Beautiful residential turf installation"
              width={600}
              height={400}
              className={styles.heroImagePhoto}
            />
            <div className={styles.badge}>
              Save $3,000+<br />Per Year
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Why West Texas Homeowners Choose Us</h2>
            <p>
              We bring commercial expertise to residential projects, ensuring your lawn 
              looks perfect and lasts for years.
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
                <benefit.icon className={styles.benefitIcon} />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className={`section ${styles.applications}`}>
        <div className="container">
          <h2>Perfect for Every Part of Your Property</h2>
          <div className={styles.applicationsGrid}>
            {applications.map((app) => (
              <motion.div
                key={app.title}
                className={styles.applicationCard}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h3>{app.title}</h3>
                <p>{app.description}</p>
                <ul>
                  {app.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.processHeader}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Simple Installation Process</h2>
            <p>From consultation to completion in just 3-5 days</p>
          </motion.div>

          <div className={styles.processSteps}>
            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>1</div>
              <h3>Free Consultation</h3>
              <p>
                We measure your space, discuss options, and provide a detailed quote 
                with ROI calculations.
              </p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.stepNumber}>2</div>
              <h3>Professional Prep</h3>
              <p>
                Our crew removes existing grass, grades for drainage, and installs 
                a commercial-grade base.
              </p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.stepNumber}>3</div>
              <h3>Expert Installation</h3>
              <p>
                Factory-trained installers ensure perfect seaming, proper infill, 
                and flawless edges.
              </p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.stepNumber}>4</div>
              <h3>Enjoy Forever</h3>
              <p>
                Walk on your new lawn immediately. Backed by our 10-year warranty 
                with zero maintenance required.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`section ${styles.comparison}`}>
        <div className="container">
          <h2>The Clear Choice for West Texas</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div></div>
              <div>Natural Grass</div>
              <div className={styles.featured}>Permian Turf</div>
            </div>
            <div className={styles.comparisonRow}>
              <div>Water Usage</div>
              <div className={styles.negative}>20,000+ gal/month</div>
              <div className={styles.positive}>Zero</div>
            </div>
            <div className={styles.comparisonRow}>
              <div>Annual Maintenance</div>
              <div className={styles.negative}>$2,000-3,000</div>
              <div className={styles.positive}>$0</div>
            </div>
            <div className={styles.comparisonRow}>
              <div>Appearance in Drought</div>
              <div className={styles.negative}>Brown & Patchy</div>
              <div className={styles.positive}>Always Green</div>
            </div>
            <div className={styles.comparisonRow}>
              <div>Weekend Time</div>
              <div className={styles.negative}>2-4 hours mowing</div>
              <div className={styles.positive}>Enjoy your yard</div>
            </div>
            <div className={styles.comparisonRow}>
              <div>Lifespan</div>
              <div className={styles.negative}>Replant every few years</div>
              <div className={styles.positive}>10+ years guaranteed</div>
            </div>
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
            <h2>Ready for a Beautiful, Water-Free Lawn?</h2>
            <p>
              Get your free quote today and see how much you&apos;ll save. 
              Most installations completed within one week.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">Get Your Free Quote</Link>
              <Link href="/water-savings" className="btn btn-secondary">
                Calculate Savings
              </Link>
            </div>
            <p className={styles.financing}>
              Financing available • 0% interest for 12 months
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}