import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Lock, 
  Target, 
  Zap, 
  BarChart3, 
  Clock, 
  Award, 
  Star,
  Globe,
  Cpu,
  Database,
  CheckCircle,
  Eye,
  Users,
  AlertTriangle,
  TrendingUp,
  Search,
  Download,
  Upload,
  Calendar,
  Server,
  FileText
} from 'lucide-react';

export default function SecurityHeadersCSP() {
  const features = [
    {
      icon: Shield,
      title: "Security Headers Implementation",
      description: "Comprehensive implementation of OWASP-recommended security headers."
    },
    {
      icon: Lock,
      title: "Content Security Policy",
      description: "Advanced CSP configuration and monitoring for XSS protection."
    },
    {
      icon: Target,
      title: "Threat Detection",
      description: "Real-time monitoring and alerting for security violations."
    },
    {
      icon: Zap,
      title: "Automated Security",
      description: "Intelligent automation of security header management and updates."
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
      description: "Comprehensive insights into security posture and threat landscape."
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Server-level security hardening and configuration optimization."
    }
  ];

  const benefits = [
    "Reduce security vulnerabilities by 80-90% with proper headers",
    "Improve security score by 40-60% on security testing platforms",
    "Minimize XSS and injection attacks by 95%",
    "Enhance compliance with security standards and regulations",
    "Improve website security posture and trust indicators",
    "Reduce security incident response time by 70%"
  ];

  const securityHeaders = [
    {
      header: "Content Security Policy (CSP)",
      description: "Prevent XSS attacks by controlling resource loading",
      icon: Shield
    },
    {
      header: "X-Frame-Options",
      description: "Protect against clickjacking attacks",
      icon: Lock
    },
    {
      header: "X-Content-Type-Options",
      description: "Prevent MIME type sniffing attacks",
      icon: FileText
    },
    {
      header: "Strict-Transport-Security (HSTS)",
      description: "Enforce HTTPS connections and prevent downgrade attacks",
      icon: Server
    },
    {
      header: "X-XSS-Protection",
      description: "Enable browser XSS filtering",
      icon: AlertTriangle
    },
    {
      header: "Referrer-Policy",
      description: "Control referrer information in HTTP requests",
      icon: Eye
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Secure payment processing, customer data protection, and transaction security"
    },
    {
      industry: "Financial Services",
      description: "Banking security, transaction protection, and regulatory compliance"
    },
    {
      industry: "Healthcare",
      description: "Patient data security, HIPAA compliance, and medical information protection"
    },
    {
      industry: "Technology & SaaS",
      description: "Application security, user data protection, and service security"
    },
    {
      industry: "Government",
      description: "Public data security, compliance requirements, and citizen information protection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Security Headers CSP - Zion Tech Group"
        description="Harden your web security with AI-powered security headers, content security policy, and comprehensive web protection solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-400/30 mb-6">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-300 font-medium">Security Headers CSP</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Harden Your Web Security with
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                {" "}AI-Powered Protection
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your web security posture with intelligent security headers, advanced 
              content security policies, and AI-powered threat detection and prevention.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Start Security Audit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-red-400/30 text-red-300 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered security platform combines cutting-edge artificial intelligence 
              with proven security methodologies to deliver comprehensive web protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/30 hover:border-red-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Measurable Security Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See real results with our AI-powered security solutions that deliver quantifiable 
              improvements across all aspects of your web security posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 rounded-xl border border-red-400/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-300">Industry-leading AI security algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enterprise-grade security & compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Global security expertise and standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">24/7 security monitoring & support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-red-400" />
                  <span className="text-gray-300">Proven security success track record</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Headers Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Security Headers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our security platform implements and manages all OWASP-recommended security 
              headers to provide comprehensive web application protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityHeaders.map((header, index) => (
              <motion.div
                key={header.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-red-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                    <header.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{header.header}</h3>
                </div>
                <p className="text-gray-300 text-sm">{header.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered security solutions are designed to work across industries, providing 
              tailored protection strategies for your specific security needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/20 hover:border-red-400/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 p-12 rounded-2xl border border-red-400/20 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Harden Your Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already transformed their web security 
              with our AI-powered protection solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-red-400/30 text-red-300 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}