import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Search, 
  FileText, 
  Video, 
  Users, 
  Zap, 
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Help() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      description: "New to Zion Tech Group? Start here to learn the basics",
      articles: [
        { title: "Welcome to Zion Tech Group", href: "#", description: "Your first steps with our platform" },
        { title: "Account Setup Guide", href: "#", description: "How to create and configure your account" },
        { title: "Service Overview", href: "#", description: "Understanding our service portfolio" }
      ]
    },
    {
      title: "Services & Solutions",
      icon: BookOpen,
      color: "from-purple-600 to-pink-600",
      description: "Learn how to use our various services and solutions",
      articles: [
        { title: "AI Services Guide", href: "#", description: "How to implement AI solutions" },
        { title: "Cloud DevOps Setup", href: "#", description: "Setting up cloud infrastructure" },
        { title: "Cybersecurity Best Practices", href: "#", description: "Security implementation guide" }
      ]
    },
    {
      title: "Account & Billing",
      icon: FileText,
      color: "from-green-600 to-emerald-600",
      description: "Manage your account, billing, and subscription",
      articles: [
        { title: "Billing & Payments", href: "#", description: "Understanding your invoices and payments" },
        { title: "Subscription Management", href: "#", description: "How to modify your subscription" },
        { title: "Account Settings", href: "#", description: "Customize your account preferences" }
      ]
    },
    {
      title: "Technical Support",
      icon: MessageCircle,
      color: "from-orange-600 to-red-600",
      description: "Get help with technical issues and troubleshooting",
      articles: [
        { title: "Common Issues", href: "#", description: "Solutions to frequent problems" },
        { title: "API Documentation", href: "#", description: "Technical API reference" },
        { title: "Integration Guides", href: "#", description: "Connect with your existing systems" }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      icon: MessageCircle,
      description: "Get help from our support team",
      href: "/contact",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Request Quote",
      icon: FileText,
      description: "Get pricing for our services",
      href: "/request-quote",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "View Services",
      icon: BookOpen,
      description: "Explore our service portfolio",
      href: "/services-overview",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Check Status",
      icon: Zap,
      description: "Monitor service status",
      href: "/status",
      color: "from-orange-600 to-red-600"
    }
  ];

  const contactMethods = [
    {
      title: "Phone Support",
      icon: Phone,
      description: "Call us for immediate assistance",
      contact: "+1 302 464 0950",
      href: "tel:+13024640950",
      available: "Mon-Fri 9AM-6PM EST"
    },
    {
      title: "Email Support",
      icon: Mail,
      description: "Send us a detailed message",
      contact: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      available: "24/7 response within 4 hours"
    },
    {
      title: "Live Chat",
      icon: MessageCircle,
      description: "Chat with our support team",
      contact: "Available on website",
      href: "#",
      available: "Mon-Fri 9AM-6PM EST"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers, documentation, and contact our support team."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support & Guidance
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our services, 
              and get the support you need to succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-800/70 border border-slate-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none text-white placeholder-slate-400 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quick Actions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get help quickly with these common actions and support options.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  to={action.href}
                  className="block bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{action.description}</p>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse our organized help content to find the information you need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-slate-300 mb-4">{category.description}</p>
                
                <div className="space-y-3">
                  {category.articles.map((article) => (
                    <Link
                      key={article.title}
                      to={article.href}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-sm text-slate-400">{article.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Contact Our Support Team
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-slate-300 mb-4">{method.description}</p>
                
                <a
                  href={method.href}
                  className="block text-blue-400 hover:text-blue-300 font-medium mb-2 transition-colors"
                >
                  {method.contact}
                </a>
                <p className="text-sm text-slate-400">{method.available}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </Link>
              <Link 
                to="/faq"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}