import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { CheckCircle, Phone, Clock, FileText, ArrowRight, Home, Droplet, DollarSign } from 'lucide-react';
import styles from './thank-you.module.css';

export const metadata = {
  title: 'Thank You - Quote Request Received | Desert Turf Solutions',
  description: 'Your custom turf quote request has been received. We\'ll prepare your water-saving proposal within 24 hours.',
};

export default function ThankYou() {
  return (
    <>
      <Header />
      
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <CheckCircle className={styles.successIcon} size={64} />
            <h1>Thank You for Your Quote Request!</h1>
            <p className={styles.subtitle}>
              We've received your information and our team is already working on your custom water-saving proposal.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.mainContent}>
              <div className={styles.card}>
                <h2>What Happens Next?</h2>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <span>1</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Within 1 Hour</h3>
                      <p>You'll receive an email confirmation with your request details</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <span>2</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Within 24 Hours</h3>
                      <p>Our specialist will contact you to schedule a free consultation</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <span>3</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Custom Proposal</h3>
                      <p>Receive your detailed quote with ROI analysis and water savings calculations</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>
                      <span>4</span>
                    </div>
                    <div className={styles.timelineContent}>
                      <h3>Installation</h3>
                      <p>Once approved, installation typically begins within 5-7 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.card}>
                <h2>Your Quote Will Include:</h2>
                <div className={styles.includes}>
                  <div className={styles.includeItem}>
                    <Droplet className={styles.includeIcon} />
                    <div>
                      <h3>Water Savings Analysis</h3>
                      <p>Detailed breakdown of monthly and annual water cost savings</p>
                    </div>
                  </div>
                  <div className={styles.includeItem}>
                    <DollarSign className={styles.includeIcon} />
                    <div>
                      <h3>ROI Calculations</h3>
                      <p>Complete return on investment timeline and payback period</p>
                    </div>
                  </div>
                  <div className={styles.includeItem}>
                    <FileText className={styles.includeIcon} />
                    <div>
                      <h3>Product Options</h3>
                      <p>Multiple turf selections matched to your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.resources}>
                <h2>While You Wait</h2>
                <p>Learn more about our water-saving solutions:</p>
                <div className={styles.resourceLinks}>
                  <Link href="/water-savings" className={styles.resourceLink}>
                    <Droplet size={20} />
                    Calculate Your Water Savings
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio" className={styles.resourceLink}>
                    <FileText size={20} />
                    View Our Portfolio
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/products" className={styles.resourceLink}>
                    <Home size={20} />
                    Browse Turf Options
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.sidebar}>
              <div className={styles.urgentCard}>
                <h3>Need Immediate Assistance?</h3>
                <p>Our turf experts are standing by</p>
                <a href="tel:432-555-0100" className="btn btn-primary">
                  <Phone size={18} />
                  (432) 555-0100
                </a>
                <div className={styles.hours}>
                  <Clock size={16} />
                  <div>
                    <p>Mon-Fri: 8am-6pm</p>
                    <p>Saturday: 9am-4pm</p>
                  </div>
                </div>
              </div>

              <div className={styles.statsCard}>
                <h3>Why Customers Choose Us</h3>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Properties Transformed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>75%</span>
                  <span className={styles.statLabel}>Average Water Savings</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10 Year</span>
                  <span className={styles.statLabel}>Industry Leading Warranty</span>
                </div>
              </div>

              <div className={styles.testimonial}>
                <p>
                  "Desert Turf Solutions saved us over $3,000 per month on water bills. 
                  The ROI was achieved in less than 18 months!"
                </p>
                <cite>— Mike Johnson, Sunset RV Park</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}