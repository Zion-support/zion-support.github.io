import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Users, 
  MessageCircle, 
  BarChart3, 
  HelpCircle, 
  TrendingUp,
  MessageCircle,
  FileText,
  Mail,
  Truck,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Cloud,
  Target,
  Rocket,
  DollarSign
} from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const microSaaSServices = [
    {
      name: 'Micro CRM',
      href: '/services/micro-crm',
      icon: <Users className="w-8 h-8" />,
      description: 'Lightweight customer relationship management for small businesses',
      features: ['Contact Management', 'Lead Tracking', 'Sales Pipeline', 'Email Integration'],
      pricing: 'Starting at $29/month',
      category: 'Customer Management'
    },
    {
      name: 'Helpdesk Platform',
      href: '/services/helpdesk-platform',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Streamlined customer support and ticket management system',
      features: ['Ticket Management', 'Knowledge Base', 'Live Chat', 'Reporting'],
      pricing: 'Starting at $39/month',
      category: 'Customer Support'
    },
    {
      name: 'Website Analytics',
      href: '/services/website-analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      description: 'Comprehensive website performance and user behavior analytics',
      features: ['Real-time Analytics', 'User Behavior', 'Conversion Tracking', 'SEO Insights'],
      pricing: 'Starting at $19/month',
      category: 'Analytics'
    },
    {
      name: 'IT Helpdesk',
      href: '/services/it-helpdesk',
      icon: <HelpCircle className="w-8 h-8" />,
      description: 'Internal IT support and asset management for organizations',
      features: ['Asset Management', 'Ticket System', 'Knowledge Base', 'Reporting'],
      pricing: 'Starting at $49/month',
      category: 'IT Support'
    },
    {
      name: 'Affiliate Tracking',
      href: '/services/affiliate-tracking',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Complete affiliate marketing and commission tracking platform',
      features: ['Affiliate Management', 'Commission Tracking', 'Performance Analytics', 'Payout System'],
      pricing: 'Starting at $59/month',
      category: 'Marketing'
    },
    {
      name: 'Mobile Survey',
      href: '/services/mobile-survey',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Mobile-first survey and feedback collection platform',
      features: ['Survey Builder', 'Mobile Optimization', 'Response Analytics', 'Export Options'],
      pricing: 'Starting at $25/month',
      category: 'Feedback'
    },
    {
      name: 'Podcast Transcription',
      href: '/services/podcast-transcription',
      icon: <FileText className="w-8 h-8" />,
      description: 'AI-powered podcast transcription and content optimization',
      features: ['AI Transcription', 'Editing Tools', 'Export Formats', 'SEO Optimization'],
      pricing: 'Starting at $0.10/minute',
      category: 'Content'
    },
    {
      name: 'Email Sequencer',
      href: '/services/email-sequencer',
      icon: <Mail className="w-8 h-8" />,
      description: 'Automated email marketing sequences and drip campaigns',
      features: ['Sequence Builder', 'Automation', 'A/B Testing', 'Analytics'],
      pricing: 'Starting at $35/month',
      category: 'Email Marketing'
    },
    {
      name: 'Returns Management',
      href: '/services/returns-management',
      icon: <Truck className="w-8 h-8" />,
      description: 'Streamlined returns and refund processing system',
      features: ['Return Processing', 'Refund Management', 'Inventory Updates', 'Customer Communication'],
      pricing: 'Starting at $45/month',
      category: 'E-commerce'
    },
    {
      name: 'LLM Content Studio',
      href: '/services/llm-content-studio',
      icon: <Brain className="w-8 h-8" />,
      description: 'AI-powered content creation and optimization platform',
      features: ['Content Generation', 'SEO Optimization', 'Plagiarism Check', 'Multi-format Export'],
      pricing: 'Starting at $79/month',
      category: 'Content Creation'
    }
  ];

  const categories = [
    { name: 'Customer Management', icon: <Users className="w-5 h-5" />, count: 2 },
    { name: 'Customer Support', icon: <MessageCircle className="w-5 h-5" />, count: 2 },
    { name: 'Analytics', icon: <BarChart3 className="w-5 h-5" />, count: 1 },
    { name: 'IT Support', icon: <HelpCircle className="w-5 h-5" />, count: 1 },
    { name: 'Marketing', icon: <TrendingUp className="w-5 h-5" />, count: 2 },
    { name: 'Feedback', icon: <MessageCircle className="w-5 h-5" />, count: 1 },
    { name: 'Content', icon: <FileText className="w-5 h-5" />, count: 2 },
    { name: 'Email Marketing', icon: <Mail className="w-5 h-5" />, count: 1 },
    { name: 'E-commerce', icon: <Truck className="w-5 h-5" />, count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful, focused software solutions designed for specific business needs. 
              Get enterprise-grade functionality without enterprise complexity.
            </p>
            <div className="flex items-center justify-center space-x-8 text-slate-300 mt-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-cyan-400" />
                <span>10+ Solutions</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-cyan-400" />
                <span>4.9+ Rating</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                <span>Instant Setup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
          <p className="text-slate-400">Find the perfect solution for your specific needs</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 text-center hover:bg-slate-700/50 transition-colors duration-200"
            >
              <div className="text-cyan-400 mb-2 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-white font-medium text-sm mb-1">{category.name}</h3>
              <p className="text-slate-400 text-xs">{category.count} solutions</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">All Micro SaaS Solutions</h2>
          <p className="text-slate-400">Comprehensive suite of specialized business tools</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaaSServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Service Header */}
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {service.name}
                      </h3>
                      <span className="text-slate-400 text-sm">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-cyan-400 font-semibold text-sm">
                    {service.pricing}
                  </div>
                </div>
                
                {/* Features */}
                <div className="p-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.href}
                    className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-200 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Micro SaaS?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our micro SaaS solutions are designed to solve specific problems without overwhelming complexity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-slate-300">Get up and running in minutes, not months</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Focused Functionality</h3>
              <p className="text-slate-300">Do one thing exceptionally well</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cost Effective</h3>
              <p className="text-slate-300">Pay only for what you need</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Choose the perfect micro SaaS solution for your business needs and start seeing results today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MicroSaaSPage;