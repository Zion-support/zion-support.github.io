import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  BarChart3,
  FileImage,
  MessageCircle,
  Video,
  FileText,
  Heart,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  TrendingDown,
  DollarSign,
  CreditCard,
  Wallet,
  PiggyBank,
  Coins,
  Bitcoin,
  Ethereum
} from 'lucide-react';

import EnhancedSEO from '../components/EnhancedSEO';
import { UltimateServicesShowcase } from '../components/UltimateServicesShowcase';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      value: '500+',
      label: 'AI Solutions',
      description: 'Implemented successfully',
      icon: Brain
    },
    {
      value: '99.9%',
      label: 'Uptime',
      description: 'Enterprise-grade reliability',
      icon: Shield
    },
    {
      value: '24/7',
      label: 'Support',
      description: 'Round-the-clock assistance',
      icon: MessageCircle
    },
    {
      value: '50+',
      label: 'Expert Team',
      description: 'Certified professionals',
      icon: Users
    }
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning technologies',
      icon: Brain,
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and computational power',
      icon: Atom,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced threat detection and zero-trust security architecture',
      icon: Shield,
      color: 'from-green-600 to-blue-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud-native solutions and DevOps practices',
      icon: Cloud,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Machine Learning, Neural Networks, Autonomous Systems',
      icon: Brain,
      color: 'from-blue-600 via-purple-600 to-pink-600',
      link: '/ai-services'
    },
    {
      title: 'IT Infrastructure',
      description: 'Cloud Migration, DevOps, System Architecture',
      icon: Server,
      color: 'from-green-600 via-blue-600 to-purple-600',
      link: '/it-services'
    },
    {
      title: 'Micro SAAS',
      description: 'Custom Software, API Development, Digital Products',
      icon: Code,
      color: 'from-orange-600 via-red-600 to-pink-600',
      link: '/micro-saas'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <EnhancedSEO 
        title="Zion Tech Group - Revolutionary AI, IT & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, IT infrastructure, and innovative micro SAAS solutions. Leading the future of technology."
        keywords="AI solutions, IT infrastructure, micro SAAS, autonomous systems, cloud computing, cybersecurity, Zion Tech Group"
      />
      
      {/* Hero Section with Parallax */}
      <motion.section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ y }}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Revolutionary{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
              {' '}for the Future
            </h1>
            <p className="text-xl sm:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, autonomous systems, 
              and enterprise-grade IT infrastructure. Leading the technological revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/services"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-dark transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-zion-slate-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-400" />
                <span>Award-Winning Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section with Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-zion-slate-light mb-1">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Hover Effects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven expertise to deliver 
              solutions that transform businesses and drive innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4 mx-auto`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview with Interactive Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Revolutionary Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of AI, IT infrastructure, and micro SAAS solutions 
              designed to revolutionize your business operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className={`p-8 bg-gradient-to-br ${service.color} rounded-xl text-white text-center transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col justify-center`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors">
                      <service.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg opacity-90 leading-relaxed">{service.description}</p>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-6 w-6 mx-auto" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate Services Showcase */}
      <UltimateServicesShowcase />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
