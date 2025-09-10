'use client';

import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Ruler, Calendar, Award } from 'lucide-react';
import styles from './portfolio.module.css';

const projects = [
  {
    id: 1,
    category: 'workforce',
    title: 'Midessa RV Park',
    location: 'Odessa, TX',
    size: '15,000 sq ft',
    date: 'October 2023',
    description: 'Complete transformation of 260-unit RV park common areas. Reduced water usage by 100% and improved resident satisfaction.',
    features: ['High-traffic durability', 'Pet-friendly areas', 'Zero maintenance'],
    testimonial: 'We&apos;re saving $8,000/month on water and our occupancy is up 15%.',
    clientName: 'Jake Thompson',
    clientTitle: 'Property Manager',
    images: {
      before: '/api/placeholder/800/600',
      after: '/api/placeholder/800/600',
    },
  },
  {
    id: 2,
    category: 'residential',
    title: 'Executive Home',
    location: 'Midland, TX',
    size: '8,500 sq ft',
    date: 'September 2023',
    description: 'Luxury residential installation including front yard, backyard, and custom putting green.',
    features: ['Natural appearance', 'Putting green', 'Pool surround'],
    testimonial: 'Best investment we\'ve made. Our yard looks perfect year-round.',
    clientName: 'Sarah Martinez',
    clientTitle: 'Homeowner',
    images: {
      before: '/api/placeholder/800/600',
      after: '/api/placeholder/800/600',
    },
  },
  {
    id: 3,
    category: 'commercial',
    title: 'Permian Plaza Apartments',
    location: 'Midland, TX',
    size: '22,000 sq ft',
    date: 'August 2023',
    description: 'Multi-building apartment complex with courtyards, pet areas, and common spaces.',
    features: ['Multiple courtyards', 'Pet relief areas', 'Playground surface'],
    testimonial: 'Maintenance costs down 75%. Residents love the green spaces.',
    clientName: 'Robert Chen',
    clientTitle: 'Regional Manager, LMB Properties',
    images: {
      before: '/api/placeholder/800/600',
      after: '/api/placeholder/800/600',
    },
  },
  {
    id: 4,
    category: 'workforce',
    title: 'Eagle Ford Man Camp',
    location: 'Big Spring, TX',
    size: '35,000 sq ft',
    date: 'July 2023',
    description: 'Large-scale installation for 400-bed workforce housing facility.',
    features: ['Heavy equipment resistant', 'Quick drainage', 'Fire breaks included'],
    testimonial: 'The turf has held up perfectly despite heavy use. Zero complaints.',
    clientName: 'Mike Williams',
    clientTitle: 'Facility Director',
    images: {
      before: '/api/placeholder/800/600',
      after: '/api/placeholder/800/600',
    },
  },
  {
    id: 5,
    category: 'specialty',
    title: 'Midland Country Club',
    location: 'Midland, TX',
    size: '5,000 sq ft',
    date: 'June 2023',
    description: 'Practice putting green and driving range tee boxes.',
    features: ['Tournament-grade surface', 'Multiple cup positions', 'Realistic ball roll'],
    testimonial: 'Members practice more now that the greens are always perfect.',
    clientName: 'David Anderson',
    clientTitle: 'Golf Pro',
    images: {
      before: '/api/placeholder/800/600',
      after: '/api/placeholder/800/600',
    },
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'workforce', label: 'Workforce Housing' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
  { id: 'specialty', label: 'Specialty' },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(0);
  const [showBefore, setShowBefore] = useState(false);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const currentProject = filteredProjects[selectedProject];

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % filteredProjects.length);
    setShowBefore(false);
  };

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    setShowBefore(false);
  };

  return (
    <>
      <Header />
      
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Our Portfolio</h1>
            <p>
              See the transformation. From brown patches to permanent green, 
              we&apos;ve helped hundreds of Permian Basin properties save water and money.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className="container">
          {/* Category Filter */}
          <div className={styles.categoryFilter}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.categoryBtn} ${selectedCategory === cat.id ? styles.active : ''}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedProject(0);
                }}
              >
                {cat.label}
                <span className={styles.count}>
                  {cat.id === 'all' ? projects.length : projects.filter(p => p.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Main Gallery */}
          <div className={styles.gallery}>
            <motion.div
              key={currentProject.id}
              className={styles.projectShowcase}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.imageSection}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={showBefore ? currentProject.images.before : currentProject.images.after}
                    alt={`${currentProject.title} - ${showBefore ? 'Before' : 'After'}`}
                    width={800}
                    height={600}
                    className={styles.projectImage}
                  />
                  <div className={styles.imageControls}>
                    <button
                      className={`${styles.toggleBtn} ${!showBefore ? styles.active : ''}`}
                      onClick={() => setShowBefore(false)}
                    >
                      After
                    </button>
                    <div className={styles.divider} />
                    <button
                      className={`${styles.toggleBtn} ${showBefore ? styles.active : ''}`}
                      onClick={() => setShowBefore(true)}
                    >
                      Before
                    </button>
                  </div>
                </div>

                <div className={styles.navigation}>
                  <button className={styles.navBtn} onClick={prevProject}>
                    <ChevronLeft size={24} />
                  </button>
                  <div className={styles.indicators}>
                    {filteredProjects.map((_, index) => (
                      <button
                        key={index}
                        className={`${styles.indicator} ${index === selectedProject ? styles.active : ''}`}
                        onClick={() => {
                          setSelectedProject(index);
                          setShowBefore(false);
                        }}
                      />
                    ))}
                  </div>
                  <button className={styles.navBtn} onClick={nextProject}>
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.projectHeader}>
                  <h2>{currentProject.title}</h2>
                  <span className={styles.category}>{currentProject.category}</span>
                </div>

                <div className={styles.projectMeta}>
                  <div className={styles.metaItem}>
                    <MapPin size={18} />
                    {currentProject.location}
                  </div>
                  <div className={styles.metaItem}>
                    <Ruler size={18} />
                    {currentProject.size}
                  </div>
                  <div className={styles.metaItem}>
                    <Calendar size={18} />
                    {currentProject.date}
                  </div>
                </div>

                <p className={styles.description}>{currentProject.description}</p>

                <div className={styles.features}>
                  <h3>Project Features</h3>
                  <ul>
                    {currentProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.testimonial}>
                  <Award className={styles.quoteIcon} />
                  <blockquote>&quot;{currentProject.testimonial}&quot;</blockquote>
                  <cite>
                    <strong>{currentProject.clientName}</strong>
                    <span>{currentProject.clientTitle}</span>
                  </cite>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.stat}>
              <strong>500,000+</strong>
              <span>Square Feet Installed</span>
            </div>
            <div className={styles.stat}>
              <strong>200+</strong>
              <span>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <strong>15M</strong>
              <span>Gallons Water Saved Annually</span>
            </div>
            <div className={styles.stat}>
              <strong>100%</strong>
              <span>Customer Satisfaction</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Property?</h2>
            <p>Join these satisfied customers and start saving water and money today.</p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">Get Your Free Quote</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}