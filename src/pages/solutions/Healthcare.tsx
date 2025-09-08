import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Shield,
  Brain,
  Cpu,
  Server,
  Lock,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  Clock,
  DollarSign,
  Zap,
  Rocket,
  BarChart3,
  TrendingUp,
  Settings,
  Activity,
  Stethoscope,
  Pill,
  Microscope,
  ActivitySquare,
  FileText,
  Database,
  Network,
  Eye,
  MessageSquare
} from 'lucide-react';

export default function Healthcare() {
  const healthcareSolutions = [
    {
      category: 'AI-Powered Diagnostics',
      solutions: [
        {
          name: 'AI Healthcare Analytics',
          description: 'Transform healthcare delivery with AI-powered diagnostics, patient care, and operational insights.',
          features: ['Predictive Diagnostics', 'Patient Risk Assessment', 'Treatment Optimization', 'Clinical Decision Support'],
          icon: Brain,
          href: '/services/ai-healthcare-analytics',
          color: 'from-purple-600 to-pink-600'
        },
        {
          name: 'Medical Image Analysis',
          description: 'Advanced AI-powered analysis of medical images for faster and more accurate diagnosis.',
          features: ['Radiology Analysis', 'Pathology Detection', '3D Imaging', 'Automated Reporting'],
          icon: Eye,
          href: '/services/ai-healthcare-analytics',
          color: 'from-blue-600 to-cyan-600'
        },
        {
          name: 'Predictive Healthcare',
          description: 'Leverage machine learning to predict patient outcomes and optimize care pathways.',
          features: ['Risk Prediction', 'Readmission Prevention', 'Resource Optimization', 'Population Health'],
          icon: TrendingUp,
          href: '/services/ai-healthcare-analytics',
          color: 'from-green-600 to-emerald-600'
        }
      ]
    },
    {
      category: 'Digital Health Infrastructure',
      solutions: [
        {
          name: 'Digital Twin Solutions',
          description: 'Create digital replicas of healthcare systems for simulation, monitoring, and optimization.',
          features: ['Patient Modeling', 'System Simulation', 'Predictive Maintenance', 'Resource Planning'],
          icon: Server,
          href: '/services/digital-twin',
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'IoT Edge Computing',
          description: 'Connect medical devices and sensors for real-time monitoring and data collection.',
          features: ['Device Integration', 'Real-time Monitoring', 'Data Collection', 'Edge Analytics'],
          icon: Cpu,
          href: '/services/iot-edge',
          color: 'from-orange-600 to-red-600'
        },
        {
          name: 'Healthcare Data Platform',
          description: 'Secure, scalable platform for managing healthcare data and analytics.',
          features: ['Data Integration', 'HIPAA Compliance', 'Real-time Analytics', 'Secure Access'],
          icon: Database,
          href: '/services/data-analytics',
          color: 'from-gray-600 to-slate-600'
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      solutions: [
        {
          name: 'Healthcare Cybersecurity',
          description: 'Protect patient data and healthcare systems with advanced security solutions.',
          features: ['HIPAA Compliance', 'Threat Detection', 'Data Encryption', 'Access Control'],
          icon: Shield,
          href: '/services/ai-cybersecurity-suite',
          color: 'from-red-600 to-pink-600'
        },
        {
          name: 'Zero Trust Security',
          description: 'Implement comprehensive zero-trust security for healthcare environments.',
          features: ['Identity Verification', 'Continuous Monitoring', 'Network Segmentation', 'Incident Response'],
          icon: Lock,
          href: '/services/zero-trust-network-architecture',
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Compliance Management',
          description: 'Streamline healthcare compliance with automated monitoring and reporting.',
          features: ['Regulatory Monitoring', 'Audit Trails', 'Risk Assessment', 'Compliance Reporting'],
          icon: CheckCircle,
          href: '/services/ai-compliance-copilot',
          color: 'from-green-600 to-teal-600'
        }
      ]
    }
  ];

  const healthcareBenefits = [
    {
      icon: Heart,
      title: 'Improved Patient Outcomes',
      description: 'AI-powered diagnostics and predictive analytics lead to better treatment decisions and patient care.'
    },
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Streamline healthcare operations with intelligent automation and resource optimization.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect sensitive patient data with enterprise-grade cybersecurity and compliance solutions.'
    },
    {
      icon: Brain,
      title: 'Data-Driven Decisions',
      description: 'Make informed clinical decisions with real-time analytics and AI-powered insights.'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce healthcare costs through intelligent automation and resource optimization.'
    },
    {
      icon: Rocket,
      title: 'Innovation Leadership',
      description: 'Stay ahead of healthcare technology trends with cutting-edge solutions and innovation.'
    }
  ];

  const useCases = [
    {
      title: 'Hospital Management',
      description: 'Optimize hospital operations with AI-powered resource management and patient flow optimization.',
      icon: Building,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Telemedicine',
      description: 'Enable remote healthcare delivery with secure, scalable telemedicine platforms.',
      icon: Video,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Clinical Research',
      description: 'Accelerate clinical research with AI-powered data analysis and predictive modeling.',
      icon: Microscope,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Patient Engagement',
      description: 'Improve patient engagement with personalized health apps and communication tools.',
      icon: Users,
      color: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Healthcare Solutions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform healthcare delivery with cutting-edge technology solutions that improve patient outcomes, 
              enhance operational efficiency, and ensure data security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services-overview"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healthcare Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              From AI-powered diagnostics to secure infrastructure, our healthcare solutions cover every aspect 
              of modern healthcare delivery and management.
            </p>
          </motion.div>

          <div className="space-y-16">
            {healthcareSolutions.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-zion-slate-900 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: solutionIndex * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} text-white mb-4`}>
                        <solution.icon className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-semibold text-zion-slate-900 mb-3">
                        {solution.name}
                      </h4>
                      <p className="text-zion-slate-600 mb-4">
                        {solution.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={solution.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Healthcare Use Cases
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              Discover how our healthcare solutions address real-world challenges and opportunities 
              across different healthcare settings and specialties.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${useCase.color} text-white mb-6`}>
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-zion-slate-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-zion-slate-600">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Why Choose Our Healthcare Solutions?
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              Experience the transformative power of healthcare technology designed for the modern 
              healthcare ecosystem, with a focus on patient care, security, and compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zion-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our healthcare solutions can improve patient care and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}