import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Network, 
  Database, 
  Shield, 
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
  LineChart,
  Wifi,
  Bluetooth,
  Radio,
  Signal,
  Antenna,
  Satellite,
  Car
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const IoTEdgeComputing: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Real-time data processing at the network edge for instant insights',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Seamless connection of devices across multiple protocols and networks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI at the Edge',
      description: 'Local AI processing for faster decision-making and reduced latency',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Local Storage',
      description: 'Edge-based data storage and caching for improved performance',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security protocols for edge devices and networks',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant data analysis and insights at the edge',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const iotSolutions = [
    {
      title: 'Smart Cities',
      description: 'IoT infrastructure for urban management and citizen services',
      icon: Globe,
      benefits: ['Traffic optimization', 'Energy management', 'Public safety', 'Environmental monitoring'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Industrial IoT',
      description: 'Connected manufacturing and industrial automation systems',
      icon: Settings,
      benefits: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Safety monitoring'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Smart Healthcare',
      description: 'IoT medical devices and patient monitoring systems',
      icon: Users,
      benefits: ['Remote monitoring', 'Early detection', 'Treatment optimization', 'Patient safety'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Connected Vehicles',
      description: 'IoT solutions for automotive and transportation systems',
      icon: Car,
      benefits: ['Fleet management', 'Predictive maintenance', 'Safety systems', 'Route optimization'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Transportation',
    'Energy & Utilities',
    'Retail & Logistics',
    'Smart Cities',
    'Agriculture',
    'Construction',
    'Mining & Resources',
    'Financial Services'
  ];

  const benefits = [
    'Reduce latency by 90%',
    'Cut bandwidth costs by 60%',
    'Improve reliability by 95%',
    'Enable real-time decisions',
    'Enhanced data privacy',
    'Scalable architecture',
    '24/7 monitoring',
    'Predictive capabilities'
  ];

  const technologies = [
    'Edge Computing',
    'IoT Protocols',
    '5G Networks',
    'Machine Learning',
    'Blockchain',
    'Cloud Integration',
    'Data Analytics',
    'Cybersecurity'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="IoT Edge Computing - Zion Tech Group"
        description="Revolutionary IoT and edge computing solutions for real-time data processing, AI integration, and connected systems. Transform your operations with cutting-edge edge technology."
        keywords="IoT edge computing, edge computing, IoT solutions, real-time processing, connected devices, Zion Tech Group"
        ogType="website"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4 mr-2" />
                Edge Computing
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                IoT Edge
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your IoT infrastructure with edge computing that brings processing power 
                closer to your devices for faster, more reliable operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Edge Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our IoT edge computing platform provides comprehensive capabilities for modern connected systems.
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
                className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50"
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

      {/* IoT Solutions Section */}
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
              IoT Solutions We Deliver
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From smart cities to industrial automation, our IoT platform delivers comprehensive solutions for every industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {iotSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
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
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented performance and efficiency in your IoT operations with our edge computing platform.
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
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in IoT, edge computing, and artificial intelligence to deliver superior performance.
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
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-700/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
              Our IoT edge computing platform is designed to revolutionize various industries with real-time data processing and AI-powered insights.
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
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-600/50 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium text-sm leading-relaxed">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-green-500/10">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the IoT revolution with our edge computing platform. Experience real-time insights and AI-powered automation for your connected systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                <MessageCircle className="w-5 h-5" />
                Schedule Edge Demo
              </button>
              <button className="btn-futuristic-outline">
                <Phone className="w-5 h-5" />
                Contact IoT Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IoTEdgeComputing;