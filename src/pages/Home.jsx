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
  Star,
  Globe,
  Lock,
  Rocket,
  Target,
  Award,
  Clock,
  DollarSign
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

  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and insights",
      color: "from-purple-500 to-pink-500",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions with zero-trust architecture and threat protection",
      color: "from-red-500 to-orange-500",
      features: ["Threat Intelligence", "Incident Response", "Compliance Management", "Security Automation"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and DevOps automation for modern businesses",
      color: "from-blue-500 to-cyan-500",
      features: ["Multi-Cloud Management", "DevOps Automation", "Container Orchestration", "Serverless Architecture"]
    },
    {
      icon: Zap,
      title: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problem-solving",
      color: "from-indigo-500 to-purple-500",
      features: ["Quantum Algorithms", "Hybrid Systems", "Optimization Problems", "Financial Modeling"]
    },
    {
      icon: Lock,
      title: "Blockchain & Web3",
      description: "Decentralized solutions for secure and transparent operations",
      color: "from-green-500 to-emerald-500",
      features: ["Smart Contracts", "DeFi Platforms", "NFT Solutions", "Identity Management"]
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting and implementation",
      color: "from-yellow-500 to-orange-500",
      features: ["Process Automation", "Change Management", "Technology Strategy", "Legacy Modernization"]
    }
  ];

  const stats = [
    { value: "500+", label: "Global Clients", icon: Globe },
    { value: "25+", label: "Countries", icon: Globe },
    { value: "1000+", label: "Projects", icon: Target },
    { value: "99.9%", label: "Uptime", icon: Award },
    { value: "24/7", label: "Support", icon: Clock },
    { value: "200%+", label: "ROI Average", icon: DollarSign }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our infrastructure with AI-powered automation. We've seen a 300% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "Their quantum computing solutions helped us solve problems we thought were impossible. Game-changing technology.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director, BioTech Solutions",
      content: "The AI diagnostic platform has improved our accuracy by 40% and reduced diagnosis time significantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-purple-light rounded-full animate-pulse delay-1500"></div>
        </div>
        
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
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-zion-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">500+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-zion-cyan" />
                <span className="text-sm">15+ Years Experience</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Consultation
                  <TrendingUp className="w-5 h-5" />
                </motion.button>
              </Link>
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
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="text-zion-slate-dark">Choose</span> Zion Tech Group?
            </h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Proven results and measurable impact across industries worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-cyan-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real results from real businesses across the globe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zion-cyan">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can drive your success and create measurable impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
