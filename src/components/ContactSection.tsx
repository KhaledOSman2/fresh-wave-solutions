
import React from 'react';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import FAQ from './contact/FAQ';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-sea-50 to-white"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our desalination technologies? We're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          
          <div className="flex flex-col space-y-6">
            <ContactInfo />
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
