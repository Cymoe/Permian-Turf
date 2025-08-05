import type { Metadata } from 'next';
import RVParkClient from './rv-park-client';

export const metadata: Metadata = {
  title: 'RV Park Water-Free Landscaping Midland Odessa | Oil Field Housing Turf',
  description: 'Drought-resistant RV park landscaping for Midland-Odessa. Water-free artificial turf for oil field housing. Eliminate 100% of irrigation costs. Commercial grade for heavy RV traffic.',
  keywords: 'RV park landscaping Midland Odessa, oil field housing turf installation, water-free RV park landscaping, drought-resistant RV park turf, workforce housing landscaping Permian Basin',
  openGraph: {
    title: 'Water-Free RV Park Landscaping in Midland-Odessa',
    description: 'Transform your RV park with drought-resistant turf. Zero water usage for oil field housing.',
    type: 'website',
  },
};

export default function RVParkLandscapingPage() {
  return <RVParkClient />;
}
}