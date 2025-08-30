import React, { useState } from 'react.ts';
import { Link  } from 'react-router-dom.ts';
import { motion  } from 'framer-motion.ts';
import { HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  Search, 
  BookOpen, 
  Video, 
  Users, 
  Zap, 
  Shield,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Lock,
  Cpu,
  Star
 } from 'lucide-react';
import { SEO  } from '../components/SEO';

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Support', icon: HelpCircle, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai', name: 'AI Services', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, color: 'from-blue-500 to-cyan-600' },
    { id: 'security', name: 'Security', icon: Shield, color: 'from-red-500 to-orange-600' },
    { id: 'infrastructure', name: 'Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-600' },
    { id: 'quantum', name: 'Quantum Tech', icon: Star, color: 'from-indigo-500 to-purple-600' }
  ];

  const commonIssues = [
    {
      category: 'ai',
      title: 'AI Model Training Issues',
      description: 'Problems with AI model training and optimization',
      solution: 'Check data quality, adjust hyperparameters, and verify GPU resources',
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'cloud',
      title: 'Cloud Deployment Failures',
      description: 'Issues with cloud infrastructure deployment',
      solution: 'Verify credentials, check resource limits, and review deployment logs',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'security',
      title: 'Authentication Problems',
      description: 'User login and access control issues',
      solution: 'Reset credentials, check permissions, and verify network access',
      icon: Shield,
      color: 'from-red-500 to-orange-600'
    },
    {
      category: 'infrastructure',
      title: 'Performance Degradation',
      description: 'Slow system performance and bottlenecks',
      solution: 'Monitor resource usage, optimize queries, and scale resources',
      icon: Cpu,
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'quantum',
      title: 'Quantum Algorithm Errors',
      description: 'Issues with quantum computing algorithms',
      solution: 'Verify qubit states, check error correction, and optimize circuits',
      icon: Star,
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our AI-powered support team',
      icon: MessageCircle,
      color: 'from-cyan-500 to-blue-600',
      availability: '24/7',
      responseTime: '< 2 minutes',
      features: ['AI-powered responses', 'Human escalation', 'File sharing', 'Screen sharing']
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      color: 'from-green-500 to-emerald-600',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      features: ['Direct expert access', 'Complex issue resolution', 'Training support', 'Emergency response']
    },
    {
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      icon: Mail,
      color: 'from-purple-500 to-pink-600',
      availability: '24/7',
      responseTime: '< 4 hours',
      features: ['Detailed documentation', 'Screenshot support', 'Code review', 'Long-form solutions']
    }
  ];

  const quickActions = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive documentation and guides',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-600',
      link: '/docs',
      articles: '500+ articles'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      color: 'from-green-500 to-emerald-600',
      link: '/training',
      videos: '200+ videos'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and share solutions',
      icon: Users,
      color: 'from-purple-500 to-pink-600',
      link: '/community',
      members: '10K+ members'
    },
    {
      title: 'API Documentation',
      description: 'Technical API references and examples',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      link: '/api',
      endpoints: '100+ endpoints'
    }
  ];

  const filteredIssues = selectedCategory === 'all' 
    ? commonIssues 
    : commonIssues.filter(issue => issue.category === selectedCategory);

  const filteredSearchIssues = searchQuery 
    ? filteredIssues.filter(issue => 
        issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        issue.description.toLowerCase().includes(searchQuery.toLowerCase())
  {/* Removed stray closing parenthesis */}
    : filteredIssues;

  return (
  {/* Empty JSX fragment */}
      <SEO 
        title="Support Center - Zion Tech Group"
        description="Get expert technical support for all Zion Tech Group services. 24/7 AI-powered assistance, phone support, and comprehensive resources."
        canonical="/support"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
                <HelpCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Support Center
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Get expert technical support for all our services. Our AI-powered support team and technical experts are here to help you succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search for help articles, tutorials, or common issues..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/70 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">24/7</div>
                  <div className="text-slate-400">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">&lt; 2min</div>
                  <div className="text-slate-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-slate-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">How Can We Help You?</h2>
              <p className="text-xl text-slate-300">Choose the support channel that works best for your needs</p>
            </div>
            
            <div className="grid grid-cols-1 lg: grid-cols-3 gap-8">
              {supportChannels.map((channel, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{channel.title}</h3>
                  <p className="text-slate-300 mb-6">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Available: {channel.availability}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {channel.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="h-3 w-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Get Support
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Common Issues & Solutions</h2>
              <p className="text-xl text-slate-300">Find quick solutions to frequently encountered problems</p>
            </div>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white`
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* Issues Grid */}
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-6">
              {filteredSearchIssues.map((issue, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${issue.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <issue.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{issue.title}</h3>
                      <p className="text-slate-300 text-sm mb-3">{issue.description}</p>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-200 text-sm">
                          <span className="font-semibold text-cyan-400">Solution:</span> {issue.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredSearchIssues.length === 0 && (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">No issues found matching your search. Try a different query or category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Helpful Resources</h2>
              <p className="text-xl text-slate-300">Access our comprehensive knowledge base and learning materials</p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <resource.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-slate-300 text-sm mb-3">{resource.description}</p>
                  
                  <div className="text-cyan-400 text-sm mb-4">
                    {resource.articles || resource.videos || resource.members || resource.endpoints}
                  </div>
                  
                  <Link
                    to={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
                  >
                    Explore Resource
                    <span className="ml-1">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Our expert support team is ready to assist you with  technical questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Contact Support
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )}
