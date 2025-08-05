import type { Metadata } from 'next';
import TexasTechClient from './texas-tech-client';

export const metadata: Metadata = {
  title: 'Texas Tech Student Housing Artificial Turf | Apartment Complex Landscaping Lubbock',
  description: 'Specialized artificial turf installation for Texas Tech student housing and apartments. Zero maintenance landscaping for property managers. Red Raider approved. Free quotes.',
  keywords: 'Texas Tech student housing artificial turf, apartment complex turf Lubbock TX, Red Raiders landscaping, Texas Tech apartments grass, student housing water conservation Lubbock',
  openGraph: {
    title: 'Artificial Turf for Texas Tech Student Housing & Apartments',
    description: 'Transform your student housing property with maintenance-free artificial turf. Perfect for high-traffic Texas Tech apartment complexes.',
    type: 'website',
  },
};

export default function TexasTechPage() {
  return <TexasTechClient />;
}