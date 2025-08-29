import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Shield, 
  Scale, 
  Zap, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Users,
  Globe,
  Lock,
  Brain,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIPoweredLegalDocumentGenerator() {
  const features = [
    "AI-powered contract generation with legal compliance",
    "Real-time legal document templates for 50+ jurisdictions",
    "Automated risk assessment and legal advice",
    "Integration with legal databases and case law",
    "Multi-language support for international contracts",
    "Blockchain-based document verification and signing",
    "Legal compliance monitoring and updates",
    "24/7 legal document assistance"
  ];

  const benefits = [
    "Reduce legal document creation time by 80%",
    "Ensure 99.9% legal compliance accuracy",
    "Save up to $50,000 annually on legal fees",
    "Instant access to 10,000+ legal templates",
    "Real-time legal updates and compliance alerts",
    "Multi-jurisdiction legal support"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299",
      period: "/month",
      features: [
        "Up to 50 documents/month",
        "Basic legal templates",
        "Email support",
        "Standard compliance checks"
      ]
    },
    {
      plan: "Professional",
      price: "$599",
      period: "/month",
      features: [
        "Up to 200 documents/month",
        "Advanced legal templates",
        "Priority support",
        "Advanced compliance monitoring",
        "Legal database access"
      ]
    },
    {
      plan: "Enterprise",
      price: "$1,299",
      period: "/month",
      features: [
        "Unlimited documents",
        "Custom legal templates",
        "Dedicated legal support",
        "Full compliance suite",
        "API access",
        "White-label solution"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Legal Document Generator - Zion Tech Group"
        description="Revolutionary AI-powered legal document generation platform with real-time compliance monitoring, multi-jurisdiction support, and automated legal advice. Save 80% on legal document creation time."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Legal Document Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform legal document creation with AI-powered automation, real-time compliance monitoring, 
              and multi-jurisdiction support. Generate legally compliant documents in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/ai-legal-document-generator"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Legal Document Generation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with legal expertise to deliver 
              unprecedented efficiency and accuracy in legal document creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Legal Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and cost savings with our AI-powered legal document platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your legal document generation needs. All plans include our 
              industry-leading AI technology and compliance monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border-2 ${
                  index === 1 ? 'border-blue-500 scale-105' : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/ai-legal-document-generator"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered legal document generator delivers exceptional value and competitive advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
            >
              <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">$50K+</h3>
              <p className="text-gray-300">Annual savings on legal fees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
            >
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">80%</h3>
              <p className="text-gray-300">Faster document creation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
            >
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-300">Legal compliance accuracy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
            >
              <Globe className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-300">Jurisdictions supported</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of legal professionals who have already revolutionized their document 
              creation process with our AI-powered platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/ai-legal-document-generator"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
              >
                Start Free Trial
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}