import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: 'What services does Zion Tech Group provide?',
      answer: 'We provide comprehensive IT services, AI solutions, cloud computing, cybersecurity, digital transformation, and data analytics services.'
    },
    {
      question: 'How can I contact your support team?',
      answer: 'You can reach us at +1 302 464 0950 or email us at kleber@ziontechgroup.com. We also have a support portal available 24/7.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we specialize in creating custom technology solutions tailored to your specific business needs and requirements.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on scope and complexity. We provide detailed project plans during the consultation phase.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about our services and solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;