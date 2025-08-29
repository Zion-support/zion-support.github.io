import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Cpu, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Building, 
  Factory,
  Car,
  Home,
  City,
  CheckCircle,
  ArrowRight,
  Star,
  Brain,
  Eye,
  BarChart3,
  Network,
  Server,
  Smartphone,
  Clock,
  Target,
  Rocket,
  Atom,
  Leaf,
  Gauge,
  GitFork,
  Code,
  Settings,
  Key,
  Lock,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function DigitalTwin() {
  const features = [
    {
      icon: Globe,
      title: 'Virtual Replicas',
      description: 'Create accurate digital representations of physical assets, processes, and systems'
    },
    {
      icon: Cpu,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and analysis of physical systems through digital twins'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamless integration with IoT sensors, SCADA systems, and enterprise databases'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Platform',
      description: 'Scalable cloud infrastructure for managing multiple digital twins'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with role-based access control and audit trails'
    },
    {
      icon: Zap,
      title: 'AI-Powered Analytics',
      description: 'Machine learning algorithms for predictive maintenance and optimization'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Optimize operations and reduce downtime through predictive insights'
    },
    {
      icon: Users,
      title: 'Better Decision Making',
      description: 'Data-driven insights for improved strategic and operational decisions'
    },
    {
      icon: Building,
      title: 'Asset Optimization',
      description: 'Maximize asset performance and extend equipment lifespan'
    },
    {
      icon: Factory,
      title: 'Process Improvement',
      description: 'Identify bottlenecks and optimize manufacturing processes'
    },
    {
      icon: Car,
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures and reduce maintenance costs'
    },
    {
      icon: Home,
      title: 'Smart Infrastructure',
      description: 'Monitor and manage buildings, cities, and critical infrastructure'
    }
  ];

  const useCases = [
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Digital twins for production lines, equipment monitoring, and quality control'
    },
    {
      icon: Building,
      title: 'Smart Buildings',
      description: 'Building management systems with real-time monitoring and optimization'
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Vehicle performance monitoring and predictive maintenance'
    },
    {
      icon: City,
      title: 'Smart Cities',
      description: 'Urban infrastructure monitoring and traffic optimization'
    },
    {
      icon: Server,
      title: 'Data Centers',
      description: 'Infrastructure monitoring and energy optimization'
    },
    {
      icon: Leaf,
      title: 'Energy Systems',
      description: 'Power grid monitoring and renewable energy optimization'
    }
  ];

  const technologies = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced algorithms for pattern recognition and predictive analytics'
    },
    {
      icon: Network,
      title: 'IoT Integration',
      description: 'Seamless connectivity with sensors and edge devices'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable infrastructure for real-time data processing'
    },
    {
      icon: Database,
      title: 'Big Data Analytics',
      description: 'Processing and analysis of large-scale sensor data'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures for critical infrastructure'
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Local processing for real-time decision making'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-cyan-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Digital Twin Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your World with
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Digital Twins</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Create virtual replicas of your physical assets and systems. Monitor, analyze, and optimize operations in real-time with our advanced digital twin platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Demo
                <Eye className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Digital Twin Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform provides comprehensive digital twin functionality for any industry or application.
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
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Digital Twins?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock new possibilities and drive innovation with digital twin technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 border border-slate-700/50 rounded-xl hover:border-green-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Digital twins are transforming industries across the globe. Discover how they can benefit your sector.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest technologies to ensure performance, scalability, and security.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-900/50 border border-slate-700/50 rounded-xl hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-400 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your operations with the power of digital twins. Get started today and see the difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Us
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your operations with digital twins? Our team of experts is here to help you every step of the way.
              </p>
              
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
                
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{contactInfo.email}</span>
                </a>
                
                <div className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-slate-700/50 rounded-lg mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-900/50 border border-slate-700/50 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Quick Contact Form</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                ></textarea>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}