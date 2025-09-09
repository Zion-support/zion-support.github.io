import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  BarChart3, 
  FileImage, 
  TrendingUp, 
  MessageCircle, 
  Video, 
  FileText, 
  Heart, 
  Building,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-futuristic overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Floating Geometric Shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-zion-cyan rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-zion-purple rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-zion-cyan rounded-full"
          animate={{ y: [0, -25, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-zion-cyan/10 border border-zion-cyan/30 rounded-full px-6 py-3 mb-8">
              <Star className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan text-sm font-medium">Leading AI & Tech Innovation 2025</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Pioneering the future with cutting-edge AI solutions, quantum technology, blockchain integration, 
            and innovative IT services that transform businesses and drive digital transformation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/comprehensive-services">
              <motion.button 
                className="group relative px-10 py-5 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg overflow-hidden shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </Link>
            
            <Link to="/comprehensive-pricing">
              <motion.button 
                className="group px-10 py-5 border-2 border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  View Pricing
                </span>
                <div className="absolute inset-0 bg-zion-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
              <div className="text-zion-slate-light text-sm">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">1000+</div>
              <div className="text-zion-slate-light text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-zion-slate-light text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">24/7</div>
              <div className="text-zion-slate-light text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-24 bg-zion-slate-dark relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our revolutionary AI-powered solutions that are reshaping industries and driving the future of technology.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Quantum AI */}
            <motion.div 
              className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple-dark/50 p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                Quantum AI Platform
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Revolutionary quantum computing integration with AI for solving complex optimization problems 1000x faster.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-cyan font-semibold">From $8,500/month</span>
                <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Autonomous Business */}
            <motion.div 
              className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-cyan-dark/50 p-8 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-purple transition-colors">
                Autonomous Business Ops
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Fully autonomous business operations platform with AI-driven decision making and optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-purple font-semibold">From $3,500/month</span>
                <ArrowRight className="w-5 h-5 text-zion-purple group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Blockchain AI */}
            <motion.div 
              className="group relative bg-gradient-to-br from-zion-purple-dark/50 to-zion-cyan-dark/50 p-8 rounded-2xl border border-zion-blue/20 hover:border-zion-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-blue/20"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-cyan rounded-full flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-blue transition-colors">
                Blockchain AI Integration
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Secure, transparent, and intelligent decentralized applications powered by AI and blockchain.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-blue font-semibold">From $4,200/month</span>
                <ArrowRight className="w-5 h-5 text-zion-blue group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Cybersecurity */}
            <motion.div 
              className="group relative bg-gradient-to-br from-zion-cyan-dark/50 to-zion-blue-dark/50 p-8 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-blue rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-purple transition-colors">
                AI Cybersecurity Defense
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Next-generation threat detection and response using advanced AI algorithms and machine learning.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-purple font-semibold">From $2,800/month</span>
                <ArrowRight className="w-5 h-5 text-zion-purple group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* IoT Edge Computing */}
            <motion.div 
              className="group relative bg-gradient-to-br from-zion-blue-dark/50 to-zion-purple-dark/50 p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                IoT Edge AI Computing
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Real-time intelligent decision making at the edge with AI-powered IoT devices and networks.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-cyan font-semibold">From $3,200/month</span>
                <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Digital Twin */}
            <motion.div 
              className="group relative bg-gradient-to-br from-zion-purple-dark/50 to-zion-cyan-dark/50 p-8 rounded-2xl border border-zion-blue/20 hover:border-zion-blue/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-blue/20"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-cyan rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-blue transition-colors">
                AI Digital Twin Platform
              </h3>
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                Virtual replicas of physical systems for simulation, monitoring, and optimization using AI.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-zion-blue font-semibold">From $4,500/month</span>
                <ArrowRight className="w-5 h-5 text-zion-blue group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/comprehensive-services">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All 500+ Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-zion-blue-dark to-zion-slate-dark relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business transformation.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI-First Approach</h3>
              <p className="text-zion-slate-light">Leading-edge AI technology integrated into every solution we deliver.</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance standards for all our solutions.</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-zion-slate-light">World-class engineers and AI specialists with decades of experience.</p>
            </motion.div>

            <motion.div 
              className="text-center group"
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-zion-slate-light">Track record of delivering measurable business impact and ROI.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies already leveraging our AI-powered solutions to drive innovation, 
              increase efficiency, and achieve competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link to="/contact">
                <motion.button 
                  className="px-10 py-5 bg-white text-zion-blue rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">+1 302 464 0950</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-white/80 text-sm">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-white/80 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Website</h3>
                <p className="text-white/80 text-sm">https://ziontechgroup.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
