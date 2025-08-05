import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Affordable Artificial Grass Odessa TX | Price Comparison Guide 2024',
  description: 'Find truly affordable artificial grass in Odessa TX. Compare real prices, avoid hidden costs, and get quality turf within your budget. Free quotes, honest pricing.',
  keywords: 'affordable artificial grass Odessa TX, cheap turf installation Odessa, budget artificial grass Midland Odessa, artificial turf cost comparison',
  openGraph: {
    title: 'Affordable Artificial Grass Options in Odessa, TX',
    description: 'Complete price guide and comparison for budget-conscious buyers.',
    type: 'website',
  },
};

export default function BlogPostPage() {
  return <BlogClient />;
}