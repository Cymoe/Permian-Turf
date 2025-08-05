import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Property Manager\'s Guide to Artificial Turf ROI in West Texas',
  description: 'Complete ROI analysis guide for property managers considering artificial turf in Midland-Odessa. Calculate savings, understand costs, and make data-driven decisions.',
  keywords: 'property manager turf ROI West Texas, artificial grass investment analysis, commercial turf cost savings Midland',
};

export default function BlogPostPage() {
  return <BlogClient />;
}