
import React from 'react';
import { Check, BarChart, GraduationCap, Heart } from 'lucide-react';

const features = [
  {
    icon: <BarChart className="h-10 w-10 text-sea-600" />,
    title: 'Efficiency',
    description: 'Our technologies utilize 50% less energy than traditional desalination methods.'
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-sea-600" />,
    title: 'Innovation',
    description: 'Cutting-edge research continuously improves our desalination processes.'
  },
  {
    icon: <Heart className="h-10 w-10 text-sea-600" />,
    title: 'Sustainability',
    description: 'Eco-friendly methods that protect marine life and minimize environmental impact.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-white"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Sea2Fresh</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make fresh water accessible to everyone through innovative desalination technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Who We Are
            </h3>

            <p className="text-gray-600 mb-6">
              At Sea2Fresh, we are pioneers in solar-powered desalination, providing clean, sustainable, and affordable water solutions. Our mission is to combat water scarcity by utilizing renewable energy and innovative desalination techniques to ensure fresh water is accessible to everyone.
            </p>

            <div className="space-y-4">
              {['100% Renewable Energy: No reliance on harmful fossil fuels.', 'Cost-Effective: Lower operational costs compared to traditional desalination.', 'Eco-Friendly: Zero carbon emissions, contributing to a greener planet.', 'Reliable & Scalable: Designed to provide a consistent and sustainable water supply.'].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 p-1 rounded-full bg-sea-100 mr-3">
                    <Check className="h-5 w-5 text-sea-600" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="water-card flex flex-col items-center text-center p-6 md:p-8 rounded-xl"
              >
                <div className="mb-4 p-3 rounded-full bg-sea-50">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
