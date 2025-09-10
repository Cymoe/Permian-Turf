'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PawPrint, 
  Shield, 
  Clock, 
  Sparkles, 
  CheckCircle,
  Home,
  Building2,
  Calendar,
  Truck,
  Heart,
  Phone
} from 'lucide-react';
import styles from './pet-waste-removal.module.css';

const benefits = [
  {
    icon: Clock,
    title: 'Save Your Time',
    description: 'Spend weekends enjoying your yard, not cleaning it. We handle the dirty work.',
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    description: 'Prevent disease spread and keep your family safe from harmful bacteria and parasites.',
  },
  {
    icon: Sparkles,
    title: 'Odor-Free Yard',
    description: 'Professional sanitization eliminates odors, keeping your outdoor space fresh.',
  },
  {
    icon: PawPrint,
    title: 'Pet-Friendly',
    description: 'Safe, eco-friendly disposal methods that protect your pets and the environment.',
  },
  {
    icon: Home,
    title: 'Protect Your Turf',
    description: 'Regular cleaning prevents staining and extends the life of your artificial turf.',
  },
  {
    icon: Heart,
    title: 'Reliable Service',
    description: 'Same-day service for turf customers. Never worry about missed cleanings.',
  },
];

const pricingPlans = [
  {
    name: 'Weekly Service',
    price: '$65',
    period: 'per month',
    description: 'Perfect for 1-2 dogs',
    features: [
      'Weekly waste removal',
      'Sanitization included',
      'Text reminders',
      'No contracts required',
      'Skip weeks as needed',
    ],
    popular: true,
  },
  {
    name: 'Bi-Weekly Service',
    price: '$45',
    period: 'per month',
    description: 'Great for smaller yards',
    features: [
      'Bi-weekly waste removal',
      'Basic sanitization',
      'Text reminders',
      'Flexible scheduling',
      'No setup fees',
    ],
  },
  {
    name: 'Commercial',
    price: 'Custom',
    period: 'quote',
    description: 'HOAs, apartments, parks',
    features: [
      'Daily/weekly service',
      'Multiple properties',
      'Waste stations maintained',
      'Monthly reporting',
      'Priority support',
    ],
  },
];

const serviceAreas = [
  'Midland',
  'Odessa',
  'Big Spring',
  'Andrews',
  'Stanton',
  'Garden City',
];

export default function PetWasteRemoval() {
  const [numberOfDogs, setNumberOfDogs] = useState(1);

  // Calculate pricing based on number of dogs
  const calculatePrice = (basePlan: string) => {
    if (basePlan === 'Weekly Service') {
      const basePrice = 65;
      const additionalDogPrice = 10;
      return basePrice + (numberOfDogs - 1) * additionalDogPrice;
    } else if (basePlan === 'Bi-Weekly Service') {
      const basePrice = 45;
      const additionalDogPrice = 8;
      return basePrice + (numberOfDogs - 1) * additionalDogPrice;
    }
    return 0;
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.badge}>
              <PawPrint size={20} />
              <span>New Service</span>
            </div>
            <h1>Professional Pet Waste Removal</h1>
            <p className={styles.subtitle}>
              Keep your yard clean, healthy, and odor-free with West Texas&apos;s premier 
              pet waste management service. Perfect for artificial turf maintenance.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <strong>$65/mo</strong>
                <span>Starting at</span>
              </div>
              <div className={styles.stat}>
                <strong>Weekly</strong>
                <span>Service</span>
              </div>
              <div className={styles.stat}>
                <strong>No</strong>
                <span>Contracts</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <Link href="/pet-waste-removal-quote" className={styles.heroPrimaryBtn}>
                Get Started Today
              </Link>
              <Link href="/pet-waste-removal-quote" className={styles.heroOutlineBtn}>
                <Calendar size={18} />
                Schedule First Pickup
              </Link>
            </div>
            <p className={styles.trust}>
              <CheckCircle size={16} />
              Bundle with turf installation for 10% off first 3 months
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Professional Pet Waste Removal?</h2>
            <p>Join hundreds of West Texas pet owners who&apos;ve reclaimed their weekends</p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  className={styles.benefitCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className={styles.benefitIcon} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Turf Bundle Section */}
      <section className={styles.bundleSection}>
        <div className="container">
          <motion.div
            className={styles.bundleContent}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.bundleText}>
              <h2>The Perfect Companion to Artificial Turf</h2>
              <p>
                Artificial turf stays beautiful longer with regular pet waste removal and sanitization. 
                Our specialized cleaning process eliminates odors and bacteria that can build up in synthetic grass.
              </p>
              <ul className={styles.bundleFeatures}>
                <li>
                  <CheckCircle size={20} />
                  Enzyme treatments break down urine crystals
                </li>
                <li>
                  <CheckCircle size={20} />
                  Prevents permanent staining and discoloration
                </li>
                <li>
                  <CheckCircle size={20} />
                  Extends turf warranty with proper maintenance
                </li>
                <li>
                  <CheckCircle size={20} />
                  10% bundle discount for turf customers
                </li>
              </ul>
              <Link href="/pet-turf" className="btn btn-secondary">
                Learn About Pet-Friendly Turf
              </Link>
            </div>
            <div className={styles.bundleImage}>
              <div className={styles.imagePlaceholder}>
                <PawPrint size={60} />
                <p>Happy Dog on Clean Turf</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Simple, Transparent Pricing</h2>
            <p>No hidden fees, no contracts, cancel anytime</p>
          </motion.div>

          {/* Dog number selector */}
          <div className={styles.dogSelector}>
            <label>How many dogs do you have?</label>
            <div className={styles.dogButtons}>
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={numberOfDogs === num ? styles.active : ''}
                  onClick={() => setNumberOfDogs(num)}
                >
                  {num} {num === 1 ? 'Dog' : 'Dogs'}
                </button>
              ))}
              <button
                className={numberOfDogs > 4 ? styles.active : ''}
                onClick={() => setNumberOfDogs(5)}
              >
                5+ Dogs
              </button>
            </div>
          </div>

          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className={styles.price}>
                  {plan.price === 'Custom' ? (
                    <span className={styles.priceAmount}>{plan.price}</span>
                  ) : (
                    <>
                      <span className={styles.priceAmount}>
                        ${calculatePrice(plan.name)}
                      </span>
                      <span className={styles.pricePeriod}>{plan.period}</span>
                    </>
                  )}
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                {plan.price === 'Custom' ? (
                  <Link href="/pet-waste-removal-quote" className={plan.popular ? 'btn btn-primary' : 'btn btn-outline'}>
                    Get Quote
                  </Link>
                ) : (
                  <Link href="/pet-waste-removal-quote" className={plan.popular ? 'btn btn-primary' : 'btn btn-outline'}>
                    Get Started
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How It Works</h2>
            <p>Getting started is easy - we&apos;ll have your yard clean in 3 simple steps</p>
          </motion.div>

          <div className={styles.stepsGrid}>
            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>1</div>
              <Calendar className={styles.stepIcon} />
              <h3>Schedule Service</h3>
              <p>Choose weekly or bi-weekly service. We&apos;ll text you the day before each visit.</p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.stepNumber}>2</div>
              <Truck className={styles.stepIcon} />
              <h3>We Clean & Sanitize</h3>
              <p>Our team removes all waste, sanitizes problem areas, and leaves a service card.</p>
            </motion.div>

            <motion.div
              className={styles.step}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.stepNumber}>3</div>
              <Heart className={styles.stepIcon} />
              <h3>Enjoy Your Yard</h3>
              <p>Relax in your clean, odor-free outdoor space. Monthly billing, no hassles.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.serviceAreas}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Serving the Permian Basin</h2>
            <p>Professional pet waste removal throughout West Texas</p>
            <div className={styles.areasGrid}>
              {serviceAreas.map((area) => (
                <div key={area} className={styles.areaCard}>
                  <Building2 size={20} />
                  {area}
                </div>
              ))}
            </div>
            <p className={styles.areaNote}>
              <Truck size={16} />
              Same-day service available for existing turf customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Reclaim Your Weekends?</h2>
            <p>
              Join hundreds of happy pet owners who never have to scoop again. 
              First-time customers get 50% off their first month!
            </p>
            <div className={styles.ctaActions}>
              <Link href="/pet-waste-removal-quote" className={styles.ctaPrimaryBtn}>
                Start Service Today
              </Link>
              <a href="tel:432-555-0100" className={styles.ctaOutlineBtn}>
                <Phone size={18} />
                Call (432) 555-0100
              </a>
            </div>
            <div className={styles.ctaFeatures}>
              <span><CheckCircle size={16} /> No contracts</span>
              <span><CheckCircle size={16} /> Cancel anytime</span>
              <span><CheckCircle size={16} /> 100% satisfaction guaranteed</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}