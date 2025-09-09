<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
export default function HelpCenter() {
    const helpCategories = [
        {
            title: "Getting Started",
            description: "Learn the basics of using Zion's platform",
            icon: BookOpen,
            color: "from-zion-cyan to-zion-blue",
            link: "/help/getting-started"
        },
        {
            title: "Account & Profile",
            description: "Manage your account settings and profile",
            icon: Settings,
            color: "from-zion-purple to-zion-purple-dark",
            link: "/help/account-profile"
        },
        {
            title: "Marketplace",
            description: "How to buy, sell, and navigate the marketplace",
            icon: Zap,
            color: "from-zion-green to-zion-cyan",
            link: "/help/marketplace"
        },
        {
            title: "Talent & Hiring",
            description: "Find talent and get hired on the platform",
            icon: Users,
            color: "from-zion-orange to-zion-red",
            link: "/help/talent-hiring"
        },
        {
            title: "Payments & Billing",
            description: "Understanding payment methods and billing",
            icon: Shield,
            color: "from-zion-blue to-zion-purple",
            link: "/help/payments-billing"
        },
        {
            title: "API & Integration",
            description: "Developer resources and API documentation",
            icon: FileText,
            color: "from-zion-purple to-zion-cyan",
            link: "/help/api-integration"
        }
    ];
    const quickActions = [
        {
            title: "Contact Support",
            description: "Get help from our support team",
            icon: MessageCircle,
            action: "mailto:support@ziontechgroup.com",
            external: true
        },
        {
            title: "Schedule a Call",
            description: "Book a consultation with our experts",
            icon: Phone,
            action: "/contact",
            external: false
        },
        {
            title: "Live Chat",
            description: "Chat with us in real-time",
            icon: MessageCircle,
            action: "#",
            external: false
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Help Center - Zion Tech Group Support", description: "Get help and support for using Zion's AI and technology marketplace platform.", keywords: "help center, support, Zion Tech Group, customer service, FAQ, documentation", canonical: "https://ziontechgroup.com/help" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Help Center" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Find answers, get support, and learn how to make the most of Zion's platform" })] }), _jsx("div", { className: "max-w-2xl mx-auto mb-16", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" }), _jsx("input", { type: "text", placeholder: "Search for help articles, guides, and support...", className: "w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple" })] }) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Quick Actions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: quickActions.map((action, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx(action.icon, { className: "w-8 h-8 text-zion-cyan mr-3" }), _jsx("h3", { className: "text-xl font-semibold text-white", children: action.title })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: action.description }), action.external ? (_jsx("a", { href: action.action, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Get Started \u2192" })) : (_jsx(Link, { to: action.action, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Get Started \u2192" }))] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Help Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: helpCategories.map((category, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-all hover:shadow-lg", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: `p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`, children: _jsx(category.icon, { className: "w-6 h-6 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold text-white", children: category.title })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: category.description }), _jsx(Link, { to: category.link, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors", children: "Learn More \u2192" })] }, index))) })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Still need help?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", asChild: true, children: _jsx(Link, { to: "/contact", children: "Contact Support" }) }), _jsx(Button, { variant: "outline", className: "border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white", asChild: true, children: _jsx(Link, { to: "/faq", children: "View FAQ" }) })] })] })] }) }), _jsx(Footer, {})] }));
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Users, 
  ShoppingCart, 
  User, 
  Settings,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  ChevronRight,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    description: 'Learn the basics and set up your account',
    icon: BookOpen,
    articles: [
      { title: 'How to create your first account', readTime: '3 min', popular: true },
      { title: 'Setting up your profile', readTime: '5 min', popular: false },
      { title: 'Navigating the marketplace', readTime: '4 min', popular: true },
      { title: 'Understanding pricing plans', readTime: '6 min', popular: false }
    ]
  },
  {
    id: 'marketplace',
    name: 'Marketplace',
    description: 'Buy, sell, and manage marketplace activities',
    icon: ShoppingCart,
    articles: [
      { title: 'How to list a product or service', readTime: '8 min', popular: true },
      { title: 'Making secure transactions', readTime: '5 min', popular: true },
      { title: 'Managing your listings', readTime: '6 min', popular: false },
      { title: 'Understanding fees and commissions', readTime: '7 min', popular: false }
    ]
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    description: 'Using AI tools and services effectively',
    icon: Settings,
    articles: [
      { title: 'Getting started with AI tools', readTime: '10 min', popular: true },
      { title: 'AI service integration guide', readTime: '12 min', popular: false },
      { title: 'Troubleshooting AI services', readTime: '8 min', popular: false },
      { title: 'Best practices for AI implementation', readTime: '15 min', popular: true }
    ]
  },
  {
    id: 'account-management',
    name: 'Account & Billing',
    description: 'Manage your account, billing, and settings',
    icon: User,
    articles: [
      { title: 'Updating account information', readTime: '4 min', popular: false },
      { title: 'Managing subscription plans', readTime: '6 min', popular: true },
      { title: 'Payment methods and billing', readTime: '7 min', popular: true },
      { title: 'Account security settings', readTime: '5 min', popular: false }
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with Zion Tech Group?',
    answer: 'Getting started is easy! Simply create an account, complete your profile, and start exploring our marketplace. You can browse services, connect with experts, or list your own offerings.',
    category: 'Getting Started'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise accounts. All transactions are secured with bank-level encryption and fraud protection.',
    category: 'Billing & Payments'
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach our support team through live chat, email at support@ziontechgroup.com, or phone at +1 302 464 0950. We typically respond within 2-4 hours.',
    category: 'Support'
  },
  {
    question: 'Is my data secure on your platform?',
    answer: 'Absolutely. We use enterprise-grade security measures including SOC 2 compliance, end-to-end encryption, and regular security audits to protect your data and privacy.',
    category: 'Security'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no cancellation fees. You\'ll continue to have access to your plan until the end of your current billing period.',
    category: 'Billing & Payments'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied with our services, contact our support team for a full refund.',
    category: 'Billing & Payments'
  }
];

const supportChannels = [
  {
    name: 'Live Chat',
    description: 'Get instant help from our support team',
    icon: MessageCircle,
    responseTime: '2-5 minutes',
    available: '24/7',
    href: '#chat'
  },
  {
    name: 'Email Support',
    description: 'Send us a detailed message for complex issues',
    icon: Mail,
    responseTime: '2-4 hours',
    available: '24/7',
    href: 'mailto:support@ziontechgroup.com'
  },
  {
    name: 'Phone Support',
    description: 'Speak directly with our support specialists',
    icon: Phone,
    responseTime: 'Immediate',
    available: 'Mon-Fri 9AM-6PM EST',
    href: 'tel:+13024640950'
  },
  {
    name: 'Knowledge Base',
    description: 'Browse our comprehensive help articles',
    icon: FileText,
    responseTime: 'Instant',
    available: '24/7',
    href: '#knowledge-base'
  }
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
    console.log('Searching for:', searchQuery);
  };

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Find answers to your questions, learn how to use our platform, and get the support you need 
              to succeed with Zion Tech Group.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Help Fast
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're here to help 24/7.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{channel.description}</p>
                <div className="space-y-2 text-xs text-zion-slate-light">
                  <div className="flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Response: {channel.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span>Available: {channel.available}</span>
                  </div>
                </div>
                <a
                  href={channel.href}
                  className="inline-flex items-center mt-4 text-zion-cyan hover:text-zion-purple transition-colors text-sm font-medium"
                >
                  Get Help
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our organized help content by category to find exactly what you need.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-zion-cyan text-white'
                  : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 bg-zion-slate-dark/30 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white mb-1">{article.title}</h4>
                        <div className="flex items-center text-xs text-zion-slate-light">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{article.readTime}</span>
                          {article.popular && (
                            <div className="flex items-center ml-2">
                              <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                              <span className="text-yellow-400">Popular</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find quick answers to the most common questions about our platform and services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Contact Support
              </Link>
              <a
                href="mailto:support@ziontechgroup.com"
                className="btn-neon px-8 py-4 text-lg"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
