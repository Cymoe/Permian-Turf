'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { DollarSign, Calculator, TrendingDown, AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import styles from '../compare.module.css';

export default function BlogClient() {
  return (
    <>
      <Header />
      
      <section className={styles.compareHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroContent}
          >
            <h1>Finding Affordable Artificial Grass in Odessa, TX</h1>
            <p className={styles.lead}>
              Quality artificial turf doesn&apos;t have to break the bank. Here&apos;s your 
              complete guide to getting the best value for artificial grass in Odessa 
              without sacrificing quality or warranty protection.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <DollarSign />
                <strong>$3-12</strong>
                <span>Per sq ft range</span>
              </div>
              <div className={styles.stat}>
                <Calculator />
                <strong>$6-8</strong>
                <span>Best value zone</span>
              </div>
              <div className={styles.stat}>
                <TrendingDown />
                <strong>40%</strong>
                <span>Potential savings</span>
              </div>
              <div className={styles.stat}>
                <AlertTriangle />
                <strong>Avoid</strong>
                <span>Too-cheap traps</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.priceBreakdown}>
        <div className="container">
          <h2>Understanding Artificial Grass Pricing in Odessa</h2>
          
          <div className={styles.priceTiers}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={styles.priceTier}
            >
              <div className={styles.tierHeader} style={{background: '#ffebee'}}>
                <h3>Budget Tier ($3-5/sq ft)</h3>
                <span className={styles.warning}>⚠️ High Risk</span>
              </div>
              <h4>What You Get:</h4>
              <ul>
                <li>Lower quality materials</li>
                <li>Limited or no warranty</li>
                <li>DIY or inexperienced installers</li>
                <li>Poor drainage systems</li>
                <li>Likely replacement in 3-5 years</li>
              </ul>
              <h4>Hidden Costs:</h4>
              <ul>
                <li>Base preparation often extra</li>
                <li>Disposal fees not included</li>
                <li>No warranty support</li>
                <li>Early replacement needed</li>
              </ul>
              <div className={styles.tierVerdict} style={{background: '#ffebee'}}>
                <strong>Verdict:</strong> False economy - costs more long-term
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={styles.priceTier}
            >
              <div className={styles.tierHeader} style={{background: '#e8f5e9'}}>
                <h3>Value Tier ($6-8/sq ft)</h3>
                <span className={styles.recommended}>✓ Best Choice</span>
              </div>
              <h4>What You Get:</h4>
              <ul>
                <li>Quality materials (8-10 year life)</li>
                <li>Professional installation</li>
                <li>Proper drainage included</li>
                <li>10-15 year warranties</li>
                <li>Local service support</li>
              </ul>
              <h4>Included Services:</h4>
              <ul>
                <li>Complete base preparation</li>
                <li>All materials and labor</li>
                <li>Disposal of old lawn</li>
                <li>Warranty protection</li>
              </ul>
              <div className={styles.tierVerdict} style={{background: '#e8f5e9'}}>
                <strong>Verdict:</strong> Best long-term value
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className={styles.priceTier}
            >
              <div className={styles.tierHeader} style={{background: '#fff3e0'}}>
                <h3>Premium Tier ($9-12/sq ft)</h3>
                <span>Diminishing Returns</span>
              </div>
              <h4>What You Get:</h4>
              <ul>
                <li>Premium materials</li>
                <li>Extended warranties</li>
                <li>Specialized features</li>
                <li>Franchise overhead</li>
                <li>Showroom costs included</li>
              </ul>
              <h4>Extra Costs For:</h4>
              <ul>
                <li>Brand name premium</li>
                <li>Franchise fees</li>
                <li>Retail locations</li>
                <li>Sales commissions</li>
              </ul>
              <div className={styles.tierVerdict} style={{background: '#fff3e0'}}>
                <strong>Verdict:</strong> Good but often overpriced
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.trueCost}>
        <div className="container">
          <h2>The True Cost Calculator</h2>
          <p className={styles.subtitle}>
            See why the cheapest quote often costs the most
          </p>
          
          <div className={styles.costComparison}>
            <h3>Example: 2,000 sq ft Residential Project</h3>
            
            <table className={styles.costTable}>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Initial Cost</th>
                  <th>5-Year Cost</th>
                  <th>10-Year Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.cheapOption}>
                  <td>
                    <strong>&ldquo;Cheap&rdquo; Option</strong><br />
                    $4/sq ft quote
                  </td>
                  <td>
                    $8,000 initial<br />
                    +$1,500 hidden fees<br />
                    = <strong>$9,500</strong>
                  </td>
                  <td>
                    $9,500 initial<br />
                    +$2,000 repairs<br />
                    = <strong>$11,500</strong>
                  </td>
                  <td>
                    $11,500<br />
                    +$9,500 replacement<br />
                    = <strong>$21,000</strong>
                  </td>
                </tr>
                <tr className={styles.valueOption}>
                  <td>
                    <strong>Value Option</strong><br />
                    $7/sq ft complete
                  </td>
                  <td>
                    $14,000 all-in<br />
                    No hidden fees<br />
                    = <strong>$14,000</strong>
                  </td>
                  <td>
                    $14,000 initial<br />
                    $0 repairs (warranty)<br />
                    = <strong>$14,000</strong>
                  </td>
                  <td>
                    $14,000 initial<br />
                    $0 replacement<br />
                    = <strong>$14,000</strong>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className={styles.costSummary}>
              <p>10-Year Savings with Quality: <strong>$7,000</strong></p>
              <p>Plus: No hassle, no surprises, continuous warranty</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.saveMoney}>
        <div className="container">
          <h2>How to Get Truly Affordable Quality Turf</h2>
          
          <div className={styles.savingsGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={styles.savingTip}
            >
              <CheckCircle className={styles.icon} />
              <h3>1. Compare Complete Quotes</h3>
              <p>
                Always get all-inclusive quotes. Ask specifically about:
              </p>
              <ul>
                <li>Base preparation costs</li>
                <li>Drainage installation</li>
                <li>Old lawn removal</li>
                <li>Edging materials</li>
                <li>Delivery fees</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={styles.savingTip}
            >
              <CheckCircle className={styles.icon} />
              <h3>2. Choose Local Installers</h3>
              <p>
                Local contractors offer better prices because:
              </p>
              <ul>
                <li>No franchise fees (save 20%)</li>
                <li>Lower overhead costs</li>
                <li>Direct manufacturer relationships</li>
                <li>No middleman markups</li>
                <li>Competitive local pricing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className={styles.savingTip}
            >
              <CheckCircle className={styles.icon} />
              <h3>3. Time Your Installation</h3>
              <p>
                Best times for lower prices:
              </p>
              <ul>
                <li>Late fall (October-November)</li>
                <li>Winter months (December-February)</li>
                <li>When combining with neighbors</li>
                <li>During contractor slow seasons</li>
                <li>For larger projects (bulk discounts)</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={styles.savingTip}
            >
              <CheckCircle className={styles.icon} />
              <h3>4. Consider Financing</h3>
              <p>
                Smart financing options:
              </p>
              <ul>
                <li>0% interest promotions</li>
                <li>Home improvement loans</li>
                <li>Spread cost over time</li>
                <li>Preserve cash flow</li>
                <li>Start saving immediately</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.warnings}>
        <div className="container">
          <h2>Red Flags: When &ldquo;Affordable&rdquo; Isn&apos;t</h2>
          
          <div className={styles.warningGrid}>
            <div className={styles.warningCard}>
              <AlertTriangle size={32} color="#dc3545" />
              <h3>Unusually Low Quotes</h3>
              <p>
                If a quote is 40%+ below others, ask why. Common tricks:
              </p>
              <ul>
                <li>Quoting material only (no installation)</li>
                <li>Using seconds or defective turf</li>
                <li>Skipping proper base preparation</li>
                <li>No warranty included</li>
              </ul>
            </div>

            <div className={styles.warningCard}>
              <AlertTriangle size={32} color="#dc3545" />
              <h3>Hidden Cost Tactics</h3>
              <p>
                Watch for quotes that don&apos;t include:
              </p>
              <ul>
                <li>&ldquo;Base work extra&rdquo;</li>
                <li>&ldquo;Disposal fees apply&rdquo;</li>
                <li>&ldquo;Delivery not included&rdquo;</li>
                <li>&ldquo;Drainage additional&rdquo;</li>
              </ul>
            </div>

            <div className={styles.warningCard}>
              <AlertTriangle size={32} color="#dc3545" />
              <h3>Quality Compromises</h3>
              <p>
                Cheap installers often:
              </p>
              <ul>
                <li>Use single-layer backing (tears easily)</li>
                <li>Skip proper compaction</li>
                <li>Install poor drainage</li>
                <li>Use inadequate infill</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.realSavings}>
        <div className="container">
          <h2>Where We Find Your Savings</h2>
          
          <div className={styles.savingsBreakdown}>
            <div className={styles.savingItem}>
              <h3>Direct Manufacturer Relationships</h3>
              <div className={styles.savingAmount}>Save 15-20%</div>
              <p>
                We buy directly from manufacturers, not through distributors 
                or franchises. Same quality turf, better prices.
              </p>
            </div>

            <div className={styles.savingItem}>
              <h3>Efficient Local Operations</h3>
              <div className={styles.savingAmount}>Save 10-15%</div>
              <p>
                No expensive showrooms, no corporate overhead, no franchise 
                fees. Just quality installation at fair prices.
              </p>
            </div>

            <div className={styles.savingItem}>
              <h3>Volume Buying Power</h3>
              <div className={styles.savingAmount}>Save 10%</div>
              <p>
                As Odessa&apos;s largest installer, we buy in bulk and pass 
                the savings to you. Better prices on materials and supplies.
              </p>
            </div>

            <div className={styles.savingItem}>
              <h3>In-House Installation Teams</h3>
              <div className={styles.savingAmount}>Save 15%</div>
              <p>
                No subcontractor markups. Our crews are employees, not 
                contractors, ensuring quality and lower costs.
              </p>
            </div>
          </div>

          <div className={styles.totalSavings}>
            <h3>Your Total Savings: 30-40% vs. Premium Installers</h3>
            <p>Same quality, same warranty, much better price</p>
          </div>
        </div>
      </section>

      <section className={styles.affordableTestimonials}>
        <div className="container">
          <h2>Real Customers, Real Savings</h2>
          
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonial}>
              <p>
                &ldquo;Got 5 quotes. Permian was $4,000 less than the average 
                and included more. Two years later, still perfect.&rdquo;
              </p>
              <cite>- Maria Gonzalez, Odessa Homeowner</cite>
              <div className={styles.saved}>Saved: $4,000</div>
            </div>

            <div className={styles.testimonial}>
              <p>
                &ldquo;The &apos;cheapest&apos; quote wanted $3,000 extra for proper 
                drainage. Permian&apos;s price included everything.&rdquo;
              </p>
              <cite>- Robert Chen, West Odessa</cite>
              <div className={styles.saved}>Saved: $3,000</div>
            </div>

            <div className={styles.testimonial}>
              <p>
                &ldquo;Financed through them at 0% for 12 months. Now saving 
                $200/month on water. Turf pays for itself!&rdquo;
              </p>
              <cite>- Jennifer White, Odessa Business Owner</cite>
              <div className={styles.saved}>Saving: $200/month</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className={styles.ctaContent}
          >
            <h2>Get Your Truly Affordable Quote</h2>
            <p>
              Quality artificial grass at honest prices. No hidden fees, 
              no surprises, just the best value in Odessa.
            </p>
            
            <div className={styles.ctaBox}>
              <h3>Free All-Inclusive Quote Includes:</h3>
              <ul className={styles.includesList}>
                <li>✓ Complete material costs</li>
                <li>✓ Professional installation</li>
                <li>✓ Base preparation</li>
                <li>✓ Drainage system</li>
                <li>✓ Old lawn removal</li>
                <li>✓ 15-year warranty</li>
              </ul>
              
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Honest Quote
                </Link>
                <a href="tel:432-555-0100" className="btn btn-outline">
                  <Phone size={20} />
                  (432) 555-0100
                </a>
              </div>
              
              <p className={styles.ctaNote}>
                Average customer saves $3,500 vs. premium quotes
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}