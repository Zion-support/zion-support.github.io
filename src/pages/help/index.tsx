import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Settings,
  CreditCard,
  Lock
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const helpCategories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Learn the basics and set up your account',
    articles: [
      'Creating your first account',
      'Setting up your profile',
      'Navigating the platform',
      'First steps with our services'
    ]
  },
  {
    icon: Settings,
    title: 'Account & Settings',
    description: 'Manage your account and preferences',
    articles: [
      'Updating profile information',
      'Changing password',
      'Notification preferences',
      'Privacy settings'
    ]
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    description: 'Manage your subscriptions and payments',
    articles: [
      'Understanding pricing',
      'Payment methods',
      'Billing cycles',
      'Invoice management'
    ]
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Keep your account safe and secure',
    articles: [
      'Two-factor authentication',
      'Password security',
      'Data privacy',
      'Account recovery'
    ]
  },
  {
    icon: Users,
    title: 'Team Management',
    description: 'Manage your team and permissions',
    articles: [
      'Adding team members',
      'Role permissions',
      'Team collaboration',
      'Access control'
    ]
  },
  {
    icon: Globe,
    title: 'API & Integrations',
    description: 'Connect with external services',
    articles: [
      'API documentation',
      'Webhook setup',
      'Third-party integrations',
      'Custom development'
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with Zion Tech Group?',
    answer: 'Getting started is easy! Simply create an account, complete your profile, and browse our marketplace for the services you need. Our onboarding process will guide you through each step.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely through our payment partners.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time through your account settings. There are no cancellation fees, and you\'ll continue to have access until the end of your current billing period.'
  },
  {
    question: 'How do I get support if I have an issue?',
    answer: 'We offer multiple support channels including live chat, email support, and phone support for enterprise customers. Our support team is available 24/7 to help you resolve any issues.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade security measures including encryption, regular security audits, and compliance with industry standards like SOC 2 and GDPR.'
  },
  {
    question: 'Can I integrate Zion Tech Group with my existing systems?',
    answer: 'Yes! We provide comprehensive APIs and webhooks that allow you to integrate our services with your existing business systems and workflows.'
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    action: 'Start Chat',
    href: '#',
    available: true
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    action: 'Send Email',
    href: 'mailto:support@ziontechgroup.com',
    available: true
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our experts',
    action: 'Call Us',
    href: 'tel:+13024640950',
    available: true
  },
  {
    icon: Video,
    title: 'Video Call',
    description: 'Schedule a screen sharing session',
    action: 'Schedule Call',
    href: '/contact',
    available: true
  }
];

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Help Center | Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, tutorials, and contact our support team."
        canonical="https://ziontechgroup.com/help"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                How Can We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Help?</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Find answers to your questions, learn how to use our services, and get the support you need 
                to succeed with Zion Tech Group.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search for help articles, tutorials, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Help Categories
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Browse our help articles organized by topic to find the information you need quickly.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Popular Articles:</h4>
                    <ul className="space-y-1">
                      {category.articles.map((article, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {article}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors"
                  >
                    Browse Articles
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Quick answers to the most common questions our users ask.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-zion-slate-light">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Our support team is here to help you succeed. Choose the contact method that works best for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-zion-slate-light mb-4">{method.description}</p>
                  
                  <a
                    href={method.href}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      method.available
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/20'
                        : 'bg-zion-slate-light/20 text-zion-slate-light cursor-not-allowed'
                    }`}
                  >
                    {method.action}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                If you haven't found the help you need, our team is ready to assist you personally.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Contact Support
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}