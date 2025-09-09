import React, { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, Clock, Search, BookOpen, FileText, HelpCircle, MessageSquare, Headphones } from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'technical',
      name: 'Technical Support',
      description: 'Get help with technical issues, troubleshooting, and system configuration.',
      icon: '🔧',
      articles: 45,
      responseTime: '< 2 hours'
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      description: 'Questions about pricing, invoices, payment methods, and account management.',
      icon: '💳',
      articles: 23,
      responseTime: '< 4 hours'
    },
    {
      id: 'product',
      name: 'Product Support',
      description: 'Learn how to use our products, features, and integrations effectively.',
      icon: '📱',
      articles: 67,
      responseTime: '< 1 hour'
    },
    {
      id: 'api',
      name: 'API & Integration',
      description: 'Technical documentation and support for developers and integrations.',
      icon: '🔌',
      articles: 34,
      responseTime: '< 6 hours'
    }
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. We'll send you an email with a secure link to create a new password.",
      category: 'account'
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All payments are processed securely.",
      category: 'billing'
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through live chat, email at support@ziontechgroup.com, or by phone at +1 (555) 123-4567. We're available 24/7 for urgent issues.",
      category: 'support'
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our services. If you're not satisfied, contact our support team within 30 days of purchase for a full refund.",
      category: 'billing'
    },
    {
      question: "How do I integrate your API?",
      answer: "We provide comprehensive API documentation, SDKs, and code examples. You can also schedule a consultation with our technical team for custom integration support.",
      category: 'technical'
    },
    {
      question: "What are your service level agreements?",
      answer: "Our SLA guarantees 99.9% uptime for all services. We provide detailed SLA documentation and real-time status monitoring for enterprise customers.",
      category: 'technical'
    }
  ];

  const contactMethods = [
    {
      method: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat'
    },
    {
      method: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: '24/7',
      responseTime: '< 5 min',
      action: 'Call Now'
    },
    {
      method: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      action: 'Send Email'
    },
    {
      method: 'Help Center',
      description: 'Browse our knowledge base',
      icon: BookOpen,
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Browse Articles'
    }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <SEO 
        title="Customer Support - Zion Tech Group Help & Assistance" 
        description="Get comprehensive support for all Zion Tech Group products and services. 24/7 assistance, knowledge base, and expert help available." 
        canonical="/support" 
        url="https://ziontechgroup.com/support"
      />

      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Customer Support
            </h1>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              We're here to help you succeed. Get expert support, find answers quickly, 
              and access our comprehensive knowledge base.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-12 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-2xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Contact Methods */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Get Help Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 text-center hover:border-zion-cyan transition-all duration-300">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {method.method}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {method.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-zion-slate-light text-xs">
                      <span className="font-medium">Availability:</span> {method.availability}
                    </div>
                    <div className="text-zion-slate-light text-xs">
                      <span className="font-medium">Response:</span> {method.responseTime}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Support Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Support Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportCategories.map((category) => (
                <div key={category.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="text-zion-slate-light text-xs">
                      <span className="font-medium">Articles:</span> {category.articles}
                    </div>
                    <div className="text-zion-slate-light text-xs">
                      <span className="font-medium">Response:</span> {category.responseTime}
                    </div>
                  </div>
                  <Link to={`/help/${category.id}`} className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium">
                    Browse Articles →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'all'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-blue-light'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedCategory('account')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'account'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-blue-light'
                  }`}
                >
                  Account
                </button>
                <button
                  onClick={() => setSelectedCategory('billing')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'billing'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-blue-light'
                  }`}
                >
                  Billing
                </button>
                <button
                  onClick={() => setSelectedCategory('technical')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === 'technical'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-blue-dark text-zion-slate-light hover:bg-zion-blue-light'
                  }`}
                >
                  Technical
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-zion-slate-light text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Our support team is ready to assist you with any questions or issues. 
                We're committed to providing you with the best possible experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium">
                  Contact Support
                </Link>
                <Link to="/help" className="px-8 py-3 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium">
                  Browse Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}