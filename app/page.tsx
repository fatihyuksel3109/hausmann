import { Header } from '@/components/header';
import { HeroCarousel } from '@/components/hero-carousel';
import { AboutSection } from '@/components/about-section';
import { GallerySection } from '@/components/gallery-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}