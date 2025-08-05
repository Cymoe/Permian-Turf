import type { Metadata } from 'next';
import CommercialClient from './commercial-client';

export const metadata: Metadata = {
  title: 'Commercial Property Turf Amarillo TX | Industrial Artificial Grass Installation',
  description: 'Specialized commercial artificial turf for Amarillo businesses. Perfect for Tyson Foods, Bell Helicopter, BNSF Railway properties. Industrial-grade synthetic grass.',
  keywords: 'commercial property turf contractors Amarillo, industrial artificial turf Amarillo Texas, Bell Helicopter landscaping, Tyson Foods property turf, commercial synthetic grass Panhandle',
  openGraph: {
    title: 'Commercial & Industrial Turf Installation - Amarillo, TX',
    description: 'Industrial-grade artificial turf for Amarillo commercial properties. Extreme weather resistant, zero maintenance.',
    type: 'website',
  },
};

export default function CommercialAmarilloPage() {
  return <CommercialClient />;
}