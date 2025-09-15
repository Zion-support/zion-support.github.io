import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Brain, 
  Target, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Database,
  ChartBar,
  PieChart,
  Activity,
  Eye,
  Clock,
  Award,
  Users,
  Share2,
  TrendingUp,
  Zap,
  Shield,
  Calculator
} from 'lucide-react';

const AIAutonomousFinance: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Financial Management',
      description: 'Advanced machine learning for autonomous financial planning and optimization'
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization',
      description: 'Intelligent budget planning and expense optimization with AI-driven insights'
    },
    {
      icon: Target,
      title: 'Investment Management',
      description: 'AI-powered investment strategies and portfolio optimization'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Real-time analytics and insights into financial performance and trends'
    },
    {
      icon: Calculator,
      title: 'Risk Assessment',
      description: 'AI-driven financial risk assessment and mitigation strategies'
    },
    {
      icon: TrendingUp,
      title: 'Revenue Optimization',
      description: 'Continuous optimization of financial processes and revenue generation'
    }
  ];

  const benefits = [
    'Improve financial efficiency by 60%',
    'Reduce financial risks by 70%',
    'Optimize investments by 80%',
    'Automate financial processes',
    '24/7 autonomous operation',
    'Real-time financial insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              AI-Powered Autonomous Finance
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Finance with
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your financial operations with our AI-powered autonomous platform. 
              Optimize budgets, manage investments, and maximize financial performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-yellow-500/30 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300">
                Schedule Demo
              </button>
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
              Advanced Financial Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive financial capabilities for modern businesses
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Finance?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in financial performance and risk management
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Finance?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses already using AI to enhance their financial performance.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Finance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to AI-powered finance with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-yellow-500/30 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousFinance;