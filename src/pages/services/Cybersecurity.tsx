import React from 'react';
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Network,
  Key,
  Monitor
=======
  Zap
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const Cybersecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security systems that detect, prevent, and respond to sophisticated cyber threats in real-time.",
      benefits: ["Real-time monitoring", "AI-powered detection", "Automated response"]
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive security framework that verifies every user, device, and transaction before granting access.",
      benefits: ["Identity verification", "Continuous monitoring", "Least privilege access"]
    },
    {
      icon: Eye,
      title: "Security Operations Center",
      description: "24/7 monitoring and incident response services that provide round-the-clock protection for your digital assets.",
      benefits: ["24/7 monitoring", "Expert analysts", "Rapid response"]
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid detection, containment, and recovery services to minimize damage from security incidents.",
      benefits: ["Quick detection", "Minimal downtime", "Full recovery"]
    }
  ];

  const services = [
    {
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Users, Globe, Target, CheckCircle } from 'lucide-react';

export default function Cybersecurity() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cybersecurity - Zion Tech Group" 
        description="Advanced security and protection solutions for digital assets with comprehensive threat detection and compliance automation."
        tags={["cybersecurity", "zero trust", "threat intelligence", "compliance automation", "SOC2", "penetration testing"]}
        url="https://ziontechgroup.com/services/cybersecurity"
      />

  const threats = [
    "Ransomware & Malware Attacks",
    "Phishing & Social Engineering",
    "Data Breaches & Exfiltration",
    "Insider Threats & Sabotage",
    "DDoS & Network Attacks",
    "Advanced Persistent Threats"
  ];

  const benefits = [
    "Protect sensitive data and intellectual property",
    "Maintain business continuity and reputation",
    "Meet regulatory compliance requirements",
    "Reduce security incident costs",
    "Build customer trust and confidence",
    "Stay ahead of evolving threats"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Cybersecurity Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your business with enterprise-grade cybersecurity solutions and expert threat intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Secure Your Business
              </button>
              <button className="px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                Get Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Security Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business from evolving threats.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg w-fit mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
=======
      title: "Network Security",
      description: "Firewalls, intrusion detection systems, and network monitoring to protect your infrastructure.",
      icon: Network
    },
    {
      title: "Endpoint Protection",
      description: "Advanced antivirus, device management, and threat prevention for all endpoints.",
      icon: Cpu
    },
    {
      title: "Data Protection",
      description: "Encryption, backup, and recovery solutions to safeguard your critical data.",
      icon: Database
    },
    {
      title: "Identity & Access Management",
      description: "Multi-factor authentication, single sign-on, and privileged access management.",
      icon: Key
    },
    {
      title: "Security Assessment",
      description: "Vulnerability assessments, penetration testing, and security audits.",
      icon: Target
    },
    {
      title: "Compliance & Governance",
      description: "GDPR, HIPAA, SOC 2, and industry-specific compliance solutions.",
      icon: Monitor
    }
  ];

  const technologies = [
    "AI-Powered Threat Detection",
    "Machine Learning Analytics",
    "Behavioral Analysis",
    "Quantum-Safe Cryptography",
    "Blockchain Security",
    "Cloud Security",
    "IoT Security",
    "Mobile Security"
  ];

  const benefits = [
    {
      title: "Proactive Protection",
      description: "Identify and neutralize threats before they can cause damage to your systems.",
      icon: Shield
    },
    {
      title: "Cost Reduction",
      description: "Prevent costly data breaches and minimize the impact of security incidents.",
      icon: TrendingUp
    },
    {
      title: "Compliance Assurance",
      description: "Meet regulatory requirements and industry standards with confidence.",
      icon: Target
    },
    {
      title: "Business Continuity",
      description: "Ensure your operations continue uninterrupted even during security events.",
      icon: Rocket
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-6">
              Cybersecurity Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your digital assets with enterprise-grade cybersecurity solutions that detect, 
              prevent, and respond to threats in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-red-500/30"
              >
                Secure Your Business
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-red-400/50 text-red-400 rounded-lg hover:bg-red-400/20 transition-all duration-300 text-lg font-semibold"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Security Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-red-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive cybersecurity solutions provide multi-layered protection 
              against evolving threats and ensure your business remains secure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-red-400">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect every aspect of your digital infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Threats We Protect Against</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay protected against the latest cybersecurity threats and attack vectors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Target className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-200">{threat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Security?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our cybersecurity solutions provide comprehensive protection and peace of mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Security?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of enterprise-grade cybersecurity protection and peace of mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on cutting-edge security technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-red-400 text-sm font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait until it's too late. Protect your digital assets with our comprehensive cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-400 hover:to-orange-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-red-500/30"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-red-400/50 text-red-400 rounded-lg hover:bg-red-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
=======
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a breach to happen. Protect your business with Zion Tech Group's cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                Start Protection
              </button>
              <button className="px-8 py-4 border border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
                Security Audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;