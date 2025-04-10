
import React from 'react';
import Button from './Button';
import WaveAnimation from './WaveAnimation';
import { Droplet } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sea-100 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-fresh-100 opacity-40 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <div className="rounded-full p-2 bg-sea-100 mr-3">
                <Droplet className="h-6 w-6 text-sea-600" />
              </div>
              <span className="text-sm font-medium text-sea-700 bg-sea-50 py-1 px-3 rounded-full">
                Revolutionary Water Technology
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform <span className="bg-gradient-to-r from-sea-700 to-fresh-600 bg-clip-text text-transparent">Seawater</span> into <span className="bg-gradient-to-r from-fresh-600 to-sea-500 bg-clip-text text-transparent">Fresh Water</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover groundbreaking desalination technologies enabling sustainable and efficient fresh water production from our planet's most abundant resource.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button href="#about" variant="primary">
                Learn More
              </Button>
              <Button href="#how-it-works" variant="outline">
                View Solutions
              </Button>
            </div>
          </div>
          
          <div className="relative order-first lg:order-last">
            <div className="relative h-[450px] w-full rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sea-400/90 to-fresh-500/80"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
                  <div className="absolute inset-[10%] rounded-full bg-white/40"></div>
                  <div className="absolute inset-[20%] rounded-full bg-white/50"></div>
                  <div className="absolute inset-[30%] rounded-full bg-white/60"></div>
                  <div className="absolute inset-[40%] rounded-full bg-white/80 flex items-center justify-center">
                    <Droplet className="h-12 w-12 text-sea-600" fill="white" />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-sea-900">Water Crisis Solution</h3>
                <p className="text-sm text-gray-600">Addressing global water scarcity with innovative technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WaveAnimation className="z-10" />
    </section>
  );
};

export default HeroSection;
