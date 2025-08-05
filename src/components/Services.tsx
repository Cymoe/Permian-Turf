'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Home, Users, Wrench, Leaf } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: Leaf,
    title: 'Artificial Green Walls',
    description: 'Transform stark walls into lush vertical gardens. Boost productivity by 15% with biophilic design - zero water needed.',
    link: '/green-walls',
    featured: true,
    isNew: true,
  },
  {
    icon: Building2,
    title: 'Workforce Housing',
    description: 'Specialized oil field housing turf installation for RV parks and man camps. Water-free landscaping with zero maintenance.',
    link: '/workforce-housing',
    featured: true,
  },
  {
    icon: Users,
    title: 'Property Management',
    description: 'Commercial property turf contractors in Odessa and Midland. Reduce water bills by 70% with drought-resistant solutions.',
    link: '/commercial#property',
  },
  {
    icon: Home,
    title: 'Residential Excellence',
    description: 'Drought-resistant turf for Midland TX homes. Water-free landscaping perfect for the Permian Basin climate.',
    link: '/residential',
  },
  {
    icon: Wrench,
    title: 'Specialty Solutions',
    description: 'Sports fields, playgrounds, rooftops, and custom installations. Professional grade for any application.',
    link: '/portfolio#specialty',
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Water-Free Landscaping Solutions</h2>
          <p>
            From oil field housing to your backyard, we deliver drought-resistant turf 
            solutions that eliminate water usage and look great year-round in the Permian Basin.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={service.link}
                className={`${styles.card} ${service.featured ? styles.featured : ''}`}
              >
                <service.icon className={styles.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.featured && !service.isNew && (
                  <span className={styles.badge}>Most Popular</span>
                )}
                {service.isNew && (
                  <span className={styles.badgeNew}>NEW</span>
                )}
                <span className={styles.arrow}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3>Serving the Entire Permian Basin</h3>
          <p>Midland • Odessa • Big Spring • Andrews • And More</p>
        </motion.div>
      </div>
    </section>
  );
}