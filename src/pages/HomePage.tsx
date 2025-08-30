import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Target, 
  TrendingUp,
  Users,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';
import { revolutionaryMicroSaasServices2030, revolutionaryITServices2030, revolutionaryAIServices2030 } from '../data/revolutionaryServices2030';

export function HomePage() {
  const featuredServices = [
    ...revolutionaryMicroSaasServices2030.slice(0, 3),
    ...revolutionaryITServices2030.slice(0, 2),
    ...revolutionaryAIServices2030.slice(0, 2)
  ];

  const stats = [
    { label: 'Years of Innovation', value: '15+', icon: Clock },
    { label: 'Global Clients', value: '500+', icon: Users },
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'ROI Average', value: '300%', icon: TrendingUp },
    { label: 'Awards Won', value: '25+', icon: Award }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations and decision-making processes.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Quantum Technology',
      description: 'Next-generation quantum computing solutions that provide unprecedented computational power and security.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined DevOps practices for modern application development.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security solutions protecting your digital assets with zero-trust architecture and AI threat detection.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services that modernize your business for the future.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Micro SaaS Platforms',
      description: 'Innovative software-as-a-service solutions designed for specific business needs and rapid deployment.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Revolutionary Technology Solutions & AI Services</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and micro SaaS solutions. Transform your business with our innovative technology services." />
        <meta name="keywords" content="AI services, quantum computing, cybersecurity, micro SaaS, digital transformation, IT services, technology solutions" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-futuristic-enhanced"></div>
        <div className="relative z-10 container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Revolutionary
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Technology Solutions
              </span>
              for Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge AI, quantum computing, cybersecurity, and micro SaaS solutions 
              that transform businesses and drive innovation across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <div className="w-6 h-6 bg-purple-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <div className="w-3 h-3 bg-emerald-400 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most innovative and transformative technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {service.category}
                  </span>
                  <span className="text-2xl font-bold text-white">${service.price.toLocaleString()}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 text-sm font-medium">{service.pricingModel}</span>
                  <button className="text-cyan-400 hover:text-white transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already leveraging our revolutionary technology solutions to gain competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}