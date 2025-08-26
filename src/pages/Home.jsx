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
  Network, 
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
  PanelLeft, 
  Sparkles, 
  Star, 
  Crown, 
  Award, 
  Eye, 
  Handshake, 
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Play,
  ExternalLink,
  Vr,
  Atom,
  Dna,
  Microscope,
  Telescope,
  Car,
  Robot,
  Gamepad2,
  Leaf,
  Wind,
  Sun,
  Battery,
  Zap as ZapIcon
} from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      icon: Brain,
      title: "AI & Analytics",
      description: "Advanced AI-powered business intelligence and analytics solutions",
      color: "from-zion-cyan to-zion-purple",
      href: "/services/ai-analytics"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security and threat detection systems",
      color: "from-zion-purple to-zion-red",
      href: "/services/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services",
      color: "from-zion-blue to-zion-cyan",
      href: "/services/cloud-devops"
    },
    {
      icon: Rocket,
      title: "Quantum Computing",
      description: "Next-generation quantum computing services",
      color: "from-zion-purple to-zion-cyan",
      href: "/services/quantum-computing"
    },
    {
      icon: Lock,
      title: "Blockchain",
      description: "Blockchain and Web3 development solutions",
      color: "from-zion-orange to-zion-purple",
      href: "/services/blockchain"
    },
    {
      icon: Globe,
      title: "Digital Twin",
      description: "Digital twin and simulation platforms",
      color: "from-zion-blue to-zion-purple",
      href: "/services/digital-twin"
    }
  ];

  const emergingTechnologies = [
    {
      icon: Vr,
      title: "Metaverse & VR",
      description: "Immersive virtual worlds and experiences",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      icon: Brain,
      title: "Brain-Computer Interface",
      description: "Revolutionary human-computer interaction",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      icon: Dna,
      title: "Biotechnology",
      description: "Genetic engineering and synthetic biology",
      color: "from-zion-green to-zion-cyan"
    },
    {
      icon: Telescope,
      title: "Space Technology",
      description: "Satellite data and space exploration",
      color: "from-zion-blue to-zion-purple"
    },
    {
      icon: Network,
      title: "Quantum Internet",
      description: "Ultra-secure quantum communication",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      icon: Sparkles,
      title: "Advanced Materials",
      description: "AI-powered material discovery",
      color: "from-zion-orange to-zion-yellow"
    }
  ];

  const stats = [
    { number: "500+", label: "Services Available", icon: Zap },
    { number: "50+", label: "Technology Categories", icon: Code },
    { number: "1000+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-zion-cyan rounded-full opacity-20"
                animate={{
                  x: [0, Math.random() * 100],
                  y: [0, Math.random() * 100],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
              Transform your business with next-generation technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/innovative-services-2027">
                  <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Explore Services
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/comprehensive-pricing">
                  <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-200">
                    View Pricing
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                  <div className="text-zion-slate-light text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Featured Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of cutting-edge technology services designed to drive innovation and growth.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Link to={service.href}>
                  <div className="bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/innovative-services-2027">
              <button className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-200">
                View All Services
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Stay ahead of the curve with our cutting-edge emerging technology solutions and research.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergingTechnologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-lg p-4 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-3`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-zion-slate-light text-sm">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Innovation First",
                description: "We're always exploring the latest technologies and pushing the boundaries of what's possible."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security measures to protect your data and systems."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Our team consists of industry experts with decades of combined experience."
              },
              {
                icon: Zap,
                title: "Fast Implementation",
                description: "Rapid deployment and quick time-to-value for your business."
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients worldwide with localized support and solutions."
              },
              {
                icon: Heart,
                title: "Customer Success",
                description: "Your success is our priority with dedicated support and guidance."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your technology needs and discover how our innovative services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:+13024640950">
                  <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-all duration-200 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call +1 302 464 0950
                  </button>
                </a>
              </motion.div>
            </div>
            
            <div className="mt-8 text-white/80 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
