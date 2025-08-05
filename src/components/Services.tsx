'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, Home, Users, Wrench } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: Building2,
    title: 'Workforce Housing',
    description: 'Specialized turf solutions for RV parks, man camps, and oil field housing. Volume pricing and zero maintenance.',
    link: '/commercial#workforce',
    featured: true,
  },
  {
    icon: Users,
    title: 'Property Management',
    description: 'Annual contracts for apartment complexes and commercial properties. Reduce water bills and maintenance costs.',
    link: '/commercial#property',
  },
  {
    icon: Home,
    title: 'Residential Excellence',
    description: 'Get commercial-grade turf for your home. Same quality trusted by businesses, now for homeowners.',
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
          <h2>Solutions for Every Property</h2>
          <p>
            From oil field housing to your backyard, we deliver water-smart landscapes 
            that save money and look great year-round.
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
                {service.featured && (
                  <span className={styles.badge}>Most Popular</span>
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