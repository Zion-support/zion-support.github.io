import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Smartphone, BarChart3, Shield, Zap, CheckCircle, Store, TrendingUp } from 'lucide-react';

const RetailTechnologySolutions: React.FC = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'AI-Powered E-commerce',
      description: 'Intelligent online shopping experiences with personalized recommendations'
    },
    {
      icon: Smartphone,
      title: 'Mobile Commerce',
      description: 'Seamless mobile shopping experiences with AI-driven optimization'
    },
    {
      icon: BarChart3,
      title: 'Customer Analytics',
      description: 'Deep insights into customer behavior and preferences using AI'
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'Advanced AI algorithms for detecting and preventing retail fraud'
    },
    {
      icon: Zap,
      title: 'Inventory Management',
      description: 'Smart inventory optimization with predictive demand forecasting'
    },
    {
      icon: TrendingUp,
      title: 'Omnichannel Integration',
      description: 'Seamless integration across online and offline retail channels'
    }
  ];

  const solutions = [
    {
      title: 'Smart E-commerce Platform',
      description: 'AI-powered online retail platform with personalized shopping experiences',
      benefits: ['Personalized recommendations', 'Smart search', 'Conversion optimization']
    },
    {
      title: 'Retail Analytics Suite',
      description: 'Comprehensive analytics for understanding customer behavior and optimizing operations',
      benefits: ['Customer insights', 'Performance tracking', 'Predictive analytics']
    },
    {
      title: 'Inventory Intelligence',
      description: 'AI-driven inventory management with demand forecasting and optimization',
      benefits: ['Demand prediction', 'Stock optimization', 'Reduced waste']
    },
    {
      title: 'Customer Experience Platform',
      description: 'Omnichannel customer experience management with AI personalization',
      benefits: ['Unified experience', 'Personalization', 'Customer retention']
    }
  ];

  const technologies = [
    'Artificial Intelligence & Machine Learning',
    'Big Data Analytics & Business Intelligence',
    'Cloud Computing & Microservices',
    'Mobile App Development & PWA',
    'API Integration & E-commerce Platforms',
    'Cybersecurity & Fraud Detection'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-blue/20 border border-zion-blue/30 text-zion-cyan mb-6">
              <Store className="w-4 h-4 mr-2" />
              Retail Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Retail with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                {' '}AI & Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Revolutionize your retail business with cutting-edge technology solutions that enhance customer experiences, 
              optimize operations, and drive growth in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Retail Technology Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our retail solutions combine AI, analytics, and digital innovation to create superior shopping experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Retail Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From e-commerce platforms to customer analytics, we provide end-to-end retail technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-blue/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              We leverage the latest advancements in technology to deliver superior retail solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-4 bg-zion-slate-dark/30 border border-zion-blue/20 rounded-lg"
              >
                <div className="w-3 h-3 bg-zion-cyan rounded-full mr-4"></div>
                <span className="text-zion-slate-light">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join leading retailers who are already leveraging AI and digital technology to gain competitive advantages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-zion-blue text-zion-cyan font-semibold rounded-lg hover:bg-zion-blue/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RetailTechnologySolutions;