import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  BookOpen, 
  Video, 
  Users, 
  FileText,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { title: 'How to create an account', link: '/onboarding' },
        { title: 'First steps after registration', link: '/how-it-works' },
        { title: 'Understanding the platform', link: '/about' },
        { title: 'Setting up your profile', link: '/profile' }
      ]
    },
    {
      id: 'marketplace',
      title: 'Marketplace',
      icon: <Users className="w-6 h-6" />,
      items: [
        { title: 'How to buy products', link: '/marketplace' },
        { title: 'How to sell products', link: '/publish-product' },
        { title: 'Finding talent', link: '/talent' },
        { title: 'Posting jobs', link: '/post-job' }
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: <FileText className="w-6 h-6" />,
      items: [
        { title: 'Available services', link: '/services' },
        { title: 'Service pricing', link: '/services-pricing' },
        { title: 'Requesting quotes', link: '/request-quote' },
        { title: 'Service comparison', link: '/services-comparison' }
      ]
    },
    {
      id: 'account',
      title: 'Account & Billing',
      icon: <Users className="w-6 h-6" />,
      items: [
        { title: 'Managing your account', link: '/profile' },
        { title: 'Billing information', link: '/enterprise-billing' },
        { title: 'Payment methods', link: '/profile' },
        { title: 'Order history', link: '/orders' }
      ]
    }
  ];

  const popularQuestions = [
    {
      question: "How do I get started on Zion Tech Group?",
      answer: "Getting started is easy! Simply create an account, complete your profile, and explore our marketplace for products, services, and talent. Check out our onboarding guide for detailed steps.",
      link: "/onboarding"
    },
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of technology services including AI solutions, cybersecurity, cloud migration, blockchain services, and more. Visit our services page for a complete overview.",
      link: "/services"
    },
    {
      question: "How can I sell my products on the platform?",
      answer: "To sell products, create a seller account, complete the verification process, and use our product publishing tools. We provide comprehensive support throughout the process.",
      link: "/publish-product"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, bank transfers, and cryptocurrency payments. Enterprise customers can also set up invoicing and payment terms.",
      link: "/enterprise-billing"
    },
    {
      question: "How do I find the right talent for my project?",
      answer: "Use our advanced search and filtering tools to find talent based on skills, experience, location, and availability. You can also post job listings to attract qualified candidates.",
      link: "/talent"
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 302 464 0950",
      action: "Call Now",
      link: "tel:+13024640950"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "kleber@ziontechgroup.com",
      action: "Send Email",
      link: "mailto:kleber@ziontechgroup.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Available 24/7",
      action: "Start Chat",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-24">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            How can we <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">help you?</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions, explore our resources, and get the support you need to succeed on Zion Tech Group.
          </p>
          {/* Search Bar */}
          <div className="max - w-2xl mx - auto relative">
            <Search className="absolute left - 4 top - 1/2 transform - translate - y-1 / 2 text - zion - slate - light w - 5 h - 5"       />
            <input
              type="text"
              placeholder="Search for help articles, guides, and FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-800/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
            />
          </div>
        </motion.div>

        {/* Help Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {helpCategories.map((category) => (
            <div key={category.id} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300">
              <div className="text-zion-cyan mb-4">{category.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.link} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      {item.title}
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Popular Questions */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {popularQuestions.map((faq, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(`faq-${index}`)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-700/50 transition-colors"
                >
                  <div className="flex items - center space - x-3">
                    <category.icon className="w - 6 h - 6 text - zion - cyan"       />
                    <h3 className="text - lg font - semibold text - white">
                      {category.title}
                    </h3>
                  </div>
                  {openCategories.includes (category.id) ? (<ChevronUp className="w - 5 h - 5 text - zion - cyan"       />) : (<ChevronDown className="w - 5 h - 5 text - zion - cyan"       />) }
                </button>
                {openCategories.includes (category.id) && (<div className="px - 6 pb - 4 border - t border - zion - cyan / 20">
                    <div className="space - y-3 pt - 4">
                      {category.articles.map ( (article, articleIndex) => (<div
                          key={articleIndex}
                          className="bg - zion - blue - dark / 30 p - 4 rounded - lg hover:bg - zion - cyan / 10 transition - colors"
                        >
                          <h4 className="text - white font - medium mb - 2">
                            {article.title}
                          </h4>
                          <p className="text - zion - slate - light text - sm mb - 3">
                            {article.description}
                          </p>
                          <Link
                            to={article.url}
                            className="inline - flex items - center space - x-2 text - zion - cyan hover:text - zion - cyan - light transition - colors text - sm font - medium"
                          >
                            <span > Read Article</span>
                            <ArrowRight className="w - 4 h - 4"       />
                          </Link>
                        </div>) ) }
                    </div>
                  </div>) }
              </div>) ) }
            {filteredCategories.length === 0 && (<div className="text - center py - 16">
                <FileText className="w - 16 h - 16 text - zion - slate - light mx - auto mb - 4"       />
                <h3 className="text - xl font - bold text - white mb - 2">
                  No help articles found
                </h3>
                <p className="text - zion - slate - light mb - 6">
                  Try adjusting your search terms or contact our support team
                  directly.
                </p>
              </div>) }
          </div>
        </div>
      </section>
      {/* Video Tutorials */}
      <section className="py - 16">
        <div className="container mx - auto px - 4">
          <h2 className="text - 3xl font - bold text - white text - center mb - 12">
            Video Tutorials
          </h2>
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8 max - w-6xl mx - auto">
            <div className="bg - zion - blue - dark / 50 rounded - lg border border - zion - cyan / 20 overflow - hidden">
              <div className="aspect - video bg - zion - blue - dark / 30 flex items - center justify - center">
                <Video className="w - 16 h - 16 text - zion - cyan"       />
              </div>
              <div className="p - 6">
                <h3 className="text - lg font - semibold text - white mb - 2">
                  Getting Started Guide
                </h3>
                <p className="text - zion - slate - light text - sm mb - 4">
                  Learn the basics of using Zion Tech Group in this
                  comprehensive tutorial.
                </p>
                <button className="text - zion - cyan hover:text - zion - cyan - light transition - colors text - sm font - medium">
                  Watch Video →
                </button>
              </div>
            </div>
            <div className="bg - zion - blue - dark / 50 rounded - lg border border - zion - cyan / 20 overflow - hidden">
              <div className="aspect - video bg - zion - blue - dark / 30 flex items - center justify - center">
                <Video className="w - 16 h - 16 text - zion - cyan"       />
              </div>
              <div className="p - 6">
                <h3 className="text - lg font - semibold text - white mb - 2">
                  Marketplace Mastery
                </h3>
                <p className="text - zion - slate - light text - sm mb - 4">
                  Master the art of listing services and finding opportunities.
                </p>
                <button className="text - zion - cyan hover:text - zion - cyan - light transition - colors text - sm font - medium">
                  Watch Video →
                </button>
              </div>
            </div>
            <div className="bg - zion - blue - dark / 50 rounded - lg border border - zion - cyan / 20 overflow - hidden">
              <div className="aspect - video bg - zion - blue - dark / 30 flex items - center justify - center">
                <Video className="w - 16 h - 16 text - zion - cyan"       />
              </div>
              <div className="p - 6">
                <h3 className="text - lg font - semibold text - white mb - 2">
                  AI Services Overview
                </h3>
                <p className="text - zion - slate - light text - sm mb - 4">
                  Discover how to leverage our AI and technology services.
                </p>
                <button className="text - zion - cyan hover:text - zion - cyan - light transition - colors text - sm font - medium">
                  Watch Video →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Support */}
      <section className="py - 16 bg - zion - slate - dark">
        <div className="container mx - auto px - 4 text - center">
          <h2 className="text - 3xl font - bold text - white mb - 6">
            Still Need Help?
          </h2>
          <p className="text - zion - slate - light mb - 8 max - w-2xl mx - auto">
            Our support team is here to help you. Contact us through any of the
            channels below and we'll get back to you as soon as possible.
          </p>
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 max - w-4xl mx - auto">
            <div className="bg - zion - blue - dark / 50 p - 6 rounded - lg border border - zion - cyan / 20">
              <MessageCircle className="w - 12 h - 12 text - zion - cyan mx - auto mb - 4"       />
              <h3 className="text - lg font - semibold text - white mb - 2">
                Live Chat
              </h3>
              <p className="text - zion - slate - light text - sm mb - 4">
                Chat with our support team in real - time
              </p>
              <button className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg font - medium hover:bg - zion - cyan - light transition - colors">
                Start Chat
              </button>
            </div>
            <div className="bg - zion - blue - dark / 50 p - 6 rounded - lg border border - zion - cyan / 20">
              <Phone className="w - 12 h - 12 text - zion - cyan mx - auto mb - 4"       />
              <h3 className="text - lg font - semibold text - white mb - 2">
                Phone Support
              </h3>
              <p className="text - zion - slate - light text - sm mb - 4">
                Call us directly for immediate assistance
              </p>
              <a
                href="tel:+13024640950"
                className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg font - medium hover:bg - zion - cyan - light transition - colors inline - block"
              >
                Call Now
              </a>
            </div>
            <div className="bg - zion - blue - dark / 50 p - 6 rounded - lg border border - zion - cyan / 20">
              <Mail className="w - 12 h - 12 text - zion - cyan mx - auto mb - 4"       />
              <h3 className="text - lg font - semibold text - white mb - 2">
                Email Support
              </h3>
              <p className="text - zion - slate - light text - sm mb - 4">
                Send us a detailed message
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg font - medium hover:bg - zion - cyan - light transition - colors inline - block"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}