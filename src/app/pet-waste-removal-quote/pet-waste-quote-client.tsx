'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  PawPrint, 
  CheckCircle, 
  Calendar,
  Home,
  User,
  Phone,
  Mail,
  MapPin,
  Dog,
  Clock,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  Shield
} from 'lucide-react';
import styles from './pet-waste-quote.module.css';

type ServicePlan = 'weekly' | 'biweekly' | 'commercial';
type PaymentMethod = 'card' | 'ach' | 'invoice';

interface FormData {
  // Step 1: Service Selection
  servicePlan: ServicePlan;
  numberOfDogs: number;
  yardSize: string;
  hasGate: boolean;
  gateCode?: string;
  
  // Step 2: Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 3: Property Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: 'residential' | 'commercial' | 'hoa' | 'apartment';
  specialInstructions?: string;
  
  // Step 4: Billing
  startDate: string;
  paymentMethod: PaymentMethod;
  promoCode?: string;
  bundleWithTurf: boolean;
}

const initialFormData: FormData = {
  servicePlan: 'weekly',
  numberOfDogs: 1,
  yardSize: 'small',
  hasGate: false,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: 'Midland',
  state: 'TX',
  zipCode: '',
  propertyType: 'residential',
  startDate: '',
  paymentMethod: 'card',
  bundleWithTurf: false,
};

export default function PetWasteQuote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  // Calculate pricing
  const calculatePrice = () => {
    let basePrice = 0;
    
    if (formData.servicePlan === 'weekly') {
      basePrice = 65;
    } else if (formData.servicePlan === 'biweekly') {
      basePrice = 45;
    } else {
      return 'Custom Quote';
    }
    
    // Additional dogs
    const additionalDogPrice = formData.servicePlan === 'weekly' ? 10 : 8;
    const totalPrice = basePrice + (formData.numberOfDogs - 1) * additionalDogPrice;
    
    // Bundle discount
    if (formData.bundleWithTurf) {
      return Math.round(totalPrice * 0.9); // 10% discount
    }
    
    return totalPrice;
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const price = calculatePrice();

  if (isSubmitted) {
    return (
      <>
        <Header />
        <div className={styles.successContainer}>
          <motion.div
            className={styles.successContent}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CheckCircle className={styles.successIcon} />
            <h1>Welcome to the Pack!</h1>
            <p>Thank you for choosing Permian Turf Solutions Pet Waste Removal.</p>
            <div className={styles.successDetails}>
              <h3>What happens next?</h3>
              <ul>
                <li>You&apos;ll receive a confirmation email within 5 minutes</li>
                <li>Our team will call you within 24 hours to confirm your first service date</li>
                <li>We&apos;ll text you the day before each service</li>
                <li>Your first service will be on {formData.startDate || 'the date we confirm'}</li>
              </ul>
            </div>
            <div className={styles.successActions}>
              <Link href="/" className="btn btn-primary">
                Return Home
              </Link>
              <Link href="/pet-waste-removal" className="btn btn-outline">
                Learn More About Our Service
              </Link>
            </div>
          </motion.div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <section className={styles.quoteSection}>
        <div className="container">
          {/* Compact Header with Progress Bar */}
          <div className={styles.compactHeader}>
            <div className={styles.headerLeft}>
              <h1>
                <PawPrint size={24} />
                Quick Signup
              </h1>
              <p>2 minutes • No contracts</p>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
              <div className={styles.progressSteps}>
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`${styles.progressStep} ${
                      step <= currentStep ? styles.active : ''
                    }`}
                  >
                    <div className={styles.stepNumber}>{step}</div>
                    <span className={styles.stepLabel}>
                      {step === 1 && 'Service'}
                      {step === 2 && 'Contact'}
                      {step === 3 && 'Property'}
                      {step === 4 && 'Billing'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.quoteForm}>
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <motion.div
                className={styles.formStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2>Choose Your Service</h2>
                
                <div className={styles.formGroup}>
                  <label>Service Frequency</label>
                  <div className={styles.radioGroup}>
                    <label className={formData.servicePlan === 'weekly' ? styles.selected : ''}>
                      <input
                        type="radio"
                        name="servicePlan"
                        value="weekly"
                        checked={formData.servicePlan === 'weekly'}
                        onChange={(e) => handleInputChange('servicePlan', e.target.value)}
                      />
                      <div className={styles.radioContent}>
                        <strong>Weekly Service</strong>
                        <span>Best for active dogs</span>
                        <span className={styles.price}>$65/month base</span>
                      </div>
                    </label>
                    <label className={formData.servicePlan === 'biweekly' ? styles.selected : ''}>
                      <input
                        type="radio"
                        name="servicePlan"
                        value="biweekly"
                        checked={formData.servicePlan === 'biweekly'}
                        onChange={(e) => handleInputChange('servicePlan', e.target.value)}
                      />
                      <div className={styles.radioContent}>
                        <strong>Bi-Weekly Service</strong>
                        <span>Great for smaller yards</span>
                        <span className={styles.price}>$45/month base</span>
                      </div>
                    </label>
                    <label className={formData.servicePlan === 'commercial' ? styles.selected : ''}>
                      <input
                        type="radio"
                        name="servicePlan"
                        value="commercial"
                        checked={formData.servicePlan === 'commercial'}
                        onChange={(e) => handleInputChange('servicePlan', e.target.value)}
                      />
                      <div className={styles.radioContent}>
                        <strong>Commercial Service</strong>
                        <span>For businesses & HOAs</span>
                        <span className={styles.price}>Custom pricing</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    <Dog size={18} />
                    Number of Dogs
                  </label>
                  <div className={styles.dogSelector}>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={formData.numberOfDogs === num ? styles.selected : ''}
                        onClick={() => handleInputChange('numberOfDogs', num)}
                      >
                        {num}{num === 5 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Yard Size</label>
                  <select
                    value={formData.yardSize}
                    onChange={(e) => handleInputChange('yardSize', e.target.value)}
                    className={styles.select}
                  >
                    <option value="small">Small (Under 3,000 sq ft)</option>
                    <option value="medium">Medium (3,000 - 7,000 sq ft)</option>
                    <option value="large">Large (7,000 - 15,000 sq ft)</option>
                    <option value="xlarge">Extra Large (Over 15,000 sq ft)</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={formData.hasGate}
                      onChange={(e) => handleInputChange('hasGate', e.target.checked)}
                    />
                    <span>My yard has a locked gate</span>
                  </label>
                  {formData.hasGate && (
                    <input
                      type="text"
                      placeholder="Gate code or instructions"
                      value={formData.gateCode || ''}
                      onChange={(e) => handleInputChange('gateCode', e.target.value)}
                      className={styles.input}
                    />
                  )}
                </div>

                <div className={styles.bundleOffer}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={formData.bundleWithTurf}
                      onChange={(e) => handleInputChange('bundleWithTurf', e.target.checked)}
                    />
                    <span>
                      <strong>Bundle with Turf Services</strong> - Save 10% on pet waste removal
                    </span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <motion.div
                className={styles.formStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2>Contact Information</h2>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>
                      <User size={18} />
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={styles.input}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    <Mail size={18} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={styles.input}
                    placeholder="(432) 555-0100"
                    required
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Property Information */}
            {currentStep === 3 && (
              <motion.div
                className={styles.formStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2>Service Address</h2>
                
                <div className={styles.formGroup}>
                  <label>
                    <MapPin size={18} />
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={styles.select}
                    >
                      <option value="Midland">Midland</option>
                      <option value="Odessa">Odessa</option>
                      <option value="Big Spring">Big Spring</option>
                      <option value="Andrews">Andrews</option>
                      <option value="Stanton">Stanton</option>
                      <option value="Garden City">Garden City</option>
                    </select>
                  </div>
                  <div className={styles.formGroup} style={{ maxWidth: '100px' }}>
                    <label>State</label>
                    <input
                      type="text"
                      value={formData.state}
                      className={styles.input}
                      disabled
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className={styles.input}
                      pattern="[0-9]{5}"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    <Home size={18} />
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value as any)}
                    className={styles.select}
                  >
                    <option value="residential">Single Family Home</option>
                    <option value="commercial">Commercial Property</option>
                    <option value="hoa">HOA/Community</option>
                    <option value="apartment">Apartment Complex</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Special Instructions (Optional)</label>
                  <textarea
                    value={formData.specialInstructions || ''}
                    onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                    className={styles.textarea}
                    rows={3}
                    placeholder="Gate location, preferred service time, etc."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Billing & Confirmation */}
            {currentStep === 4 && (
              <motion.div
                className={styles.formStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2>Start Service & Payment</h2>
                
                <div className={styles.formGroup}>
                  <label>
                    <Calendar size={18} />
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className={styles.input}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>
                    <CreditCard size={18} />
                    Payment Method
                  </label>
                  <div className={styles.radioGroup}>
                    <label className={formData.paymentMethod === 'card' ? styles.selected : ''}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      />
                      <div className={styles.radioContent}>
                        <strong>Credit/Debit Card</strong>
                        <span>Automatic monthly billing</span>
                      </div>
                    </label>
                    <label className={formData.paymentMethod === 'ach' ? styles.selected : ''}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="ach"
                        checked={formData.paymentMethod === 'ach'}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      />
                      <div className={styles.radioContent}>
                        <strong>Bank Transfer (ACH)</strong>
                        <span>Save 3% on processing fees</span>
                      </div>
                    </label>
                    {formData.servicePlan === 'commercial' && (
                      <label className={formData.paymentMethod === 'invoice' ? styles.selected : ''}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="invoice"
                          checked={formData.paymentMethod === 'invoice'}
                          onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        />
                        <div className={styles.radioContent}>
                          <strong>Monthly Invoice</strong>
                          <span>NET 30 terms</span>
                        </div>
                      </label>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Promo Code (Optional)</label>
                  <input
                    type="text"
                    value={formData.promoCode || ''}
                    onChange={(e) => handleInputChange('promoCode', e.target.value)}
                    className={styles.input}
                    placeholder="Enter promo code"
                  />
                </div>

                {/* Order Summary */}
                <div className={styles.orderSummary}>
                  <h3>Order Summary</h3>
                  <div className={styles.summaryLine}>
                    <span>Service Plan:</span>
                    <strong>
                      {formData.servicePlan === 'weekly' && 'Weekly Service'}
                      {formData.servicePlan === 'biweekly' && 'Bi-Weekly Service'}
                      {formData.servicePlan === 'commercial' && 'Commercial Service'}
                    </strong>
                  </div>
                  <div className={styles.summaryLine}>
                    <span>Number of Dogs:</span>
                    <strong>{formData.numberOfDogs}</strong>
                  </div>
                  {formData.bundleWithTurf && (
                    <div className={styles.summaryLine}>
                      <span>Bundle Discount:</span>
                      <strong className={styles.discount}>-10%</strong>
                    </div>
                  )}
                  <div className={styles.summaryTotal}>
                    <span>Monthly Total:</span>
                    <strong className={styles.totalPrice}>
                      {price === 'Custom Quote' ? price : `$${price}/month`}
                    </strong>
                  </div>
                </div>

                <div className={styles.terms}>
                  <Shield size={20} />
                  <p>
                    <strong>No contracts required.</strong> Cancel anytime with 24 hours notice. 
                    First-time customers get 50% off their first month!
                  </p>
                </div>
              </motion.div>
            )}

            {/* Form Navigation */}
            <div className={styles.formNavigation}>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className={styles.prevButton}
                >
                  <ArrowLeft size={18} />
                  Previous
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn btn-primary"
                >
                  Next Step
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Start Service'}
                  {!isSubmitting && <CheckCircle size={18} />}
                </button>
              )}
            </div>
          </form>

          {/* Pricing Preview (shown on all steps) */}
          <div className={styles.pricingPreview}>
            <div className={styles.previewContent}>
              <h4>Your Monthly Price</h4>
              <div className={styles.previewPrice}>
                {price === 'Custom Quote' ? (
                  <span>Custom Quote</span>
                ) : (
                  <>
                    <span className={styles.priceAmount}>${price}</span>
                    <span className={styles.pricePeriod}>/month</span>
                  </>
                )}
              </div>
              {formData.bundleWithTurf && price !== 'Custom Quote' && (
                <span className={styles.bundleNote}>Includes 10% bundle discount</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}