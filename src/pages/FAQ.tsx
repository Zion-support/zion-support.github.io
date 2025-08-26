import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, ChevronRight, Search, MessageCircle, 
  Briefcase, Shield, Brain, Cloud, Users, Globe 
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: MessageCircle, count: 25 },
    { id: 'general', name: 'General', icon: MessageCircle, count: 8 },
    { id: 'services', name: 'Services', icon: Briefcase, count: 6 },
    { id: 'ai', name: 'AI & Technology', icon: Brain, count: 5 },
    { id: 'security', name: 'Security', icon: Shield, count: 3 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 3 }
  ];

  const faqData = [
    // General Questions
    {
      id: 1,
      question: "What is Zion Tech Group and what do you do?",
      answer: "Zion Tech Group is a leading technology company specializing in AI solutions, cloud services, cybersecurity, and digital transformation. We help businesses leverage cutting-edge technology to drive innovation, efficiency, and growth. Our services include AI consulting, cloud infrastructure, cybersecurity solutions, and comprehensive IT services.",
      category: "general",
      tags: ["company", "services", "overview"]
    },
    {
      id: 2,
      question: "Where is Zion Tech Group located?",
      answer: "Our headquarters is located in Wilmington, Delaware, USA. We serve clients globally and have team members and partners across North America, Europe, and Asia. We also offer remote services and virtual consultations to clients worldwide.",
      category: "general",
      tags: ["location", "global", "remote"]
    },
    {
      id: 3,
      question: "How can I contact Zion Tech Group?",
      answer: "You can reach us through multiple channels: Phone: +1 (302) 464-0950, Email: info@ziontechgroup.com, or through our contact form on the website. We also offer live chat support during business hours and respond to inquiries within 24 hours.",
      category: "general",
      tags: ["contact", "support", "phone", "email"]
    },
    {
      id: 4,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and technology. Our solutions are designed to be industry-agnostic while incorporating industry-specific best practices and compliance requirements.",
      category: "general",
      tags: ["industries", "healthcare", "finance", "manufacturing"]
    },
    {
      id: 5,
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to understand your business needs and discuss potential solutions. This includes a comprehensive assessment of your current technology infrastructure and recommendations for improvement.",
      category: "general",
      tags: ["consultation", "free", "assessment"]
    },
    {
      id: 6,
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on complexity and scope. Small projects typically take 2-4 weeks, medium projects 1-3 months, and large enterprise solutions 3-12 months. We provide detailed project plans with milestones and regular updates throughout the process.",
      category: "general",
      tags: ["timeline", "project", "planning"]
    },
    {
      id: 7,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive ongoing support and maintenance services. This includes 24/7 monitoring, regular updates, security patches, and technical support. We also provide training for your team to ensure smooth operation of implemented solutions.",
      category: "general",
      tags: ["support", "maintenance", "training"]
    },
    {
      id: 8,
      question: "What are your business hours?",
      answer: "Our standard business hours are Monday through Friday, 9:00 AM to 6:00 PM EST. However, we provide 24/7 emergency support for critical systems and offer flexible scheduling for consultations and meetings across different time zones.",
      category: "general",
      tags: ["hours", "support", "emergency"]
    },

    // Services Questions
    {
      id: 9,
      question: "What AI services do you offer?",
      answer: "Our AI services include AI strategy consulting, machine learning model development, natural language processing, computer vision, predictive analytics, and AI-powered automation. We also offer custom AI solution development tailored to your specific business needs.",
      category: "services",
      tags: ["AI", "machine learning", "automation", "consulting"]
    },
    {
      id: 10,
      question: "Do you provide cloud migration services?",
      answer: "Yes, we offer comprehensive cloud migration services including assessment, planning, migration execution, and optimization. We work with major cloud providers like AWS, Azure, and Google Cloud, and ensure minimal downtime during migration.",
      category: "services",
      tags: ["cloud", "migration", "AWS", "Azure"]
    },
    {
      id: 11,
      question: "What cybersecurity services do you provide?",
      answer: "Our cybersecurity services include security assessments, penetration testing, incident response, compliance audits (SOC2, ISO 27001), security awareness training, and 24/7 security monitoring. We also help implement zero-trust security architectures.",
      category: "services",
      tags: ["cybersecurity", "compliance", "penetration testing", "monitoring"]
    },
    {
      id: 12,
      question: "Do you offer managed IT services?",
      answer: "Yes, we provide comprehensive managed IT services including network management, server administration, help desk support, backup and disaster recovery, and proactive monitoring. Our managed services help reduce IT costs while improving system reliability.",
      category: "services",
      tags: ["managed services", "IT", "support", "monitoring"]
    },
    {
      id: 13,
      question: "Can you help with digital transformation?",
      answer: "Absolutely! We specialize in digital transformation consulting and implementation. This includes process automation, legacy system modernization, data strategy, change management, and technology roadmap development to help your business thrive in the digital age.",
      category: "services",
      tags: ["digital transformation", "automation", "modernization", "strategy"]
    },
    {
      id: 14,
      question: "Do you provide training and certification programs?",
      answer: "Yes, we offer comprehensive training programs for your team on various technologies and platforms. This includes AI/ML training, cloud certifications, cybersecurity awareness, and custom training programs tailored to your specific technology stack.",
      category: "services",
      tags: ["training", "certification", "AI", "cloud"]
    },

    // AI & Technology Questions
    {
      id: 15,
      question: "How do you ensure AI solutions are ethical and unbiased?",
      answer: "We implement comprehensive AI ethics frameworks including bias detection, fairness testing, transparency measures, and regular audits. Our AI solutions are designed with explainability in mind, and we follow industry best practices for responsible AI development.",
      category: "ai",
      tags: ["AI ethics", "bias", "transparency", "responsible AI"]
    },
    {
      id: 16,
      question: "What quantum computing services do you offer?",
      answer: "We provide quantum computing consulting, algorithm development, and integration services. While quantum computing is still emerging, we help businesses prepare for quantum-ready applications and explore potential use cases in optimization and cryptography.",
      category: "ai",
      tags: ["quantum computing", "algorithms", "optimization", "cryptography"]
    },
    {
      id: 17,
      question: "How do you handle data privacy in AI solutions?",
      answer: "We implement strict data privacy measures including data anonymization, encryption, access controls, and compliance with GDPR, CCPA, and other privacy regulations. Our AI solutions are designed with privacy-by-design principles and include data governance frameworks.",
      category: "ai",
      tags: ["data privacy", "GDPR", "encryption", "governance"]
    },
    {
      id: 18,
      question: "Can you integrate AI with existing systems?",
      answer: "Yes, we specialize in integrating AI solutions with existing enterprise systems. We use APIs, microservices architecture, and modern integration patterns to ensure seamless connectivity while maintaining system stability and performance.",
      category: "ai",
      tags: ["integration", "APIs", "microservices", "enterprise"]
    },
    {
      id: 19,
      question: "What is the ROI of implementing AI solutions?",
      answer: "AI solutions typically deliver ROI within 6-18 months through increased efficiency, cost reduction, and revenue growth. We provide detailed ROI analysis and case studies, and our solutions are designed with measurable outcomes and KPIs to track success.",
      category: "ai",
      tags: ["ROI", "efficiency", "cost reduction", "KPIs"]
    },

    // Security Questions
    {
      id: 20,
      question: "How do you ensure the security of your own systems?",
      answer: "We maintain enterprise-grade security including SOC2 Type II compliance, regular security audits, penetration testing, and 24/7 security monitoring. Our team includes certified security professionals, and we follow industry best practices for protecting client data.",
      category: "security",
      tags: ["SOC2", "compliance", "audits", "monitoring"]
    },
    {
      id: 21,
      question: "What compliance standards do you support?",
      answer: "We support various compliance standards including SOC2, ISO 27001, HIPAA, PCI DSS, and GDPR. Our solutions are designed with compliance in mind, and we help clients achieve and maintain compliance through proper security controls and documentation.",
      category: "security",
      tags: ["compliance", "SOC2", "ISO 27001", "HIPAA"]
    },
    {
      id: 22,
      question: "How do you handle security incidents?",
      answer: "We have a comprehensive incident response plan including 24/7 monitoring, rapid response teams, communication protocols, and post-incident analysis. We work closely with clients during incidents and provide detailed reports and recommendations for improvement.",
      category: "security",
      tags: ["incident response", "monitoring", "communication", "analysis"]
    },

    // Cloud & DevOps Questions
    {
      id: 23,
      question: "Which cloud providers do you work with?",
      answer: "We work with all major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud solutions. We help clients choose the best cloud strategy and can manage multi-cloud environments for optimal performance and cost efficiency.",
      category: "cloud",
      tags: ["AWS", "Azure", "GCP", "multi-cloud", "hybrid"]
    },
    {
      id: 24,
      question: "Do you provide DevOps consulting and implementation?",
      answer: "Yes, we offer comprehensive DevOps services including CI/CD pipeline setup, infrastructure as code, containerization, monitoring, and automation. We help organizations adopt DevOps practices and implement modern development workflows.",
      category: "cloud",
      tags: ["DevOps", "CI/CD", "infrastructure as code", "automation"]
    },
    {
      id: 25,
      question: "How do you optimize cloud costs?",
      answer: "We provide cloud cost optimization through rightsizing, reserved instances, spot instances, and automated scaling. We use tools to monitor usage patterns and provide recommendations for cost reduction while maintaining performance and reliability.",
      category: "cloud",
      tags: ["cost optimization", "rightsizing", "reserved instances", "scaling"]
    }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, technology solutions, 
            and how we can help transform your business.
          </motion.p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  <span className="text-xs">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredFAQ.length === 0 ? (
            <div className="text-center py-20">
              <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFAQ.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    {expandedItems.has(item.id) ? (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
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
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 mb-4">{item.answer}</p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help. 
              Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Email Us
                <MessageCircle className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">
                Ready to transform your business with cutting-edge technology solutions?
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Get quick answers to your questions</p>
                <a
                  href="mailto:info@ziontechgroup.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  info@ziontechgroup.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with our support team</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Start Chat
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Knowledge Base</h3>
                <p className="text-gray-600 mb-4">Browse our comprehensive guides</p>
                <a
                  href="/docs"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Docs
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;