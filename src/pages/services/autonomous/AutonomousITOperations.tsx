import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Shield, 
  Zap, 
  Network,
  CheckCircle,
  BarChart3,
  Globe,
  Rocket,
  Settings,
  Monitor
} from 'lucide-react';
import { SEO } from '../../../components/SEO';

export default function AutonomousITOperations() {
  const features = [
    {
      icon: Cpu,
      title: "Self-Healing Systems",
      description: "AI-powered systems that automatically detect and resolve IT issues before they impact users."
    },
    {
      icon: Monitor,
      title: "Intelligent Monitoring",
      description: "Advanced monitoring that predicts problems and optimizes performance in real-time."
    },
    {
      icon: Settings,
      title: "Automated Configuration",
      description: "Smart configuration management that adapts to changing business requirements."
    },
    {
      icon: Network,
      title: "Network Optimization",
      description: "Autonomous network management that ensures optimal performance and security."
    }
  ];

  const benefits = [
    "Reduce IT downtime by up to 99.9%",
    "Cut operational costs by 60%",
    "Improve system performance by 40%",
    "Enable 24/7 autonomous operations",
    "Scale IT infrastructure without proportional headcount increase"
  ];

  const useCases = [
    {
      title: "Data Centers",
      description: "Fully autonomous data center operations with predictive maintenance and optimization"
    },
    {
      title: "Cloud Infrastructure",
      description: "Self-managing cloud environments that scale automatically based on demand"
    },
    {
      title: "Network Operations",
      description: "Intelligent network management with automated troubleshooting and optimization"
    },
    {
      title: "Security Operations",
      description: "Autonomous threat detection and response systems that protect your infrastructure"
    }
  ];

  return (
    <>
      <SEO 
        title="Autonomous IT Operations | Zion Tech Group"
        description="Transform your IT operations with autonomous systems that self-manage, self-heal, and self-optimize. Reduce downtime and costs while improving performance."
        keywords="autonomous IT, self-healing systems, IT automation, intelligent monitoring, network optimization, data center automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-red-900/20 to-pink-900/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Autonomous
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  {" "}IT Operations
                </span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
                Transform your IT infrastructure with autonomous systems that self-manage, 
                self-heal, and self-optimize. Reduce downtime, cut costs, and improve 
                performance with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Explore Autonomous IT
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
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
                Autonomous IT Features
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our autonomous IT platform combines artificial intelligence with advanced 
                automation to deliver unprecedented operational efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
                Operational Benefits
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                See real results with our autonomous IT operations platform.
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
                  <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                  <p className="text-zinc-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-zinc-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Infrastructure Applications
              </h2>
              <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
                Our autonomous IT platform works across all types of infrastructure 
                and operational environments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {useCase.description}
                  </p>
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
              className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-2xl p-12 text-center border border-orange-500/20"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready for Autonomous IT?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
                Join the future of IT operations with our autonomous platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-zinc-400 text-zinc-300 rounded-lg font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
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