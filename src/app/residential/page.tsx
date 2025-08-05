import type { Metadata } from 'next';
import ResidentialPageClient from './residential-client';

export const metadata: Metadata = {
  title: 'Residential Artificial Turf Installation Midland-Odessa | Drought-Resistant Landscaping',
  description: 'Premium residential artificial grass installation in Midland-Odessa. Save water, eliminate maintenance, and enjoy beautiful lawns year-round. Pet-friendly, drought-resistant turf solutions.',
  keywords: 'residential artificial turf Midland TX, drought-resistant turf Midland TX, water-free landscaping Permian Basin, synthetic grass installation Odessa',
  openGraph: {
    title: 'Residential Turf Installation - Save Water in West Texas',
    description: 'Transform your home with beautiful, water-saving artificial grass. Perfect for the Permian Basin climate.',
    type: 'website',
  },
};

export default function ResidentialPage() {
  return <ResidentialPageClient />;
}