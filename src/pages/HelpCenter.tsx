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
  Users, 
  Settings, 
  Shield, 
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Download,
  Play,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0, 1]));

  const toggleFaq = (index: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFaqs(newExpanded);
  };

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        'Welcome to Zion Tech Group',
        'Setting up your account',
        'First steps with our platform',
        'Understanding our services'
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articles: [
        'AI Business Intelligence',
        'AI Marketing Automation',
        'AI HR & Recruitment',
        'AI Legal Tech Solutions'
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      articles: [
        'Quantum Neural Networks',
        'Quantum-Safe Security',
        'Quantum Computing Basics',
        'Quantum Applications'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        'SOC2 Compliance',
        'Security Best Practices',
        'Threat Detection',
        'Incident Response'
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        'Cloud Migration',
        'Network Setup',
        '5G Enterprise Solutions',
        'Asset Management'
      ]
    },
    {
      id: 'support',
      title: 'Support & Contact',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        'Contact Support',
        'Live Chat',
        'Phone Support',
        'Email Support'
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Zion Tech Group's AI services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best AI solutions for your business. Our team will guide you through the entire onboarding process."
    },
    {
      question: "What makes your quantum technology different from traditional solutions?",
      answer: "Our quantum technology leverages the principles of quantum mechanics to provide unprecedented computational power and security. Unlike traditional solutions, our quantum neural networks can process complex data patterns simultaneously, enabling breakthroughs in AI, cryptography, and scientific research that were previously impossible."
    },
    {
      question: "How secure are your cybersecurity solutions?",
      answer: "Our cybersecurity solutions are built with multiple layers of protection, including quantum-resistant encryption, AI-powered threat detection, and real-time monitoring. We maintain SOC2 Type II compliance and regularly update our security protocols to stay ahead of emerging threats."
    },
    {
      question: "Can you help with existing IT infrastructure upgrades?",
      answer: "Absolutely! We specialize in modernizing existing IT infrastructure while minimizing disruption to your business operations. Our team can assess your current setup, plan the migration strategy, and implement upgrades with zero downtime."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including 24/7 monitoring, regular maintenance, performance optimization, and dedicated account management. Our support team is always available to help with any questions or issues you may have."
    },
    {
      question: "Do you offer training for our team on new technologies?",
      answer: "Yes! We provide comprehensive training programs for your team to ensure they can effectively use and maintain the new technologies. This includes hands-on workshops, documentation, video tutorials, and ongoing support."
    }
  ];

  const popularArticles = [
    {
      title: "AI Business Intelligence Implementation Guide",
      category: "AI Services",
      readTime: "8 min read",
      views: "2.4k",
      rating: 4.9
    },
    {
      title: "Quantum-Safe Security Best Practices",
      category: "Cybersecurity",
      readTime: "12 min read",
      views: "1.8k",
      rating: 4.8
    },
    {
      title: "5G Enterprise Network Setup",
      category: "Infrastructure",
      readTime: "15 min read",
      views: "1.5k",
      rating: 4.7
    },
    {
      title: "SOC2 Compliance Checklist",
      category: "Cybersecurity",
      readTime: "10 min read",
      views: "2.1k",
      rating: 4.9
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      action: "Start Chat",
      available: true
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      action: "Call Now",
      available: true,
      details: "+1 302 464 0950"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      color: "from-purple-500 to-pink-500",
      action: "Send Email",
      available: true,
      details: "kleber@ziontechgroup.com"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
      action: "Browse Docs",
      available: true
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => article.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, learn about our services, and get the support you need 
              to succeed with Zion Tech Group's cutting-edge technologies.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support channel that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                {channel.details && (
                  <p className="text-cyan-400 font-mono text-sm mb-4">{channel.details}</p>
                )}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Browse Help by Category
            </h2>
            <p className="text-xl text-gray-300">
              Find organized help content for all our services and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className={`bg-gray-800/50 rounded-xl border border-gray-700 p-6 cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:bg-gray-800/70 ${
                  activeCategory === category.id ? 'border-cyan-500/50 bg-gray-800/70' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.articles.map((article, index) => (
                    <li key={index} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Popular Help Articles
            </h2>
            <p className="text-xl text-gray-300">
              Most viewed and highest-rated help content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/50">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {article.rating}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {article.views} views
                  </div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Read Article
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaqs.has(index) ? (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {expandedFaqs.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed with our technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
