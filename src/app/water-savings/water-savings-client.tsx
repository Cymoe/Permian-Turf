'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplet, DollarSign, Leaf, Download, X, User, Mail, Phone } from 'lucide-react';
import { generatePDFReport } from '@/utils/generatePDFReport';
import styles from './water-savings.module.css';

export default function WaterSavings() {
  // Basic inputs
  const [propertyType, setPropertyType] = useState('commercial');
  const [area, setArea] = useState(10000);
  const [waterRate, setWaterRate] = useState(4.5);
  const [sewerRate, setSewerRate] = useState(3.2);
  
  // Advanced inputs
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [irrigationMonths, setIrrigationMonths] = useState(8);
  const [maintenanceCost, setMaintenanceCost] = useState(0.5);
  const [mowingFrequency, setMowingFrequency] = useState(30);
  const [fertilizerApps] = useState(4);
  
  // Modal and form state
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Calculations
  const gallonsPerSqFtPerWeek = propertyType === 'commercial' ? 0.75 : 0.62;
  const weeksPerYear = (irrigationMonths / 12) * 52;
  const annualWaterGallons = area * gallonsPerSqFtPerWeek * weeksPerYear;
  const annualWaterThousands = annualWaterGallons / 1000;
  
  // Costs
  const waterCost = annualWaterThousands * waterRate;
  const sewerCost = annualWaterThousands * sewerRate * 0.8; // 80% of water becomes sewer
  const maintenanceAnnual = area * maintenanceCost;
  const mowingCost = (mowingFrequency * 50); // $50 per mowing
  const fertilizerCost = fertilizerApps * 150; // $150 per application
  
  const totalNaturalGrassCost = waterCost + sewerCost + maintenanceAnnual + mowingCost + fertilizerCost;
  const turfInstallCost = area * (propertyType === 'commercial' ? 7 : 8);
  const paybackYears = turfInstallCost / totalNaturalGrassCost;

  // Validate form
  const validateForm = () => {
    const newErrors = { name: '', email: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      isValid = false;
    } else if (!/^\d{3}-?\d{3}-?\d{4}$/.test(formData.phone.replace(/[-()\s]/g, ''))) {
      newErrors.phone = 'Phone number is invalid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission and PDF generation
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Track lead generation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'Water Savings Calculator',
        event_label: 'PDF Download',
        value: totalNaturalGrassCost
      });
    }

    // Simulate API call to save lead
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Lead captured:', formData);

    // Generate PDF
    generatePDFReport({
      propertyType,
      area,
      irrigationMonths,
      gallonsPerSqFtPerWeek,
      annualWaterGallons,
      annualWaterThousands,
      waterRate,
      sewerRate,
      maintenanceCost,
      waterCost,
      sewerCost,
      maintenanceAnnual,
      mowingFrequency,
      mowingCost,
      fertilizerApps,
      fertilizerCost,
      totalNaturalGrassCost,
      turfInstallCost,
      paybackYears
    });

    setIsSubmitting(false);
    setShowModal(false);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
    setErrors({ name: '', email: '', phone: '' });
  };

  // Open modal when download button clicked
  const handleDownloadReport = () => {
    setShowModal(true);
  };

  // Handle input change
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };
  
  // 10-year analysis
  const tenYearNaturalCost = totalNaturalGrassCost * 10;
  const tenYearSavings = tenYearNaturalCost - turfInstallCost;
  const roi = ((tenYearSavings / turfInstallCost) * 100).toFixed(0);

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
            <Droplet className={styles.heroIcon} />
            <h1>Water Savings Calculator</h1>
            <p>
              See exactly how much water and money you&apos;ll save with artificial turf 
              in the Permian Basin&apos;s challenging climate.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <div className={styles.calculatorGrid}>
            {/* Inputs Section */}
            <motion.div
              className={styles.inputs}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2>Property Information</h2>
              
              <div className="form-group">
                <label className="form-label">Property Type</label>
                <select
                  className="form-input"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="commercial">Commercial Property</option>
                  <option value="residential">Residential Home</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Turf Area (sq ft)
                  <span className={styles.value}>{area.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  className={styles.slider}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  min="500"
                  max="50000"
                  step="100"
                />
                <div className={styles.sliderLabels}>
                  <span>500</span>
                  <span>50,000</span>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Water Rate (per 1,000 gallons)
                  <span className={styles.value}>${waterRate.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  className={styles.slider}
                  value={waterRate}
                  onChange={(e) => setWaterRate(Number(e.target.value))}
                  min="2"
                  max="10"
                  step="0.1"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Sewer Rate (per 1,000 gallons)
                  <span className={styles.value}>${sewerRate.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  className={styles.slider}
                  value={sewerRate}
                  onChange={(e) => setSewerRate(Number(e.target.value))}
                  min="1"
                  max="8"
                  step="0.1"
                />
              </div>

              <button
                className={styles.advancedToggle}
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                {showAdvanced ? 'Hide' : 'Show'} Advanced Options
              </button>

              {showAdvanced && (
                <motion.div
                  className={styles.advanced}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <div className="form-group">
                    <label className="form-label">
                      Irrigation Months per Year
                      <span className={styles.value}>{irrigationMonths}</span>
                    </label>
                    <input
                      type="range"
                      className={styles.slider}
                      value={irrigationMonths}
                      onChange={(e) => setIrrigationMonths(Number(e.target.value))}
                      min="4"
                      max="12"
                      step="1"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Maintenance Cost (per sq ft/year)
                      <span className={styles.value}>${maintenanceCost.toFixed(2)}</span>
                    </label>
                    <input
                      type="range"
                      className={styles.slider}
                      value={maintenanceCost}
                      onChange={(e) => setMaintenanceCost(Number(e.target.value))}
                      min="0.1"
                      max="2"
                      step="0.1"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      Mowing Frequency (times/year)
                      <span className={styles.value}>{mowingFrequency}</span>
                    </label>
                    <input
                      type="range"
                      className={styles.slider}
                      value={mowingFrequency}
                      onChange={(e) => setMowingFrequency(Number(e.target.value))}
                      min="10"
                      max="50"
                      step="1"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Results Section */}
            <motion.div
              className={styles.results}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2>Your Savings Analysis</h2>

              <div className={styles.resultCard}>
                <div className={styles.resultHeader}>
                  <Droplet className={styles.resultIcon} />
                  <h3>Water Conservation</h3>
                </div>
                <div className={styles.resultStats}>
                  <div>
                    <span className={styles.label}>Annual Water Usage (Natural Grass)</span>
                    <span className={styles.bigNumber}>
                      {(annualWaterGallons / 1000).toLocaleString()} <small>thousand gallons</small>
                    </span>
                  </div>
                  <div>
                    <span className={styles.label}>Water Saved with Turf</span>
                    <span className={styles.bigNumber} style={{ color: 'var(--secondary)' }}>
                      100%
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.resultCard}>
                <div className={styles.resultHeader}>
                  <DollarSign className={styles.resultIcon} />
                  <h3>Annual Cost Breakdown</h3>
                </div>
                <div className={styles.costBreakdown}>
                  <div className={styles.costItem}>
                    <span>Water</span>
                    <span>${waterCost.toLocaleString()}</span>
                  </div>
                  <div className={styles.costItem}>
                    <span>Sewer</span>
                    <span>${sewerCost.toLocaleString()}</span>
                  </div>
                  <div className={styles.costItem}>
                    <span>Maintenance</span>
                    <span>${maintenanceAnnual.toLocaleString()}</span>
                  </div>
                  <div className={styles.costItem}>
                    <span>Mowing</span>
                    <span>${mowingCost.toLocaleString()}</span>
                  </div>
                  <div className={styles.costItem}>
                    <span>Fertilizer</span>
                    <span>${fertilizerCost.toLocaleString()}</span>
                  </div>
                  <div className={styles.costTotal}>
                    <span>Total Annual Cost</span>
                    <span>${totalNaturalGrassCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className={styles.roiCard}>
                <h3>Return on Investment</h3>
                <div className={styles.roiGrid}>
                  <div>
                    <span className={styles.label}>Payback Period</span>
                    <span className={styles.bigNumber}>{paybackYears.toFixed(1)} years</span>
                  </div>
                  <div>
                    <span className={styles.label}>10-Year Savings</span>
                    <span className={styles.bigNumber} style={{ color: 'var(--secondary)' }}>
                      ${tenYearSavings.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className={styles.label}>10-Year ROI</span>
                    <span className={styles.bigNumber}>{roi}%</span>
                  </div>
                </div>
              </div>

              <div className={styles.actions}>
                <Link href="/quote" className="btn btn-primary">
                  Get Your Custom Quote
                </Link>
                <button className={styles.downloadBtn} onClick={handleDownloadReport}>
                  <Download size={18} />
                  Download Report
                </button>
              </div>
            </motion.div>
          </div>

          {/* Environmental Impact */}
          <motion.div
            className={styles.environmental}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Leaf className={styles.envIcon} />
            <h3>Environmental Impact</h3>
            <div className={styles.envGrid}>
              <div>
                <strong>{(annualWaterGallons / 1000).toLocaleString()}</strong>
                <span>Thousand gallons saved annually</span>
              </div>
              <div>
                <strong>{(annualWaterGallons / 15000).toFixed(0)}</strong>
                <span>Swimming pools worth of water</span>
              </div>
              <div>
                <strong>Zero</strong>
                <span>Chemicals & fertilizers needed</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Reduction in lawn equipment emissions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className={styles.modalBackdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <button
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className={styles.modalContent}>
                <h3>Get Your Free Water Savings Report</h3>
                <p>Enter your contact information to receive your personalized PDF report showing exactly how much you can save.</p>
                
                <form onSubmit={handleFormSubmit} className={styles.modalForm}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">
                      <User size={18} />
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Smith"
                      className={errors.name ? styles.error : ''}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@company.com"
                      className={errors.email ? styles.error : ''}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(432) 555-0100"
                      className={errors.phone ? styles.error : ''}
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </div>
                  
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitButton}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Generating Report...</>
                    ) : (
                      <>
                        <Download size={18} />
                        Download PDF Report
                      </>
                    )}
                  </button>
                  
                  <p className={styles.disclaimer}>
                    Your information is secure and will only be used to send your report and provide a custom quote.
                  </p>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}