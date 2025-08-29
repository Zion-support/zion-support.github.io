import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Award,
  Brain,
  CheckCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Clock as ClockIcon,
  Globe,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Zap
} from 'lucide-react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Optimized futuristic animated background component
const FuturisticBackground = React.memo(() => {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
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

FuturisticBackground.displayName = 'FuturisticBackground';

// Enhanced hero section component
const HeroSection = React.memo(({ onGetStarted }: { onGetStarted: () => void }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Quantum Computing",
      description: "Next-generation computing power for complex problem solving",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Simulation"]
    },
    {
      title: "Micro SAAS Services",
      description: "Scalable software solutions tailored to your needs",
      icon: Zap,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your infrastructure for the future",
      icon: Rocket,
      features: ["Cloud Migration", "DevOps", "Security", "Compliance"]
    }
  ], []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-medium">2025 Innovation Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Leading the future of technology with cutting-edge AI solutions, quantum computing, 
            and innovative micro SAAS services that transform businesses worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Explore our services"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={onGetStarted}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Get started with Zion Tech"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Hero Slides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                    {React.createElement(heroSlides[currentSlide].icon, { className: "w-12 h-12 text-cyan-400" })}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  {heroSlides[currentSlide].description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {heroSlides[currentSlide].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full hover:bg-white/20 transition-all duration-200"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-full hover:bg-white/20 transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  idx === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

// Enhanced stats section
const StatsSection = React.memo(() => {
  const stats = useMemo(() => [
    { label: "AI Solutions Deployed", value: "500+", icon: Brain, color: "from-cyan-500 to-blue-500" },
    { label: "Global Clients", value: "200+", icon: Globe, color: "from-blue-500 to-purple-500" },
    { label: "Success Rate", value: "99.9%", icon: Award, color: "from-purple-500 to-pink-500" },
    { label: "Innovation Projects", value: "1000+", icon: Rocket, color: "from-pink-500 to-red-500" }
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies transform their operations with cutting-edge technology.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

StatsSection.displayName = 'StatsSection';

// Enhanced featured services section
const FeaturedServices = React.memo(() => {
  const services = useMemo(() => [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with advanced AI algorithms and machine learning models.",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Data Visualization"],
      path: "/services/ai-business-intelligence"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage the power of quantum computing for complex optimization problems and advanced simulations.",
      icon: Atom,
      features: ["Quantum Algorithms", "Optimization", "Cryptography", "Research Support"],
      path: "/services/quantum-computing"
    },
    {
      title: "Micro SAAS Development",
      description: "Scalable, cloud-native software solutions designed for modern business needs and rapid deployment.",
      icon: Zap,
      features: ["Cloud-Native", "API-First", "Scalable Architecture", "Real-time Analytics"],
      path: "/services/micro-saas"
    },
    {
      title: "Digital Transformation",
      description: "Complete modernization of your infrastructure with cloud migration, DevOps, and security best practices.",
      icon: Rocket,
      features: ["Cloud Migration", "DevOps Implementation", "Security & Compliance", "Performance Optimization"],
      path: "/services/digital-transformation"
    }
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our innovative solutions can transform your business and drive growth in the digital age.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl mr-4">
                  <service.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to={service.path}
                className="inline-flex items-center w-full justify-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturedServices.displayName = 'FeaturedServices';

// New section: Why Choose Us
const WhyChooseUs = React.memo(() => {
  const reasons = useMemo(() => [
    {
      icon: StarIcon,
      title: "Proven Excellence",
      description: "Award-winning solutions with a track record of delivering exceptional results for our clients."
    },
    {
      icon: ClockIcon,
      title: "Rapid Deployment",
      description: "Quick implementation and deployment ensuring you see results faster than traditional approaches."
    },
    {
      icon: TrendingUpIcon,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, from startup to enterprise scale."
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure reliable, robust solutions."
    }
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = 'WhyChooseUs';

// New section: Latest Innovations
const LatestInnovations = React.memo(() => {
  const innovations = useMemo(() => [
    {
      title: "AI Autonomous Systems",
      description: "Self-learning AI systems that continuously improve and adapt to your business needs.",
      category: "Artificial Intelligence",
      readTime: "5 min read"
    },
    {
      title: "Quantum Edge Computing",
      description: "Bringing quantum computing power to edge devices for real-time processing.",
      category: "Quantum Computing",
      readTime: "7 min read"
    },
    {
      title: "Sustainable Tech Solutions",
      description: "Green technology solutions that reduce environmental impact while improving efficiency.",
      category: "Sustainability",
      readTime: "4 min read"
    }
  ], []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Latest Innovations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our cutting-edge research and development in emerging technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {innovations.map((innovation, idx) => (
            <motion.div
              key={innovation.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {innovation.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {innovation.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {innovation.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {innovation.readTime}
                </span>
                
                <Link
                  to="/blog"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
                >
                  Read More
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg"
          >
            Explore All Innovations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

LatestInnovations.displayName = 'LatestInnovations';

// Enhanced contact section
const ContactSection = React.memo(() => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our experts to discuss how our innovative services can drive your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-cyan-400" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-cyan-400" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="h-6 w-6 text-cyan-400" />
              <span className="text-white">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 text-lg"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

// Main Home component
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetStarted = () => {
    // Handle get started action
    console.log('Get Started clicked');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <FuturisticBackground />
      
      <HeroSection onGetStarted={handleGetStarted} />
      <StatsSection />
      <FeaturedServices />
      <WhyChooseUs />
      <LatestInnovations />
      <ContactSection />
    </div>
  );
}

export default Home;
