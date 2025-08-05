'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronLeft, Share2, Facebook, Twitter } from 'lucide-react';
import styles from './BlogPost.module.css';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  content: React.ReactNode;
}

export default function BlogPost({
  title,
  date,
  author,
  readTime,
  category,
  image,
  content
}: BlogPostProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const handleShare = (platform: string) => {
    const text = `${title} - Permian Turf Solutions`;
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };
    
    if (platform in urls) {
      window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    }
  };

  return (
    <article className={styles.article}>
      <div className={styles.header}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            <ChevronLeft size={20} />
            Back to Blog
          </Link>
          
          <motion.div
            className={styles.headerContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className={styles.category}>{category}</span>
            <h1>{title}</h1>
            
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <User size={16} />
                <span>{author}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={16} />
                <time>{new Date(date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className={styles.metaItem}>
                <Clock size={16} />
                <span>{readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.featuredImage}>
        <Image 
          src={image} 
          alt={title}
          width={1200}
          height={600}
          priority
        />
      </div>

      <div className="container">
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {content}
          </motion.div>

          <aside className={styles.sidebar}>
            <motion.div
              className={styles.shareWidget}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3>Share This Article</h3>
              <div className={styles.shareButtons}>
                <button 
                  className={styles.shareButton}
                  onClick={() => handleShare('facebook')}
                  aria-label="Share on Facebook"
                >
                  <Facebook size={20} />
                </button>
                <button 
                  className={styles.shareButton}
                  onClick={() => handleShare('twitter')}
                  aria-label="Share on Twitter"
                >
                  <Twitter size={20} />
                </button>
                <button 
                  className={styles.shareButton}
                  onClick={() => handleShare('linkedin')}
                  aria-label="Share on LinkedIn"
                >
                  <Share2 size={20} />
                </button>
              </div>
            </motion.div>

            <motion.div
              className={styles.ctaWidget}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3>Ready to Save Water?</h3>
              <p>
                Get your free quote and see how much you can save with 
                artificial turf.
              </p>
              <Link href="/quote" className="btn btn-primary">
                Get Free Quote
              </Link>
            </motion.div>

            <motion.div
              className={styles.relatedWidget}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link href="/water-savings">Water Savings Calculator</Link>
                </li>
                <li>
                  <Link href="/commercial">Commercial Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">View Our Work</Link>
                </li>
                <li>
                  <Link href="/location/artificial-turf-midland-tx">Midland Services</Link>
                </li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </div>

      <div className={styles.footer}>
        <div className="container">
          <div className={styles.authorBox}>
            <div className={styles.authorInfo}>
              <h4>About {author}</h4>
              <p>
                Expert contributor at Permian Turf Solutions, specializing in 
                water conservation and sustainable landscaping solutions for the 
                Permian Basin.
              </p>
            </div>
          </div>

          <div className={styles.navigation}>
            <Link href="/blog" className={styles.navButton}>
              <ChevronLeft size={20} />
              Back to Blog
            </Link>
            <Link href="/quote" className={styles.navButton}>
              Get Your Quote
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}