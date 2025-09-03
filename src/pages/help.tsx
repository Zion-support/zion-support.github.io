import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Video, 
  FileText, 
  Users, 
  Settings,
  ChevronRight,
  ExternalLink,
  Clock,
  CheckCircle
} from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Learn about our services and how to get started',
          readTime: '5 min read',
          type: 'guide'
        },
        {
          title: 'Setting Up Your Account',
          description: 'Step-by-step guide to create and configure your account',
          readTime: '3 min read',
          type: 'tutorial'
        },
        {
          title: 'Understanding Our Services',
          description: 'Overview of AI, cybersecurity, and cloud solutions',
          readTime: '7 min read',
          type: 'guide'
        }
      ]
    },
    {
      id: 'services',
      name: 'Services',
      icon: Settings,
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          title: 'AI Solutions Overview',
          description: 'Comprehensive guide to our AI services and capabilities',
          readTime: '10 min read',
          type: 'guide'
        },
        {
          title: 'Cybersecurity Best Practices',
          description: 'Essential security measures for your business',
          readTime: '8 min read',
          type: 'guide'
        },
        {
          title: 'Cloud Migration Process',
          description: 'How we help you migrate to the cloud safely',
          readTime: '12 min read',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          title: 'System Requirements',
          description: 'Hardware and software requirements for our solutions',
          readTime: '4 min read',
          type: 'reference'
        },
        {
          title: 'Troubleshooting Common Issues',
          description: 'Solutions to frequently encountered problems',
          readTime: '6 min read',
          type: 'troubleshooting'
        },
        {
          title: 'API Documentation',
          description: 'Complete API reference and integration guides',
          readTime: '15 min read',
          type: 'reference'
        }
      ]
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      articles: [
        {
          title: 'Understanding Your Bill',
          description: 'How to read and understand your service charges',
          readTime: '3 min read',
          type: 'guide'
        },
        {
          title: 'Payment Methods',
          description: 'Accepted payment methods and billing cycles',
          readTime: '2 min read',
          type: 'reference'
        },
        {
          title: 'Upgrading Your Plan',
          description: 'How to upgrade or modify your service plan',
          readTime: '4 min read',
          type: 'tutorial'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 8AM-6PM EST',
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      icon: Mail,
      availability: 'Response within 2 hours',
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Video Consultation',
      description: 'Schedule a one-on-one session with our experts',
      icon: Video,
      availability: 'By appointment',
      action: 'Schedule',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = filteredCategories.flatMap(category => 
    category.articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group"
        description="Get help and support for Zion Tech Group services. Find guides, tutorials, and contact our support team."
        keywords="help, support, documentation, guides, Zion Tech Group, customer service"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Help
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Center
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Find answers, get support, and learn how to make the most of our technology solutions.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 text-lg"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-zion-cyan text-white'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/20'
                }`}
              >
                All Categories
              </button>
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-20">
          {/* Help Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Knowledge Base</h2>
            
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-3">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs text-zion-cyan font-medium uppercase tracking-wide">
                          {article.type}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center text-xs text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-zion-slate-dark/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-zion-slate-light" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                <p className="text-zion-slate-light">Try searching with different keywords or browse our categories.</p>
              </div>
            )}
          </div>

          {/* Support Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-zion-cyan mb-4">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {option.availability}
                  </div>
                  
                  <button className={`w-full py-2 px-4 bg-gradient-to-r ${option.color} text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                    {option.action}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Still Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-zion-cyan mr-3" />
                    <div>
                      <span className="text-white font-medium">Phone: </span>
                      <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan/80">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-zion-cyan mr-3" />
                    <div>
                      <span className="text-white font-medium">Email: </span>
                      <a href="mailto:support@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan/80">
                        support@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-zion-cyan mr-3 mt-1" />
                    <div>
                      <span className="text-white font-medium">Business Hours: </span>
                      <div className="text-zion-slate-light">
                        Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                        Saturday: 9:00 AM - 2:00 PM EST<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="/contact"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
                  >
                    Submit Support Ticket
                  </a>
                  <a
                    href="/faq"
                    className="block w-full py-3 px-4 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan/10 transition-colors duration-300 text-center"
                  >
                    View FAQ
                  </a>
                  <a
                    href="/services"
                    className="block w-full py-3 px-4 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple/10 transition-colors duration-300 text-center"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;