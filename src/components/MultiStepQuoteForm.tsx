'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, User, Mail, Phone, Building, MessageSquare,
  ChevronRight, ChevronLeft, MapPin, Ruler, DollarSign,
  Calendar, CheckCircle, Home, Building2, Truck, Droplet,
  Trees
} from 'lucide-react';
import { getCurrentSeason } from '@/utils/seasons';
import styles from './MultiStepQuoteForm.module.css';

interface FormData {
  // Step 1: Property Type
  propertyType: string;
  propertyName?: string;
  
  // Step 2: Project Details
  projectSize: string;
  areas: string[];
  biophilicAreas: string[];
  timeline: string;
  
  // Step 3: Contact Info
  name: string;
  email: string;
  phone: string;
  city: string;
  
  // Step 4: Additional Info
  budget: string;
  waterBill: string;
  message: string;
}

const PROPERTY_TYPES = [
  { id: 'rv-park', label: 'RV Park', icon: Truck, description: 'Oil field housing & RV facilities' },
  { id: 'apartment', label: 'Workforce Housing', icon: Building2, description: 'Man camps & apartment complexes' },
  { id: 'commercial', label: 'Commercial', icon: Building, description: 'Office buildings & retail spaces' },
  { id: 'residential', label: 'Residential', icon: Home, description: 'Single family homes' },
];

const AREA_OPTIONS = [
  'Front Yard/Entrance',
  'Backyard/Pool Area',
  'Side Yards',
  'Common Areas',
  'Pool/Recreation Area',
  'Pet Areas',
  'Playground/Sports Area',
  'Parking Strips',
  'Rooftop/Balcony',
  'Entire Property',
];

const BIOPHILIC_OPTIONS = [
  'Green Walls (Indoor)',
  'Green Walls (Outdoor)',
  'Ceiling Gardens',
  'Room Dividers/Partitions',
  'Reception/Lobby Features',
  'Office Spaces',
  'Break Room/Cafeteria',
  'Healthcare Facilities',
  'Retail/Restaurant Spaces',
  'Residential Living Areas',
];

export default function MultiStepQuoteForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const totalSteps = 4;
  const currentSeason = getCurrentSeason();
  
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    propertyName: '',
    projectSize: '',
    areas: [],
    biophilicAreas: [],
    timeline: '',
    name: '',
    email: '',
    phone: '',
    city: 'Midland',
    budget: '',
    waterBill: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Scroll to top when step changes
  useEffect(() => {
    // Small delay to allow animation to start
    const scrollTimeout = setTimeout(() => {
      // Try to find the quote section heading first
      const quoteHeading = document.querySelector('h2');
      if (quoteHeading && quoteHeading.textContent?.includes('Request Your Custom Quote')) {
        // Scroll to the heading with some offset
        const yOffset = -20; 
        const y = quoteHeading.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        // Fallback to form container
        const formElement = document.querySelector(`.${styles.container}`);
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Final fallback to page top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, [currentStep]);

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};
    
    switch(step) {
      case 1:
        if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
        break;
      case 2:
        if (!formData.projectSize) newErrors.projectSize = 'Please select project size';
        if (formData.areas.length === 0 && formData.biophilicAreas.length === 0) {
          newErrors.areas = ['Please select at least one area or biophilic design option'];
        }
        if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
        break;
      case 3:
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        break;
      case 4:
        // Step 4 is optional - no validation required
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    console.log('Moving from step', currentStep, 'to step', currentStep + 1);
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted on step:', currentStep);
    
    // Only submit if we're on step 4
    if (currentStep !== 4) {
      console.log('Not on step 4, ignoring submit');
      return;
    }
    
    setIsSubmitting(true);
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        currency: 'USD',
        value: formData.projectSize === 'xlarge' ? 50000 : 25000,
      });
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Store form data in session storage for the thank you page (optional)
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('quoteFormData', JSON.stringify(formData));
    }
    
    // Redirect to thank you page
    setTimeout(() => {
      router.push('/thank-you');
    }, 500);
  };

  const updateFormData = (field: keyof FormData, value: FormData[keyof FormData]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleArea = (area: string) => {
    const newAreas = formData.areas.includes(area)
      ? formData.areas.filter(a => a !== area)
      : [...formData.areas, area];
    updateFormData('areas', newAreas);
  };

  const toggleBiophilicArea = (area: string) => {
    const newAreas = formData.biophilicAreas.includes(area)
      ? formData.biophilicAreas.filter(a => a !== area)
      : [...formData.biophilicAreas, area];
    updateFormData('biophilicAreas', newAreas);
  };

  if (submitted) {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle className={styles.successIcon} />
        <h3>Success!</h3>
        <p>Redirecting you to your personalized dashboard...</p>
        <div className={styles.loadingSpinner} />
      </motion.div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      
      {/* Step Indicators */}
      <div className={styles.stepIndicators}>
        {[1, 2, 3, 4].map(step => (
          <div
            key={step}
            className={`${styles.stepIndicator} ${
              step === currentStep ? styles.active : ''
            } ${step < currentStep ? styles.completed : ''}`}
          >
            {step < currentStep ? <CheckCircle size={20} /> : step}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <AnimatePresence mode="wait">
          {/* Step 1: Property Type */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h3>What type of property needs water-free landscaping?</h3>
              <p className={styles.stepDescription}>
                We specialize in drought-resistant solutions for the Permian Basin
              </p>
              
              <div className={styles.propertyTypes}>
                {PROPERTY_TYPES.map(type => (
                  <button
                    key={type.id}
                    type="button"
                    className={`${styles.propertyTypeCard} ${
                      formData.propertyType === type.id ? styles.selected : ''
                    }`}
                    onClick={() => updateFormData('propertyType', type.id)}
                  >
                    <type.icon className={styles.propertyIcon} />
                    <span className={styles.propertyLabel}>{type.label}</span>
                    <span className={styles.propertyDescription}>{type.description}</span>
                  </button>
                ))}
              </div>
              
              {formData.propertyType && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="form-group"
                >
                  <label className="form-label">Property Name (Optional)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g., Sunset RV Park"
                    value={formData.propertyName}
                    onChange={(e) => updateFormData('propertyName', e.target.value)}
                  />
                </motion.div>
              )}
              
              {errors.propertyType && (
                <p className={styles.error}>{errors.propertyType}</p>
              )}
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h3>Tell us about your project</h3>
              <p className={styles.stepDescription}>
                This helps us prepare an accurate quote for your water-saving transformation
              </p>
              
              <div className="form-group">
                <label className="form-label">
                  <Ruler size={18} />
                  Estimated Project Size
                </label>
                <select
                  className="form-input"
                  value={formData.projectSize}
                  onChange={(e) => updateFormData('projectSize', e.target.value)}
                >
                  <option value="">Select size range</option>
                  <option value="small">Under 2,500 sq ft</option>
                  <option value="medium">2,500 - 5,000 sq ft</option>
                  <option value="large">5,000 - 10,000 sq ft</option>
                  <option value="xlarge">10,000 - 25,000 sq ft</option>
                  <option value="xxlarge">Over 25,000 sq ft</option>
                </select>
                {errors.projectSize && (
                  <p className={styles.fieldError}>{errors.projectSize}</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <MapPin size={18} />
                  Areas to Transform (Select all that apply)
                </label>
                <div className={styles.checkboxGroup}>
                  {AREA_OPTIONS.map(area => (
                    <label key={area} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formData.areas.includes(area)}
                        onChange={() => toggleArea(area)}
                      />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Trees size={18} />
                  Biophilic Design Options (Select all that apply)
                </label>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.75rem' }}>
                  Transform indoor and outdoor spaces with maintenance-free green walls, ceilings, and partitions
                </p>
                <div className={styles.checkboxGroup}>
                  {BIOPHILIC_OPTIONS.map(area => (
                    <label key={area} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={formData.biophilicAreas.includes(area)}
                        onChange={() => toggleBiophilicArea(area)}
                      />
                      <span>{area}</span>
                    </label>
                  ))}
                </div>
                {errors.areas && (
                  <p className={styles.fieldError}>{errors.areas}</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  <Calendar size={18} />
                  Installation Timeline
                </label>
                <select
                  className="form-input"
                  value={formData.timeline}
                  onChange={(e) => updateFormData('timeline', e.target.value)}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP - Emergency drought response</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="planning">Just planning/budgeting</option>
                </select>
                {errors.timeline && (
                  <p className={styles.fieldError}>{errors.timeline}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h3>How can we reach you?</h3>
              <p className={styles.stepDescription}>
                We&apos;ll send your custom quote and water savings analysis here
              </p>
              
              <div className={styles.formGrid}>
                <div className="form-group">
                  <label className="form-label">
                    <User size={18} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className={styles.fieldError}>{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Mail size={18} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className={styles.fieldError}>{errors.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    placeholder="(432) 555-0100"
                  />
                  {errors.phone && (
                    <p className={styles.fieldError}>{errors.phone}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <MapPin size={18} />
                    City
                  </label>
                  <select
                    className="form-input"
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                  >
                    <option value="Midland">Midland</option>
                    <option value="Odessa">Odessa</option>
                    <option value="Big Spring">Big Spring</option>
                    <option value="Andrews">Andrews</option>
                    <option value="Crane">Crane</option>
                    <option value="Other">Other Permian Basin</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Additional Information */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={styles.step}
            >
              <h3>Almost done! Any additional details?</h3>
              <p className={styles.stepDescription}>
                Optional information to help us prepare the best solution
              </p>
              
              <div className={styles.formGrid}>
                <div className="form-group">
                  <label className="form-label">
                    <DollarSign size={18} />
                    Budget Range (Optional)
                  </label>
                  <select
                    className="form-input"
                    value={formData.budget}
                    onChange={(e) => updateFormData('budget', e.target.value)}
                  >
                    <option value="">Prefer not to say</option>
                    <option value="10-25k">$10,000 - $25,000</option>
                    <option value="25-50k">$25,000 - $50,000</option>
                    <option value="50-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Droplet size={18} />
                    Current Monthly Water Bill (Optional)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.waterBill}
                    onChange={(e) => updateFormData('waterBill', e.target.value)}
                    placeholder="$2,500"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <MessageSquare size={18} />
                  Additional Details (Optional)
                </label>
                <textarea
                  className="form-input"
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  rows={4}
                  placeholder="Specific areas of concern, water restrictions you're facing, special requirements..."
                />
              </div>

              <div className={styles.urgencyBanner}>
                <strong>🔥 Limited Time Offer:</strong> {currentSeason} installations include FREE drainage system upgrade (Save $3,500)
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className={styles.navigation}>
          {currentStep > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleBack(e);
              }}
              className="btn btn-outline dark"
            >
              <ChevronLeft size={18} />
              Back
            </button>
          )}
          
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNext(e);
              }}
              className="btn btn-primary"
            >
              Next Step
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="submit"
              className={`btn btn-primary ${styles.submitButton}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Send size={18} />
                  Get My Water-Saving Quote
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
