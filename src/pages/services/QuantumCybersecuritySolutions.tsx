import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Brain, 
  Atom, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Rocket,
  BarChart3,
  Users,
  Globe,
  Network,
  Server,
  Database,
  Key,
  Fingerprint,
  Scan,
  AlertTriangle,
  Security,
  Firewall,
  Encryption,
  Decryption,
  Cryptography,
  Blockchain,
  MachineLearning,
  ThreatDetection,
  IncidentResponse,
  Compliance,
  Audit,
  PenetrationTesting,
  VulnerabilityAssessment,
  RiskManagement,
  BusinessContinuity,
  DisasterRecovery
} from 'lucide-react';

export default function QuantumCybersecuritySolutions() {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Resistant Cryptography",
      description: "Next-generation encryption algorithms that withstand quantum computing attacks"
    },
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Machine learning algorithms that identify and respond to threats in real-time"
    },
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Comprehensive security framework that verifies every user and device"
    },
    {
      icon: Eye,
      title: "Advanced Monitoring & Analytics",
      description: "Real-time security monitoring with predictive threat intelligence"
    },
    {
      icon: Lock,
      title: "Multi-Layer Security",
      description: "Defense-in-depth approach with multiple security layers"
    },
    {
      icon: Brain,
      title: "Behavioral Analysis",
      description: "AI-driven user behavior analysis for anomaly detection"
    }
  ];

  const benefits = [
    "99.99% threat detection accuracy",
    "Real-time threat response",
    "Quantum-resistant security",
    "Compliance with all major standards",
    "Reduced security incidents by 95%",
    "24/7 automated monitoring"
  ];

  const pricing = [
    {
      name: "Essential",
      price: "$25,000",
      period: "/month",
      description: "Perfect for small to medium enterprises",
      features: [
        "Quantum-Resistant Encryption",
        "AI Threat Detection",
        "Basic Zero-Trust Framework",
        "Security Monitoring Dashboard",
        "Incident Response Support",
        "Compliance Reporting",
        "Email Support",
        "Monthly Security Audits"
      ]
    },
    {
      name: "Professional",
      price: "$75,000",
      period: "/month",
      description: "Ideal for large enterprises",
      features: [
        "Advanced Quantum Cryptography",
        "Advanced AI Threat Intelligence",
        "Full Zero-Trust Implementation",
        "Real-time Threat Response",
        "Advanced Analytics & Reporting",
        "Custom Security Policies",
        "Priority Support",
        "Weekly Security Reviews",
        "Penetration Testing",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$150,000",
      period: "/month",
      description: "For Fortune 500 and government organizations",
      features: [
        "Custom Quantum Security Solutions",
        "Advanced AI Models",
        "Full Zero-Trust Architecture",
        "Custom Threat Intelligence",
        "Advanced Compliance Management",
        "Dedicated Security Team",
        "24/7 Dedicated Support",
        "Daily Security Monitoring",
        "Custom Security Solutions",
        "On-premise Deployment"
      ]
    }
  ];

  const securityServices = [
    {
      name: "Penetration Testing",
      description: "Comprehensive security assessment of your systems and infrastructure",
      features: ["Vulnerability scanning", "Social engineering tests", "Physical security assessment", "Comprehensive reporting"]
    },
    {
      name: "Incident Response",
      description: "24/7 incident detection, response, and recovery services",
      features: ["Real-time monitoring", "Automated response", "Forensic analysis", "Recovery planning"]
    },
    {
      name: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations",
      features: ["GDPR compliance", "SOC 2 certification", "ISO 27001", "HIPAA compliance"]
    },
    {
      name: "Security Training",
      description: "Employee security awareness and training programs",
      features: ["Phishing simulations", "Security best practices", "Compliance training", "Regular assessments"]
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Bank-grade security for financial transactions, customer data, and regulatory compliance",
      results: ["Zero security breaches", "100% regulatory compliance", "Enhanced customer trust", "Reduced fraud incidents"]
    },
    {
      industry: "Healthcare",
      description: "HIPAA-compliant security for patient data, medical devices, and healthcare systems",
      results: ["Protected patient privacy", "HIPAA compliance", "Secure medical devices", "Reduced data breaches"]
    },
    {
      industry: "Government",
      description: "National security-grade protection for government systems and classified information",
      results: ["National security compliance", "Protected classified data", "Enhanced cyber resilience", "Secure communications"]
    },
    {
      industry: "Manufacturing",
      description: "Industrial cybersecurity for critical infrastructure and manufacturing systems",
      results: ["Protected critical infrastructure", "Reduced operational risks", "Enhanced supply chain security", "Improved compliance"]
    }
  ];

  const complianceStandards = [
    "ISO 27001", "SOC 2 Type II", "GDPR", "HIPAA", "PCI DSS", "NIST", "CIS Controls",
    "COBIT", "ITIL", "CMMC", "FedRAMP", "FISMA", "SOX", "GLBA", "CCPA"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Cybersecurity Solutions - Zion Tech Group"
        description="Next-generation cybersecurity with quantum-resistant encryption, AI-powered threat detection, and zero-trust architecture. Protect your organization from emerging threats."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 mr-2" />
              Next-Gen Security
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Quantum Cybersecurity Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Protect your organization with next-generation cybersecurity featuring quantum-resistant encryption, 
              AI-powered threat detection, and zero-trust architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                View Pricing
              </a>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Next-Generation Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum cybersecurity solutions combine cutting-edge technology with proven security practices 
              to protect your organization from emerging threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From proactive security assessment to incident response, we provide end-to-end cybersecurity solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unparalleled protection with measurable security improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum cybersecurity solutions are designed to meet the unique security needs of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions help you meet and exceed industry security and compliance standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:border-indigo-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm font-medium">{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Security Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs and risk profile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-indigo-500/50 bg-gradient-to-b from-indigo-900/20 to-slate-800/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-600 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.name === 'Professional'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                      : 'border border-slate-600 text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Don't wait for a security breach. Protect your organization with quantum-grade cybersecurity today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services-overview"
                className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}