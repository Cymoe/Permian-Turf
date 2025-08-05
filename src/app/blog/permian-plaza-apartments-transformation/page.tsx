import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'Before/After: Permian Plaza Apartments Artificial Turf Transformation',
  description: 'See the dramatic transformation of Permian Plaza Apartments in Midland with artificial turf. Complete case study with photos, costs, and resident feedback.',
  keywords: 'Permian Plaza apartments turf transformation, before after artificial grass Midland, apartment complex landscaping case study',
};

export default function BlogPostPage() {
  return <BlogClient />;
}