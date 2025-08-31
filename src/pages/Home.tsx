import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
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
  Workflow,
  Eye,
  Sparkles,
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
  ArrowUpRight,
  Star as StarIcon,
  Calendar,
  BookOpen,
  Video,
  Headphones,
  Download,
  ExternalLink
} from 'lucide-react';
import { SEO } from "@/components/SEO";

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() =>
    [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
});

// Hero Section Component
const HeroSection = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "AI-Powered Digital Transformation",
      subtitle: "Transform your business with cutting-edge AI solutions and innovative technology",
      description: "Leverage the power of artificial intelligence, quantum computing, and digital transformation to stay ahead of the competition.",
      cta: "Get Started",
      ctaLink: "/contact",
      icon: <Brain className="w-16 h-16 text-cyan-400" />
    },
    {
      title: "Comprehensive IT Solutions",
      subtitle: "End-to-end technology services for modern enterprises",
      description: "From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions that drive business growth and innovation.",
      cta: "Explore Services",
      ctaLink: "/services",
      icon: <Server className="w-16 h-16 text-blue-400" />
    },
    {
      title: "Innovation at Scale",
      subtitle: "Building the future with next-generation technologies",
      description: "Harness the potential of emerging technologies like quantum computing, blockchain, and IoT to create sustainable competitive advantages.",
      cta: "Learn More",
      ctaLink: "/about",
      icon: <Rocket className="w-16 h-16 text-purple-400" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FuturisticBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            {heroSlides[currentSlide].icon}
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-cyan-300 mb-6 font-medium">
            {heroSlides[currentSlide].subtitle}
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={heroSlides[currentSlide].ctaLink}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {heroSlides[currentSlide].cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </motion.div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
});

// Services Overview Section
const ServicesOverview = React.memo(() => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Machine learning, natural language processing, and computer vision solutions",
      link: "/ai-services"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Cloud migration, DevOps, and infrastructure management",
      link: "/services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions and compliance management",
      link: "/services"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IT Consulting",
      description: "Strategic technology consulting and digital transformation",
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive innovation and growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.link}
                className="block p-6 bg-slate-700/50 rounded-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:bg-slate-700/70 group-hover:transform group-hover:scale-105"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Stats Section
const StatsSection = React.memo(() => {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50+", label: "Expert Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-cyan-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// CTA Section
const CTASection = React.memo(() => {
  return (
    <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105">
              <Phone className="mr-2 w-5 h-5" />
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home Component
const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Zion Tech Group - AI-Powered Solutions & Digital Transformation"
        description="Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. Expert IT consulting and innovative technology solutions."
        keywords={[
          'AI solutions',
          'quantum computing',
          'digital transformation',
          'IT consulting',
          'cybersecurity',
          'cloud services',
          'machine learning',
          'artificial intelligence',
          'business technology',
          'enterprise solutions'
        ]}
        enableStructuredData={true}
        enableSocialMedia={true}
      />
      
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <CTASection />
    </>
  );
};

export default Home;
