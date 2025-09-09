import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Support() {
  const [activeCategory, setActiveCategory] = useState('general');
  
  const faqCategories = {
    general: [
      {
        question: 'How do I get started with Zion Tech Group services?',
        answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
      },
      {
        question: 'What services does Zion Tech Group offer?',
        answer: 'We offer a comprehensive range of technology services including web development, mobile app development, AI solutions, blockchain development, cloud services, and digital transformation consulting.'
      }
    ],
    technical: [
      {
        question: 'Do you provide ongoing support after project completion?',
        answer: 'Yes, we offer comprehensive post-launch support and maintenance services to ensure your solutions continue to perform optimally.'
      }
    ],
    billing: [
      {
        question: 'What are your payment terms?',
        answer: 'We offer flexible payment terms including milestone-based payments and monthly retainers. Contact us to discuss the best option for your project.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600">Find answers to common questions or contact our support team</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Email Support</h3>
                  <p className="text-gray-600">support@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone Support</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
              
              <div className="flex space-x-4 mb-6">
                {Object.keys(faqCategories).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {faqCategories[activeCategory].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still need help?</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}