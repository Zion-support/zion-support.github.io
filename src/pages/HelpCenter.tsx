import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      description: "New to Zion Tech Group? Start here to learn the basics.",
      articles: [
        { title: "How to Get Started", path: "/help/getting-started" },
        { title: "Account Setup Guide", path: "/help/account-setup" },
        { title: "First Project Walkthrough", path: "/help/first-project" }
      ]
    },
    {
      title: "Services & Solutions",
      icon: "⚙️",
      description: "Learn about our services and how to use them effectively.",
      articles: [
        { title: "AI Solutions Guide", path: "/help/ai-solutions" },
        { title: "Cloud Migration Help", path: "/help/cloud-migration" },
        { title: "Security Implementation", path: "/help/security" }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      description: "Technical issues and troubleshooting guides.",
      articles: [
        { title: "Common Issues", path: "/help/common-issues" },
        { title: "API Documentation", path: "/docs" },
        { title: "Performance Optimization", path: "/help/performance" }
      ]
    },
    {
      title: "Billing & Account",
      icon: "💳",
      description: "Questions about billing, pricing, and account management.",
      articles: [
        { title: "Pricing Plans", path: "/pricing" },
        { title: "Billing FAQ", path: "/help/billing" },
        { title: "Account Management", path: "/help/account" }
      ]
    }
  ];

  const popularQuestions = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions.",
      category: "Getting Started"
    },
    {
      question: "What AI solutions do you offer?",
      answer: "We offer comprehensive AI solutions including machine learning models, natural language processing, computer vision, predictive analytics, and custom AI development tailored to your business needs.",
      category: "Services"
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      category: "Project Management"
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer comprehensive post-implementation support including maintenance, updates, training, and 24/7 technical support to ensure your solutions continue to perform optimally.",
      category: "Support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, troubleshooting guides, and contact our support team." />
        <meta name="keywords" content="help center, support, FAQ, troubleshooting, Zion Tech Group, customer service" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Help?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, get technical support, and access helpful resources 
              to make the most of Zion Tech Group's services.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or topics..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors text-lg"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Browse Help Topics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {helpCategories.map((category) => (
                <div key={category.title} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {category.articles.map((article) => (
                      <Link
                        key={article.title}
                        to={article.path}
                        className="block text-blue-400 hover:text-blue-300 transition-colors text-sm"
                      >
                        {article.title} →
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {popularQuestions.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6">
                  <div className="mb-4">
                    <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our support team is here to help you with any questions or issues. 
                We're committed to providing excellent customer service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Email Support</h3>
                  <p className="text-gray-300 text-sm">support@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Phone Support</h3>
                  <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 text-sm">Available 24/7</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Additional Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-400 mb-4">Comprehensive guides and technical documentation for all our services.</p>
                <Link
                  to="/docs"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Browse Documentation
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Video Tutorials</h3>
                <p className="text-gray-400 mb-4">Step-by-step video guides to help you get the most out of our services.</p>
                <Link
                  to="/webinars"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Watch Tutorials
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HelpCenter;