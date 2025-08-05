import type { Metadata } from 'next';
import WaterSavingsClient from './water-savings-client';

export const metadata: Metadata = {
  title: 'Water Savings Calculator | ROI Analysis for Artificial Turf - Permian Basin',
  description: 'Calculate your water and maintenance savings with artificial turf in Midland-Odessa. Free ROI analysis shows payback period and annual savings. Save 70% on water bills.',
  keywords: 'water savings calculator Midland, turf ROI calculator, drought water conservation Permian Basin, artificial grass cost savings',
  openGraph: {
    title: 'Calculate Your Water Savings with Artificial Turf',
    description: 'See how much water and money you can save in the Permian Basin with our free ROI calculator.',
    type: 'website',
  },
};

export default function WaterSavingsPage() {
  return <WaterSavingsClient />;
}