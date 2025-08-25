import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  Users,
  Zap,
  Shield,
  Brain,
  Building
} from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and onboarding resources',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started/welcome' },
        { title: 'Setting Up Your Account', path: '/help/getting-started/account-setup' },
        { title: 'First Steps with Our Platform', path: '/help/getting-started/first-steps' },
        { title: 'Platform Overview', path: '/help/getting-started/platform-overview' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      description: 'AI and machine learning platform guides',
      articles: [
        { title: 'AI Autonomous Systems Guide', path: '/help/ai-solutions/autonomous-systems' },
        { title: 'Setting Up AI Research Assistant', path: '/help/ai-solutions/research-assistant' },
        { title: 'Quantum Neural Networks', path: '/help/ai-solutions/quantum-neural' },
        { title: 'AI Business Intelligence', path: '/help/ai-solutions/business-intelligence' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance documentation',
      articles: [
        { title: 'Security Best Practices', path: '/help/cybersecurity/best-practices' },
        { title: 'SOC2 Compliance Guide', path: '/help/cybersecurity/soc2-compliance' },
        { title: 'Threat Detection Setup', path: '/help/cybersecurity/threat-detection' },
        { title: 'Access Control Management', path: '/help/cybersecurity/access-control' }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      icon: Building,
      description: 'Cloud and IT infrastructure guides',
      articles: [
        { title: 'Cloud Migration Guide', path: '/help/infrastructure/cloud-migration' },
        { title: '5G Network Setup', path: '/help/infrastructure/5g-setup' },
        { title: 'DevOps Automation', path: '/help/infrastructure/devops' },
        { title: 'Network Security', path: '/help/infrastructure/network-security' }
      ]
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group's AI solutions?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and provide a customized implementation plan. Our experts will guide you through the entire process from setup to optimization.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "What makes your AI solutions different from competitors?",
      answer: "Our AI solutions stand out through our proprietary quantum neural network technology, autonomous business operations capabilities, and industry-specific customization. We combine cutting-edge research with practical business applications, ensuring measurable ROI and long-term success for our clients.",
      category: "AI Solutions"
    },
    {
      id: 3,
      question: "How secure are your cybersecurity solutions?",
      answer: "Security is our top priority. We implement quantum-safe encryption, zero-trust architecture, and continuous threat monitoring. Our solutions are SOC2 compliant and regularly audited by third-party security experts. We also provide 24/7 security monitoring and incident response.",
      category: "Cybersecurity"
    },
    {
      id: 4,
      question: "What support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including 24/7 technical support, regular maintenance updates, performance optimization, and ongoing training for your team. Our success managers work closely with you to ensure continued success and ROI.",
      category: "Support"
    },
    {
      id: 5,
      question: "Can your solutions integrate with existing systems?",
      answer: "Yes! Our solutions are designed with open architecture and API-first approach, making integration seamless with your existing systems. We provide custom integration services and ensure minimal disruption to your current operations during implementation.",
      category: "Integration"
    },
    {
      id: 6,
      question: "What industries do you specialize in?",
      answer: "We serve a wide range of industries including healthcare, financial services, manufacturing, retail, government, and technology. Our solutions are tailored to meet industry-specific challenges and compliance requirements while maintaining flexibility for customization.",
      category: "Industries"
    }
  ];

  const filteredFAQs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500',
      available: true
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      icon: Video,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-500',
      available: true
    }
  ];

  const resources = [
    {
      title: 'Product Documentation',
      description: 'Comprehensive guides and API references',
      icon: FileText,
      link: '/docs',
      type: 'Documentation'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      type: 'Tutorials'
    },
    {
      title: 'Download Center',
      description: 'SDKs, tools, and resources',
      icon: Download,
      link: '/downloads',
      type: 'Downloads'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      link: '/community',
      type: 'Community'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Find answers, get support, and learn how to make the most of our innovative solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Support Channels */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get Help Fast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{channel.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{channel.description}</p>
                <button className={`px-6 py-2 bg-gradient-to-r ${channel.color} text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300`}>
                  {channel.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Help Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Help Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {helpCategories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            
            return (
              <div key={category.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300 rounded-t-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4 space-y-3">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group"
                        >
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {article.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-cyan-400 transition-colors duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            
            return (
              <div key={faq.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setExpandedFAQ(isExpanded ? null : faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300 rounded-t-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-400 ml-4" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 ml-4" />
                    )}
                  </div>
                </button>
                
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Resources */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link
                key={index}
                to={resource.link}
                className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {resource.type}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Contact Support */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed. 
            Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
