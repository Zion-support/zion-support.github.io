import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle,
  Globe, 
  Zap, 
  Cpu, 
  Database, 
  Cloud, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Microscope,
  Code,
  BarChart3,
  Lightbulb,
  Layers,
  Activity,
  Wifi,
  CpuIcon,
  Network,
  Key,
  FileText,
  Monitor
} from 'lucide-react';

const CybersecuritySuite2025: React.FC = () => {
  const [activeThreat, setActiveThreat] = useState(0);

  const securitySolutions = [
    {
      title: 'Zero Trust Architecture',
      description: 'Comprehensive security framework that assumes no trust and verifies everything',
      icon: Shield,
      status: 'Production Ready',
      impact: '99.9% Security',
      color: 'from-blue-500 to-cyan-500',
      features: ['Identity Verification', 'Network Segmentation', 'Continuous Monitoring', 'Access Control']
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to threats in real-time',
      icon: Brain,
      status: 'Live Monitoring',
      impact: '95% Faster Detection',
      color: 'from-purple-500 to-pink-500',
      features: ['Behavioral Analysis', 'Anomaly Detection', 'Predictive Analytics', 'Automated Response']
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum mechanics for ultimate security',
      icon: Lock,
      status: 'Beta Testing',
      impact: 'Unbreakable Security',
      color: 'from-green-500 to-emerald-500',
      features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Numbers', 'Secure Communications']
    },
    {
      title: 'Security Operations Center',
      description: '24/7 monitoring and incident response with expert security analysts',
      icon: Monitor,
      status: '24/7 Active',
      impact: '99.9% Uptime',
      color: 'from-orange-500 to-red-500',
      features: ['24/7 Monitoring', 'Incident Response', 'Threat Hunting', 'Security Analytics']
    }
  ];

  const threatIntelligence = [
    {
      category: 'Advanced Persistent Threats (APT)',
      icon: Eye,
      description: 'Sophisticated, long-term cyber attacks targeting specific organizations',
      detection: 'AI Behavioral Analysis',
      response: 'Automated Isolation & Investigation'
    },
    {
      category: 'Ransomware Attacks',
      icon: Lock,
      description: 'Malware that encrypts data and demands payment for decryption',
      detection: 'File Behavior Monitoring',
      response: 'Immediate Backup & Recovery'
    },
    {
      category: 'Insider Threats',
      icon: Users,
      description: 'Security risks from within the organization',
      detection: 'User Activity Analytics',
      response: 'Access Control & Monitoring'
    },
    {
      category: 'Supply Chain Attacks',
      icon: Network,
      description: 'Attacks through compromised third-party vendors or software',
      detection: 'Vendor Risk Assessment',
      response: 'Supply Chain Monitoring'
    }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      icon: Award,
      description: 'Service Organization Control compliance for security and availability',
      coverage: '99.9%',
      status: 'Certified'
    },
    {
      name: 'ISO 27001',
      icon: Shield,
      description: 'International standard for information security management',
      coverage: '100%',
      status: 'Certified'
    },
    {
      name: 'GDPR Compliance',
      icon: Globe,
      description: 'General Data Protection Regulation compliance',
      coverage: '100%',
      status: 'Certified'
    },
    {
      name: 'HIPAA',
      icon: FileText,
      description: 'Health Insurance Portability and Accountability Act compliance',
      coverage: '100%',
      status: 'Certified'
    }
  ];

  const securityStats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: Shield },
    { number: '24/7', label: 'Security Monitoring', icon: Activity },
    { number: '15min', label: 'Average Response Time', icon: Zap },
    { number: '0', label: 'Successful Breaches', icon: CheckCircle }
  ];

  const services = [
    {
      name: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Review'],
      price: 'Starting at $5,000',
      duration: '2-4 weeks'
    },
    {
      name: 'Managed Security Services',
      description: '24/7 security monitoring and incident response',
      features: ['24/7 SOC', 'Threat Detection', 'Incident Response', 'Security Analytics'],
      price: 'Starting at $15,000/month',
      duration: 'Ongoing'
    },
    {
      name: 'Security Implementation',
      description: 'Deploy and configure enterprise-grade security solutions',
      features: ['Zero Trust Setup', 'SIEM Deployment', 'Firewall Configuration', 'Access Control'],
      price: 'Starting at $25,000',
      duration: '4-8 weeks'
    },
    {
      name: 'Security Training',
      description: 'Comprehensive security awareness and training programs',
      features: ['Phishing Simulation', 'Security Awareness', 'Incident Response Training', 'Compliance Training'],
      price: 'Starting at $2,500',
      duration: '1-2 weeks'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-purple-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(35)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Zion Cybersecurity Suite</h1>
              <p className="text-sm text-red-300">Enterprise Security Excellence</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-red-400 transition-colors">Solutions</a>
            <a href="#threats" className="hover:text-red-400 transition-colors">Threat Intelligence</a>
            <a href="#compliance" className="hover:text-red-400 transition-colors">Compliance</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Security Assessment
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full border border-red-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-red-400" />
              <span className="text-red-300">Enterprise-Grade Security</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Secure Your Future
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Protect your organization with the most advanced cybersecurity solutions powered by AI, 
            quantum cryptography, and zero-trust architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Security Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-red-400 rounded-lg hover:bg-red-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Risk Assessment
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {securityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Security Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions for the modern enterprise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securitySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full text-xs font-semibold">
                    {solution.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-red-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center space-x-2 text-sm mb-4">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">{solution.impact}</span>
                </div>
                <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section id="threats" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Threat <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced threat detection and response capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {threatIntelligence.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <threat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{threat.category}</h3>
                </div>
                <p className="text-gray-300 mb-4">{threat.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Detection:</span>
                    <span className="text-white text-sm font-semibold">{threat.detection}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Response:</span>
                    <span className="text-white text-sm font-semibold">{threat.response}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section id="compliance" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Frameworks</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements with our certified security solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <framework.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{framework.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{framework.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Coverage:</span>
                    <span className="text-white text-sm font-semibold">{framework.coverage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Status:</span>
                    <span className="text-green-400 text-sm font-semibold">{framework.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security services tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-orange-400">{service.price}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Included Services:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your Organization Today
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Don't wait for a breach. Protect your organization with enterprise-grade cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Get Security Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-400 rounded-lg hover:bg-red-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Cybersecurity Suite</h3>
                <p className="text-sm text-gray-400">Enterprise Security Excellence</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Cybersecurity Suite. All rights reserved.</p>
              <p className="text-sm text-gray-500">Protecting your digital future.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CybersecuritySuite2025;