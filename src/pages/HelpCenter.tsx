// Removed unused: import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Video, FileText, MessageCircle, Mail, Phone, Users, Shield, Cloud, Brain, ArrowRight, Play, Star } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

export const HelpCenter: React.FC = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly",
      icon: "🚀",
      articles: ["Quick Start Guide", "Account Setup", "First Steps"]
    },
    {
      title: "Account & Billing",
      description: "Manage your account, billing, and subscription",
      icon: "💳",
      articles: ["Update Billing Info", "Change Plan", "Cancel Subscription"]
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues and troubleshooting",
      icon: "🔧",
      articles: ["Common Issues", "Error Messages", "Performance Tips"]
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security features and compliance documentation',
      color: 'from-red-500 to-orange-500',
      articles: [
        { title: 'Security Best Practices', type: 'guide', readTime: '20 min' },
        { title: 'Compliance Requirements', type: 'guide', readTime: '25 min' },
        { title: 'Access Control Setup', type: 'tutorial', readTime: '15 min' },
        { title: 'Audit Trail Management', type: 'guide', readTime: '18 min' }
      ]
    },
    {
      id: 'integrations',
      name: 'Integrations',
// Fixed missing name:       icon: Network,
      description: 'Third-party integrations and API documentation',
      color: 'from-indigo-500 to-purple-500',
      articles: [
        { title: 'API Reference Guide', type: 'reference', readTime: '40 min' },
        { title: 'Webhook Setup', type: 'tutorial', readTime: '20 min' },
        { title: 'Third-party Integrations', type: 'guide', readTime: '25 min' },
        { title: 'Custom Connectors', type: 'guide', readTime: '30 min' }
      ]
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
// Fixed missing name:       icon: HelpCircle,
      description: 'Common issues and solutions',
      color: 'from-yellow-500 to-orange-500',
      articles: [
        { title: 'Common Error Codes', type: 'reference', readTime: '15 min' },
        { title: 'Performance Issues', type: 'guide', readTime: '20 min' },
        { title: 'Connection Problems', type: 'guide', readTime: '18 min' },
        { title: 'Data Sync Issues', type: 'guide', readTime: '22 min' }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to set up your first project",
      description: "Step-by-step guide to creating your first project in Zion Tech Group",
      readTime: "5 min read"
    },
    {
      title: "Understanding AI service pricing",
      description: "Learn about our pricing structure and how to optimize costs",
      readTime: "8 min read"
    },
    {
      title: "Security best practices",
      description: "Essential security measures to protect your data and applications",
      readTime: "10 min read"
    },
    {
      title: "Troubleshooting common errors",
      description: "Solutions to the most frequently encountered issues",
      readTime: "6 min read"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users',
      availability: '24/7',
      responseTime: 'Varies',
      action: 'Visit Forum'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

// Removed unused:   const filteredArticles = filteredCategories.flatMap(cat => cat.articles);

  return (
    <Fragment>
      <Helmet>
        <title>Help Center - Zion Tech Group | Support & Documentation</title>
        <meta name="description" content="Get help with Zion Tech Group services. Access documentation, tutorials, video guides, and support resources." />
        <meta name="keywords" content="help center, support, documentation, tutorials, Zion Tech Group, user guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
// Fixed missing name:                 <HelpCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Help Center
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Find answers, learn best practices, and get the most out of Zion Tech Group services with our comprehensive help resources.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </motion.div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} onClick={() => console.log(`Navigate to ${category.title}`)}>
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.map((article, articleIndex) => (
                          <li key={articleIndex} className="text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                            {article}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{article.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{article.readTime}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </
  );
}

export default HelpCenter;
>