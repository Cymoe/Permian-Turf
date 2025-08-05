import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageShowcase from '@/components/ImageShowcase';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ImageShowcase />
      <Services />
      <ServiceAreas />
      <Calculator />
      <Footer />
    </>
  );
}