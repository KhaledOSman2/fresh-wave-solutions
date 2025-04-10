
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Water Collection',
    description: 'Seawater is collected from the ocean through specialized intake systems designed to minimize environmental impact and protect marine life.',
    image: '/placeholder.svg'
  },
  {
    number: '02',
    title: 'Pre-treatment',
    description: 'Water undergoes filtration to remove large particles, followed by chemical treatment to adjust pH and prevent scaling.',
    image: '/placeholder.svg'
  },
  {
    number: '03',
    title: 'Membrane Filtration',
    description: 'Our advanced reverse osmosis membranes separate salt and impurities from water molecules, allowing only pure water to pass through.',
    image: '/placeholder.svg'
  },
  {
    number: '04',
    title: 'Post-treatment',
    description: 'The filtered water is remineralized and pH-balanced to make it safe and healthy for consumption.',
    image: '/placeholder.svg'
  }
];

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-sea-50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-sea-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative desalination process transforms seawater into clean, fresh water through these key steps.
          </p>
        </div>
        
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="water-card h-full flex flex-col lg:flex-row items-start gap-6 p-6">
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-sea-500 to-sea-700 text-white flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <div className="aspect-video rounded-lg overflow-hidden bg-sea-100 flex items-center justify-center mb-4">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-sea-600" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
