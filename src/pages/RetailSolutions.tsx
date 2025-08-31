import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Store, 
  Users, 
  Database, 
  Cloud, 
  Zap,
  Activity,
  CheckCircle,
  ArrowRight,
  CreditCard,
  BarChart3,
  Smartphone
} from 'lucide-react';

const RetailSolutions: React.FC = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Platform',
      description: 'Modern online shopping experiences with AI-powered recommendations'
    },
    {
      icon: Store,
      title: 'Omnichannel Retail',
      description: 'Seamless integration between online and physical store experiences'
    },
    {
      icon: Database,
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated reordering systems'
    },
    {
      icon: Cloud,
      title: 'Cloud POS Systems',
      description: 'Scalable point-of-sale solutions for modern retail operations'
    },
    {
      icon: Activity,
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and shopping patterns'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Personalized marketing and loyalty program management'
    }
  ];

  const solutions = [
    {
      title: 'AI-Powered E-commerce',
      description: 'Intelligent online shopping platforms with personalized experiences',
      href: '/services/ai-marketing-automation'
    },
    {
      title: 'Retail Analytics Platform',
      description: 'Comprehensive analytics for retail performance optimization',
      href: '/services/ai-business-intelligence'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-driven supply chain management for retail efficiency',
      href: '/services/ai-supply-chain-optimization'
    },
    {
      title: 'Customer Support Automation',
      description: 'AI-powered customer service and support solutions',
      href: '/services/ai-customer-support-automation'
    }
  ];

  const benefits = [
    'Increased sales through personalized customer experiences',
    'Improved inventory management and reduced stockouts',
    'Enhanced customer loyalty and retention',
    'Streamlined operations and reduced operational costs',
    'Better data insights for strategic decision making',
    'Seamless omnichannel customer experiences'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Retail Technology
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your retail business with cutting-edge technology solutions 
              that enhance customer experiences and drive operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Modern Retail Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive retail solutions combine AI, analytics, and innovation 
              to create exceptional shopping experiences and optimize operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Retail Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our specialized retail technology solutions designed to 
              meet the unique needs of modern retail businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <a
                  href={solution.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Benefits for Retail Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the advantages of our retail-focused technology solutions 
              designed to improve customer satisfaction and business performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative retail technology solutions can 
              enhance customer experiences and optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Contact Us Today
              </a>
              <a
                href="/services"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RetailSolutions;