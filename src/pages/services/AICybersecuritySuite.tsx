import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Brain, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Globe, 
  Smartphone,
  Cloud,
  BarChart3,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AICybersecuritySuite() {
  const features = [
    {
      icon: Brain,
      title: "AI Threat Detection & Response",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time, reducing false positives by 90%"
    },
    {
      icon: Shield,
      title: "Automated Incident Handling",
      description: "Intelligent automation that handles 80% of security incidents without human intervention, ensuring 24/7 protection"
    },
    {
      icon: Lock,
      title: "Compliance Monitoring",
      description: "Automated compliance monitoring for SOC2, GDPR, HIPAA, and other regulatory frameworks with real-time reporting"
    },
    {
      icon: Eye,
      title: "Real-time Security Analytics",
      description: "Comprehensive security analytics dashboard with threat intelligence, vulnerability assessment, and risk scoring"
    },
    {
      icon: Zap,
      title: "Security Awareness Training",
      description: "AI-powered security training modules that adapt to user behavior and identify high-risk employees"
    },
    {
      icon: Cloud,
      title: "Cloud Security Monitoring",
      description: "Multi-cloud security monitoring with automated threat detection across AWS, Azure, and Google Cloud"
    }
  ];

  const benefits = [
    "Reduce security incidents by 90% through AI-powered threat detection",
    "Automate 80% of security tasks for improved efficiency",
    "Ensure regulatory compliance with automated monitoring",
    "24/7 security monitoring with instant threat response",
    "Cost-effective security operations with reduced manual overhead"
  ];

  const useCases = [
    "Enterprise security operations centers (SOCs)",
    "Compliance management and reporting",
    "Threat intelligence and analysis",
    "Security training and awareness programs",
    "Incident response automation"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$4,999",
      period: "/month",
      description: "Perfect for small to medium enterprises",
      features: [
        "AI threat detection & response",
        "Basic compliance monitoring",
        "Security awareness training",
        "Email support",
        "Up to 500 users"
      ]
    },
    {
      name: "Professional",
      price: "$8,999",
      period: "/month",
      description: "Ideal for growing organizations",
      features: [
        "Everything in Starter",
        "Advanced compliance monitoring",
        "Real-time security analytics",
        "Priority support",
        "Up to 2,000 users",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large enterprises with complex needs",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "Dedicated security team",
        "24/7 phone support",
        "Unlimited users",
        "On-premise deployment options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI Cybersecurity Suite - Zion Tech Group"
        description="Comprehensive AI-powered cybersecurity platform with real-time threat detection, automated incident response, and compliance monitoring for enterprises."
        canonical="/services/ai-cybersecurity-suite"
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Cybersecurity
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Cybersecurity Suite
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI-powered cybersecurity platform that provides real-time threat detection, 
                automated incident response, and compliance monitoring for enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  Request Custom Quote
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-red-400 mb-2">90%</div>
              <div className="text-gray-400">Reduction in Security Incidents</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-400">Tasks Automated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Security Monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Advanced AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI Cybersecurity Suite combines cutting-edge machine learning with enterprise-grade security 
              to provide comprehensive protection for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our AI Cybersecurity Suite?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your security operations with intelligent automation and real-time threat protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Use Cases</h3>
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your organization's security needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-red-500 scale-105' 
                    : 'border-slate-700'
                }`}
              >
                {plan.name === 'Professional' && (
                  <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.name === 'Professional'
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Enterprise-Grade Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with cutting-edge technologies and industry-leading security standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technology Stack</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Backend Framework</span>
                  <span className="text-white font-medium">Python, Node.js</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">AI/ML Framework</span>
                  <span className="text-white font-medium">TensorFlow, PyTorch</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Database</span>
                  <span className="text-white font-medium">PostgreSQL, Elasticsearch</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">API Endpoints</span>
                  <span className="text-white font-medium">200+ RESTful APIs</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Security & Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Uptime SLA</span>
                  <span className="text-white font-medium">99.99%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Security Standards</span>
                  <span className="text-white font-medium">SOC 2 Type II, ISO 27001</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Data Encryption</span>
                  <span className="text-white font-medium">End-to-end AES-256</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-gray-300">Compliance</span>
                  <span className="text-white font-medium">GDPR, HIPAA, FedRAMP</span>
                </div>
              </div>
            </div>
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Security Operations?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of enterprises that trust our AI Cybersecurity Suite to protect their digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Get Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-red-400 mb-4" />
                <h4 className="font-semibold mb-2">Phone</h4>
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-semibold mb-2">Email</h4>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Visit our website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}