
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import QuizSection from '@/components/QuizSection';
import FactsSection from '@/components/FactsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <QuizSection />
      <FactsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
