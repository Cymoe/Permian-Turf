'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Droplet, DollarSign, Clock, Award } from 'lucide-react';
import styles from './BeforeAfterGallery.module.css';

interface Transformation {
  id: string;
  title: string;
  propertyType: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  stats: {
    waterSaved: string;
    monthlySavings: string;
    installTime: string;
    sqft: string;
  };
  description: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const transformations: Transformation[] = [
  {
    id: '1',
    title: 'Permian Plaza RV Park',
    propertyType: 'RV Park',
    location: 'Odessa, TX',
    beforeImage: '/green_1.png',
    afterImage: '/green_2.png',
    stats: {
      waterSaved: '2.5M gal/year',
      monthlySavings: '$8,200',
      installTime: '5 days',
      sqft: '15,000'
    },
    description: 'Complete transformation during severe drought restrictions. Zero water usage achieved.',
    testimonial: {
      quote: "Our water bill dropped 100%. Occupancy is up 35% because residents love the look.",
      author: "Mike Rodriguez",
      role: "Property Manager"
    }
  },
  {
    id: '2',
    title: 'Eagle Ford Man Camp',
    propertyType: 'Workforce Housing',
    location: 'Midland, TX',
    beforeImage: '/green_3.png',
    afterImage: '/green_4.png',
    stats: {
      waterSaved: '3.8M gal/year',
      monthlySavings: '$12,500',
      installTime: '7 days',
      sqft: '22,000'
    },
    description: 'High-traffic areas transformed with durable, water-free turf. Zero maintenance required.',
    testimonial: {
      quote: "No more mud, no more dead grass, no more water bills. This pays for itself.",
      author: "Sarah Chen",
      role: "Facility Director"
    }
  },
  {
    id: '3',
    title: 'Desert View Apartments',
    propertyType: 'Multi-Family',
    location: 'Big Spring, TX',
    beforeImage: '/hero_1.png',
    afterImage: '/hero_one.png',
    stats: {
      waterSaved: '1.8M gal/year',
      monthlySavings: '$5,400',
      installTime: '4 days',
      sqft: '8,500'
    },
    description: 'Common areas and pet zones converted to drought-proof landscaping.',
    testimonial: {
      quote: "Residents are thrilled. No more brown patches or water restrictions affecting our property.",
      author: "James Wilson",
      role: "Property Owner"
    }
  }
];

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  
  const current = transformations[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
    setSliderPosition(50); // Reset slider
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
    setSliderPosition(50); // Reset slider
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <section className={`section ${styles.gallery}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>Proven Results</span>
          <h2>Drought-Proof Transformations</h2>
          <p>See how we&apos;ve helped Permian Basin properties eliminate water usage completely</p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.transformationContainer}
          >
            {/* Property Info Bar */}
            <div className={styles.propertyInfo}>
              <div className={styles.propertyDetails}>
                <h3>{current.title}</h3>
                <div className={styles.propertyMeta}>
                  <span className={styles.propertyType}>{current.propertyType}</span>
                  <span className={styles.location}>{current.location}</span>
                </div>
              </div>
              <div className={styles.navigation}>
                <button 
                  onClick={handlePrev} 
                  className={styles.navButton}
                  aria-label="Previous transformation"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className={styles.dots}>
                  {transformations.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                      onClick={() => {
                        setCurrentIndex(index);
                        setSliderPosition(50);
                      }}
                      aria-label={`Go to transformation ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={handleNext} 
                  className={styles.navButton}
                  aria-label="Next transformation"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Interactive Before/After Slider */}
            <div 
              className={styles.sliderContainer}
              onMouseMove={handleMouseMove}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* Before Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={current.beforeImage}
                  alt={`Before: ${current.title}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                <div className={styles.imageLabel}>
                  <span>Before</span>
                  <span className={styles.problem}>Drought-Damaged</span>
                </div>
              </div>

              {/* After Image (Clipped) */}
              <div 
                className={styles.afterImageWrapper}
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={current.afterImage}
                  alt={`After: ${current.title}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className={styles.imageLabel}>
                  <span>After</span>
                  <span className={styles.solution}>Water-Free</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className={styles.sliderHandle}
                style={{ left: `${sliderPosition}%` }}
              >
                <div className={styles.sliderLine} />
                <div className={styles.sliderButton}>
                  <ChevronLeft size={16} />
                  <ChevronRight size={16} />
                </div>
              </div>

              {/* Instructions */}
              <div className={styles.instructions}>
                <span>← Drag to Compare →</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <Droplet className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>{current.stats.waterSaved}</span>
                  <span className={styles.statLabel}>Water Saved</span>
                </div>
              </div>
              <div className={styles.stat}>
                <DollarSign className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>{current.stats.monthlySavings}</span>
                  <span className={styles.statLabel}>Monthly Savings</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Clock className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>{current.stats.installTime}</span>
                  <span className={styles.statLabel}>Install Time</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Award className={styles.statIcon} />
                <div>
                  <span className={styles.statValue}>{current.stats.sqft} sq ft</span>
                  <span className={styles.statLabel}>Area Covered</span>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            {current.testimonial && (
              <motion.div 
                className={styles.testimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <blockquote>
                  &ldquo;{current.testimonial.quote}&rdquo;
                </blockquote>
                <cite>
                  <strong>{current.testimonial.author}</strong>
                  <span>{current.testimonial.role}</span>
                </cite>
              </motion.div>
            )}

            {/* CTA */}
            <div className={styles.cta}>
              <p className={styles.ctaText}>
                Ready to eliminate your water bills? Get your custom drought-proof solution.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Your Transformation Quote
                </Link>
                <Link href="/water-savings" className="btn btn-outline dark">
                  Calculate Your Savings
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
