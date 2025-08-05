import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <ServiceAreas />
      <Calculator />
      <Footer />
    </>
  );
}