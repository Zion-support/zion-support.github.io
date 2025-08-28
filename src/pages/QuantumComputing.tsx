import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Brain, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Lock,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Monitor,
  Smartphone,
  Server,
  Chip,
  Wifi,
  Satellite,
  Radar,
  Camera,
  Video,
  FileText,
  Calendar,
  Tag,
  TrendingUp,
  PieChart,
  LineChart,
  Scatter,
  Layers,
  Cube,
  Box,
  Package,
  Truck,
  Building,
  Factory,
  Warehouse,
  Home,
  Car,
  Plane,
  Ship,
  Network,
  Database,
  Cloud,
  Eye
} from 'lucide-react';

export default function QuantumComputing() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Supremacy",
      description: "Achieve computational power beyond classical computing limits",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Quantum Algorithms",
      description: "Optimized algorithms for complex problem-solving",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Quantum Speedup",
      description: "Exponential performance improvements for specific tasks",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Brain,
      title: "AI Enhancement",
      description: "Quantum machine learning and neural networks",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Unbreakable encryption and secure communications",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Precision Computing",
      description: "Ultra-accurate simulations and calculations",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const applications = [
    {
      title: "Cryptography",
      description: "Quantum-resistant encryption and secure communications",
      icon: Lock,
      benefits: ["Post-quantum cryptography", "Quantum key distribution", "Secure protocols"]
    },
    {
      title: "Drug Discovery",
      description: "Molecular modeling and pharmaceutical research",
      icon: Activity,
      benefits: ["Molecular simulation", "Drug optimization", "Protein folding"]
    },
    {
      title: "Financial Modeling",
      description: "Portfolio optimization and risk assessment",
      icon: TrendingUp,
      benefits: ["Risk analysis", "Portfolio optimization", "Market simulation"]
    },
    {
      title: "Climate Science",
      description: "Climate modeling and environmental prediction",
      icon: Globe,
      benefits: ["Weather forecasting", "Climate modeling", "Environmental analysis"]
    }
  ];

  const technologies = [
    "Superconducting Qubits", "Trapped Ions", "Topological Qubits", "Quantum Error Correction", 
    "Quantum Gates", "Quantum Circuits", "Quantum Memory", "Quantum Networks", "Quantum Sensors", "Quantum Metrology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum Computing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum mechanics to solve the world's most complex problems. 
              Experience computational capabilities that were once thought impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Computing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing solutions leverage the principles of quantum mechanics to deliver unprecedented computational power.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving previously intractable problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applications.map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{application.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quantum Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge quantum technologies for maximum performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for the Quantum Revolution?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the quantum computing revolution with Zion Tech Group. Our quantum solutions are designed to tackle 
              the most complex challenges and unlock new possibilities for innovation and discovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-purple-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}