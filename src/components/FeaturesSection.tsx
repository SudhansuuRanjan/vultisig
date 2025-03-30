
import React from 'react';
import { BarChart3, Sparkles, LineChart, Workflow, Users } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-12 border-t border-design-border">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="mb-16 ">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-design-accent rounded-full mr-2"></div>
            <p className="text-design-accent font-medium text-sm uppercase tracking-wider">Features</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            We resolve problems associated with<br />creative procedures.
          </h2>
        </div>
        
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <BarChart3 className="w-6 h-6 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Data-driven design</h3>
            <p className="text-white/60">Use analytics and user behavior to inform design decisions for better outcomes.</p>
          </div>
          
          {/* Feature 2 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Sparkles className="w-6 h-6 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">AI-powered design</h3>
            <p className="text-white/60">Leverage artificial intelligence to streamline workflows and generate creative solutions.</p>
          </div>
          
          {/* Feature 3 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <LineChart className="w-6 h-6 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Scalable UX growth</h3>
            <p className="text-white/60">Build systems that grow with your product, maintaining consistency as you scale.</p>
          </div>
          
          {/* Feature 4 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Workflow className="w-6 h-6 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Workflow integration</h3>
            <p className="text-white/60">Seamlessly connect with your existing tools and processes for maximum efficiency.</p>
          </div>
          
          {/* Feature 5 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Users className="w-6 h-6 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Collaborate</h3>
            <p className="text-white/60">Work together in real-time with your team, clients, and stakeholders on design projects.</p>
          </div>

          {/* Feature 5 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Users className="w-6 h-6 text-design-accent" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">Collaborate</h3>
            <p className="text-white/60">Work together in real-time with your team, clients, and stakeholders on design projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
