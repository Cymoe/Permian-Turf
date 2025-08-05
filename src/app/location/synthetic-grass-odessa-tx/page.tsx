import type { Metadata } from 'next';
import OdessaClient from './odessa-client';

export const metadata: Metadata = {
  title: 'Drought-Resistant Synthetic Grass Odessa TX | Water-Free Landscaping Solutions',
  description: 'Professional drought-resistant synthetic grass installation in Odessa, TX. Eliminate water usage with water-free landscaping. Save 100% on irrigation costs. Commercial & residential.',
  keywords: 'drought-resistant synthetic grass Odessa TX, water-free landscaping Odessa, artificial turf Odessa drought, commercial property turf contractors Odessa, zero water grass Odessa Texas',
  openGraph: {
    title: 'Water-Free Synthetic Grass Installation in Odessa, TX',
    description: 'Transform your Odessa property with drought-resistant synthetic grass. Zero water usage in Permian Basin drought conditions.',
    type: 'website',
  },
};

export default function OdessaTXPage() {
  return <OdessaClient />;
}