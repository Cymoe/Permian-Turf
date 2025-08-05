'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Calculator, Phone, Clock, Shield } from 'lucide-react';
import styles from './quote.module.css';

export default function Quote() {
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
            <h1>Get Your Free Quote</h1>
            <p>
              Join hundreds of West Texas property owners who&apos;ve made the switch to 
              water-free, maintenance-free turf. Get your custom quote with ROI analysis today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className="container">
          <div className={styles.quoteGrid}>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Request Your Custom Quote</h2>
              <QuoteForm source="quote-page" />
            </motion.div>

            <motion.div
              className={styles.sidebar}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.infoCard}>
                <h3>What&apos;s Included</h3>
                <ul className={styles.checklist}>
                  <li>Free on-site consultation</li>
                  <li>Detailed measurements</li>
                  <li>Custom ROI calculations</li>
                  <li>Water savings analysis</li>
                  <li>Multiple turf options</li>
                  <li>Financing information</li>
                  <li>10-year warranty details</li>
                </ul>
              </div>

              <div className={styles.infoCard}>
                <h3>Why Choose Us</h3>
                <div className={styles.benefit}>
                  <Calculator className={styles.icon} />
                  <div>
                    <strong>Transparent Pricing</strong>
                    <p>No hidden fees. Clear, upfront quotes.</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <Clock className={styles.icon} />
                  <div>
                    <strong>Fast Response</strong>
                    <p>Quote within 24 hours, installation within a week.</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <Shield className={styles.icon} />
                  <div>
                    <strong>10-Year Warranty</strong>
                    <p>Industry-leading coverage for your peace of mind.</p>
                  </div>
                </div>
              </div>

              <div className={styles.callCard}>
                <h3>Prefer to Talk?</h3>
                <p>Our turf experts are ready to answer your questions.</p>
                <a href="tel:432-555-0100" className="btn btn-primary">
                  <Phone size={18} />
                  (432) 555-0100
                </a>
                <p className={styles.hours}>
                  Mon-Fri: 8am-6pm<br />
                  Saturday: 9am-4pm
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How accurate is the quote?</h3>
              <p>
                Our quotes are typically within 5% of the final cost. We measure 
                carefully and include all materials and labor.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Is there a consultation fee?</h3>
              <p>
                No! Consultations and quotes are completely free with no obligation.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long is the quote valid?</h3>
              <p>
                Quotes are valid for 30 days. We&apos;ll honor the price even if 
                material costs increase during that time.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you offer financing?</h3>
              <p>
                Yes! We offer multiple financing options including 0% interest 
                for 12 months for qualified buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}