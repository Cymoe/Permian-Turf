'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Leaf } from 'lucide-react';
import styles from '../blog.module.css';

export default function BlogClient() {
  return (
    <>
      <Header />
      
      <article className={styles.blogPost}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.postHeader}
          >
            <div className={styles.postMeta}>
              <span className={styles.category}>Design & Wellness</span>
              <span className={styles.divider}>•</span>
              <Calendar size={16} />
              <time>March 11, 2024</time>
              <span className={styles.divider}>•</span>
              <Clock size={16} />
              <span>8 min read</span>
            </div>
            
            <h1>Why Biophilic Design is Essential for West Texas Living</h1>
            
            <p className={styles.excerpt}>
              In the vast, arid landscape of the Permian Basin, the human need for 
              connection with nature becomes even more critical. Discover how biophilic 
              design can transform your home or business into a healthier, more productive 
              environment - without using a drop of water.
            </p>

            <div className={styles.author}>
              <User size={20} />
              <span>By Dr. Sarah Johnson</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.postContent}
          >
            <Image 
              src="/api/placeholder/1200/600" 
              alt="Biophilic design in West Texas office"
              width={1200}
              height={600}
              className={styles.featuredImage}
            />

            <h2>The Hidden Cost of Living in a Natural Desert</h2>
            
            <p>
              West Texas is beautiful in its own stark way - endless horizons, dramatic 
              sunsets, and the raw beauty of the desert. But for those of us who call 
              the Permian Basin home, there&apos;s a hidden psychological cost to living 
              in such an arid environment.
            </p>

            <p>
              Humans evolved in lush, green environments. Our brains are hardwired to 
              feel calmer, more focused, and happier when surrounded by nature. This 
              isn&apos;t just new-age thinking - it&apos;s backed by decades of scientific 
              research. When we lack visual access to greenery, our stress hormones 
              increase, our creativity suffers, and our overall wellbeing declines.
            </p>

            <h2>What is Biophilic Design?</h2>

            <p>
              Biophilic design is the practice of incorporating natural elements into 
              our built environments. It&apos;s based on the concept of biophilia - our 
              innate biological connection to nature. In cities like Singapore, it&apos;s 
              mandatory for new buildings to include green elements. The results? 
              Happier citizens, increased property values, and better business outcomes.
            </p>

            <p>
              But here&apos;s the challenge: traditional biophilic design relies on living 
              plants, water features, and natural materials that simply don&apos;t work in 
              our climate. With Stage 4 water restrictions, 110°F summers, and minimal 
              rainfall, keeping plants alive isn&apos;t just difficult - it&apos;s often 
              impossible and irresponsible.
            </p>

            <div className={styles.imageBlock}>
              <Image
                src="/green_1.png"
                alt="Modern office with biophilic design elements"
                width={800}
                height={500}
              />
              <p className={styles.imageCaption}>
                Modern offices incorporating biophilic design report 15% higher productivity
              </p>
            </div>

            <h3>The Science Behind the Benefits</h3>

            <p>
              Research from leading institutions has documented remarkable benefits of 
              biophilic design:
            </p>

            <ul>
              <li>
                <strong>23% reduction in stress hormones</strong> - A University of 
                Exeter study found that workers in environments with natural elements 
                had significantly lower cortisol levels throughout the day.
              </li>
              <li>
                <strong>15% increase in productivity</strong> - The Human Spaces report 
                surveyed 7,600 workers across 16 countries and found consistent 
                productivity gains in biophilic offices.
              </li>
              <li>
                <strong>37% decrease in anxiety</strong> - Healthcare facilities with 
                biophilic elements reported dramatic improvements in patient outcomes 
                and reduced need for pain medication.
              </li>
              <li>
                <strong>10% reduction in employee absenteeism</strong> - Companies with 
                biophilic design elements see fewer sick days and higher retention rates.
              </li>
            </ul>

            <h2>The West Texas Solution: Water-Free Biophilic Design</h2>

            <p>
              This is where artificial green walls and other maintenance-free natural 
              elements become game-changers for our region. Modern artificial greenery 
              has evolved far beyond the plastic plants of the past. Today&apos;s premium 
              artificial green walls are:
            </p>

            <ul>
              <li>Visually indistinguishable from living plants</li>
              <li>UV-resistant for outdoor applications</li>
              <li>Fire-retardant for safety compliance</li>
              <li>Zero maintenance after installation</li>
              <li>Guaranteed to look perfect for 15+ years</li>
            </ul>

            <h3>Real-World Applications in the Permian Basin</h3>

            <p>
              We&apos;re already seeing forward-thinking businesses embrace this concept:
            </p>

            <div className={styles.highlight}>
              <h4>Midland Energy Corporation</h4>
              <p>
                After installing a 200-square-foot green wall in their main lobby, 
                they reported a 50% reduction in employee stress surveys and a 
                noticeable improvement in client meeting outcomes. &ldquo;Our clients spend 
                more time in our offices now. They say it feels more welcoming,&rdquo; 
                reports CEO Mark Harrison.
              </p>
            </div>

            <div className={styles.highlight}>
              <h4>Odessa Medical Center</h4>
              <p>
                The waiting room renovation included artificial green walls and saw 
                patient satisfaction scores increase by 32%. &ldquo;Patients are calmer, 
                and our staff loves the environment. It&apos;s transformed the entire 
                feel of the space,&rdquo; says Administrator Jennifer Chen.
              </p>
            </div>

            <h2>Beyond Aesthetics: The Business Case</h2>

            <p>
              For business owners, biophilic design isn&apos;t just about feeling good - 
              it&apos;s about the bottom line:
            </p>

            <ul>
              <li>
                <strong>Property values increase 7-15%</strong> for buildings with 
                biophilic elements
              </li>
              <li>
                <strong>Retail sales improve</strong> as customers spend 25% more time 
                in stores with natural elements
              </li>
              <li>
                <strong>Rental rates command premiums</strong> of $2-5 per square foot 
                in biophilic spaces
              </li>
              <li>
                <strong>Employee recruitment improves</strong> as millennials and Gen Z 
                prioritize wellness-focused workplaces
              </li>
            </ul>

            <h2>Implementing Biophilic Design in Your Space</h2>

            <p>
              Whether you&apos;re a homeowner wanting a calmer living environment or a 
              business owner looking to boost productivity, here are practical ways to 
              incorporate biophilic design in West Texas:
            </p>

            <h3>1. Start with a Feature Wall</h3>
            <p>
              An artificial green wall in a high-traffic area creates immediate impact. 
              Reception areas, conference rooms, or living rooms are ideal locations.
            </p>

            <h3>2. Mix Textures and Species</h3>
            <p>
              The most realistic installations combine different plant types, leaf 
              sizes, and shades of green to mimic nature&apos;s variety.
            </p>

            <h3>3. Consider Lighting</h3>
            <p>
              Proper lighting enhances the realistic appearance and can create different 
              moods throughout the day.
            </p>

            <h3>4. Think Beyond Walls</h3>
            <p>
              Ceiling installations, room dividers, and outdoor applications expand 
              the possibilities.
            </p>

            <h2>The Future of West Texas Design</h2>

            <div className={styles.imageBlock}>
              <Image
                src="/green_4.png"
                alt="Before and after transformation with artificial green walls"
                width={800}
                height={500}
              />
              <p className={styles.imageCaption}>
                Transform any space: From barren walls to thriving vertical gardens - no water required
              </p>
            </div>

            <p>
              As our region continues to grow and attract businesses and families, we 
              have an opportunity to lead in sustainable, water-conscious design that 
              doesn&apos;t sacrifice human wellbeing. Artificial biophilic elements allow 
              us to create spaces that nurture our innate need for nature while 
              respecting our desert environment.
            </p>

            <p>
              The cities that thrive in the 21st century will be those that understand 
              the crucial connection between environment and human performance. In West 
              Texas, that means embracing innovative solutions that work with, not 
              against, our unique climate.
            </p>

            <div className={styles.callToAction}>
              <h3>Ready to Transform Your Space?</h3>
              <p>
                Discover how artificial green walls can bring the proven benefits of 
                biophilic design to your home or business - without the water waste.
              </p>
              <Link href="/green-walls" className="btn btn-primary">
                Learn About Green Walls
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.postFooter}>
              <div className={styles.tags}>
                <Leaf size={16} />
                <span>Tagged:</span>
                <Link href="/blog?tag=biophilic-design">Biophilic Design</Link>
                <Link href="/blog?tag=green-walls">Green Walls</Link>
                <Link href="/blog?tag=wellness">Wellness</Link>
                <Link href="/blog?tag=productivity">Productivity</Link>
              </div>
              
              <div className={styles.share}>
                <span>Share this article:</span>
                <button aria-label="Share on Facebook">Facebook</button>
                <button aria-label="Share on LinkedIn">LinkedIn</button>
                <button aria-label="Copy link">Copy Link</button>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <section className={styles.relatedPosts}>
        <div className="container">
          <h2>Related Articles</h2>
          <div className={styles.relatedGrid}>
            <Link href="/blog/calculating-water-savings-midland-drought-reality" className={styles.relatedPost}>
              <h3>Calculating Water Savings: Midland&apos;s Drought Reality</h3>
              <p>Breaking down the real costs of maintaining natural grass...</p>
            </Link>
            <Link href="/blog/property-managers-guide-turf-roi" className={styles.relatedPost}>
              <h3>Property Manager&apos;s Guide to Turf ROI</h3>
              <p>Complete ROI analysis guide for property managers...</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}