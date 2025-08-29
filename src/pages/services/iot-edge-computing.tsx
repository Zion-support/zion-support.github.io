import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
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
  Satellite,
  Car
} from 'lucide-react';

const IoTEdgeComputing: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Real-time data processing at the edge for instant insights and actions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'IoT Connectivity',
      description: 'Seamless connectivity for thousands of IoT devices and sensors',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI at the Edge',
      description: 'Machine learning models running locally for privacy and speed',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Instant data analysis and decision making at the edge',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Edge Security',
      description: 'Advanced security protocols for edge devices and networks',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Local Storage',
      description: 'Intelligent data storage and management at the edge',
      color: 'from-indigo-500 to-blue-500'
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
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
                <Cpu className="w-4 h-4" />
                Edge Computing Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                IoT & Edge
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Computing
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Transform your operations with our revolutionary IoT and edge computing platform. From real-time data processing to AI-powered insights, we're bringing the future of connected systems to your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700">
                  <Cpu className="w-5 h-5" />
                  Edge Demo
                </button>
                <button className="btn-futuristic-outline">
                  <FileText className="w-5 h-5" />
                  Download Guide
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-green-500/20 rounded-2xl border border-blue-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Cpu className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">IoT Edge Computing</h3>
                    <p className="text-gray-300">Revolutionary Edge Solutions</p>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Revolutionary Edge Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT edge computing platform combines cutting-edge technology with real-time processing to deliver unprecedented performance and insights.
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose IoT Edge Computing?
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
            initial={{ opacity: 0, y: 30 }}
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Ready to revolutionize your operations with IoT and edge computing? Our team of experts is here to help you implement the future of connected systems.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Request IoT Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <input
                  type="text"
                  placeholder="Organization"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <textarea
                  placeholder="Tell us about your IoT and edge computing needs..."
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full btn-futuristic bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoTEdgeComputing;