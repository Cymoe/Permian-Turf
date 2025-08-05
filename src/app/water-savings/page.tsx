'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, DollarSign, Leaf, Download } from 'lucide-react';
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
                <button className="btn btn-primary">
                  Get Your Custom Quote
                </button>
                <button className={styles.downloadBtn}>
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

      <Footer />
    </>
  );
}