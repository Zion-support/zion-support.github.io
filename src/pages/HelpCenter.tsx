import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
  Users,
  Settings,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  Star,
  TrendingUp,
  Target,
  BarChart3,
  GraduationCap,
  FileText as FileTextIcon,
  Heart,
  ShoppingCart,
  Cpu,
  Lock,
  Globe,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Award,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function HelpCenter() {
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
      name: 'Getting Started',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      description: 'Essential information to get you started with our services',
      articles: [
        { title: 'How to get started with Zion Tech Group services', href: '/help/getting-started', category: 'Getting Started' },
        { title: 'Account setup and configuration guide', href: '/help/account-setup', category: 'Getting Started' },
        { title: 'First steps after signing up', href: '/help/first-steps', category: 'Getting Started' },
        { title: 'Understanding your dashboard', href: '/help/dashboard-guide', category: 'Getting Started' }
      ]
    },
    {
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Help with AI-powered services and solutions',
      articles: [
        { title: 'AI Business Intelligence setup guide', href: '/help/ai-business-intelligence', category: 'AI Services' },
        { title: 'Configuring AI Sales Copilot', href: '/help/ai-sales-copilot', category: 'AI Services' },
        { title: 'Setting up AI Customer Support', href: '/help/ai-customer-support', category: 'AI Services' },
        { title: 'AI Content Generation best practices', href: '/help/ai-content-generation', category: 'AI Services' },
        { title: 'AI Project Management configuration', href: '/help/ai-project-management', category: 'AI Services' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      description: 'Cloud infrastructure and development operations support',
      articles: [
        { title: 'Cloud DevOps setup and configuration', href: '/help/cloud-devops', category: 'Cloud & DevOps' },
        { title: 'FinOps optimization strategies', href: '/help/finops-optimization', category: 'Cloud & DevOps' },
        { title: 'Edge computing platform setup', href: '/help/edge-computing', category: 'Cloud & DevOps' },
        { title: 'DevOps best practices and workflows', href: '/help/devops-best-practices', category: 'Cloud & DevOps' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Security and compliance assistance',
      articles: [
        { title: 'AI Compliance Assistant setup', href: '/help/ai-compliance-assistant', category: 'Cybersecurity' },
        { title: 'Zero Trust Architecture implementation', href: '/help/zero-trust-architecture', category: 'Cybersecurity' },
        { title: 'Threat detection configuration', href: '/help/threat-detection', category: 'Cybersecurity' },
        { title: 'Security best practices', href: '/help/security-best-practices', category: 'Cybersecurity' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Zap,
      color: 'from-yellow-600 to-orange-600',
      description: 'Digital transformation and technology solutions',
      articles: [
        { title: 'Digital Twin platform setup', href: '/help/digital-twin', category: 'Digital Solutions' },
        { title: 'IT Infrastructure configuration', href: '/help/it-infrastructure', category: 'Digital Solutions' },
        { title: 'Data Analytics implementation', href: '/help/data-analytics', category: 'Digital Solutions' },
        { title: 'IoT Edge computing setup', href: '/help/iot-edge', category: 'Digital Solutions' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-teal-600 to-cyan-600',
      description: 'Software-as-a-service solutions support',
      articles: [
        { title: 'AI Lead Scoring configuration', href: '/help/ai-lead-scoring', category: 'Micro SaaS Solutions' },
        { title: 'Website AI Chatbot setup', href: '/help/website-ai-chatbot', category: 'Micro SaaS Solutions' },
        { title: 'RAG Search platform configuration', href: '/help/rag-search', category: 'Micro SaaS Solutions' },
        { title: 'MLOps Pipeline setup', href: '/help/mlops-pipeline', category: 'Micro SaaS Solutions' }
      ]
    }
  ];

  const popularArticles = [
    { title: 'How to get started with Zion Tech Group services', href: '/help/getting-started', views: '2.5k' },
    { title: 'AI Business Intelligence setup guide', href: '/help/ai-business-intelligence', views: '1.8k' },
    { title: 'Cloud DevOps configuration best practices', href: '/help/cloud-devops', views: '1.6k' },
    { title: 'Security and compliance setup guide', href: '/help/security-compliance', views: '1.4k' },
    { title: 'Troubleshooting common issues', href: '/help/troubleshooting', views: '1.2k' }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'from-green-600 to-emerald-600'
    },
    {
      name: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our experts',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Email Support',
      icon: Mail,
      description: 'Send detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and technical documentation',
      availability: 'Always available',
      responseTime: 'Instant',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    website: "https://ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    hours: "24/7 Support Available"
  };

  const filteredArticles = helpCategories.flatMap(category => 
    category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for all Zion Tech Group services. Find answers to common questions, setup guides, and contact our support team."
        canonical="/help"
        url="https://ziontechgroup.com/help"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, get setup guides, and access comprehensive support for all our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/70 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400 text-lg rounded-xl"
                />
              </div>
              {searchQuery && (
                <div className="mt-4 text-sm text-slate-300">
                  Found {filteredArticles.length} articles matching "{searchQuery}"
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help You?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from multiple support channels to get the help you need, when you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="text-cyan-400">
                    <span className="font-semibold">Availability:</span> {channel.availability}
                  </div>
                  <div className="text-slate-300">
                    <span className="font-semibold">Response:</span> {channel.responseTime}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Popular Help Articles</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most viewed articles and guides to help you get started quickly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={article.href} className="block">
                  <div className="bg-slate-800 rounded-xl p-6 h-full hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm text-slate-400">
                        {article.views} views
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Help Categories</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse help articles organized by service category and topic
            </p>
          </motion.div>

          <div className="space-y-6">
            {helpCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-slate-900 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <p className="text-slate-300 text-sm">{category.description}</p>
                    </div>
                  </div>
                  {expandedCategories.includes(category.name) ? (
                    <ChevronUp className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </button>
                
                {expandedCategories.includes(category.name) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.articles.map((article, articleIndex) => (
                        <Link
                          key={article.title}
                          to={article.href}
                          className="block p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                              <FileText className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                {article.title}
                              </h4>
                              <p className="text-sm text-slate-400">{article.category}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                {contactInfo.phone}
              </a>
              <p className="text-slate-300 text-sm mt-2">{contactInfo.hours}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                {contactInfo.email}
              </a>
              <p className="text-slate-300 text-sm mt-2">Response within 4 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a 
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-lg font-semibold"
              >
                {contactInfo.website.replace('https://', '')}
              </a>
              <p className="text-slate-300 text-sm mt-2">Visit our main site</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Can't find what you're looking for? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
