import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
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
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
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
  Play,
  ChevronLeft,
  ChevronRight,
  Search
} from 'lucide-react';

// Lazy load components for better performance
const LazyHeroFeatures = lazy(() => import('../components/home/HeroFeatures'));
const LazyServicesOverview = lazy(() => import('../components/home/ServicesOverview'));
const LazyStatsSection = lazy(() => import('../components/home/StatsSection'));
const LazyTestimonials = lazy(() => import('../components/home/Testimonials'));
const LazyCTASection = lazy(() => import('../components/home/CTASection'));

// Enhanced loading spinner component
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-zion-cyan/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-zion-cyan text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroFeatures = [
    { icon: Brain, title: 'AI-Powered Solutions', description: 'Cutting-edge artificial intelligence for modern businesses', gradient: 'from-zion-cyan to-zion-blue' },
    { icon: Shield, title: 'Cybersecurity Excellence', description: 'Advanced protection for your digital assets', gradient: 'from-zion-purple to-zion-cyan' },
    { icon: Cloud, title: 'Cloud Infrastructure', description: 'Scalable cloud solutions for growth', gradient: 'from-zion-blue to-zion-purple' },
    { icon: Zap, title: 'Digital Transformation', description: 'Transform your business with innovative technology', gradient: 'from-zion-cyan to-zion-neon' }
  ];

  const services = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-analytics",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      color: "zion-cyan"
    },
    {
      title: "Cybersecurity & Compliance",
      subtitle: "Protect your business with enterprise-grade security",
      description: "Comprehensive cybersecurity solutions including threat detection, incident response, and compliance management. Stay ahead of evolving security challenges.",
      image: "/images/hero-cybersecurity.jpg",
      cta: "Secure Your Business",
      path: "/services/cybersecurity",
      features: ["Threat Detection", "Incident Response", "Compliance Management", "Security Audits"],
      color: "zion-purple"
    },
    {
      title: "Cloud & DevOps Excellence",
      subtitle: "Accelerate development with modern cloud practices",
      description: "Streamline your development workflow with automated CI/CD pipelines, infrastructure as code, and cloud-native solutions that scale with your business.",
      image: "/images/hero-cloud-devops.jpg",
      cta: "Optimize Your Workflow",
      path: "/services/cloud-devops",
      features: ["CI/CD Automation", "Infrastructure as Code", "Cloud Migration", "Performance Optimization"],
      color: "zion-blue"
    }
  ];

  // Enhanced services data for the overview section
  const servicesOverview = [
    {
      category: "AI & Analytics",
      icon: Brain,
      color: "from-zion-cyan to-zion-blue",
      items: ["Machine Learning", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      description: "Transform your data into actionable insights with cutting-edge AI technologies."
    },
    {
      category: "Cybersecurity",
      icon: Shield,
      color: "from-zion-purple to-zion-cyan",
      items: ["Threat Detection", "Incident Response", "Compliance Management", "Security Audits"],
      description: "Protect your digital assets with enterprise-grade security solutions."
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-zion-blue to-zion-purple",
      items: ["CI/CD Automation", "Infrastructure as Code", "Cloud Migration", "Performance Optimization"],
      description: "Accelerate your development workflow with modern cloud practices."
    },
    {
      category: "IoT & Edge",
      icon: Cpu,
      color: "from-zion-cyan to-zion-neon",
      items: ["Device Management", "Edge Computing", "Data Collection", "Real-time Processing"],
      description: "Connect and manage your IoT devices with intelligent edge solutions."
    }
  ];

  const stats = [
    { 
      number: "500+", 
      label: "Projects Delivered", 
      description: "Successfully completed projects across industries", 
      avatar: "🚀",
      icon: TrendingUp,
      color: "from-zion-cyan to-zion-blue"
    },
    { 
      number: "99.9%", 
      label: "Uptime Guarantee", 
      description: "Reliable infrastructure you can count on", 
      avatar: "⚡",
      icon: Award,
      color: "from-zion-purple to-zion-cyan"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      description: "Round-the-clock technical assistance", 
      avatar: "🛡️",
      icon: Clock,
      color: "from-zion-blue to-zion-purple"
    },
    { 
      number: "50+", 
      label: "Expert Engineers", 
      description: "Skilled professionals at your service", 
      avatar: "👨‍💻",
      icon: Users,
      color: "from-zion-cyan to-zion-neon"
    }
  ];

  // Animation variants for staggered animations
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

  return (
    <div className="min-h-screen bg-zion-slate-dark">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl animate-float"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute top-40 right-20 w-24 h-24 bg-zion-purple/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.15}px)` }}
          />
          <div 
            className="absolute bottom-40 left-20 w-20 h-20 bg-zion-blue/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: '4s', transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="animate-gradient-x bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
            >
              Empowering businesses with cutting-edge technology solutions. 
              From AI and cybersecurity to cloud infrastructure and digital transformation.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/services"
                className="btn-primary group"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary group"
              >
                Get Started
                <Rocket className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hero Features Section */}
      <section className="py-20 bg-gradient-to-b from-zion-slate-dark to-zion-slate">
        <div className="container mx-auto px-4">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <LazyHeroFeatures features={heroFeatures} />
          </Suspense>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <LazyServicesOverview services={servicesOverview} />
          </Suspense>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <LazyStatsSection stats={stats} />
          </Suspense>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zion-slate">
        <div className="container mx-auto px-4">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <LazyTestimonials />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <Suspense fallback={<EnhancedLoadingSpinner />}>
            <LazyCTASection />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Home;
