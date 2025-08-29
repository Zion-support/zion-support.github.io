import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  BookOpen, 
  Video, 
  FileText, 
  Users, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Cpu, 
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Star,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and onboarding information',
      articles: [
        { title: 'How to set up your first AI project', href: '/help/getting-started/first-project' },
        { title: 'Understanding our service tiers', href: '/help/getting-started/service-tiers' },
        { title: 'Account setup and configuration', href: '/help/getting-started/account-setup' },
        { title: 'First steps with AI services', href: '/help/getting-started/ai-first-steps' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      description: 'Help with artificial intelligence and machine learning services',
      articles: [
        { title: 'AI Business Intelligence setup', href: '/help/ai-services/business-intelligence' },
        { title: 'Configuring AI Sales Copilot', href: '/help/ai-services/sales-copilot' },
        { title: 'AI Compliance Assistant guide', href: '/help/ai-services/compliance-assistant' },
        { title: 'LLM Content Studio tutorials', href: '/help/ai-services/content-studio' }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and development operations support',
      articles: [
        { title: 'Cloud DevOps best practices', href: '/help/cloud-devops/best-practices' },
        { title: 'FinOps optimization strategies', href: '/help/cloud-devops/finops-optimization' },
        { title: 'Infrastructure scaling guide', href: '/help/cloud-devops/scaling' },
        { title: 'DevOps pipeline setup', href: '/help/cloud-devops/pipeline-setup' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance assistance',
      articles: [
        { title: 'Zero Trust implementation', href: '/help/cybersecurity/zero-trust' },
        { title: 'Compliance framework setup', href: '/help/cybersecurity/compliance' },
        { title: 'Incident response procedures', href: '/help/cybersecurity/incident-response' },
        { title: 'Security best practices', href: '/help/cybersecurity/best-practices' }
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      icon: Cpu,
      description: 'IT infrastructure and digital transformation support',
      articles: [
        { title: 'Digital Twin implementation', href: '/help/it-infrastructure/digital-twin' },
        { title: 'IT consulting best practices', href: '/help/it-infrastructure/consulting' },
        { title: 'Onsite support procedures', href: '/help/it-infrastructure/onsite-support' },
        { title: 'Infrastructure monitoring setup', href: '/help/it-infrastructure/monitoring' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS',
      icon: ShoppingCart,
      description: 'Software-as-a-Service platform assistance',
      articles: [
        { title: 'Micro SaaS platform setup', href: '/help/micro-saas/platform-setup' },
        { title: 'User management and permissions', href: '/help/micro-saas/user-management' },
        { title: 'API integration guide', href: '/help/micro-saas/api-integration' },
        { title: 'Customization and branding', href: '/help/micro-saas/customization' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to optimize AI model performance', href: '/help/ai-services/optimization', category: 'AI Services' },
    { title: 'Cloud cost optimization strategies', href: '/help/cloud-devops/cost-optimization', category: 'Cloud & DevOps' },
    { title: 'Setting up Zero Trust security', href: '/help/cybersecurity/zero-trust-setup', category: 'Cybersecurity' },
    { title: 'Digital Twin implementation guide', href: '/help/it-infrastructure/digital-twin-guide', category: 'IT Infrastructure' },
    { title: 'Micro SaaS pricing strategies', href: '/help/micro-saas/pricing', category: 'Micro SaaS' }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 5 minutes',
      href: '/contact'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      href: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      icon: Mail,
      description: 'Send us detailed questions',
      availability: '24/7',
      responseTime: '< 4 hours',
      href: 'mailto:support@ziontechgroup.com'
    },
    {
      title: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and tutorials',
      availability: '24/7',
      responseTime: 'Immediate',
      href: '/documentation'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Comprehensive help and support for all Zion Tech Group services. Find answers, tutorials, and get expert assistance."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we help?
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Find answers to common questions, explore tutorials, and get expert support 
              for all our AI, cloud, and technology services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-slate-300">Multiple ways to get the help you need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 text-xs text-slate-500">
                    <div className="flex items-center justify-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 mr-1 text-green-400" />
                      <span>{channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <Link
                    to={channel.href}
                    className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Get Help
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Popular Articles</h2>
            <p className="text-xl text-slate-300">Most frequently accessed help content</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.href}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-cyan-400 font-medium">{article.category}</span>
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {article.title}
                </h3>
                <div className="flex items-center text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Read article
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Help Categories</h2>
            <p className="text-xl text-slate-300">Browse help content by service category</p>
          </div>
          
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 text-left hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mr-4">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        <p className="text-slate-400 mt-1">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategories.includes(category.id) ? (
                      <ChevronDown className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                </button>
                
                {expandedCategories.includes(category.id) && (
                  <div className="px-6 pb-6 border-t border-slate-700/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {category.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          to={article.href}
                          className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-200 border border-transparent hover:border-cyan-500/30 group"
                        >
                          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                            {article.title}
                          </h4>
                          <div className="flex items-center text-cyan-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Read article
                            <ChevronRight className="w-3 h-3 ml-1" />
                          </div>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still need help?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Our expert support team is here to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}