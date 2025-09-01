import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import {

  Truck, 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Zap, 
  CheckCircle, 
  Star, 
  Package,
  Route,
  Warehouse,
  Clock,
  DollarSign,
  Shield,
  Cpu,
  Database,
  Phone,
  Mail,
  MapPin,
  Target,
  Activity,
  Settings
} from 'lucide-react';

export default function AISupplyChainOptimization() {

  const features = [
    {

      icon: Brain,
      title: 'AI Demand Forecasting',
      description: 'Predict demand patterns with 92% accuracy using advanced machine learning algorithms'
    },
    {

      icon: Route,
      title: 'Intelligent Route Optimization',
      description: 'AI-powered logistics optimization reducing delivery times by 35% and costs by 25%'
    },
    {

      icon: Warehouse,
      title: 'Smart Inventory Management',
      description: 'Automated inventory optimization preventing stockouts and reducing carrying costs'
    },
    {

      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Live tracking and predictive alerts for supply chain disruptions and delays'
    },
    {

      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Data-driven insights for supply chain optimization and risk mitigation'
    }
  ];

  const benefits = [
    'Reduce supply chain costs by 30%',
    'Improve delivery accuracy by 95%',
    'Cut inventory carrying costs by 40%',
    'Reduce lead times by 50%',
    'Increase customer satisfaction by 60%',
    'Minimize supply chain disruptions'
  ];

  const services = [
    {

      title: 'Complete Supply Chain Suite',
      description: 'End-to-end AI-powered supply chain optimization platform',
      price: 'From $4,999/month',
      features: ['Demand forecasting', 'Route optimization', 'Inventory management', 'Real-time monitoring', 'Analytics dashboard', 'API integrations']
    },
    {

      title: 'Logistics Optimization',
      description: 'AI-powered transportation and route optimization solution',
      price: 'From $2,499/month',
      features: ['Route planning', 'Fleet management', 'Cost optimization', 'Delivery tracking', 'Performance analytics']
    },
    {

      title: 'Inventory Intelligence',
      description: 'Smart inventory management and demand forecasting',
      price: 'From $1,999/month',
      features: ['Demand prediction', 'Stock optimization', 'Reorder automation', 'Supplier management', 'Cost analysis']
    },
    {

      title: 'Supply Chain Analytics',
      description: 'Comprehensive analytics and reporting platform',
      price: 'From $1,499/month',
      features: ['Performance metrics', 'Risk assessment', 'Cost analysis', 'Custom reports', 'Predictive insights']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML for demand forecasting and optimization' },
    { name: 'IoT Integration', description: 'Real-time data from sensors and connected devices' },
    { name: 'Blockchain', description: 'Secure and transparent supply chain tracking' },
    { name: 'Cloud Computing', description: 'Scalable and reliable cloud infrastructure' },
    { name: 'Predictive Analytics', description: 'AI-powered risk assessment and optimization' }
  ];

  const useCases = [
    {

      industry: 'E-commerce',
      description: 'Optimize inventory levels and delivery routes for online retail',
      savings: 'Save up to $500K annually'
    },
    {

      industry: 'Manufacturing',
      description: 'Streamline production planning and supplier management',
      savings: 'Reduce costs by 35%'
    },
    {

      industry: 'Healthcare',
      description: 'Ensure critical medical supplies are always available',
      savings: 'Improve patient care by 40%'
    },
    {

      industry: 'Food & Beverage',
      description: 'Optimize fresh food logistics and reduce waste',
      savings: 'Cut waste by 30%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Optimization</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered demand forecasting, intelligent route optimization, 
              and real-time monitoring. Reduce costs by 30% while improving delivery accuracy to 95%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="https://ziontechgroup.com/services"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary AI Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI-powered supply chain platform combines cutting-edge technology with industry expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Supply Chain Optimization?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience unprecedented efficiency and cost savings in your supply chain operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for different industries with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {useCase.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Service Packages
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the perfect package for your supply chain optimization needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 ${

                  index === 0 ? 'border-blue-500/50 bg-blue-500/5' : 'border-slate-700'
                }`}
              >
                {index === 0 && (
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full inline-flex justify-center items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${

                    index === 0
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'border border-slate-600 text-slate-300 hover:border-blue-500/50 hover:text-blue-400'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with the latest AI, IoT, and blockchain technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading companies already using AI to revolutionize their supply chain operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}