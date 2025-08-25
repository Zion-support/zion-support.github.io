import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  ChevronDown,
  ChevronRight,
  FileText,
  Video,
  Download,
  ExternalLink,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Brain,
  Cpu,
  Rocket
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedFAQs, setExpandedFAQs] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      description: 'New to Zion Tech Group? Start here to learn the basics.',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/docs/getting-started/welcome' },
        { title: 'Setting Up Your Account', path: '/docs/getting-started/setup' },
        { title: 'First Steps with AI Services', path: '/docs/getting-started/first-steps' },
        { title: 'Platform Overview', path: '/docs/getting-started/platform-overview' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Autonomous Services',
      icon: Brain,
      description: 'Learn how to use our AI-powered solutions effectively.',
      articles: [
        { title: 'AI Autonomous Systems Guide', path: '/docs/ai-services/autonomous-systems' },
        { title: 'AI Business Intelligence Setup', path: '/docs/ai-services/business-intelligence' },
        { title: 'AI Marketing Automation', path: '/docs/ai-services/marketing-automation' },
        { title: 'AI Workflow Automation', path: '/docs/ai-services/workflow-automation' }
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: Cpu,
      description: 'Understanding and implementing quantum computing solutions.',
      articles: [
        { title: 'Quantum Computing Basics', path: '/docs/quantum/basics' },
        { title: 'Quantum Neural Networks', path: '/docs/quantum/neural-networks' },
        { title: 'Quantum Security Implementation', path: '/docs/quantum/security' },
        { title: 'Quantum Cloud Infrastructure', path: '/docs/quantum/cloud' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Security best practices and compliance requirements.',
      articles: [
        { title: 'Security Best Practices', path: '/docs/security/best-practices' },
        { title: 'SOC2 Compliance Guide', path: '/docs/security/soc2-compliance' },
        { title: 'Threat Detection & Response', path: '/docs/security/threat-detection' },
        { title: 'Data Protection & Privacy', path: '/docs/security/data-protection' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Zap,
      description: 'Cloud deployment and infrastructure management.',
      articles: [
        { title: 'Cloud Migration Guide', path: '/docs/cloud/migration' },
        { title: 'DevOps Best Practices', path: '/docs/cloud/devops' },
        { title: 'Infrastructure Scaling', path: '/docs/cloud/scaling' },
        { title: 'Performance Optimization', path: '/docs/cloud/performance' }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: Settings,
      description: 'Common issues and their solutions.',
      articles: [
        { title: 'Common Error Codes', path: '/docs/troubleshooting/error-codes' },
        { title: 'Performance Issues', path: '/docs/troubleshooting/performance' },
        { title: 'Integration Problems', path: '/docs/troubleshooting/integration' },
        { title: 'API Troubleshooting', path: '/docs/troubleshooting/api' }
      ]
    }
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business. Our team will guide you through the entire setup process.'
    },
    {
      id: 'faq-2',
      question: 'What AI services do you offer?',
      answer: 'We offer a comprehensive range of AI services including autonomous business systems, AI-powered business intelligence, marketing automation, workflow automation, research assistance, and more. Our AI solutions are designed to work autonomously while providing human oversight capabilities.'
    },
    {
      id: 'faq-3',
      question: 'How secure are your quantum technology solutions?',
      answer: 'Our quantum technology solutions implement the highest security standards available. We use quantum-resistant encryption algorithms and follow industry best practices for data protection. All solutions undergo rigorous security testing and compliance verification.'
    },
    {
      id: 'faq-4',
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary depending on the complexity of your requirements. Simple integrations can be completed in 2-4 weeks, while complex enterprise solutions typically take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.'
    },
    {
      id: 'faq-5',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions. This includes 24/7 monitoring, regular updates, security patches, and technical support. We also offer training and optimization services to ensure you get maximum value from your investment.'
    },
    {
      id: 'faq-6',
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing enterprise systems. Our solutions are built with open APIs and standard protocols, making integration seamless. We\'ll work with your IT team to ensure smooth integration and minimal disruption to your operations.'
    },
    {
      id: 'faq-7',
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, government, and more. Our solutions are designed to be industry-agnostic while providing industry-specific optimizations and compliance features.'
    },
    {
      id: 'faq-8',
      question: 'How do you ensure data privacy and compliance?',
      answer: 'We maintain strict data privacy standards and comply with all major regulations including GDPR, HIPAA, SOC2, and industry-specific requirements. Our solutions include built-in compliance features and we provide regular audits and compliance reports.'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our AI-powered support team',
      icon: MessageCircle,
      action: 'Start Chat',
      available: true,
      responseTime: 'Instant'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and get a response within 4 hours',
      icon: Mail,
      action: 'Send Email',
      available: true,
      responseTime: '4 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      action: 'Call Now',
      available: true,
      responseTime: 'Immediate'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: BookOpen,
      action: 'Browse Docs',
      available: true,
      responseTime: 'Always available'
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to your questions, access comprehensive documentation, and get the support you need.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg border border-gray-700 p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <channel.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {channel.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {channel.description}
                </p>
                <div className="text-sm text-cyan-400 mb-4">
                  Response time: {channel.responseTime}
                </div>
                <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Help Categories
          </h2>
          <div className="space-y-4">
            {helpCategories.map((category) => (
              <div key={category.id} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <category.icon className="w-8 h-8 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {expandedCategories.includes(category.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  )}
                </button>
                
                {expandedCategories.includes(category.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <div className="pt-4 space-y-3">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.path}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                        >
                          <FileText className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
                          <span className="text-gray-300 group-hover:text-white">
                            {article.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div key={faq.id} className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQs.includes(faq.id) ? (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {expandedFAQs.includes(faq.id) && (
                  <div className="px-6 pb-6 border-t border-gray-700">
                    <p className="text-gray-300 pt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFAQs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">
                No results found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords or browse our help categories above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Video Tutorials
              </h3>
              <p className="text-gray-400 mb-4">
                Step-by-step video guides for all our services
              </p>
              <Link
                to="/tutorials"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                Watch Tutorials
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Downloads
              </h3>
              <p className="text-gray-400 mb-4">
                SDKs, APIs, and integration tools
              </p>
              <Link
                to="/downloads"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                Download Resources
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Knowledge Base
              </h3>
              <p className="text-gray-400 mb-4">
                Comprehensive documentation and guides
              </p>
              <Link
                to="/docs"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Browse Knowledge Base
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our expert team is here to help you succeed with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
