import React, { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const faqData = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with AI specialists, tech talent, and cutting-edge equipment."
    },
    {
      question: "How does the marketplace work?",
      answer: "Our marketplace allows businesses to browse and hire AI specialists, find tech services, and purchase equipment. Talented professionals can showcase their skills and connect with potential clients."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free to use for both businesses and talent. We believe in democratizing access to AI and technology solutions."
    },
    {
      question: "How do I get started as a talent/creator?",
      answer: "Simply sign up for an account, complete your profile with your skills and experience, and start receiving job opportunities from businesses looking for your expertise."
    },
    {
      question: "How do I hire talent or services?",
      answer: "Browse our marketplace, filter by skills, location, or budget, and connect with talented professionals. You can also post job listings to attract the right candidates."
    },
    {
      question: "What types of services are available?",
      answer: "We offer a wide range of services including AI development, web development, mobile apps, data science, cybersecurity, cloud services, and much more."
    },
    {
      question: "How do you verify talent and services?",
      answer: "We have a comprehensive verification process including skill assessments, portfolio reviews, and client feedback to ensure quality and reliability."
    },
    {
      question: "Can I work remotely?",
      answer: "Absolutely! Many of our opportunities are remote-friendly, allowing you to work with clients from anywhere in the world."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support various payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform."
    },
    {
      question: "How do disputes get resolved?",
      answer: "We have a dedicated dispute resolution team that works to fairly resolve any issues between clients and talent. Our goal is to ensure satisfaction for all parties."
    },
    {
      question: "Do you offer support for enterprise clients?",
      answer: "Yes! We have dedicated enterprise solutions with additional features, priority support, and custom integrations for larger organizations."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through our contact page, email, or live chat. We're available 24/7 to help with any questions or issues."
    }
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Find answers to common questions about Zion Tech Group's AI marketplace and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-700 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{item.question}</span>
                  {openItems.has(index) ? (
                    <span className="text-cyan-400">−</span>
                  ) : (
                    <span className="text-cyan-400">+</span>
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
