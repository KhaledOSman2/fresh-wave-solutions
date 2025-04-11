
import React from 'react';
import { Droplet, Sun, Factory, Award, MapPin, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Sample data of real solar desalination companies
const companies = [
  {
    name: "Elemental Water Makers",
    description: "Uses reverse osmosis powered by renewable energy to provide affordable fresh water without carbon emissions.",
    location: "Netherlands (with projects worldwide)",
    foundedYear: 2012,
    specialization: "Off-grid solar-powered desalination",
    website: "https://elementalwatermakers.com",
    image: "https://images.unsplash.com/photo-1497440001374-f84c0a533dd9?auto=format&fit=crop&q=80&w=1000",
    achievements: "Implemented projects in over 25 countries, reducing water costs by up to 70%"
  },
  {
    name: "Solar Water PLC",
    description: "Pioneers in concentrated solar power technology for large-scale desalination with minimal environmental impact.",
    location: "United Kingdom",
    foundedYear: 2018,
    specialization: "Large-scale CSP desalination",
    website: "https://solarwaterplc.com",
    image: "https://images.unsplash.com/photo-1584834647729-25d63cd3c352?auto=format&fit=crop&q=80&w=1000",
    achievements: "Developed innovative 'Carbon Neutral Desalination' technology"
  },
  {
    name: "Mascara Renewable Water",
    description: "Provides solar-powered desalination solutions that are modular, scalable, and work both on and off-grid.",
    location: "France",
    foundedYear: 2015,
    specialization: "Solar-powered desalination for remote areas",
    website: "https://mascara-nt.fr",
    image: "https://images.unsplash.com/photo-1552251264-3f40ebda6e95?auto=format&fit=crop&q=80&w=1000",
    achievements: "First company to develop a grid-independent solar-powered desalination solution"
  },
  {
    name: "Desolenator",
    description: "Creates portable solar-powered water purification systems using innovative thermal technology.",
    location: "Netherlands",
    foundedYear: 2013,
    specialization: "Solar thermal desalination",
    website: "https://desolenator.com",
    image: "https://images.unsplash.com/photo-1550704780-28205e5f024c?auto=format&fit=crop&q=80&w=1000",
    achievements: "Developed technology that purifies water at 90% lower cost than traditional methods"
  },
  {
    name: "SolarDew",
    description: "Provides portable solar-powered membrane distillation technology for clean drinking water.",
    location: "Netherlands",
    foundedYear: 2018,
    specialization: "Solar membrane distillation",
    website: "https://solardew.com",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&q=80&w=1000",
    achievements: "Created technology that works independently of infrastructure at low cost"
  },
  {
    name: "Aqua Plasma Technologies",
    description: "Uses plasma technology combined with solar power for highly efficient desalination.",
    location: "United States",
    foundedYear: 2016,
    specialization: "Plasma-enhanced desalination",
    website: "https://aquaplasma.com",
    image: "https://images.unsplash.com/photo-1566410864800-1cf31c61c3a2?auto=format&fit=crop&q=80&w=1000",
    achievements: "Reduced energy consumption by up to 60% compared to conventional methods"
  }
];

const SolarDesalinationCompanies: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="bg-gradient-to-b from-sea-50 to-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Sun className="h-12 w-12 text-amber-500" />
                  <Droplet className="absolute top-6 right-0 h-8 w-8 text-sea-600" />
                </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
                Solar-Powered Desalination Companies
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover innovative companies around the world that are transforming seawater into fresh water using sustainable solar energy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl border-sea-100 h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={company.image} 
                      alt={company.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold text-gray-900">{company.name}</CardTitle>
                      <div className="flex items-center bg-sea-50 text-sea-700 text-xs rounded-full px-2 py-1">
                        <Factory className="h-3 w-3 mr-1" />
                        <span>Est. {company.foundedYear}</span>
                      </div>
                    </div>
                    <CardDescription className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      {company.location}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 mb-4">{company.description}</p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 pl-3 py-2 mb-4">
                      <p className="text-sm font-medium text-amber-800">Specialization:</p>
                      <p className="text-sm text-amber-700">{company.specialization}</p>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Award className="h-5 w-5 text-sea-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{company.achievements}</p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="border-t border-gray-100 bg-gray-50">
                    <Button asChild variant="outline" className="w-full">
                      <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolarDesalinationCompanies;
