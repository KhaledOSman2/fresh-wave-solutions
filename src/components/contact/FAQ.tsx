
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How much does desalination cost?",
      answer: "Costs vary depending on system size and location, but our technology reduces expenses by up to 30% compared to traditional methods."
    },
    {
      question: "Are your systems environmentally friendly?",
      answer: "Yes, our systems minimize environmental impact through energy recovery, responsible brine management, and renewable energy integration."
    },
    {
      question: "Do you offer solutions for residential use?",
      answer: "We offer solutions ranging from small-scale residential systems to large industrial desalination plants."
    },
    {
      question: "How long does installation take?",
      answer: "Installation timeframes vary by project size. Small residential systems can be installed within 1-2 weeks, while larger commercial systems may take 1-3 months."
    },
    {
      question: "What maintenance is required?",
      answer: "Our systems require minimal maintenance with quarterly filter changes and annual professional inspections. We offer comprehensive maintenance packages."
    }
  ];

  return (
    <div className="water-card p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base font-medium text-gray-800 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
