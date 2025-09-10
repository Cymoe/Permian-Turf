'use client';

import { useState, useEffect } from 'react';
import { 
  CheckCircle,
  Star,
  Clock,
  Shield,
  AlertTriangle,
  Droplet,
  Wind,
  Phone,
  DollarSign
} from 'lucide-react';
import styles from './pet-turf.module.css';

// Countdown timer hook
const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
};

export default function PetTurfLanding() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Midland',
    dogs: 2,
    sqft: 1000,
    concerns: 'odor',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeLeft = useCountdown();
  
  // Calculate pricing
  const calculatePrice = () => {
    const basePrice = 13; // Premium pet turf per sq ft
    const drainageUpgrade = 2.5; // Per sq ft
    const installation = sqft * basePrice;
    const drainage = sqft * drainageUpgrade;
    const discount = 500; // Special offer
    const total = installation + drainage - discount;
    
    return {
      installation,
      drainage,
      discount,
      total,
      monthly: Math.round(total / 60),
      savings: Math.round(installation * 0.15), // 15% savings
    };
  };
  
  const { sqft, dogs } = formData;
  const pricing = calculatePrice();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/XXXXXXXXX',
        'value': pricing.total,
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
          <h1>Your Pet Turf Consultation is Confirmed!</h1>
          <p className={styles.urgentSuccess}>
            You've secured the $500 discount - expires in 48 hours
          </p>
          <div className={styles.successDetails}>
            <h3>What Happens Next:</h3>
            <ol>
              <li>Our pet turf specialist will call within 30 minutes</li>
              <li>Free on-site assessment scheduled this week</li>
              <li>Custom drainage plan designed for your yard</li>
              <li>Installation can begin as soon as next week</li>
            </ol>
            <div className={styles.savingsSummary}>
              <p><strong>Your Estimated Investment:</strong></p>
              <p className={styles.originalPrice}>${(pricing.total + 500).toLocaleString()}</p>
              <p className={styles.discountedPrice}>${pricing.total.toLocaleString()}</p>
              <p className={styles.savedAmount}>You Save: $500!</p>
            </div>
          </div>
          <div className={styles.guarantees}>
            <div><Shield size={16} /> 100% Odor-Free Guarantee</div>
            <div><CheckCircle size={16} /> 15-Year Warranty</div>
            <div><DollarSign size={16} /> 0% Financing Available</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.landingPage}>
      {/* Urgency Bar */}
      <div className={styles.urgencyBar}>
        <Clock size={16} />
        <span>LIMITED TIME: $500 OFF Pet Turf Installation</span>
        <div className={styles.countdown}>
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>

      {/* Hero Section with Form */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <AlertTriangle size={16} />
              Special Offer for Dog Owners
            </div>
            
            <h1>Your Dog's Urine is Killing Your Lawn</h1>
            <h2 className={styles.subheadline}>
              Finally, Pet Turf That Actually Eliminates Odors 
              <span className={styles.highlight}> (Not Just Masks Them)</span>
            </h2>
            
            {/* Problem Points */}
            <div className={styles.problemPoints}>
              <div className={styles.problemPoint}>
                <AlertTriangle size={20} color="#EF4444" />
                <span>Yellow burn spots ruining your yard</span>
              </div>
              <div className={styles.problemPoint}>
                <Wind size={20} color="#EF4444" />
                <span>Ammonia smell getting worse in summer</span>
              </div>
              <div className={styles.problemPoint}>
                <Droplet size={20} color="#EF4444" />
                <span>Muddy paws tracking dirt inside daily</span>
              </div>
            </div>

            {/* Solution Points */}
            <div className={styles.solutionBox}>
              <h3>Antimicrobial Pet Turf with AlphaSan® Technology:</h3>
              <ul>
                <li><CheckCircle size={16} /> Eliminates 99% of pet odors permanently</li>
                <li><CheckCircle size={16} /> 3,000+ inch/hour drainage rate</li>
                <li><CheckCircle size={16} /> No more yellow spots or dead grass</li>
                <li><CheckCircle size={16} /> Stays 20° cooler than regular turf</li>
              </ul>
            </div>

            {/* Before/After Image */}
            <div className={styles.transformation}>
              <div className={styles.beforeAfter}>
                <div className={styles.beforeImage}>
                  <img src="/api/placeholder/300/200" alt="Before" />
                  <span className={styles.imageLabel}>Before</span>
                </div>
                <div className={styles.afterImage}>
                  <img src="/api/placeholder/300/200" alt="After" />
                  <span className={styles.imageLabel}>After</span>
                </div>
              </div>
              <p className={styles.transformCaption}>
                Actual customer yard in Midland, TX - 2 German Shepherds
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <div className={styles.discount}>
                <span className={styles.discountAmount}>$500 OFF</span>
                <span className={styles.discountText}>This Week Only</span>
              </div>
              <h3>Get Your Free Pet Turf Assessment</h3>
              <p>See if your yard qualifies for odor-free turf</p>
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

              <div className={styles.dogInput}>
                <label>Number of Dogs:</label>
                <div className={styles.dogButtons}>
                  {[1, 2, 3, '4+'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`${styles.dogBtn} ${dogs === (typeof num === 'string' ? 4 : num) ? styles.active : ''}`}
                      onClick={() => handleInputChange('dogs', typeof num === 'string' ? 4 : num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.sqftInput}>
                <label>Approximate Yard Size:</label>
                <select
                  value={formData.sqft}
                  onChange={(e) => handleInputChange('sqft', parseInt(e.target.value))}
                  className={styles.select}
                >
                  <option value="500">Under 500 sq ft</option>
                  <option value="1000">500-1000 sq ft</option>
                  <option value="1500">1000-1500 sq ft</option>
                  <option value="2000">1500-2000 sq ft</option>
                  <option value="3000">2000+ sq ft</option>
                </select>
              </div>

              <div className={styles.concernInput}>
                <label>Biggest Concern:</label>
                <select
                  value={formData.concerns}
                  onChange={(e) => handleInputChange('concerns', e.target.value)}
                  className={styles.select}
                >
                  <option value="odor">Urine odor/smell</option>
                  <option value="spots">Yellow/dead spots</option>
                  <option value="mud">Mud and mess</option>
                  <option value="maintenance">Constant maintenance</option>
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
                    <span className={styles.buttonMain}>Claim $500 Discount</span>
                    <span className={styles.buttonSub}>Limited to 5 customers this week</span>
                  </>
                )}
              </button>

              <div className={styles.formTrust}>
                <Shield size={14} />
                <span>100% Odor-Free Guarantee • No Obligation Quote</span>
              </div>
            </form>

            {/* Urgency Message */}
            <div className={styles.spotsLeft}>
              <AlertTriangle size={16} />
              Only 3 discount spots remaining
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className={styles.socialProof}>
        <div className={styles.proofContainer}>
          <div className={styles.proofItem}>
            <strong>200+</strong>
            <span>Pet Owners Served</span>
          </div>
          <div className={styles.proofItem}>
            <strong>99%</strong>
            <span>Odor Elimination</span>
          </div>
          <div className={styles.proofItem}>
            <strong>15 Year</strong>
            <span>Warranty</span>
          </div>
          <div className={styles.proofItem}>
            <strong>4.9★</strong>
            <span>Google Rating</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2>Pet Owners Love Their New Odor-Free Yards</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonial}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p>"The smell is completely gone! I can't believe it actually works. My 3 dogs play all day and no odor at all."</p>
            <cite>- Sarah M., Midland (3 Labs)</cite>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p>"No more yellow spots! After 2 years, it still looks perfect. Worth every penny for the peace of mind."</p>
            <cite>- Mike R., Odessa (2 German Shepherds)</cite>
          </div>
          <div className={styles.testimonial}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p>"The drainage is incredible. Heavy rain and no puddles or mud. My white poodle's paws stay clean!"</p>
            <cite>- Jennifer K., Big Spring (Standard Poodle)</cite>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className={styles.technology}>
        <div className={styles.techContainer}>
          <h2>The Only Pet Turf with AlphaSan® Antimicrobial Technology</h2>
          <div className={styles.techGrid}>
            <div className={styles.techFeature}>
              <Shield size={32} />
              <h3>Antimicrobial Protection</h3>
              <p>AlphaSan® silver ion technology built into every blade prevents bacteria growth</p>
            </div>
            <div className={styles.techFeature}>
              <Droplet size={32} />
              <h3>3,000+ in/hr Drainage</h3>
              <p>10x better drainage than standard turf - urine flows through immediately</p>
            </div>
            <div className={styles.techFeature}>
              <Wind size={32} />
              <h3>No-Infill Design</h3>
              <p>Nothing to trap odors - stays fresh without constant maintenance</p>
            </div>
          </div>
          <div className={styles.comparison}>
            <div className={styles.comparisonItem}>
              <h4>Regular Artificial Turf</h4>
              <ul className={styles.cons}>
                <li>Traps urine in infill</li>
                <li>Bacteria builds up</li>
                <li>Odor gets worse over time</li>
                <li>Requires enzyme treatments</li>
              </ul>
            </div>
            <div className={styles.comparisonItem}>
              <h4>Our Pet Turf System</h4>
              <ul className={styles.pros}>
                <li>Antimicrobial blades</li>
                <li>Prevents bacteria growth</li>
                <li>Stays odor-free for life</li>
                <li>Self-cleaning design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <h2>Stop Living with Dog Urine Smell</h2>
        <p className={styles.ctaSubtext}>
          Get the only pet turf that actually eliminates odors - not just covers them up
        </p>
        <div className={styles.offerBox}>
          <div className={styles.offerHeader}>
            <span className={styles.offerBadge}>This Week Only</span>
            <div className={styles.offerDiscount}>Save $500</div>
          </div>
          <div className={styles.offerDetails}>
            <div>✓ Free Assessment</div>
            <div>✓ Free Drainage Upgrade</div>
            <div>✓ 0% Financing Available</div>
          </div>
        </div>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} 
          className={styles.ctaButton}
        >
          Claim Your $500 Discount Now
        </a>
        <p className={styles.ctaUrgency}>
          <Clock size={14} />
          Offer expires in {timeLeft.days} days {timeLeft.hours} hours
        </p>
        <div className={styles.phoneAlternative}>
          <span>Prefer to talk?</span>
          <a href="tel:432-555-0100">
            <Phone size={14} />
            (432) 555-0100
          </a>
        </div>
      </section>
    </div>
  );
}