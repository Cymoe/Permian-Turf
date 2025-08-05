import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Man Camp Landscaping: Zero Maintenance Solutions for Oil Field Housing',
  description: 'Discover why artificial turf is the perfect zero-maintenance landscaping solution for man camps and workforce housing in West Texas oil fields.',
  keywords: 'man camp landscaping West Texas, zero maintenance turf oil field, workforce housing artificial grass, man camp turf installation',
};

export default function BlogPostPage() {
  return <BlogClient />;
}