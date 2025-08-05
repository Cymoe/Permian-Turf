'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, FileText } from 'lucide-react';
import styles from '../blog.module.css';

export default function BlogClient() {
  return (
    <>
      <Header />
      
      <article className={styles.blogPost}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.postHeader}
          >
            <h1>Property Manager&apos;s Guide to Artificial Turf ROI in West Texas</h1>
            
            <div className={styles.postMeta}>
              <span>
                <Calendar size={16} />
                January 29, 2024
              </span>
              <span>
                <User size={16} />
                By Permian Turf Solutions
              </span>
            </div>

            <Image
              src="/api/placeholder/800/400"
              alt="Property manager reviewing turf ROI calculations"
              width={800}
              height={400}
              className={styles.featuredImage}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.postContent}
          >
            <p className={styles.lead}>
              As a property manager in West Texas, you&apos;re constantly balancing budgets, 
              resident satisfaction, and property value. This comprehensive guide breaks down 
              exactly how artificial turf delivers ROI, with real numbers from Midland-Odessa 
              properties. Use this data to build your investment case.
            </p>

            <h2>Executive Summary: The 18-Month Payback</h2>
            
            <div className={styles.roiSummary}>
              <p>
                Based on 50+ commercial installations across the Permian Basin, artificial turf 
                typically delivers:
              </p>
              <ul>
                <li>Full payback in 12-24 months</li>
                <li>60-80% reduction in landscape maintenance costs</li>
                <li>100% elimination of irrigation expenses</li>
                <li>5-year NPV of $200,000+ for 30,000 sq ft properties</li>
                <li>Immediate increase in property appeal and value</li>
              </ul>
            </div>

            <h2>Current Landscaping Costs: The Hidden Budget Killer</h2>

            <p>
              Most property managers underestimate their true landscaping costs. Here&apos;s what 
              West Texas properties actually spend:
            </p>

            <div className={styles.costTable}>
              <h3>Annual Landscaping Expenses (30,000 sq ft property)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Expense Category</th>
                    <th>Monthly Cost</th>
                    <th>Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Landscape contractor</td>
                    <td>$2,500-4,000</td>
                    <td>$30,000-48,000</td>
                  </tr>
                  <tr>
                    <td>Water (drought rates)</td>
                    <td>$1,500-3,000</td>
                    <td>$18,000-36,000</td>
                  </tr>
                  <tr>
                    <td>Irrigation repairs</td>
                    <td>$300-500</td>
                    <td>$3,600-6,000</td>
                  </tr>
                  <tr>
                    <td>Seasonal replanting</td>
                    <td>$500 (quarterly)</td>
                    <td>$6,000</td>
                  </tr>
                  <tr>
                    <td>Storm/drought recovery</td>
                    <td>-</td>
                    <td>$5,000-10,000</td>
                  </tr>
                  <tr className={styles.totalRow}>
                    <td><strong>Total</strong></td>
                    <td><strong>$4,800-7,500</strong></td>
                    <td><strong>$62,600-100,000</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Artificial Turf Investment Analysis</h2>

            <h3>One-Time Installation Costs</h3>
            <div className={styles.investmentBreakdown}>
              <ul>
                <li>Premium turf material: $2.50-3.50/sq ft</li>
                <li>Professional installation: $3.50-4.50/sq ft</li>
                <li>Total investment: $6-8/sq ft</li>
                <li><strong>30,000 sq ft property: $180,000-240,000</strong></li>
              </ul>
            </div>

            <h3>Ongoing Costs with Artificial Turf</h3>
            <div className={styles.highlight}>
              <p><strong>$0 monthly</strong></p>
              <p>No mowing, no watering, no maintenance contracts</p>
            </div>

            <h2>ROI Calculation Tool</h2>

            <div className={styles.calculator}>
              <h3>Quick ROI Calculator</h3>
              <div className={styles.calcGrid}>
                <div>
                  <label>Current Annual Landscaping Cost:</label>
                  <strong>$80,000</strong>
                </div>
                <div>
                  <label>Turf Installation Investment:</label>
                  <strong>$210,000</strong>
                </div>
                <div>
                  <label>Simple Payback Period:</label>
                  <strong className={styles.highlight}>2.6 years</strong>
                </div>
                <div>
                  <label>10-Year Savings:</label>
                  <strong className={styles.highlight}>$590,000</strong>
                </div>
              </div>
            </div>

            <h2>Beyond the Numbers: Hidden Value Drivers</h2>

            <h3>1. Property Value Increase</h3>
            <p>
              Commercial appraisers recognize permanent improvements. Properties with artificial 
              turf typically see:
            </p>
            <ul>
              <li>2-5% increase in appraised value</li>
              <li>Reduced cap rate due to lower operating expenses</li>
              <li>Higher sale price from improved NOI</li>
            </ul>

            <h3>2. Resident Satisfaction & Retention</h3>
            <p>
              Happy residents renew leases. Turf delivers:
            </p>
            <ul>
              <li>Always-perfect appearance</li>
              <li>No mud tracked into units</li>
              <li>Usable outdoor space year-round</li>
              <li>Pet-friendly without dead spots</li>
            </ul>

            <h3>3. Risk Mitigation</h3>
            <p>
              Eliminate common property management headaches:
            </p>
            <ul>
              <li>No slip-and-fall liability from wet grass</li>
              <li>No irrigation leaks damaging foundations</li>
              <li>No dead grass during water restrictions</li>
              <li>No emergency landscaping expenses</li>
            </ul>

            <h2>Financing Options for Property Managers</h2>

            <div className={styles.financingGrid}>
              <div className={styles.financeOption}>
                <h4>Capital Improvement Budget</h4>
                <p>Most properties qualify turf as a capital improvement with 15-year depreciation</p>
              </div>
              <div className={styles.financeOption}>
                <h4>Property Improvement Loans</h4>
                <p>Many lenders offer 5-7 year terms specifically for landscape upgrades</p>
              </div>
              <div className={styles.financeOption}>
                <h4>Utility Rebates</h4>
                <p>Check with local water districts for conservation incentives up to $50,000</p>
              </div>
              <div className={styles.financeOption}>
                <h4>Phased Installation</h4>
                <p>Spread costs over 2-3 budget cycles while seeing immediate savings</p>
              </div>
            </div>

            <h2>Making the Case to Owners/Boards</h2>

            <p>
              Use this presentation framework to get buy-in:
            </p>

            <div className={styles.presentationGuide}>
              <h4>1. Current State Analysis</h4>
              <ul>
                <li>Document all landscaping expenses for past 3 years</li>
                <li>Include water costs, especially drought surcharges</li>
                <li>Add emergency repairs and replanting costs</li>
                <li>Calculate staff time spent on landscape issues</li>
              </ul>

              <h4>2. Investment Proposal</h4>
              <ul>
                <li>Get 3 quotes from certified installers</li>
                <li>Include 15-year warranty documentation</li>
                <li>Show phasing options if needed</li>
                <li>Present financing alternatives</li>
              </ul>

              <h4>3. ROI Projection</h4>
              <ul>
                <li>Create 10-year cash flow projection</li>
                <li>Calculate NPV using property&apos;s cost of capital</li>
                <li>Show break-even point clearly</li>
                <li>Include sensitivity analysis for water costs</li>
              </ul>

              <h4>4. Risk Analysis</h4>
              <ul>
                <li>Compare to status quo risks (drought, restrictions)</li>
                <li>Show warranty protections</li>
                <li>Provide references from similar properties</li>
                <li>Address common concerns proactively</li>
              </ul>
            </div>

            <h2>West Texas Success Stories</h2>

            <div className={styles.successGrid}>
              <div className={styles.successStory}>
                <h4>Permian Plaza Apartments</h4>
                <p>250 units, 45,000 sq ft turf</p>
                <p>Payback: 19 months</p>
                <p>Annual savings: $112,000</p>
              </div>
              <div className={styles.successStory}>
                <h4>Midessa Business Park</h4>
                <p>Commercial complex, 60,000 sq ft</p>
                <p>Payback: 16 months</p>
                <p>Annual savings: $156,000</p>
              </div>
              <div className={styles.successStory}>
                <h4>Eagle Ford Workforce Housing</h4>
                <p>Man camp, 35,000 sq ft</p>
                <p>Payback: 14 months</p>
                <p>Annual savings: $96,000</p>
              </div>
            </div>

            <h2>Implementation Timeline</h2>

            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <strong>Week 1-2:</strong> Site assessment and quotes
              </div>
              <div className={styles.timelineItem}>
                <strong>Week 3-4:</strong> Approval and contracting
              </div>
              <div className={styles.timelineItem}>
                <strong>Week 5:</strong> Site preparation
              </div>
              <div className={styles.timelineItem}>
                <strong>Week 6-7:</strong> Installation
              </div>
              <div className={styles.timelineItem}>
                <strong>Week 8:</strong> Final inspection and handoff
              </div>
            </div>

            <h2>Download Our ROI Toolkit</h2>

            <div className={styles.toolkit}>
              <FileText size={48} />
              <h3>Free Property Manager&apos;s Toolkit Includes:</h3>
              <ul>
                <li>Excel ROI calculator template</li>
                <li>Board presentation PowerPoint</li>
                <li>Warranty comparison guide</li>
                <li>Maintenance elimination checklist</li>
                <li>Reference list from 50+ properties</li>
              </ul>
              <p className={styles.note}>
                Request your toolkit when you schedule a consultation
              </p>
            </div>

            <h2>The Bottom Line for Property Managers</h2>

            <p>
              In West Texas, artificial turf isn&apos;t just about saving money - it&apos;s about 
              eliminating an entire category of property management headaches. With proven ROI 
              under 2 years and zero ongoing maintenance, it&apos;s one of the few investments 
              that immediately improves both your bottom line and your daily operations.
            </p>

            <div className={styles.cta}>
              <h3>Ready to Run Your Numbers?</h3>
              <p>
                Get a customized ROI analysis for your property. We&apos;ll review your current 
                costs and show exactly when you&apos;ll break even.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get ROI Analysis
                </Link>
                <a href="tel:432-555-0100" className="btn btn-outline">
                  Call (432) 555-0100
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
      
      <Footer />
    </>
  );
}