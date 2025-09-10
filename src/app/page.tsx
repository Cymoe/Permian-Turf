import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import ImageShowcase from '@/components/ImageShowcase';
import Services from '@/components/Services';
import ServiceAreas from '@/components/ServiceAreas';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import StickyQuoteButton from '@/components/StickyQuoteButton';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BeforeAfterGallery />
      <ImageShowcase />
      <Services />
      <ServiceAreas />
      <Calculator />
      <Footer />
      <ExitIntentPopup />
      <StickyQuoteButton />
    </>
  );
}