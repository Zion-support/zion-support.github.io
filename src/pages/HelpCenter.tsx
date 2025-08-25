import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users, 
  Settings, 
  Shield, 
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Building,
  CreditCard
} from 'lucide-react';

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started', description: 'Learn the basics of our platform' },
        { title: 'Creating Your First Project', path: '/help/first-project', description: 'Step-by-step guide to get started' },
        { title: 'Account Setup & Verification', path: '/help/account-setup', description: 'Complete your profile setup' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      articles: [
        { title: 'AI Business Intelligence Guide', path: '/help/ai-bi-guide', description: 'Understanding AI-powered analytics' },
        { title: 'Quantum Neural Networks', path: '/help/quantum-neural', description: 'Working with quantum computing' },
        { title: 'AI Autonomous Systems', path: '/help/ai-autonomous', description: 'Setting up autonomous operations' }
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud & DevOps',
      icon: Cloud,
      articles: [
        { title: 'Cloud Infrastructure Setup', path: '/help/cloud-setup', description: 'Deploy your cloud infrastructure' },
        { title: 'DevOps Best Practices', path: '/help/devops-practices', description: 'Optimize your development workflow' },
        { title: 'Security & Compliance', path: '/help/security-compliance', description: 'Ensure your systems are secure' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      articles: [
        { title: 'Security Best Practices', path: '/help/security-practices', description: 'Protect your digital assets' },
        { title: 'Threat Detection & Response', path: '/help/threat-detection', description: 'Monitor and respond to threats' },
        { title: 'Compliance Guidelines', path: '/help/compliance-guidelines', description: 'Meet industry standards' }
      ]
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      icon: Building,
      articles: [
        { title: 'Enterprise Architecture', path: '/help/enterprise-arch', description: 'Design scalable solutions' },
        { title: 'Digital Transformation', path: '/help/digital-transformation', description: 'Modernize your business' },
        { title: 'Integration Services', path: '/help/integration-services', description: 'Connect your systems' }
      ]
    },
    {
      id: 'billing-support',
      title: 'Billing & Support',
      icon: CreditCard,
      articles: [
        { title: 'Pricing Plans', path: '/help/pricing-plans', description: 'Understand our pricing structure' },
        { title: 'Payment Methods', path: '/help/payment-methods', description: 'Accepted payment options' },
        { title: 'Billing FAQ', path: '/help/billing-faq', description: 'Common billing questions' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to Set Up AI Business Intelligence', path: '/help/setup-ai-bi', category: 'AI Solutions' },
    { title: 'Cloud Infrastructure Best Practices', path: '/help/cloud-best-practices', category: 'Cloud & DevOps' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/security-checklist', category: 'Cybersecurity' },
    { title: 'Getting Started with Quantum Computing', path: '/help/quantum-getting-started', category: 'AI Solutions' }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and references',
      icon: BookOpen,
      action: 'Browse Docs',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                <button className={`w-full py-2 px-4 bg-gradient-to-r ${channel.color} text-white font-medium rounded-lg transition-all duration-300 hover:scale-105`}>
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{article.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Browse by Category
          </h2>
          <div className="space-y-4">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-gray-800/30 rounded-lg border border-gray-700">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                >
                  <div className="flex items-center">
                    <category.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {category.articles.length} articles available
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
                          className="block p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-colors"
                        >
                          <h4 className="text-white font-medium mb-1">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
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

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is here to help you succeed. Get in touch for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
