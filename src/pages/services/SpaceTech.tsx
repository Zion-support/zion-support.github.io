import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Satellite, 
  CheckCircle, 
  Users, 
  Clock, 
  ArrowRight,
  Play,
  Settings,
  Target,
  Activity,
  Sparkles,
  Search,
  Zap,
  Globe,
  Building,
  DollarSign,
  BarChart3,
  TrendingUp,
  Key,
  Fingerprint,
  Monitor,
  AlertTriangle,
  ShieldCheck,
  Globe2,
  Server,
  Database,
  Smartphone,
  Code,
  FileText,
  AlertCircle,
  CheckSquare,
  Calculator,
  PieChart,
  LineChart,
  Target2,
  Wallet,
  PiggyBank,
  CreditCard,
  Receipt,
  Cloud,
  Zap2,
  Gauge,
  BarChart4,
  TrendingUp2,
  Lightbulb,
  Briefcase,
  Strategy,
  Brain,
  Compass,
  Shield,
  RefreshCw,
  TrendingUp3,
  Layers,
  Workflow,
  Scale,
  Award,
  Lock,
  Wifi,
  Bluetooth,
  Radio,
  Sensor,
  Chip,
  Circuit,
  Orbit,
  Planet,
  Star,
  Telescope,
  Antenna,
  Signal,
  Navigation,
  Earth,
  Moon,
  Sun
} from 'lucide-react';

const SpaceTech = () => {
  const features = [
    {
      icon: Satellite,
      title: 'Satellite Technology',
      description: 'Advanced satellite design, deployment, and management solutions'
    },
    {
      icon: Orbit,
      title: 'Orbital Mechanics',
      description: 'Precise orbital calculations and trajectory optimization'
    },
    {
      icon: Antenna,
      title: 'Ground Station Systems',
      description: 'Earth-based communication and control infrastructure'
    },
    {
      icon: Signal,
      title: 'Space Communications',
      description: 'Reliable data transmission between space and ground'
    },
    {
      icon: Navigation,
      title: 'Space Navigation',
      description: 'Advanced positioning and navigation systems for space missions'
    },
    {
      icon: Telescope,
      title: 'Space Observation',
      description: 'Earth observation and space monitoring capabilities'
    }
  ];

  const benefits = [
    'Enable global connectivity and coverage',
    'Provide critical Earth observation data',
    'Support space exploration missions',
    'Enable advanced navigation systems',
    'Support disaster response and monitoring',
    'Drive innovation in space technology'
  ];

  const services = [
    {
      icon: Rocket,
      title: 'Launch Services',
      description: 'Satellite launch coordination and mission planning'
    },
    {
      icon: Planet,
      title: 'Earth Observation',
      description: 'Satellite imagery and environmental monitoring'
    },
    {
      icon: Star,
      title: 'Space Research',
      description: 'Scientific research and space exploration support'
    },
    {
      icon: Globe2,
      title: 'Global Communications',
      description: 'Satellite communications and internet services'
    }
  ];

  const useCases = [
    {
      industry: 'Telecommunications',
      description: 'Global satellite communications and internet services'
    },
    {
      industry: 'Environmental Monitoring',
      description: 'Climate change tracking and natural disaster monitoring'
    },
    {
      industry: 'Agriculture',
      description: 'Crop monitoring and precision agriculture support'
    },
    {
      industry: 'Defense & Security',
      description: 'Surveillance and national security applications'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Space Technology Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Space
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Technology</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Pioneer the future with our cutting-edge space technology solutions 
              that enable satellite operations, space communications, and Earth observation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Launch Space Project
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Space Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides cutting-edge space technology capabilities 
              for modern space missions and satellite operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Space Technology Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From satellite operations to space communications, we provide 
              comprehensive space technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Space Technology Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in global connectivity, monitoring, and space exploration capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our space technology solutions adapt to various industries, providing 
              innovative solutions for global challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Launch Your Space Project Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join organizations worldwide that use our space technology solutions to 
              explore new frontiers and solve global challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTech;
