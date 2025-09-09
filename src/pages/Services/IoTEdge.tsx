import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Zap, 
  Shield, 
  Database, 
  Network, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  MessageCircle,
  Globe,
  Server,
  BarChart3,
  Settings,
  Monitor,
  Cloud,
  HardDrive
} from 'lucide-react';

const IoTEdge: React.FC = () => {
  const services = [
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Deploy computing resources closer to data sources for real-time processing and reduced latency.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20'
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Comprehensive IoT connectivity solutions with secure device management and data collection.',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Process IoT data streams in real-time for instant insights and automated decision-making.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20'
    },
    {
      icon: Shield,
      title: 'IoT Security',
      description: 'End-to-end security for IoT devices, networks, and data with advanced threat protection.',
      color: 'text-red-400',
      bgColor: 'bg-red-600/20'
    }
  ];

  const solutions = [
    {
      title: 'Smart Cities',
      description: 'Transform urban infrastructure with IoT sensors and edge computing for better city management.',
      icon: Globe,
      features: ['Traffic monitoring', 'Environmental sensing', 'Smart lighting', 'Waste management']
    },
    {
      title: 'Industrial IoT',
      description: 'Optimize manufacturing and industrial processes with connected sensors and predictive analytics.',
      icon: Settings,
      features: ['Predictive maintenance', 'Quality control', 'Energy optimization', 'Asset tracking']
    },
    {
      title: 'Connected Healthcare',
      description: 'Enable remote patient monitoring and telemedicine with secure IoT medical devices.',
      icon: Monitor,
      features: ['Patient monitoring', 'Medical device integration', 'Health analytics', 'Remote care']
    },
    {
      title: 'Smart Agriculture',
      description: 'Improve crop yields and resource efficiency with precision agriculture IoT solutions.',
      icon: BarChart3,
      features: ['Soil monitoring', 'Climate control', 'Irrigation automation', 'Crop analytics']
    }
  ];

  const technologies = [
    'Edge Computing Platforms',
    'IoT Device Management',
    '5G & LPWAN Networks',
    'Real-time Data Processing',
    'Machine Learning at Edge',
    'Blockchain for IoT',
    'Digital Twin Technology',
    'Edge AI & Computer Vision'
  ];

  const benefits = [
    {
      title: 'Reduced Latency',
      description: 'Process data closer to the source for near-instant response times.',
      icon: Zap,
      metric: '90% faster'
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce bandwidth costs and cloud processing expenses.',
      icon: BarChart3,
      metric: '40% savings'
    },
    {
      title: 'Real-time Insights',
      description: 'Get instant analytics and automated responses to IoT events.',
      icon: Monitor,
      metric: 'Real-time'
    },
    {
      title: 'Scalability',
      description: 'Easily scale IoT deployments across thousands of devices.',
      icon: Server,
      metric: '10K+ devices'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'CTO, SmartCity Solutions',
      content: 'Zion Tech Group\'s IoT platform transformed our smart city initiative. We now have real-time insights across all city services.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Director, Industrial Corp',
      content: 'The edge computing solution reduced our processing latency by 90% and improved our predictive maintenance accuracy.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'VP Technology, HealthTech',
      content: 'Their IoT security framework gave us confidence to deploy connected medical devices safely and securely.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-600/20 rounded-full">
              <Cpu className="h-16 w-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IoT &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              {" "}Edge Computing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect, process, and analyze IoT data at the edge for real-time insights and automated actions. 
            Transform your business with intelligent edge computing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start IoT Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </a>
          </div>
        </motion.div>

        {/* Key Services */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IoT & Edge Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.bgColor} rounded-xl p-6 border border-slate-700`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <service.icon className={`h-8 w-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solutions */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <solution.icon className="h-8 w-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Advanced Technologies</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our IoT and edge computing platform leverages cutting-edge technologies 
                to deliver intelligent, scalable, and secure solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="bg-slate-700/50 rounded-lg p-4 text-center border border-slate-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
                >
                  <span className="text-gray-300 text-sm font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IoT Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <benefit.icon className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">IoT Architecture</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-full">
                    <Cpu className="h-12 w-12 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">1. IoT Devices</h3>
                <p className="text-gray-300 text-sm">
                  Sensors, actuators, and connected devices collecting and transmitting data
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-green-600/20 rounded-full">
                    <Network className="h-12 w-12 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">2. Edge Gateway</h3>
                <p className="text-gray-300 text-sm">
                  Local processing and data aggregation before transmission to cloud
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600/20 rounded-full">
                    <Cloud className="h-12 w-12 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">3. Cloud Platform</h3>
                <p className="text-gray-300 text-sm">
                  Centralized data storage, analytics, and device management
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-orange-600/20 rounded-full">
                    <BarChart3 className="h-12 w-12 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">4. Applications</h3>
                <p className="text-gray-300 text-sm">
                  Business applications and dashboards for insights and control
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-12 border border-green-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Go IoT?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business with intelligent IoT and edge computing solutions 
              from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Start Free Consultation
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                Schedule Demo
              </a>
              <a
                href="/contact"
                className="px-8 py-3 border border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" />
                Talk to IoT Expert
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default IoTEdge;