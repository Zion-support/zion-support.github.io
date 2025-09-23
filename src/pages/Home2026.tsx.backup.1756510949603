import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Heart, 
  Users, 
  BarChart3,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Code,
  Database,
  Network,
  Lock,
  Eye,
  Zap as Lightning,
  Palette,
  Layers,
  Cpu as Chip,
  Wifi,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Speaker,
  Headphones,
  Keyboard,
  Mouse,
  Gamepad,
  Controller,
  Joystick,
  Wheel,
  Pedal,
  Gear,
  Cog,
  Settings,
  Tool,
  Wrench,
  Screwdriver,
  Hammer,
  Saw,
  Drill,
  Welder,
  Crane,
  Forklift,
  Tractor,
  Car,
  Truck,
  Bus,
  Train,
  Plane,
  Helicopter,
  Ship,
  Submarine,
  Rocket as SpaceRocket,
  Satellite,
  Telescope,
  Microscope,
  Beaker,
  Flask,
  TestTube,
  PetriDish,
  Syringe,
  Pill,
  Stethoscope,
  Heartbeat,
  Pulse,
  Thermometer,
  Scale,
  Calculator,
  Abacus,
  Ruler,
  Compass,
  Protractor,
  Triangle,
  Square,
  Circle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Star as StarShape,
  Moon,
  Sun,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2026 } from '../data/innovativeMicroSaasServices2026';

const Home2026: React.FC = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const featuredServices = INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.innovationLevel === 'Revolutionary').slice(0, 6);
  
  const serviceCategories = [
    {
      title: "AI & Analytics",
      icon: Brain,
      description: "Revolutionary AI-powered business intelligence and analytics platforms",
      color: "from-cyan-500 to-blue-600",
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category === 'AI & Analytics').length
    },
    {
      title: "Quantum Computing",
      icon: Zap,
      description: "Next-generation quantum computing solutions for complex problems",
      color: "from-purple-500 to-pink-600",
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category === 'Quantum Computing').length
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "AI-powered cybersecurity with zero false positives",
      color: "from-red-500 to-orange-600",
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category === 'Cybersecurity').length
    },
    {
      title: "IoT & Edge",
      icon: Cpu,
      description: "Real-time edge computing and IoT solutions",
      color: "from-green-500 to-emerald-600",
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category === 'IoT & Edge Computing').length
    },
    {
      title: "Digital Twin",
      icon: Rocket,
      description: "3D digital twin platforms for asset optimization",
      color: "from-yellow-500 to-amber-600",
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category === 'Digital Twin').length
    },
    {
      title: "Sustainability",
      icon: Heart,
      description: "Green technology and ESG compliance solutions",
      color: "from-teal-500 to-cyan-600",
      services: INNOVATIVE_MICRO_SAAS_SERVICES_2026.filter(s => s.category === 'Sustainability').length
    }
  ];

  const stats = [
    { label: "Services Available", value: INNOVATIVE_MICRO_SAAS_SERVICES_2026.length, icon: BarChart3 },
    { label: "Innovation Level", value: "Revolutionary", icon: Star },
    { label: "Success Rate", value: "99.9%", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Heart }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredServices.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <SEO 
        title="Zion Tech Group - Revolutionary AI, Quantum Computing & Micro SaaS Solutions 2026" 
        description="Transform your business with cutting-edge AI, Quantum Computing, Cybersecurity, IoT, and Micro SaaS solutions. Leading the future of technology innovation." 
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyan-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {[Brain, Zap, Shield, Cloud, Cpu, Rocket, Heart, Users][i % 8] && 
                React.createElement([Brain, Zap, Shield, Cloud, Cpu, Rocket, Heart, Users][i % 8], { size: 24 })
              }
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo and Company Name */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl mb-6 shadow-2xl shadow-cyan-400/30">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Zion Tech Group
              </h1>
              <p className="text-2xl sm:text-3xl text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
                Revolutionizing the future with cutting-edge AI, Quantum Computing, and Micro SaaS solutions
              </p>
            </div>

            {/* Innovation Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-cyan-400/30 backdrop-blur">
                <Brain className="w-6 h-6 text-cyan-400" />
                <span className="font-semibold">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-purple-400/30 backdrop-blur">
                <Zap className="w-6 h-6 text-purple-400" />
                <span className="font-semibold">Quantum-Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-blue-400/30 backdrop-blur">
                <Shield className="w-6 h-6 text-blue-400" />
                <span className="font-semibold">Enterprise-Grade</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-green-400/30 backdrop-blur">
                <Rocket className="w-6 h-6 text-green-400" />
                <span className="font-semibold">Future-Focused</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <Link
                to="/services2026"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Explore Services
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400/40 text-cyan-300 font-bold text-lg rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Revolutionary Service Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of cutting-edge solutions designed to transform industries and drive innovation
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur border border-slate-700/50 hover:border-cyan-400/40 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">
                    {category.services} Services
                  </span>
                  
                  <Link
                    to="/services2026"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:underline"
                  >
                    Explore
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Carousel */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Revolutionary Services
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most innovative and cutting-edge solutions that are reshaping industries
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur border border-cyan-400/30 hover:border-cyan-400/60 rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 ${
                    index === currentServiceIndex ? 'ring-2 ring-cyan-400/50' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xs uppercase tracking-wide text-cyan-300/80 font-semibold">
                      {service.category}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-medium">Revolutionary</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Market Price:</span>
                      <span className="text-cyan-300 font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Delivery:</span>
                      <span className="text-blue-300 font-semibold">{service.estimatedDelivery}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:underline"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="text-xs text-slate-500">
                      ID: {service.id}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-gradient-to-r from-slate-900/50 to-slate-800/50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're not just a technology company – we're your innovation partner for the future
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Star,
                title: "Revolutionary Innovation",
                description: "Leading the charge with cutting-edge AI, quantum computing, and next-generation technologies that don't exist anywhere else.",
                color: "from-yellow-500 to-orange-600"
              },
              {
                icon: Award,
                title: "Proven Excellence",
                description: "Track record of delivering transformative solutions with 99.9% success rate and 98% client satisfaction.",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: Target,
                title: "Future-Focused",
                description: "We don't just solve today's problems – we anticipate tomorrow's challenges and build solutions for the future.",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "World-class engineers, scientists, and innovators with deep expertise in AI, quantum computing, and emerging technologies.",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: Globe,
                title: "Global Impact",
                description: "Our solutions are transforming industries worldwide, from healthcare to finance, manufacturing to sustainability.",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: TrendingUp,
                title: "Continuous Growth",
                description: "We never stop innovating. Our R&D team is constantly pushing the boundaries of what's possible.",
                color: "from-red-500 to-pink-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Join the revolution and discover how our cutting-edge solutions can propel your organization into the future
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <Link
                to="/services2026"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl shadow-cyan-500/30"
              >
                Explore All Services
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400/40 text-cyan-300 font-bold text-lg rounded-2xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Call Us</h4>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    +1 302 464 0950
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Email Us</h4>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Visit Our Site</h4>
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-sm">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home2026;