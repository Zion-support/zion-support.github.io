import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  Cog, 
  Bot, 
  TrendingUp, 
  Shield, 
  Zap,
  BarChart3,
  Network,
  Eye,
  Brain,
  Cloud,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ManufacturingSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'Smart Factory Automation',
      description: 'Intelligent automation systems that optimize production processes and increase efficiency.',
      icon: Bot,
      features: ['Process optimization', 'Real-time monitoring', 'Predictive maintenance', 'Quality control']
    },
    {
      title: 'Industrial IoT Integration',
      description: 'Seamless integration of IoT devices for comprehensive manufacturing intelligence.',
      icon: Network,
      features: ['Sensor networks', 'Data collection', 'Remote monitoring', 'Predictive analytics']
    },
    {
      title: 'AI-Powered Quality Control',
      description: 'Advanced AI systems for automated quality inspection and defect detection.',
      icon: Eye,
      features: ['Visual inspection', 'Defect detection', 'Quality assurance', 'Compliance monitoring']
    },
    {
      title: 'Predictive Maintenance',
      description: 'AI-driven maintenance systems that prevent equipment failures and reduce downtime.',
      icon: TrendingUp,
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Intelligent supply chain management with AI-powered forecasting and optimization.',
      icon: Cog,
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management']
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas of physical manufacturing systems for simulation and optimization.',
      icon: Cloud,
      features: ['System simulation', 'Performance optimization', 'Scenario testing', 'Real-time monitoring']
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Optimize production processes and reduce waste',
      icon: TrendingUp
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through intelligent automation',
      icon: BarChart3
    },
    {
      title: 'Quality Improvement',
      description: 'Enhanced product quality and consistency',
      icon: Star
    },
    {
      title: 'Predictive Capabilities',
      description: 'Anticipate and prevent issues before they occur',
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Factory className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Manufacturing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your manufacturing operations with Zion Tech Group's cutting-edge technology solutions. 
              From smart automation to AI-powered quality control, we help manufacturers achieve operational excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose Our Manufacturing Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our comprehensive approach combines cutting-edge technology with industry expertise to deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Our Manufacturing Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive technology solutions designed specifically for modern manufacturing challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center space-x-2">
                      <Star className="w-3 h-3 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Manufacturing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our manufacturing solutions can optimize your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ManufacturingSolutions;