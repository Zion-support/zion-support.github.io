import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  Users, 
  Clock, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Cpu,
  Cloud,
  Activity,
  Sparkles,
  Search,
  Zap,
  Globe,
  Building,
  DollarSign,
  BarChart3,
  TrendingUp,
  Network,
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  ShieldCheck,
  Globe2,
  Server,
  Database,
  Smartphone,
  Code,
  FileText,
  AlertCircle,
  CheckSquare
} from 'lucide-react';

const SecurityHeadersCSP = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Headers Implementation',
      description: 'Comprehensive implementation of all essential security headers for web applications'
    },
    {
      icon: Lock,
      title: 'Content Security Policy',
      description: 'Advanced CSP rules to prevent XSS, injection attacks, and data exfiltration'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of security headers and policy violations'
    },
    {
      icon: Code,
      title: 'Automated Testing',
      description: 'Automated testing and validation of security headers across all endpoints'
    },
    {
      icon: FileText,
      title: 'Compliance Reporting',
      description: 'Detailed compliance reports for security standards and regulations'
    },
    {
      icon: Monitor,
      title: 'Threat Detection',
      description: 'Advanced threat detection and automated response for policy violations'
    }
  ];

  const benefits = [
    'Prevent 99% of XSS and injection attacks',
    'Achieve A+ security rating on security scanners',
    'Comply with OWASP security guidelines',
    'Reduce security incidents by 90%',
    'Improve website security posture',
    'Enhance customer trust and confidence'
  ];

  const securityHeaders = [
    {
      header: 'Content-Security-Policy',
      description: 'Prevents XSS attacks by controlling resource loading',
      example: "default-src 'self'; script-src 'self' 'unsafe-inline'"
    },
    {
      header: 'X-Frame-Options',
      description: 'Prevents clickjacking attacks via iframe embedding',
      example: 'DENY or SAMEORIGIN'
    },
    {
      header: 'X-Content-Type-Options',
      description: 'Prevents MIME type sniffing attacks',
      example: 'nosniff'
    },
    {
      header: 'Strict-Transport-Security',
      description: 'Enforces HTTPS connections and prevents downgrade attacks',
      example: 'max-age=31536000; includeSubDomains'
    },
    {
      header: 'X-XSS-Protection',
      description: 'Enables browser XSS filtering (legacy support)',
      example: '1; mode=block'
    },
    {
      header: 'Referrer-Policy',
      description: 'Controls referrer information in HTTP requests',
      example: 'strict-origin-when-cross-origin'
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Protect customer data and payment information from attacks'
    },
    {
      industry: 'Banking',
      description: 'Secure financial transactions and customer accounts'
    },
    {
      industry: 'Healthcare',
      description: 'Protect patient data and medical information'
    },
    {
      industry: 'Government',
      description: 'Secure citizen services and sensitive information'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Web Security Hardening
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Headers & CSP</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Fortify your web applications with comprehensive security headers and 
              Content Security Policy implementation that prevents modern web attacks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Web Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides all the tools you need to implement and maintain 
              enterprise-grade web security headers and policies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Headers Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Essential Security Headers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Implement industry-standard security headers that protect your applications 
              from common web vulnerabilities and attacks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityHeaders.map((header, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 font-mono">{header.header}</h3>
                    <p className="text-gray-300 mb-3">{header.description}</p>
                    <div className="bg-slate-900/50 border border-slate-600/50 rounded-lg p-3">
                      <code className="text-green-400 text-sm">{header.example}</code>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Web Security
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in security posture, compliance, and threat prevention.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our security headers solution adapts to various industries, providing 
              tailored protection for your specific security and compliance needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Secure Your Web Applications Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide that use our security headers solution to 
              protect their web applications and achieve compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityHeadersCSP;