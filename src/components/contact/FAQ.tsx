
import React from 'react';

const FAQ: React.FC = () => {
  return (
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
  );
};

export default FAQ;
