import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Rocket, 
  Star, 
  Target, 
  BarChart3, 
  Cpu, 
  Lock, 
  Heart, 
  ShoppingCart, 
  MessageCircle, 
  HelpCircle, 
  FileText, 
  Briefcase, 
  Newspaper, 
  TrendingUp, 
  Code, 
  Atom, 
  Network, 
  Eye, 
  Leaf, 
  Satellite, 
  Database, 
  Server, 
  Smartphone, 
  Gauge, 
  CheckCircle, 
  DollarSign, 
  Calendar, 
  BookOpen, 
  Truck, 
  ExternalLink,
  Globe,
  ArrowRight,
  Search
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  featured?: boolean;
}

interface FAQCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: 'General Questions',
    icon: <Globe className="w-6 h-6" />,
    description: 'Basic information about Zion Tech Group',
    items: [
      {
        question: 'What is Zion Tech Group?',
        answer: 'Zion Tech Group is a leading technology company specializing in AI solutions, cloud infrastructure, cybersecurity, and emerging technologies. We help businesses transform their operations through cutting-edge technology solutions.',
        category: 'general'
      },
      {
        question: 'Where is Zion Tech Group located?',
        answer: 'We are headquartered at 364 E Main St STE 1008, Middletown, DE 19709, with a global presence serving clients worldwide.',
        category: 'general'
      },
      {
        question: 'How can I contact Zion Tech Group?',
        answer: 'You can reach us through multiple channels: Phone: +1 302 464 0950, Email: kleber@ziontechgroup.com, or through our contact form on the website.',
        category: 'general'
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and more. Our solutions are designed to be adaptable across various business sectors.',
        category: 'general'
      }
    ]
  },
  {
    title: 'AI & Machine Learning Services',
    icon: <Brain className="w-6 h-6" />,
    description: 'Questions about our AI and ML solutions',
    items: [
      {
        question: 'What AI services do you offer?',
        answer: 'We offer comprehensive AI services including AI Business Intelligence, AI Workflow Orchestrator, AI Compliance Assistant, AI Sales Copilot, AI Content Creation, AI Cybersecurity, and many more specialized AI solutions.',
        category: 'ai'
      },
      {
        question: 'How do you ensure AI solutions are ethical and secure?',
        answer: 'We implement robust ethical AI frameworks, ensure data privacy compliance, and use secure development practices. All our AI solutions include built-in security measures and compliance features.',
        category: 'ai'
      },
      {
        question: 'Can AI solutions integrate with existing systems?',
        answer: 'Yes, our AI solutions are designed with integration in mind. We provide APIs and connectors to seamlessly integrate with your existing ERP, CRM, and other business systems.',
        category: 'ai'
      },
      {
        question: 'What is the implementation timeline for AI projects?',
        answer: 'Implementation timelines vary based on complexity, typically ranging from 4-12 weeks for standard solutions to 6-18 months for enterprise-wide AI transformations.',
        category: 'ai'
      }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Cloud computing and infrastructure services',
    items: [
      {
        question: 'What cloud platforms do you support?',
        answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud environments. We help you choose the best platform for your specific needs.',
        category: 'cloud'
      },
      {
        question: 'How do you ensure cloud security?',
        answer: 'We implement industry-standard security practices including encryption, identity management, network security, and compliance frameworks like SOC2, ISO 27001, and GDPR.',
        category: 'cloud'
      },
      {
        question: 'What is FinOps and how can it help my business?',
        answer: 'FinOps (Financial Operations) helps optimize cloud costs through better resource management, cost monitoring, and optimization strategies. Our FinOps Advisor service can reduce your cloud spending by 20-40%.',
        category: 'cloud'
      },
      {
        question: 'Do you provide 24/7 cloud monitoring?',
        answer: 'Yes, we offer comprehensive 24/7 cloud monitoring and support services, including automated alerting, performance monitoring, and rapid incident response.',
        category: 'cloud'
      }
    ]
  },
  {
    title: 'Cybersecurity & Privacy',
    icon: <Shield className="w-6 h-6" />,
    description: 'Security and compliance solutions',
    items: [
      {
        question: 'What cybersecurity services do you provide?',
        answer: 'We offer comprehensive cybersecurity services including AI-powered threat detection, zero-trust network access, security headers implementation, compliance automation, and incident response.',
        category: 'security'
      },
      {
        question: 'How do you handle data privacy and GDPR compliance?',
        answer: 'We provide DSR (Data Subject Rights) portals, automated compliance workflows, and ensure all solutions meet GDPR, CCPA, and other privacy regulations. Our AI Compliance Assistant automates much of the compliance process.',
        category: 'security'
      },
      {
        question: 'What is Zero Trust Network Access?',
        answer: 'Zero Trust Network Access (ZTNA) is a security model that requires verification for every user and device before granting access to resources, regardless of location. We implement comprehensive ZTNA solutions.',
        category: 'security'
      },
      {
        question: 'How quickly can you respond to security incidents?',
        answer: 'Our incident response team can respond within 15 minutes for critical issues, with full containment and resolution typically completed within 4-8 hours depending on complexity.',
        category: 'security'
      }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: <ShoppingCart className="w-6 h-6" />,
    description: 'Specialized software-as-a-service solutions',
    items: [
      {
        question: 'What are Micro SaaS solutions?',
        answer: 'Micro SaaS solutions are focused, specialized software tools designed for specific business needs. They are lightweight, cost-effective, and easy to implement compared to enterprise software.',
        category: 'saas'
      },
      {
        question: 'How do Micro SaaS solutions differ from traditional software?',
        answer: 'Micro SaaS solutions are typically more affordable, easier to implement, focused on specific use cases, and provide faster ROI. They are designed for businesses that need targeted functionality without complex enterprise features.',
        category: 'saas'
      },
      {
        question: 'Can Micro SaaS solutions scale with my business?',
        answer: 'Yes, our Micro SaaS solutions are designed to scale with your business. They include flexible pricing tiers and can be upgraded to more comprehensive solutions as your needs grow.',
        category: 'saas'
      },
      {
        question: 'What support do you provide for Micro SaaS users?',
        answer: 'We provide comprehensive support including onboarding, training, technical support, and regular updates. Our helpdesk platform ensures you get the assistance you need when you need it.',
        category: 'saas'
      }
    ]
  },
  {
    title: 'Pricing & Billing',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Cost and payment information',
    items: [
      {
        question: 'How do you structure your pricing?',
        answer: 'We offer flexible pricing models including subscription-based services, project-based pricing, and custom enterprise solutions. We provide transparent pricing with no hidden fees.',
        category: 'pricing'
      },
      {
        question: 'Do you offer free trials or demos?',
        answer: 'Yes, we offer free trials for many of our services and provide comprehensive demos to help you understand how our solutions can benefit your business.',
        category: 'pricing'
      },
      {
        question: 'Can I customize service packages?',
        answer: 'Absolutely! We work with you to create customized service packages that meet your specific needs and budget. We believe in flexible solutions that grow with your business.',
        category: 'pricing'
      },
      {
        question: 'What payment options do you accept?',
        answer: 'We accept major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. We also offer annual payment discounts.',
        category: 'pricing'
      }
    ]
  },
  {
    title: 'Implementation & Support',
    icon: <Users className="w-6 h-6" />,
    description: 'Getting started and ongoing support',
    items: [
      {
        question: 'How long does implementation take?',
        answer: 'Implementation timelines vary by service complexity. Simple Micro SaaS solutions can be live in days, while complex AI implementations may take several months. We provide detailed project timelines upfront.',
        category: 'support'
      },
      {
        question: 'What training and support do you provide?',
        answer: 'We provide comprehensive training, documentation, and ongoing support. This includes user training, technical support, regular check-ins, and continuous improvement recommendations.',
        category: 'support'
      },
      {
        question: 'Do you provide ongoing maintenance and updates?',
        answer: 'Yes, we provide continuous maintenance, regular updates, and feature enhancements. Our services include monitoring, backups, security updates, and performance optimization.',
        category: 'support'
      },
      {
        question: 'What happens if I need to scale up or down?',
        answer: 'Our solutions are designed to be flexible. You can easily scale up or down based on your business needs, and we'll help you adjust your service package accordingly.',
        category: 'support'
      }
    ]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (question: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(question)) {
      newExpanded.delete(question);
    } else {
      newExpanded.add(question);
    }
    setExpandedItems(newExpanded);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(category => category.items.length > 0);

  const allCategories = [
    { value: 'all', label: 'All Categories', icon: <Globe className="w-4 h-4" /> },
    { value: 'general', label: 'General', icon: <Globe className="w-4 h-4" /> },
    { value: 'ai', label: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { value: 'cloud', label: 'Cloud', icon: <Cloud className="w-4 h-4" /> },
    { value: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { value: 'saas', label: 'Micro SaaS', icon: <ShoppingCart className="w-4 h-4" /> },
    { value: 'pricing', label: 'Pricing', icon: <DollarSign className="w-4 h-4" /> },
    { value: 'support', label: 'Support', icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <div className="bg-zion-slate-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Find answers to common questions about our services, implementation, and support. Can't find what you're looking for? Contact our team for personalized assistance.
          </motion.p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search questions or answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-cyan-400/30 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-cyan-400/30 rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {allCategories.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-cyan-400">
            Showing {filteredCategories.reduce((total, category) => total + category.items.length, 0)} questions
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-cyan-400">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                  <p className="text-gray-400">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    className="bg-white/5 rounded-lg border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.question)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                    >
                      <span className="font-medium text-white">{item.question}</span>
                      {expandedItems.has(item.question) ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-cyan-400" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedItems.has(item.question) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 pb-4"
                        >
                          <div className="pt-2 border-t border-white/10">
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">
                No questions found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help. Contact us for personalized assistance and expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                Email Us
              </a>
              <a
                href="tel:+13024640950"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium border border-white/20"
              >
                Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
