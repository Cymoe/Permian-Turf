'use client';

import dynamic from 'next/dynamic';

const Schema = dynamic(() => import('./Schema'), {
  ssr: false,
});

export default function ClientSchema() {
  return <Schema />;
}