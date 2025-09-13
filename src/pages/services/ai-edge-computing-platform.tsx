import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Zap, 
  Shield, 
  Network, 
  Database, 
  Cloud, 
  Lock, 
  Globe, 
  Smartphone, 
  Server, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Monitor,
  BarChart3,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Circuit,
  Binary,
  Hexagon,
  Cube,
  Pyramid,
  Sphere,
  Infinity,
  Rocket,
  Satellite,
  Telescope,
  Microscope,
  Flask,
  Beaker,
  TestTube,
  Microchip,
  Motherboard,
  HardDrive,
  Memory,
  Processor,
  Wifi,
  Signal,
  Antenna,
  Router,
  Switch,
  Hub,
  Gateway,
  Firewall,
  LoadBalancer,
  Cache,
  Storage,
  Backup,
  Recovery,
  Scalability,
  Performance,
  Latency,
  Throughput,
  Bandwidth,
  Reliability,
  Availability,
  Security,
  Compliance
} from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Real-time AI inference at the edge for instant decision making"
    },
    {
      icon: Network,
      title: "5G Integration",
      description: "Seamless integration with 5G networks for ultra-low latency"
    },
    {
      icon: Brain,
      title: "Distributed Intelligence",
      description: "AI models distributed across edge nodes for optimal performance"
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols for edge device protection"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Sub-millisecond response times for critical applications"
    },
    {
      icon: Database,
      title: "Edge Data Management",
      description: "Intelligent data processing and storage at the edge"
    }
  ];

  const benefits = [
    "Reduce latency by up to 90%",
    "Lower bandwidth costs by 60%",
    "Improve reliability with local processing",
    "Enable real-time AI applications",
    "Scale edge infrastructure automatically",
    "Enhanced privacy with local data processing"
  ];

  const useCases = [
    {
      title: "Autonomous Vehicles",
      description: "Real-time decision making for self-driving cars and drones"
    },
    {
      title: "Smart Cities",
      description: "Intelligent infrastructure monitoring and management"
    },
    {
      title: "Industrial IoT",
      description: "Predictive maintenance and quality control in manufacturing"
    },
    {
      title: "Healthcare",
      description: "Real-time patient monitoring and emergency response"
    }
  ];

  const edgeAdvantages = [
    {
      icon: Latency,
      title: "Ultra-Low Latency",
      description: "Response times under 10ms for critical applications"
    },
    {
      icon: Bandwidth,
      title: "Bandwidth Optimization",
      description: "Reduce network traffic with local processing"
    },
    {
      icon: Reliability,
      title: "High Reliability",
      description: "Local processing ensures continuous operation"
    },
    {
      icon: Security,
      title: "Enhanced Security",
      description: "Data stays local, reducing exposure risks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                <Cpu className="w-4 h-4 mr-2" />
                AI Edge Computing Platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI at the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Edge</span>
                <br />of Innovation
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Bring artificial intelligence to the edge of your network. Our platform 
                delivers real-time AI processing with ultra-low latency, enabling 
                next-generation applications that were once impossible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <span>Explore Platform</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border border-green-500/30 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge AI Processing Power
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines the power of artificial intelligence with edge computing 
              to deliver unprecedented performance and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Advantages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge Computing Advantages
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Move processing closer to data sources to achieve unprecedented 
              performance and efficiency improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Network Performance
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our edge computing platform delivers measurable improvements across 
                all aspects of network performance and application responsiveness.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                    <div className="text-sm text-gray-400">Latency Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
                    <div className="text-sm text-gray-400">Bandwidth Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;10ms</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From autonomous vehicles to smart cities, our edge computing platform 
              enables next-generation applications across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circuit className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Edge Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built on the latest advancements in edge computing, AI, and networking 
              to deliver exceptional performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, name: "Edge Processors", color: "text-green-400" },
              { icon: Brain, name: "AI Models", color: "text-blue-400" },
              { icon: Network, name: "5G Networks", color: "text-purple-400" },
              { icon: Shield, name: "Edge Security", color: "text-cyan-400" },
              { icon: Database, name: "Edge Databases", color: "text-orange-400" },
              { icon: Wifi, name: "Wireless Tech", color: "text-pink-400" },
              { icon: Server, name: "Edge Servers", color: "text-indigo-400" },
              { icon: Lock, name: "Zero Trust", color: "text-red-400" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-700/50">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <h3 className={`text-sm font-medium ${tech.color}`}>
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of AI at the edge. Get started today and unlock 
              the potential of real-time, intelligent applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-green-500/30 text-green-400 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Zion Tech Group</h3>
              <p className="text-gray-400 text-sm">
                Leading the edge computing revolution with AI-powered solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Services</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>AI Edge Computing Platform</div>
                <div>Edge AI Solutions</div>
                <div>5G Integration</div>
                <div>IoT Edge Services</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Edge Documentation</div>
                <div>API Reference</div>
                <div>Support Center</div>
                <div>Case Studies</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}