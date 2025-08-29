import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Users, Zap, Database, Globe, BarChart3, CheckCircle, Network, Cpu, Clock, Target } from 'lucide-react';

export default function IncidentResponsePlatform() {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Real-time Detection',
      description: 'Advanced threat detection with immediate alerts and automated response capabilities.',
      benefits: ['Instant alerts', 'Automated response', 'Threat intelligence', 'Behavioral analysis']
    },
    {
      icon: Shield,
      title: 'Incident Management',
      description: 'Comprehensive incident tracking, investigation, and resolution workflows.',
      benefits: ['Case management', 'Investigation tools', 'Resolution tracking', 'Documentation']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Coordinated response efforts with role-based access and communication tools.',
      benefits: ['Role management', 'Communication tools', 'Task assignment', 'Progress tracking']
    },
    {
      icon: Clock,
      title: 'Response Automation',
      description: 'Automated response actions to contain threats and minimize damage.',
      benefits: ['Playbook automation', 'Containment actions', 'Recovery procedures', 'Compliance reporting']
    }
  ];

  const useCases = [
    {
      title: 'Security Operations',
      description: 'Centralized security operations center with comprehensive incident management.',
      icon: Shield,
      benefits: ['SOC integration', 'Threat hunting', 'Incident correlation', 'Performance metrics']
    },
    {
      title: 'Compliance Management',
      description: 'Meet regulatory requirements with detailed incident documentation and reporting.',
      icon: Database,
      benefits: ['Audit trails', 'Compliance reports', 'Regulatory alignment', 'Documentation']
    },
    {
      title: 'Threat Intelligence',
      description: 'Integrate threat intelligence feeds for proactive threat detection and response.',
      icon: Target,
      benefits: ['Intel integration', 'IOC management', 'Threat feeds', 'Context enrichment']
    },
    {
      title: 'Forensic Analysis',
      description: 'Comprehensive digital forensics capabilities for incident investigation.',
      icon: Cpu,
      benefits: ['Evidence collection', 'Analysis tools', 'Chain of custody', 'Expert testimony']
    }
  ];

  const technologies = [
    'Security Information and Event Management (SIEM)',
    'Endpoint Detection and Response (EDR)',
    'Threat Intelligence Platforms (TIP)',
    'Security Orchestration, Automation and Response (SOAR)',
    'Network Traffic Analysis (NTA)',
    'User and Entity Behavior Analytics (UEBA)',
    'Digital Forensics Tools',
    'Incident Management Systems'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Faster Response',
      description: 'Reduce incident response time with automated detection and response capabilities.'
    },
    {
      icon: Shield,
      title: 'Better Protection',
      description: 'Improve security posture with comprehensive threat detection and containment.'
    },
    {
      icon: BarChart3,
      title: 'Compliance Ready',
      description: 'Meet regulatory requirements with detailed incident documentation and reporting.'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Protect assets across all locations with centralized incident management.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Incident Response Platform Services - Zion Tech Group"
        description="Comprehensive incident response platform with real-time detection, automated response, and team collaboration. Protect your organization with advanced security incident management."
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
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Incident Response
              <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive incident response platform with real-time detection, 
              automated response, and team collaboration. Protect your organization 
              with advanced security incident management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Target className="w-16 h-16 text-orange-400 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Network className="w-16 h-16 text-red-500 animate-bounce" />
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
              Platform Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our comprehensive incident response platform delivers the tools, 
              automation, and collaboration needed to handle security incidents effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our incident response platform offers unique advantages that can transform 
              your security operations and improve incident handling.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
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
              Platform Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how our incident response platform can be implemented across 
              different security operations and use cases.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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
              deliver robust, scalable, and effective incident response solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="text-orange-400 mb-3">
                  <Zap className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-white font-medium text-sm">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Improve Incident Response?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your security operations with comprehensive incident response 
              capabilities from Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}