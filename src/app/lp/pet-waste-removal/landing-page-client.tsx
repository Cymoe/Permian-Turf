'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PawPrint, 
  CheckCircle,
  Star,
  Clock,
  Shield,
  Phone,
  MapPin,
  Dog
} from 'lucide-react';
import styles from './landing-page.module.css';

// Testimonials data
const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Midland',
    text: 'Best decision ever! My weekends are mine again.',
    rating: 5,
  },
  {
    name: 'John D.',
    location: 'Odessa',
    text: 'Reliable service, great price. My yard has never been cleaner.',
    rating: 5,
  },
  {
    name: 'Maria G.',
    location: 'Big Spring',
    text: 'They even sanitize! No more odors. Worth every penny.',
    rating: 5,
  },
];

export default function PetWasteLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Midland',
    dogs: 1,
    startDate: 'tomorrow',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown
  
  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const calculatePrice = () => {
    const basePrice = 65;
    const additionalDogPrice = 10;
    const price = basePrice + (formData.dogs - 1) * additionalDogPrice;
    // First month 50% off
    return {
      regular: price,
      firstMonth: Math.round(price * 0.5),
    };
  };
  
  const price = calculatePrice();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXXXXXX', // Replace with your conversion ID
        'value': price.firstMonth,
        'currency': 'USD'
      });
    }
    
    // Simulate API call
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
          <h1>You&apos;re All Set!</h1>
          <p>We&apos;ll call you within 30 minutes to confirm your first service.</p>
          <div className={styles.successDetails}>
            <p><strong>First service:</strong> Tomorrow</p>
            <p><strong>First month:</strong> ${price.firstMonth} (50% off!)</p>
            <p><strong>Regular price:</strong> ${price.regular}/month</p>
          </div>
          <p className={styles.successNote}>
            Check your email for confirmation and service details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.landingPage}>
      {/* Urgency Bar */}
      <div className={styles.urgencyBar}>
        <Clock size={16} />
        <span>50% OFF ends in {formatTime(timeLeft)} - Limited spots available!</span>
      </div>

      {/* Logo Bar */}
      <div className={styles.logoBar}>
        <div className={styles.logo}>
          <PawPrint size={24} />
          <span>Permian Pet Waste Removal</span>
        </div>
        <a href="tel:432-555-0100" className={styles.phoneLink}>
          <Phone size={16} />
          <span className={styles.phoneDesktop}>(432) 555-0100</span>
          <span className={styles.phoneMobile}>Call Now</span>
        </a>
      </div>

      {/* Hero Section with Form */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            {/* Trust Badge */}
            <div className={styles.trustBadge}>
              <Shield size={16} />
              <span>Serving 200+ Families in Midland-Odessa</span>
            </div>

            <h1>Never Touch Dog Poop Again</h1>
            <p className={styles.subtitle}>
              Professional weekly cleanup service. We come to your yard every week, 
              remove all waste, and sanitize. You relax.
            </p>

            {/* Pricing Display */}
            <div className={styles.pricing}>
              <div className={styles.priceMain}>
                <span className={styles.priceStrike}>${price.regular}/mo</span>
                <span className={styles.priceActual}>${price.firstMonth}</span>
                <span className={styles.priceLabel}>first month</span>
              </div>
              <div className={styles.priceFeatures}>
                <span><CheckCircle size={16} /> No contracts</span>
                <span><CheckCircle size={16} /> Cancel anytime</span>
                <span><CheckCircle size={16} /> 100% guarantee</span>
              </div>
            </div>

            {/* Mobile Reviews */}
            <div className={styles.mobileReviews}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span>4.9/5 from 127 reviews</span>
            </div>
          </div>

          {/* Signup Form */}
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Start Service Tomorrow</h2>
              <p>Takes 30 seconds • No payment info required</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Service Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                  className={styles.input}
                />
              </div>

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

                <div className={styles.dogSelector}>
                  <label>
                    <Dog size={16} />
                    Dogs:
                  </label>
                  <div className={styles.dogButtons}>
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={formData.dogs === num ? styles.active : ''}
                        onClick={() => handleInputChange('dogs', num)}
                      >
                        {num}{num === 4 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>
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
                    Get 50% Off First Month
                    <span className={styles.submitPrice}>
                      Only ${price.firstMonth}
                    </span>
                  </>
                )}
              </button>

              <p className={styles.formNote}>
                <Shield size={14} />
                We&apos;ll call to confirm. No credit card needed now.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className={styles.socialProof}>
        <div className={styles.container}>
          <h2>Join Your Neighbors</h2>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={styles.testimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.stars}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <p>&ldquo;{testimonial.text}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Benefits */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitsList}>
            <div className={styles.benefit}>
              <Clock className={styles.benefitIcon} />
              <h3>Weekly Service</h3>
              <p>Same day every week. Text reminders before we arrive.</p>
            </div>
            <div className={styles.benefit}>
              <Shield className={styles.benefitIcon} />
              <h3>100% Reliable</h3>
              <p>Rain or shine, we show up. Guaranteed service or it&apos;s free.</p>
            </div>
            <div className={styles.benefit}>
              <MapPin className={styles.benefitIcon} />
              <h3>Local & Trusted</h3>
              <p>Permian Basin owned. Your neighbors trust us with their yards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Limited Spots Available</h2>
        <p>We can only accept 10 new customers this week</p>
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className={styles.ctaButton}>
          Claim Your Spot - 50% Off
        </a>
      </section>

      {/* Tracking Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Ads Conversion Tracking
            // gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/XXXXXXXXX'});
            
            // Facebook Pixel
            // fbq('track', 'Lead');
            
            // Track page view
            if (typeof gtag !== 'undefined') {
              gtag('event', 'page_view', {
                page_title: 'Pet Waste Removal Landing Page',
                page_location: window.location.href
              });
            }
          `,
        }}
      />
    </div>
  );
}