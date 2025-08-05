import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Turf Resources & Water Conservation Blog | Permian Basin Insights',
  description: 'Expert guides on artificial turf, water conservation tips, and landscaping insights for the Permian Basin. Learn how to save water and money in West Texas.',
  keywords: 'artificial turf blog, water conservation Permian Basin, drought landscaping tips, turf installation guides',
  openGraph: {
    title: 'Turf Resources & Insights - Permian Basin',
    description: 'Expert guides and tips for water-saving landscaping in West Texas.',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}