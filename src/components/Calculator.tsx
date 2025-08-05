'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Droplet, DollarSign } from 'lucide-react';
import styles from './Calculator.module.css';

export default function ROICalculator() {
  const [area, setArea] = useState(5000);
  const [waterCost, setWaterCost] = useState(4.5);

  // Calculate savings
  const waterUsagePerSqFt = 0.62; // gallons per sq ft per week for natural grass
  const weeksPerYear = 52;
  const annualWaterUsage = area * waterUsagePerSqFt * weeksPerYear;
  const annualWaterCost = (annualWaterUsage / 1000) * waterCost * 12; // Convert to thousands of gallons
  const waterSavings = annualWaterCost * 0.7; // 70% savings
  const maintenanceSavings = area * 0.50; // $0.50 per sq ft annual maintenance
  const totalAnnualSavings = waterSavings + maintenanceSavings;
  const turfCost = area * 7; // $7 per sq ft average
  const paybackPeriod = turfCost / totalAnnualSavings;

  return (
    <section className={`section ${styles.calculator}`}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Calculator className={styles.headerIcon} />
          <h2>Calculate Your Savings</h2>
          <p>See how much you'll save with artificial turf in the Permian Basin</p>
        </motion.div>

        <div className={styles.calculatorGrid}>
          <motion.div
            className={styles.inputs}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Your Property Details</h3>
            
            <div className="form-group">
              <label className="form-label">
                Turf Area (sq ft)
              </label>
              <input
                type="number"
                className="form-input"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                min="100"
                max="100000"
              />
              <input
                type="range"
                className={styles.slider}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                min="100"
                max="20000"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                Water Cost (per 1,000 gallons)
              </label>
              <input
                type="number"
                className="form-input"
                value={waterCost}
                onChange={(e) => setWaterCost(Number(e.target.value))}
                min="1"
                max="20"
                step="0.1"
              />
            </div>

            <div className={styles.assumptions}>
              <h4>Calculations based on:</h4>
              <ul>
                <li>70% water reduction vs natural grass</li>
                <li>Zero maintenance after installation</li>
                <li>10-year warranty coverage</li>
                <li>Permian Basin climate conditions</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className={styles.results}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Your Annual Savings</h3>
            
            <div className={styles.resultCard}>
              <Droplet className={styles.resultIcon} />
              <div>
                <span className={styles.resultLabel}>Water Savings</span>
                <span className={styles.resultValue}>
                  ${waterSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            <div className={styles.resultCard}>
              <DollarSign className={styles.resultIcon} />
              <div>
                <span className={styles.resultLabel}>Maintenance Savings</span>
                <span className={styles.resultValue}>
                  ${maintenanceSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>

            <div className={styles.totalCard}>
              <span className={styles.totalLabel}>Total Annual Savings</span>
              <span className={styles.totalValue}>
                ${totalAnnualSavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div className={styles.payback}>
              <p>
                <strong>Payback Period:</strong> {paybackPeriod.toFixed(1)} years
              </p>
              <p>
                <strong>10-Year Savings:</strong> ${(totalAnnualSavings * 10).toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
            </div>

            <button className="btn btn-primary" style={{ width: '100%' }}>
              Get Your Custom Quote
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}