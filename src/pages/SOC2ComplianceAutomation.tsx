import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Shield, 
  Zap, 
  CheckCircle, 
  Database, 
  BarChart3, 
  Globe, 
  Network, 
  FileText,
  ArrowRight,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  Lock,
  AlertTriangle
} from 'lucide-react';
=======
import { motion } from 'framer-motion';
import { Shield, CheckCircle, TrendingUp, Database, Users, ArrowRight, Lock, FileText, BarChart3 } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3

const SOC2ComplianceAutomation = () => {
  const features = [
    {
      icon: Shield,
<<<<<<< HEAD
      title: "Automated Compliance",
      description: "AI-powered automation of SOC2 compliance processes and controls"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting for compliance violations"
    },
    {
      icon: CheckCircle,
      title: "Control Testing",
      description: "Automated testing and validation of security controls"
    },
    {
      icon: Database,
      title: "Evidence Collection",
      description: "Automated collection and storage of compliance evidence"
    },
    {
      icon: BarChart3,
      title: "Compliance Analytics",
      description: "Advanced reporting and analytics for compliance status"
    },
    {
      icon: FileText,
      title: "Audit Preparation",
      description: "Automated preparation of audit documentation and reports"
    }
  ];

  const controls = [
    {
      title: "Access Control (CC6)",
      description: "Automated user access management and monitoring",
      benefits: ["User provisioning", "Access reviews", "Privilege monitoring"]
    },
    {
      title: "Change Management (CC8)",
      description: "Automated change control and approval workflows",
      benefits: ["Change tracking", "Approval workflows", "Rollback capabilities"]
    },
    {
      title: "Risk Assessment (CC3)",
      description: "Continuous risk monitoring and assessment",
      benefits: ["Risk identification", "Impact analysis", "Mitigation tracking"]
    },
    {
      title: "Security Monitoring (CC7)",
      description: "Real-time security event monitoring and response",
      benefits: ["Threat detection", "Incident response", "Security analytics"]
=======
      title: 'Automated Compliance Monitoring',
      description: 'Continuous monitoring and automated compliance checks across your entire infrastructure.'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Auditing',
      description: 'Instant audit trails and compliance reporting with automated evidence collection.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and insights for compliance performance optimization.'
    },
    {
      icon: Database,
      title: 'Centralized Management',
      description: 'Single platform for managing all SOC2 compliance requirements and controls.'
    },
    {
      icon: Users,
      title: 'Role-based Access',
      description: 'Secure access control with automated user provisioning and deprovisioning.'
    },
    {
      icon: Lock,
      title: 'Security Controls',
      description: 'Comprehensive security controls with automated threat detection and response.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "Reduced compliance costs",
    "Faster audit preparation",
    "Continuous compliance monitoring",
    "Reduced manual effort",
    "Improved audit success rates",
    "Real-time compliance status"
  ];

  const useCases = [
    {
      title: "Cloud Service Providers",
      description: "Maintain SOC2 compliance for cloud infrastructure and services"
    },
    {
      title: "Financial Services",
      description: "Ensure compliance with strict financial regulations and standards"
    },
    {
      title: "Healthcare Organizations",
      description: "Maintain compliance with healthcare security requirements"
    },
    {
      title: "Technology Companies",
      description: "Streamline compliance for software and SaaS products"
=======
    '90% reduction in manual compliance tasks',
    'Real-time compliance monitoring',
    'Automated evidence collection',
    'Instant audit reporting',
    'Reduced compliance costs',
    'Enhanced security posture'
  ];

  const complianceAreas = [
    {
      title: 'Security Controls',
      description: 'Automated monitoring and enforcement of security policies, access controls, and threat detection systems.'
    },
    {
      title: 'Availability Monitoring',
      description: 'Continuous monitoring of system availability, performance, and disaster recovery capabilities.'
    },
    {
      title: 'Processing Integrity',
      description: 'Automated validation of data processing accuracy, completeness, and authorization.'
    },
    {
      title: 'Confidentiality Protection',
      description: 'Automated encryption, access controls, and data protection measures.'
    },
    {
      title: 'Privacy Controls',
      description: 'Automated privacy compliance monitoring and data handling controls.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
  ];
=======
import { Shield, Brain, Zap, ArrowRight, Users, Target, Clock, BarChart3, CheckCircle, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-a260

export default function SOC2ComplianceAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                SOC2 Compliance Automation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Streamline your SOC2 compliance with intelligent automation. Our AI-powered platform 
              automates compliance processes, reduces manual effort, and ensures continuous 
              compliance across all your systems and controls.
=======
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, CheckCircle, TrendingUp, ArrowRight, Star, Rocket, Globe, Brain, Zap, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const SOC2ComplianceAutomation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SOC2 Compliance Automation - Zion Tech Group</title>
        <meta name="description" content="Automate your SOC2 compliance with our AI-powered platform. Streamline audits, continuous monitoring, and automated reporting for seamless compliance management." />
        <meta name="keywords" content="SOC2 compliance, compliance automation, SOC2 audit, security compliance, automated compliance, SOC2 reporting" />
        <link rel="canonical" href="https://ziontechgroup.com/soc2-compliance-automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                SOC2 Compliance
                <span className="block bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Streamline your SOC2 compliance process with our AI-powered automation platform. 
                Achieve continuous compliance with automated monitoring, reporting, and audit preparation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services/cybersecurity"
                  className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Automated Compliance Excellence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform automates every aspect of SOC2 compliance, from continuous monitoring 
                to audit preparation, ensuring you're always audit-ready.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Monitoring</h3>
                <p className="text-gray-300">
                  Continuous automated monitoring of all SOC2 controls with intelligent anomaly detection and alerting.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Compliance</h3>
                <p className="text-gray-300">
                  Instant visibility into compliance status with real-time dashboards and automated reporting.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Auditing</h3>
                <p className="text-gray-300">
                  Streamlined audit preparation with automated evidence collection and compliance documentation.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Controls</h3>
                <p className="text-gray-300">
                  Comprehensive security control monitoring and automated policy enforcement across all systems.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Advanced analytics and reporting on compliance performance, trends, and improvement opportunities.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">
                  Streamlined workflows and collaboration tools for compliance teams and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOC2 Framework Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Complete SOC2 Framework Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform covers all five Trust Service Criteria (TSC) with automated controls, 
                monitoring, and reporting for comprehensive SOC2 compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Security (CC6.1)</h3>
                    <p className="text-gray-300">
                      Automated monitoring of access controls, authentication, encryption, and security 
                      measures with real-time threat detection and response.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Availability (CC7.1)</h3>
                    <p className="text-gray-300">
                      Continuous monitoring of system availability, performance, and disaster recovery 
                      capabilities with automated failover and recovery testing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Processing Integrity (CC8.1)</h3>
                    <p className="text-gray-300">
                      Automated validation of data processing accuracy, completeness, and authorization 
                      with real-time error detection and correction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Confidentiality (CC9.1)</h3>
                    <p className="text-gray-300">
                      Automated protection of sensitive information through encryption, access controls, 
                      and data classification with continuous monitoring and compliance validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Privacy (CC10.1)</h3>
                    <p className="text-gray-300">
                      Automated privacy controls and data protection measures with consent management, 
                      data minimization, and privacy impact assessments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Common Criteria (CC1-5)</h3>
                    <p className="text-gray-300">
                      Automated monitoring of control environment, communication, risk assessment, 
                      monitoring activities, and control activities with comprehensive reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Compliance Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency, accuracy, and confidence in your SOC2 compliance 
                with our automated platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">80%</h3>
                <p className="text-gray-300">Faster Compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-300">Continuous Monitoring</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">Compliance Rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">70%</h3>
                <p className="text-gray-300">Cost Reduction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that trust our automated platform for seamless SOC2 compliance 
              and continuous audit readiness.
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              SOC2 Compliance
              <span className="block bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your SOC2 compliance process with AI-powered automation. 
              Achieve and maintain compliance with intelligent monitoring, automated controls, and continuous auditing.
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
=======
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              SOC2 Compliance Automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Streamline your SOC2 compliance with AI-powered automation. Achieve continuous compliance 
              monitoring, automated auditing, and real-time reporting for all your security controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Start Free Trial
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our SOC2 compliance automation platform provides comprehensive monitoring, auditing, 
              and reporting capabilities to ensure continuous compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
=======
                to="/services/cybersecurity"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Key Advantages</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Compliance Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate your potential savings and efficiency gains with our automated compliance platform.
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2">
                <span>Calculate Savings</span>
                <ArrowRight className="w-5 h-5" />
              </button>
=======
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Automated Compliance Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage AI to automate and streamline your SOC2 compliance journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Monitoring</h3>
              <p className="text-gray-400">
                Continuous monitoring of security controls and compliance requirements with intelligent alerting.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Automated Controls</h3>
              <p className="text-gray-400">
                Intelligent automation of security controls and compliance processes to reduce manual effort.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Continuous Auditing</h3>
              <p className="text-gray-400">
                Real-time auditing and compliance verification with automated reporting and documentation.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
              <p className="text-gray-400">
                Automated risk assessment and vulnerability scanning with intelligent prioritization.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Compliance</h3>
              <p className="text-gray-400">
                Round-the-clock compliance monitoring and automated incident response for continuous compliance.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Analytics</h3>
              <p className="text-gray-400">
                Comprehensive dashboards and reports for compliance status and trend analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOC2 Trust Services Criteria */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              SOC2 Trust Services Criteria
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of all SOC2 trust service criteria with automated controls
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                  <p className="text-gray-400">
                    Automated security controls, access management, and threat detection across all systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Availability</h3>
                  <p className="text-gray-400">
                    Continuous monitoring of system availability, performance, and disaster recovery capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Processing Integrity</h3>
                  <p className="text-gray-400">
                    Automated validation of data processing accuracy and system reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Confidentiality</h3>
                  <p className="text-gray-400">
                    Automated data classification, encryption, and access controls for sensitive information.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Privacy</h3>
                  <p className="text-gray-400">
                    Automated privacy controls and data protection measures in compliance with regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance Reporting</h3>
                  <p className="text-gray-400">
                    Automated generation of compliance reports and evidence collection for auditors.
                  </p>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Compliance Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines AI-powered automation with deep compliance expertise to 
              streamline your SOC2 compliance journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SOC2 Trust Service Criteria
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation coverage for all SOC2 control areas and trust service criteria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {controls.map((control, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{control.title}</h3>
                <p className="text-gray-300 mb-6">{control.description}</p>
                <ul className="space-y-2">
                  {control.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of automated SOC2 compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your compliance process with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Reduce compliance effort by up to 70%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Automate routine compliance tasks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Continuous monitoring and alerting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Streamlined audit preparation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Risk Mitigation</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Proactive risk identification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Automated threat detection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time compliance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Reduced compliance gaps</span>
                </li>
              </ul>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our SOC2 compliance automation platform is designed for organizations across 
              all industries that need to maintain security and compliance standards.
=======
      {/* Compliance Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform covers all SOC2 Trust Service Criteria with automated monitoring and controls.
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
=======
            {complianceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">{area.title}</h3>
                <p className="text-gray-300 text-lg">{area.description}</p>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your SOC2 Compliance?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations that have streamlined their compliance processes with AI-powered 
            automation. Our expert team is ready to help you implement intelligent compliance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500/10 to-pink-600/10 rounded-2xl p-12 text-center border border-red-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your SOC2 Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your compliance process with AI-powered automation, continuous monitoring, 
              and intelligent controls for seamless SOC2 compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
=======
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your SOC2 compliance process with AI-powered automation and continuous monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Contact Sales
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
        </div>
      </section>
    </div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
  );
}