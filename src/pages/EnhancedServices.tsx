import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Code,
  Settings,
  Cloud,
  Lock,
  RefreshCw,
  Brain,
  Atom,
  Satellite,
  Wifi,
  Bluetooth,
  Smartphone,
  Monitor
} from 'lucide-react';
const EnhancedServices: React.FC = () => {
  const enhancedServices = [
    {
      id: 1,
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing for complex problem solving',
      icon: Atom,
      features: ['Quantum Algorithms', 'Error Correction', 'Hybrid Systems', 'Performance Optimization'],
      useCases: ['Research Institutions', 'Financial Services', 'Pharmaceuticals', 'Government Agencies'],
      pricing: 'Starting at $50,000',
      timeline: '6-12 months'
    },
    {
      id: 2,
      title: 'Edge Computing Platform',
      description: 'Distributed computing at the network edge for real-time processing',
      icon: Cpu,
      features: ['Edge Processing', 'IoT Integration', 'Real-time Analytics', 'Low Latency'],
      useCases: ['Smart Cities', 'Manufacturing', 'Healthcare', 'Autonomous Vehicles'],
      pricing: 'Starting at $35,000',
      timeline: '4-8 months'
    },
    {
      id: 3,
      title: 'Blockchain Solutions',
      description: 'Secure, decentralized blockchain infrastructure and applications',
      icon: Shield,
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Solutions', 'Supply Chain Tracking'],
      useCases: ['Financial Services', 'Supply Chain', 'Healthcare', 'Real Estate'],
      pricing: 'Starting at $40,000',
      timeline: '3-6 months'
    },
    {
      id: 4,
      title: 'IoT Integration Platform',
      description: 'Comprehensive Internet of Things connectivity and management',
      icon: Wifi,
      features: ['Device Management', 'Data Analytics', 'Security Protocols', 'Scalable Infrastructure'],
      useCases: ['Smart Homes', 'Industrial IoT', 'Healthcare Monitoring', 'Environmental Sensing'],
      pricing: 'Starting at $30,000',
      timeline: '2-4 months'
    }
  ];
  const advancedSolutions = [
    {
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analysis and predictive insights',
      benefits: ['Real-time Processing', 'Predictive Modeling', 'Automated Insights', 'Scalable Architecture']
    },
    {
      title: 'Cybersecurity Framework',
      description: 'Advanced threat detection and security automation',
      benefits: ['Threat Prevention', 'Zero-trust Security', 'Compliance Ready', '24/7 Monitoring']
    },
    {
      title: 'Digital Twin Technology',
      description: 'Virtual replicas for simulation and optimization',
      benefits: ['Real-time Simulation', 'Predictive Maintenance', 'Performance Optimization', 'Risk Assessment']
    },
    {
      title: '5G Network Solutions',
      description: 'Next-generation wireless infrastructure and applications',
      benefits: ['High-speed Connectivity', 'Low Latency', 'Massive IoT Support', 'Network Slicing']
    }
  ];
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning, neural networks, and cognitive computing'
    },
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Quantum algorithms and quantum-safe cryptography'
    },
    {
      icon: Satellite,
      title: 'Space Technology',
      description: 'Satellite communications and space-based solutions'
    },
    {
      icon: Cpu,
      title: 'Edge Computing',
      description: 'Distributed computing and real-time processing'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Zero-trust architecture and threat intelligence'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Microservices, containers, and serverless computing'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Zap className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                Enhanced <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Cutting-edge technology solutions that push the boundaries of innovation. 
                From quantum computing to edge AI, we deliver the future of technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Enhanced Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Enhanced Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Advanced technology services that redefine what's possible
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enhancedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Ideal For:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                    <span className="text-zion-slate-light text-sm">Timeline: {service.timeline}</span>
                  </div>
                  <Link 
                    to="/contact"
                    className="text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 inline" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Advanced Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Specialized solutions for complex technological challenges
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Technology Stack */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cutting-edge technologies that power our enhanced services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Our Enhanced Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Our Enhanced Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Innovation, expertise, and proven results in advanced technology
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Innovation Leaders', description: 'Pioneering cutting-edge technology solutions' },
              { icon: Rocket, title: 'Rapid Development', description: 'Fast prototyping and deployment' },
              { icon: Shield, title: 'Future-Proof', description: 'Built for tomorrow\'s challenges' },
              { icon: TrendingUp, title: 'Proven Results', description: 'Track record of successful implementations' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Innovate</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's explore how our enhanced services can transform your business
            </p>
            
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Rocket className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Innovation Lab</h3>
                  <p className="text-zion-slate-light mb-4">
                    Explore cutting-edge technology solutions
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Start Innovation
                  </Link>
                </div>
                
                <div className="text-center">
                  <Brain className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Expert Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Discuss advanced technology strategies
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default EnhancedServices;