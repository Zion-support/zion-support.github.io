import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ChevronDown, Search, HelpCircle, MessageSquare, Mail, Phone } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud computing, cybersecurity, and digital transformation services. We help businesses leverage cutting-edge technology to achieve unprecedented growth and innovation."
        },
        {
          question: "Where is Zion Tech Group located?",
          answer: "Our main office is located at 364 E Main St STE 1008, Middletown DE 19709. We serve clients globally and offer remote consultation and support services."
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and technology. Our solutions are adaptable to any industry that can benefit from digital transformation."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What AI services do you offer?",
          answer: "We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, autonomous systems, and AI-powered business intelligence solutions. Our AI services are designed to drive efficiency and innovation across all business operations."
        },
        {
          question: "Do you provide cloud migration services?",
          answer: "Yes, we offer complete cloud migration services including assessment, planning, migration execution, and post-migration optimization. We work with all major cloud providers including AWS, Azure, and Google Cloud Platform."
        },
        {
          question: "What cybersecurity services do you provide?",
          answer: "Our cybersecurity services include threat assessment, vulnerability management, security architecture design, incident response, compliance management, and ongoing security monitoring. We help protect your business from evolving cyber threats."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "How do you price your services?",
          answer: "Our pricing is based on project scope, complexity, and timeline. We offer flexible pricing models including project-based, retainer, and subscription options. We provide detailed quotes after understanding your specific requirements."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer free initial consultations to understand your business needs and discuss potential solutions. This helps us provide accurate estimates and recommendations tailored to your specific situation."
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including upfront payment, milestone-based payments, and net 30 terms for established clients. We're happy to work with you to find a payment structure that fits your business needs."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "What support do you provide after project completion?",
          answer: "We provide comprehensive post-project support including training, documentation, ongoing maintenance, and technical support. Our support packages ensure your solutions continue to perform optimally and adapt to your evolving business needs."
        },
        {
          question: "Do you offer 24/7 support?",
          answer: "Yes, we offer 24/7 emergency support for critical issues. Our support team is available around the clock to ensure your business operations continue smoothly without interruption."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We respond to support requests within 1 hour for critical issues, 4 hours for high-priority issues, and 24 hours for standard requests. Our response times are guaranteed in our service level agreements."
        }
      ]
    },
    {
      category: "Technology & Innovation",
      questions: [
        {
          question: "What emerging technologies do you work with?",
          answer: "We work with cutting-edge technologies including quantum computing, blockchain, IoT, edge computing, 5G networks, and advanced robotics. We stay at the forefront of technology to provide our clients with the most innovative solutions."
        },
        {
          question: "How do you ensure data security and privacy?",
          answer: "We implement industry-leading security measures including encryption, multi-factor authentication, regular security audits, and compliance with international standards like GDPR, SOC 2, and ISO 27001. Your data security is our top priority."
        },
        {
          question: "Do you provide training for new technologies?",
          answer: "Yes, we provide comprehensive training programs for all technologies we implement. This includes user training, technical training for your IT team, and ongoing education to ensure your team can effectively use and maintain the solutions."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI-powered technology solutions, services, pricing, and support."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and support. 
            Can't find what you're looking for? Contact our team directly.
          </p>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for questions or topics..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFAQ.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 text-cyan-400 mr-3" />
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemIndex = categoryIndex * 100 + questionIndex;
                  const isExpanded = expandedItems.includes(itemIndex);
                  
                  return (
                    <motion.div
                      key={questionIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * questionIndex }}
                      className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                      >
                        <span className="text-lg font-medium text-white pr-4">
                          {item.question}
                        </span>
                        <ChevronDown 
                          className={`h-5 w-5 text-cyan-400 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is here to help. Get in touch with us for personalized assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <MessageSquare className="h-8 w-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-400 text-sm">Available 24/7</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-400 text-sm">+1 (302) 464-0950</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
