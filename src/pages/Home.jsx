import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  Code, 
  Lock, 
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Award
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for content generation, voice cloning, 3D modeling, and intelligent automation.",
      color: "from-purple-500 to-pink-500",
      link: "/services?category=ai-ml"
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Access to cutting-edge quantum computing resources for complex simulations and optimization problems.",
      color: "from-blue-500 to-cyan-500",
      link: "/services?category=quantum"
    },
    {
      icon: Lock,
      title: "Blockchain & Web3",
      description: "Smart contract security audits, DeFi solutions, and blockchain infrastructure development.",
      color: "from-green-500 to-emerald-500",
      link: "/services?category=blockchain"
    },
    {
      icon: Cloud,
      title: "IoT & Edge Computing",
      description: "Comprehensive IoT device management, real-time monitoring, and edge computing solutions.",
      color: "from-orange-500 to-red-500",
      link: "/services?category=iot"
    },
    {
      icon: Users,
      title: "AR/VR Development",
      description: "Custom augmented and virtual reality applications for enterprise, education, and entertainment.",
      color: "from-indigo-500 to-purple-500",
      link: "/services?category=ar-vr"
    },
    {
      icon: Database,
      title: "FinTech Solutions",
      description: "AI-powered trading bots, risk management, and financial technology innovations.",
      color: "from-yellow-500 to-orange-500",
      link: "/services?category=fintech"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models", icon: Brain },
    { number: "50+", label: "Services", icon: Code },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime", icon: Shield }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Their quantum computing platform gave us a competitive edge in research and development.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security, SecureNet",
      content: "Outstanding cybersecurity services. Their AI threat detection is truly cutting-edge.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section with Futuristic Design */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-zion-cyan/10 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-zion-purple/15 rounded-full animate-bounce-slow"></div>
          
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 opacity-5">
            <div className="matrix-rain"></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent animate-neon-text-glow">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with cutting-edge AI solutions, quantum technology, blockchain, and innovative IT services. 
              Transform your business with our revolutionary micro SAAS solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-2xl shadow-zion-cyan/25 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <Rocket className="w-6 h-6" />
                    <span>Get Started Today</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all shadow-lg shadow-zion-cyan/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-zion-cyan" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-zion-purple" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-zion-blue" />
                <span>Global Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-blue-dark/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Tech Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive suite of cutting-edge technology services designed to propel your business into the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-8 hover:border-zion-cyan/40 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zion-slate-light mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <button className="flex items-center space-x-2 text-zion-cyan hover:text-zion-purple transition-colors group">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-zion-cyan/25">
                <span className="flex items-center space-x-3">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join thousands of satisfied clients who have transformed their businesses with our innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-zion-cyan/20 p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-slate-light">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full animate-pulse-slow"></div>
        </div>
        
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
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Join the future of technology with Zion Tech Group. Our innovative solutions are designed to give you a competitive edge in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <Rocket className="w-5 h-5" />
                    <span>Contact Us Today</span>
                  </span>
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-zion-blue transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-3">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
