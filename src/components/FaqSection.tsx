
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => {
  return (
    <div className="border-b border-design-border py-6">
      <button 
        onClick={toggleOpen}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-white font-medium text-lg">{question}</span>
        <ChevronDown 
          className={`text-design-accent transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      
      {isOpen && (
        <div className="mt-4 text-white/70">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: 'How can your team help me with my design project?',
      answer: 'Our team combines strategic thinking, creative expertise, and technical knowledge to deliver comprehensive design solutions. We start by understanding your goals, then create designs that not only look beautiful but also achieve measurable results.'
    },
    {
      question: 'What is your process for designing a website?',
      answer: 'Our website design process follows a proven methodology: discovery, wireframing, design concepts, feedback and iteration, development, testing, and finally launch. Throughout this process, we maintain clear communication and regular checkpoints.'
    },
    {
      question: 'Do you offer revisions for designs?',
      answer: "Yes, revisions are a standard part of our process. We include two rounds of revisions with every project to ensure you're completely satisfied with the final result. Additional revision rounds can be arranged if needed."
    },
    {
      question: 'How long does a typical design project take?',
      answer: "Project timelines vary depending on scope and complexity. A basic branding project might take 2-3 weeks, while a comprehensive website design and development project could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: "Absolutely! We're experienced in working within established brand frameworks. We'll ensure all new designs align with your existing guidelines while bringing fresh perspectives to enhance your brand presence."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 border-t border-design-border">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-design-accent rounded-full mr-2"></div>
            <p className="text-design-accent font-medium text-sm uppercase tracking-wider">FAQ</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            We've got the answers
          </h2>
        </div>
        
        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
