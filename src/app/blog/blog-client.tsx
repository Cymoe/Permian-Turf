'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';
import styles from './blog.module.css';

// In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: 'artificial-turf-perfect-for-permian-basin-climate',
    title: 'Why Artificial Turf is Perfect for Permian Basin\'s Climate',
    excerpt: 'With extreme heat, ongoing drought, and water restrictions, the Permian Basin\'s climate creates unique landscaping challenges. Discover why artificial turf is the ideal solution for West Texas properties.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Water Conservation',
    image: '/api/placeholder/800/450',
    featured: true,
  },
  {
    id: 2,
    slug: 'top-5-rv-parks-midland-odessa-save-water',
    title: 'Top 5 RV Parks in Midland-Odessa That Save Water with Turf',
    excerpt: 'See how leading RV parks in the Permian Basin are cutting costs and attracting long-term residents with artificial turf installations. Real savings data included.',
    author: 'Mike Thompson',
    date: '2024-01-08',
    readTime: '7 min read',
    category: 'Case Studies',
    image: '/api/placeholder/800/450',
  },
  {
    id: 3,
    slug: 'oil-field-housing-smart-landscaping-solution',
    title: 'Oil Field Housing: The Smart Landscaping Solution',
    excerpt: 'Man camps and workforce housing face unique challenges. Learn how artificial turf eliminates maintenance headaches while creating professional environments that retain workers.',
    author: 'David Chen',
    date: '2024-01-01',
    readTime: '6 min read',
    category: 'Commercial',
    image: '/api/placeholder/800/450',
  },
  {
    id: 4,
    slug: 'calculating-water-savings-midland-drought-reality',
    title: 'Calculating Water Savings: Midland\'s Drought Reality',
    excerpt: 'Breaking down the real costs of maintaining natural grass in Midland\'s Stage 4 water restrictions. See exactly how much you can save with detailed calculations.',
    author: 'Jennifer Martinez',
    date: '2023-12-25',
    readTime: '8 min read',
    category: 'Water Conservation',
    image: '/api/placeholder/800/450',
  },
];

const categories = [
  { name: 'All Posts', count: 4 },
  { name: 'Water Conservation', count: 2 },
  { name: 'Commercial', count: 1 },
  { name: 'Case Studies', count: 1 },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            <h1>Turf Resources & Insights</h1>
            <p>
              Expert guides, water-saving tips, and industry insights to help you make 
              informed decisions about artificial turf in the Permian Basin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.blog}>
        <div className="container">
          <div className={styles.blogLayout}>
            <div className={styles.mainContent}>
              {/* Featured Post */}
              {filteredPosts.filter(post => post.featured).map(post => (
                <motion.article
                  key={post.id}
                  className={styles.featuredPost}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${post.slug}`} className={styles.featuredImage}>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={800}
                      height={450}
                    />
                    <span className={styles.featuredBadge}>Featured</span>
                  </Link>
                  <div className={styles.featuredContent}>
                    <div className={styles.postMeta}>
                      <Tag size={16} />
                      <span>{post.category}</span>
                      <span className={styles.divider}>•</span>
                      <Calendar size={16} />
                      <time>{new Date(post.date).toLocaleDateString()}</time>
                      <span className={styles.divider}>•</span>
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                    <h2>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Read Full Article
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </motion.article>
              ))}

              {/* Regular Posts */}
              <div className={styles.postGrid}>
                {filteredPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    className={styles.postCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`} className={styles.postImage}>
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        width={400}
                        height={225}
                      />
                    </Link>
                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <span className={styles.category}>{post.category}</span>
                        <time>{new Date(post.date).toLocaleDateString()}</time>
                      </div>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <div className={styles.postFooter}>
                        <span className={styles.author}>By {post.author}</span>
                        <span className={styles.readTime}>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <aside className={styles.sidebar}>
              <motion.div
                className={styles.sidebarWidget}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3>Categories</h3>
                <ul className={styles.categoryList}>
                  {categories.map(category => (
                    <li key={category.name}>
                      <button 
                        className={`${styles.categoryButton} ${selectedCategory === category.name ? styles.active : ''}`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                        <span className={styles.count}>{category.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className={styles.sidebarWidget}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3>Free Water Savings Guide</h3>
                <div className={styles.ctaCard}>
                  <p>
                    Download our comprehensive guide to water conservation 
                    in the Permian Basin.
                  </p>
                  <Link href="/water-savings" className="btn btn-primary">
                    Calculate Savings
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className={styles.sidebarWidget}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>Quick Links</h3>
                <ul className={styles.quickLinks}>
                  <li>
                    <Link href="/commercial">
                      Commercial Services
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio">
                      Project Portfolio
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/quote">
                      Get Free Quote
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}