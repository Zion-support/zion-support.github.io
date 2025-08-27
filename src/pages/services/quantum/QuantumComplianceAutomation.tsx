import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Network,
  CheckCircle,
  BarChart3,
  Globe,
  Rocket,
  Lock,
  Eye
} from 'lucide-react';
import { SEO } from '../../../components/SEO';

export default function QuantumComplianceAutomation() {
  const features = [
    {
      icon: Zap,
      title: "Quantum Speed",
      description: "Leverage quantum computing power for unprecedented processing speed."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum cryptographic principles."
    },
    {
      icon: Cpu,
      title: "Quantum Processing",
      description: "Advanced quantum algorithms for complex computational tasks."
    },
    {
      icon: Network,
      title: "Quantum Networks",
      description: "Next-generation networking infrastructure powered by quantum technology."
    }
  ];

  const benefits = [
    "Unbreakable encryption and security",
    "Exponential processing speed improvements",
    "Future-proof technology infrastructure",
    "Competitive advantage in the market",
    "Compliance with quantum security standards"
  ];

  return (
    <>
      <SEO 
        title="Quantum Compliance Automation | Zion Tech Group"
        description="Automated compliance using quantum computing power. Leverage cutting-edge quantum technology for unprecedented security and performance."
        keywords="quantum computing, quantum security, quantum compliance automation, quantum technology, encryption, cybersecurity"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {title}
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Automated compliance using quantum computing power. Our quantum solutions represent the cutting edge of 
                technology, providing security and performance that classical systems cannot match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Explore Quantum Solutions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Technology Features
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our Quantum Compliance Automation platform leverages the power of quantum mechanics 
                to deliver unprecedented capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Quantum Advantages
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Experience the power of quantum technology with our Quantum Compliance Automation platform.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-2xl p-12 text-center border border-blue-500/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for the Quantum Future?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the quantum revolution with our Quantum Compliance Automation platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Start Quantum Journey
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
