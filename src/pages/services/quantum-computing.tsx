import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Cpu, 
  Network, 
  Database, 
  Target, 
  CheckCircle,
  ArrowRight,
  TrendingUp,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Award,
  Lightbulb,
  Sparkles,
  Server,
  Smartphone,
  Monitor,
  Globe,
  Clock,
  Activity,
  Shield,
  Lock,
  Key,
  Bug,
  Virus,
  Fire,
  FileText,
  Cloud,
  Users,
  Settings,
  Gauge,
  BarChart,
  PieChart,
  LineChart
} from 'lucide-react';

const QuantumComputing: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Processing',
      description: 'Revolutionary quantum computing power for complex problem solving',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Quantum AI Integration',
      description: 'Seamless integration of quantum computing with artificial intelligence',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Quantum Speed',
      description: 'Exponential performance improvements for computational tasks',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Network,
      title: 'Quantum Networks',
      description: 'Secure quantum communication and entanglement networks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Quantum Databases',
      description: 'Advanced quantum database systems for data processing',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Target,
      title: 'Quantum Optimization',
      description: 'AI-powered optimization algorithms leveraging quantum computing',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const quantumSolutions = [
    {
      title: 'Quantum Machine Learning',
      description: 'AI algorithms enhanced with quantum computing for superior performance',
      icon: Brain,
      benefits: ['Faster training', 'Better accuracy', 'Complex pattern recognition', 'Quantum neural networks'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Cryptography',
      description: 'Unbreakable encryption using quantum key distribution',
      icon: Lock,
      benefits: ['Unhackable security', 'Quantum key distribution', 'Future-proof encryption', 'Secure communications'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Quantum Optimization',
      description: 'Solving complex optimization problems with quantum algorithms',
      icon: Target,
      benefits: ['NP-hard problem solving', 'Faster convergence', 'Global optimization', 'Resource efficiency'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quantum Simulation',
      description: 'Accurate simulation of quantum systems and molecular dynamics',
      icon: Atom,
      benefits: ['Molecular modeling', 'Material science', 'Drug discovery', 'Chemical reactions'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const industries = [
    'Financial Services',
    'Pharmaceutical Research',
    'Materials Science',
    'Cryptography & Security',
    'Artificial Intelligence',
    'Climate Modeling',
    'Logistics & Supply Chain',
    'Energy & Utilities',
    'Aerospace & Defense',
    'Healthcare & Genomics'
  ];

  const benefits = [
    '1000x faster computation',
    'Solve previously impossible problems',
    'Breakthrough AI capabilities',
    'Unbreakable encryption',
    'Revolutionary optimization',
    'Advanced simulations',
    'Future-proof technology',
    'Competitive advantage'
  ];

  const technologies = [
    'Quantum Gates & Circuits',
    'Quantum Error Correction',
    'Quantum Entanglement',
    'Superposition States',
    'Quantum Annealing',
    'Quantum Machine Learning',
    'Quantum Cryptography',
    'Quantum Networks'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum Computing - Zion Tech Group"
        description="Revolutionary quantum computing solutions with AI integration. Experience exponential performance improvements and solve previously impossible problems with cutting-edge quantum technology."
        keywords="quantum computing, quantum AI, quantum algorithms, quantum cryptography, quantum optimization, Zion Tech Group"
        ogType="website"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                <Atom className="w-4 h-4" />
                Quantum Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Quantum
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Computing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience the future of computing with our revolutionary quantum platform. From AI integration to cryptography, we're bringing quantum computing power to solve previously impossible problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  <Atom className="w-5 h-5" />
                  Quantum Demo
                </button>
                <button className="btn-futuristic-outline">
                  <FileText className="w-5 h-5" />
                  Download Whitepaper
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Atom className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quantum Computing</h3>
                    <p className="text-gray-300">Revolutionary Computing Power</p>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Quantum Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing platform combines cutting-edge quantum technology with AI integration to deliver unprecedented computational power and problem-solving capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Solutions Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Quantum Computing Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From machine learning to cryptography, our quantum platform delivers solutions that were previously impossible with classical computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quantumSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented computational power and solve problems that were previously impossible with classical computing.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Cutting-Edge Quantum Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in quantum computing and quantum information science to deliver superior computational capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum computing platform is designed to revolutionize various industries with unprecedented computational power.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-600/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the quantum revolution with our cutting-edge platform. Solve previously impossible problems and gain a competitive advantage with quantum computing power.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                <MessageCircle className="w-5 h-5" />
                Schedule Quantum Demo
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Contact Quantum Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your computing capabilities with quantum technology? Our team of quantum experts is here to help you implement the future of computing.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request Quantum Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                
                <textarea
                  placeholder="Tell us about your quantum computing needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputing;