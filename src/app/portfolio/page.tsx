import type { Metadata } from 'next';
import PortfolioClient from './portfolio-client';

export const metadata: Metadata = {
  title: 'Turf Installation Portfolio | Before & After Projects - Permian Basin',
  description: 'View our commercial and residential artificial turf installations across Midland-Odessa. Before & after photos, project details, and customer testimonials.',
  keywords: 'turf installation portfolio, artificial grass before after, commercial turf projects Midland, synthetic grass installations Odessa',
  openGraph: {
    title: 'Our Work - Artificial Turf Installations in West Texas',
    description: 'See real transformations from our commercial and residential turf projects across the Permian Basin.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}