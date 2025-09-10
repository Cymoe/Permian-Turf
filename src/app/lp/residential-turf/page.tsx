import type { Metadata } from 'next';
import ResidentialTurfLanding from './residential-turf-landing';

export const metadata: Metadata = {
  title: 'Save $3,000/Year on Water Bills - Artificial Turf Installation Midland-Odessa',
  description: 'Drought-proof your yard. Professional artificial turf installation with 15-year warranty. $0 down financing available. Free water savings analysis.',
  keywords: 'artificial turf installation, synthetic grass midland tx, water saving landscaping',
  robots: 'noindex, nofollow', // Landing page for ads only
  openGraph: {
    title: 'Stop Wasting Water & Money - Get Beautiful Turf Today',
    description: 'Save $3,000+/year. Never water again. Free consultation.',
    type: 'website',
  },
};

export default function ResidentialTurfLP() {
  return <ResidentialTurfLanding />;
}