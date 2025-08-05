'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Home, Droplets, Star, TrendingUp } from 'lucide-react';
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
            <h1>Before/After: Permian Plaza Apartments&apos; Dramatic Turf Transformation</h1>
            
            <div className={styles.postMeta}>
              <span>
                <Calendar size={16} />
                February 5, 2024
              </span>
              <span>
                <User size={16} />
                By Permian Turf Solutions
              </span>
            </div>

            <Image
              src="/api/placeholder/800/400"
              alt="Permian Plaza Apartments with new artificial turf"
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
              When Permian Plaza Apartments faced their third failed lawn renovation in five years 
              and water bills exceeding $8,000 monthly, management knew something had to change. 
              This is the story of how 250 units transformed from a maintenance nightmare into 
              Midland&apos;s most sought-after complex - all thanks to artificial turf.
            </p>

            <h2>The Breaking Point: Summer 2023</h2>
            
            <p>
              July 2023 was brutal for Midland properties. With temperatures hitting 110°F for 
              15 consecutive days and Stage 3 water restrictions in effect, Permian Plaza&apos;s 
              carefully maintained lawns turned into 45,000 square feet of dead grass and dust.
            </p>

            <div className={styles.beforeStats}>
              <h3>The Situation Before Turf:</h3>
              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <Droplets className={styles.icon} />
                  <strong>$8,200/mo</strong>
                  <span>Water bills (drought rates)</span>
                </div>
                <div className={styles.stat}>
                  <Home className={styles.icon} />
                  <strong>68%</strong>
                  <span>Occupancy rate</span>
                </div>
                <div className={styles.stat}>
                  <Star className={styles.icon} />
                  <strong>2.8/5</strong>
                  <span>Google reviews</span>
                </div>
                <div className={styles.stat}>
                  <TrendingUp className={styles.icon} />
                  <strong>$6,500/mo</strong>
                  <span>Landscape maintenance</span>
                </div>
              </div>
            </div>

            <blockquote className={styles.testimonial}>
              &ldquo;We were spending a fortune trying to keep grass alive, and it still looked 
              terrible. Residents complained constantly about mud, dead spots, and the overall 
              appearance. Something had to change.&rdquo;
              <cite>- Sarah Martinez, Property Manager</cite>
            </blockquote>

            <h2>The Decision: Why Artificial Turf</h2>

            <p>
              After analyzing costs and interviewing other property managers, Permian Plaza&apos;s 
              ownership group approved a complete landscape transformation. The deciding factors:
            </p>

            <ul>
              <li>Guaranteed elimination of all water costs for landscaping</li>
              <li>No more emergency re-sodding after droughts</li>
              <li>Consistent curb appeal regardless of weather</li>
              <li>Projected ROI under 2 years</li>
              <li>Success stories from 5 similar properties in Midland</li>
            </ul>

            <h2>The Transformation Process</h2>

            <div className={styles.timeline}>
              <h3>Project Timeline: 45,000 sq ft in 12 Days</h3>
              
              <div className={styles.timelinePhase}>
                <h4>Phase 1: Front Entrance & Leasing Office (Days 1-3)</h4>
                <p>
                  Started with high-visibility areas to immediately improve first impressions. 
                  Even during installation, prospects commented on the improvement.
                </p>
              </div>

              <div className={styles.timelinePhase}>
                <h4>Phase 2: Pool & Recreation Areas (Days 4-6)</h4>
                <p>
                  Transformed the pool deck and playground zones. No more mud tracked into the 
                  pool or safety concerns about slippery grass.
                </p>
              </div>

              <div className={styles.timelinePhase}>
                <h4>Phase 3: Building Courtyards (Days 7-10)</h4>
                <p>
                  Systematically upgraded each building&apos;s courtyard without disrupting residents. 
                  Worked building by building to maintain access.
                </p>
              </div>

              <div className={styles.timelinePhase}>
                <h4>Phase 4: Pet Areas & Final Touch-ups (Days 11-12)</h4>
                <p>
                  Created dedicated pet relief zones with specialized turf and drainage. Added 
                  decorative borders and completed all detail work.
                </p>
              </div>
            </div>

            <h2>The Dramatic Results</h2>

            <div className={styles.afterStats}>
              <h3>Permian Plaza After Turf Installation:</h3>
              <div className={styles.statsGrid}>
                <div className={styles.stat}>
                  <Droplets className={styles.icon} />
                  <strong>$0/mo</strong>
                  <span>Landscape water bills</span>
                </div>
                <div className={styles.stat}>
                  <Home className={styles.icon} />
                  <strong>94%</strong>
                  <span>Occupancy rate</span>
                </div>
                <div className={styles.stat}>
                  <Star className={styles.icon} />
                  <strong>4.6/5</strong>
                  <span>Google reviews</span>
                </div>
                <div className={styles.stat}>
                  <TrendingUp className={styles.icon} />
                  <strong>$0/mo</strong>
                  <span>Landscape maintenance</span>
                </div>
              </div>
            </div>

            <h2>Visual Transformation Gallery</h2>

            <div className={styles.galleryGrid}>
              <div className={styles.beforeAfter}>
                <h4>Main Entrance</h4>
                <p><strong>Before:</strong> Brown, patchy grass with visible dirt paths</p>
                <p><strong>After:</strong> Lush, perfectly manicured green welcome area</p>
              </div>
              <div className={styles.beforeAfter}>
                <h4>Pool Area</h4>
                <p><strong>Before:</strong> Mud pit after every pool party</p>
                <p><strong>After:</strong> Clean, safe surface that drains instantly</p>
              </div>
              <div className={styles.beforeAfter}>
                <h4>Building Courtyards</h4>
                <p><strong>Before:</strong> Mix of dirt, weeds, and dying grass</p>
                <p><strong>After:</strong> Consistent green spaces residents actually use</p>
              </div>
              <div className={styles.beforeAfter}>
                <h4>Pet Areas</h4>
                <p><strong>Before:</strong> Destroyed by digging and waste</p>
                <p><strong>After:</strong> Durable, cleanable surfaces pets love</p>
              </div>
            </div>

            <h2>Financial Impact: Beyond Expectations</h2>

            <div className={styles.financialBreakdown}>
              <h3>Investment & Returns</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Total Installation Cost</td>
                    <td>$247,500</td>
                  </tr>
                  <tr>
                    <td>Previous Annual Landscape Cost</td>
                    <td>$176,400</td>
                  </tr>
                  <tr>
                    <td>Current Annual Landscape Cost</td>
                    <td>$0</td>
                  </tr>
                  <tr className={styles.highlight}>
                    <td>Payback Period</td>
                    <td>16.8 months</td>
                  </tr>
                  <tr>
                    <td>Increased Annual Revenue (26% occupancy boost)</td>
                    <td>$468,000</td>
                  </tr>
                  <tr className={styles.highlight}>
                    <td>Total First Year Impact</td>
                    <td>+$644,400</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Resident Feedback: The Real Success Story</h2>

            <div className={styles.testimonialGrid}>
              <blockquote>
                &ldquo;I almost moved out last summer because of the mud and dead grass. Now I&apos;m 
                recommending friends move in. The property looks like a resort!&rdquo;
                <cite>- Jennifer K., 2-year resident</cite>
              </blockquote>

              <blockquote>
                &ldquo;My dog loves the new turf, and I love not dealing with muddy paws. The pet 
                area actually drains and doesn&apos;t smell anymore.&rdquo;
                <cite>- Mark T., Building C</cite>
              </blockquote>

              <blockquote>
                &ldquo;The kids can actually play outside without getting filthy. It&apos;s like having 
                a park in our courtyard. Best upgrade they&apos;ve ever done.&rdquo;
                <cite>- Maria S., mother of two</cite>
              </blockquote>
            </div>

            <h2>Property Management Perspective</h2>

            <blockquote className={styles.managerQuote}>
              <p>
                &ldquo;The turf transformation exceeded every expectation. Not only did we eliminate 
                our second-largest operating expense, but occupancy shot up 26% in six months. 
                Residents stay longer, pay higher rents, and refer friends. The entire character 
                of the property changed.&rdquo;
              </p>
              <p>
                &ldquo;What really surprised me was the maintenance team&apos;s reaction. They went from 
                spending 30% of their time on landscape issues to zero. Now they can focus on 
                unit improvements and resident requests. Everyone wins.&rdquo;
              </p>
              <cite>- Sarah Martinez, Property Manager, Permian Plaza Apartments</cite>
            </blockquote>

            <h2>Lessons Learned</h2>

            <ol>
              <li>
                <strong>Start with high-impact areas:</strong> The immediate improvement in curb 
                appeal began attracting new residents even during installation.
              </li>
              <li>
                <strong>Communicate with residents:</strong> Regular updates and explaining the 
                benefits created excitement instead of complaints about construction.
              </li>
              <li>
                <strong>Plan for success:</strong> We had to hire additional leasing staff to 
                handle the surge in applications after completion.
              </li>
              <li>
                <strong>Quality matters:</strong> Investing in premium turf and professional 
                installation ensures long-term satisfaction.
              </li>
            </ol>

            <h2>One Year Later: Sustained Success</h2>

            <p>
              As of February 2024, Permian Plaza maintains 94% occupancy with a waiting list 
              for two-bedroom units. The turf still looks as perfect as installation day, 
              despite extreme weather including:
            </p>

            <ul>
              <li>Summer 2023: Record 45 days above 100°F</li>
              <li>October hailstorm with golf ball-sized hail</li>
              <li>January 2024: Ice storm and freezing temperatures</li>
              <li>Zero maintenance or repairs needed</li>
            </ul>

            <h2>Could Your Property Be Next?</h2>

            <p>
              Permian Plaza&apos;s transformation proves that artificial turf isn&apos;t just about 
              saving water - it&apos;s about completely reimagining what a property can be. From 
              struggling with 68% occupancy to maintaining a waiting list, the impact goes far 
              beyond landscaping.
            </p>

            <div className={styles.cta}>
              <h3>Ready to Transform Your Property?</h3>
              <p>
                See how artificial turf could impact your bottom line. Get a free property 
                assessment and ROI projection based on Permian Plaza&apos;s proven results.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Get Your Transformation Plan
                </Link>
                <Link href="/case-studies/permian-plaza-apartments-renovation" className="btn btn-outline">
                  Read Full Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
      
      <Footer />
    </>
  );
}