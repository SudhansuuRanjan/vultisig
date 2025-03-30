
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            VULTISIG AIRDROP<br />
            IS LIVE!
          </h1>
          
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Elevate the design process by harnessing the power of AI to automate parts of the design workflow, maintaining high standards.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-design-accent text-black hover:bg-design-accent-hover px-8 py-6 text-lg">Get Started</Button>
            <Button variant="outline" className="bg-transparent text-white border-design-border hover:bg-white/5 px-8 py-6 text-lg">
              Book a demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 rounded-full bg-gradient-circle animate-pulse-glow"></div> */}
      
      {/* Circle outline */}
      <div className="absolute bg-design-dark top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] border border-design-accent/30 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
