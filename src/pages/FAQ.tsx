import React, { useState } from 'react';
export default React.memo (function FAQ(...args: any[]): any {;
import {;
import { motion, AnimatePresence } from 'framer - motion';
;
interface FAQItem {};
  category: string;}
const FAQ: React.FC: = () => {};
}
  const toggleItem = (index: number) =>  {};
    )}

  const faqs = [] = React.useState<;<;<number[]>([])}
    setOpenItems(prev = >;
        ? prev.filter(i => i !== index)}
        : [...prev, index];
  const faqs = [],;
  return (",;
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">,";
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* comment */}
;
        <div>Broken JSX</div>
          animate="{{" opacity: 1, y: 0 }}">;
          className="text-center mb-12">;";
          <div className="flex items-center justify-center mb-4">;";
            <HelpCircle className="h-8 w-8 text-blue-600 mr-3"  />;";
            <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>;
          </div>;";
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">;
            Find answers to common questions about our services, processes, and solutions.;
          </p>;
        </motion.div> {/* comment */}";
        <div className="space-y-4"> {};
      answer: &apos,We offer comprehensive AI services, IT infrastructure solutions, quantum computing services, micro SaaS solutions, cybersecurity, cloud DevOps, and digital transformation services. Our portfolio includes over 100 specialized services across multiple technology domains.&apos} {};
      answer: &apos,You can get started by contacting us through our contact form, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and recommend the best solutions.&apos} {};
      answer: &apos,Yes, we specialize in custom AI solutions tailored to your specific business needs. Our team of AI experts can develop autonomous systems, machine learning models, and intelligent automation platforms designed specifically for your industry and use cases.&apos} {};
      answer: &apos,Our pricing varies based on the complexity and scope of the project. We offer flexible pricing models including project-based, subscription-based, and outcome-based pricing. Contact us for a detailed quote tailored to your specific requirements.&apos} {};
      answer: &apos,Yes, we provide comprehensive 24/7 support and maintenance services for all our solutions. Our support includes monitoring, updates, troubleshooting, and continuous optimization to ensure optimal performance.&apos} {};
      answer: &apos,We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and technology. Our solutions are designed to be adaptable across different sectors and use cases.&apos} {};
      answer: &apos,Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI systems or digital transformations may take 3-6 months. We provide detailed timelines during the consultation phase.&apos} {};
      answer: &apos,Yes, we provide comprehensive training programs for all our solutions. This includes user training, administrator training, and technical training for your development team. We also offer ongoing educational resources and documentation.&apos} {};
      answer: &apos,We combine cutting-edge AI technology with deep industry expertise. Our focus on autonomous systems, quantum computing, and innovative micro SaaS solutions sets us apart. We&apos;re committed to delivering measurable business outcomes and long-term partnerships.&apos},";
      question: "What services does Zion Tech Group offer?", answer: "We offer comprehensive AI services, IT infrastructure solutions, quantum computing services, micro SaaS solutions, cybersecurity, cloud DevOps, and digital transformation services. Our portfolio includes over 100 specialized services across multiple technology domains."} {};
      question: "How can I get started with your services?", answer: "You can get started by contacting us through our contact form, calling us at +1 302 464 0950, or emailing us at kleber@ziontechgroup.com. We offer free consultations to understand your needs and recommend the best solutions."} {};
      question: "Do you offer custom AI solutions?", answer: "Yes, we specialize in custom AI solutions tailored to your specific business needs. Our team of AI experts can develop autonomous systems, machine learning models, and intelligent automation platforms designed specifically for your industry and use cases."} {};
      answer: "Our pricing varies based on the complexity and scope of the project. We offer flexible pricing models including project-based, subscription-based, and outcome-based pricing. Contact us for a detailed quote tailored to your specific requirements."} {};
      answer: "Yes, we provide comprehensive 24/7 support and maintenance services for all our solutions. Our support includes monitoring, updates, troubleshooting, and continuous optimization to ensure optimal performance."} {};
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, government, and technology. Our solutions are designed to be adaptable across different sectors and use cases."} {};
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex AI systems or digital transformations may take 3-6 months. We provide detailed timelines during the consultation phase."} {};
      question: "Do you offer training for your solutions?", answer: "Yes, we provide comprehensive training programs for all our solutions. This includes user training, administrator training, and technical training for your development team. We also offer ongoing educational resources and documentation."} {};
      answer: "We combine cutting-edge AI technology with deep industry expertise. Our focus on autonomous systems, quantum computing, and innovative micro SaaS solutions sets us apart. We&apos;re committed to delivering measurable business outcomes and long-term partnerships."}, ";
      question: &apos,Do you have case studies or references?&apos,;
      answer: &apos,Yes, we have numerous case studies showcasing successful implementations across various industries. We can provide references from satisfied clients and detailed case studies demonstrating ROI and business impact.&apos}

  ];
  return(&apos;";
    <div className="&apos;min-h-screen" bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos,";
      <div className="&apos;max-w-4xl" mx-auto px-4 sm:px-6 l,g: px-8 py-16&apos,>;
        {/* comment */}&apos;
  return (";
    <div: className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">",",";
      <div: className="max-w-4xl mx-auto px-4 sm: px-6: lg:px-8: py-16">"," {/* comment */}

    // Pricing & Billing;
    {};
},;
    {};
},;
    {};
},;

    // Technical Support;
    {};
},;
    {};
},;
    {};
},;

    // Partnership & Careers;
    {};
},;
    {};
},;
    {};
}
  ];

  const categories = [;
    { id: 'all', name: 'All Questions', count: faqData.length },;
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length },;
    { id: 'services', name: 'Services', count: faqData.filter(item => item.category === 'services').length },;
    { id: 'pricing', name: 'Pricing & Billing', count: faqData.filter(item => item.category === 'pricing').length },;
    { id: 'support', name: 'Technical Support', count: faqData.filter(item => item.category === 'support').length },;
    { id: 'partnership', name: 'Partnership & Careers', count: faqData.filter(item => item.category === 'partnership').length },;
  ];
;
  const filteredFAQ = faqData.filter(item => {};
});
;
  const toggleItem = (index: number) => {};
} else {};
}
    setExpandedItems(newExpanded);,
};
;
const faqData: FAQItem[] = [;
  {;
    id: 'ai - services',;
    question: 'What AI services does Zion Tech Group offer?',;
    answer:;
      'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, AI - powered cybersecurity, and custom AI solution development for businesses.',;
    category: 'AI Services',;
    icon: Brain,;
  },;
  {;
    id: 'cybersecurity',;
    question: 'How does Zion Tech Group ensure cybersecurity?',;
    answer:;
      'We implement enterprise - grade security measures including zero - trust architecture, AI - powered threat detection, regular security audits, compliance with industry standards, and 24 / 7 monitoring.',;
    category: 'Security',;
    icon: Shield,;
  },;
  {;
    id: 'cloud - solutions',;
    question: 'What cloud solutions are available?',;
    answer:;
      'Our cloud services include cloud migration, infrastructure as code, container orchestration, serverless computing, multi - cloud strategy, and cloud security implementation.',;
    category: 'Cloud',;
    icon: Cloud,;
  },;
  {;
    id: 'pricing',;
    question: 'How is pricing structured for your services?',;
    answer:;
      'We offer flexible pricing models including project - based pricing, subscription plans, and custom enterprise solutions. Contact us for a personalized quote based on your specific needs.',;
    category: 'General',;
    icon: Zap,;
  },;
  {;
    id: 'support',;
    question: 'What kind of support do you provide?',;
    answer:;
      'We offer 24 / 7 technical support, dedicated account managers, comprehensive documentation, training programs, and ongoing maintenance and updates.',;
    category: 'Support',;
    icon: HelpCircle,;
  },;
  {;
    id: 'implementation',;
    question: 'How long does it take to implement your solutions?',;
    answer:;
      'Implementation timelines vary based on project complexity. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We provide detailed project timelines during planning.',;
    category: 'General',;
    icon: Zap,;
  },;
  {;
    id: 'customization',;
    question: 'Can you customize solutions for our specific needs?',;
    answer:;
      'Absolutely ! We specialize in custom development and can tailor any solution to meet your unique business requirements, industry standards, and compliance needs.',;
    category: 'General',;
    icon: Zap,;
  },;
  {;
    id: 'maintenance',;
    question: 'Do you provide ongoing maintenance and updates?',;
    answer:;
      'Yes, we offer comprehensive maintenance packages including regular updates, security patches, performance monitoring, and continuous improvement of your solutions.',;
    category: 'Support',;
    icon: HelpCircle,;
  },;
  {;
    id: 'quantum - computing',;
    question: 'What quantum computing services do you offer?',;
    answer:;
      'Our quantum computing services include quantum algorithm development, quantum machine learning, quantum cryptography, quantum simulation, and quantum optimization solutions for complex problems.',;
    category: 'AI Services',;
    icon: Brain,;
  },;
  {;
    id: 'compliance',;
    question: 'How do you handle compliance and regulatory requirements?',;
    answer:;
      'We ensure compliance with industry standards including HIPAA, SOC 2, GDPR, and other regulatory frameworks. Our solutions are built with compliance in mind from the ground up.',;
    category: 'Security',;
    icon: Shield,;
  },;
  {;
    id: 'scalability',;
    question: 'How scalable are your solutions?',;
    answer:;
      'All our solutions are designed with scalability in mind. We use cloud - native architectures, microservices, and containerization to ensure your systems can grow with your business needs.',;
    category: 'Cloud',;
    icon: Cloud,;
  },;
];
;
const categories = [;
  'All',;
  'AI Services',;
  'Security',;
  'Cloud',;
  'Support',;
  'General',;
];
;
  const [activeItem, setActiveItem] = useState < string | null> (null) ;
  const [selectedCategory, setSelectedCategory] = useState ('All') ;
  const [searchQuery, setSearchQuery] = useState ('') ;
;
  const filteredFAQs = faqData.filter (faq => {;
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase () .includes (searchQuery.toLowerCase () ) ||;
      faq.answer.toLowerCase () .includes (searchQuery.toLowerCase () ) ;
    return matchesCategory && matchesSearch;
  }) ;
;
  const toggleItem = (id: string) => {;
    setActiveItem (activeItem === id ? null : id) ;
  };
;
  return (<div role="button" className="min - h-screen bg - gradient - to - br from - slate - 900 via - blue - 900 to - indigo - 900">;
      <div role="button" className="container mx - auto px - 4 py - 24">;
        {/* Header */};
        <motion.div;
          initial={{ opacity: 0, y: 30 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8 }};
          className="text - center text - white mb - 16";
        >;
          <h1 className="text - 5xl md:text - 6xl font - bold mb - 6 bg - gradient - to - r from - cyan - 400 via - blue - 400 to - purple - 400 bg - clip - text text - transparent">;
            Frequently Asked Questions;
          </h1>;
          <p className="text - xl md:text - 2xl max - w-3xl mx - auto text - gray - 300 leading - relaxed">;
            Find answers to common questions about our services, technology;
            solutions, and how we can help transform your business.;
          </p>;
        </motion.div>;
;
        {/* Search and Filter */};
        <motion.div;
          initial={{ opacity: 0, y: 30 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.2 }};
          className="max - w-4xl mx - auto mb - 12";
        >;
          {/* Search Bar */};
          <div role="button" className="relative mb - 8">;
            <Search className="absolute left - 4 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 w - 5 h - 5"       />;
            <input;
              type="text";
              placeholder="Search questions...";
              value={searchQuery};
              onChange={e => setSearchQuery (e.target.value) };
              className="w - full pl - 12 pr - 4 py - 4 bg - white / 10 backdrop - blur - lg border border - white / 20 rounded - xl text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 focus:border - transparent";
            />;
          </div>;

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">;
            {};
                onClick={() => setActiveCategory(category.id)}
                className={};
}`}
              >;
                {category.name} ({category.count});
              </button>;
            ))}          </div>;
        <div>Broken JSX</div>
          animate="{{" opacity:  ,1, y: 0}}">;
          className="text - center: mb-12">",";
          <div: className="flex items - center justify-center mb-4">",";
            <HelpCircle: className="h - 8 w-8 text-blue-600 mr-3" />",";
            <h1: className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>",",;
          <p: className = "text-xl text-gray-600 max-w-2xl mx-auto">",",;
            Find: answers to common questions about our services, processes, and solutions.;
        </motion.div>;
        {/* comment */}";
        <div className="space - y-4">", {};
              transition="{{" delay: index: * 0.1}}">;
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">";
              <div>Broken JSX</div>
                onClick = "{()" => toggleItem(index)}";
                className="w-full: px-6 py-4 text-left flex items-center justify-between hover: bg-gray-50: transition-colors",";";
    <div className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">";
      <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,;
        {/* comment */}";
          className="&apos;text-center" mb-12&apos;>&apos,";
          <div className="&apos;flex" items-center justify-center mb-4&apos;>&apos,";
            <HelpCircle className="&apos;h-8" w-8 text-blue-600 mr-3&apos;       />&apos;";
            <h1 className="&apos;text-4xl" font-bold text-gray-900&apos;>Frequently Asked Questions&apos;</h1>";
          <p className="&apos;text-xl" text-gray-600 max-w-2xl mx-auto&apos;>;
            Find answers to common questions about our services, processes, and solutions.&apos;";
        <div className="&apos;space-y-4&apos;">;
          {faqs.map((faq, index) => (&apos}";
              key = "{index}
              transition="{{" delay: index * 0.1   }}";
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">";
              transition="{{" delay: index * 0.1 }}";
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">;";
                className = "w-full px-6 py-4 text-left flex items-center justify-between hover: bg-gray-50 transition-colors",;
              >,";
                <span className="text-lg font-semibold text-gray-900 pr-4"> {faq.question}

        {/* FAQ Items */}
        <div>Broken JSX</div>
          className="space-y-4">;
          {};
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">;
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>;
                  {};
                  )}
                </button>;
                {};
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>;
                  </motion.div>;
                )}
              </motion.div>;
            ));
          ) : (;
            <div className="text-center py-12">;
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />;
              <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>;
              <p className="text-gray-600 mb-6">;
                Try adjusting your search terms or category filter.;
              </p>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors">;
                <MessageCircle className="w-4 h-4 mr-2" />;
                Contact Support;
              </Link>;
            </div>;
          )}
        </motion.div>;
;
        {/* FAQ Items */};
        <motion.div;
          initial={{ opacity: 0, y: 30 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.4 }};
          className="max - w-4xl mx - auto space - y-4";
        >;
          <AnimatePresence>;
            {filteredFAQs.map ( (faq, index) => (<motion.div;
                key={faq.id};
                initial={{ opacity: 0, y: 20 }};
                animate={{ opacity: 1, y: 0 }};
                exit={{ opacity: 0, y: -20 }};
                transition={{ duration: 0.3, delay: index * 0.1 }};
                className="bg - white / 10 backdrop - blur - lg border border - white / 20 rounded - xl overflow - hidden";
              >;
                <button aria-label="Button" aria - label="Button" aria - label="Button" aria - label="Button" onClick={ () => toggleItem (faq.id) };
                  className="w - full px - 6 py - 6 text - left flex items - center justify - between hover:bg - white / 5 transition - colors";
                >;
                  <div role="button" className="flex items - center space - x-4">;
                    <div role="button" className="w - 10 h - 10 bg - gradient - to - r from - cyan - 500 to - blue - 500 rounded - lg flex items - center justify - center">;
                      <faq.icon className="w - 5 h - 5 text - white"       />;
                    </div>;
                    <div>;
                      <h3 className="text - lg font - semibold text - white mb - 1">;
                        {faq.question};
                      </h3>;
                      <span className="text - sm text - cyan - 400 bg - cyan - 400 / 10 px - 3 py - 1 rounded - full">;
                        {faq.category};
                      </span>;
                    </div>;
                  </div>;
                  {activeItem === faq.id ? (<ChevronUp className="w - 6 h - 6 text - cyan - 400"       />) : (<ChevronDown className="w - 6 h - 6 text - gray - 400"       />) };
                </button>;
;
                <AnimatePresence>;
                  {activeItem === faq.id && (<motion.div;
                      initial={{ height: 0, opacity: 0 }};
                      animate={{ height: 'auto', opacity: 1 }};
                      exit={{ height: 0, opacity: 0 }};
                      transition={{ duration: 0.3 }};
                      className="overflow - hidden";
                    >;
                      <div role="button" className="px - 6 pb - 6">;
                        <div role="button" className="border - t border - white / 20 pt - 4">;
                          <p className="text - gray - 300 leading - relaxed">;
                            {faq.answer};
                          </p>;
                        </div>;
                      </div>;
                    </motion.div>) };
                </AnimatePresence>;
              </motion.div>) ) };
          </AnimatePresence>;
        </motion.div>;
;
        {/* Contact Section */};
        <motion.div;
          initial={{ opacity: 0, y: 30 }};
          animate={{ opacity: 1, y: 0 }};
          transition={{ duration: 0.8, delay: 0.6 }};
          className="mt - 20 text - center";
        >;
          <div role="button" className="bg - gradient - to - r from - cyan - 500 / 20 to - blue - 500 / 20 backdrop - blur - lg rounded - 2xl p - 12 border border - cyan - 500 / 30">;
            <h2 className="text - 3xl font - bold text - white mb - 6">;
              Still Have Questions?;
            </h2>;
            <p className="text - xl text - gray - 300 mb - 8 max - w-2xl mx - auto">;
              Can't find the answer you're looking for? Our team is here to;
              help. Get in touch with us for personalized assistance.;
            </p>;
;
            <div role="button" className="grid md:grid - cols - 3 gap - 6 mb - 8 max - w-2xl mx - auto">;
              <div role="button" className="flex items - center justify - center space - x-3 text - gray - 300">;
                <Phone className="w - 5 h - 5 text - cyan - 400"       />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div role="button" className="flex items - center justify - center space - x-3 text - gray - 300">;
                <Mail className="w - 5 h - 5 text - cyan - 400"       />;
                <span > kleber@ziontechgroup.com</span>;
              </div>;
              <div role="button" className="flex items - center justify - center space - x-3 text - gray - 300">;
                <Globe className="w - 5 h - 5 text - cyan - 400"       />;
                <span > 24 / 7 Support</span>;
              </div>;
            </div>;
;
            <div role="button" className="flex flex - col sm:flex - row gap - 4 justify - center">;
              <Link;
                to="/contact";
                className="bg - gradient - to - r from - cyan - 500 to - blue - 500 text - white px - 8 py - 4 rounded - lg font - semibold text - lg hover:from - cyan - 600 hover:to - blue - 600 transition - all duration - 200 transform hover:-translate - y-1 shadow - lg hover:shadow - xl";
              >;
                Contact Us;
              </Link>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-6 py-3 bg-zion-cyan-dark text-white rounded-lg font-medium hover:bg-zion-cyan-darker transition-colors">;
                <Phone className="w-5 h-5 mr-2" />;
                Call Now;
              </a>;
              <div>Broken JSX</div>
                className="inline-flex items-center px-6 py-3 bg-zion-purple-dark text-white rounded-lg font-medium hover:bg-zion-purple-darker transition-colors">;
                <Mail className="w-5 h-5 mr-2" />;
                Send Email;
              </a>;
                </span>";
                <div>Broken JSX</div>
                    openItems.includes(index) ? "rotate-180" : ""}"}";">;
               />;
              </button>;
              {};
                  exit = "{{" height:  ,0, opacity: 0}}">;
                  className="px-6: pb-4">",",;
                  <p: className="text-gray-600 leading-relaxed">",",;
                <ChevronDown>;
openItems.includes(index) ? &apos;rotate-180&apos; : &apos,&apos}`}

               />&apos;&apos;
              {openItems.includes(index) && (}";
                  initial = "{{" height: 0, opacity: 0 }}";
                  animate="{{" height: &apos,auto&apos, opacity: 1 }}";
                  exit="{{" height: 0, opacity: 0 }}";
                  className="px-6 pb-4">;";
                  <p className = "text-gray-600 leading-relaxed"> {faq.answer}

      {/* Additional Resources */}
      <section className="py-20">;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div>Broken JSX</div>
            className="text-center max-w-4xl mx-auto">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Additional <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Resources</span>;
            </h2>;
            <p className="text-xl text-zion-slate-light mb-12">;
              Explore our knowledge base, documentation, and community resources;
            </p>;

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
              {};
                { icon: BookOpen, title: 'Documentation', description: 'Comprehensive guides and API references', link: '/docs' },;
                { icon: Globe, title: 'Knowledge Base', description: 'Articles, tutorials, and best practices', link: '/knowledge' },;
                { icon: Users, title: 'Community', description: 'Connect with other users and developers', link: '/community' },;
                { icon: Shield, title: 'Support Portal', description: 'Submit tickets and track requests', link: '/support' }
              ].map((resource, index) => (;
                <div>Broken JSX</div>
                  className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300">;
                  <resource.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />;
                  <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>;
                  <p className="text-zion-slate-light text-sm mb-4">{resource.description}</p>;
                  <div>Broken JSX</div>
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors text-sm font-medium">;
                    Learn More;
                    <ChevronDown className="ml-1 w-4 h-4 rotate-[-90deg]" />;
                  </Link>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </div>;
  )}
export default FAQ;
))))))))))))