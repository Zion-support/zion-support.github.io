import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Database,
  ChartBar,
  PieChart,
  Activity,
  Clock,
  DollarSign,
  Award,
  MessageSquare,
  Share2,
  Brain,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  Users
} from 'lucide-react';

const AICybersecurityPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms to identify and prevent cyber threats in real-time'
    },
    {
      icon: Shield,
      title: 'Zero-Day Attack Prevention',
      description: 'Proactive protection against unknown threats using behavioral analysis and AI prediction'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance of your network with instant threat response and alerting'
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'Enterprise-grade encryption protocols to secure sensitive data and communications'
    },
    {
      icon: Target,
      title: 'Vulnerability Assessment',
      description: 'Automated scanning and assessment of security weaknesses across your infrastructure'
    },
    {
      icon: BarChart3,
      title: 'Security Analytics',
      description: 'Comprehensive reporting and insights into security posture and threat landscape'
    }
  ];

  const benefits = [
    'Reduce security incidents by 90%',
    'Improve threat detection speed by 95%',
    'Lower security costs by 40%',
    'Enhance compliance with regulations',
    'Protect against zero-day attacks',
    'Automate security response workflows'
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Protect Your Business with
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> AI Cybersecurity</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered security platform that detects, prevents, and responds to cyber threats 
              in real-time, keeping your business safe from evolving security risks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
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
              Advanced Security Features Powered by AI
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive cybersecurity protection for modern businesses
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
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
              Why Choose AI Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience enterprise-grade security with AI-powered threat intelligence and response
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
                    <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
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
              className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Secure Your Business?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of businesses already protected by our AI cybersecurity platform.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
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
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to comprehensive cybersecurity with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform;