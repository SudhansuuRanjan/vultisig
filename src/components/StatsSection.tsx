
import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '45+', label: 'Clients worldwide' },
    { value: '5k+', label: 'Projects completed' },
    { value: '4.8', label: 'Customer rating' }
  ];

  return (
    <section className="py-16 px-6 md:px-12 border-t border-design-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
