'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Leaf, Brain, Building2, TrendingUp, Shield, Droplets, ThermometerSun } from 'lucide-react';
import styles from './green-walls.module.css';

export default function GreenWallsClient() {
  return (
    <>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            src="/green_1.png"
            alt="Stunning artificial green wall installation"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroContent}
          >
            <h1>Artificial Green Walls: Bringing Life to West Texas</h1>
            <p className={styles.lead}>
              Transform stark walls into lush, maintenance-free vertical gardens. 
              Experience the proven mental health and productivity benefits of biophilic 
              design without using a single drop of water.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <Droplets />
                <strong>Zero Water</strong>
                <span>100% drought-proof</span>
              </div>
              <div className={styles.stat}>
                <Brain />
                <strong>15% Boost</strong>
                <span>In productivity</span>
              </div>
              <div className={styles.stat}>
                <TrendingUp />
                <strong>7% Increase</strong>
                <span>Property value</span>
              </div>
              <div className={styles.stat}>
                <Shield />
                <strong>15 Year</strong>
                <span>Warranty</span>
              </div>
            </div>
            <div className={styles.heroCTA}>
              <Link href="/quote" className="btn btn-primary">
                Get Green Wall Quote
              </Link>
              <Link href="#benefits" className="btn btn-outline">
                Learn the Science
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.biophilicIntro}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.biophilicContent}
          >
            <h2>Why West Texas Needs Biophilic Design</h2>
            <div className={styles.introGrid}>
              <div className={styles.problem}>
                <h3>The Challenge</h3>
                <p>
                  Living in the Permian Basin means adapting to one of the harshest 
                  climates in America. Our landscape is beautiful but stark - endless 
                  horizons of brown earth and pump jacks under vast blue skies.
                </p>
                <p>
                  Research shows that humans have an innate need to connect with nature. 
                  In environments lacking greenery, we experience:
                </p>
                <ul>
                  <li>Increased stress and anxiety</li>
                  <li>Reduced creativity and focus</li>
                  <li>Lower job satisfaction</li>
                  <li>Decreased property appeal</li>
                </ul>
              </div>
              <div className={styles.solution}>
                <h3>The Solution</h3>
                <p>
                  Artificial green walls bring the psychological benefits of nature 
                  indoors and outdoors without the impossible water demands of living 
                  plants in our climate.
                </p>
                <p>
                  Inspired by cities like Singapore that mandate greenery on buildings, 
                  we&apos;re bringing this proven concept to West Texas with a practical 
                  twist - no water needed, ever.
                </p>
                <div className={styles.singaporeNote}>
                  <strong>Did you know?</strong> Singapore requires all new buildings 
                  to replace the greenery lost during construction. The result? Happier, 
                  healthier, more productive citizens.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="benefits" className={styles.benefits}>
        <div className="container">
          <h2>The Science-Backed Benefits</h2>
          <p className={styles.subtitle}>
            Biophilic design isn&apos;t just trendy - it&apos;s proven by decades of research
          </p>
          
          <div className={styles.benefitsGrid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.benefitCard}
            >
              <Brain size={48} />
              <h3>Mental Health & Wellbeing</h3>
              <ul>
                <li>23% reduction in stress hormones</li>
                <li>37% decrease in anxiety levels</li>
                <li>15% increase in creativity</li>
                <li>Improved mood and energy</li>
              </ul>
              <p className={styles.research}>
                Source: University of Exeter Medical School Study
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.benefitCard}
            >
              <Building2 size={48} />
              <h3>Business Performance</h3>
              <ul>
                <li>15% increase in productivity</li>
                <li>10% reduction in absenteeism</li>
                <li>Higher employee retention</li>
                <li>Improved customer dwell time</li>
              </ul>
              <p className={styles.research}>
                Source: Human Spaces Global Impact of Biophilic Design
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.benefitCard}
            >
              <TrendingUp size={48} />
              <h3>Property Value</h3>
              <ul>
                <li>7-15% increase in property value</li>
                <li>Faster lease-up rates</li>
                <li>Premium rent potential</li>
                <li>Enhanced curb appeal</li>
              </ul>
              <p className={styles.research}>
                Source: Journal of Property Investment & Finance
              </p>
            </motion.div>
          </div>

          <div className={styles.benefitCTA}>
            <p>
              In West Texas, where natural greenery struggles to survive, artificial 
              green walls provide all these benefits without the maintenance nightmare.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.applications}>
        <div className="container">
          <h2>Perfect For Every Space</h2>
          
          <div className={styles.applicationGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.applicationCard}
            >
              <h3>Commercial Offices</h3>
              <ul>
                <li>Reception areas & lobbies</li>
                <li>Conference rooms</li>
                <li>Break rooms & cafeterias</li>
                <li>Open office spaces</li>
                <li>Executive offices</li>
              </ul>
              <p className={styles.applicationBenefit}>
                <strong>Key Benefit:</strong> Boost employee productivity and retention
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.applicationCard}
            >
              <h3>Healthcare Facilities</h3>
              <ul>
                <li>Waiting rooms</li>
                <li>Patient rooms</li>
                <li>Therapy spaces</li>
                <li>Staff areas</li>
                <li>Healing gardens</li>
              </ul>
              <p className={styles.applicationBenefit}>
                <strong>Key Benefit:</strong> Accelerate patient recovery and reduce stress
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.applicationCard}
            >
              <h3>Hospitality & Retail</h3>
              <ul>
                <li>Hotel lobbies</li>
                <li>Restaurant dining areas</li>
                <li>Retail store walls</li>
                <li>Spa environments</li>
                <li>Event spaces</li>
              </ul>
              <p className={styles.applicationBenefit}>
                <strong>Key Benefit:</strong> Create Instagram-worthy spaces that draw customers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={styles.applicationCard}
            >
              <h3>Residential Homes</h3>
              <ul>
                <li>Living room feature walls</li>
                <li>Bedroom sanctuaries</li>
                <li>Home offices</li>
                <li>Covered patios</li>
                <li>Pool areas</li>
              </ul>
              <p className={styles.applicationBenefit}>
                <strong>Key Benefit:</strong> Create a calming oasis in the desert
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={styles.applicationCard}
            >
              <h3>Education Facilities</h3>
              <ul>
                <li>Classrooms</li>
                <li>Libraries</li>
                <li>Common areas</li>
                <li>Administrative offices</li>
                <li>Cafeterias</li>
              </ul>
              <p className={styles.applicationBenefit}>
                <strong>Key Benefit:</strong> Improve student focus and test scores
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={styles.applicationCard}
            >
              <h3>Oil Field Facilities</h3>
              <ul>
                <li>Man camp common areas</li>
                <li>Office trailers</li>
                <li>Safety meeting rooms</li>
                <li>Break areas</li>
                <li>Entrance features</li>
              </ul>
              <p className={styles.applicationBenefit}>
                <strong>Key Benefit:</strong> Improve worker morale in remote locations
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.productShowcase}>
        <div className="container">
          <h2>Green Wall Styles & Options</h2>
          <p className={styles.subtitle}>
            Choose from a variety of realistic plant styles to match your aesthetic
          </p>
          
          <div className={styles.showcaseGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.showcaseItem}
            >
              <Image
                src="/green_1.png"
                alt="Tropical style green wall"
                width={800}
                height={600}
              />
              <h3>Tropical Paradise</h3>
              <p>Lush tropical foliage with varied leaf sizes and vibrant greens</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.showcaseItem}
            >
              <Image
                src="/green_2.png"
                alt="Succulent style green wall"
                width={800}
                height={600}
              />
              <h3>Desert Chic</h3>
              <p>Drought-inspired succulents perfect for modern Southwest design</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.showcaseItem}
            >
              <Image
                src="/green_3.png"
                alt="Mixed foliage green wall"
                width={800}
                height={600}
              />
              <h3>Natural Mix</h3>
              <p>Varied textures and colors mimicking natural forest undergrowth</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.showcaseItem}
            >
              <Image
                src="/green_4.png"
                alt="Close-up of artificial green wall texture"
                width={800}
                height={600}
              />
              <h3>Ultra-Realistic Detail</h3>
              <p>Advanced materials with natural color variation and texture</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.whyArtificial}>
        <div className="container">
          <h2>Why Artificial Green Walls Make Sense in West Texas</h2>
          
          <div className={styles.comparisonGrid}>
            <div className={styles.naturalChallenges}>
              <h3>Living Green Walls in Our Climate</h3>
              <ul className={styles.challengesList}>
                <li>
                  <ThermometerSun className={styles.challengeIcon} />
                  <div>
                    <strong>Extreme Heat:</strong> 110°F+ summers kill most plants
                  </div>
                </li>
                <li>
                  <Droplets className={styles.challengeIcon} />
                  <div>
                    <strong>Water Scarcity:</strong> Stage 4 restrictions common
                  </div>
                </li>
                <li>
                  <Shield className={styles.challengeIcon} />
                  <div>
                    <strong>Maintenance:</strong> Constant care, pruning, replacement
                  </div>
                </li>
                <li>
                  <TrendingUp className={styles.challengeIcon} />
                  <div>
                    <strong>Cost:</strong> $200-500/month in water and maintenance
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.artificialAdvantages}>
              <h3>Our Artificial Green Wall Solution</h3>
              <ul className={styles.advantagesList}>
                <li>
                  <Leaf className={styles.advantageIcon} />
                  <div>
                    <strong>Always Perfect:</strong> Lush and green 365 days a year
                  </div>
                </li>
                <li>
                  <Droplets className={styles.advantageIcon} />
                  <div>
                    <strong>Zero Water:</strong> No irrigation system needed
                  </div>
                </li>
                <li>
                  <Shield className={styles.advantageIcon} />
                  <div>
                    <strong>No Maintenance:</strong> Just occasional dusting
                  </div>
                </li>
                <li>
                  <TrendingUp className={styles.advantageIcon} />
                  <div>
                    <strong>One-Time Cost:</strong> No ongoing expenses
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.realismNote}>
            <h3>Ultra-Realistic Design</h3>
            <p>
              Our premium artificial green walls use advanced manufacturing techniques 
              including:
            </p>
            <ul>
              <li>Multiple shades of green for natural variation</li>
              <li>Different leaf shapes and sizes</li>
              <li>Realistic textures and materials</li>
              <li>UV-resistant technology for outdoor use</li>
              <li>Fire-retardant materials for safety</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <h2>Simple Installation Process</h2>
          
          <div className={styles.processSteps}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>1</div>
              <h3>Design Consultation</h3>
              <p>
                We visit your space to understand your vision and take measurements. 
                Choose from dozens of styles, from tropical to succulent gardens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>2</div>
              <h3>Custom Design</h3>
              <p>
                Our team creates a custom layout mixing different plants and textures 
                for the most realistic, visually appealing result.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>3</div>
              <h3>Professional Installation</h3>
              <p>
                Our experienced team installs your green wall in just 1-2 days with 
                minimal disruption to your space.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={styles.step}
            >
              <div className={styles.stepNumber}>4</div>
              <h3>Enjoy Forever</h3>
              <p>
                Start experiencing the benefits immediately. No watering, no pruning, 
                no dead plants - just perpetual greenery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.roi}>
        <div className="container">
          <h2>The ROI of Biophilic Design</h2>
          
          <div className={styles.roiCalculator}>
            <h3>Example: 1,000 sq ft Office Space</h3>
            
            <div className={styles.roiGrid}>
              <div className={styles.investment}>
                <h4>One-Time Investment</h4>
                <ul>
                  <li>200 sq ft green wall: $8,000</li>
                  <li>Professional installation: Included</li>
                  <li>15-year warranty: Included</li>
                </ul>
                <div className={styles.total}>Total: $8,000</div>
              </div>

              <div className={styles.returns}>
                <h4>Annual Returns</h4>
                <ul>
                  <li>15% productivity gain (10 employees): $45,000</li>
                  <li>Reduced sick days (10% less): $8,000</li>
                  <li>Water savings vs. living wall: $3,600</li>
                  <li>Zero maintenance costs: $6,000</li>
                </ul>
                <div className={styles.total}>Annual Value: $62,600</div>
              </div>
            </div>

            <div className={styles.roiSummary}>
              <p>
                <strong>ROI Period: Less than 2 months</strong><br />
                15-Year Value: $939,000 in productivity and savings
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.cta}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className={styles.ctaContent}
          >
            <h2>Bring Your Space to Life</h2>
            <p>
              Join forward-thinking West Texas businesses and homeowners who are 
              creating healthier, more productive environments with artificial green walls.
            </p>
            
            <div className={styles.ctaBox}>
              <h3>Free Design Consultation Includes:</h3>
              <ul>
                <li>Space assessment and measurements</li>
                <li>Custom design mockup</li>
                <li>ROI calculation for your space</li>
                <li>Sample materials to see and feel</li>
              </ul>
              
              <div className={styles.ctaButtons}>
                <Link href="/quote" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <a href="tel:432-555-0100" className="btn btn-outline">
                  Call (432) 555-0100
                </a>
              </div>

              <p className={styles.ctaNote}>
                Most projects completed in 1-2 days
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}