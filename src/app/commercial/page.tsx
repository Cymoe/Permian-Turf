import type { Metadata } from 'next';
import CommercialPageClient from './commercial-client';

export const metadata: Metadata = {
  title: 'Commercial Turf Installation | RV Parks & Workforce Housing - Permian Turf Solutions',
  description: 'Commercial-grade artificial turf installation for RV parks, man camps, and property management in Midland-Odessa. Save 70% on water bills with zero maintenance. Get ROI in 3 years.',
  keywords: 'commercial turf installation Permian Basin, RV park landscaping Midland, workforce housing landscaping Midland Odessa, commercial property turf contractors Odessa',
  openGraph: {
    title: 'Commercial Artificial Turf Solutions - Permian Basin',
    description: 'Specialized turf installation for commercial properties. Perfect for RV parks, workforce housing, and property management companies.',
    type: 'website',
  },
};

export default function CommercialPage() {
  return <CommercialPageClient />;
}