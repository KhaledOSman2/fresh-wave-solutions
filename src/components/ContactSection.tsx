import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from './Button';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to your backend
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

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
            <div className="water-card overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                    <p className="font-medium">Message Sent!</p>
                    <p>Thank you for contacting us. We'll get back to you shortly.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership Opportunities</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sea-500 focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      variant="primary" 
                      className="w-full justify-center"
                      onClick={() => {}}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col space-y-6">
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
              </div>
            </div>
            
            <div className="water-card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-medium text-gray-800">How much does desalination cost?</h4>
                  <p className="text-sm text-gray-600">Costs vary depending on system size and location, but our technology reduces expenses by up to 30% compared to traditional methods.</p>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-800">Are your systems environmentally friendly?</h4>
                  <p className="text-sm text-gray-600">Yes, our systems minimize environmental impact through energy recovery, responsible brine management, and renewable energy integration.</p>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-800">Do you offer solutions for residential use?</h4>
                  <p className="text-sm text-gray-600">We offer solutions ranging from small-scale residential systems to large industrial desalination plants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
