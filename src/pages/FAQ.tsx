import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ; ChevronDown,; ChevronUp,; Search,; HelpCircle,; MessageCircle,; Phone,; Mail,; MapPin,; Clock,; Zap,; Shield,; Users,; Award,; Globe,; Lightbulb; } from 'lucide-react';
;
export default function FAQ() {;
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<any>([]);
;
  const toggleItem = (index: number) => {;
    setOpenItems(prev =>;
      prev.includes(index);
        ? prev.filter(i => i !== index);
        : [...prev, index];
    );
  };
;
  const faqCategories = [;
    {;
      name: 'General Questions',;
      icon: HelpCircle,;
      questions: [;
        {;
          question: 'What is Zion Tech Group?',;
          answer: 'Zion Tech Group is a leading technology company specializing in AI-powered solutions, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to drive innovation and growth.';
        },;
        {;
          question: 'Where is Zion Tech Group located?',;
          answer: 'Our headquarters is located at 364 E Main St STE 1008, Middletown, DE 19709. We serve clients globally with operations in 25+ countries.';
        },;
        {;
          question: 'What industries do you serve?',;
          answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government sectors. Our solutions are adaptable to any industry that can benefit from AI and digital transformation.';
        },;
        {;
          question: 'How long has Zion Tech Group been in business?',;
          answer: 'Zion Tech Group was founded in 2018 and has been delivering innovative technology solutions for over 5 years. We have successfully completed 500+ projects and serve 100+ enterprise clients.';
        };
      ];
    },;
    {;
      name: 'AI & Technology Services',;
      icon: Zap,;
      questions: [;
        {;
          question: 'What AI services do you offer?',;
          answer: 'We offer comprehensive AI services including AI Business Intelligence, AI Sales Copilot, AI Compliance Assistant, LLM Content Studio, and custom AI solutions. Our AI services help automate processes, gain insights, and transform business operations.';
        },;
        {;
          question: 'How do you ensure AI solutions are ethical and secure?',;
          answer: 'We follow strict AI ethics guidelines and implement enterprise-grade security measures. All our AI solutions include bias detection, explainability features, and comply with industry standards and regulations.';
        },;
        {;
          question: 'Can you customize AI solutions for our specific needs?',;
          answer: 'Absolutely! We specialize in custom AI solutions tailored to your specific business requirements. Our team works closely with you to understand your needs and develop solutions that deliver measurable results.';
        },;
        {;
          question: 'What is the typical timeline for AI project implementation?',;
          answer: 'AI project timelines vary based on complexity and scope. Simple AI integrations can take 4-8 weeks, while complex enterprise AI solutions may take 3-6 months. We provide detailed project timelines during the planning phase.';
        };
      ];
    },;
    {;
      name: 'Cloud & DevOps',;
      icon: Shield,;
      questions: [;
        {;
          question: 'What cloud platforms do you support?',;
          answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. Our team has certifications in multiple cloud platforms and can help you choose the best solution for your needs.';
        },;
        {;
          question: 'How do you ensure cloud security?',;
          answer: 'We implement enterprise-grade security measures including encryption, access controls, monitoring, and compliance frameworks. Our cloud solutions are ISO 27001 certified and SOC 2 Type II compliant.';
        },;
        {;
          question: 'What DevOps practices do you implement?',;
          answer: 'We implement modern DevOps practices including CI/CD pipelines, Infrastructure as Code, automated testing, monitoring, and continuous deployment. This ensures faster delivery and higher quality software.';
        },;
        {;
          question: 'Can you help optimize our cloud costs?',;
          answer: 'Yes! Our Cloud FinOps Optimizer service helps analyze cloud spending, identify optimization opportunities, and implement cost-saving measures. We typically help clients reduce cloud costs by 20-40%.';
        };
      ];
    },;
    {;
      name: 'Support & Services',;
      icon: MessageCircle,;
      questions: [;
        {;
          question: 'What support options do you provide?',;
          answer: 'We provide 24/7 technical support, dedicated account managers, emergency response services, and comprehensive documentation. Our support team is available through phone, email, and our support portal.';
        },;
        {;
          question: 'How quickly do you respond to support requests?',;
          answer: 'We provide different response time SLAs based on issue priority. Critical issues receive immediate attention, while standard requests are typically resolved within 4-8 hours. Emergency support is available 24/7.';
        },;
        {;
          question: 'Do you provide training for our team?',;
          answer: 'Yes! We provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing education as new features are added.';
        },;
        {;
          question: 'Can you help with system upgrades and migrations?',;
          answer: 'Absolutely! We provide migration services, system upgrades, and technology refresh services. Our team ensures smooth transitions with minimal downtime and comprehensive testing.';
        };
      ];
    },;
    {;
      name: 'Security & Compliance',;
      icon: Shield,;
      questions: [;
        {;
          question: 'What security certifications do you have?',;
          answer: 'We are ISO 27001 certified and SOC 2 Type II compliant. We also maintain certifications in various cloud platforms and security frameworks. Our security practices meet or exceed industry standards.';
        },;
        {;
          question: 'How do you protect client data?',;
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance monitoring. All client data is protected with industry-standard security protocols.';
        },;
        {;
          question: 'Do you comply with industry regulations?',;
          answer: 'Yes, we comply with major industry regulations including GDPR, HIPAA, SOX, and industry-specific requirements. We can help ensure your solutions meet all applicable compliance standards.';
        },;
        {;
          question: 'What happens in case of a security incident?',;
          answer: 'We have comprehensive incident response procedures including immediate notification, containment, investigation, and resolution. We provide detailed incident reports and work to prevent future occurrences.';
        };
      ];
    };
  ];
;
  const filteredCategories = faqCategories.map(category => ({;
    ...category,;
    questions: category.questions.filter(q =>;
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||;
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    );
  })).filter(category => category.questions.length > 0);
;
  const contactInfo = [;
    {;
      icon: Phone,;
      title: 'Call Us',;
      value: '+1 302 464 0950',;
      description: 'Speak directly with our experts',;
      action: 'tel:+13024640950',;
      color: 'from-green-500 to-emerald-500';
    },;
    {;
      icon: Mail,;
      title: 'Email Us',;
      value: 'kleber@ziontechgroup.com',;
      description: 'Send us a detailed message',;
      action: 'mailto:kleber@ziontechgroup.com',;
      color: 'from-blue-500 to-cyan-500';
    },;
    {;
      icon: MapPin,;
      title: 'Visit Us',;
      value: '364 E Main St STE 1008, Middletown DE 19709',;
      description: 'Our headquarters location',;
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',;
      color: 'from-purple-500 to-pink-500';
    },;
    {;
      icon: Clock,;
      title: 'Business Hours',;
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',;
      description: '24/7 emergency support available',;
      action: null,;
      color: 'from-orange-500 to-red-500';
    };
  ];
;
  return (;
    <div className="min-h-screen bg-slate-900">;""
      <SEO";""
        title="Frequently Asked Questions - Zion Tech Group";""
        description="Find answers to common questions about Zion Tech Group's AI services, cloud solutions, cybersecurity, and digital transformation services.";""
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI services, cloud solutions, cybersecurity";"
      />;""
      {/* Header */}";""
      <section className="pt-32 pb-16 px-4">";""
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};"
            transition={{ duration: 0.6 }};""
          >";""
            <div className="flex items-center justify-center space-x-3 mb-6">";""
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">";""
                <HelpCircle className="w-8 h-8 text-white" />;"
              </div>;""
            </div>";""
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">;"
              Frequently Asked Questions;""
            </h1>";""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;
              Find answers to common questions about our services, technology solutions, and how we can help transform your business.;
            </p>;
          </motion.div>;
        </div>;"
      </section>;""
      {/* Search */}";""
      <section className="py-8 px-4">";""
        <div className="max-w-2xl mx-auto">";""
          <div className="relative">";""
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;""
            <input";""
              type="text";""
              placeholder="Search questions...";"
              value={searchQuery};""
              onChange={(e) = / / /> setSearchQuery(e.target.value)}";""
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent";
            />;
          </div>;
        </div>;"
      </section>;""
      {/* FAQ Categories */}";""
      <section className="py-16 px-4">";""
        <div className="max-w-7xl mx-auto">";""
          <div className="space-y-12">;
            {filteredCategories.map((category, categoryIndex) => (;
              <motion.div;
                key={category.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}";""
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50";""
              >";""
                <div className="flex items-center space-x-4 mb-8">";""
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">";""
                    <category.icon className="w-6 h-6 text-white" />;""
                  </div>";""
                  <h2 className="text-2xl font-bold text-white">;
                    {category.name};
                  </h2>;"
                </div>;";""
                <div className="space-y-4">;
                  {category.questions.map((item, index) => {;
                    const itemIndex = `${categoryIndex}-${index}`;
                    const isOpen = openItems.includes(itemIndex);
;
                    return (;
                      <motion.div;
                        key={index};
                        initial={{ opacity: 0, y: 10 }};
                        whileInView={{ opacity: 1, y: 0 }};"
                        viewport={{ once: true }};""
                        transition={{ duration: 0.4, delay: index * 0.1 }}";""
                        className="bg-slate-700/30 rounded-xl border border-slate-600/30 overflow-hidden";
                      >;"
                        <button;""
                          onClick={() => toggleItem(itemIndex)}";""
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors";""
                        >";""
                          <span className="text-white font-medium">;
                            {item.question};"
                          </span>;""
                          {isOpen ? (";""
                            <ChevronUp className="w-5 h-5 text-gray-400" />;""
                          ) : (";""
                            <ChevronDown className="w-5 h-5 text-gray-400" />;
                          )};
                        </button>;
                        <AnimatePresence>;
                          {isOpen && (;
                            <motion.div;
                              initial={{ height: 0, opacity: 0 }};
                              animate={{ height: 'auto', opacity: 1 }};"
                              exit={{ height: 0, opacity: 0 }};""
                              transition={{ duration: 0.3 }}";""
                              className="px-6 pb-4";""
                            >";""
                              <p className="text-gray-300 leading-relaxed">;
                                {item.answer};
                              </p>;
                            </motion.div>;
                          )};
                        </AnimatePresence>;
                      </motion.div>;
                    );
                  })};
                </div>;
              </motion.div>;
            ))};
          </div>;
        </div>;"
      </section>;""
      {/* Contact Section */}";""
      <section className="py-16 px-4 bg-slate-800/30">";""
        <div className="max-w-7xl mx-auto">;
          <motion.div;
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};"
            viewport={{ once: true }};""
            transition={{ duration: 0.6 }}";""
            className="text-center mb-16";""
          >";""
            <h2 className="text-3xl font-bold text-white mb-6">;"
              Still Have Questions?;""
            </h2>";""
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
              Our team is here to help. Contact us for personalized assistance and expert guidance.;
            </p>;"
          </motion.div>;";""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">;
            {contactInfo.map((contact, index) => (;
              <motion.div;
                key={contact.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};"
                viewport={{ once: true }};""
                transition={{ duration: 0.6, delay: index * 0.1 }}";""
                className="text-center";"
              >;""
                <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>";""
                  <contact.icon className="w-8 h-8 text-white" />;""
                </div>";""
                <h3 className="text-lg font-semibold text-white mb-2">;"
                  {contact.title};""
                </h3>";""
                <p className="text-gray-300 mb-2">;"
                  {contact.value};""
                </p>";""
                <p className="text-sm text-gray-400 mb-4">;
                  {contact.description};
                </p>;
                {contact.action && (;"
                  <a;""
                    href={contact.action}";""
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm";
                  >;
                    {contact.title};
                  </a>;
                )};
              </motion.div>;
            ))};
          </div>;
        </div>;
      </section>;
    </div>;
  );"
};";""