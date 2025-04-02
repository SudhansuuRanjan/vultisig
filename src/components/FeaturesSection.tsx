import { BarChart3, Sparkles, LineChart, Workflow, Users } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:px-6 md:px-6 px-4 md:px-12 border-t border-design-border">
      <div className="container mx-auto">
        <div data-aos="fade-up" className="mb-16 ">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-design-accent rounded-full mr-2"></div>
            <p className="text-design-accent font-medium text-sm uppercase tracking-wider">Security Features</p>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8">
            We resolve problems associated with<br />security procedures.
          </h2>
        </div>

        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className='hover:scale-[98%] transition-all'>
              <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <BarChart3 className="w-6 h-6 text-design-accent" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Self-Custodial Security</h3>
              <p className="text-white/60">Take full control of your crypto assets with self-custodial solutions, ensuring no reliance on third parties..</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className='hover:scale-[98%] transition-all'>
              <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Sparkles className="w-6 h-6 text-design-accent" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Threshold Signatures</h3>
              <p className="text-white/60">Leverage secure threshold signatures to eliminate single points of failure.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className='hover:scale-[98%] transition-all'>
              <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <LineChart className="w-6 h-6 text-design-accent" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Multichain Support</h3>
              <p className="text-white/60">Manage assets across multiple blockchain networks seamlessly, all within one secure platform.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className='hover:scale-[98%] transition-all'>
              <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Workflow className="w-6 h-6 text-design-accent" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Collaborative Security</h3>
              <p className="text-white/60">Work securely with trusted parties in shared custody setups, ensuring transparency and control over assets.</p>
            </div>
          </div>

          {/* Feature 5 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className='hover:scale-[98%] transition-all'>
              <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Users className="w-6 h-6 text-design-accent" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">No Seed Phrases</h3>
              <p className="text-white/60">Say goodbye to seed phrases—access your vault with advanced security mechanisms for a hassle-free experience.</p>
            </div>
          </div>

          {/* Feature 5 */}
          <div data-aos="fade-up" className="bg-design-card hover:bg-design-card-hover rounded-xl p-6 border border-design-border hover:border-design-accent/50 transition-colors">
            <div className='hover:scale-[98%] transition-all'>
              <div className="bg-design-accent/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <Users className="w-6 h-6 text-design-accent" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">Scalable Asset Management</h3>
              <p className="text-white/60">Effortlessly scale your crypto management as your portfolio grows, maintaining security and efficiency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
