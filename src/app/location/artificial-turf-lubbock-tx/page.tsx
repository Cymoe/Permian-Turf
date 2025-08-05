import type { Metadata } from 'next';
import LubbockClient from './lubbock-client';

export const metadata: Metadata = {
  title: 'Artificial Turf Installation Lubbock TX | Water Conservation Landscaping | Texas Tech Area',
  description: 'Professional artificial turf installation in Lubbock, TX. Save water during drought restrictions April-September. Serving Texas Tech, South Plains, and Hub City. Free quotes.',
  keywords: 'artificial turf installation Lubbock TX, synthetic grass Lubbock Texas, drought-resistant turf South Plains, water conservation landscaping Lubbock, Texas Tech artificial turf, Hub City synthetic grass',
  openGraph: {
    title: 'Artificial Turf Installation in Lubbock, TX - Beat Water Restrictions',
    description: 'Transform your Lubbock property with water-saving artificial turf. Perfect for Texas Tech area properties and South Plains drought conditions.',
    type: 'website',
  },
};

export default function LubbockTXPage() {
  return <LubbockClient />;
}