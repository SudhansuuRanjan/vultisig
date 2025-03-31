
import React from 'react';
import { MessageSquare, Wand2, HandHelping } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 md:px-12 bg-gradient-to-b from-design-dark to-black/50">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-design-accent rounded-full mr-2"></div>
            <p className="text-design-accent font-medium text-sm uppercase tracking-wider">How it works</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Top-notch designs,<br />delivered at your doorstep
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div data-aos="fade-up" className="flex flex-col items-center text-center">
            <div className="bg-design-card p-6 rounded-xl border border-design-border mb-6 w-20 h-20 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Tell us your vision</h3>
            <p className="text-white/60">Share your project details, goals, and requirements through our intuitive brief system.</p>
          </div>

          {/* Step 2 */}
          <div data-aos="fade-up" className="flex flex-col items-center text-center">
            <div className="bg-design-card p-6 rounded-xl border border-design-border mb-6 w-20 h-20 flex items-center justify-center">
              <Wand2 className="w-8 h-8 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Receive the magic</h3>
            <p className="text-white/60">Our design experts craft beautiful, functional solutions tailored to your needs.</p>
          </div>

          {/* Step 3 */}
          <div data-aos="fade-up" className="flex flex-col items-center text-center">
            <div className="bg-design-card p-6 rounded-xl border border-design-border mb-6 w-20 h-20 flex items-center justify-center">
              <HandHelping className="w-8 h-8 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Get ongoing support</h3>
            <p className="text-white/60">We provide continuous feedback, revisions, and assistance to ensure perfection.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
