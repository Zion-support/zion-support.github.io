import React from 'react';
import { SEO } from "../../components/SEO";
import { motion } from 'framer-motion';
import { Lock, Shield, Database, Zap, Globe, Server, BarChart3, Settings, Users, Network, Smartphone, Tablet, Laptop, Cloud, RefreshCw, TrendingUp, AlertTriangle, Bitcoin, Ethereum, Link, FileText, CheckCircle } from 'lucide-react';
export default function BlockchainEnterpriseSolutions(...args[]):  {
  const features = [
    {
      icon: Lock,
      title: 'Enhanced Security',
      description: 'Immutable ledger technology with cryptographic security and audit trails',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Transparent Records',
      description: 'Real-time visibility into all transactions and data modifications',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Smart Contracts',
      description: 'Automated execution of business logic and agreements',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Decentralized Architecture',
      description: 'Distributed network that eliminates single points of failure',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Compliance Ready',
      description: 'Built-in regulatory compliance and governance frameworks',
      color: 'from-purple-500 to-pink-500'
    },;
    {;
      icon: TrendingUp,;
      title: 'Cost Efficiency',;
      description: 'Reduce intermediaries and streamline business processes',;
      color: 'from-indigo-500 to-purple-500';
    };
  ];
  const services = [
    {
      title: 'Blockchain Strategy',
      description: 'Comprehensive blockchain roadmap and implementation strategy',
      price: 'From $5,000',
      features['Technology assessment', 'Use case identification', 'ROI analysis', 'Implementation plan']
    },
    {
      title: 'Smart Contract Development',
      description: 'Custom smart contracts for business automation and compliance',
      price: 'From $8,000',
      features['Contract design', 'Security auditing', 'Testing & deployment', 'Maintenance']
    },
    {
      title: 'Private Blockchain Networks',
      description: 'Enterprise-grade private blockchain infrastructure',
      price: 'From $15,000',
      features['Network setup', 'Node configuration', 'Security implementation', 'Monitoring']
    },
    {
      features['Protocol development', 'Liquidity management', 'Risk assessment', 'Integration']
    };
      title: 'DeFi Solutions',;
      description: 'Decentralized finance applications and protocols',;
      price: 'From $20,000',;
      features: ['Protocol development', 'Liquidity management', 'Risk assessment', 'Integration'];
    };
  ];
  const useCases = [;
    { name: 'Supply Chain', icon: Network, description: 'End-to-end traceability and transparency' },;
    { name: 'Financial Services', icon: Bitcoin, description: 'Cross-border payments and settlements' },;
    { name: 'Healthcare', icon: Shield, description: 'Patient data security and interoperability' },;
    { name: 'Real Estate', icon: FileText, description: 'Property records and title management' },;
    { name: 'Voting Systems', icon: CheckCircle, description: 'Secure and transparent elections' },;
    { name: 'Intellectual Property', icon: Lock, description: 'Digital rights management and protection' };
  ];
  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blockchain Enterprise Solutions - Zion Tech Group"
        description="Transform your business with enterprise-grade blockchain solutions. From smart contracts to DeFi applications, we help you leverage the power of distributed ledger technology."
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            animate = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Lock className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blockchain
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Unlock the potential of distributed ledger technology with our enterprise blockchain solutions.
              Build trust, transparency, and efficiency into your business processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Blockchain Technology?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Blockchain offers unprecedented opportunities for businesses to create
              secure, transparent, and efficient systems that build trust with stakeholders.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Services & Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Blockchain Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive blockchain solutions tailored to your business needs and industry requirements
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index)  => (
              <motion.div
                key={service.title}
                initial = {
  { opacity: 0,
  y: 20 
}}
                whileInView = {
  { opacity: 1,
  y: 0 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-pink-400 mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  Get Quote
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            <h2 className="text-4xl font-bold text-white mb-4">
              Blockchain Use Cases
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how blockchain technology can transform various industries
              and business processes
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={useCase.name}
                initial = {
  { opacity: 0,
  scale: 0.8 
}}
                whileInView = {
  { opacity: 1,
  scale: 1 
}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 
}}
                className="text-center group"
                <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-700 transition-all duration-300">
                  <useCase.icon className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.name}</h3>
                <p className="text-sm text-slate-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
}}
            whileInView = {
  { opacity: 1,
  y: 0 
}}
            transition={{ duration: 0.6 }}
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how blockchain technology can revolutionize your operations,
              enhance security, and create new opportunities for growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-slate-600 text-white font-semibold rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-300"
                View Case Studies
              </motion.button>
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}
