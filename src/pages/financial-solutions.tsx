import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Brain, 
  Zap,
  Lock,
  Eye,
  Cloud,
  Star,
  Calculator,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancialSolutions: React.FC = () => {
  const solutions = [
    {
      title: 'AI Financial Analytics',
      description: 'Advanced AI-powered analytics for comprehensive financial insights and decision-making.',
      icon: BarChart3,
      features: ['Real-time analytics', 'Predictive modeling', 'Risk assessment', 'Performance tracking']
    },
    {
      title: 'AI Financial Risk Management',
      description: 'Intelligent risk assessment and management systems for financial institutions.',
      icon: Shield,
      features: ['Risk modeling', 'Compliance monitoring', 'Fraud detection', 'Portfolio optimization']
    },
    {
      title: 'AI Financial Trading',
      description: 'AI-driven trading algorithms and market analysis for optimal investment decisions.',
      icon: TrendingUp,
      features: ['Algorithmic trading', 'Market analysis', 'Portfolio management', 'Risk mitigation']
    },
    {
      title: 'FinOps Advisor',
      description: 'Cloud financial operations optimization for cost management and efficiency.',
      icon: Calculator,
      features: ['Cost optimization', 'Resource management', 'Budget planning', 'ROI analysis']
    },
    {
      title: 'Cloud FinOps Optimizer',
      description: 'Comprehensive cloud financial operations management and optimization.',
      icon: Cloud,
      features: ['Cloud cost management', 'Resource optimization', 'Budget tracking', 'Efficiency metrics']
    },
    {
      title: 'AI Compliance Assistant',
      description: 'Automated compliance monitoring and reporting for financial regulations.',
      icon: Lock,
      features: ['Regulatory compliance', 'Automated reporting', 'Audit trails', 'Risk monitoring']
    }
  ];

  const benefits = [
    {
      title: 'Risk Mitigation',
      description: 'Advanced AI algorithms identify and mitigate financial risks',
      icon: Shield
    },
    {
      title: 'Cost Optimization',
      description: 'Intelligent systems optimize financial operations and reduce costs',
      icon: TrendingUp
    },
    {
      title: 'Compliance Assurance',
      description: 'Automated compliance monitoring ensures regulatory adherence',
      icon: Lock
    },
    {
      title: 'Data-Driven Decisions',
      description: 'AI-powered insights enable better financial decision-making',
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
                <DollarSign className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Financial Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your financial operations with Zion Tech Group's AI-powered financial technology solutions. 
              From risk management to trading algorithms, we help financial institutions achieve operational excellence.
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
            Why Choose Our Financial Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our AI-powered financial technology delivers measurable results and competitive advantages.
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
            Our Financial Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive financial technology solutions designed for modern financial institutions.
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
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our financial solutions can optimize your operations and drive growth.
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

export default FinancialSolutions;