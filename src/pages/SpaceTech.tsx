import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  Globe, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Database,
  Lock,
  BarChart3,
  Workflow,
  Calendar,
  Target,
  Zap,
  TrendingUp,
  Shield,
  Star,
  Award,
  Cpu,
  Network,
  FileText,
  Search,
  Eye,
  CheckSquare,
  Clipboard,
  AlertTriangle,
  Settings,
  Gauge,
  Activity,
  Monitor,
  Cog,
  Wrench,
  HardHat,
  Truck,
  Package,
  BarChart,
  PieChart,
  LineChart,
  Users,
  Heart,
  ShoppingCart,
  Building,
  Atom,
  Infinity,
  Planet,
  Telescope,
  Orbit,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun,
  Binary
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SpaceTech = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Satellite Technology',
      description: 'Advanced satellite systems and space infrastructure solutions',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Brain,
      title: 'AI Space Analytics',
      description: 'Intelligent analytics for space data and satellite operations',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Earth Observation',
      description: 'Satellite imagery and environmental monitoring solutions',
      color: 'from-green-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Space Security',
      description: 'Cybersecurity and protection for space-based systems',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const solutions = [
    {
      title: 'Satellite Operations Platform',
      description: 'Comprehensive platform for satellite management and operations',
      features: ['Mission Control', 'Telemetry Analysis', 'Orbital Planning', 'System Monitoring'],
      href: '/services/space-tech'
    },
    {
      title: 'Space Data Analytics',
      description: 'AI-powered analytics for space data and satellite imagery',
      features: ['Image Processing', 'Data Visualization', 'Predictive Analytics', 'Real-time Insights'],
      href: '/services/ai-business-intelligence'
    }
  ];

  const benefits = [
    'Enhanced satellite operations and mission success',
    'Improved space data analysis and insights',
    'Advanced Earth observation capabilities',
    'Secure and reliable space infrastructure',
    'Real-time monitoring and control systems',
    'Innovative space technology solutions'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Space Technology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Advancing Space Technology with
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {' '}AI & Innovation
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group delivers cutting-edge space technology solutions that drive 
              innovation in satellite operations, space analytics, and Earth observation. 
              We're helping humanity explore and understand space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Space Technology Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our space technology solutions are built with innovation, reliability, and performance in mind
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Space Technology Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive space technology solutions designed for modern space operations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-blue-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={solution.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Space Technology Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Measurable improvements in space operations, data analysis, and mission success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Advance Space Technology?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how Zion Tech Group can help you achieve your space technology goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                <span>Schedule Demo</span>
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTech;