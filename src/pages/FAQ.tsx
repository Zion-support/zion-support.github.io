import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Star,
  Users,
  Building,
  Globe,
  Server,
  Database,
  Network,
  Lock,
  Heart,
  ShoppingCart,
  MessageCircle,
  HelpCircle,
  FileText,
  Video,
  TestTube,
  Code,
  BookOpen,
  Briefcase,
  Newspaper,
  Target,
  DollarSign,
  Settings,
  Bell,
  Filter,
  Download,
  Edit,
  Trash2,
  Plus,
  Calendar,
  Truck,
  BarChart3,
  Atom,
  Leaf,
  Satellite,
  Cpu,
  Rocket,
  TrendingUp,
  Award,
  Activity,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  QuestionMark,
  Lightbulb,
  Info,
  AlertTriangle,
  Tag
} from 'lucide-react';
import { SEO } from '../components/SEO';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
  tags: string[];
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'all', name: 'All Questions', icon: QuestionMark, count: 0 },
    { id: 'ai-services', name: 'AI Services', icon: Brain, count: 0 },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 0 },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom, count: 0 },
    { id: 'iot', name: 'IoT & Edge Computing', icon: Network, count: 0 },
    { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign, count: 0 },
    { id: 'support', name: 'Support & Training', icon: HelpCircle, count: 0 },
    { id: 'general', name: 'General', icon: Info, count: 0 }
  ];

  const faqData: FAQItem[] = [
    // AI Services
    {
      id: 'ai-1',
      question: 'What AI services does Zion Tech Group offer?',
      answer: 'Zion Tech Group provides comprehensive AI services including AI Business Intelligence, AI Compliance Assistant, AI Sales Copilot, AI Content Marketing Suite, AI Project Management, AI Financial Analytics, AI Customer Support Automation, and many more. Our AI solutions are designed to enhance business operations, improve decision-making, and drive innovation across various industries.',
      category: 'ai-services',
      icon: Brain,
      tags: ['AI', 'Machine Learning', 'Business Intelligence', 'Automation']
    },
    {
      id: 'ai-2',
      question: 'How does AI Business Intelligence work?',
      answer: 'Our AI Business Intelligence platform uses advanced machine learning algorithms to analyze vast amounts of data from multiple sources. It provides real-time insights, predictive analytics, and automated reporting to help businesses make data-driven decisions. The system continuously learns and improves from new data, ensuring increasingly accurate predictions and recommendations.',
      category: 'ai-services',
      icon: Brain,
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Predictive']
    },
    {
      id: 'ai-3',
      question: 'Can AI services integrate with existing systems?',
      answer: 'Yes, our AI services are designed with enterprise-grade integration capabilities. We support REST APIs, webhooks, and standard data formats. Our team works closely with your IT department to ensure seamless integration with existing ERP, CRM, and business systems. We also provide custom integration solutions for unique requirements.',
      category: 'ai-services',
      icon: Brain,
      tags: ['Integration', 'API', 'Enterprise', 'Compatibility']
    },

    // Cloud & Infrastructure
    {
      id: 'cloud-1',
      question: 'What cloud infrastructure solutions do you provide?',
      answer: 'We offer comprehensive cloud infrastructure solutions including Cloud DevOps, IT Infrastructure management, FinOps optimization, and cloud migration services. Our solutions cover AWS, Azure, Google Cloud, and hybrid cloud environments. We help organizations optimize costs, improve performance, and ensure scalability.',
      category: 'cloud-infrastructure',
      icon: Cloud,
      tags: ['Cloud', 'DevOps', 'Infrastructure', 'Migration']
    },
    {
      id: 'cloud-2',
      question: 'How do you ensure cloud security?',
      answer: 'Cloud security is our top priority. We implement multi-layered security measures including identity and access management, encryption at rest and in transit, network security, and continuous monitoring. Our security team follows industry best practices and compliance standards like SOC 2, ISO 27001, and GDPR.',
      category: 'cloud-infrastructure',
      icon: Cloud,
      tags: ['Security', 'Compliance', 'Encryption', 'Monitoring']
    },

    // Security & Compliance
    {
      id: 'security-1',
      question: 'What cybersecurity services do you offer?',
      answer: 'Our cybersecurity portfolio includes AI-powered threat detection, zero-trust network architecture, security headers and CSP implementation, DSR privacy portal, and comprehensive security audits. We provide 24/7 monitoring, incident response, and security training for your team.',
      category: 'security',
      icon: Shield,
      tags: ['Cybersecurity', 'Threat Detection', 'Zero Trust', 'Compliance']
    },
    {
      id: 'security-2',
      question: 'How do you handle data privacy and compliance?',
      answer: 'We implement robust data privacy measures including GDPR and CCPA compliance tools, data encryption, access controls, and regular privacy audits. Our DSR portal allows users to manage their data rights, and we provide comprehensive privacy impact assessments for all projects.',
      category: 'security',
      icon: Shield,
      tags: ['Privacy', 'GDPR', 'CCPA', 'Data Rights']
    },

    // Quantum Computing
    {
      id: 'quantum-1',
      question: 'What quantum computing services are available?',
      answer: 'We offer quantum computing solutions including quantum machine learning, quantum neural networks, and hybrid AI-quantum platforms. Our services help organizations explore quantum advantage for optimization problems, cryptography, and scientific simulations. We provide both cloud-based quantum access and on-premise quantum solutions.',
      category: 'quantum',
      icon: Atom,
      tags: ['Quantum Computing', 'Machine Learning', 'Optimization', 'Cryptography']
    },

    // IoT & Edge Computing
    {
      id: 'iot-1',
      question: 'How do IoT and edge computing solutions work?',
      answer: 'Our IoT and edge computing solutions enable real-time data processing at the network edge, reducing latency and bandwidth requirements. We provide IoT device management, edge analytics, and secure connectivity solutions. This is ideal for applications requiring immediate response times like autonomous vehicles and smart cities.',
      category: 'iot',
      icon: Network,
      tags: ['IoT', 'Edge Computing', 'Real-time', 'Connectivity']
    },

    // Pricing & Billing
    {
      id: 'pricing-1',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including pay-as-you-go, subscription-based plans, and enterprise custom pricing. Our pricing is transparent and scales with your usage. We also provide cost optimization services to help you maximize ROI on our solutions.',
      category: 'pricing',
      icon: DollarSign,
      tags: ['Pricing', 'Billing', 'ROI', 'Optimization']
    },
    {
      id: 'pricing-2',
      question: 'Do you offer free trials?',
      answer: 'Yes, we offer free trials for most of our services. Trial periods typically range from 14 to 30 days depending on the service complexity. During the trial, you get full access to features and our support team to help you evaluate the solution.',
      category: 'pricing',
      icon: DollarSign,
      tags: ['Free Trial', 'Evaluation', 'Support']
    },

    // Support & Training
    {
      id: 'support-1',
      question: 'What support options are available?',
      answer: 'We provide 24/7 technical support through multiple channels including phone, email, live chat, and our help center. Enterprise customers get dedicated support managers and priority response times. We also offer comprehensive training programs and documentation.',
      category: 'support',
      icon: HelpCircle,
      tags: ['Support', 'Training', 'Documentation', '24/7']
    },
    {
      id: 'support-2',
      question: 'Do you provide training and certification?',
      answer: 'Yes, we offer comprehensive training programs including online courses, workshops, and certification programs. Our training covers product usage, best practices, and advanced features. We also provide custom training for enterprise customers.',
      category: 'support',
      icon: HelpCircle,
      tags: ['Training', 'Certification', 'Workshops', 'Best Practices']
    },

    // General
    {
      id: 'general-1',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, government, and education. Our solutions are designed to be industry-agnostic while providing industry-specific features and compliance requirements.',
      category: 'general',
      icon: Building,
      tags: ['Industries', 'Healthcare', 'Finance', 'Manufacturing']
    },
    {
      id: 'general-2',
      question: 'How do I get started with Zion Tech Group?',
      answer: 'Getting started is easy! You can contact our sales team for a consultation, sign up for a free trial, or schedule a demo. We\'ll assess your needs and recommend the best solutions. Our onboarding team will guide you through the setup process.',
      category: 'general',
      icon: Rocket,
      tags: ['Getting Started', 'Consultation', 'Demo', 'Onboarding']
    }
  ];

  // Calculate category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = faqData.length;
    } else {
      category.count = faqData.filter(item => item.category === category.id).length;
    }
  });

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <SEO 
        title="FAQ - Zion Tech Group"
        description="Frequently asked questions about our AI, cybersecurity, and cloud services. Get answers to common questions about Zion Tech Group solutions."
      />
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <HelpCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact our support team.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions, answers, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredFAQ.length > 0 ? (
                filteredFAQ.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <item.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {expandedItems.has(item.id) ? (
                        <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
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
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Info className="h-4 w-4 mr-1" />
                                Category: {categories.find(c => c.id === item.category)?.name}
                              </span>
                              <span className="flex items-center">
                                <Tag className="h-4 w-4 mr-1" />
                                {item.tags.length} tags
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQ Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Questions</span>
                  <span className="font-semibold text-gray-900">{faqData.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Categories</span>
                  <span className="font-semibold text-gray-900">{categories.length - 1}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Most Popular</span>
                  <span className="font-semibold text-gray-900">AI Services</span>
                </div>
              </div>
            </div>

            {/* Popular Categories */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Categories</h3>
              <div className="space-y-3">
                {categories.slice(1, 6).map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Still Need Help?</h3>
              <p className="text-blue-100 mb-4">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="space-y-3">
                <a
                  href="/contact"
                  className="flex items-center justify-center w-full px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact Support
                </a>
                <a
                  href="/help"
                  className="flex items-center justify-center w-full px-4 py-2 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive suite of AI, cloud, and security services designed to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
