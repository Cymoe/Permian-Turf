import type { Metadata } from 'next';
import GreenWallsClient from './green-walls-client';

export const metadata: Metadata = {
  title: 'Artificial Green Walls Midland TX | Biophilic Design for West Texas',
  description: 'Transform stark walls into lush vertical gardens without water. Boost productivity by 15%, reduce stress by 23%. Professional artificial green wall installation in Midland-Odessa.',
  keywords: 'artificial green walls Midland TX, biophilic design West Texas, vertical gardens Odessa, maintenance-free green walls, office green walls Permian Basin',
  openGraph: {
    title: 'Artificial Green Walls - Bringing Life to West Texas',
    description: 'Experience the proven benefits of biophilic design without using a drop of water.',
    type: 'website',
  },
};

export default function GreenWallsPage() {
  return <GreenWallsClient />;
}