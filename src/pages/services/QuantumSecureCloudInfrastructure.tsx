import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Zap, Globe, Lock, Server, Cpu, Database, Network, Cloud } from 'lucide-react';

const QuantumSecureCloudInfrastructure: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum-Resistant Encryption",
      description: "Future-proof security with quantum-resistant cryptography algorithms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced AI systems that automatically detect and respond to security threats"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Trust Architecture",
      description: "Comprehensive security model that verifies every access request"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Multi-Cloud Deployment",
      description: "Deploy across AWS, Azure, Google Cloud with unified management"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Automated Compliance",
      description: "Built-in compliance monitoring for SOC2, HIPAA, GDPR, and more"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Global CDN Integration",
      description: "Worldwide content delivery with edge computing capabilities"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      features: [
        "Basic quantum security",
        "100GB storage",
        "Standard support",
        "Basic monitoring",
        "SSL certificates",
        "DDoS protection"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      features: [
        "Full quantum security suite",
        "1TB storage",
        "Priority support",
        "Advanced monitoring",
        "AI threat detection",
        "Compliance automation",
        "Multi-cloud deployment"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      features: [
        "Custom quantum solutions",
        "Unlimited storage",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "Advanced analytics",
        "Custom security protocols"
      ],
      popular: false
    }
  ];

  const securityFeatures = [
    "Quantum-resistant encryption algorithms",
    "Real-time threat intelligence",
    "Automated incident response",
    "Advanced firewall protection",
    "Intrusion detection systems",
    "Security information management",
    "Vulnerability assessment",
    "Penetration testing"
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "HIPAA",
    "GDPR",
    "PCI DSS",
    "FedRAMP",
    "NIST Cybersecurity Framework",
    "CIS Controls"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Quantum-Secure Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Future-proof cloud security with quantum-resistant encryption, AI-powered threat detection, 
              and comprehensive compliance automation for enterprise-grade protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum-secure cloud infrastructure combines cutting-edge security with unmatched performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Security Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive security features designed to protect your most critical assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-lg font-semibold">{feature}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built-in compliance monitoring for the most stringent industry requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-all duration-300">
                  <div className="text-3xl mb-3">✅</div>
                  <p className="text-sm text-gray-300">{standard}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Cloud Infrastructure Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Competitive pricing for enterprise-grade quantum-secure cloud infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  tier.popular 
                    ? 'border-green-500 ring-2 ring-green-500/20' 
                    : 'border-gray-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Competitive Advantage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how our quantum-secure infrastructure compares to major cloud providers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-400">AWS</h3>
              <p className="text-gray-400 mb-4">$200-2000/month</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Standard encryption</li>
                <li>• Basic security</li>
                <li>• Manual compliance</li>
                <li>• Limited AI features</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-green-500 ring-2 ring-green-500/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Zion Tech Group</h3>
              <p className="text-gray-400 mb-4">$2,499/month</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Quantum-resistant encryption</li>
                <li>• AI-powered security</li>
                <li>• Automated compliance</li>
                <li>• Advanced AI features</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Azure</h3>
              <p className="text-gray-400 mb-4">$150-1800/month</p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Standard encryption</li>
                <li>• Basic security</li>
                <li>• Manual compliance</li>
                <li>• Limited AI features</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Secure Your Future Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join forward-thinking organizations that trust our quantum-secure infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <p className="font-semibold mb-2">Phone</p>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Email</p>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Address</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumSecureCloudInfrastructure;