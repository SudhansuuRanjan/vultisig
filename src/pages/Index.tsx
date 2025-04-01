
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
import PremierFeatures from '@/components/PremierFeature';
import FAQ from '@/components/FAQ';
import OtherFeatures from '@/components/OtherFeatures';
import BestFeatures from '@/components/BestFeatures';
import Video from '@/components/Video';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="bg-design-dark min-h-screen text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <PremierFeatures />
        <FeaturesSection />
        <Video/>
        <ProcessSection />
        <OtherFeatures />
        <BestFeatures />
        {/* <StatsSection /> */}
        <TestimonialsSection />
        {/* <FaqSection /> */}
        <FAQ/>
        <CtaSection />
      </main>
      <Footer />
      <ChatBot/>
    </div>
  );
};

export default Index;
