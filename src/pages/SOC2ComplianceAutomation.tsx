import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
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
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
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
          </div>
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

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
  );
};

export default SOC2ComplianceAutomation;