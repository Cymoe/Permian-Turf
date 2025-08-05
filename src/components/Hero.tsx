'use client';

import Image from 'next/image';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplet, DollarSign, Zap } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              Save Water.<br />
              Save Money.<br />
              <span className={styles.highlight}>Still Stay Green.</span>
            </h1>
            <p className={styles.subtitle}>
              The Permian Basin&apos;s premier drought-resistant turf specialist. Install water-free 
              landscaping that reduces usage by 70% while maintaining beautiful landscapes year-round.
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
              <Image 
                src="/new_right.png" 
                alt="Commercial turf installation" 
                width={400}
                height={270}
                className={styles.heroImage}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}