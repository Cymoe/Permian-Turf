'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplet, DollarSign, Zap } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>
            Save Water. Save Money.
            <br />
            <span className={styles.highlight}>Still Stay Green.</span>
          </h1>
          <p className={styles.subtitle}>
            The Permian Basin's only turf specialist focused on commercial properties. 
            Reduce water usage by 70% while maintaining beautiful landscapes year-round.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Droplet className={styles.icon} />
              <div>
                <strong>70%</strong>
                <span>Water Savings</span>
              </div>
            </div>
            <div className={styles.stat}>
              <DollarSign className={styles.icon} />
              <div>
                <strong>$12K</strong>
                <span>Annual Savings</span>
              </div>
            </div>
            <div className={styles.stat}>
              <Zap className={styles.icon} />
              <div>
                <strong>Zero</strong>
                <span>Maintenance</span>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="/commercial" className="btn btn-primary">
              Commercial Solutions
            </Link>
            <Link href="/water-savings" className="btn btn-outline">
              Calculate Your Savings
            </Link>
          </div>

          <p className={styles.trust}>
            Trusted by 50+ property managers, RV parks, and oil field housing facilities
          </p>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imagePlaceholder}>
            <img 
              src="/api/placeholder/600/400" 
              alt="Commercial turf installation" 
              className={styles.heroImage}
            />
            <div className={styles.badge}>
              <span>10-Year</span>
              <span>Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}