
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 bg-design-dark/90 backdrop-blur-md border-b border-design-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 flex items-center justify-center w-8 h-8">
              <div className="w-4 h-4 bg-design-accent rounded-sm"></div>
            </div>
            <span className="text-white font-bold text-xl">VultiSig</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#process" className="text-white/80 hover:text-white transition-colors">Process</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
          </div>
          
          <div>
            {/* <Button variant="outline" className="mr-4 bg-transparent text-white border-design-border hover:bg-design-accent/10 hover:text-design-accent">Log in</Button> */}
            <Button className="bg-design-accent text-black hover:bg-design-accent-hover">Download App</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
