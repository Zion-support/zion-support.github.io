import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  Target
} from 'lucide-react';
export default function CybersecurityServices() {
  const securityServices = [
    {
      title: "Zero Trust Architecture",
      description: "Implement comprehensive zero-trust security framework for your organization",
      features: [
        "Identity Verification",
        "Device Trust Assessment",
        "Network Segmentation",
        "Continuous Monitoring"
      ],
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Threat Detection & Response",
      description: "Advanced threat detection and automated response systems",
      features: [
        "Real-time Monitoring",
        "AI-Powered Detection",
        "Automated Response",
        "Incident Investigation"
      ],
      icon: Eye,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Penetration Testing",
      description: "Comprehensive security testing to identify vulnerabilities",
      features: [
        "External Testing",
        "Internal Testing",
        "Social Engineering",
        "Physical Security"
      ],
      icon: Target,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Security Audits & Compliance",
      description: "Ensure compliance with industry standards and regulations",
      features: [
        "SOC 2 Compliance",
        "ISO 27001",
        "GDPR Compliance",
        "HIPAA Security"
      ],
      icon: Lock,
      color: "from-purple-500 to-pink-500"
    }
  ];
  const securitySolutions = [
    {
      category: "Network Security",
      solutions: [
        "Firewall Management",
        "Intrusion Detection",
        "VPN Solutions",
        "Network Monitoring"
      ]
    },
    {
      category: "Endpoint Security",
      solutions: [
        "Antivirus Protection",
        "Device Management",
        "Data Encryption",
        "Access Control"
      ]
    },
    {
      category: "Application Security",
      solutions: [
        "Code Review",
        "Vulnerability Assessment",
        "API Security",
        "Secure Development"
      ]
    },
    {
      category: "Data Protection",
      solutions: [
        "Data Encryption",
        "Backup Security",
        "Access Management",
        "Compliance Monitoring"
      ]
    }
  ];
  const benefits = [
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Multi-layered security approach covering all attack vectors"
    },
    {
      icon: Zap,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and threat detection"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified cybersecurity professionals with industry experience"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with international security standards and best practices"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Cybersecurity Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced security solutions to protect your business from evolving cyber threats
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From zero-trust architecture to threat detection and compliance management, 
              we provide comprehensive cybersecurity solutions that keep your business secure.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Security Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed for modern threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`inline-flex p-4 rounded-full mb-6 bg-gradient-to-r ${service.color}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Security Solutions Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security coverage across all aspects of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 group hover:bg-slate-800/70"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4">{solution.category}</h3>
                <ul className="space-y-2">
                  {solution.solutions.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection backed by expertise and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our cybersecurity solutions can protect your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}