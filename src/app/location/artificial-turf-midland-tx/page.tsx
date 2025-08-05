import type { Metadata } from 'next';
import MidlandClient from './midland-client';

export const metadata: Metadata = {
  title: 'Artificial Turf Installation Midland TX | Water-Saving Landscaping',
  description: 'Professional artificial turf installation in Midland, TX. Save 70% on water bills with drought-resistant synthetic grass. Commercial & residential. Free quotes.',
  keywords: 'artificial turf installation Midland TX, synthetic grass Midland Texas, drought-resistant turf Midland TX, water-saving landscaping Midland',
  openGraph: {
    title: 'Artificial Turf Installation in Midland, TX',
    description: 'Transform your Midland property with water-saving artificial turf. Perfect for our West Texas climate.',
    type: 'website',
  },
};

export default function MidlandTXPage() {
  return <MidlandClient />;
}