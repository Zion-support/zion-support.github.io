import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  DollarSign,
  BarChart3,
  Eye,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Database,
  Network,
  Target,
  TrendingUp,
  Key,
  AlertTriangle,
  Settings,
  Monitor
} from 'lucide-react';

const ZeroTrustNetworkAccess: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify approach with continuous authentication and authorization.'
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'End-to-end encryption with quantum-resistant algorithms for maximum security.'
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Real-time threat detection and response with AI-powered security analytics.'
    },
    {
      icon: Key,
      title: 'Identity-Based Access',
      description: 'Granular access control based on user identity, device, and context.'
    }
  ];

  const benefits = [
    'Reduce security breaches by 95%',
    'Eliminate network perimeter vulnerabilities',
    'Improve compliance and audit capabilities',
    'Enable secure remote work at scale',
    'Reduce IT security overhead',
    'Provide granular access control'
  ];

  const useCases = [
    {
      title: 'Remote Workforce Security',
      description: 'Secure access for distributed teams with zero trust principles.',
      icon: Users
    },
    {
      title: 'Cloud Security',
      description: 'Protect cloud resources with identity-based access control.',
      icon: Network
    },
    {
      title: 'IoT Device Security',
      description: 'Secure IoT devices with zero trust network segmentation.',
      icon: Network
    },
    {
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements with comprehensive security controls.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Zero Trust Security Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zero Trust
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Network Access</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your security posture with zero trust network access. Never trust, always verify 
              with continuous authentication and granular access control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Zero Trust Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our zero trust network access platform provides comprehensive security with 
              continuous verification and granular access control.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Zero Trust Network Access?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our zero trust platform delivers unmatched security with continuous verification, 
                reducing risk and improving compliance across your organization.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Security Performance</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Breach Reduction</span>
                  <span className="text-blue-400 font-bold">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Response Time</span>
                  <span className="text-green-400 font-bold">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Compliance</span>
                  <span className="text-indigo-400 font-bold">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Uptime</span>
                  <span className="text-cyan-400 font-bold">99.99%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Zero Trust Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how zero trust network access can secure your organization 
              across various use cases and environments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Implement Zero Trust?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations who have transformed their security posture 
              with zero trust network access.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Network Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Sales
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZeroTrustNetworkAccess;