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
import { Search, BookOpen, Video, FileText, MessageCircle, Phone, Mail, HelpCircle, Zap, Brain, Shield, Cloud, Rocket, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, Target, Lightbulb, TrendingUp, Award, ChevronRight, ExternalLink, Download, Play, Headphones, Calendar, Clock, Star, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'New to Zion Tech Group? Start here to learn the basics.',
      color: 'from-cyan-400 to-blue-500',
      articles: [
        { title: 'Welcome to Zion Tech Group', type: 'guide', time: '5 min read', path: '/help-center/getting-started/welcome' },
        { title: 'Setting Up Your Account', type: 'tutorial', time: '10 min read', path: '/help-center/getting-started/setup' },
        { title: 'First Steps with Our Platform', type: 'guide', time: '8 min read', path: '/help-center/getting-started/first-steps' },
        { title: 'Understanding Our Services', type: 'overview', time: '15 min read', path: '/help-center/getting-started/services-overview' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Analytics',
      icon: Brain,
      description: 'Learn how to use our AI-powered solutions effectively.',
      color: 'from-purple-400 to-pink-500',
      articles: [
        { title: 'AI Model Training Guide', type: 'tutorial', time: '20 min read', path: '/help-center/ai-services/model-training' },
        { title: 'Data Analytics Best Practices', type: 'guide', time: '12 min read', path: '/help-center/ai-services/analytics-best-practices' },
        { title: 'Machine Learning Workflows', type: 'tutorial', time: '25 min read', path: '/help-center/ai-services/ml-workflows' },
        { title: 'AI Ethics and Compliance', type: 'guide', time: '10 min read', path: '/help-center/ai-services/ethics-compliance' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security best practices and threat protection guides.',
      color: 'from-red-400 to-orange-500',
      articles: [
        { title: 'Security Setup Guide', type: 'tutorial', time: '15 min read', path: '/help-center/cybersecurity/security-setup' },
        { title: 'Threat Detection & Response', type: 'guide', time: '18 min read', path: '/help-center/cybersecurity/threat-detection' },
        { title: 'Compliance & Auditing', type: 'guide', time: '12 min read', path: '/help-center/cybersecurity/compliance' },
        { title: 'Incident Response Procedures', type: 'tutorial', time: '20 min read', path: '/help-center/cybersecurity/incident-response' }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Cloud infrastructure and DevOps automation guides.',
      color: 'from-blue-400 to-indigo-500',
      articles: [
        { title: 'Cloud Migration Guide', type: 'tutorial', time: '30 min read', path: '/help-center/cloud-devops/migration' },
        { title: 'DevOps Pipeline Setup', type: 'tutorial', time: '25 min read', path: '/help-center/cloud-devops/pipeline-setup' },
        { title: 'Infrastructure as Code', type: 'guide', time: '20 min read', path: '/help-center/cloud-devops/iac' },
        { title: 'Container Orchestration', type: 'tutorial', time: '22 min read', path: '/help-center/cloud-devops/containers' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Rocket,
      description: 'Quantum technology and quantum AI solutions.',
      color: 'from-indigo-400 to-purple-500',
      articles: [
        { title: 'Quantum Computing Basics', type: 'guide', time: '15 min read', path: '/help-center/quantum-computing/basics' },
        { title: 'Quantum AI Applications', type: 'tutorial', time: '20 min read', path: '/help-center/quantum-computing/quantum-ai' },
        { title: 'Quantum Algorithm Development', type: 'advanced', time: '35 min read', path: '/help-center/quantum-computing/algorithms' },
        { title: 'Quantum Security Protocols', type: 'guide', time: '18 min read', path: '/help-center/quantum-computing/security' }
      ]
    },
    {
      id: 'iot-edge',
      title: 'IoT & Edge Computing',
      icon: Cpu,
      description: 'Connected devices and edge computing solutions.',
      color: 'from-green-400 to-teal-500',
      articles: [
        { title: 'IoT Device Setup', type: 'tutorial', time: '15 min read', path: '/help-center/iot-edge/device-setup' },
        { title: 'Edge Computing Architecture', type: 'guide', time: '20 min read', path: '/help-center/iot-edge/architecture' },
        { title: 'Sensor Network Management', type: 'tutorial', time: '18 min read', path: '/help-center/iot-edge/sensor-networks' },
        { title: 'IoT Security Best Practices', type: 'guide', time: '12 min read', path: '/help-center/iot-edge/security' }
      ]
    }
  ];

  const quickActions = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive technical guides and API references',
      path: '/docs',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and demonstrations',
      path: '/tutorials',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: FileText,
      title: 'White Papers',
      description: 'In-depth research and technical papers',
      path: '/white-papers',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      path: '/community',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help during business hours',
      availability: 'Mon-Fri, 9AM-6PM EST',
      response: 'Immediate',
      path: '/contact'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed responses to complex questions',
      availability: '24/7',
      response: 'Within 24 hours',
      path: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      response: 'Immediate',
      path: 'tel:+15551234567'
    },
    {
      icon: HelpCircle,
      title: 'Emergency Support',
      description: 'Critical system issues and outages',
      availability: '24/7',
      response: 'Within 2 hours',
      path: '/support/emergency'
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const selectedCategoryData = selectedCategory 
    ? helpCategories.find(cat => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group's technology solutions. Find guides, tutorials, and contact our support team."
      />
      
      <div className="container-responsive py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-6">
            <HelpCircle className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Help Center
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Find answers, learn best practices, and get support for all our technology solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-200 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{action.description}</p>
                <div className="flex items-center text-cyan-400 mt-3 group-hover:translate-x-1 transition-transform duration-200">
                  <span className="text-sm font-medium">Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Help Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <div
                key={category.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-200 cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    selectedCategory === category.id ? 'rotate-90' : ''
                  }`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{category.description}</p>
                
                {selectedCategory === category.id && (
                  <div className="space-y-3 pt-4 border-t border-slate-700/50">
                    {category.articles.map((article, articleIndex) => (
                      <Link
                        key={articleIndex}
                        to={article.path}
                        className="block p-3 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium text-sm">{article.title}</span>
                          <span className="text-xs text-slate-500">{article.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-2 py-1 bg-slate-600/50 rounded text-xs text-slate-300">
                            {article.type}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-4">
                  <option.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{option.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{option.availability}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                    <CheckCircle className="w-3 h-3" />
                    <span>{option.response}</span>
                  </div>
                </div>
                <Link
                  to={option.path}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                >
                  Get Help
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full mb-4">
                <Calendar className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Training Sessions</h3>
              <p className="text-slate-400 text-sm mb-4">Join our live training sessions and webinars</p>
              <Link
                to="/training"
                className="inline-flex items-center px-4 py-2 bg-slate-700/50 text-white text-sm font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
              >
                View Schedule
              </Link>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full mb-4">
                <Download className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Downloads</h3>
              <p className="text-slate-400 text-sm mb-4">Access software, tools, and resources</p>
              <Link
                to="/downloads"
                className="inline-flex items-center px-4 py-2 bg-slate-700/50 text-white text-sm font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
              >
                Browse Downloads
              </Link>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full mb-4">
                <Star className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Feedback</h3>
              <p className="text-slate-400 text-sm mb-4">Help us improve by sharing your feedback</p>
              <Link
                to="/feedback"
                className="inline-flex items-center px-4 py-2 bg-slate-700/50 text-white text-sm font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
              >
                Share Feedback
              </Link>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Still Need Help?
          </h3>
          <p className="text-slate-300 mb-8">
            Can't find what you're looking for? Our team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              Contact Support
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center px-8 py-4 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
