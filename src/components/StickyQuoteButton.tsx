'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, Calculator, X, ChevronUp } from 'lucide-react';
import styles from './StickyQuoteButton.module.css';

export default function StickyQuoteButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY } = useScroll();
  
  // Pulse animation after 3 seconds of inactivity
  const [isPulsing, setIsPulsing] = useState(false);
  
  // Transform button position based on scroll
  const buttonY = useTransform(scrollY, [0, 100], [100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
      
      // Show back to top after scrolling 1000px
      if (window.scrollY > 1000) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    // Pulse animation timer
    const pulseTimer = setInterval(() => {
      if (isVisible && !isExpanded) {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 1000);
      }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(pulseTimer);
    };
  }, [isVisible, isExpanded]);

  const handleQuoteClick = () => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Sticky CTA',
        event_label: 'Get Quote'
      });
    }
    window.location.href = '/quote';
  };

  const handleCalculatorClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Sticky CTA',
        event_label: 'Calculator'
      });
    }
    window.location.href = '/water-savings';
  };

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Sticky CTA',
        event_label: 'Phone Call'
      });
    }
    window.location.href = 'tel:432-555-0100';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile Bottom Bar (for mobile devices) */}
          <motion.div
            className={styles.mobileBottomBar}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button 
              className={styles.mobileAction}
              onClick={handleCallClick}
            >
              <Phone size={20} />
              <span>Call Now</span>
            </button>
            <button 
              className={`${styles.mobileAction} ${styles.primary}`}
              onClick={handleQuoteClick}
            >
              <MessageCircle size={20} />
              <span>Get Quote</span>
            </button>
            <button 
              className={styles.mobileAction}
              onClick={handleCalculatorClick}
            >
              <Calculator size={20} />
              <span>Calculate</span>
            </button>
          </motion.div>

          {/* Desktop Floating Button (for desktop) */}
          <motion.div
            className={styles.desktopContainer}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: buttonY
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Back to Top Button */}
            {showBackToTop && (
              <motion.button
                className={styles.backToTop}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <ChevronUp size={20} />
              </motion.button>
            )}

            {/* Expandable Menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className={styles.expandedMenu}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                  <button 
                    className={styles.menuItem}
                    onClick={handleQuoteClick}
                  >
                    <MessageCircle size={18} />
                    <span>Get Free Quote</span>
                  </button>
                  <button 
                    className={styles.menuItem}
                    onClick={handleCalculatorClick}
                  >
                    <Calculator size={18} />
                    <span>Calculate Savings</span>
                  </button>
                  <button 
                    className={styles.menuItem}
                    onClick={handleCallClick}
                  >
                    <Phone size={18} />
                    <span>Call (432) 555-0100</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
              className={`${styles.mainButton} ${isPulsing ? styles.pulse : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
            >
              {isExpanded ? (
                <X size={24} />
              ) : (
                <>
                  <MessageCircle size={24} />
                  <span className={styles.buttonText}>Get Quote</span>
                </>
              )}
            </motion.button>

            {/* Special Offer Badge */}
            {!isExpanded && (
              <motion.div
                className={styles.offerBadge}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: 'spring' }}
              >
                <span>Save $3,500</span>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
