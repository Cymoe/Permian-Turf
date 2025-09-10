'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Droplet, DollarSign, TrendingDown, Calculator, ChevronRight } from 'lucide-react';
import { getCurrentSeason } from '@/utils/seasons';
import styles from './ExitIntentPopup.module.css';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  // Debug mode - set to true to test popup immediately
  const DEBUG_MODE = false;
  const currentSeason = getCurrentSeason();
  
  // Quick calculator state
  const [sqft, setSqft] = useState(5000);
  const [waterBill, setWaterBill] = useState(2500);
  
  // Calculate savings
  const annualWaterBill = waterBill * 12;
  const potentialSavings = annualWaterBill * 0.7; // 70% savings
  const monthlyDroughtSavings = potentialSavings / 12;
  const fiveYearSavings = potentialSavings * 5;

  useEffect(() => {
    // Debug mode - show immediately
    if (DEBUG_MODE) {
      setTimeout(() => {
        setIsVisible(true);
        console.log('Exit Intent Popup: Debug mode - showing immediately');
      }, 2000);
      return;
    }
    
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown && !DEBUG_MODE) {
      setHasBeenShown(true);
      console.log('Exit Intent Popup: Already shown this session');
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Detect when mouse leaves viewport from the top
      if (e.clientY <= 20 && !hasBeenShown) { // Made more sensitive (was 0)
        console.log('Exit Intent Popup: Triggered by mouse exit');
        setIsVisible(true);
        setHasBeenShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    const handleMobileScroll = () => {
      // For mobile: show after scrolling up when user has scrolled down at least 50%
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 50 && window.scrollY < 100 && !hasBeenShown) {
        setIsVisible(true);
        setHasBeenShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Desktop exit intent
    document.addEventListener('mouseout', handleMouseLeave);
    
    // Mobile exit intent (scroll-based)
    if (window.innerWidth <= 768) {
      let lastScrollY = window.scrollY;
      const scrollHandler = () => {
        if (window.scrollY < lastScrollY) {
          handleMobileScroll();
        }
        lastScrollY = window.scrollY;
      };
      window.addEventListener('scroll', scrollHandler);
      
      return () => {
        window.removeEventListener('scroll', scrollHandler);
        document.removeEventListener('mouseout', handleMouseLeave);
      };
    }

    return () => {
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [hasBeenShown]);

  const handleCalculate = async () => {
    setIsCalculating(true);
    // Simulate calculation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsCalculating(false);
    setShowResults(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Exit Intent',
        event_label: 'Water Savings Calculator',
        value: monthlyDroughtSavings
      });
    }

    // Here you would send the email
    console.log('Email submitted:', email, { sqft, waterBill, savings: monthlyDroughtSavings });
    
    // Close popup after submission
    setTimeout(() => setIsVisible(false), 1500);
  };

  const handleClose = () => {
    setIsVisible(false);
    
    // Optional: Don't show again for 7 days
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    document.cookie = `exitPopupClosed=true;expires=${expires.toUTCString()};path=/`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            className={styles.popup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 99999
            }}
          >
            <button 
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            {!showResults ? (
              <>
                {/* Initial Calculator View */}
                <div className={styles.header}>
                  <div className={styles.urgentBadge}>
                    <TrendingDown size={16} />
                    Water Costs Rising in Permian Basin
                  </div>
                  <h2 className={styles.title}>
                    Wait! See How Much You Could Save
                  </h2>
                  <p className={styles.subtitle}>
                    Calculate your drought-proof savings in 10 seconds
                  </p>
                </div>

                <div className={styles.calculator}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      <Droplet size={18} />
                      Property Size (sq ft)
                    </label>
                    <input
                      type="number"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className={styles.input}
                      min="100"
                      max="100000"
                    />
                    <input
                      type="range"
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className={styles.slider}
                      min="1000"
                      max="50000"
                      step="500"
                    />
                    <div className={styles.rangeLabels}>
                      <span>1,000</span>
                      <span>25,000</span>
                      <span>50,000</span>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>
                      <DollarSign size={18} />
                      Current Monthly Water Bill
                    </label>
                    <div className={styles.currencyInput}>
                      <span className={styles.currencySymbol}>$</span>
                      <input
                        type="number"
                        value={waterBill}
                        onChange={(e) => setWaterBill(Number(e.target.value))}
                        className={styles.input}
                        min="100"
                        max="50000"
                      />
                    </div>
                  </div>

                  <button 
                    className={`btn btn-primary ${styles.calculateButton}`}
                    onClick={handleCalculate}
                    disabled={isCalculating}
                  >
                    {isCalculating ? (
                      'Calculating...'
                    ) : (
                      <>
                        <Calculator size={18} />
                        Calculate My Savings
                      </>
                    )}
                  </button>
                </div>

                <div className={styles.features}>
                  <div className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    100% Water-Free
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    10-Year Warranty
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    Zero Maintenance
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Results View */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={styles.results}
                >
                  <div className={styles.resultsHeader}>
                    <h2 className={styles.wow}>WOW! Your Property Could Save:</h2>
                  </div>

                  <div className={styles.savingsDisplay}>
                    <div className={styles.mainSaving}>
                      <span className={styles.savingsLabel}>Monthly Savings</span>
                      <span className={styles.savingsAmount}>
                        ${monthlyDroughtSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                      <span className={styles.savingsDetail}>Every Single Month</span>
                    </div>

                    <div className={styles.additionalSavings}>
                      <div className={styles.savingStat}>
                        <span className={styles.statAmount}>
                          ${potentialSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </span>
                        <span className={styles.statLabel}>Annual Savings</span>
                      </div>
                      <div className={styles.savingStat}>
                        <span className={styles.statAmount}>
                          ${fiveYearSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </span>
                        <span className={styles.statLabel}>5-Year Savings</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.emailCapture}>
                    <p className={styles.emailPrompt}>
                      Get your detailed savings report + exclusive spring discount
                    </p>
                    <form onSubmit={handleEmailSubmit} className={styles.emailForm}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className={styles.emailInput}
                        required
                      />
                      <button type="submit" className="btn btn-primary">
                        Get My Report
                        <ChevronRight size={16} />
                      </button>
                    </form>
                  </div>

                  <div className={styles.urgency}>
                    <strong>🔥 Limited Time:</strong> {currentSeason} installations include FREE drainage (Save $3,500)
                  </div>

                  <button 
                    className={styles.skipLink}
                    onClick={() => {
                      window.location.href = '/quote';
                      handleClose();
                    }}
                  >
                    Skip to Full Quote →
                  </button>
                </motion.div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
