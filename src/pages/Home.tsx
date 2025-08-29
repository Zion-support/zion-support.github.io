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
import { EnhancedSEO as SEO } from '../components/EnhancedSEO';

// Quick access actions data
const quickActions = [
  {
    title: "AI Services",
    description: "Explore our AI-powered solutions",
    icon: Brain,
    href: "/services/ai-services",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Cloud & DevOps",
    description: "Modern infrastructure solutions",
    icon: Cloud,
    href: "/services/cloud-devops",
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets",
    icon: Shield,
    href: "/services/ai-cybersecurity-suite",
    color: "from-red-600 to-orange-600"
  },
  {
    title: "Digital Twin",
    description: "Virtual system modeling",
    icon: Server,
    href: "/services/digital-twin",
    color: "from-green-600 to-emerald-600"
  },
  {
    title: "Quantum Computing",
    description: "Next-gen computing power",
    icon: Atom,
    href: "/services/quantum-computing",
    color: "from-indigo-600 to-purple-600"
  },
  {
    title: "Micro SaaS",
    description: "Specialized business tools",
    icon: Code,
    href: "/services/micro-saas",
    color: "from-yellow-600 to-orange-600"
  }
];

// Benefits data
const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance and rapid deployment",
    color: "from-yellow-600 to-orange-600"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with compliance standards",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Flexible solutions that grow with your business and adapt to changing requirements",
    color: "from-orange-600 to-red-600"
  }
];

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
      cta: "Discover Quantum Solutions",
      href: "/services/quantum-computing"
    },
    {
      title: "Digital Transformation",
      subtitle: "Modernize your business with cutting-edge technology",
      description: "Streamline operations, enhance customer experiences, and unlock new growth opportunities.",
      icon: Rocket,
      cta: "Start Transformation",
      href: "/services/digital-transformation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(34,211,238,0.05),transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mx-auto"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center shadow-glow-blue-lg">
                {React.createElement(heroSlides[currentSlide].icon, { className: "w-10 h-10 text-white" })}
              </div>
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-cyan-400 leading-relaxed"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to={heroSlides[currentSlide].href}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-glow-lg"
              >
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Quick Access Component
const QuickAccess: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Quick Access to Our Services
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Jump directly to the solutions you need most
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={action.href}
                className="group block text-center p-6 bg-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-700/70"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(action.icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {action.title}
                </h3>
                <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {action.description}
                </p>
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
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Services Component
const FeaturedServices: React.FC = () => {
  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover our most popular and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.href}
                className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                  {service.category}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Micro SaaS Services Component
const MicroSaaSServices: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Micro SaaS Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Specialized tools designed to solve specific business challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {microSaaSServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.href}
                className="block p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/70 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-block px-3 py-1 bg-slate-700/50 text-purple-400 text-xs font-medium rounded-full">
                  {service.category}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Home Component
const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Zion Tech Group - AI-Powered Innovation & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. Expert technology consulting for the modern enterprise."
        keywords="AI services, quantum computing, digital transformation, cybersecurity, cloud solutions, micro SaaS, technology consulting"
        ogImage="/images/zion-tech-group-og.jpg"
        ogType="website"
        twitterCard="summary_large_image"
      />
      
      <main className="min-h-screen">
        <HeroSection />
        <QuickAccess />
        <BenefitsSection />
        <FeaturedServices />
        <MicroSaaSServices />
        <CTASection />
      </main>
    </>
  );
};

export default Home;
