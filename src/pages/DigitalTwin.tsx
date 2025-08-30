import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Cpu, 
  Network, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
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
  Ship
} from 'lucide-react';

export default function DigitalTwin() {
  const features = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Live visualization and monitoring of physical assets and processes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analytics",
      description: "Intelligent insights and predictive maintenance capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Seamless connectivity with sensors and IoT devices",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Data Synchronization",
      description: "Real-time data flow between physical and digital worlds",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      description: "Scalable cloud infrastructure for digital twin operations",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security for sensitive operational data",
      color: "from-red-500 to-pink-500"
    }
  ];

  const applications = [
    {
      title: "Manufacturing",
      description: "Optimize production processes and predict equipment failures",
      icon: Factory,
      benefits: ["Production optimization", "Predictive maintenance", "Quality control"]
    },
    {
      title: "Smart Cities",
      description: "Monitor and manage urban infrastructure and services",
      icon: Building,
      benefits: ["Traffic management", "Energy optimization", "Public safety"]
    },
    {
      title: "Healthcare",
      description: "Patient monitoring and medical device management",
      icon: Activity,
      benefits: ["Patient care", "Equipment monitoring", "Treatment optimization"]
    },
    {
      title: "Transportation",
      description: "Fleet management and infrastructure monitoring",
      icon: Truck,
      benefits: ["Fleet optimization", "Route planning", "Maintenance scheduling"]
    }
  ];

  const technologies = [
    "IoT Sensors", "3D Modeling", "Machine Learning", "Cloud Computing", "Edge Computing", 
    "5G Networks", "Blockchain", "AR/VR", "Computer Vision", "Robotics"
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
              Digital Twin Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Bridge the gap between physical and digital worlds with our advanced digital twin solutions. 
              Monitor, analyze, and optimize your operations in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2"
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
              Digital Twin Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive digital twin platform provides everything you need to create and manage virtual replicas of your physical assets.
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
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how digital twin technology can transform operations across different industries.
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
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <application.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{application.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{application.description}</p>
                <ul className="space-y-2">
                  {application.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
              Enabling Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge technologies for maximum performance and scalability.
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
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
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
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the digital transformation revolution with Zion Tech Group. Our digital twin solutions are designed to drive efficiency, 
              improve decision-making, and create new opportunities for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2"
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