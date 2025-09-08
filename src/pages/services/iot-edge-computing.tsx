import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  Zap,
  Target,
  Users,
  BarChart3,
  Brain,
  Shield,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Lock,
  Cpu,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Home
} from 'lucide-react';

export function IoTEdegComputingPage() {
  const iotServices = [
    {
      title: 'IoT Platform Development',
      description: 'Build scalable IoT platforms for device management and data collection',
      icon: Network,
      href: '/services/iot-platform',
      features: ['Device Management', 'Data Collection', 'Real-time Monitoring', 'Scalable Architecture'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Process data at the edge for faster response times and reduced latency',
      icon: Cpu,
      href: '/services/edge-computing',
      features: ['Local Processing', 'Reduced Latency', 'Bandwidth Optimization', 'Real-time Analytics'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Smart City Solutions',
      description: 'Transform urban infrastructure with IoT and edge computing',
      icon: Building,
      href: '/services/smart-city',
      features: ['Traffic Management', 'Environmental Monitoring', 'Public Safety', 'Energy Optimization'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Industrial IoT (IIoT)',
      description: 'Optimize industrial processes with connected sensors and analytics',
      icon: Activity,
      href: '/services/industrial-iot',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Safety Monitoring'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Connected Healthcare',
      description: 'IoT solutions for remote patient monitoring and healthcare management',
      icon: Heart,
      href: '/services/connected-healthcare',
      features: ['Patient Monitoring', 'Medical Device Integration', 'Health Analytics', 'Remote Care'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Smart Home & Building',
      description: 'Automate and optimize residential and commercial buildings',
      icon: Home,
      href: '/services/smart-building',
      features: ['Energy Management', 'Security Systems', 'Climate Control', 'Occupancy Analytics'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const iotCapabilities = [
    {
      title: 'Device Connectivity',
      description: 'Connect and manage diverse IoT devices and sensors',
      icon: Wifi,
      features: ['Protocol Support', 'Device Onboarding', 'Firmware Updates', 'Security Management']
    },
    {
      title: 'Data Processing',
      description: 'Process and analyze IoT data at scale',
      icon: Server,
      features: ['Stream Processing', 'Data Analytics', 'Machine Learning', 'Real-time Insights']
    },
    {
      title: 'Edge Intelligence',
      description: 'Deploy AI and ML models at the edge',
      icon: Brain,
      features: ['Local Inference', 'Model Optimization', 'Edge Training', 'Intelligent Automation']
    },
    {
      title: 'Security & Privacy',
      description: 'Ensure IoT security and data privacy',
      icon: Shield,
      features: ['Device Authentication', 'Data Encryption', 'Access Control', 'Privacy Compliance']
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Activity, description: 'Smart factories and production optimization' },
    { name: 'Healthcare', icon: Heart, description: 'Connected medical devices and patient care' },
    { name: 'Transportation', icon: Rocket, description: 'Connected vehicles and smart logistics' },
    { name: 'Energy', icon: Zap, description: 'Smart grid and renewable energy management' },
    { name: 'Agriculture', icon: Globe, description: 'Precision farming and crop monitoring' },
    { name: 'Retail', icon: Users, description: 'Smart retail and inventory management' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 rounded-full mb-6">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">IoT & Edge Computing</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
              IoT & Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Connect the physical world to the digital realm with our IoT and edge computing solutions. 
              Process data closer to the source for faster insights and intelligent automation across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Connected</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IoT Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive IoT and edge computing platform provides the foundation 
              for connected, intelligent systems across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {iotCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">IoT & Edge Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of IoT and edge computing services 
              designed to transform industries and enable smart, connected solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1"
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

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Transform</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our IoT and edge computing solutions are revolutionizing industries 
              by enabling smart, connected, and intelligent operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Computing Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of Edge Computing
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Edge computing delivers significant advantages for IoT deployments, 
            enabling faster response times and improved efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Reduced Latency</h3>
              <p className="text-green-100">Process data closer to the source for faster response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bandwidth Optimization</h3>
              <p className="text-green-100">Reduce data transmission and network congestion</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
              <p className="text-green-100">Local data processing and reduced exposure</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Explore IoT Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect Your World?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Transform your operations with IoT and edge computing. Our experts are ready 
            to help you build connected, intelligent systems that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start IoT Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IoTEdegComputingPage;