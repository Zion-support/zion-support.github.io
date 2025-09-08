import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Users, Shield, Brain, Cloud, Database, Lock, Globe, Cpu, Network, Rocket, Target, BarChart3, Code, Palette, Heart, Building, Clock, ArrowRight, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const helpCategories = [
    { id: 'all', name: 'All Topics', icon: BookOpen, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 12 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 8 },
    { id: 'data', name: 'Data & Analytics', icon: Database, count: 10 },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu, count: 6 },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building, count: 14 },
    { id: 'support', name: 'General Support', icon: Users, count: 20 }
  ];

  const helpArticles = [
    {
      id: 1,
      title: 'Getting Started with AI Autonomous Systems',
      category: 'ai',
      description: 'Learn how to set up and configure AI autonomous systems for your business',
      tags: ['AI', 'Setup', 'Configuration', 'Beginner'],
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Quantum Neural Networks',
      category: 'quantum',
      description: 'Deep dive into quantum neural network technology and applications',
      tags: ['Quantum', 'Neural Networks', 'Advanced', 'Technology'],
      readTime: '8 min read',
      featured: true
    },
    {
      id: 3,
      title: 'SOC2 Compliance Automation Guide',
      category: 'security',
      description: 'Complete guide to implementing SOC2 compliance automation',
      tags: ['Security', 'Compliance', 'SOC2', 'Automation'],
      readTime: '12 min read',
      featured: false
    },
    {
      id: 4,
      title: '5G Enterprise Network Setup',
      category: 'enterprise',
      description: 'Step-by-step guide to deploying 5G enterprise networks',
      tags: ['5G', 'Enterprise', 'Network', 'Deployment'],
      readTime: '10 min read',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered IT Asset Management',
      category: 'ai',
      description: 'Optimize your IT asset management with AI-driven insights',
      tags: ['AI', 'IT', 'Asset Management', 'Optimization'],
      readTime: '6 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Cloud Infrastructure Best Practices',
      category: 'cloud',
      description: 'Essential best practices for cloud infrastructure management',
      tags: ['Cloud', 'Infrastructure', 'Best Practices', 'Management'],
      readTime: '7 min read',
      featured: false
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Contact our team through our contact form or call us at +1 302 464 0950. We\'ll schedule a consultation to understand your needs and recommend the best solutions.',
      category: 'support'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including autonomous business systems, research assistants, content generation, predictive analytics, and specialized industry solutions. Our AI platforms are designed for enterprise-scale deployment.',
      category: 'ai'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we provide 24/7 technical support for all our enterprise clients. Our support team is available around the clock to ensure your systems run smoothly.',
      category: 'support'
    },
    {
      question: 'What security certifications do you have?',
      answer: 'We maintain SOC2 Type II compliance and follow industry best practices for security. Our infrastructure is built with security-first principles and regular security audits.',
      category: 'security'
    },
    {
      question: 'Can you help with legacy system integration?',
      answer: 'Absolutely! We specialize in modernizing legacy systems and integrating them with cutting-edge technologies. Our team has extensive experience in enterprise system transformation.',
      category: 'enterprise'
    }
  ];

  const filteredArticles = helpArticles.filter(article => 
    activeCategory === 'all' || article.category === activeCategory
  );

  const filteredFAQs = faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Find answers, guides, and support for all Zion Tech Group services and solutions
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-zion-cyan text-white shadow-lg'
                    : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                {category.count > 0 && (
                  <span className="ml-2 px-2 py-1 bg-zion-slate-light/20 rounded-full text-xs">
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Help Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 hover:bg-zion-slate-light/20 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-zion-slate-light text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-zion-slate-light mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-zion-cyan hover:text-white transition-colors flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Articles */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">All Help Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 hover:bg-zion-slate-light/20 transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                    {article.category.toUpperCase()}
                  </span>
                  <span className="text-zion-slate-light text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-zion-slate-light mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-zion-cyan hover:text-white transition-colors flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div key={index} className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-zion-slate-light">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
            <p className="text-xl text-white/90 mb-8">
              Our support team is here to help you with any questions or issues
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-3">
                <Phone className="w-8 h-8 text-white" />
                <div>
                  <p className="font-semibold text-white">Call Us</p>
                  <p className="text-white/80">+1 302 464 0950</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <Mail className="w-8 h-8 text-white" />
                <div>
                  <p className="font-semibold text-white">Email Us</p>
                  <p className="text-white/80">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <MessageCircle className="w-8 h-8 text-white" />
                <div>
                  <p className="font-semibold text-white">Live Chat</p>
                  <p className="text-white/80">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-white text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/docs" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <FileText className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
                <p className="text-zion-slate-light text-sm">Comprehensive technical documentation</p>
              </div>
            </Link>
            <Link to="/webinars" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <Video className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Webinars</h3>
                <p className="text-zion-slate-light text-sm">Learn from our experts</p>
              </div>
            </Link>
            <Link to="/case-studies" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <BarChart3 className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-zion-slate-light text-sm">Real-world success stories</p>
              </div>
            </Link>
            <Link to="/white-papers" className="group">
              <div className="bg-zion-slate-light/10 border border-zion-blue-light/30 rounded-lg p-6 text-center hover:bg-zion-slate-light/20 transition-all duration-200">
                <BookOpen className="w-12 h-12 text-zion-cyan mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-2">White Papers</h3>
                <p className="text-zion-slate-light text-sm">In-depth technical insights</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}