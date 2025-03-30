
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-design-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-2 flex items-center justify-center w-8 h-8">
              <div className="w-4 h-4 bg-design-accent rounded-sm"></div>
            </div>
            <span className="text-white font-bold">VultiSig</span>
          </div>
          
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#process" className="text-white/60 hover:text-white transition-colors">Process</a>
            <a href="#testimonials" className="text-white/60 hover:text-white transition-colors">Testimonials</a>
            <a href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</a>
          </div>
          
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} VultiSig. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
