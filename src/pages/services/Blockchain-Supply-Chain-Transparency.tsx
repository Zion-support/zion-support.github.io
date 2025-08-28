import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Shield, 
  Eye, 
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
  ExternalLink,
  BarChart3,
  Zap,
  Database
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function BlockchainSupplyChainTransparency() {
  const features = [
    "End-to-end supply chain traceability with blockchain",
    "Real-time product journey tracking from source to consumer",
    "Smart contracts for automated compliance verification",
    "Immutable audit trail for regulatory compliance",
    "Supplier performance scoring and verification",
    "Sustainability and ESG metrics tracking",
    "Counterfeit detection and prevention",
    "Integration with IoT sensors and RFID systems"
  ];

  const benefits = [
    "Increase supply chain transparency by 100%",
    "Reduce compliance costs by 40-60%",
    "Improve supplier accountability and performance",
    "Enable real-time risk assessment and mitigation",
    "Build consumer trust and brand loyalty",
    "Meet regulatory requirements automatically"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$1,499",
      period: "/month",
      features: [
        "Up to 1,000 products tracked",
        "Basic blockchain traceability",
        "Standard compliance reporting",
        "Email support",
        "Basic analytics dashboard"
      ]
    },
    {
      plan: "Professional",
      price: "$3,999",
      period: "/month",
      features: [
        "Up to 10,000 products tracked",
        "Advanced traceability features",
        "Smart contract automation",
        "Priority support",
        "Advanced analytics",
        "API access"
      ]
    },
    {
      plan: "Enterprise",
      price: "$8,999",
      period: "/month",
      features: [
        "Unlimited products tracked",
        "Custom blockchain solutions",
        "Dedicated support team",
        "Full transparency suite",
        "White-label solution",
        "Custom integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blockchain Supply Chain Transparency Platform - Zion Tech Group"
        description="Revolutionary blockchain-based supply chain transparency platform with end-to-end traceability, smart contracts, and automated compliance. Increase transparency by 100% and reduce compliance costs by 40-60%."
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
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full">
                <Link className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Blockchain Supply Chain Transparency Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your supply chain with blockchain-powered transparency, end-to-end traceability, 
              and automated compliance. Build trust with consumers and meet regulatory requirements seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/blockchain-supply-chain-transparency"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200"
              >
                Build Transparency
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-200"
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
              Revolutionary Supply Chain Transparency
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain-powered platform combines distributed ledger technology, smart contracts, 
              and IoT integration to deliver unprecedented supply chain visibility and trust.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg w-fit mb-4">
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
              Transform Your Supply Chain Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented transparency and trust with our blockchain-powered supply chain platform.
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
              Choose the perfect plan for your supply chain transparency needs. All plans include our 
              industry-leading blockchain technology and compliance features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border-2 ${
                  index === 1 ? 'border-yellow-500 scale-105' : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
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
                  href="https://ziontechgroup.com/blockchain-supply-chain-transparency"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200"
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
              Our blockchain-powered supply chain transparency platform delivers exceptional value and competitive advantages.
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
              <Eye className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-300">Transparency increase</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
            >
              <DollarSign className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">40-60%</h3>
              <p className="text-gray-300">Compliance cost reduction</p>
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
              <p className="text-gray-300">Data integrity</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700"
            >
              <Database className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Real-time monitoring</p>
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
              Ready to Build Supply Chain Transparency?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have already transformed their supply chain operations 
              with our blockchain-powered transparency platform.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/blockchain-supply-chain-transparency"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200"
              >
                Start Free Trial
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-200"
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