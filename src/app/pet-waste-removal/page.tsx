import type { Metadata } from 'next';
import PetWasteRemovalClient from './pet-waste-removal-client';

export const metadata: Metadata = {
  title: 'Pet Waste Removal Service Midland-Odessa | Dog Poop Cleanup | Permian Turf Solutions',
  description: 'Professional pet waste removal service in Midland-Odessa. Weekly dog poop cleanup for homes and businesses. Bundle with artificial turf for complete pet-friendly yard solutions. Sanitization included.',
  keywords: 'pet waste removal Midland TX, dog poop cleanup Odessa TX, pooper scooper service Permian Basin, pet waste management West Texas, dog waste removal service, artificial turf pet sanitization',
  openGraph: {
    title: 'Pet Waste Removal Service - Keep Your Yard Clean & Healthy',
    description: 'Professional weekly pet waste removal in West Texas. From $65/month. Perfect companion service to artificial turf installation.',
    type: 'website',
  },
};

export default function PetWasteRemovalPage() {
  return <PetWasteRemovalClient />;
}