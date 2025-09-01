import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Atom,
  Zap,
  Brain,
  Shield,
  BarChart3,
  Activity,
  Eye,
  Network,
  Server,
  Database,
  Code,
  Heart,
  Target,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Cpu,
  Lock,
  TrendingUp,
  DollarSign,
  Building,
  Users,
  FileText,
  Search,
  Cloud,
  Briefcase,
  Award,
  Clock,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  Heatmap,
  TreeMap,
  Sunburst,
  Sankey,
  Force,
  Chord,
  Treemap,
  Voronoi,
  Contour,
  Surface,
  Mesh,
  Stream,
  Area,
  StackedArea,
  StackedBar,
  GroupedBar,
  HorizontalBar,
  RangeBar,
  Waterfall,
  Funnel,
  Pyramid,
  Radar,
  Polar,
  Donut,
  Gauge,
  Meter,
  Progress,
  Bullet,
  Histogram,
  BoxPlot,
  Violin,
  Strip,
  Swarm,
  Beeswarm,
  Jitter,
  Ridge,
  Joy,
} from 'lucide-react';

export function QuantumComputing() {
  const features = [
    {
      icon: Atom,
      title: 'Quantum Algorithms',
      description:
        'Advanced quantum algorithms for complex computational problems',
      benefits: [
        'Exponential speedup',
        'Parallel processing',
        'Quantum advantage',
      ],
    },
    {
      icon: Brain,
      title: 'Quantum AI Hybrid',
      description: 'Combining quantum computing with artificial intelligence',
      benefits: [
        'Enhanced ML models',
        'Quantum neural networks',
        'Hybrid optimization',
      ],
    },
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Quantum-resistant cryptography and secure communications',
      benefits: [
        'Post-quantum crypto',
        'Quantum key distribution',
        'Unbreakable encryption',
      ],
    },
    {
      icon: Target,
      title: 'Quantum Optimization',
      description: 'Solving complex optimization problems efficiently',
      benefits: [
        'Supply chain optimization',
        'Financial modeling',
        'Logistics planning',
      ],
    },
    {
      icon: BarChart3,
      title: 'Quantum Simulation',
      description: 'Simulating quantum systems and molecular dynamics',
      benefits: ['Drug discovery', 'Material science', 'Chemical modeling'],
    },
    {
      icon: Network,
      title: 'Quantum Networks',
      description: 'Building quantum internet infrastructure',
      benefits: [
        'Quantum entanglement',
        'Secure communication',
        'Distributed computing',
      ],
    },
  ];

  const applications = [
    {
      industry: 'Finance',
      icon: DollarSign,
      applications: [
        'Portfolio optimization',
        'Risk assessment',
        'Trading algorithms',
        'Fraud detection',
      ],
      color: 'from-green-500 to-emerald-600',
    },
    {
      industry: 'Healthcare',
      icon: Heart,
      applications: [
        'Drug discovery',
        'Protein folding',
        'Medical imaging',
        'Personalized medicine',
      ],
      color: 'from-red-500 to-pink-600',
    },
    {
      industry: 'Manufacturing',
      icon: Building,
      applications: [
        'Supply chain optimization',
        'Quality control',
        'Predictive maintenance',
        'Resource allocation',
      ],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      industry: 'Energy',
      icon: Zap,
      applications: [
        'Grid optimization',
        'Renewable energy',
        'Battery technology',
        'Climate modeling',
      ],
      color: 'from-yellow-500 to-orange-600',
    },
  ];

  const technologies = [
    {
      name: 'IBM Q',
      description: 'IBM Quantum Experience platform',
      icon: Atom,
    },
    {
      name: 'Google Quantum AI',
      description: 'Sycamore quantum processor',
      icon: Brain,
    },
    {
      name: 'Microsoft Azure Quantum',
      description: 'Cloud-based quantum computing',
      icon: Cloud,
    },
    {
      name: 'Amazon Braket',
      description: 'Quantum computing service',
      icon: Server,
    },
    {
      name: 'Rigetti Computing',
      description: 'Quantum-classical hybrid systems',
      icon: Cpu,
    },
    { name: 'IonQ', description: 'Trapped ion quantum computers', icon: Atom },
  ];

  const quantumAdvantages = [
    {
      title: 'Exponential Speedup',
      description:
        'Quantum computers can solve certain problems exponentially faster than classical computers',
      icon: Zap,
    },
    {
      title: 'Parallel Processing',
      description:
        'Quantum superposition allows processing multiple states simultaneously',
      icon: Network,
    },
    {
      title: 'Quantum Entanglement',
      description:
        'Entangled particles enable secure communication and distributed computing',
      icon: Lock,
    },
    {
      title: 'Quantum Tunneling',
      description:
        'Quantum effects enable optimization algorithms to escape local minima',
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Atom className="w-16 h-16 text-purple-400" />
              <h1 className="text-5xl font-bold">Quantum Computing</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of quantum mechanics for unprecedented
              computational capabilities. Our quantum computing solutions unlock
              new possibilities in AI, cryptography, optimization, and
              scientific discovery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Explore Quantum
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/20"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Advantages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how quantum computing revolutionizes problem-solving and
              opens new frontiers in computational science and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quantumAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg p-8 border border-gray-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-lg">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our quantum computing solutions cover the full spectrum of quantum
              technologies, from algorithms to hardware integration and hybrid
              quantum-classical systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Quantum computing is transforming industries by solving previously
              intractable problems and enabling new breakthroughs in science and
              technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.industry}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-8 border border-gray-600"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${app.color}`}
                  >
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {app.industry}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {app.applications.map((application, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <ArrowRight className="w-4 h-4 text-purple-400" />
                      {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Quantum Computing Platforms
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We work with leading quantum computing platforms and technologies
              to deliver cutting-edge solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/30 rounded-lg p-6 border border-gray-600 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <tech.icon className="w-6 h-6 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Quantum Frontier?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how quantum computing can revolutionize your
              business operations and unlock new possibilities for innovation
              and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default QuantumComputing;
