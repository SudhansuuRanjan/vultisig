
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Product Manager, TechCorp',
      content: 'The design team exceeded our expectations. They not only understood our brand vision but brought it to life in ways we couldn\'t have imagined.',
      initials: 'JS'
    },
    {
      name: 'Laura Williams',
      role: 'CEO, Startup Inc.',
      content: 'Working with the team was incredibly smooth. They streamlined our design process and delivered stunning visuals that our customers love.',
      initials: 'LW'
    },
    {
      name: 'Brad Thompson',
      role: 'Marketing Director, GrowthBrand',
      content: 'The attention to detail was impressive. From research to execution, everything was methodical and focused on achieving our business goals.',
      initials: 'BT'
    },
    {
      name: 'Rachel Anderson',
      role: 'UX Director, InnovateApp',
      content: 'Their design systems approach has transformed how we scale our product. Consistent, beautiful, and incredibly functional.',
      initials: 'RA'
    },
    {
      name: 'Ryan Peterson',
      role: 'CTO, TechStartup',
      content: 'The team managed to balance creativity with technical constraints perfectly. Our developers were as happy as our marketing team.',
      initials: 'RP'
    },
    {
      name: 'Olivia Waters',
      role: 'Brand Strategist',
      content: 'They don\'t just deliver designs; they deliver results. Our conversion rates improved significantly after implementing their recommendations.',
      initials: 'OW'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 border-t border-design-border">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-design-accent rounded-full mr-2"></div>
            <p className="text-design-accent font-medium text-sm uppercase tracking-wider">Testimonials</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What our clients say about us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-design-card rounded-xl p-6 border border-design-border hover:border-design-accent/30 transition-colors flex flex-col"
            >
              <p className="text-white/80 mb-6 flex-1">{testimonial.content}</p>
              
              <div className="flex items-center">
                <Avatar className="mr-3 border border-design-border">
                  <AvatarFallback className="bg-design-accent/10 text-design-accent">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
