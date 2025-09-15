import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
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
  BookOpen
} from 'lucide-react';

const AIAutonomousLegalCounsel: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Legal Counsel',
      description: 'Advanced machine learning for autonomous legal advice and consultation'
    },
    {
      icon: Scale,
      title: 'Legal Analysis',
      description: 'Intelligent legal document analysis and case evaluation with AI-driven insights'
    },
    {
      icon: Target,
      title: 'Contract Review',
      description: 'AI-powered contract review and risk assessment'
    },
    {
      icon: BarChart3,
      title: 'Legal Analytics',
      description: 'Real-time analytics and insights into legal performance and trends'
    },
    {
      icon: BookOpen,
      title: 'Legal Research',
      description: 'AI-driven legal research and precedent analysis'
    },
    {
      icon: TrendingUp,
      title: 'Compliance Monitoring',
      description: 'Continuous monitoring and optimization of legal compliance'
    }
  ];

  const benefits = [
    'Improve legal efficiency by 70%',
    'Reduce legal costs by 60%',
    'Enhance legal accuracy by 85%',
    'Automate legal processes',
    '24/7 autonomous operation',
    'Real-time legal insights'
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 mr-2" />
              AI-Powered Autonomous Legal Counsel
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Legal Operations with
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your legal operations with our AI-powered autonomous platform. 
              Get instant legal advice, review contracts, and ensure compliance with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-amber-500/30 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all duration-300">
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
              Advanced Legal Counsel Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive legal capabilities for modern businesses
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
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
              Why Choose AI Autonomous Legal Counsel?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in legal efficiency and compliance
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
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
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
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Legal Operations?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses already using AI to enhance their legal operations.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
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
              Ready to Revolutionize Legal Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to AI-powered legal counsel with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-amber-500/30 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousLegalCounsel;