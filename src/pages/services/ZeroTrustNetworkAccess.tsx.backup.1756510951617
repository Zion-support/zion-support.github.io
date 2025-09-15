import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
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
  BarChart3,
  TrendingUp,
  Network,
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  ShieldCheck,
  Globe2,
  Server,
  Database,
  Smartphone
} from 'lucide-react';

const ZeroTrustNetworkAccess = () => {
  const features = [
    {
      icon: Shield,
      title: 'Identity Verification',
      description: 'Multi-factor authentication and continuous identity validation'
    },
    {
      icon: Lock,
      title: 'Least Privilege Access',
      description: 'Granular access controls based on user context and needs'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Real-time monitoring of all network activities and access patterns'
    },
    {
      icon: Network,
      title: 'Micro-segmentation',
      description: 'Network segmentation at the application and workload level'
    },
    {
      icon: Key,
      title: 'Encrypted Communication',
      description: 'End-to-end encryption for all data in transit and at rest'
    },
    {
      icon: Monitor,
      title: 'Threat Detection',
      description: 'Advanced threat detection and automated response capabilities'
    }
  ];

  const benefits = [
    'Eliminate network perimeter vulnerabilities',
    'Reduce attack surface by 90%',
    'Enable secure remote work from anywhere',
    'Comply with industry security standards',
    'Improve incident response time by 80%',
    'Enhance user experience with seamless access'
  ];

  const useCases = [
    {
      industry: 'Financial Services',
      description: 'Secure access to banking systems and customer data'
    },
    {
      industry: 'Healthcare',
      description: 'Protected access to patient records and medical systems'
    },
    {
      industry: 'Government',
      description: 'Secure access to classified systems and citizen data'
    },
    {
      industry: 'Enterprise',
      description: 'Protected access to corporate resources and applications'
    }
  ];

  const securityLayers = [
    {
      icon: Fingerprint,
      title: 'User Identity',
      description: 'Multi-factor authentication, biometric verification, and behavioral analytics'
    },
    {
      icon: Device,
      title: 'Device Security',
      description: 'Device health checks, compliance validation, and security posture assessment'
    },
    {
      icon: Globe2,
      title: 'Network Security',
      description: 'Encrypted tunnels, micro-segmentation, and traffic inspection'
    },
    {
      icon: Database,
      title: 'Application Security',
      description: 'API security, application-level access controls, and data protection'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Zero Trust Security
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zero Trust
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> Network Access</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your security posture with our Zero Trust Network Access solution 
              that provides secure, seamless access to resources from anywhere in the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200 flex items-center justify-center">
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
              Comprehensive Zero Trust Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform implements the core principles of Zero Trust architecture 
              to provide unmatched security and access control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Zero Trust solution implements security at every layer, ensuring 
              comprehensive protection for your digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{layer.title}</h3>
                    <p className="text-gray-300">{layer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Security Posture
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in security, compliance, and operational efficiency.
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
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
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
                  <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
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
              Our Zero Trust solution adapts to various industries, providing tailored 
              security for your specific compliance and security needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-red-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Secure Your Network Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide that use our Zero Trust solution to protect 
              their digital assets and enable secure remote work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustNetworkAccess;