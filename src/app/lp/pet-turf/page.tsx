import type { Metadata } from 'next';
import PetTurfLanding from './pet-turf-landing';

export const metadata: Metadata = {
  title: 'Pet Turf That Eliminates Odors - Get $500 Off Installation',
  description: 'Stop dealing with yellow spots, mud, and pet odors. Premium antimicrobial turf designed for dogs. Free consultation + $500 off this month only.',
  keywords: 'pet turf special offer, dog grass installation, antimicrobial turf, pet-friendly artificial grass',
  robots: 'noindex, nofollow', // Landing pages typically shouldn't be indexed
};

export default function PetTurfLandingPage() {
  return <PetTurfLanding />;
}