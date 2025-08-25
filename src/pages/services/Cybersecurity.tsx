import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
<<<<<<< HEAD
  Cpu, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Globe,
  Clock,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Code,
  Cloud,
  Settings,
  Monitor,
  RefreshCw,
  Heart,
  Star,
  Brain,
  Bot,
  Database as DatabaseIcon,
  ShieldCheck,
  Globe2,
  BarChart,
  Zap,
  Microchip
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

<<<<<<< HEAD
const Cybersecurity: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Threat Detection & Response",
      description: "Advanced AI-powered threat detection systems that identify and neutralize cyber threats in real-time."
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "Enterprise-grade encryption for data at rest and in transit, ensuring maximum security."
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security monitoring with automated incident response and threat hunting."
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and penetration testing to identify and fix security gaps."
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
    }
  ];

  const services = [
    {
<<<<<<< HEAD
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do.",
      icon: Target,
      benefits: ["Vulnerability Discovery", "Security Assessment", "Compliance Testing", "Risk Mitigation"]
    },
    {
      title: "Security Audits",
      description: "Thorough security reviews of your infrastructure, applications, and processes.",
      icon: Monitor,
      benefits: ["Security Review", "Compliance Check", "Policy Assessment", "Recommendations"]
    },
    {
      title: "Incident Response",
      description: "Rapid response and recovery services when security incidents occur.",
      icon: AlertTriangle,
      benefits: ["24/7 Response", "Forensic Analysis", "Recovery Support", "Lessons Learned"]
    },
    {
      title: "Security Training",
      description: "Employee security awareness training to prevent social engineering attacks.",
      icon: Users,
      benefits: ["Awareness Training", "Phishing Simulations", "Best Practices", "Compliance"]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Protect Your Assets",
      description: "Safeguard your data, systems, and reputation from cyber threats"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Meet industry standards and regulatory requirements with ease"
    },
    {
      icon: Eye,
      title: "Peace of Mind",
      description: "24/7 security monitoring gives you confidence in your digital safety"
    },
    {
      icon: Target,
      title: "Cost Effective",
      description: "Prevent costly data breaches and security incidents"
    }
  ];

  const technologies = [
    "AI-Powered Threat Detection",
    "Machine Learning Security",
    "Behavioral Analytics",
    "Zero Trust Architecture",
    "Multi-Factor Authentication",
    "Endpoint Detection & Response",
    "Security Information & Event Management",
    "Cloud Security Posture Management"
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for data security",
      requirements: ["Security", "Availability", "Processing Integrity", "Confidentiality", "Privacy"]
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      requirements: ["Risk Assessment", "Security Controls", "Continuous Improvement", "Documentation"]
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      requirements: ["Data Protection", "Privacy Rights", "Consent Management", "Breach Notification"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-red-900 text-white">
      <SEOHead 
        title="Cybersecurity Solutions - Zion Tech Group"
        description="Protect your business with comprehensive cybersecurity solutions. From threat detection to compliance, we provide enterprise-grade security services."
        keywords="cybersecurity, threat detection, data protection, security audits, penetration testing, incident response, compliance"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Secure Your Digital Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive cybersecurity solutions that protect your business from evolving threats and ensure compliance with industry standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
=======
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Zap, Users, Globe, Target, CheckCircle } from 'lucide-react';

export default function Cybersecurity() {
  const services = [
    {
      icon: Shield,
      title: "Security Assessment",
      description: "Comprehensive security audits and vulnerability assessments to identify and mitigate risks."
    },
    {
      icon: Lock,
      title: "Threat Detection",
      description: "Advanced threat detection systems with real-time monitoring and automated response."
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring and incident response for continuous protection."
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid incident response and recovery services to minimize business impact."
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Employee security awareness training and phishing simulation programs."
    },
    {
      icon: Globe,
      title: "Compliance Management",
      description: "Regulatory compliance support for SOC2, ISO 27001, and other frameworks."
    }
  ];

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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Core Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity solutions are built with cutting-edge technology to provide comprehensive protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your business from all angles
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
<<<<<<< HEAD
                <div className="grid grid-cols-2 gap-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
=======
                <p className="text-gray-300">{service.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Compliance Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance-focused security solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-red-400">{framework.name}</h3>
                <p className="text-gray-300 mb-6">{framework.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-400 mb-3">Requirements:</div>
                  {framework.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of comprehensive cybersecurity protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
<<<<<<< HEAD
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Advanced Security Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge security technologies that ensure comprehensive protection
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Microchip className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Protect your digital assets with enterprise-grade cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Explore All Services
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;