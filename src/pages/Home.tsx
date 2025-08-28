import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Brain, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  Bot,
  GitFork,
  Eye,
  Sparkles,
  Zap as ZapIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  FileText,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Zap as ZapIcon2,
  ArrowUpRight,
  Sparkles as SparklesIcon
} from 'lucide-react';

// Import new components
import ThemeToggle from '../components/ThemeToggle';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SEO from '../components/SEO';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: i * 0.1,
      duration: 5 + i * 0.3
    })), []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Optimized floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [0, 200, 0],
            y: [0, -200, 0],
            opacity: [0.4, 1, 0.4],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
});

// Optimized hero section component
const HeroSection = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Future-Ready Technology Solutions",
      subtitle: "Transform your business with cutting-edge AI, cloud computing, and cybersecurity solutions.",
      cta: "Explore Our Services",
      ctaLink: "/services"
    },
    {
      title: "AI-Powered Innovation",
      subtitle: "Leverage the latest artificial intelligence to automate processes and gain competitive advantages.",
      cta: "Discover AI Solutions",
      ctaLink: "/services"
    },
    {
      title: "Digital Transformation",
      subtitle: "Modernize your technology stack and business processes with strategic consulting.",
      cta: "Start Transformation",
      ctaLink: "/contact"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FuturisticBackground />
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title.split(' ')[0]}
              </span>
              <br />
              <span className="text-white">{heroSlides[currentSlide].title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            to={heroSlides[currentSlide].ctaLink}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            {heroSlides[currentSlide].cta}
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            to="/contact"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Get Started Today
            <ArrowUpRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Projects Delivered", icon: Rocket },
            { number: "50+", label: "AI Solutions", icon: Brain },
            { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
            { number: "24/7", label: "Support Available", icon: Clock }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

// Optimized features section component
const FeaturesSection = React.memo(() => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description: "Leverage the latest artificial intelligence and machine learning technologies to automate processes and gain competitive advantages.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud-First Approach",
      description: "Scalable, secure, and cost-effective cloud solutions that grow with your business needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Comprehensive cybersecurity solutions that protect your data, applications, and infrastructure from evolving threats.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic consulting and implementation services to modernize your technology stack and business processes.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep expertise in the latest technologies and industry best practices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Agile development methodologies that deliver working solutions quickly and iterate based on feedback.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Optimized innovative AI services showcase component
const InnovativeAIServicesSection = React.memo(() => {
  const aiServices = [
    {
      icon: Brain,
      title: "AI Autonomous Research Assistant",
      description: "AI-powered autonomous research that discovers, analyzes, and synthesizes information across multiple sources.",
      color: "from-blue-500 to-purple-500",
      href: "/services/ai-autonomous-research-assistant",
      features: ["Autonomous Research", "Multi-Source Analysis", "Intelligent Summarization", "Real-time Updates"]
    },
    {
      icon: Network,
      title: "AI Supply Chain Optimization",
      description: "Transform your supply chain with AI that predicts demand, optimizes inventory, and reduces costs.",
      color: "from-green-500 to-blue-500",
      href: "/services/ai-supply-chain-optimization",
      features: ["AI-Powered Forecasting", "Real-time Visibility", "Intelligent Routing", "Risk Management"]
    },
    {
      icon: FileText,
      title: "AI Content Marketing Suite",
      description: "AI-powered content creation, optimization, and distribution for maximum engagement.",
      color: "from-purple-500 to-pink-500",
      href: "/services/ai-content-marketing-suite",
      features: ["AI Content Generation", "Audience Intelligence", "SEO Optimization", "Performance Analytics"]
    },
    {
      icon: GitFork,
      title: "AI Workflow Orchestrator",
      description: "Intelligent workflow automation that learns from your processes and optimizes them continuously.",
      color: "from-indigo-500 to-purple-500",
      href: "/services/ai-workflow-orchestrator",
      features: ["Process Learning", "Automated Optimization", "Integration Hub", "Performance Analytics"]
    },
    {
      icon: BarChart3,
      title: "AI Customer Experience Analytics",
      description: "Deep insights into customer behavior with predictive analytics and personalized recommendations.",
      color: "from-teal-500 to-cyan-500",
      href: "/services/ai-customer-experience-analytics",
      features: ["Behavioral Analysis", "Predictive Insights", "Personalization Engine", "ROI Tracking"]
    },
    {
      icon: Shield,
      title: "AI Financial Risk Management",
      description: "Intelligent financial risk assessment with AI-driven predictive analytics.",
      color: "from-red-500 to-orange-500",
      href: "/services/ai-financial-risk-management",
      features: ["Risk Assessment", "Predictive Analytics", "Compliance Monitoring", "Real-time Alerts"]
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-indigo-900/50" aria-labelledby="ai-services-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="ai-services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Innovative AI-Powered Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Cutting-edge AI solutions that transform business operations with intelligent automation, predictive analytics, and autonomous decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2 text-sm">Key Capabilities:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-xs">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to={service.href}
                className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Optimized CTA section component
const CTASection = React.memo(() => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join hundreds of companies that have already revolutionized their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/services"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              View All Services
              <ArrowUpRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Future-Ready Technology Solutions"
        description="Transform your business with cutting-edge AI, cloud computing, and cybersecurity solutions. We deliver innovation that drives growth and secures your digital future."
        keywords="AI solutions, cloud computing, cybersecurity, digital transformation, technology consulting"
      />
      
      <HeroSection />
      <FeaturesSection />
      <InnovativeAIServicesSection />
      <CTASection />
    </>
  );
};

export default Home;
