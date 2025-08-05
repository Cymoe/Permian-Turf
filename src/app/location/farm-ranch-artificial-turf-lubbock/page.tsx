import type { Metadata } from 'next';
import FarmRanchClient from './farm-ranch-client';

export const metadata: Metadata = {
  title: 'Farm & Ranch Artificial Turf Lubbock | Agricultural Property Synthetic Grass',
  description: 'Specialized artificial turf for South Plains farms and ranches. Perfect for equipment yards, residential areas, and recreational spaces. Water conservation for agricultural properties.',
  keywords: 'farm artificial grass West Texas, ranch synthetic turf Lubbock, agricultural property landscaping South Plains, farm equipment yard turf, ranch house artificial grass',
  openGraph: {
    title: 'Farm & Ranch Artificial Turf Solutions - South Plains Texas',
    description: 'Water-saving synthetic grass for agricultural properties in Lubbock and surrounding areas. Perfect for the farming community.',
    type: 'website',
  },
};

export default function FarmRanchPage() {
  return <FarmRanchClient />;
}