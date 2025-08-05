import type { Metadata } from 'next';
import BlogClient from './blog-client';

export const metadata: Metadata = {
  title: 'BBB Accredited: What It Means When Choosing Midland Contractors',
  description: 'Learn why BBB accreditation matters when selecting artificial turf contractors in Midland-Odessa. Protect your investment with verified, trusted professionals.',
  keywords: 'BBB accredited turf contractors Midland, Better Business Bureau landscaping Odessa, trusted artificial grass installers Texas',
};

export default function BlogPostPage() {
  return <BlogClient />;
}