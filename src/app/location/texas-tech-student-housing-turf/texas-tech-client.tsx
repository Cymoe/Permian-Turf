'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import { motion } from 'framer-motion';
import { Home, Users, Clock, CheckCircle, DollarSign, Zap, Award, TrendingUp, Phone } from 'lucide-react';
import styles from '../location.module.css';

export default function TexasTechClient() {
  const studentHousingList = [
    'The Republic at Lubbock',
    'The Bloc',
    'Capstone Cottages',
    'The Grove at Lubbock',
    'Raiders Pass',
    'University Trails',
    'The Centre at Overton Park',
    'THRIVE in Lubbock',
    'Wildwood Apartments',
    'University Pointe',
  ];

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
            <h1>Texas Tech Student Housing Artificial Turf Solutions</h1>
            <p className={styles.subtitle}>
              Specialized synthetic grass installation for Red Raider apartments and student housing. 
              Eliminate maintenance headaches, attract quality tenants, and save thousands on water bills.
            </p>
            <div className={styles.heroActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Student Housing Quote
              </Link>
              <a href="tel:432-555-0100" className="btn btn-outline">
                <Phone size={18} />
                Property Manager Hotline
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.localInfo}>
        <div className="container">
          <div className={styles.infoGrid}>
            <motion.div
              className={styles.serviceArea}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Texas Tech Housing Expertise</h2>
              <div className={styles.areaList}>
                <h3>Student Properties We Service</h3>
                <ul>
                  {studentHousingList.map((property) => (
                    <li key={property}><CheckCircle size={16} /> {property}</li>
                  ))}
                </ul>

                <h3>Specialized Areas</h3>
                <ul>
                  <li><CheckCircle size={16} /> Pool & amenity areas</li>
                  <li><CheckCircle size={16} /> Volleyball courts</li>
                  <li><CheckCircle size={16} /> Pet relief zones</li>
                  <li><CheckCircle size={16} /> Common courtyards</li>
                  <li><CheckCircle size={16} /> Rooftop lounges</li>
                </ul>
              </div>

              <div className={styles.localStats}>
                <div className={styles.stat}>
                  <Home className={styles.icon} />
                  <div>
                    <strong>25+ Properties</strong>
                    <span>Near Texas Tech campus</span>
                  </div>
                </div>
                <div className={styles.stat}>
                  <Users className={styles.icon} />
                  <div>
                    <strong>40,000+ Students</strong>
                    <span>Red Raiders need housing</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.whyLocal}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Why Student Housing Needs Artificial Turf</h2>
              
              <div className={styles.reasonCard}>
                <Zap className={styles.icon} />
                <h3>Zero Maintenance During Turnover</h3>
                <p>
                  August move-ins are chaotic enough without lawn care. Our turf handles 
                  heavy foot traffic, moving trucks, and parties without damage. No dead 
                  grass from summer vacancies or winter breaks.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <DollarSign className={styles.icon} />
                <h3>Increase NOI & Property Value</h3>
                <p>
                  Property managers report 15-20% higher retention rates and ability to charge 
                  $25-50 more per unit with premium amenities. Save $2,000-4,000 monthly on 
                  landscaping and water while increasing revenue.
                </p>
              </div>

              <div className={styles.reasonCard}>
                <Award className={styles.icon} />
                <h3>Win the Amenity Arms Race</h3>
                <p>
                  Stand out in Lubbock&apos;s competitive student housing market. While others 
                  deal with brown grass and mud, your property stays Instagram-perfect 
                  year-round. Parents love the professional appearance.
                </p>
              </div>

              <div className={styles.localTestimonial}>
                <blockquote>
                  &quot;We installed turf at our 200-unit complex near campus. Zero maintenance 
                  during summer when students are gone, and it looks amazing for fall tours. 
                  Best investment we&apos;ve made.&quot;
                </blockquote>
                <cite>- David Chen, Raiders Walk Property Manager</cite>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <h2>Texas Tech Housing Transformations</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Student apartment pool area"
                width={400}
                height={300}
              />
              <h3>The Venue Pool Deck</h3>
              <p>12,000 sq ft pool & lounge area</p>
              <span className={styles.savings}>Perfect for pool parties</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Apartment complex courtyard"
                width={400}
                height={300}
              />
              <h3>University Trails Courtyard</h3>
              <p>18,000 sq ft common areas</p>
              <span className={styles.savings}>Handles tailgate traffic</span>
            </div>
            <div className={styles.projectCard}>
              <Image 
                src="/api/placeholder/400/300" 
                alt="Pet relief area"
                width={400}
                height={300}
              />
              <h3>The Grove Pet Park</h3>
              <p>5,000 sq ft dedicated pet area</p>
              <span className={styles.savings}>No smell, easy cleaning</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.calculator}>
        <div className="container">
          <h2>Student Housing ROI Calculator</h2>
          <div className={styles.calculatorContent}>
            <div className={styles.waterRates}>
              <h3>Typical Student Housing Costs</h3>
              <table className={styles.rateTable}>
                <tbody>
                  <tr>
                    <td>Summer water (vacant units)</td>
                    <td>$1,500-2,500/month</td>
                  </tr>
                  <tr>
                    <td>Landscaping crew</td>
                    <td>$1,200-2,000/month</td>
                  </tr>
                  <tr>
                    <td>Sod replacement (move-out)</td>
                    <td>$3,000-5,000/year</td>
                  </tr>
                  <tr>
                    <td>Irrigation repairs</td>
                    <td>$500-1,000/month</td>
                  </tr>
                  <tr style={{backgroundColor: '#d4edda'}}>
                    <td><strong>Total Annual Cost</strong></td>
                    <td><strong>$42,000-66,000</strong></td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.rateNote}>
                *Based on 150-200 unit properties
              </p>
            </div>
            <div className={styles.savingsExample}>
              <h3>Real Texas Tech Property Example</h3>
              <div className={styles.example}>
                <h4>180-Unit Student Complex</h4>
                <ul>
                  <li>Amenity areas: 25,000 sq ft</li>
                  <li>Current costs: $4,500/month</li>
                  <li>Turf investment: $80,000</li>
                  <li>Annual savings: $54,000</li>
                  <li><strong>Increased rent potential: $7,200/month</strong></li>
                  <li><strong>Total ROI: 8 months</strong></li>
                </ul>
              </div>
              <Link href="/water-savings" className="btn btn-primary">
                Calculate Your Property&apos;s ROI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Student Housing Benefits</h2>
          <div className={styles.benefitGrid}>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <TrendingUp className={styles.icon} />
              <h3>Higher Occupancy Rates</h3>
              <p>
                Properties with premium amenities maintain 95%+ occupancy. 
                Parents and students choose properties that look well-maintained.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Clock className={styles.icon} />
              <h3>24/7 Party Ready</h3>
              <p>
                Handles game day tailgates, pool parties, and heavy traffic. 
                No mud, no dead spots, no maintenance between semesters.
              </p>
            </motion.div>
            <motion.div
              className={styles.benefitCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Award className={styles.icon} />
              <h3>Win Property Tours</h3>
              <p>
                First impressions matter. While competitors show brown grass 
                in August, your property looks perfect for parent tours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className="container">
          <div className={styles.quoteGrid}>
            <motion.div
              className={styles.quoteContent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Transform Your Texas Tech Property</h2>
              <p>
                Join leading student housing properties that have eliminated landscaping 
                headaches forever. Get your custom quote with student housing pricing 
                and flexible summer installation schedules.
              </p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Student housing specialist team</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Summer installation available</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Property management references</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle className={styles.icon} />
                  <span>Flexible payment terms</span>
                </div>
              </div>
              <div className={styles.urgency}>
                <strong>Limited Summer 2024 Installation Slots</strong>
                <p>Book now for installation during summer vacancy</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.formWrapper}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuoteForm source="texas-tech-student-housing" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}