
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-design-card rounded-xl p-10 md:p-16 border border-design-border relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
              Elevate the way you source design
            </h2>
            
            <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
              Work with our team of experts to create designs that stand out and drive results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-design-accent text-black hover:bg-design-accent-hover px-8 py-6 text-lg">Get Started</Button>
            </div>
          </div>
          
          {/* Background glow */}
          <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-circle opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
