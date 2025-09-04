import React, { useState } from 'react';

export default function FAQ() {
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
      answer: "We offer comprehensive technology solutions including AI development, micro SaaS products, IT services, cybersecurity, cloud infrastructure, and data analytics. Our services are designed to help businesses of all sizes with their digital transformation needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple websites or applications can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we work with startups, small businesses, and large enterprises. We offer flexible engagement models including MVP development, technical co-founder services, and scalable architecture planning for growing businesses."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and various AI/ML frameworks. Our tech stack is chosen based on project requirements and long-term scalability needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, and technical support. Our support packages are tailored to your specific needs and budget."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement industry-standard security practices including encryption, secure coding practices, regular security audits, and compliance with relevant regulations. All our team members are trained in security best practices."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about our services and processes
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              <span className={`text-gray-500 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`}>
                ▼
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
        <p className="text-gray-600 mb-6">
          Contact our team for personalized assistance with your specific needs.
        </p>
        <a 
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}