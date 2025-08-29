import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Brain, Zap, Users, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Cpu, Database, Lock, Eye, BarChart3, MessageSquare, Calendar, Phone, Mail, MapPin, Server, Network, Code, GitBranch, Package, Shield, Activity, Gauge, GitCommit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Multi-cloud deployment and management with automated provisioning and scaling'
    },
    {
      icon: Code,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines with intelligent quality gates'
    },
    {
      icon: GitBranch,
      title: 'GitOps Workflows',
      description: 'Infrastructure as code with Git-based deployment and version control'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker management with automated scaling and monitoring'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Automated security scanning, compliance checks, and vulnerability management'
    },
    {
      icon: Activity,
      title: 'Monitoring & Observability',
      description: 'Real-time monitoring, logging, and alerting with AI-powered insights'
    }
  ];

  const benefits = [
    'Deploy 10x faster with automated pipelines',
    'Reduce infrastructure costs by 40%',
    'Achieve 99.9% uptime with auto-scaling',
    'Eliminate manual deployment errors',
    'Improve team productivity by 60%',
    'Ensure security and compliance automatically'
  ];

  const useCases = [
    {
      title: 'Application Modernization',
      description: 'Migrate legacy applications to cloud-native architectures with DevOps practices'
    },
    {
      title: 'Microservices Deployment',
      description: 'Deploy and manage microservices with automated CI/CD and monitoring'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Implement and manage applications across multiple cloud providers'
    },
    {
      title: 'DevOps Transformation',
      description: 'Transform development teams with modern DevOps practices and tools'
    }
  ];

  const devopsServices = [
    {
      icon: GitCommit,
      title: 'CI/CD Implementation',
      items: ['Pipeline automation', 'Quality gates', 'Automated testing', 'Deployment strategies']
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      items: ['Assessment & planning', 'Data migration', 'Application refactoring', 'Performance optimization']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      items: ['Terraform automation', 'Kubernetes setup', 'Monitoring & alerting', 'Backup & recovery']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      items: ['Security scanning', 'Compliance automation', 'Access management', 'Audit logging']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4" />
              Cloud DevOps
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Cloud
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}DevOps
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your development and deployment with our comprehensive Cloud DevOps platform. 
              Automate infrastructure, streamline CI/CD, and achieve continuous delivery excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced DevOps Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our Cloud DevOps platform combines cutting-edge tools, automation, and best practices 
              to deliver rapid, reliable, and secure software deployments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive DevOps Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From CI/CD implementation to cloud migration, our platform provides 
              end-to-end DevOps solutions for modern software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devopsServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Transform Your Development Process
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Our Cloud DevOps platform delivers measurable improvements in deployment speed, 
                reliability, and team productivity while reducing costs and operational overhead.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-8 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">10x</div>
                    <div className="text-sm text-gray-400">Faster deployment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">40%</div>
                    <div className="text-sm text-gray-400">Cost reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                    <div className="text-sm text-gray-400">Productivity increase</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              DevOps Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform addresses the most critical challenges in modern software development, 
              providing comprehensive DevOps solutions for various organizational needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-3xl p-12 text-center border border-blue-500/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations that are already using our Cloud DevOps platform to 
              accelerate development and achieve continuous delivery excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}