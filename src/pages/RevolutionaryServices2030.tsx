import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  DollarSign,
  BarChart3,
  Lock,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  Database,
  Lightbulb,
  Target,
  TrendingUp,
  Atom,
  Cpu,
  Shield,
  Eye,
  Heart,
  Star,
  Infinity,
  Sparkles,
  Flame,
  Crown
} from 'lucide-react';

const RevolutionaryServices2030: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Quantum AI Trading Platform',
      description: 'Next-generation AI-powered trading with quantum computing capabilities for unprecedented market analysis.',
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      icon: Eye,
      title: 'Neural Interface Platform',
      description: 'Brain-computer interface technology for seamless human-AI interaction and control.',
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      icon: Globe,
      title: 'Holographic Workspace Platform',
      description: '3D holographic environments for immersive collaboration and virtual workspaces.',
      color: 'from-green-500 to-emerald-500',
      featured: true
    },
    {
      icon: Heart,
      title: 'BioDigital Twin Platform',
      description: 'Digital replicas of biological systems for personalized medicine and health optimization.',
      color: 'from-red-500 to-pink-500',
      featured: true
    },
    {
      icon: Rocket,
      title: 'Space Debris Tracking System',
      description: 'AI-powered satellite and debris monitoring for space safety and collision prevention.',
      color: 'from-indigo-500 to-purple-500',
      featured: true
    },
    {
      icon: Shield,
      title: 'AI Ethics Guardian Platform',
      description: 'Automated ethical decision-making and bias detection for responsible AI deployment.',
      color: 'from-yellow-500 to-orange-500',
      featured: true
    },
    {
      icon: Sparkles,
      title: 'Metaverse Builder Platform',
      description: 'Complete metaverse creation and management tools for virtual worlds and experiences.',
      color: 'from-pink-500 to-rose-500',
      featured: true
    },
    {
      icon: Cpu,
      title: 'AI Autonomous Operations',
      description: 'Fully autonomous business operations with self-optimizing AI systems.',
      color: 'from-cyan-500 to-blue-500',
      featured: true
    }
  ];

  const benefits = [
    'Future-proof your business with 2030 technology',
    'Gain competitive advantage with cutting-edge AI',
    'Reduce operational costs by 80%',
    'Improve efficiency and productivity',
    'Enable new business models and revenue streams',
    'Stay ahead of technological disruption'
  ];

  const features = [
    {
      icon: Atom,
      title: 'Quantum Computing',
      description: 'Leverage quantum computing for complex problem-solving and optimization.'
    },
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'Next-generation AI with enhanced learning and decision-making capabilities.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Quantum-resistant encryption and advanced cybersecurity measures.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant processing and analysis with minimal latency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Future Technology Solutions
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Services 2030</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of technology with our revolutionary 2030 services. 
              From quantum AI to neural interfaces, we're building tomorrow's solutions today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Future Tech
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary 2030 Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover cutting-edge technologies that will define the next decade of innovation 
              and transform how we live and work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-purple-500/20' : ''
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
                {service.featured && (
                  <div className="mt-4 inline-flex items-center px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
              Revolutionary Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 2030 services incorporate the most advanced technologies available, 
              providing unprecedented capabilities and performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Revolutionary 2030 Services?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Stay ahead of the competition with cutting-edge technology that will define 
                the future of business and innovation.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">2030 Performance Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-purple-400 font-bold">1000x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Accuracy</span>
                  <span className="text-green-400 font-bold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Cost Efficiency</span>
                  <span className="text-pink-400 font-bold">80% Reduction</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Future-Proof</span>
                  <span className="text-cyan-400 font-bold">2030+ Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the pioneers who are already leveraging 2030 technology to transform 
              their businesses and create the future today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Future Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Sales
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionaryServices2030;