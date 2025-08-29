import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Lock,
  Eye,
  AlertTriangle,
  Network,
  Server,
  Smartphone,
  Monitor,
  BarChart3,
  MessageCircle,
  Clock,
  Target,
  Sparkles,
  FileText,
  Globe,
  Cpu,
  Database,
  Key,
  Fingerprint
} from 'lucide-react';

const AICybersecurity: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and neutralize threats in real-time",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "Behavioral Analysis",
      description: "AI-driven user behavior monitoring to detect anomalous activities and potential breaches",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant threat response and mitigation with intelligent automation systems",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Comprehensive security framework with continuous verification and access control",
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    "99.9% threat detection accuracy with AI-powered analysis",
    "Real-time threat response in under 100 milliseconds",
    "Reduced false positives by up to 90%",
    "24/7 automated security monitoring and protection",
    "Cost savings of 40-60% on security operations",
    "Compliance with industry security standards"
  ];

  const securityServices = [
    {
      title: "Network Security",
      description: "Advanced firewall protection, intrusion detection, and network monitoring",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive device security for computers, mobile devices, and IoT",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Security",
      description: "Multi-cloud security with automated threat detection and response",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Protection",
      description: "Encryption, access control, and data loss prevention solutions",
      icon: Database,
      color: "from-orange-500 to-red-500"
    }
  ];

  const threatTypes = [
    {
      title: "Malware & Ransomware",
      description: "AI-powered detection and prevention of malicious software attacks",
      icon: AlertTriangle
    },
    {
      title: "Phishing Attacks",
      description: "Advanced email security with intelligent threat identification",
      icon: MessageCircle
    },
    {
      title: "DDoS Protection",
      description: "Real-time traffic analysis and automated attack mitigation",
      icon: Network
    },
    {
      title: "Insider Threats",
      description: "Behavioral analysis to detect and prevent internal security risks",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity solutions for modern enterprises. Advanced threat detection, automated response, and comprehensive protection."
        keywords="AI cybersecurity, cybersecurity, threat detection, AI security, network security, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your digital assets with next-generation AI-powered cybersecurity. 
              Advanced threat detection, automated response, and comprehensive protection for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                <Shield className="h-5 w-5 mr-2" />
                Security Assessment
              </button>
              <button className="btn-futuristic-outline">
                <FileText className="h-5 w-5 mr-2" />
                Download Security Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge machine learning with 
              industry expertise to deliver unparalleled protection against evolving threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From network protection to endpoint security, our AI-powered platform 
              provides complete coverage for all your cybersecurity needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Cybersecurity?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience superior protection with AI-powered security that adapts 
              to emerging threats and provides proactive defense.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Protection Against All Threats
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform continuously learns and adapts to protect against 
              the latest cybersecurity threats and attack vectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 border border-slate-500 hover:border-slate-400 transition-all duration-300 h-full">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 mb-4">
                    <threat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {threat.title}
                  </h3>
                  <p className="text-gray-300">
                    {threat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join leading enterprises that trust our AI-powered cybersecurity 
              solutions to protect their critical infrastructure and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-white text-green-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                Security Consultation
              </button>
              <button className="btn-futuristic-outline border-white text-white hover:bg-white hover:text-green-600">
                <Clock className="h-5 w-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurity;