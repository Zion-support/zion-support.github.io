import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import {
  Cpu,
  Zap,
  Target,
  BarChart3,
  Clock,
  Award,
  Star,
  Globe,
  Database,
  CheckCircle,
  Eye,
  Users,
  FileText,
  Shield,
  Search,
  Filter,
  Download,
  Share2,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  ArrowUpRight,
  Building,
  ShoppingCart,
  DollarSign,
  Heart,
  GraduationCap,
  Home,
  Atom,
  Brain,
  Network,
  CircuitBoard,
  Microchip,
  Server,
  Cloud,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  AlertTriangle,
  CheckSquare,
  Smartphone,
  Monitor,
  Laptop,
  Tablet
} from 'lucide-react';

export default function AIQuantumComputingPlatform() {
  const features = [
    {
      icon: Cpu,
      title: "Quantum Processing Power",
      description: "Leverage quantum computing's exponential processing power for complex AI algorithms and data analysis."
    },
    {
      icon: Brain,
      title: "AI-Quantum Hybrid Models",
      description: "Advanced hybrid models that combine classical AI with quantum computing for unprecedented performance."
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Achieve quantum speedup for specific computational problems, reducing processing time from years to minutes."
    },
    {
      icon: Target,
      title: "Precision Optimization",
      description: "Quantum algorithms for precise optimization of complex systems and large-scale problems."
    },
    {
      icon: BarChart3,
      title: "Quantum Machine Learning",
      description: "Quantum-enhanced machine learning models that outperform classical approaches in specific domains."
    },
    {
      icon: Eye,
      title: "Quantum Cryptography",
      description: "Unbreakable encryption using quantum key distribution and quantum-resistant algorithms."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Exponential Speed",
      description: "Solve complex problems in minutes that would take classical computers years to process."
    },
    {
      icon: Award,
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with quantum computing capabilities that few organizations possess."
    },
    {
      icon: Star,
      title: "Future-Proof Technology",
      description: "Invest in the future of computing with quantum technology that will revolutionize industries."
    },
    {
      icon: Globe,
      title: "Global Innovation",
      description: "Access cutting-edge quantum computing resources through our global network of quantum partners."
    },
    {
      icon: Database,
      title: "Massive Data Processing",
      description: "Handle massive datasets and complex simulations that are impossible with classical computing."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Implement quantum-resistant cryptography to protect against future quantum attacks."
    }
  ];

  const quantumCapabilities = [
    {
      icon: Search,
      title: "Quantum Search",
      description: "Grover's algorithm for quantum search with quadratic speedup over classical methods."
    },
    {
      icon: Filter,
      title: "Quantum Simulation",
      description: "Accurate simulation of quantum systems for materials science and drug discovery."
    },
    {
      icon: Download,
      title: "Quantum Optimization",
      description: "Quantum approximate optimization algorithm (QAOA) for complex optimization problems."
    },
    {
      icon: Share2,
      title: "Quantum Machine Learning",
      description: "Quantum neural networks and quantum support vector machines for enhanced AI capabilities."
    },
    {
      icon: Lightbulb,
      title: "Quantum Chemistry",
      description: "Precise molecular modeling and chemical reaction simulation for pharmaceutical research."
    },
    {
      icon: Rocket,
      title: "Quantum Finance",
      description: "Portfolio optimization, risk assessment, and option pricing using quantum algorithms."
    }
  ];

  const useCases = [
    {
      icon: Building,
      title: "Pharmaceutical Research",
      description: "Accelerate drug discovery with quantum molecular modeling and chemical simulation."
    },
    {
      icon: ShoppingCart,
      title: "Supply Chain Optimization",
      description: "Optimize complex logistics networks and inventory management with quantum algorithms."
    },
    {
      icon: DollarSign,
      title: "Financial Modeling",
      description: "Advanced risk assessment, portfolio optimization, and derivative pricing using quantum computing."
    },
    {
      icon: Heart,
      title: "Healthcare Analytics",
      description: "Quantum-enhanced medical imaging analysis and personalized treatment optimization."
    },
    {
      icon: GraduationCap,
      title: "Research Institutions",
      description: "Access quantum computing resources for cutting-edge scientific research and discovery."
    },
    {
      icon: Home,
      title: "Energy Optimization",
      description: "Optimize energy grids, renewable energy systems, and carbon capture technologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
      <SEO 
        title="AI Quantum Computing Platform | Zion Tech Group"
        description="Harness the power of quantum computing combined with AI. Solve complex problems, accelerate research, and gain competitive advantage with our quantum platform."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Quantum Computing Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Unlock the future of computing with our AI-powered quantum platform. 
              Solve impossible problems, accelerate research, and gain unprecedented competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
              >
                Access Quantum Platform
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Demo
              </motion.button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of quantum computing combined with advanced AI capabilities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl border border-purple-600 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800 to-indigo-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock computational power that was previously impossible to achieve
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced quantum algorithms and applications for real-world problems
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quantumCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-indigo-800 to-purple-800 p-6 rounded-xl border border-indigo-600 hover:border-purple-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-800 to-indigo-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantum computing solutions designed for breakthrough applications across industries
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-indigo-500 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution. Our AI-powered quantum computing platform will transform 
              how you solve complex problems and accelerate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
              >
                Start Quantum Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}