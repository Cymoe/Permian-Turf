import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Why Drought-Resistant Artificial Turf is Perfect for Permian Basin | Water-Free Landscaping',
  description: 'Discover why drought-resistant artificial turf is essential for Permian Basin properties. Water-free landscaping solutions for extreme drought conditions in Midland-Odessa.',
  keywords: 'drought-resistant turf Permian Basin, water-free landscaping Midland TX, artificial turf drought conditions, Permian Basin water restrictions turf',
};

export default function BlogPostPage() {
  return <BlogClient />;
}