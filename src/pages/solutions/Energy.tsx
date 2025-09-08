import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Database, 
  Network, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Brain,
  Target,
  Award,
  Star,
  Clock,
  Phone,
  Mail,
  MapPin,
  FileText,
  BarChart3,
  Settings,
  DollarSign,
  Lightbulb,
  Leaf,
  Sun,
  Wind
} from 'lucide-react';

const EnergySolutions = () => {
  const solutions = [
    {
      title: 'Smart Grid Management',
      description: 'AI-powered smart grid solutions for efficient energy distribution and management',
      features: ['Real-time monitoring', 'Load balancing', 'Predictive maintenance', 'Grid optimization'],
      icon: Zap,
      href: '/services/smart-grid-platform'
    },
    {
      title: 'Renewable Energy Integration',
      description: 'Seamless integration of solar, wind, and other renewable energy sources',
      features: ['Solar optimization', 'Wind forecasting', 'Energy storage', 'Grid stability'],
      icon: Sun,
      href: '/services/renewable-energy-platform'
    },
    {
      title: 'Energy Analytics & Optimization',
      description: 'Data-driven insights to optimize energy consumption and reduce costs',
      features: ['Consumption analytics', 'Cost optimization', 'Efficiency tracking', 'Predictive modeling'],
      icon: Brain,
      href: '/services/ai-energy-analytics'
    },
    {
      title: 'Energy Trading Platform',
      description: 'Advanced platform for energy trading and market optimization',
      features: ['Market analysis', 'Trading algorithms', 'Risk management', 'Compliance monitoring'],
      icon: TrendingUp,
      href: '/services/energy-trading-platform'
    }
  ];

  const energyTypes = [
    'Solar Power',
    'Wind Energy',
    'Hydroelectric',
    'Nuclear Power',
    'Fossil Fuels',
    'Energy Storage'
  ];

  const benefits = [
    'Reduced energy costs',
    'Improved efficiency',
    'Enhanced sustainability',
    'Grid reliability',
    'Real-time monitoring',
    'Predictive maintenance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Energy Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Power the future with innovative energy technology solutions for sustainable and efficient operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart grids to renewable energy, we provide end-to-end solutions for modern energy management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600 hover:border-yellow-500 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-4">
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Types Served */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Energy Sectors We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for diverse energy production and distribution systems
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {energyTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-6 text-center border border-slate-600 hover:border-yellow-500 transition-all duration-300"
              >
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{type}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our Energy Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with a technology partner that understands energy challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Power the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our energy solutions can improve efficiency and sustainability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-300 text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnergySolutions;