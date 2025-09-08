import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Zap, Database, Globe, BarChart3, CheckCircle, Network, Cpu, Eye, Key } from 'lucide-react';

export default function ZeroTrustArchitecture() {
  const features = [
    {
      icon: Shield,
      title: 'Identity Verification',
      description: 'Multi-factor authentication and continuous identity validation for all users and devices.',
      benefits: ['MFA enforcement', 'Biometric auth', 'Device trust', 'Session management']
    },
    {
      icon: Lock,
      title: 'Micro-segmentation',
      description: 'Granular network segmentation isolating workloads and limiting lateral movement.',
      benefits: ['Network isolation', 'Traffic control', 'Policy enforcement', 'Threat containment']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: 'Real-time visibility into all network traffic, user behavior, and system activities.',
      benefits: ['Traffic analysis', 'Behavioral analytics', 'Threat detection', 'Incident response']
    },
    {
      icon: Key,
      title: 'Least Privilege Access',
      description: 'Minimal access permissions based on specific roles and just-in-time authorization.',
      benefits: ['Role-based access', 'Time-limited permissions', 'Privilege escalation', 'Access reviews']
    }
  ];

  const useCases = [
    {
      title: 'Enterprise Networks',
      description: 'Secure corporate networks with zero trust principles and advanced threat protection.',
      icon: Network,
      benefits: ['Network security', 'User authentication', 'Device management', 'Compliance']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure cloud environments with identity-based access and continuous monitoring.',
      icon: Database, // Changed from Cloud to Database as Cloud is not imported
      benefits: ['Cloud security', 'API protection', 'Data encryption', 'Compliance']
    },
    {
      title: 'Remote Workforce',
      description: 'Secure remote access solutions for distributed teams and mobile workers.',
      icon: Users,
      benefits: ['VPN alternatives', 'Device trust', 'Secure access', 'User experience']
    },
    {
      title: 'Critical Infrastructure',
      description: 'Protect industrial systems and critical infrastructure with zero trust security.',
      icon: Cpu,
      benefits: ['OT security', 'Network isolation', 'Threat prevention', 'Compliance']
    }
  ];

  const technologies = [
    'Identity Providers (IdP)',
    'Network Access Control (NAC)',
    'Software-Defined Perimeter (SDP)',
    'Zero Trust Network Access (ZTNA)',
    'Privileged Access Management (PAM)',
    'Security Information and Event Management (SIEM)',
    'Endpoint Detection and Response (EDR)',
    'Cloud Access Security Broker (CASB)'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Enhanced Security',
      description: 'Eliminate trust assumptions and continuously verify all access attempts.'
    },
    {
      icon: Shield,
      title: 'Threat Prevention',
      description: 'Prevent lateral movement and contain threats before they spread.'
    },
    {
      icon: BarChart3, // Changed from TrendingUp to BarChart3
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with comprehensive security controls.'
    },
    {
      icon: Globe,
      title: 'Global Protection',
      description: 'Secure access from anywhere while maintaining security standards.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zero Trust Architecture Services - Zion Tech Group"
        description="Implement comprehensive zero trust security architecture. Continuous verification, micro-segmentation, and least privilege access for modern enterprise security."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-cyan-500 to-green-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Zero Trust
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-green-500 bg-clip-text text-transparent">
                Architecture
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Implement comprehensive zero trust security architecture. Continuous verification, 
              micro-segmentation, and least privilege access for modern enterprise security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Lock className="w-16 h-16 text-blue-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Key className="w-16 h-16 text-cyan-500 animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Zero Trust Principles
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive zero trust architecture implements all core principles 
              to deliver robust, adaptive security for modern enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zero Trust?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Zero trust architecture offers unique advantages that can transform 
              your security posture and protect against modern threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Implementation Scenarios
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how zero trust architecture can be implemented across 
              different environments and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage cutting-edge security technologies and frameworks to 
              deliver robust, scalable, and effective zero trust solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="text-blue-400 mb-3">
                  <Zap className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-white font-medium text-sm">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Implement Zero Trust?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your security posture with comprehensive zero trust architecture 
              from Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}