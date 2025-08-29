import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Atom, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Target,
  Eye,
  Cpu,
  Network,
  Database,
  Cloud,
  Lock,
  Key,
  Fingerprint,
  Scan,
  AlertTriangle,
  ShieldCheck,
  UserCheck,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Lightbulb,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Satellite,
  Leaf,
  Building,
  FlaskConical,
  X
} from 'lucide-react';

const showcaseServices = [
  {
    title: 'Quantum AI Platform',
    description: 'Next-generation AI powered by quantum computing for unprecedented processing capabilities',
    icon: Atom,
    color: 'from-purple-400 to-pink-500',
    category: 'AI & Quantum Computing',
    features: [
      'Quantum machine learning algorithms',
      'Exponential speed improvements',
      'Advanced pattern recognition',
      'Quantum-safe encryption'
    ],
    applications: ['Financial modeling', 'Drug discovery', 'Climate prediction', 'AI research'],
    status: 'Active Development',
    timeline: '2025-2030'
  },
  {
    title: 'Neural Interface Systems',
    description: 'Direct brain-computer interfaces for enhanced human-machine collaboration',
    icon: Brain,
    color: 'from-blue-400 to-cyan-500',
    category: 'Human-Computer Interaction',
    features: [
      'Non-invasive neural monitoring',
      'Thought-to-text conversion',
      'Enhanced cognitive abilities',
      'Accessibility solutions'
    ],
    applications: ['Healthcare', 'Education', 'Accessibility', 'Research'],
    status: 'Research Phase',
    timeline: '2030-2035'
  },
  {
    title: 'Autonomous Infrastructure',
    description: 'Self-healing and self-optimizing infrastructure systems',
    icon: Network,
    color: 'from-green-400 to-emerald-500',
    category: 'Infrastructure & IoT',
    features: [
      'Predictive maintenance',
      'Automatic optimization',
      'Self-repair capabilities',
      'Energy efficiency'
    ],
    applications: ['Smart cities', 'Manufacturing', 'Utilities', 'Transportation'],
    status: 'Active Development',
    timeline: '2025-2030'
  },
  {
    title: 'Holographic Computing',
    description: '3D holographic interfaces and computing environments',
    icon: Eye,
    color: 'from-orange-400 to-red-500',
    category: 'Visual Computing',
    features: [
      '3D visualization',
      'Immersive experiences',
      'Collaborative workspaces',
      'Virtual prototyping'
    ],
    applications: ['Design', 'Training', 'Entertainment', 'Healthcare'],
    status: 'Experimental',
    timeline: '2030-2040'
  },
  {
    title: 'Fusion Energy Systems',
    description: 'Clean, limitless energy for sustainable development',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    category: 'Energy & Sustainability',
    features: [
      'Clean energy production',
      'Zero carbon emissions',
      'High energy density',
      'Sustainable power'
    ],
    applications: ['Power generation', 'Transportation', 'Industry', 'Space exploration'],
    status: 'Experimental',
    timeline: '2030-2040'
  },
  {
    title: 'Space Technology Platform',
    description: 'Advanced space exploration and colonization systems',
    icon: Rocket,
    color: 'from-indigo-400 to-purple-500',
    category: 'Space & Exploration',
    features: [
      'Advanced propulsion systems',
      'Life support systems',
      'Resource utilization',
      'Interplanetary communication'
    ],
    applications: ['Space exploration', 'Satellite technology', 'Mars colonization', 'Asteroid mining'],
    status: 'Active Development',
    timeline: '2025-2030'
  }
];

const technologyCategories = [
  {
    name: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    count: 15
  },
  {
    name: 'Quantum Computing',
    icon: Atom,
    color: 'from-blue-400 to-cyan-500',
    count: 8
  },
  {
    name: 'Space Technology',
    icon: Rocket,
    color: 'from-indigo-400 to-purple-500',
    count: 12
  },
  {
    name: 'Energy & Sustainability',
    icon: Leaf,
    color: 'from-green-400 to-emerald-500',
    count: 10
  },
  {
    name: 'Human-Computer Interaction',
    icon: Eye,
    color: 'from-orange-400 to-red-500',
    count: 6
  },
  {
    name: 'Infrastructure & IoT',
    icon: Network,
    color: 'from-teal-400 to-cyan-500',
    count: 14
  }
];

const showcaseMetrics = [
  {
    metric: '1000x',
    label: 'Performance Increase',
    description: 'Quantum AI processing power'
  },
  {
    metric: '99.99%',
    label: 'Uptime Guarantee',
    description: 'Autonomous infrastructure reliability'
  },
  {
    metric: '24/7',
    label: 'AI Operations',
    description: 'Continuous learning and optimization'
  },
  {
    metric: 'Zero',
    label: 'Carbon Footprint',
    description: 'Sustainable technology solutions'
  },
  {
    metric: '50+',
    label: 'Revolutionary Services',
    description: 'Cutting-edge technology solutions'
  },
  {
    metric: '2030',
    label: 'Future Ready',
    description: 'Designed for the next decade'
  }
];

export default function RevolutionaryServicesShowcase2030() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Revolutionary Services Showcase 2030 - Zion Tech Group"
        description="Explore our showcase of revolutionary services for 2030. Quantum AI, neural interfaces, autonomous infrastructure, holographic computing, and more."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Revolutionary Services Showcase 2030
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Experience the future of technology today. A comprehensive showcase of 
              revolutionary services that will define the next decade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-400/25"
              >
                Experience the Future
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-slate-900 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Showcase Metrics */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Showcase by the Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Revolutionary performance metrics that define the future
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {showcaseMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-white font-semibold mb-2 text-sm">{metric.label}</div>
                <p className="text-slate-400 text-xs">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore revolutionary services across different technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <div className="text-indigo-400 font-semibold">{category.count} Services</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Services */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Revolutionary Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge technologies that will transform industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {showcaseServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-indigo-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 mb-1">{service.category}</div>
                    <div className="text-sm text-indigo-400 font-medium">{service.status}</div>
                    <div className="text-xs text-slate-400">{service.timeline}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-indigo-400 font-semibold mb-3">Key Features:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-indigo-400 font-semibold mb-3">Applications:</h4>
                  {service.applications.map((application, applicationIndex) => (
                    <div key={applicationIndex} className="flex items-center text-sm text-slate-300">
                      <Target className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {application}
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Revolutionary Showcase */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Revolutionary Services Showcase?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The advantages of exploring our showcase of future technologies
            </p>
          </motion.div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Comprehensive Overview</h4>
                    <p className="text-slate-300 text-sm">Get a complete view of all revolutionary services in one place</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Technology Roadmap</h4>
                    <p className="text-slate-300 text-sm">Understand development timelines and future availability</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Early Access</h4>
                    <p className="text-slate-300 text-sm">Be among the first to experience revolutionary technologies</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Strategic Planning</h4>
                    <p className="text-slate-300 text-sm">Plan your technology investments for the next decade</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Innovation Partnership</h4>
                    <p className="text-slate-300 text-sm">Collaborate with our research and development teams</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Future-Proof Strategy</h4>
                    <p className="text-slate-300 text-sm">Build a technology strategy that will remain cutting-edge</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Discover revolutionary services that will transform your business and industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-indigo-400/25"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-400 hover:text-slate-900 transition-colors duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}