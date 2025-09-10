'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplet,
  DollarSign,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Phone,
  Calculator,
  Sun,
  TrendingDown,
  Home,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styles from './residential-turf.module.css';

// Before/After images data
const transformations = [
  { 
    before: '/api/placeholder/400/300',
    after: '/api/placeholder/400/300',
    location: 'Midland, TX',
    savings: '$3,200/year'
  },
  { 
    before: '/api/placeholder/400/300',
    after: '/api/placeholder/400/300',
    location: 'Odessa, TX',
    savings: '$2,800/year'
  },
  { 
    before: '/api/placeholder/400/300',
    after: '/api/placeholder/400/300',
    location: 'Big Spring, TX',
    savings: '$3,500/year'
  },
];

export default function ResidentialTurfLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Midland',
    sqft: 5000,
    timeframe: 'asap',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Calculate instant savings
  const calculateSavings = () => {
    const waterCostPerSqFt = 0.62 * 52 * 4.5 / 1000; // Weekly gallons * weeks * cost per 1000 gal
    const maintenanceCostPerSqFt = 0.50;
    const annualSavings = Math.round((waterCostPerSqFt + maintenanceCostPerSqFt) * formData.sqft);
    const installCost = formData.sqft * 7;
    const payback = (installCost / annualSavings).toFixed(1);
    
    return {
      annual: annualSavings,
      monthly: Math.round(annualSavings / 12),
      tenYear: annualSavings * 10,
      payback: payback,
      installCost: installCost
    };
  };
  
  const savings = calculateSavings();
  
  // Auto-rotate gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track high-value conversion
    if (typeof window !== 'undefined' && typeof (window as typeof window & { gtag?: Function }).gtag === 'function') {
      (window as typeof window & { gtag?: Function }).gtag!('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXXXXXX',
        'value': savings.installCost,
        'currency': 'USD'
      });
    }
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  
  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className={styles.successPage}>
        <div className={styles.successContent}>
          <CheckCircle className={styles.successIcon} />
          <h1>Your Free Consultation is Confirmed!</h1>
          <p>A turf specialist will call you within 30 minutes during business hours.</p>
          <div className={styles.successDetails}>
            <h3>What Happens Next:</h3>
            <ol>
              <li>Phone consultation to discuss your needs (5-10 minutes)</li>
              <li>Schedule free on-site measurement & soil assessment</li>
              <li>Receive custom quote with exact savings calculations</li>
              <li>Review financing options (0% for 12 months available)</li>
            </ol>
            <div className={styles.savingsSummary}>
              <p><strong>Your Estimated Savings:</strong></p>
              <p className={styles.savingsAmount}>${savings.annual}/year</p>
              <p>That&apos;s ${savings.tenYear.toLocaleString()} over 10 years!</p>
            </div>
          </div>
          <p className={styles.urgentNote}>
            <Clock size={16} />
            Limited installation slots available for this month
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.landingPage}>
      {/* Drought Alert Bar */}
      <div className={styles.alertBar}>
        <Sun size={16} />
        <span>DROUGHT ALERT: Stage 2 Water Restrictions Active in Permian Basin</span>
      </div>

      {/* Simple Header */}
      <div className={styles.header}>
        <div className={styles.logo}>
          <Droplet size={24} />
          <span>Permian Turf Solutions</span>
        </div>
        <a href="tel:432-555-0100" className={styles.phoneButton}>
          <Phone size={16} />
          <span className={styles.phoneDesktop}>(432) 555-0100</span>
          <span className={styles.phoneMobile}>Call Now</span>
        </a>
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <TrendingDown size={16} />
              Water Bills Down 100%
            </div>
            
            <h1>Stop Paying $3,000+/Year to Water Dead Grass</h1>
            <p className={styles.subtitle}>
              Install beautiful, drought-proof artificial turf. 
              Never water, mow, or fertilize again. <strong>15-year warranty.</strong>
            </p>

            {/* Live Savings Calculator */}
            <div className={styles.calculator}>
              <h3>
                <Calculator size={20} />
                Your Instant Savings Estimate
              </h3>
              <div className={styles.calcInput}>
                <label>Lawn Size (sq ft):</label>
                <input
                  type="range"
                  min="1000"
                  max="15000"
                  value={formData.sqft}
                  onChange={(e) => handleInputChange('sqft', parseInt(e.target.value))}
                  className={styles.slider}
                />
                <span className={styles.sqftDisplay}>{formData.sqft.toLocaleString()} sq ft</span>
              </div>
              <div className={styles.savingsDisplay}>
                <div className={styles.savingStat}>
                  <span className={styles.saveAmount}>${savings.monthly}</span>
                  <span className={styles.saveLabel}>Monthly Savings</span>
                </div>
                <div className={styles.savingStat}>
                  <span className={styles.saveAmount}>${savings.annual}</span>
                  <span className={styles.saveLabel}>Annual Savings</span>
                </div>
                <div className={styles.savingStat}>
                  <span className={styles.saveAmount}>{savings.payback} yrs</span>
                  <span className={styles.saveLabel}>ROI Payback</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className={styles.trustBar}>
              <span><CheckCircle size={14} /> 200+ Homes Completed</span>
              <span><CheckCircle size={14} /> Licensed & Insured</span>
              <span><CheckCircle size={14} /> 0% Financing</span>
            </div>
          </div>

          {/* Form Section */}
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Get Your Free Water Savings Analysis</h2>
              <p>No obligation • Takes 30 seconds</p>
              <div className={styles.limitedOffer}>
                <Clock size={16} />
                Only 5 consultation spots left this week
              </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className={styles.input}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className={styles.input}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Property Address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                required
                className={styles.input}
              />

              <div className={styles.formRow}>
                <select
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={styles.select}
                >
                  <option value="Midland">Midland</option>
                  <option value="Odessa">Odessa</option>
                  <option value="Big Spring">Big Spring</option>
                  <option value="Andrews">Andrews</option>
                </select>

                <select
                  value={formData.timeframe}
                  onChange={(e) => handleInputChange('timeframe', e.target.value)}
                  className={styles.select}
                >
                  <option value="asap">ASAP</option>
                  <option value="month">Within 30 Days</option>
                  <option value="planning">Just Planning</option>
                </select>
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Processing...'
                ) : (
                  <>
                    Get Free Consultation
                    <span className={styles.submitSubtext}>
                      Save ${savings.annual}/year on water
                    </span>
                  </>
                )}
              </button>

              <div className={styles.formTrust}>
                <Shield size={14} />
                <span>No sales pressure • Local family business • BBB A+ rated</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>Real Transformations in Your Neighborhood</h2>
          <div className={styles.galleryContainer}>
            <button 
              className={styles.galleryNav}
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className={styles.gallerySlide}>
              <div className={styles.beforeAfter}>
                <div className={styles.imageContainer}>
                  <img src={transformations[currentSlide].before} alt="Before" />
                  <span className={styles.imageLabel}>Before</span>
                </div>
                <div className={styles.imageContainer}>
                  <img src={transformations[currentSlide].after} alt="After" />
                  <span className={styles.imageLabel}>After</span>
                </div>
              </div>
              <div className={styles.transformInfo}>
                <p>{transformations[currentSlide].location}</p>
                <p className={styles.transformSavings}>
                  Now saving {transformations[currentSlide].savings}
                </p>
              </div>
            </div>

            <button 
              className={styles.galleryNav}
              onClick={() => setCurrentSlide((currentSlide + 1) % transformations.length)}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className={styles.testimonials}>
        <div className={styles.container}>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>&ldquo;Our water bill went from $400 to $0. Best investment we&apos;ve made.&rdquo;</p>
              <cite>- The Johnson Family, Midland</cite>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>&ldquo;Looks better than real grass. Kids and dogs love it!&rdquo;</p>
              <cite>- Sarah M., Odessa</cite>
            </div>
            <div className={styles.testimonial}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p>&ldquo;Paid for itself in 3 years. Wish we did this sooner.&rdquo;</p>
              <cite>- Mike R., Big Spring</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className={styles.urgency}>
        <div className={styles.container}>
          <h2>Why West Texas Homeowners Are Switching Now</h2>
          <div className={styles.urgencyGrid}>
            <div className={styles.urgencyItem}>
              <Sun size={32} />
              <h3>Drought Getting Worse</h3>
              <p>2024 projections show continued extreme drought. Water prices rising 15% annually.</p>
            </div>
            <div className={styles.urgencyItem}>
              <DollarSign size={32} />
              <h3>$0 Down Financing Ending</h3>
              <p>Special financing terms available only through end of month.</p>
            </div>
            <div className={styles.urgencyItem}>
              <Calendar size={32} />
              <h3>3-Week Installation Wait</h3>
              <p>High demand means booking now for next month. Limited crew availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Your Grass Will Die This Summer. Your Turf Won&apos;t.</h2>
        <p className={styles.ctaSubtext}>
          Join 200+ Permian Basin families who never worry about water restrictions
        </p>
        <div className={styles.ctaStats}>
          <span><CheckCircle size={16} /> Save ${savings.annual}/year</span>
          <span><CheckCircle size={16} /> 15-Year Warranty</span>
          <span><CheckCircle size={16} /> 0% Financing</span>
        </div>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} 
          className={styles.ctaButton}
        >
          Calculate Your Savings Now
        </a>
        <p className={styles.ctaUrgency}>
          <Clock size={14} />
          Only 5 free consultations remaining this week
        </p>
      </section>

      {/* Tracking Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // High-value lead tracking
            // gtag('event', 'view_item', {'value': ${savings.installCost}, 'currency': 'USD'});
            // fbq('track', 'ViewContent', {value: ${savings.installCost}, currency: 'USD'});
          `,
        }}
      />
    </div>
  );
}