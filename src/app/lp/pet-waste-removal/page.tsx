import type { Metadata } from 'next';
import PetWasteLandingPage from './landing-page-client';

export const metadata: Metadata = {
  title: 'Pet Waste Removal $65/mo - No Contracts | Midland-Odessa',
  description: 'Professional weekly pet waste removal service. First month 50% off. No contracts, cancel anytime. Serving Midland-Odessa and surrounding areas.',
  keywords: 'dog poop removal service, pet waste cleanup, pooper scooper midland tx',
  robots: 'noindex, nofollow', // Don't index landing pages
  openGraph: {
    title: 'Never Scoop Again - $65/mo Pet Waste Removal',
    description: 'Professional weekly service. First month 50% off. Start today!',
    type: 'website',
  },
};

// This is a landing page for paid ads - no navigation, optimized for conversion
export default function PetWasteRemovalLP() {
  return <PetWasteLandingPage />;
}