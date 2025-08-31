import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Users, 
  Brain, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Database,
  Lock,
  BarChart3,
  Workflow,
  Calendar,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Star,
  Award,
  Network,
  Globe,
  FileText,
  Search,
  Eye,
  CheckSquare,
  Clipboard,
  AlertTriangle,
  CreditCard,
  Package,
  Truck,
  Store,
  Smartphone,
  Monitor,
  BarChart,
  PieChart,
  LineChart,
  Heart,
  Gift,
  Tag,
  Percent
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Retail = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Optimization',
      description: 'AI-powered e-commerce solutions for maximum conversion and sales',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'Customer Intelligence',
      description: 'Advanced analytics for personalized customer experiences and retention',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Omnichannel Integration',
      description: 'Seamless integration across online and offline retail channels',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Payment Security',
      description: 'Enterprise-grade security for secure transactions and fraud prevention',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Intelligent e-commerce solution with personalized recommendations',
      features: ['Personalized Shopping', 'Inventory Management', 'Payment Processing', 'Analytics Dashboard'],
      href: '/services/ai-marketing-automation'
    },
    {
      title: 'Retail Analytics & Insights',
      description: 'Comprehensive analytics for retail performance optimization',
      features: ['Customer Behavior', 'Sales Analytics', 'Inventory Optimization', 'Performance Metrics'],
      href: '/services/data-analytics'
    }
  ];

  const benefits = [
    'Increase online sales by 30-50%',
    'Improve customer retention and loyalty',
    'Optimize inventory and reduce waste',
    'Enhance customer experience across channels',
    'Real-time analytics and insights',
    'Secure payment processing and fraud prevention'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full px-4 py-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Retail Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Revolutionizing Retail with
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}AI & Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge retail technology solutions that drive 
              sales, enhance customer experiences, and optimize operations. From e-commerce 
              platforms to omnichannel integration, we're transforming retail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-green-400/30 text-green-400 hover:bg-green-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Retail Technology Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our retail solutions are built with customer experience, sales optimization, and security in mind
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Retail Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for retail operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-green-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={solution.href}
                    className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Retail Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Measurable improvements in sales, customer experience, and operational efficiency
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Retail?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how Zion Tech Group can help you achieve your retail technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-green-400/30 text-green-400 hover:bg-green-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Retail;