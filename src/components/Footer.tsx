import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <div className="relative">
                <Droplet className="h-8 w-8 text-sea-400" />
                <Droplet className="absolute -top-1 -left-1 h-8 w-8 text-sea-300 opacity-60" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-sea-400 to-fresh-400 bg-clip-text text-transparent">
                Sea2Fresh
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-xs">
              Transforming our planet's most abundant resource into clean, fresh water through innovative desalination technology.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sea-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sea-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sea-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sea-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/#about' },
                { name: 'How It Works', path: '/#how-it-works' },
                { name: 'Quiz', path: '/#quiz' },
                { name: 'Facts', path: '/#facts' },
                { name: 'Solar Companies', path: '/solar-companies' },
                { name: 'Contact', path: '/#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-sea-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Research', path: '#' },
                { name: 'Case Studies', path: '#' },
                { name: 'Water Statistics', path: '#' },
                { name: 'Technical Specifications', path: '#' },
                { name: 'Blog', path: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-gray-400 hover:text-sea-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on water technology and desalination innovations.
            </p>
            
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-800 text-gray-200 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sea-600 text-white p-1.5 rounded-md hover:bg-sea-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Sea2Fresh. All rights reserved.
          </p>
          
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
          
          <button 
            onClick={scrollToTop} 
            className="fixed bottom-8 right-8 p-3 bg-sea-600 text-white rounded-full shadow-lg hover:bg-sea-700 transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
