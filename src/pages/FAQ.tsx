import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: 'What is Zion Tech Group?',
      a: "Zion Tech Group is a technology company offering AI solutions, cloud & DevOps, cybersecurity, and digital transformation services.",
    },
    {
      q: 'Is the platform free to use?',
      a: 'Core site content is freely accessible. Project work and services are quoted per engagement.',
    },
    {
      q: 'How do I get started?',
      a: 'Contact us via the Contact page to discuss your goals. We will propose a tailored plan.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Frequently asked questions about Zion Tech Group services and getting started." />
        <link rel="canonical" href="https://ziontechgroup.com/faq" />
      </Helmet>

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-zion-slate-light max-w-3xl mx-auto">
          Answers to common questions about our services and process.
        </p>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white/10 border border-white/20 rounded-md">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center"
              >
                <span>{item.q}</span>
                <span className="text-zion-cyan">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-4 text-zion-slate-light">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
