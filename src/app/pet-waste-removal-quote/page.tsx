import type { Metadata } from 'next';
import PetWasteQuoteClient from './pet-waste-quote-client';

export const metadata: Metadata = {
  title: 'Get Started - Pet Waste Removal Service | Permian Turf Solutions',
  description: 'Sign up for professional pet waste removal service in Midland-Odessa. Weekly or bi-weekly service starting at $45/month. No contracts, cancel anytime.',
  keywords: 'pet waste removal quote, dog poop cleanup signup, pooper scooper service quote, pet waste management pricing',
  openGraph: {
    title: 'Start Pet Waste Removal Service - Quick & Easy Signup',
    description: 'Get started with professional pet waste removal in minutes. No contracts required.',
    type: 'website',
  },
};

export default function PetWasteQuotePage() {
  return <PetWasteQuoteClient />;
}