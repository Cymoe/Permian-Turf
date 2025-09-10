import ProductsClient from './products-client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce Products | Turf Solutions',
  description: 'High-margin pet turf and lawn care products for direct-to-consumer sales',
};

export default function ProductsPage() {
  return <ProductsClient />;
}