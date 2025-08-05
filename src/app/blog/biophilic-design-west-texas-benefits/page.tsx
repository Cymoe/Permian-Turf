import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Why Biophilic Design is Essential for West Texas Living | Permian Turf',
  description: 'Discover how biophilic design can boost productivity by 15% and reduce stress by 23% in West Texas. Learn about water-free solutions for our desert climate.',
  keywords: 'biophilic design West Texas, artificial green walls benefits, productivity workplace design, stress reduction natural elements, water-free landscaping Midland',
  openGraph: {
    title: 'Why Biophilic Design is Essential for West Texas Living',
    description: 'Transform your space with the proven benefits of biophilic design - without using a drop of water.',
    type: 'article',
  },
};

export default function BlogPostPage() {
  return <BlogClient />;
}