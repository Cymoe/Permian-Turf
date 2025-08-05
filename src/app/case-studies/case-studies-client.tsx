'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { TrendingDown, Users, DollarSign, ChevronRight } from 'lucide-react';
import styles from './case-studies.module.css';

const caseStudies = [
  {
    id: 1,
    slug: 'midessa-rv-park-transformation',
    title: 'Midessa RV Park: From Mud to Money',
    client: 'Midessa RV Park',
    location: 'Odessa, TX',
    projectSize: '15,000 sq ft',
    category: 'RV Park',
    image: '/api/placeholder/800/600',
    excerpt: 'How one RV park eliminated $8,000 in monthly water costs and achieved 100% occupancy with artificial turf installation.',
    stats: {
      waterSavings: '$8,000/month',
      occupancyIncrease: '25%',
      paybackPeriod: '5.6 months',
      annualROI: '$96,000'
    }
  },
  {
    id: 2,
    slug: 'eagle-ford-man-camp-success',
    title: 'Eagle Ford Lodge: Zero Maintenance for 400 Workers',
    client: 'Eagle Ford Lodge',
    location: 'Big Spring, TX',
    projectSize: '35,000 sq ft',
    category: 'Workforce Housing',
    image: '/api/placeholder/800/600',
    excerpt: 'Discover how this 400-bed facility eliminated maintenance headaches and improved worker retention with commercial-grade turf.',
    stats: {
      maintenanceSavings: '$6,500/month',
      workerComplaints: '-100%',
      retentionImprovement: '27%',
      annualROI: '$78,000'
    }
  },
  {
    id: 3,
    slug: 'permian-plaza-apartments-renovation',
    title: 'Permian Plaza: Multi-Family Property Transformation',
    client: 'Permian Plaza Apartments',
    location: 'Midland, TX',
    projectSize: '22,000 sq ft',
    category: 'Multi-Family',
    image: '/api/placeholder/800/600',
    excerpt: 'See how this apartment complex reduced costs by 75% and increased occupancy rates with strategic turf installation.',
    stats: {
      costReduction: '75%',
      occupancyIncrease: '15%',
      monthlyRevenue: '+$12,000',
      residentSatisfaction: '94%'
    }
  }
];

export default function CaseStudies() {
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
            <h1>Success Stories</h1>
            <p>
              Real results from real Permian Basin properties. See how artificial turf 
              is transforming businesses and saving thousands every month.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.caseStudies}>
        <div className="container">
          <div className={styles.studiesGrid}>
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                className={styles.studyCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/case-studies/${study.slug}`} className={styles.imageWrapper}>
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={800}
                    height={600}
                  />
                  <span className={styles.category}>{study.category}</span>
                </Link>
                
                <div className={styles.content}>
                  <h2>
                    <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </h2>
                  
                  <div className={styles.clientInfo}>
                    <span className={styles.client}>{study.client}</span>
                    <span className={styles.divider}>•</span>
                    <span className={styles.location}>{study.location}</span>
                    <span className={styles.divider}>•</span>
                    <span className={styles.size}>{study.projectSize}</span>
                  </div>
                  
                  <p className={styles.excerpt}>{study.excerpt}</p>
                  
                  <div className={styles.statsGrid}>
                    <div className={styles.stat}>
                      <TrendingDown className={styles.icon} />
                      <div>
                        <strong>{study.stats.waterSavings || study.stats.maintenanceSavings || study.stats.costReduction}</strong>
                        <span>Savings</span>
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <Users className={styles.icon} />
                      <div>
                        <strong>{study.stats.occupancyIncrease || study.stats.retentionImprovement || study.stats.residentSatisfaction}</strong>
                        <span>Improvement</span>
                      </div>
                    </div>
                    <div className={styles.stat}>
                      <DollarSign className={styles.icon} />
                      <div>
                        <strong>{study.stats.annualROI || study.stats.monthlyRevenue}</strong>
                        <span>ROI</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/case-studies/${study.slug}`} className={styles.readMore}>
                    Read Full Case Study
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Be Our Next Success Story?</h2>
            <p>
              Join these satisfied customers and start saving water and money today. 
              Get your free consultation and ROI analysis.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/quote" className="btn btn-primary">
                Get Your Free Quote
              </Link>
              <Link href="/water-savings" className="btn btn-outline">
                Calculate Your Savings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}