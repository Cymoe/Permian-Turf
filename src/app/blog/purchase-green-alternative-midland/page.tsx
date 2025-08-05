import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Purchase Green Alternative Midland TX | Local Artificial Turf Experts',
  description: 'Looking for a Purchase Green alternative in Midland? Get better prices, faster installation, and local expertise. Same quality turf, 30% less cost. Free quotes.',
  keywords: 'Purchase Green alternative Midland, Purchase Green competitors Midland TX, cheaper than Purchase Green, local turf installer vs Purchase Green',
  openGraph: {
    title: 'Better Alternative to Purchase Green in Midland, TX',
    description: 'Local expertise, better prices, faster installation. Compare and save.',
    type: 'website',
  },
};

export default function BlogPostPage() {
  return <BlogClient />;
}