
import React from 'react';
import { Mail, Phone, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="water-card p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-sea-100 rounded-full mr-4">
            <Mail className="h-5 w-5 text-sea-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Email</h4>
            <p className="text-gray-800">info@sea2fresh.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-sea-100 rounded-full mr-4">
            <Phone className="h-5 w-5 text-sea-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Phone</h4>
            <p className="text-gray-800">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-sea-100 rounded-full mr-4">
            <MapPin className="h-5 w-5 text-sea-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Address</h4>
            <p className="text-gray-800">
              123 Coastal Drive<br />
              Oceanview, CA 90210<br />
              United States
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-sea-100 rounded-full mr-4">
            <Globe className="h-5 w-5 text-sea-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Website</h4>
            <p className="text-gray-800">www.sea2fresh.com</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-500 mb-3">Connect With Us</h4>
          <div className="flex space-x-3">
            <a href="#" className="p-2 bg-sea-100 hover:bg-sea-200 rounded-full transition-colors duration-200">
              <Facebook className="h-5 w-5 text-sea-600" />
            </a>
            <a href="#" className="p-2 bg-sea-100 hover:bg-sea-200 rounded-full transition-colors duration-200">
              <Twitter className="h-5 w-5 text-sea-600" />
            </a>
            <a href="#" className="p-2 bg-sea-100 hover:bg-sea-200 rounded-full transition-colors duration-200">
              <Linkedin className="h-5 w-5 text-sea-600" />
            </a>
            <a href="#" className="p-2 bg-sea-100 hover:bg-sea-200 rounded-full transition-colors duration-200">
              <Instagram className="h-5 w-5 text-sea-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
