'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Dog, 
  Shield, 
  Droplet, 
  Wind,
  Heart,
  CheckCircle,
  AlertTriangle,
  Calculator,
  Star,
  Clock,
  Phone
} from 'lucide-react';
import styles from './pet-turf.module.css';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Urine Burn Spots',
    description: 'Dead yellow patches ruining your lawn\'s appearance',
  },
  {
    icon: Droplet,
    title: 'Mud & Tracking',
    description: 'Muddy paws means constant floor cleaning inside',
  },
  {
    icon: Wind,
    title: 'Persistent Odors',
    description: 'Ammonia smell that gets worse in summer heat',
  },
  {
    icon: AlertTriangle,
    title: 'Digging Damage',
    description: 'Holes and bare spots from enthusiastic digging',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Antimicrobial Protection',
    description: 'AlphaSan® technology prevents bacteria growth and eliminates 99% of pet odors',
  },
  {
    icon: Droplet,
    title: 'Superior Drainage',
    description: '3,000+ inches/hour drainage rate - 10x better than standard turf',
  },
  {
    icon: Heart,
    title: '100% Non-Toxic',
    description: 'No pesticides, fertilizers, or chemicals - completely safe for pets and kids',
  },
  {
    icon: Dog,
    title: 'Dig-Proof Design',
    description: 'Heavy-duty backing prevents damage from digging and rough play',
  },
];

const productTiers = [
  {
    name: 'PetSafe Standard',
    price: '$8-10',
    features: [
      'Basic drainage system',
      'Pet-safe materials',
      'UV protection',
      '8-year warranty',
      'Good for 1-2 small dogs',
    ],
    popular: false,
  },
  {
    name: 'K9 Premium',
    price: '$12-14',
    features: [
      'Enhanced drainage (2000+ in/hr)',
      'Antimicrobial infill included',
      'Cooler surface technology',
      '12-year warranty',
      'Perfect for 2-3 dogs',
    ],
    popular: true,
  },
  {
    name: 'K9 Elite Plus',
    price: '$15-18',
    features: [
      'Maximum drainage (3000+ in/hr)',
      'AlphaSan® antimicrobial blades',
      'No-infill design',
      '15-year warranty',
      'Ideal for 3+ dogs or large breeds',
    ],
    popular: false,
  },
];

const addOns = [
  { name: 'Drainage Grid System', price: '$2.50/sq ft', description: 'Elevates turf for maximum drainage' },
  { name: 'Enzyme Base Layer', price: '$1.75/sq ft', description: 'Neutralizes odors at the source' },
  { name: 'Monthly Maintenance', price: '$89/month', description: 'Enzyme treatments & deep cleaning' },
  { name: 'Dog Run Design', price: '$500-2000', description: 'Custom agility areas & zones' },
];

const testimonials = [
  {
    text: "No more yellow spots! Our backyard looks perfect year-round and doesn't smell anymore.",
    author: 'Sarah M.',
    location: 'Midland, TX',
    dogs: '2 Labs',
  },
  {
    text: "Worth every penny. Our 3 dogs can play all day and the turf still looks brand new after 2 years.",
    author: 'Mike R.',
    location: 'Odessa, TX',
    dogs: '3 German Shepherds',
  },
  {
    text: "The drainage is incredible. Even after heavy rain, no puddles or mud. Our white poodle stays clean!",
    author: 'Jennifer K.',
    location: 'Big Spring, TX',
    dogs: '1 Standard Poodle',
  },
];

export default function PetTurfPageClient() {
  const [sqft, setSqft] = useState(1000);
  const [dogs, setDogs] = useState(2);
  const [productTier, setProductTier] = useState('premium');
  
  const calculatePrice = () => {
    const basePrice = productTier === 'standard' ? 9 : productTier === 'premium' ? 13 : 16.5;
    const total = sqft * basePrice;
    const drainage = sqft * 2.5;
    const monthly = 89;
    
    return {
      installation: total,
      drainage: drainage,
      total: total + drainage,
      monthly: monthly,
      annual: monthly * 12,
    };
  };
  
  const pricing = calculatePrice();

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
              <Dog size={20} />
              <span>Specialized Pet Turf Solutions</span>
            </div>
            <h1>The Only Turf Designed Specifically for Dogs</h1>
            <p className={styles.subtitle}>
              Eliminate odors, prevent urine damage, and give your pets a clean, 
              safe space to play year-round. Antimicrobial protection built into every blade.
            </p>
            <div className={styles.heroActions}>
              <a href="/quote" className={styles.heroPrimaryBtn}>Get Free Pet Turf Quote</a>
              <a href="tel:432-555-0100" className={styles.heroOutlineBtn}>
                <Phone size={18} />
                Call (432) 555-0100
              </a>
            </div>
            <div className={styles.trustIndicators}>
              <span><CheckCircle size={16} /> Cesar Millan Approved Technology</span>
              <span><CheckCircle size={16} /> 99% Odor Reduction</span>
              <span><CheckCircle size={16} /> 15-Year Warranty</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className={styles.problems}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Is Your Yard a Muddy, Smelly Mess?</h2>
            <p>Natural grass and dogs don't mix in West Texas heat</p>
          </motion.div>
          
          <div className={styles.problemsGrid}>
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                className={styles.problemCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <problem.icon className={styles.problemIcon} size={32} />
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Pet Turf Technology That Actually Works</h2>
            <p>Engineered specifically for pet owners' needs</p>
          </motion.div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={styles.benefitCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.benefitIcon}>
                  <benefit.icon size={40} />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className={styles.products}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Choose Your Pet Turf Grade</h2>
            <p>Different solutions for different needs and budgets</p>
          </motion.div>
          
          <div className={styles.productGrid}>
            {productTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`${styles.productCard} ${tier.popular ? styles.popular : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {tier.popular && <div className={styles.popularBadge}>Most Popular</div>}
                <h3>{tier.name}</h3>
                <div className={styles.price}>
                  <span className={styles.priceAmount}>{tier.price}</span>
                  <span className={styles.priceUnit}>/sq ft</span>
                </div>
                <ul className={styles.features}>
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={styles.selectBtn}
                  onClick={() => setProductTier(tier.name.toLowerCase().includes('standard') ? 'standard' : 
                                              tier.name.toLowerCase().includes('elite') ? 'elite' : 'premium')}
                >
                  {productTier === (tier.name.toLowerCase().includes('standard') ? 'standard' : 
                                   tier.name.toLowerCase().includes('elite') ? 'elite' : 'premium') 
                    ? 'Selected' : 'Select This'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className={styles.calculator}>
        <div className="container">
          <motion.div
            className={styles.calculatorCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              <Calculator size={28} />
              Calculate Your Pet Turf Investment
            </h2>
            
            <div className={styles.calculatorInputs}>
              <div className={styles.inputGroup}>
                <label>Yard Size (sq ft)</label>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  value={sqft}
                  onChange={(e) => setSqft(parseInt(e.target.value))}
                  className={styles.slider}
                />
                <div className={styles.sliderValue}>{sqft.toLocaleString()} sq ft</div>
              </div>
              
              <div className={styles.inputGroup}>
                <label>Number of Dogs</label>
                <div className={styles.dogSelector}>
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      className={`${styles.dogBtn} ${dogs === num ? styles.active : ''}`}
                      onClick={() => setDogs(num)}
                    >
                      {num}{num === 4 && '+'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.priceBreakdown}>
              <div className={styles.priceRow}>
                <span>Turf Installation:</span>
                <span>${pricing.installation.toLocaleString()}</span>
              </div>
              <div className={styles.priceRow}>
                <span>Drainage System (Recommended):</span>
                <span>${pricing.drainage.toLocaleString()}</span>
              </div>
              <div className={styles.priceTotal}>
                <span>Total Investment:</span>
                <span>${pricing.total.toLocaleString()}</span>
              </div>
              <div className={styles.financing}>
                <span>Or finance for as low as ${Math.round(pricing.total / 60)}/month</span>
              </div>
            </div>
            
            <div className={styles.calculatorActions}>
              <a href="/quote" className={styles.getQuoteBtn}>Get Exact Quote</a>
              <p className={styles.savings}>
                <CheckCircle size={16} />
                Bundle with pet waste removal and save 10%
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className={styles.addOns}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Enhance Your Pet Turf System</h2>
            <p>Professional add-ons for maximum performance</p>
          </motion.div>
          
          <div className={styles.addOnsGrid}>
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                className={styles.addOnCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4>{addon.name}</h4>
                <p>{addon.description}</p>
                <div className={styles.addOnPrice}>{addon.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className={styles.gallery}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Pet Paradise Transformations</h2>
            <p>Real West Texas yards transformed into pet-friendly oases</p>
          </motion.div>
          
          <div className={styles.galleryGrid}>
            <motion.div
              className={styles.galleryItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image src="/hero_1.png" alt="Dog run transformation" width={400} height={300} />
              <div className={styles.galleryCaption}>Custom dog run with agility area - Midland</div>
            </motion.div>
            <motion.div
              className={styles.galleryItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Image src="/hero_2.png" alt="Backyard pet turf" width={400} height={300} />
              <div className={styles.galleryCaption}>Full backyard installation - Odessa</div>
            </motion.div>
            <motion.div
              className={styles.galleryItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image src="/hero_3.png" alt="Side yard dog area" width={400} height={300} />
              <div className={styles.galleryCaption}>Side yard potty area - Big Spring</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Happy Dogs, Happy Owners</h2>
          </motion.div>
          
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className={styles.testimonialCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.location} • {testimonial.dogs}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className={styles.maintenance}>
        <div className="container">
          <div className={styles.maintenanceGrid}>
            <motion.div
              className={styles.maintenanceContent}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Keep Your Pet Turf Fresh & Clean</h2>
              <p>
                While pet turf eliminates most maintenance, proper care ensures 
                it stays odor-free and looking great for 15+ years.
              </p>
              <div className={styles.maintenanceFeatures}>
                <div className={styles.maintenanceFeature}>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Monthly enzyme treatments</strong>
                    <p>Break down urine crystals and prevent odor buildup</p>
                  </div>
                </div>
                <div className={styles.maintenanceFeature}>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Quarterly deep cleaning</strong>
                    <p>Professional sanitization and deodorization</p>
                  </div>
                </div>
                <div className={styles.maintenanceFeature}>
                  <CheckCircle size={20} />
                  <div>
                    <strong>Bundle with waste removal</strong>
                    <p>Save 10% when combined with our scooping service</p>
                  </div>
                </div>
              </div>
              <a href="/pet-waste-removal" className={styles.learnMoreBtn}>
                Learn About Maintenance Plans
              </a>
            </motion.div>
            <motion.div
              className={styles.maintenanceImage}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image src="/hero_1.png" alt="Pet turf maintenance" width={500} height={400} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Common Pet Turf Questions</h2>
          </motion.div>
          
          <div className={styles.faqGrid}>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>Will it smell like dog urine?</h3>
              <p>
                No! Our antimicrobial turf with proper drainage eliminates 99% of odors. 
                The AlphaSan® technology prevents bacteria growth that causes ammonia smell.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>Does it get too hot for paws?</h3>
              <p>
                Our pet turf includes heat-reduction technology that keeps surfaces 
                15-20° cooler than standard artificial grass. Safe for sensitive paws!
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>Can large dogs damage it?</h3>
              <p>
                Pet turf is specifically engineered for durability. The heavy-duty backing 
                and reinforced blades withstand digging, running, and rough play from dogs of all sizes.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>How do I clean solid waste?</h3>
              <p>
                Simply pick up solid waste as normal, then rinse with water. 
                The drainage system ensures everything flows through immediately.
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>What about fleas and ticks?</h3>
              <p>
                Artificial turf eliminates the environment fleas and ticks need to thrive. 
                No soil, no moisture retention = no pest problems!
              </p>
            </motion.div>
            <motion.div
              className={styles.faqItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>Is financing available?</h3>
              <p>
                Yes! We offer 0% financing for 12 months on installations over $3,000, 
                with longer terms available. Most customers are approved instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Give Your Dogs the Yard They Deserve</h2>
            <p>
              Join hundreds of pet owners who've eliminated muddy paws, 
              yellow spots, and odors forever.
            </p>
            <div className={styles.ctaFeatures}>
              <span><CheckCircle size={16} /> 99% Odor Elimination</span>
              <span><CheckCircle size={16} /> 15-Year Warranty</span>
              <span><CheckCircle size={16} /> 0% Financing Available</span>
            </div>
            <div className={styles.ctaActions}>
              <a href="/quote" className={styles.ctaPrimaryBtn}>Get Free Pet Turf Quote</a>
              <a href="tel:432-555-0100" className={styles.ctaOutlineBtn}>Call (432) 555-0100</a>
            </div>
            <p className={styles.ctaUrgency}>
              <Clock size={16} />
              Summer special: Free drainage upgrade ($2,500 value) - Ends soon!
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}