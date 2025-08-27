import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Shield, 
  Zap, 
  Target, 
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
  DollarSign,
  Award
} from 'lucide-react';
import { SEO } from '../../components/SEO';

const AIBusinessIntelligence: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms for predictive insights and trend analysis'
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Interactive visualizations with live data updates and customizable widgets'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Modeling',
      description: 'Forecast future trends and identify opportunities using historical data patterns'
    },
    {
      icon: Users,
      title: 'User Behavior Analytics',
      description: 'Deep insights into customer interactions and engagement patterns'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance standards'
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Scheduled reports and automated insights delivery'
    }
  ];

  const benefits = [
    'Increase operational efficiency by 40%',
    'Reduce decision-making time by 60%',
    'Improve customer satisfaction by 35%',
    'Identify new revenue opportunities',
    'Optimize resource allocation',
    'Enhance competitive advantage'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence Services - Zion Tech Group"
        description="Transform your business data into actionable insights with our AI-powered Business Intelligence solutions. Real-time analytics, predictive modeling, and automated reporting."
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Data Into
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Actionable Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage advanced AI and machine learning to unlock hidden insights, predict trends, 
              and make data-driven decisions that drive business growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
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
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform provides everything you need to transform raw data into strategic insights
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
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
              Why Choose AI Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in your business performance and decision-making capabilities
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
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses already using AI to transform their data into actionable intelligence.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey towards data-driven decision making with our AI-powered business intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessIntelligence;