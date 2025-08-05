'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import styles from './ServiceAreas.module.css';

const serviceAreas = [
  {
    city: 'Midland',
    slug: 'artificial-turf-midland-tx',
    description: 'Serving all of Midland with drought-resistant artificial turf',
    featured: true,
  },
  {
    city: 'Odessa',
    slug: 'synthetic-grass-odessa-tx',
    description: 'Water-free synthetic grass solutions for Odessa properties',
    featured: true,
  },
  {
    city: 'Lubbock',
    slug: 'artificial-turf-lubbock-tx',
    description: 'Hub City water conservation landscaping and Texas Tech area',
    featured: true,
  },
  {
    city: 'Amarillo',
    slug: 'synthetic-grass-amarillo-tx',
    description: 'Panhandle extreme weather turf for commercial & residential',
    featured: true,
  },
  {
    city: 'Permian Basin',
    slug: 'commercial-turf-installation-permian-basin',
    description: 'Commercial-grade turf for oil field properties',
  },
  {
    city: 'RV Parks',
    slug: 'rv-park-landscaping-midland-odessa',
    description: 'Specialized RV park and workforce housing landscaping',
  },
  {
    city: 'Texas Tech',
    slug: 'texas-tech-student-housing-turf',
    description: 'Student housing and apartment complex specialists',
  },
  {
    city: 'Farms & Ranches',
    slug: 'farm-ranch-artificial-turf-lubbock',
    description: 'Agricultural property water conservation solutions',
  },
  {
    city: 'Panhandle Region',
    slug: 'panhandle-drought-resistant-turf',
    description: 'Ogallala Aquifer preservation with water-free landscaping',
  },
  {
    city: 'Commercial Properties',
    slug: 'commercial-property-turf-amarillo',
    description: 'Industrial-grade turf for major employers',
  },
  {
    city: 'Big Spring',
    slug: 'man-camp-turf-big-spring-tx',
    description: 'Man camp and oil field housing turf solutions',
  },
];

export default function ServiceAreas() {
  return (
    <section className={styles.serviceAreas}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Serving West Texas & the Panhandle</h2>
          <p>
            Professional drought-resistant turf installation from the Permian Basin to the Panhandle. 
            Click your area for location-specific information and water conservation solutions.
          </p>
        </motion.div>

        <div className={styles.areasGrid}>
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              className={`${styles.areaCard} ${area.featured ? styles.featured : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/location/${area.slug}`}>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <MapPin size={24} />
                  </div>
                  <h3>{area.city}</h3>
                  <p>{area.description}</p>
                  <span className={styles.link}>
                    View Services
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            Also serving: Andrews, Crane, Stanton, Garden City, Levelland, Plainview, Canyon, 
            Pampa, Borger, Dumas, and all surrounding West Texas communities
          </p>
        </motion.div>
      </div>
    </section>
  );
}