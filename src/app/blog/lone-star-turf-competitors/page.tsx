import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Lone Star Turf Competitors Midland | Compare Local Installers',
  description: 'Comparing Lone Star Synthetic Turf with other Midland installers. See pricing, warranties, and service differences. Find the best artificial turf contractor for your project.',
  keywords: 'Lone Star turf competitors, Lone Star Synthetic Turf alternatives, artificial grass installers Midland comparison',
  openGraph: {
    title: 'Compare Lone Star Turf with Other Midland Installers',
    description: 'Honest comparison of artificial turf contractors in Midland-Odessa.',
    type: 'website',
  },
};

export default function BlogPostPage() {
  return <BlogClient />;
}