import type { Metadata } from 'next';
import WorkforceHousingClient from './workforce-housing-client';

export const metadata: Metadata = {
  title: 'Workforce Housing Landscaping Midland Odessa | Oil Field Housing Turf Installation',
  description: 'Specialized artificial turf solutions for man camps, RV parks, and oil field housing. Zero maintenance landscaping that improves worker retention. Volume pricing available.',
  keywords: 'workforce housing landscaping Midland Odessa, oil field housing turf installation, man camp landscaping solutions, RV park turf contractor Permian Basin',
  openGraph: {
    title: 'Workforce Housing Turf Solutions - Zero Maintenance Landscaping',
    description: 'Transform your man camp or RV park with commercial-grade artificial turf. Improve occupancy and eliminate maintenance.',
    type: 'website',
  },
};

export default function WorkforceHousingPage() {
  return <WorkforceHousingClient />;
}