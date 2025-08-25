import React from 'react';
import { motion } from 'framer-motion';
import { 
  CubeIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon,
  BoltIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LockClosedIcon,
  ServerIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const BlockchainEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      icon: CubeIcon,
      title: "Enterprise Blockchain Infrastructure",
      description: "Scalable, secure blockchain networks designed specifically for enterprise needs with high throughput and low latency.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Smart Contract Automation",
      description: "Intelligent smart contracts that automatically execute business logic, reducing manual intervention and errors.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: GlobeAltIcon,
      title: "Multi-Chain Support",
      description: "Seamless integration across multiple blockchain networks for maximum flexibility and interoperability.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: CogIcon,
      title: "AI-Powered Security",
      description: "Advanced AI algorithms that continuously monitor and protect your blockchain infrastructure from threats.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const benefits = [
    {
      metric: "100%",
      description: "Transaction transparency",
      icon: EyeIcon
    },
    {
      metric: "45%",
      description: "Reduction in fraud",
      icon: ShieldCheckIcon
    },
    {
      metric: "60%",
      description: "Faster processing",
      icon: BoltIcon
    },
    {
      metric: "90%",
      description: "Cost reduction",
      icon: CurrencyDollarIcon
    }
  ];

  const useCases = [
    {
      industry: "Supply Chain",
      description: "End-to-end visibility and traceability across complex supply chains with automated compliance and quality control",
      benefits: ["Real-time tracking", "Automated compliance", "Quality assurance", "Cost optimization"]
    },
    {
      industry: "Financial Services",
      description: "Secure, transparent financial transactions with automated settlement and regulatory compliance",
      benefits: ["Instant settlement", "Regulatory compliance", "Fraud prevention", "Cost reduction"]
    },
    {
      industry: "Healthcare",
      description: "Secure patient data management with interoperable health records and automated consent management",
      benefits: ["Data security", "Interoperability", "Patient privacy", "Regulatory compliance"]
    },
    {
      industry: "Real Estate",
      description: "Streamlined property transactions with automated title verification and smart contract execution",
      benefits: ["Faster transactions", "Reduced fraud", "Automated compliance", "Cost savings"]
    }
  ];

  const technologies = [
    {
      name: "Hyperledger Fabric",
      description: "Enterprise-grade permissioned blockchain framework",
      icon: CubeIcon
    },
    {
      name: "Ethereum Enterprise",
      description: "Scalable blockchain platform for business applications",
      icon: ServerIcon
    },
    {
      name: "Corda",
      description: "Distributed ledger technology for financial services",
      icon: LockClosedIcon
    },
    {
      name: "Custom Solutions",
      description: "Tailored blockchain architectures for specific needs",
      icon: CogIcon
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/50 rounded-full text-emerald-400 text-sm font-medium mb-6">
              <CubeIcon className="w-4 h-4 mr-2" />
              Enterprise Blockchain
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent mb-6">
              Blockchain Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with secure, transparent, and efficient blockchain solutions designed for enterprise-scale operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-full font-semibold transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Enterprise-Grade Features
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Measurable Business Impact
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Industry Applications
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Supported Technologies
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Implementation Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Evaluate your current processes and identify blockchain opportunities"
              },
              {
                step: "02",
                title: "Design",
                description: "Architect the blockchain solution tailored to your business needs"
              },
              {
                step: "03",
                title: "Development",
                description: "Build and test the blockchain infrastructure and smart contracts"
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launch and integrate with existing systems, provide training and support"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that have revolutionized their operations with blockchain technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center">
                Start Your Blockchain Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 rounded-full font-semibold transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlockchainEnterpriseSolutions;