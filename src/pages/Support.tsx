import React from 'react';

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-4">Support</h1>
      <p className="text-zion-slate-light">Find help, documentation, and contact options.</p>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  BookOpen,
  Video,
  Download,
  ExternalLink,
  Zap,
  Shield,
  Brain,
  Cloud,
  Rocket,
  Code
} from 'lucide-react';
import SEO from '../components/SEO';

export default function Support() {
  const supportChannels = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our technical experts',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      availability: '24/7',
      responseTime: 'Instant',
      href: '/chat',
      features: ['Real-time assistance', 'Technical expertise', 'Screen sharing available', 'Chat history saved']
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      icon: Phone,
      color: 'from-green-500 to-emerald-500',
      availability: '9 AM - 6 PM EST',
      responseTime: 'Immediate',
      href: 'tel:+13024640950',
      features: ['Direct expert contact', 'Complex issue resolution', 'Personalized assistance', 'Follow-up calls']
    },
    {
      title: 'Email Support',
      description: 'Send detailed inquiries and get comprehensive responses',
      icon: Mail,
      color: 'from-purple-500 to-pink-500',
      availability: '24/7',
      responseTime: '4-8 hours',
      href: 'mailto:kleber@ziontechgroup.com',
      features: ['Detailed documentation', 'File attachments', 'Issue tracking', 'Escalation support']
    },
    {
      title: 'Emergency Support',
      description: 'Critical issue resolution for enterprise customers',
      icon: Zap,
      color: 'from-red-500 to-orange-500',
      availability: '24/7',
      responseTime: '1-2 hours',
      href: 'tel:+13024640950',
      features: ['Priority response', 'Expert escalation', 'Root cause analysis', 'Prevention planning']
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Essential support for all customers',
      price: 'Included',
      features: [
        'Email support (24/7)',
        'Knowledge base access',
        'Community forum access',
        'Basic troubleshooting',
        'Response within 24 hours'
      ],
      icon: Users,
      color: 'from-slate-500 to-slate-600'
    },
    {
      name: 'Professional Support',
      description: 'Enhanced support for business users',
      price: '$99/month',
      features: [
        'All Basic features',
        'Live chat support',
        'Phone support (business hours)',
        'Priority ticket handling',
        'Response within 8 hours',
        'Monthly support review'
      ],
      icon: Star,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for enterprise customers',
      price: 'Custom',
      features: [
        'All Professional features',
        '24/7 phone support',
        'Dedicated support manager',
        'Emergency response (1-2 hours)',
        'Custom SLA agreements',
        'Quarterly business reviews',
        'Proactive monitoring'
      ],
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const resources = [
    {
      title: 'Knowledge Base',
      description: 'Comprehensive guides and tutorials',
      icon: BookOpen,
      href: '/help',
      color: 'from-blue-500 to-cyan-500',
      features: ['Step-by-step guides', 'Video tutorials', 'Best practices', 'Troubleshooting tips']
    },
    {
      title: 'API Documentation',
      description: 'Developer resources and integration guides',
      icon: Code,
      href: '/docs',
      color: 'from-green-500 to-emerald-500',
      features: ['API references', 'Code examples', 'SDK downloads', 'Integration guides']
    },
    {
      title: 'Video Tutorials',
      description: 'Visual learning resources',
      icon: Video,
      href: '/tutorials',
      color: 'from-purple-500 to-pink-500',
      features: ['Getting started', 'Advanced topics', 'Feature demos', 'Case studies']
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      href: '/community',
      color: 'from-orange-500 to-red-500',
      features: ['User discussions', 'Expert answers', 'Tips & tricks', 'Showcase projects']
    }
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST', available: true },
    { day: 'Sunday', hours: 'Emergency support only', available: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Support Portal - Zion Tech Group"
        description="Get comprehensive technical support for all Zion Tech Group services. 24/7 assistance, live chat, phone support, and expert guidance."
      />
      
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical Support Portal
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get expert technical support for all our services. Our team of specialists is here to help you succeed.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Support Channels
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
                  <p className="text-slate-400">{channel.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <div className="text-sm text-slate-400">Availability</div>
                  <div className="text-white font-semibold">{channel.availability}</div>
                </div>
                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <div className="text-sm text-slate-400">Response Time</div>
                  <div className="text-white font-semibold">{channel.responseTime}</div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                {channel.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to={channel.href}
                className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Support
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Support Tiers */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Support Tiers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-3">{tier.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{tier.price}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="block w-full text-center py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Hours & Contact */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8">Support Hours</h2>
            <div className="space-y-4">
              {supportHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{schedule.day}</h3>
                    <p className="text-slate-300">{schedule.hours}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    schedule.available 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {schedule.available ? 'Available' : 'Limited'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Emergency Support</h3>
              <p className="text-slate-300 mb-4">
                For critical issues outside business hours, we provide emergency support for enterprise customers.
              </p>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Call Emergency Line
                <Phone className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-slate-800/30 border border-slate-700 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone Support</h4>
                  <p className="text-slate-300">+1 302 464 0950</p>
                  <p className="text-slate-400 text-sm">Available during support hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email Support</h4>
                  <p className="text-slate-300">kleber@ziontechgroup.com</p>
                  <p className="text-slate-400 text-sm">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Response Times</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">General inquiries:</span>
                      <span className="text-slate-400">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Technical issues:</span>
                      <span className="text-slate-400">4-8 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Critical issues:</span>
                      <span className="text-slate-400">1-2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resources */}
      <div className="bg-slate-800/20 py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Additional Resources
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={resource.href}
                  className="block bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{resource.description}</p>
                  
                  <div className="space-y-2">
                    {resource.features.map((feature, idx) => (
                      <div key={idx} className="text-slate-300 text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Support?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Our expert support team is ready to help you succeed with our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
            <Link
              to="/help"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Browse Help Center
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
