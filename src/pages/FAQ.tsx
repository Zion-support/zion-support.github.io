<<<<<<< HEAD
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive AI solutions, cloud computing services, cybersecurity solutions, digital transformation consulting, data analytics, and IT infrastructure services. Our team specializes in custom implementations tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide comprehensive support packages including 24/7 monitoring, regular updates, maintenance, and technical support. Our support plans are tailored to your specific needs and service level requirements."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, financial services, manufacturing, retail, technology, and government. Our solutions are adaptable to various business models and regulatory requirements."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards. All our solutions are designed with security as a core principle."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing systems and can work with your current infrastructure. Our team will assess your current setup and design solutions that complement and enhance your existing technology stack."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our AI and technology solutions."
        keywords={["FAQ", "questions", "help", "support", "services"]}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              Contact our team for personalized assistance
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
=======
import React from 'react';
import SEO from '../components/SEO';

export default function FAQ() {
  return (
    <>
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our services and solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">FAQ</h1>
            <p className="text-xl text-slate-300">Frequently asked questions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
