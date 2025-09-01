import { Link } from 'react - router - dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Video,
  Download,
  ArrowRight,
  Search,
  Ticket,
  Headphones,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

export const Support: React.FC = () => {
  const [selectedPriority, setSelectedPriority] = useState('medium');
  const [selectedCategory, setSelectedCategory] = useState('technical');

  const supportCategories = [
    {
      id: 'technical',
      name: 'Technical Support',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      description: 'Technical issues and troubleshooting',
      response: '4-8 hours'
    },
    {
      id: 'billing',
      name: 'Billing & Account',
      icon: FileText,
      color: 'from-green-600 to-emerald-600',
      description: 'Payment and account management',
      response: '24-48 hours'
    },
    {
      id: 'feature',
      name: 'Feature Requests',
      icon: Rocket,
      color: 'from-purple-600 to-pink-600',
      description: 'New features and improvements',
      response: '1-2 weeks'
    },
    {
      id: 'security',
      name: 'Security Issues',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Security concerns and vulnerabilities',
      response: '1-4 hours'
    }
  ];

  const priorityLevels = [
    {
      id: 'low',
      name: 'Low Priority',
      description: 'General questions and non-urgent issues',
      response: '24-48 hours',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'medium',
      name: 'Medium Priority',
      description: 'Standard support requests',
      response: '4-8 hours',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'high',
      name: 'High Priority',
      description: 'Service affecting issues',
      response: '1-4 hours',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'critical',
      name: 'Critical Priority',
      description: 'Service down or security issues',
      response: '15 minutes - 1 hour',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const supportChannels = [
    {
      title: '24/7 Emergency Support',
      icon: AlertCircle,
      description: 'Critical issues and service outages',
      availability: 'Always available',
      response: '15 minutes - 1 hour',
      color: 'from-red-600 to-pink-600',
      phone: '+1 302 464 0950'
    },
    {
      title: 'Live Chat Support',
      icon: MessageCircle,
      description: 'Real-time chat with support specialists',
      availability: '9 AM - 6 PM EST',
      response: 'Immediate',
      color: 'from-blue-600 to-cyan-600',
      link: '/chat'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      description: 'Direct phone support for complex issues',
      availability: '9 AM - 6 PM EST',
      response: 'Within 1 hour',
      color: 'from-green-600 to-emerald-600',
      phone: '+1 302 464 0950'
    },
    {
      title: 'Email Support',
      icon: Mail,
      description: 'Detailed email support for non-urgent matters',
      availability: '24/7',
      response: '4-24 hours',
      color: 'from-purple-600 to-pink-600',
      email: 'kleber@ziontechgroup.com'
    }
  ];

  const supportResources = [
    {
      title: 'Knowledge Base',
      icon: FileText,
      description: 'Comprehensive documentation and guides',
      articles: '500+ articles',
      link: '/help'
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      description: 'Step-by-step video guides',
      videos: '100+ tutorials',
      link: '/tutorials'
    },
    {
      title: 'Community Forum',
      icon: Users,
      description: 'Connect with other users',
      members: '10,000+ members',
      link: '/community'
    },
    {
      title: 'API Documentation',
      icon: Download,
      description: 'Complete API reference and examples',
      endpoints: '200+ endpoints',
      link: '/api-docs'
    }
  ];

  const commonIssues = [
    {
      issue: 'Service not responding',
      solution: 'Check your internet connection and try refreshing the page. If the issue persists, contact our 24/7 support.',
      category: 'technical'
    },
    {
      issue: 'Login problems',
      solution: 'Verify your credentials and check if your account is active. Reset password if needed.',
      category: 'account'
    },
    {
      issue: 'Slow performance',
      solution: 'Clear your browser cache, check your internet speed, and ensure you\'re using a supported browser.',
      category: 'technical'
    },
    {
      issue: 'Billing questions',
      solution: 'Check your billing history in your account dashboard or contact our billing support team.',
      category: 'billing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Technical Support - Zion Tech Group"
        description="Get technical support and assistance for all Zion Tech Group services. 24/7 support available for critical issues."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Technical
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Expert technical support when you need it most. Our team is here to help you succeed with our services.
            </p>
            
            {/* Quick Support Form */}
            <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">Need Immediate Help?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+13024640950"
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Emergency Support
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  Submit Ticket
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Categories</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Choose the right support category to get the fastest response for your issue.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-300 text-sm mb-3">{category.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">Response: {category.response}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Levels */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Priority Levels</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Understanding priority levels helps us provide the right level of support for your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorityLevels.map((priority, index) => (
              <motion.div
                key={priority.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 rounded-xl p-6 border transition-all duration-300 text-center ${
                  selectedPriority === priority.id ? 'border-cyan-400/50 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                }`}
                onClick={() => setSelectedPriority(priority.id)}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${priority.color} flex items-center justify-center mx-auto mb-4`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{priority.name}</h3>
                <p className="text-slate-300 text-sm mb-3">{priority.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">Response: {priority.response}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Channels</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Multiple ways to get support based on your needs and urgency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center`}>
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                    <p className="text-slate-400 text-sm">{channel.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Response Time:</span>
                    <span className="text-cyan-400">{channel.response}</span>
                  </div>
                </div>
                
                {channel.phone && (
                  <a
                    href={`tel:${channel.phone}`}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call {channel.phone}
                  </a>
                )}
                
                {channel.email && (
                  <a
                    href={`mailto:${channel.email}`}
                    className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </a>
                )}
                
                {channel.link && (
                  <Link
                    to={channel.link}
                    className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Start Chat
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Common Issues & Solutions</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Quick solutions to frequently encountered problems.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {commonIssues.map((item, index) => (
              <motion.div
                key={item.issue}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.issue}</h3>
                <p className="text-slate-300 mb-3">{item.solution}</p>
                <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                  {item.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Support Resources</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Access helpful resources to resolve issues and learn more about our services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={resource.link}>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3">{resource.description}</p>
                    <div className="text-cyan-400 font-semibold text-sm mb-3">
                      {resource.articles || resource.videos || resource.members || resource.endpoints}
                    </div>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Ticket Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Submit a Support Ticket</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Create a detailed support ticket for complex issues that require investigation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Support Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {supportCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Priority Level</label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                >
                  {priorityLevels.map((priority) => (
                    <option key={priority.id} value={priority.id}>
                      {priority.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                Submit Support Ticket
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                +1 302 464 0950
              </a>
              <p className="text-slate-400 text-sm mt-2">Available 9 AM - 6 PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
              <p className="text-slate-400 text-sm mt-2">Response within 4-24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <Link to="/chat" className="text-cyan-400 hover:text-cyan-300">
                Start Chat
              </Link>
              <p className="text-slate-400 text-sm mt-2">Available during business hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
