<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI & Machine Learning, Cloud & DevOps, Cybersecurity, Digital Transformation, and IT Consulting services."
    },
    {
      question: "How can I get started with your services?",
      answer: "You can contact us through our website, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com to discuss your needs."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes, we work with businesses of all sizes, from startups to enterprise organizations. We tailor our solutions to meet your specific needs and budget."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope and complexity of your project. We offer flexible engagement models including project-based, retainer, and subscription options."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Find answers to common questions about our services and how we can help your business.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-xl border border-zion-cyan/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-cyan/10 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-zion-cyan" />
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-zion-cyan/80 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
=======

import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;
import React from 'react'; const FAQ = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Frequently Asked Questions </h1> <p className="text-xl text-gray-600"> Find answers to common questions about our services. </p> </div> <div className="max-w-3xl mx-auto space-y-6"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">What services do you offer?</h3> <p className="text-gray-600">We offer AI solutions,cybersecurity,cloud services,and digital transformation solutions.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get started?</h3> <p className="text-gray-600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer support?</h3> <p className="text-gray-600">Yes,we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )}; export default FAQ;
import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;
import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;

>>>>>>> origin/merged-prs
