import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Brain, 
  Cloud, 
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
  Globe,
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
  Heart,
  ShoppingCart,
  Rocket,
  Atom,
  Infinity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ITConsulting = () => {
  const features = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development and digital transformation planning',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Expert guidance on cloud adoption and infrastructure optimization',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Cybersecurity strategy and regulatory compliance consulting',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Data Strategy',
      description: 'Data governance, analytics, and business intelligence consulting',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const services = [
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      features: ['Strategy Development', 'Technology Selection', 'Change Management', 'Implementation Support'],
      href: '/services/digital-transformation'
    },
    {
      title: 'IT Infrastructure',
      description: 'Modern infrastructure design and optimization consulting',
      features: ['Architecture Design', 'Performance Optimization', 'Scalability Planning', 'Cost Optimization'],
      href: '/services/it-infrastructure'
    }
  ];

  const benefits = [
    'Reduce IT costs by 20-40% through optimization',
    'Accelerate digital transformation initiatives',
    'Improve security posture and compliance',
    'Enhance operational efficiency and productivity',
    'Access to expert IT consultants and architects',
    'Long-term strategic IT planning and guidance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Building className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium">IT Consulting</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Expert IT Consulting for
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                {' '}Digital Success
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Zion Tech Group provides expert IT consulting services that drive digital 
              transformation, optimize operations, and ensure long-term technology success. 
              From strategy to implementation, we're your trusted technology partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-indigo-400/30 text-indigo-400 hover:bg-indigo-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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
              IT Consulting Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our consulting services are built with expertise, strategy, and results in mind
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
                <div className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-indigo-400/30 transition-all duration-300 hover:transform hover:scale-105">
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

      {/* Services Section */}
      <section className="py-20 relative bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Consulting Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive IT consulting services designed for modern business needs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-indigo-400/30 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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
              Consulting Benefits
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Measurable improvements in IT strategy, efficiency, and business outcomes
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
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how Zion Tech Group can help you achieve your IT transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center space-x-2 border border-indigo-400/30 text-indigo-400 hover:bg-indigo-400/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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

export default ITConsulting;