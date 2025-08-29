import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Eye, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Cloud, 
  Monitor, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Settings,
  Users,
  Clock,
  Target,
  Lightbulb,
  Network,
  Building,
  Leaf,
  Brain
} from 'lucide-react';

export default function DigitalTwin() {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor physical assets and processes in real-time with digital replicas',
      benefits: ['Live data streaming', 'Instant alerts', 'Performance tracking', 'Predictive analytics']
    },
    {
      icon: Cpu,
      title: 'IoT Integration',
      description: 'Seamlessly integrate with IoT sensors and devices for comprehensive data collection',
      benefits: ['Sensor integration', 'Data aggregation', 'Edge computing', 'Real-time processing']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Leverage AI and machine learning for predictive insights and optimization',
      benefits: ['Predictive maintenance', 'Performance optimization', 'Anomaly detection', 'Trend analysis']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Secure digital twin implementations with enterprise-grade security measures',
      benefits: ['Data encryption', 'Access control', 'Threat detection', 'Compliance adherence']
    }
  ];

  const services = [
    {
      title: 'Digital Twin Development',
      description: 'Custom digital twin solutions tailored to your specific assets and processes',
      icon: Cpu,
      price: 'From $50,000'
    },
    {
      title: 'IoT Infrastructure Setup',
      description: 'Complete IoT infrastructure for data collection and real-time monitoring',
      icon: Network,
      price: 'From $30,000'
    },
    {
      title: 'Analytics Platform',
      description: 'Advanced analytics and visualization platform for digital twin data',
      icon: BarChart3,
      price: 'From $25,000'
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration with existing systems and third-party platforms',
      icon: Code,
      price: 'From $20,000'
    }
  ];

  const industries = [
    { name: 'Manufacturing', icon: Cpu, color: 'from-blue-500 to-cyan-600', description: 'Production line optimization' },
    { name: 'Healthcare', icon: Users, color: 'from-green-600 to-emerald-600', description: 'Patient monitoring systems' },
    { name: 'Energy', icon: Zap, color: 'from-yellow-500 to-orange-600', description: 'Grid management & optimization' },
    { name: 'Transportation', icon: Globe, color: 'from-purple-600 to-pink-600', description: 'Fleet & infrastructure monitoring' },
    { name: 'Smart Cities', icon: Building, color: 'from-indigo-600 to-blue-600', description: 'Urban infrastructure management' },
    { name: 'Agriculture', icon: Leaf, color: 'from-green-500 to-lime-600', description: 'Precision farming solutions' }
  ];

  const technologies = [
    { name: 'IoT Sensors', icon: Network, color: 'from-blue-500 to-cyan-500' },
    { name: 'Edge Computing', icon: Cpu, color: 'from-green-600 to-emerald-600' },
    { name: 'Cloud Platforms', icon: Cloud, color: 'from-purple-600 to-pink-600' },
    { name: 'AI/ML', icon: Brain, color: 'from-indigo-600 to-purple-600' },
    { name: 'Data Analytics', icon: BarChart3, color: 'from-orange-500 to-red-600' },
    { name: '3D Visualization', icon: Eye, color: 'from-cyan-500 to-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Digital Twin Services - Zion Tech Group"
        description="Transform your physical assets into intelligent digital replicas with our comprehensive Digital Twin services. Monitor, analyze, and optimize in real-time."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-400/20 to-pink-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Digital Twin Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Bridge the
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Physical-Digital</span>
              <span className="block">Divide</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Create intelligent digital replicas of your physical assets and processes. 
              Monitor, analyze, and optimize in real-time with cutting-edge Digital Twin technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Get Started</span>
              </button>
              <button className="border border-purple-400/30 text-purple-400 hover:bg-purple-400/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Digital Twin Technology?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Digital Twins provide unprecedented visibility into your physical assets, 
              enabling predictive maintenance, optimization, and informed decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Digital Twin Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From initial concept to full implementation, we provide comprehensive 
              Digital Twin solutions that transform your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                    <div className="text-sm text-slate-400">Starting price</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <button className="w-full bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Digital Twin technology is transforming industries across the globe. 
              Discover how we can help your sector leverage this revolutionary technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, 
              and intelligent Digital Twin solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how Digital Twin technology can transform your business 
              operations and provide unprecedented insights into your assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-purple-400/30 text-purple-400 hover:bg-purple-400/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}