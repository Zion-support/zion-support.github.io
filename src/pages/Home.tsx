import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  Activity, 
  Calendar, 
  MessageCircle, 
  PenTool,
  Rocket,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Users,
  BarChart3,
  FileImage,
  Video,
  FileText,
  Heart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Award,
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
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Search,
  ShoppingCart,
  RefreshCw,
  Cloud,
  CheckCircle
} from 'lucide-react';

// SEO Component
const SEO: React.FC = () => (
  <>
    <title>Zion Tech Group - AI-Powered Solutions & Emerging Technologies</title>
    <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum technology, and innovative IT services. Leading the future of technology." />
    <meta name="keywords" content="AI solutions, quantum computing, cybersecurity, cloud services, digital transformation, IT consulting" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Zion Tech Group - AI-Powered Solutions & Emerging Technologies" />
    <meta property="og:description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum technology, and innovative IT services." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ziontechgroup.com" />
    <meta property="og:image" content="/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Zion Tech Group - AI-Powered Solutions & Emerging Technologies" />
    <meta name="twitter:description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum technology, and innovative IT services." />
    <link rel="canonical" href="https://ziontechgroup.com" />
  </>
);

// Hero Section Component
const HeroSection: React.FC = () => {
  const [currentService, setCurrentService] = useState(0);
  
  const services = [
    "AI-Powered Business Intelligence",
    "Quantum Computing Solutions",
    "Advanced Cybersecurity",
    "Cloud & DevOps Excellence",
    "Digital Transformation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-40 shadow-glow-cyan"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="w-3 h-3 bg-zion-purple rounded-full opacity-40 shadow-glow-purple"></div>
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float">
        <div className="w-5 h-5 bg-zion-pink rounded-full opacity-30 shadow-glow-pink"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Revolutionizing</span>
            <br />
            <span className="text-white">Technology</span>
            <br />
            <span className="gradient-text-purple">Tomorrow</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zion-gray-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
            Transform your business with our comprehensive tech ecosystem.
          </p>

          {/* Rotating Service Display */}
          <div className="mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold text-zion-cyan"
              >
                {services[currentService]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="glass-button bg-transparent border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Happy Clients', value: '500+', icon: Heart },
            { label: 'Projects Completed', value: '1000+', icon: CheckCircle },
            { label: 'Team Members', value: '50+', icon: Users },
            { label: 'Years Experience', value: '10+', icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-zion-gray-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Quick Access Component
const QuickAccess: React.FC = () => {
  const quickLinks = [
    { label: 'AI Solutions', href: '/ai-services', icon: Brain, color: 'from-purple-500 to-indigo-500' },
    { label: 'Cloud Services', href: '/cloud-services', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { label: 'Cybersecurity', href: '/security', icon: Shield, color: 'from-red-500 to-pink-500' },
    { label: 'Digital Transformation', href: '/digital-transformation', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { label: 'Micro SaaS', href: '/micro-saas', icon: Code, color: 'from-yellow-500 to-orange-500' },
    { label: 'IT Consulting', href: '/consulting', icon: Users, color: 'from-gray-500 to-slate-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Quick Access</span>
            <br />
            <span className="text-white">to Our Services</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Navigate directly to the services that matter most to your business transformation journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={link.href}
                className="glass-card group hover:scale-105 transition-all duration-300 block"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${link.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">{link.label}</h3>
                <p className="text-zion-gray-light mb-4">
                  Discover how our {link.label.toLowerCase()} can transform your business operations and drive innovation.
                </p>
                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature CTAs Component
const FeatureCTAs: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      href: '/services/ai-analytics'
    },
    {
      title: 'Quantum Computing',
      description: 'Stay ahead of the curve with our cutting-edge quantum computing solutions.',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/quantum-computing'
    },
    {
      title: 'Cybersecurity Suite',
      description: 'Protect your digital assets with our comprehensive cybersecurity solutions.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: '/services/cybersecurity'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Featured</span>
            <br />
            <span className="text-white">Technologies</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Experience the power of next-generation technologies designed to revolutionize your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={feature.href}
                className="glass-card group hover:scale-105 transition-all duration-300 block h-full"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-orbitron">{feature.title}</h3>
                <p className="text-zion-gray-light mb-6 leading-relaxed">{feature.description}</p>
                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Explore Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Highlights Component
const FeatureHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance that keeps your business running at peak efficiency.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols to protect your sensitive data and operations.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: '24/7 support and services available worldwide to meet your needs anytime.'
    },
    {
      icon: Cpu,
      title: 'AI-Powered',
      description: 'Intelligent automation and insights that adapt to your business requirements.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Why Choose</span>
            <br />
            <span className="text-white">Zion Tech Group</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Discover the unique advantages that set us apart in the technology landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">{highlight.title}</h3>
              <p className="text-zion-gray-light leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Categories Section Component
const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses.',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      href: '/services/ai-ml'
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and robust infrastructure management.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: '/services/cybersecurity'
    },
    {
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services for business growth.',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      href: '/services/digital-transformation'
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Innovative software-as-a-service solutions for specific business needs.',
      icon: Code,
      color: 'from-yellow-500 to-orange-500',
      href: '/services/micro-saas'
    },
    {
      title: 'IT Consulting',
      description: 'Expert IT consulting to optimize your technology strategy.',
      icon: Users,
      color: 'from-gray-500 to-slate-500',
      href: '/services/it-consulting'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Service</span>
            <br />
            <span className="text-white">Categories</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Explore our comprehensive range of technology services designed to meet every business need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="glass-card group hover:scale-105 transition-all duration-300 block h-full"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-orbitron">{category.title}</h3>
                <p className="text-zion-gray-light mb-6 leading-relaxed">{category.description}</p>
                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Streamline operations and boost productivity with our optimized solutions.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security measures.'
    },
    {
      icon: Zap,
      title: 'Faster Performance',
      description: 'Experience lightning-fast response times and improved user experience.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 expert support to ensure your systems run smoothly.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your operations globally with our cloud-based solutions.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Gain valuable insights through our intelligent analytics platform.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Key Benefits</span>
            <br />
            <span className="text-white">of Our Solutions</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Discover how our technology solutions can transform your business operations and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">{benefit.title}</h3>
              <p className="text-zion-gray-light leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify the best technology solutions.',
      icon: Search
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive technology strategy tailored to your business goals.',
      icon: Target
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the solution with precision and attention to detail.',
      icon: Code
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize for maximum performance and efficiency.',
      icon: Settings
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">How It</span>
            <br />
            <span className="text-white">Works</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Our proven process ensures successful implementation and optimal results for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-blue transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-4 font-orbitron">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">{step.title}</h3>
                <p className="text-zion-gray-light leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section Component
const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Stay Updated</span>
            <br />
            <span className="text-white">with Innovation</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-2xl mx-auto">
            Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Listings Section Component
const FeaturedListingsSection: React.FC = () => {
  const featuredServices = [
    {
      title: 'AI Business Intelligence Platform',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      price: 'From $2,999/month',
      features: ['Real-time analytics', 'AI-powered insights', 'Custom dashboards', '24/7 support'],
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      href: '/services/ai-business-intelligence'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Stay ahead of the curve with our cutting-edge quantum computing services.',
      price: 'From $5,999/month',
      features: ['Quantum algorithms', 'Performance optimization', 'Expert consultation', 'Custom solutions'],
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/quantum-computing'
    },
    {
      title: 'Advanced Cybersecurity Suite',
      description: 'Protect your digital assets with our comprehensive cybersecurity solutions.',
      price: 'From $3,999/month',
      features: ['Threat detection', 'Incident response', 'Security audits', 'Compliance support'],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: '/services/cybersecurity'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Featured</span>
            <br />
            <span className="text-white">Services</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Explore our most popular and innovative service offerings designed to drive business transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link
                to={service.href}
                className="glass-card group hover:scale-105 transition-all duration-300 block h-full"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-orbitron">{service.title}</h3>
                <p className="text-zion-gray-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-zion-cyan mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-gray-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Showcase Component
const ServicesShowcase: React.FC = () => {
  const microSaaSServices = [
    {
      title: 'Smart Contract Lifecycle Manager',
      description: 'Automate and manage smart contracts with AI-powered insights.',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      href: '/services/smart-contract-manager'
    },
    {
      title: 'AI-Powered Project Management',
      description: 'Streamline project workflows with intelligent automation.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-project-management'
    },
    {
      title: 'Smart Customer Support',
      description: 'Enhance customer experience with AI-driven support solutions.',
      icon: MessageCircle,
      color: 'from-purple-500 to-indigo-500',
      href: '/services/smart-customer-support'
    },
    {
      title: 'Data Governance Suite',
      description: 'Ensure data quality and compliance with our governance platform.',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      href: '/services/data-governance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            <span className="gradient-text">Micro SaaS</span>
            <br />
            <span className="text-white">Solutions</span>
          </h2>
          <p className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Discover our innovative micro SaaS solutions designed to address specific business challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {microSaaSServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.href}
                className="glass-card group hover:scale-105 transition-all duration-300 block h-full"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-orbitron">{service.title}</h3>
                <p className="text-zion-gray-light mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-xs font-semibold">Learn More</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Loading Fallback Component
const LoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-gray-light">Loading Zion Tech Group...</p>
    </div>
  </div>
);

// Animated Background Component
const AnimatedBackground: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-zion-pink/10 rounded-full blur-2xl animate-float"></div>
    </div>
  </div>
);

// Floating Particles Component
const FloatingParticles: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-zion-cyan/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ))}
  </div>
);

// Main Home Component
const Home: React.FC = () => {
  return (
    <>
      <SEO />
      
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main id="main-content">
        <HeroSection />
        <QuickAccess />
        <FeatureCTAs />
        <FeatureHighlights />
        <CategoriesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <NewsletterSection />
        <FeaturedListingsSection />
        <ServicesShowcase />
      </main>

      <AnimatedBackground />
      <FloatingParticles />
    </>
  );
};

export default Home;
