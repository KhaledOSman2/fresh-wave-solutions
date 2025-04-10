
import React, { useState } from 'react';

interface Fact {
  id: number;
  title: string;
  content: string;
  icon: string;
  category: 'technology' | 'environment' | 'social';
}

const facts: Fact[] = [
  {
    id: 1,
    title: "Global Water Crisis",
    content: "By 2025, two-thirds of the world's population may face water shortages, making desalination increasingly vital.",
    icon: "🌍",
    category: "social"
  },
  {
    id: 2,
    title: "Energy Evolution",
    content: "Modern desalination requires 10x less energy than processes from the 1970s, making it increasingly sustainable.",
    icon: "⚡",
    category: "technology"
  },
  {
    id: 3,
    title: "Saltwater Abundance",
    content: "97% of Earth's water is saltwater, making desalination a nearly limitless source of freshwater.",
    icon: "🌊",
    category: "environment"
  },
  {
    id: 4,
    title: "Growing Industry",
    content: "The global desalination market is projected to reach $32 billion by 2025 as water scarcity increases.",
    icon: "📈",
    category: "technology"
  },
  {
    id: 5,
    title: "Brine Management",
    content: "For every gallon of freshwater produced, desalination creates 1.5 gallons of brine that must be properly managed.",
    icon: "🧪",
    category: "environment"
  },
  {
    id: 6,
    title: "Water Access",
    content: "Desalination provides water security to over 300 million people worldwide, particularly in arid regions.",
    icon: "👥",
    category: "social"
  }
];

const FactsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredFacts = filter === 'all' 
    ? facts 
    : facts.filter(fact => fact.category === filter);

  return (
    <section id="facts" className="py-20 bg-sea-50 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-sea-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Water Desalination Facts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover interesting statistics and information about water desalination and its global impact.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white rounded-lg shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-sea-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Facts
            </button>
            <button
              onClick={() => setFilter('technology')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'technology' 
                  ? 'bg-sea-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setFilter('environment')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'environment' 
                  ? 'bg-sea-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Environment
            </button>
            <button
              onClick={() => setFilter('social')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'social' 
                  ? 'bg-sea-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Social Impact
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacts.map((fact) => (
            <div 
              key={fact.id} 
              className="water-card h-full flex flex-col p-6 hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{fact.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{fact.title}</h3>
              <p className="text-gray-600 flex-grow">{fact.content}</p>
              <div className="mt-4">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                  fact.category === 'technology' 
                    ? 'bg-blue-100 text-blue-800' 
                    : fact.category === 'environment'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  {fact.category.charAt(0).toUpperCase() + fact.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
