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
import { SEO } from '../components/EnhancedSEO';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Featured services data
const featuredServices = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    icon: Brain,
    href: "/services/ai-business-intelligence",
    category: "AI & Analytics"
  },
  {
    id: 2,
    title: "Quantum Computing Solutions",
    description: "Leverage the power of quantum computing for complex problem-solving and optimization.",
    icon: Atom,
    href: "/services/quantum-computing",
    category: "Emerging Tech"
  },
  {
    id: 3,
    title: "Cybersecurity Suite",
    description: "Comprehensive security solutions powered by AI threat detection and prevention.",
    icon: Shield,
    href: "/services/ai-cybersecurity-suite",
    category: "Security"
  },
  {
    id: 4,
    title: "Digital Twin Technology",
    description: "Create virtual replicas of physical systems for simulation and optimization.",
    icon: Server,
    href: "/services/digital-twin",
    category: "IoT & Digital"
  }
];

// Micro SaaS services data
const microSaaSServices = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "Automate content creation with AI-powered writing and design tools.",
    icon: PenTool,
    href: "/services/ai-content-generator",
    category: "Content & Marketing"
  },
  {
    id: 2,
    title: "Uptime SLA Monitor",
    description: "Real-time monitoring and alerting for your critical business applications.",
    icon: Activity,
    href: "/services/uptime-sla-monitor",
    category: "Monitoring"
  },
  {
    id: 3,
    title: "SOC2 Compliance Tracker",
    description: "Streamline compliance management with automated tracking and reporting.",
    icon: ShieldCheck,
    href: "/services/soc2-compliance-tracker",
    category: "Compliance"
  },
  {
    id: 4,
    title: "AI Lead Scoring",
    description: "Intelligent lead qualification and scoring using machine learning algorithms.",
    icon: Target,
    href: "/services/ai-lead-scoring",
    category: "Sales & Marketing"
  }
];

// Hero Section Component
const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "From predictive analytics to automated workflows, we deliver AI solutions that drive real business value.",
      icon: Brain,
      cta: "Explore AI Services",
      href: "/services/ai-services"
    },
    {
      title: "Quantum Computing",
      subtitle: "Next-generation computing power for complex problem-solving",
      description: "Harness the power of quantum mechanics to solve previously unsolvable computational challenges.",
      icon: Atom,
      cta: "Learn More",
      href: "/services/quantum-computing"
    },
    {
      title: "Micro SaaS Solutions",
      subtitle: "Scalable software solutions for modern businesses",
      description: "Custom micro SaaS applications designed to streamline operations and boost productivity.",
      icon: Code,
      cta: "View Solutions",
      href: "/micro-saas"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zion-cyan/5 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-40 shadow-glow-cyan"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="w-3 h-3 bg-zion-purple rounded-full opacity-40 shadow-glow-purple"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float">
        <div className="w-5 h-5 bg-zion-pink rounded-full opacity-30 shadow-glow-pink"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center shadow-glow-blue-lg">
              <heroSlides[currentSlide].icon className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold font-orbitron gradient-text-neon">
              {heroSlides[currentSlide].title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-zion-gray-light">
              {heroSlides[currentSlide].subtitle}
            </h2>
            <p className="text-lg md:text-xl text-zion-gray-light max-w-3xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link
              to={heroSlides[currentSlide].href}
              className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>{heroSlides[currentSlide].cta}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-zion-cyan scale-125' 
                    : 'bg-zion-gray-light/50 hover:bg-zion-gray-light'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Quick Access Component
const QuickAccess: React.FC = () => {
  const quickActions = [
    { label: 'Get Quote', href: '/request-quote', icon: MessageCircle, color: 'from-zion-cyan to-zion-blue' },
    { label: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, color: 'from-zion-purple to-zion-pink' },
    { label: 'View Services', href: '/services', icon: Settings, color: 'from-zion-green to-zion-cyan' },
    { label: 'Contact Us', href: '/contact', icon: MessageCircle, color: 'from-zion-orange to-zion-red' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {quickActions.map((action, index) => (
            <motion.div key={action.label} variants={itemVariants}>
              <Link
                to={action.href}
                className="glass-card hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold">{action.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Feature CTAs Component
const FeatureCTAs: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage the latest in artificial intelligence to automate and optimize your business processes.",
      icon: Brain,
      cta: "Explore AI Services",
      href: "/services/ai-services",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Quantum Computing",
      description: "Access next-generation computing power for complex problem-solving and optimization.",
      icon: Atom,
      cta: "Learn More",
      href: "/services/quantum-computing",
      color: "from-zion-purple to-zion-pink"
    },
    {
      title: "Micro SaaS Platform",
      description: "Custom software solutions designed to streamline operations and boost productivity.",
      icon: Code,
      cta: "View Solutions",
      href: "/micro-saas",
      color: "from-zion-green to-zion-cyan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
            Revolutionary Services Preview
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Experience the future of technology with our cutting-edge solutions designed to transform your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <div className="glass-card text-center hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron">{feature.title}</h3>
                <p className="text-zion-gray-light mb-6 leading-relaxed">{feature.description}</p>
                <Link
                  to={feature.href}
                  className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <span>{feature.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Feature Highlights Component
const FeatureHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for instant results and seamless user experience."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your sensitive data and operations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide deployment capabilities with local compliance and support."
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={highlight.title} variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{highlight.title}</h3>
              <p className="text-zion-gray-light text-sm leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Categories Section Component
const CategoriesSection: React.FC = () => {
  const categories = [
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions that learn and adapt to your business needs.",
      icon: Brain,
      href: "/services/ai-services",
      color: "from-zion-cyan to-zion-blue"
    },
    {
      title: "Cybersecurity",
      description: "Advanced protection against evolving digital threats and vulnerabilities.",
      icon: Shield,
      href: "/security",
      color: "from-zion-red to-zion-orange"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and streamlined development operations.",
      icon: Cloud,
      href: "/services/cloud-devops",
      color: "from-zion-purple to-zion-pink"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end modernization of your business processes and technology stack.",
      icon: Rocket,
      href: "/services/digital-transformation",
      color: "from-zion-green to-zion-cyan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
            Service Categories
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Comprehensive solutions across all major technology domains to meet your business needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Link
                to={category.href}
                className="glass-card hover:scale-105 transition-all duration-300 group block"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 font-orbitron">{category.title}</h3>
                    <p className="text-zion-gray-light leading-relaxed">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section Component
const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Efficiency",
      description: "Streamline operations and boost productivity with automated workflows."
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Optimize resource allocation and reduce operational costs significantly."
    },
    {
      icon: Users,
      title: "Enhanced User Experience",
      description: "Deliver seamless, intuitive experiences that keep customers engaged."
    },
    {
      icon: Lock,
      title: "Improved Security",
      description: "Protect your assets with enterprise-grade security measures."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
            Why Choose Zion Tech Group?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Experience the advantages of working with a technology partner that truly understands your business.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={benefit.title} variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{benefit.title}</h3>
              <p className="text-zion-gray-light text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// How It Works Section Component
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify the best technology solutions.",
      icon: Search
    },
    {
      number: "02",
      title: "Solution Design",
      description: "Our experts design a customized solution tailored to your specific requirements.",
      icon: PenTool
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build and thoroughly test your solution to ensure quality and reliability.",
      icon: Code
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "Smooth deployment followed by ongoing support and maintenance services.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
            How It Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Our proven process ensures successful delivery of technology solutions that drive real business value.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="text-center relative">
              <div className="glass-card relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{step.title}</h3>
                <p className="text-zion-gray-light text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-zion-gray-light max-w-2xl mx-auto">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
          </motion.div>

          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-gray-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="glass-button bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-glow-blue-lg transform hover:scale-105 transition-all duration-300"
                disabled={isSubscribed}
              >
                {isSubscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Listings Section Component
const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
            Featured Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                to={service.href}
                className="glass-card hover:scale-105 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs text-zion-cyan mb-2 font-semibold">{service.category}</div>
                <h3 className="text-lg font-semibold text-white mb-3 font-orbitron">{service.title}</h3>
                <p className="text-zion-gray-light mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center text-zion-cyan group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-xs font-semibold">Learn More</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Services Showcase Component
const ServicesShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-orbitron gradient-text-neon mb-6">
            Micro SaaS Solutions
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-zion-gray-light max-w-3xl mx-auto">
            Innovative software solutions designed to solve specific business challenges and boost productivity.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {microSaaSServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                to={service.href}
                className="glass-card hover:scale-105 transition-all duration-300 group block"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-pink rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs text-zion-purple mb-2 font-semibold">{service.category}</div>
                <h3 className="text-lg font-semibold text-white mb-3 font-orbitron">{service.title}</h3>
                <p className="text-zion-gray-light mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex items-center text-zion-purple group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-xs font-semibold">Learn More</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
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
