import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search, MessageCircle, Phone, Mail, Clock, Star, Shield, Zap, Brain, Cloud, Lock, Users, Rocket, Heart, Building, Globe, Target, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      icon: HelpCircle,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'services',
      name: 'Services',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'pricing',
      name: 'Pricing & Billing',
      icon: Star,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: Brain,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'support',
      name: 'Support',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const faqData = {
    general: [
      {
        id: 'what-is-zion-tech-group',
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud infrastructure, cybersecurity, and digital transformation services. We help businesses of all sizes leverage cutting-edge technology to innovate and grow.'
      },
      {
        id: 'where-are-you-located',
        question: 'Where are you located?',
        answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown DE 19709. However, we provide services globally and have remote teams working across different time zones to serve our international clients.'
      },
      {
        id: 'how-long-have-you-been-in-business',
        question: 'How long have you been in business?',
        answer: 'Zion Tech Group has been at the forefront of technology innovation for several years, helping hundreds of businesses transform their operations and achieve digital excellence.'
      },
      {
        id: 'what-industries-do-you-serve',
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including healthcare, finance, legal services, manufacturing, retail, government, education, and space technology. Our solutions are adaptable to any industry that can benefit from AI and digital transformation.'
      }
    ],
    services: [
      {
        id: 'what-ai-services-do-you-offer',
        question: 'What AI services do you offer?',
        answer: 'We offer comprehensive AI services including business intelligence, healthcare analytics, legal document analysis, financial trading, supply chain optimization, content creation, customer support automation, and more. Each service is customized to meet specific business needs.'
      },
      {
        id: 'do-you-provide-cloud-services',
        question: 'Do you provide cloud services?',
        answer: 'Yes, we offer comprehensive cloud services including cloud migration, DevOps automation, infrastructure management, security, and optimization. We work with major cloud providers like AWS, Azure, and Google Cloud.'
      },
      {
        id: 'what-cybersecurity-services-do-you-offer',
        question: 'What cybersecurity services do you offer?',
        answer: 'Our cybersecurity services include zero-trust security implementation, threat detection and response, security audits, compliance management, employee training, and 24/7 security monitoring to protect your business from evolving threats.'
      },
      {
        id: 'can-you-help-with-digital-transformation',
        question: 'Can you help with digital transformation?',
        answer: 'Absolutely! Digital transformation is one of our core specialties. We help businesses modernize their operations, implement new technologies, train teams, and create digital-first strategies that drive growth and efficiency.'
      }
    ],
    pricing: [
      {
        id: 'how-do-you-price-your-services',
        question: 'How do you price your services?',
        answer: 'We offer flexible pricing models including project-based pricing, monthly subscriptions, and custom enterprise solutions. Pricing depends on the scope of work, complexity, and ongoing support requirements. Contact us for a personalized quote.'
      },
      {
        id: 'do-you-offer-free-consultations',
        question: 'Do you offer free consultations?',
        answer: 'Yes, we provide free initial consultations to understand your business needs and discuss potential solutions. This helps us provide accurate recommendations and pricing for your specific requirements.'
      },
      {
        id: 'are-there-hidden-costs',
        question: 'Are there hidden costs?',
        answer: 'No, we believe in transparent pricing. All costs are clearly outlined in our proposals, including any ongoing maintenance, support, or additional services. We\'ll never surprise you with unexpected charges.'
      },
      {
        id: 'do-you-offer-payment-plans',
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment options including monthly installments for larger projects and subscription-based pricing for ongoing services. We work with businesses to find payment solutions that fit their budget.'
      }
    ],
    technical: [
      {
        id: 'what-technologies-do-you-use',
        question: 'What technologies do you use?',
        answer: 'We use cutting-edge technologies including machine learning frameworks (TensorFlow, PyTorch), cloud platforms (AWS, Azure, GCP), modern development frameworks (React, Node.js, Python), and enterprise-grade security tools.'
      },
      {
        id: 'how-long-does-implementation-take',
        question: 'How long does implementation take?',
        answer: 'Implementation timelines vary based on project complexity. Simple AI integrations might take 2-4 weeks, while comprehensive digital transformations can take 3-6 months. We provide detailed timelines during project planning.'
      },
      {
        id: 'do-you-provide-training',
        question: 'Do you provide training?',
        answer: 'Yes, we provide comprehensive training for your team on all implemented solutions. This includes initial training, documentation, video tutorials, and ongoing support to ensure your team can effectively use the new systems.'
      },
      {
        id: 'what-kind-of-support-do-you-offer',
        question: 'What kind of support do you offer?',
        answer: 'We offer 24/7 technical support, regular maintenance, system updates, performance monitoring, and dedicated account managers. Our support team is always available to help resolve any issues quickly.'
      }
    ],
    support: [
      {
        id: 'how-can-i-get-support',
        question: 'How can I get support?',
        answer: 'You can reach our support team through multiple channels: phone (+1 302 464 0950), email (kleber@ziontechgroup.com), our support portal, or by scheduling a call with your account manager.'
      },
      {
        id: 'what-are-your-response-times',
        question: 'What are your response times?',
        answer: 'We prioritize support based on urgency: critical issues (1 hour), high priority (4 hours), medium priority (24 hours), and low priority (48 hours). Enterprise clients receive priority support with dedicated response times.'
      },
      {
        id: 'do-you-offer-emergency-support',
        question: 'Do you offer emergency support?',
        answer: 'Yes, we provide 24/7 emergency support for critical issues. Our emergency support line is always available, and we have on-call engineers ready to respond to urgent situations that could impact your business operations.'
      },
      {
        id: 'can-you-help-with-maintenance',
        question: 'Can you help with maintenance?',
        answer: 'Absolutely! We offer proactive maintenance services including system monitoring, regular updates, performance optimization, security patches, and preventive maintenance to keep your systems running smoothly.'
      }
    ]
  };

  const filteredFAQs = Object.entries(faqData).reduce((acc, [category, items]) => {
    if (activeCategory === 'all' || category === activeCategory) {
      const filtered = items.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[category] = filtered;
      }
    }
    return acc;
  }, {} as Record<string, typeof faqData.general>);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <SEO 
        title="FAQ & Support | Zion Tech Group" 
        description="Find answers to frequently asked questions about our AI services, pricing, technical support, and more. Get the help you need from Zion Tech Group." 
        keywords="FAQ, support, help, AI services, pricing, technical support, customer service" 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  FAQ & Support
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Find answers to common questions about our services, pricing, and support. 
                Can't find what you're looking for? Our team is here to help.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for answers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories and Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Content */}
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                {Object.entries(filteredFAQs).map(([category, items]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          <span className="text-white font-medium">{item.question}</span>
                          {expandedItems.has(item.id) ? (
                            <ChevronUp className="w-5 h-5 text-cyan-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {expandedItems.has(item.id) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-slate-300 leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* No Results Message */}
              {Object.keys(filteredFAQs).length === 0 && searchTerm && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <HelpCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  <p className="text-slate-400 mb-6">
                    Try adjusting your search terms or browse our categories above.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Clear Search
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Still Need Help?
                </h2>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                  Our expert team is ready to assist you with any questions or concerns. 
                  Get in touch with us through any of these channels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {contactInfo.phone}
                    </a>
                    <p className="text-sm text-slate-400 mt-2">Available 24/7</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      {contactInfo.email}
                    </a>
                    <p className="text-sm text-slate-400 mt-2">Response within 2 hours</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                    <button className="text-green-400 hover:text-green-300 transition-colors duration-200">
                      Start Chat
                    </button>
                    <p className="text-sm text-slate-400 mt-2">Instant support</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Book a free consultation with our experts to discuss your specific needs 
                    and explore how we can help transform your business.
                  </p>
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                    Schedule Free Consultation
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
