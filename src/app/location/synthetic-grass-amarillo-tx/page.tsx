import type { Metadata } from 'next';
import AmarilloClient from './amarillo-client';

export const metadata: Metadata = {
  title: 'Synthetic Grass Installation Amarillo TX | Panhandle Water Conservation Landscaping',
  description: 'Professional synthetic grass installation in Amarillo, TX. Extreme weather resistant turf for Panhandle properties. Save water, eliminate maintenance. Commercial & residential.',
  keywords: 'synthetic grass installation Amarillo, artificial turf Amarillo TX, Panhandle drought-resistant landscaping, water-free landscaping Texas Panhandle, extreme weather turf Amarillo',
  openGraph: {
    title: 'Synthetic Grass Installation in Amarillo, TX - Panhandle Tough',
    description: 'Transform your Amarillo property with weather-resistant synthetic grass. Perfect for extreme Panhandle conditions and water conservation.',
    type: 'website',
  },
};

export default function AmarilloTXPage() {
  return <AmarilloClient />;
}