import type { Metadata } from 'next';
import PetTurfPageClient from './pet-turf-client';

export const metadata: Metadata = {
  title: 'Pet Turf Installation Midland-Odessa | Dog-Friendly Artificial Grass',
  description: 'Specialized pet turf installation with antimicrobial protection, superior drainage, and odor control. Perfect for dogs in West Texas heat. K9-grade artificial grass solutions.',
  keywords: 'pet turf Midland TX, dog artificial grass Odessa, K9 grass installation, pet-friendly turf Permian Basin, dog run turf, antimicrobial artificial grass',
  openGraph: {
    title: 'Pet Turf - Odor-Free Artificial Grass for Dogs',
    description: 'Premium pet turf with antimicrobial protection and superior drainage. No more dead spots, mud, or odors.',
    type: 'website',
  },
};

export default function PetTurfPage() {
  return <PetTurfPageClient />;
}