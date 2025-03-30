
import React from 'react';

const TrustedBySection = () => {
  const logos = [
    { name: 'Instagram', icon: '📷' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'Slack', icon: '💬' },
    { name: 'Medium', icon: '📝' },
    { name: 'Pinterest', icon: '📌' },
    { name: 'Duolingo', icon: '🦉' }
  ];

  return (
    <section className="py-16 px-6 md:px-12 border-t border-design-border">
      <div className="container mx-auto">
        <h3 className="text-center text-white/50 text-lg mb-10">Already chosen by the leaders</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-2xl mr-2">{logo.icon}</span>
              <span className="text-white font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
