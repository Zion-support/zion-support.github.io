<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import SEO from '../SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, HelpCircle, Mail } from 'lucide-react';
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
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
  Lightbulb,
  Shield,
  Zap,
  Cloud
} from 'lucide-react';

const HelpCenter: React.FC = () => {
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: '🚀',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/welcome' },
        { title: 'Setting Up Your Account', path: '/help/setup' },
        { title: 'First Steps Guide', path: '/help/first-steps' },
        { title: 'Platform Overview', path: '/help/platform-overview' }
      ]
    },
    {
      id: 'services',
      name: 'Services',
      description: 'Understanding our technology solutions and services',
      icon: '🔧',
      articles: [
        { title: 'AI Solutions Guide', path: '/help/ai-solutions' },
        { title: 'Cloud & DevOps Setup', path: '/help/cloud-devops' },
        { title: 'Cybersecurity Best Practices', path: '/help/cybersecurity' },
        { title: 'Digital Transformation Process', path: '/help/digital-transformation' }
      ]
    },
    {
      id: 'account-billing',
      name: 'Account & Billing',
      description: 'Manage your account, billing, and subscriptions',
      icon: '💳',
      articles: [
        { title: 'Account Settings', path: '/help/account-settings' },
        { title: 'Billing & Invoices', path: '/help/billing' },
        { title: 'Subscription Management', path: '/help/subscriptions' },
        { title: 'Payment Methods', path: '/help/payment-methods' }
      ]
    },
    {
      id: 'technical-support',
      name: 'Technical Support',
      description: 'Get help with technical issues and troubleshooting',
      icon: '🛠️',
      articles: [
        { title: 'Common Issues & Solutions', path: '/help/common-issues' },
        { title: 'API Documentation', path: '/help/api-docs' },
        { title: 'Integration Guides', path: '/help/integrations' },
        { title: 'Performance Optimization', path: '/help/performance' }
      ]
    },
    {
      id: 'security-privacy',
      name: 'Security & Privacy',
      description: 'Learn about our security measures and privacy policies',
      icon: '🔒',
      articles: [
        { title: 'Security Features', path: '/help/security-features' },
        { title: 'Data Privacy', path: '/help/data-privacy' },
        { title: 'Compliance Information', path: '/help/compliance' },
        { title: 'Security Best Practices', path: '/help/security-best-practices' }
      ]
    },
    {
      id: 'training-resources',
      name: 'Training & Resources',
      description: 'Educational materials and learning resources',
      icon: '📚',
      articles: [
        { title: 'Video Tutorials', path: '/help/video-tutorials' },
        { title: 'Webinar Recordings', path: '/help/webinars' },
        { title: 'White Papers', path: '/help/white-papers' },
        { title: 'Training Programs', path: '/help/training' }
=======
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I get started with Zion Tech Group services?",
          answer: "Getting started is easy! Simply contact us through our contact form, call us at +1 (302) 464-0950, or email us at info@ziontechgroup.com. Our team will schedule a consultation to understand your needs and recommend the best solutions."
        },
        {
          question: "What information do I need to provide for a consultation?",
          answer: "For an initial consultation, it's helpful to have information about your current technology infrastructure, business goals, challenges you're facing, and any specific requirements or constraints. We'll guide you through the process."
        }
      ]
    },
    {
      title: "Services & Pricing",
      icon: Cloud,
      questions: [
        {
          question: "What services does Zion Tech Group offer?",
          answer: "We offer a comprehensive range of technology services including AI solutions, cloud migration, cybersecurity, digital transformation, web development, data analytics, and more. Each service is tailored to meet your specific business needs."
        },
        {
          question: "How is pricing structured for your services?",
          answer: "Our pricing varies based on the scope and complexity of the project. We offer hourly rates, project-based pricing, and ongoing support packages. We'll provide a detailed quote after understanding your requirements."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Shield,
      questions: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including 24/7 monitoring, emergency response, regular maintenance, and ongoing optimization. Our support team is available through multiple channels including phone, email, and our support portal."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We prioritize support requests based on severity. Critical issues receive immediate attention, while standard requests are typically addressed within 4-8 hours during business hours."
        }
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
      ]
    }
  ];

<<<<<<< HEAD
  const popularArticles = [
    { title: 'How to Get Started with AI Solutions', category: 'Services', path: '/help/ai-solutions' },
    { title: 'Understanding Cloud Migration', category: 'Services', path: '/help/cloud-migration' },
    { title: 'Cybersecurity Best Practices', category: 'Security & Privacy', path: '/help/cybersecurity' },
    { title: 'Billing and Payment FAQ', category: 'Account & Billing', path: '/help/billing-faq' },
    { title: 'API Integration Guide', category: 'Technical Support', path: '/help/api-integration' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = helpCategories.flatMap(cat => cat.articles)
    .filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need. 
            Our comprehensive help center is designed to get you up and running quickly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles, guides, and solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
=======
  const supportChannels = [
    {
      title: "Phone Support",
      icon: Phone,
      description: "Speak directly with our technical experts",
      contact: "+1 (302) 464-0950",
      availability: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate for urgent issues"
    },
    {
      title: "Email Support",
      icon: Mail,
      description: "Send detailed inquiries and get comprehensive responses",
      contact: "support@ziontechgroup.com",
      availability: "24/7",
      response: "Within 4-8 hours"
    },
    {
      title: "Live Chat",
      icon: MessageCircle,
      description: "Get instant help from our support team",
      contact: "Available on website",
      availability: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      icon: FileText,
      description: "Comprehensive guides and technical documentation",
      link: "/docs",
      category: "Technical"
    },
    {
      title: "Video Tutorials",
      icon: Video,
      description: "Step-by-step video guides for common tasks",
      link: "/tutorials",
      category: "Learning"
    },
    {
      title: "Knowledge Base",
      icon: BookOpen,
      description: "Searchable database of articles and solutions",
      link: "/knowledge-base",
      category: "Self-Service"
    },
    {
      title: "Community Forum",
      icon: Users,
      description: "Connect with other users and share experiences",
      link: "/community",
      category: "Community"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, get technical support, and access helpful resources to make the most of our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or contact information..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
            </div>
          </div>

<<<<<<< HEAD
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl text-white text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
            <p className="text-sm opacity-90">Get direct help from our team</p>
          </Link>
          
          <Link
            to="/status"
            className="bg-slate-800/50 p-6 rounded-xl text-white text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Service Status</h3>
            <p className="text-sm text-gray-300">Check system status and updates</p>
          </Link>
          
          <Link
            to="/faq"
            className="bg-slate-800/50 p-6 rounded-xl text-white text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl mb-3">❓</div>
            <h3 className="text-lg font-semibold mb-2">FAQ</h3>
            <p className="text-sm text-gray-300">Frequently asked questions</p>
          </Link>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="mt-3 flex items-center text-blue-400 text-sm font-medium">
                  Read Article
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
                
                <div className="space-y-3">
                  {category.articles.map((article, index) => (
                    <Link
                      key={index}
                      to={article.path}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    >
                      <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {article.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Search Results for "{searchQuery}"
            </h2>
            <div className="space-y-4">
              {filteredArticles.map((article, index) => (
                <Link
                  key={index}
                  to={article.path}
                  className="block p-4 bg-slate-800/50 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                </Link>
              ))}
              {filteredArticles.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-300">No articles found for your search.</p>
                  <p className="text-gray-400 text-sm mt-2">Try different keywords or browse our categories.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Still Need Help */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link
                to="/support"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Support Portal
              </Link>
=======
          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-400 font-semibold">{channel.contact}</p>
                      <p className="text-gray-400">{channel.availability}</p>
                      <p className="text-gray-400">Response: {channel.response}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-2xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-300">{item.question}</h4>
                          <p className="text-gray-300 text-sm">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <Link
                    key={resource.title}
                    to={resource.link}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {resource.category}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
              <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert team is here to help you with any questions or technical issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300"
                >
                  Email Support
                </a>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;