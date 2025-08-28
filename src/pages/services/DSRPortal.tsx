import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  FileText, 
  CheckCircle, 
  Users, 
  Clock, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Cpu,
  Cloud,
  Activity,
  Sparkles,
  Search,
  Zap,
  Globe,
  Building,
  DollarSign,
  Lock,
  BarChart3,
  TrendingUp,
  Download,
  Trash2,
  Edit
} from 'lucide-react';

const DSRPortal = () => {
  const features = [
    {
      icon: Shield,
      title: 'Data Subject Rights Management',
      description: 'Comprehensive management of GDPR and CCPA data subject rights requests'
    },
    {
      icon: Eye,
      title: 'Data Discovery & Mapping',
      description: 'Automated discovery and mapping of personal data across all systems'
    },
    {
      icon: FileText,
      title: 'Request Processing',
      description: 'Streamlined processing of access, rectification, and deletion requests'
    },
    {
      icon: BarChart3,
      title: 'Compliance Monitoring',
      description: 'Real-time monitoring of compliance status and request fulfillment'
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description: 'Automated workflows for request validation and response generation'
    },
    {
      icon: CheckCircle,
      title: 'Audit Trails',
      description: 'Complete audit trails for all data subject rights activities'
    }
  ];

  const benefits = [
    'Ensure 100% GDPR/CCPA compliance',
    'Reduce request processing time by 80%',
    'Automate 90% of compliance tasks',
    'Eliminate compliance risks',
    'Streamline data governance',
    'Enhance customer trust and transparency'
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Customer data access, order history, and preference management'
    },
    {
      industry: 'Financial Services',
      description: 'Account data access, transaction history, and financial information'
    },
    {
      industry: 'Healthcare',
      description: 'Patient data access, medical records, and treatment information'
    },
    {
      industry: 'Technology',
      description: 'User data access, account information, and usage analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Data Subject Rights Portal
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              DSR
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"> Portal</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline data subject rights management with our comprehensive portal that 
              ensures GDPR and CCPA compliance while providing transparency and control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive DSR Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage data subject rights 
              requests efficiently and maintain full regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Data Governance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in compliance efficiency, risk reduction, and data transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our DSR Portal adapts to various industries, providing tailored compliance 
              solutions for your specific data governance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-indigo-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ensure Compliance Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide that use our DSR Portal to maintain regulatory 
              compliance and build customer trust through transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DSRPortal;