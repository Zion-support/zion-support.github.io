import React from 'react';

const Help: React.FC = () => {
  const faqs = [
    {
      question: 'What services does ZionTech Group offer?',
      answer: 'We offer AI solutions, cloud computing, data analytics, cybersecurity, mobile development, and web development services.'
    },
    {
      question: 'How can I get started with your services?',
      answer: 'Contact us through our contact page or email us directly. We\'ll schedule a consultation to discuss your specific needs.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions and services.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, e-commerce, manufacturing, and technology.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Help & Support</h1>
        <p className="text-gray-300 text-lg text-center mb-12 max-w-3xl mx-auto">
          Find answers to common questions and get the support you need.
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
            <p className="text-gray-300 mb-6">Contact our support team for personalized assistance.</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;