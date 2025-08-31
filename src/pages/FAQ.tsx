import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Search, 
  ChevronDown, 
  ChevronUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Users,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Star,
  Award,
  Globe,
  Lock,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const FAQ: React.FC = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqCategories = [
    {
      name: 'General Services',
      icon: Globe,
      questions: [
        {
          question: 'What services does Zion Tech Group offer?',
          answer: 'We offer comprehensive technology solutions including AI development, quantum computing consulting, cybersecurity services, cloud infrastructure, custom software development, and digital transformation consulting. Our services are tailored to enterprise needs and designed to drive innovation and efficiency.'
        },
        {
          question: 'Do you work with small businesses or only enterprises?',
          answer: 'While we specialize in enterprise solutions, we work with businesses of all sizes. We can scale our services to meet the needs of small and medium businesses, providing cost-effective solutions that grow with your business.'
        },
        {
          question: 'What industries do you specialize in?',
          answer: 'We have experience across multiple industries including healthcare, finance, manufacturing, retail, logistics, and technology. Our team understands industry-specific challenges and compliance requirements, allowing us to deliver tailored solutions.'
        },
        {
          question: 'How do you ensure project quality and success?',
          answer: 'We follow industry best practices including agile methodologies, continuous testing, regular client communication, and milestone reviews. Our team includes certified professionals with extensive experience in delivering complex technology solutions.'
        }
      ]
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      questions: [
        {
          question: 'What types of AI solutions can you develop?',
          answer: 'We develop a wide range of AI solutions including predictive analytics, natural language processing, computer vision, recommendation systems, autonomous systems, and custom AI models. Our solutions are designed to integrate seamlessly with existing systems.'
        },
        {
          question: 'How do you handle data privacy in AI projects?',
          answer: 'Data privacy is paramount in all our AI projects. We implement data anonymization, encryption, access controls, and compliance with regulations like GDPR and HIPAA. We also provide transparent data handling policies and regular privacy audits.'
        },
        {
          question: 'Can you integrate AI with our existing systems?',
          answer: 'Yes, we specialize in integrating AI solutions with existing enterprise systems. We use APIs, microservices, and modern integration patterns to ensure seamless connectivity while maintaining system stability and performance.'
        },
        {
          question: 'How long does it take to develop an AI solution?',
          answer: 'Development time varies based on complexity, ranging from 4-12 weeks for basic AI models to 6-18 months for complex enterprise AI systems. We provide detailed project timelines during the planning phase.'
        }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Zap,
      questions: [
        {
          question: 'What quantum computing services do you offer?',
          answer: 'We offer quantum computing consulting, algorithm development, quantum software development, and integration services. We work with leading quantum hardware providers and can help you explore quantum advantage for specific use cases.'
        },
        {
          question: 'Is quantum computing ready for business use?',
          answer: 'While quantum computing is still emerging, certain applications like optimization, cryptography, and material science are showing promise. We help businesses assess quantum readiness and develop hybrid classical-quantum solutions.'
        },
        {
          question: 'How do you stay current with quantum developments?',
          answer: 'We maintain partnerships with leading quantum research institutions, participate in quantum computing consortia, and have a dedicated team that continuously monitors and evaluates quantum computing advancements and applications.'
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      questions: [
        {
          question: 'What cybersecurity services do you provide?',
          answer: 'We provide comprehensive cybersecurity services including security assessments, penetration testing, incident response, compliance consulting, security architecture design, and ongoing security monitoring and management.'
        },
        {
          question: 'How do you stay ahead of emerging threats?',
          answer: 'We maintain threat intelligence feeds, participate in security research communities, conduct regular security research, and continuously update our security practices based on the latest threat landscape and industry best practices.'
        },
        {
          question: 'What compliance standards do you support?',
          answer: 'We support major compliance standards including SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and industry-specific regulations. We can help you achieve and maintain compliance for your specific requirements.'
        }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      questions: [
        {
          question: 'What cloud platforms do you work with?',
          answer: 'We work with all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions. We help you choose the right platform for your needs and optimize costs while maintaining performance and security.'
        },
        {
          question: 'Can you help migrate our existing systems to the cloud?',
          answer: 'Yes, we provide comprehensive cloud migration services including assessment, planning, migration execution, and post-migration optimization. We ensure minimal downtime and maintain data integrity throughout the process.'
        },
        {
          question: 'How do you ensure cloud security?',
          answer: 'We implement multi-layered security including identity and access management, network security, data encryption, monitoring, and compliance controls. We follow cloud security best practices and regularly audit security configurations.'
        }
      ]
    },
    {
      name: 'Support & Maintenance',
      icon: Users,
      questions: [
        {
          question: 'What support options do you offer?',
          answer: 'We offer multiple support tiers including 24/7 emergency support, business hours support, and managed services. Our support includes monitoring, maintenance, updates, and rapid response to issues.'
        },
        {
          question: 'What are your response times for support?',
          answer: 'Response times depend on your support tier. Standard support responds within 24 hours, priority support within 4 hours, and enterprise support within 2 hours during business hours.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes! We provide comprehensive training for your team on all implemented solutions. This includes user training, administrator training, and ongoing education as new features are added.'
        },
        {
          question: 'How do you handle system updates and maintenance?',
          answer: 'We handle all system updates, security patches, and maintenance automatically. We schedule maintenance during low-traffic periods and provide advance notice for any planned downtime.'
        }
      ]
    },
    {
      name: 'Security & Compliance',
      icon: Lock,
      questions: [
        {
          question: 'What security certifications do you have?',
          answer: 'We are ISO 27001 certified and SOC 2 Type II compliant. We also maintain certifications in various cloud platforms and security frameworks. Our security practices meet or exceed industry standards.'
        },
        {
          question: 'How do you protect client data?',
          answer: 'We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance monitoring. All client data is protected with industry-standard security protocols.'
        },
        {
          question: 'Do you comply with industry regulations?',
          answer: 'Yes, we comply with major industry regulations including GDPR, HIPAA, SOX, and industry-specific requirements. We can help ensure your solutions meet all applicable compliance standards.'
        },
        {
          question: 'What happens in case of a security incident?',
          answer: 'We have comprehensive incident response procedures including immediate notification, containment, investigation, and resolution. We provide detailed incident reports and work to prevent future occurrences.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 302 464 0950',
      link: 'tel:+13024640950',
      description: 'Available during business hours',
      action: 'tel:+13024640950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',
      action: 'mailto:kleber@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      description: '24/7 emergency support available',
      action: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions - Zion Tech Group"
        description="Find answers to common questions about our AI, quantum computing, cybersecurity, and technology services. Get comprehensive information about our solutions and support."
        keywords="FAQ, frequently asked questions, AI services, quantum computing, cybersecurity, cloud services, Zion Tech Group, technology consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
                <MessageCircle className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">FAQ</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Find answers to common questions about our services, processes, and solutions. 
                Can't find what you're looking for? Contact our team for personalized assistance.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search questions or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {filteredCategories.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-slate-400">
                  Try adjusting your search terms or browse all categories below.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                          <category.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-white">
                            {category.name}
                          </h2>
                          <p className="text-slate-400">
                            {category.questions.length} questions
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {category.questions.map((item, questionIndex) => {
                          const key = `${categoryIndex}-${questionIndex}`;
                          const isOpen = openItems[key];
                          
                          return (
                            <motion.div
                              key={questionIndex}
                              initial={false}
                              animate={{ height: isOpen ? 'auto' : 'auto' }}
                              className="border border-white/10 rounded-lg overflow-hidden"
                            >
                              <button
                                onClick={() => toggleItem(categoryIndex, questionIndex)}
                                className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                              >
                                <span className="font-medium text-white pr-4">
                                  {item.question}
                                </span>
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                )}
                              </button>
                              
                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                                      <p className="text-slate-300 leading-relaxed">
                                        {item.answer}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our team of experts is here to help. Contact us for personalized assistance 
                and detailed information about our services and solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-full bg-white/5 backdrop-blur-sm border border-white/20 hover:border-cyan-500/50 transition-all duration-300 text-center rounded-xl p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${info.color} mb-4`}>
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h3>
                    
                    <p className="text-cyan-400 font-medium mb-2">
                      {info.value}
                    </p>
                    
                    <p className="text-slate-400 text-sm mb-4">
                      {info.description}
                    </p>
                    
                    {info.action && (
                      <a
                        href={info.action}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      >
                        {info.title}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mt-12"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Our Team
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology solutions can transform your business. 
                Schedule a consultation with our experts today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </a>
                
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
