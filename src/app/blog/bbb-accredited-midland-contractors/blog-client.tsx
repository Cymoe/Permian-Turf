'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Shield, CheckCircle, AlertTriangle, Award } from 'lucide-react';
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
            <h1>BBB Accredited: What It Means When Choosing Midland Contractors</h1>
            
            <div className={styles.postMeta}>
              <span>
                <Calendar size={16} />
                February 12, 2024
              </span>
              <span>
                <User size={16} />
                By Permian Turf Solutions
              </span>
            </div>

            <Image
              src="/api/placeholder/800/400"
              alt="Better Business Bureau accreditation seal"
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
              With artificial turf installations ranging from $50,000 to $250,000, choosing the 
              right contractor is critical. In the Permian Basin&apos;s booming market, new 
              &ldquo;contractors&rdquo; appear weekly - but not all are legitimate. Here&apos;s why BBB 
              accreditation should be your first checkpoint when vetting contractors.
            </p>

            <h2>The West Texas Contractor Landscape</h2>
            
            <p>
              The oil boom brought tremendous growth to Midland-Odessa, but it also attracted 
              fly-by-night operators. In 2023 alone, the Permian Basin BBB received:
            </p>

            <div className={styles.warningStats}>
              <div className={styles.stat}>
                <AlertTriangle className={styles.icon} />
                <strong>847</strong>
                <span>Contractor complaints</span>
              </div>
              <div className={styles.stat}>
                <Shield className={styles.icon} />
                <strong>$3.2M</strong>
                <span>In disputed projects</span>
              </div>
              <div className={styles.stat}>
                <CheckCircle className={styles.icon} />
                <strong>92%</strong>
                <span>Resolution rate for BBB members</span>
              </div>
              <div className={styles.stat}>
                <Award className={styles.icon} />
                <strong>14%</strong>
                <span>Resolution for non-members</span>
              </div>
            </div>

            <h2>What BBB Accreditation Actually Means</h2>

            <p>
              Many contractors claim to be &ldquo;BBB members&rdquo; or display old ratings. True BBB 
              accreditation requires:
            </p>

            <div className={styles.accreditationRequirements}>
              <h3>Annual Verification Process</h3>
              <ul>
                <li>
                  <strong>Business legitimacy check:</strong> Verified licenses, insurance, and 
                  physical location
                </li>
                <li>
                  <strong>Financial stability review:</strong> Proof of bonding and ability to 
                  honor warranties
                </li>
                <li>
                  <strong>Background investigations:</strong> Owner history and legal standing
                </li>
                <li>
                  <strong>Complaint resolution commitment:</strong> Legally binding agreement to 
                  address all issues
                </li>
              </ul>
            </div>

            <h2>The Real Cost of Choosing Wrong</h2>

            <div className={styles.caseStudy}>
              <h3>Case Study: Midland Property Manager&apos;s $180,000 Mistake</h3>
              <p>
                In March 2023, a 200-unit complex hired a non-accredited &ldquo;contractor&rdquo; offering 
                artificial turf at 40% below market rate. The results:
              </p>
              <ul>
                <li>Substandard turf began failing within 60 days</li>
                <li>Contractor disappeared when warranty claims arose</li>
                <li>No recourse through BBB or legal channels</li>
                <li>Complete reinstallation cost: $180,000</li>
                <li>Total loss including removal: $280,000</li>
              </ul>
              <p className={styles.warning}>
                The &ldquo;contractor&rdquo; simply dissolved their LLC and started operating under a 
                new name in another city.
              </p>
            </div>

            <h2>BBB Accreditation Benefits for Property Owners</h2>

            <div className={styles.benefitGrid}>
              <div className={styles.benefit}>
                <h4>1. Dispute Resolution Guarantee</h4>
                <p>
                  Accredited businesses must respond to all complaints within 14 days and work 
                  toward resolution. Non-response results in immediate accreditation loss.
                </p>
              </div>
              <div className={styles.benefit}>
                <h4>2. Financial Protection</h4>
                <p>
                  BBB verifies bonding and insurance annually. If a contractor fails, you have 
                  recourse through their bond for project completion.
                </p>
              </div>
              <div className={styles.benefit}>
                <h4>3. Warranty Enforcement</h4>
                <p>
                  Accredited businesses can&apos;t simply ignore warranty claims. BBB tracks all 
                  issues and mediates resolutions.
                </p>
              </div>
              <div className={styles.benefit}>
                <h4>4. Public Accountability</h4>
                <p>
                  All complaints and resolutions become public record. Bad actors can&apos;t hide 
                  their history by changing names.
                </p>
              </div>
            </div>

            <h2>How to Verify BBB Accreditation</h2>

            <div className={styles.verificationSteps}>
              <h3>Don&apos;t Trust - Verify:</h3>
              <ol>
                <li>
                  <strong>Visit BBB.org directly</strong> - Don&apos;t rely on contractor-provided 
                  links or certificates
                </li>
                <li>
                  <strong>Search by exact business name</strong> - Many use similar names to 
                  legitimate companies
                </li>
                <li>
                  <strong>Check accreditation dates</strong> - Look for continuous accreditation, 
                  not gaps
                </li>
                <li>
                  <strong>Review complaint history</strong> - Even good companies have complaints; 
                  it&apos;s how they&apos;re resolved that matters
                </li>
                <li>
                  <strong>Verify the seal</strong> - Current BBB seals include the year and can 
                  be clicked to verify
                </li>
              </ol>
            </div>

            <h2>Red Flags: When to Run</h2>

            <div className={styles.redFlags}>
              <div className={styles.flag}>
                <AlertTriangle size={24} />
                <div>
                  <h4>Pressure Tactics</h4>
                  <p>&ldquo;This price is only good today&rdquo; or &ldquo;We&apos;re booking up fast&rdquo;</p>
                </div>
              </div>
              <div className={styles.flag}>
                <AlertTriangle size={24} />
                <div>
                  <h4>Cash-Only Deals</h4>
                  <p>Legitimate contractors accept multiple payment methods and provide receipts</p>
                </div>
              </div>
              <div className={styles.flag}>
                <AlertTriangle size={24} />
                <div>
                  <h4>No Physical Address</h4>
                  <p>P.O. boxes or residential addresses indicate fly-by-night operations</p>
                </div>
              </div>
              <div className={styles.flag}>
                <AlertTriangle size={24} />
                <div>
                  <h4>Unusually Low Prices</h4>
                  <p>If it&apos;s 30%+ below other quotes, there&apos;s always a reason</p>
                </div>
              </div>
            </div>

            <h2>What to Expect from BBB Accredited Contractors</h2>

            <div className={styles.expectations}>
              <h3>Professional Standards</h3>
              <ul>
                <li>Written contracts with clear terms and warranties</li>
                <li>Proper permits and adherence to local codes</li>
                <li>Liability insurance and worker&apos;s compensation</li>
                <li>Detailed project timelines and communication</li>
                <li>Clean job sites and professional crews</li>
                <li>Prompt response to any concerns</li>
              </ul>

              <h3>Financial Transparency</h3>
              <ul>
                <li>Detailed written estimates before work begins</li>
                <li>No hidden fees or surprise charges</li>
                <li>Clear payment schedules tied to milestones</li>
                <li>Proper invoicing and documentation</li>
                <li>Lien waivers upon payment</li>
              </ul>
            </div>

            <h2>The Permian Basin BBB Difference</h2>

            <p>
              Our local BBB understands the unique challenges of West Texas business. They&apos;ve 
              developed specific standards for contractors dealing with:
            </p>

            <ul>
              <li>Extreme weather warranty requirements</li>
              <li>Oil field property access and safety</li>
              <li>Water conservation documentation</li>
              <li>Commercial property protection</li>
              <li>Workforce housing specifications</li>
            </ul>

            <h2>Questions to Ask Every Contractor</h2>

            <div className={styles.questionList}>
              <h3>Before signing anything, get answers to:</h3>
              <ol>
                <li>&ldquo;What&apos;s your BBB accreditation number?&rdquo;</li>
                <li>&ldquo;How long have you been continuously accredited?&rdquo;</li>
                <li>&ldquo;Can you provide your insurance certificates?&rdquo;</li>
                <li>&ldquo;What&apos;s your process for warranty claims?&rdquo;</li>
                <li>&ldquo;Who handles disputes if issues arise?&rdquo;</li>
                <li>&ldquo;Can you provide references from similar projects?&rdquo;</li>
                <li>&ldquo;What happens if you can&apos;t complete the project?&rdquo;</li>
              </ol>
            </div>

            <h2>Success Story: Protected by BBB Accreditation</h2>

            <blockquote className={styles.successStory}>
              <p>
                &ldquo;When our turf installer faced supply chain issues mid-project, I panicked. But 
                because they were BBB accredited, they immediately communicated the delay, provided 
                options, and even reduced the price due to the inconvenience. A non-accredited 
                contractor might have just disappeared with our deposit.&rdquo;
              </p>
              <cite>- Janet Williams, Odessa Property Owner</cite>
            </blockquote>

            <h2>The Investment Protection Formula</h2>

            <div className={styles.protectionFormula}>
              <h3>For a $150,000 turf installation:</h3>
              <table>
                <tbody>
                  <tr>
                    <td>BBB Accredited Contractor Premium</td>
                    <td>+5-10% ($7,500-15,000)</td>
                  </tr>
                  <tr>
                    <td>Risk of Total Loss (Non-Accredited)</td>
                    <td>15% probability</td>
                  </tr>
                  <tr>
                    <td>Expected Loss Value</td>
                    <td>$22,500</td>
                  </tr>
                  <tr className={styles.highlight}>
                    <td>Net Benefit of BBB Contractor</td>
                    <td>$7,500-15,000 savings</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.note}>
                *Based on Permian Basin BBB complaint data 2020-2023
              </p>
            </div>

            <h2>Make the Smart Choice</h2>

            <p>
              Your artificial turf installation is a major investment that should last 15-20 years. 
              Don&apos;t risk it on contractors who might not be here next year. BBB accreditation 
              isn&apos;t just a badge - it&apos;s your protection against the costly mistakes that 
              plague our industry.
            </p>

            <div className={styles.cta}>
              <h3>Ready to Work with a BBB Accredited Contractor?</h3>
              <p>
                Permian Turf Solutions has maintained continuous BBB accreditation since 2018 
                with an A+ rating. Get your project quote from contractors you can trust.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Protected Quote
                </Link>
                <a 
                  href="https://www.bbb.org/us/tx/midland/profile/turf/permian-turf-solutions-0875-90024521" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  Verify Our BBB Status
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