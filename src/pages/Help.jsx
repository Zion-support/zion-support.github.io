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
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
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
                  <span className="text-white font-medium">{faq.question}</span>
                  {expandedSections[`faq-${index}`] ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                {expandedSections[`faq-${index}`] && (
                  <div className="px-6 pb-4">
                    <p className="text-zion-slate-light mb-3">{faq.answer}</p>
                    <Link 
                      to={faq.link} 
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium inline-flex items-center"
                    >
                      Learn more <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Still need help? Contact us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <div className="text-zion-cyan mb-4 flex justify-center">{method.icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{method.title}</h3>
                <p className="text-zion-slate-light mb-4">{method.description}</p>
                <div className="text-zion-cyan font-medium mb-4">{method.contact}</div>
                <a
                  href={method.link}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform"
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/faq" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Complete FAQ</h3>
              <p className="text-zion-slate-light mb-4">Browse our comprehensive FAQ section for detailed answers</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                View FAQ →
              </span>
            </Link>

            <Link 
              to="/blog" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Help Articles</h3>
              <p className="text-zion-slate-light mb-4">Read detailed guides and tutorials in our blog</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Read Articles →
              </span>
            </Link>

            <Link 
              to="/contact" 
              className="bg-zinc-800/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
            >
              <div className="text-zion-cyan mb-4 flex justify-center">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Contact Form</h3>
              <p className="text-zion-slate-light mb-4">Send us a message and we'll get back to you quickly</p>
              <span className="text-zion-cyan group-hover:text-zion-cyan-light transition-colors font-medium">
                Contact Us →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}