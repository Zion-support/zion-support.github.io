import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  BookOpen, 
  Download,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle,
  Clock,
  Users,
  Globe,
  Zap,
  Shield,
  Brain,
  Rocket
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Get help with AI solutions, machine learning, and automation services.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      articleCount: 25
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      description: 'Support for cloud migration, DevOps, and infrastructure management.',
      icon: Globe,
      color: 'from-green-500 to-emerald-600',
      articleCount: 18
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Security solutions, compliance, and threat protection support.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      articleCount: 22
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Quantum solutions, algorithms, and computing platform support.',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      articleCount: 15
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      description: 'Help with our micro SAAS platforms and business solutions.',
      icon: Rocket,
      color: 'from-indigo-500 to-blue-600',
      articleCount: 20
    },
    {
      id: 'general',
      title: 'General Support',
      description: 'Account management, billing, and general inquiries.',
      icon: Users,
      color: 'from-gray-500 to-slate-600',
      articleCount: 12
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      category: 'ai-services',
      question: 'How do I get started with Zion Tech Group\'s AI services?',
      answer: 'Getting started with our AI services is simple. First, schedule a consultation with our AI experts to discuss your specific needs. We\'ll assess your current infrastructure, identify opportunities for AI implementation, and create a customized roadmap. Our team will guide you through the entire process, from initial setup to full deployment and ongoing support.'
    },
    {
      id: 'faq-2',
      category: 'ai-services',
      question: 'What AI technologies do you specialize in?',
      answer: 'We specialize in a comprehensive range of AI technologies including machine learning, natural language processing, computer vision, predictive analytics, and autonomous systems. Our expertise covers both traditional AI approaches and cutting-edge developments like quantum machine learning and AI-Quantum hybrid systems.'
    },
    {
      id: 'faq-3',
      category: 'cloud-infrastructure',
      question: 'How long does cloud migration typically take?',
      answer: 'Cloud migration timelines vary depending on the complexity of your infrastructure and applications. Simple migrations can take 2-4 weeks, while complex enterprise migrations may take 3-6 months. We provide detailed project timelines during the planning phase and use agile methodologies to ensure smooth, incremental progress.'
    },
    {
      id: 'faq-4',
      category: 'cybersecurity',
      question: 'What security certifications do you maintain?',
      answer: 'We maintain multiple security certifications including SOC 2 Type II, ISO 27001, and PCI DSS compliance. Our security team includes certified professionals with CISSP, CISM, and other industry-recognized credentials. We regularly undergo third-party security audits and penetration testing to ensure the highest security standards.'
    },
    {
      id: 'faq-5',
      category: 'quantum-computing',
      question: 'How accessible are your quantum computing solutions?',
      answer: 'Our quantum computing solutions are designed to be accessible to organizations of all sizes. We offer quantum-as-a-service platforms, hybrid quantum-classical solutions, and educational programs to help teams understand and leverage quantum computing. You don\'t need quantum expertise to get started - we handle the complexity.'
    },
    {
      id: 'faq-6',
      category: 'micro-saas',
      question: 'Can I customize your micro SAAS platforms?',
      answer: 'Yes, our micro SAAS platforms are highly customizable. We offer white-label solutions, custom integrations, and tailored features to meet your specific business requirements. Our development team works closely with you to understand your needs and implement customizations that align with your business processes.'
    },
    {
      id: 'faq-7',
      category: 'general',
      question: 'What support options are available?',
      answer: 'We offer multiple support tiers including 24/7 technical support, dedicated account managers, training programs, and comprehensive documentation. Our support team includes technical experts, business consultants, and industry specialists to ensure you receive the assistance you need when you need it.'
    },
    {
      id: 'faq-8',
      category: 'general',
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team through multiple channels: phone at +1 302 464 0950, email at support@ziontechgroup.com, live chat on our website, or through our support portal. We typically respond to inquiries within 2 hours during business hours and 24 hours for urgent issues.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 302 464 0950',
      availability: '24/7',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      contact: 'Available on website',
      availability: 'Business hours',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/documentation',
      type: 'Internal'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars',
      link: '/tutorials',
      type: 'Internal'
    },
    {
      icon: Download,
      title: 'Downloads',
      description: 'SDKs, tools, and sample code',
      link: '/downloads',
      type: 'Internal'
    },
    {
      icon: ExternalLink,
      title: 'Developer Portal',
      description: 'Access to APIs and development resources',
      link: '/developer-portal',
      type: 'Internal'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions, access support resources, and get the help you need 
              to succeed with Zion Tech Group's technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our support categories to find the right resources for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                onClick={() => setSelectedCategory(category.id === selectedCategory ? 'all' : category.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === category.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {selectedCategory === category.id ? 'Selected' : 'Browse'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and solutions.
            </p>
          </motion.div>

          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search terms or browse our categories above.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach our support team and get the help you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{method.description}</p>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-gray-900">{method.contact}</div>
                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {method.availability}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Support Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access comprehensive documentation, tutorials, and development resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <resource.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-center">{resource.description}</p>
                <div className="text-center">
                  <span className="px-3 py-1 bg-white text-blue-700 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out 
              for personalized assistance with any questions or challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
