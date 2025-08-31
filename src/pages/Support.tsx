import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Brain, 
  Server, 
  Cloud,
  Lock,
  Database,
  Workflow,
  TrendingUp,
  Globe,
  MapPin
} from 'lucide-react';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      id: 'ai-services',
      name: 'AI & Automation Services',
      icon: <Brain className="w-6 h-6" />,
      articles: [
        'How to configure AI models',
        'Troubleshooting AI automation',
        'Best practices for AI implementation',
        'AI service scaling guide'
      ]
    },
    {
      id: 'it-infrastructure',
      name: 'IT & Infrastructure',
      icon: <Server className="w-6 h-6" />,
      articles: [
        'Infrastructure setup guide',
        'Cloud migration support',
        'Performance optimization tips',
        'Security configuration help'
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      icon: <Zap className="w-6 h-6" />,
      articles: [
        'Platform onboarding guide',
        'Customization options',
        'Integration setup help',
        'User management tips'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'We pride ourselves on fast response times. Standard support requests are typically responded to within 4 hours, while urgent issues receive immediate attention.'
    },
    {
      question: 'Do you provide training for your solutions?',
      answer: 'Yes! We provide comprehensive training for all our solutions, including initial setup training, ongoing support, and advanced feature training for your team.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC 2 compliance, end-to-end encryption, regular security audits, and 24/7 security monitoring.'
    },
    {
      question: 'Can I customize the solutions to fit my specific needs?',
      answer: 'Absolutely! All our solutions are highly customizable. We work closely with you to tailor the implementation to your specific business requirements and workflows.'
    },
    {
      question: 'What happens if I need help outside of business hours?',
      answer: 'We provide 24/7 support for all our enterprise customers. Our support team is available around the clock to ensure your business never stops.'
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available',
      color: 'text-cyan-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 4 hours',
      color: 'text-purple-400'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Get instant help online',
      contact: 'Available on website',
      availability: 'Business hours',
      color: 'text-green-400'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: <BookOpen className="w-8 h-8" />,
      link: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <Video className="w-8 h-8" />,
      link: '/training',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      icon: <FileText className="w-8 h-8" />,
      link: '/help',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: <Users className="w-8 h-8" />,
      link: '/community',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? supportCategories 
    : supportCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6">
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              We're Here to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Help
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the support you need to succeed with our comprehensive help resources, 
              expert assistance, and dedicated support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach our support team. We're here to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className={method.color}>{method.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{method.contact}</div>
                <div className="text-sm text-gray-400">{method.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find help articles and guides organized by service category
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
            >
              All Categories
            </button>
            {supportCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="text-cyan-400 mr-3">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                </div>
                <ul className="space-y-3">
                  {category.articles.map((article, index) => (
                    <li key={index}>
                      <Link 
                        to="#" 
                        className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/help/${category.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mt-4 font-medium"
                >
                  View All Articles <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions about our services and support
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of documentation, tutorials, and learning materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-200 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm">{resource.description}</p>
                <div className="flex items-center text-cyan-400 mt-4 font-medium group-hover:translate-x-1 transition-transform duration-200">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Support Features */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Support?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We go above and beyond to ensure your success with our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
              <p className="text-gray-300">Round-the-clock support for enterprise customers</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with deep technical expertise</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Proactive Support</h3>
              <p className="text-gray-300">We identify and resolve issues before they impact you</p>
            </div>
            
            <div className="text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Continuous Improvement</h3>
              <p className="text-gray-300">We constantly enhance our support based on your feedback</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is ready to assist you with any questions or issues you may have.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Contact Support
            </Link>
            <Link
              to="/help"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              <BookOpen className="w-5 h-5 inline mr-2" />
              Browse Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}