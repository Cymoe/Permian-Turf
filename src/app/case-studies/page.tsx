import type { Metadata } from 'next';
import CaseStudiesClient from './case-studies-client';

export const metadata: Metadata = {
  title: 'Case Studies | Commercial Turf Success Stories - Permian Basin',
  description: 'Real results from RV parks, man camps, and commercial properties. See how artificial turf saves water and money across Midland-Odessa.',
  keywords: 'turf installation case studies, RV park landscaping success, man camp turf results, commercial property water savings',
  openGraph: {
    title: 'Success Stories - Commercial Turf Installations',
    description: 'Documented results from our commercial artificial turf projects. Real savings, real testimonials.',
    type: 'website',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}