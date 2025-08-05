import type { Metadata } from 'next';
import PanhandleClient from './panhandle-client';

export const metadata: Metadata = {
  title: 'Panhandle Drought-Resistant Turf | Texas Water Conservation Landscaping',
  description: 'Drought-resistant artificial turf for the Texas Panhandle. Save the Ogallala Aquifer with water-free landscaping. Serving 26 counties with extreme weather solutions.',
  keywords: 'Panhandle drought-resistant landscaping, Texas Panhandle water conservation, Ogallala Aquifer preservation turf, extreme weather turf Northwest Texas, water-free landscaping Panhandle',
  openGraph: {
    title: 'Panhandle Drought-Resistant Turf Solutions',
    description: 'Water conservation landscaping for the Texas Panhandle. Save water, survive extreme weather.',
    type: 'website',
  },
};

export default function PanhandlePage() {
  return <PanhandleClient />;
}