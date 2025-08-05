import type { Metadata } from 'next';
import QuoteClient from './quote-client';

export const metadata: Metadata = {
  title: 'Get Free Quote | Artificial Turf Installation Midland-Odessa',
  description: 'Request a free quote for artificial turf installation in the Permian Basin. Commercial and residential. Fast response, competitive pricing, 10-year warranty.',
  keywords: 'free turf quote Midland, artificial grass estimate Odessa, commercial turf pricing Permian Basin',
  openGraph: {
    title: 'Get Your Free Turf Installation Quote',
    description: 'Professional assessment and competitive pricing for artificial turf in Midland-Odessa. Commercial and residential.',
    type: 'website',
  },
};

export default function QuotePage() {
  return <QuoteClient />;
}