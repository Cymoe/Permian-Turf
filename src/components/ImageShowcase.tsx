'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ImageShowcase.module.css';

const images = [
  {
    src: '/hero_one.png',
    alt: 'Commercial turf installation showcase',
    title: 'Commercial Excellence'
  },
  {
    src: '/hero_two.png',
    alt: 'Residential turf transformation',
    title: 'Residential Beauty'
  },
  {
    src: '/hero_three.png',
    alt: 'Workforce housing turf solution',
    title: 'Workforce Housing'
  }
];

export default function ImageShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <h2>Transform Your Space</h2>
          <p>
            See how we've helped property managers, RV parks, and housing facilities 
            across the Permian Basin save thousands on water costs while maintaining 
            beautiful, green landscapes year-round.
          </p>
        </div>

        <div 
          className={styles.imageContainer}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1000}
                height={600}
                className={styles.showcaseImage}
                priority={currentIndex === 0}
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h3>{images[currentIndex].title}</h3>
                  <p>Professional installation with guaranteed results</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className={styles.controls}>
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`View ${images[index].title}`}
              />
            ))}
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>50+</strong>
              <span>Projects Completed</span>
            </div>
            <div className={styles.stat}>
              <strong>70%</strong>
              <span>Water Reduction</span>
            </div>
            <div className={styles.stat}>
              <strong>$12K+</strong>
              <span>Annual Savings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}