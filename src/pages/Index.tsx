
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-design-dark min-h-screen text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
