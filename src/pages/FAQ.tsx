
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer AI services, cybersecurity solutions, cloud infrastructure, digital transformation, data analytics, mobile and web development, IT consulting, and 24/7 support services."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites might take 2-4 weeks, while complex AI solutions could take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive support and maintenance packages. Our 24/7 support ensures your systems run smoothly and any issues are resolved quickly."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and various databases and security tools."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security practices including encryption, secure coding, regular security audits, compliance with regulations, and comprehensive data protection measures."
    },
    {
      question: "Can you help with existing systems?",
      answer: "Absolutely! We specialize in modernizing legacy systems, migrating to cloud platforms, and integrating new technologies with existing infrastructure."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline requirements."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. We tailor our solutions to meet the specific needs and budget of each client."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <span className={`text-2xl transition-transform ${openItems.includes(index) ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Contact us directly and we'll be happy to help answer any questions you may have.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

