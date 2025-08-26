import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import InteractiveServiceShowcase from '../components/InteractiveServiceShowcase';
import LinkHealthChecker from '../components/LinkHealthChecker';
import PerformanceMonitor from '../components/PerformanceMonitor';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // SEO metadata for the home page
  const seoMetadata = {
    title: "AI-Powered Innovation & Enterprise Solutions",
    description: "Transform your business with cutting-edge AI solutions, comprehensive IT services, and digital transformation expertise. Leading technology consulting for modern enterprises.",
    keywords: "AI solutions, artificial intelligence, enterprise IT, cybersecurity, cloud computing, digital transformation, Zion Tech Group",
    type: "website" as const,
    url: "https://ziontechgroup.com"
  };

  const heroSlides = [
    {
      name: "AI & Machine Learning",
      count: 15,
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: "🤖",
      color: "from-zion-blue to-zion-cyan",
      href: "/services/ai"
    },
    {
      name: "Quantum Computing",
      count: 3,
      description: "Revolutionary quantum computing and quantum internet platforms",
      icon: "🔮",
      color: "from-zion-purple to-zion-cyan",
      href: "/services/quantum"
    },
    {
      name: "Cybersecurity",
      count: 5,
      description: "Advanced zero-trust security and threat protection",
      icon: "🛡️",
      color: "from-zion-red to-zion-purple",
      href: "/services/cybersecurity"
    },
    {
      name: "Cloud & Infrastructure",
      count: 8,
      description: "Multi-cloud orchestration and edge computing",
      icon: "☁️",
      color: "from-zion-cyan to-zion-green",
      href: "/services/cloud"
    },
    {
      name: "Emerging Technologies",
      count: 12,
      description: "Space tech, biotechnology, nanotechnology, and fusion energy",
      icon: "🚀",
      color: "from-zion-yellow to-zion-orange",
      href: "/comprehensive-services-showcase-2025"
    },
    {
      name: "Digital Transformation",
      count: 6,
      description: "Comprehensive digital workplace and API management",
      icon: "⚡",
      color: "from-zion-orange to-zion-red",
      href: "/services/transformation"
    }
  ];

  const stats = [
    { label: "Services Available", value: "50+", icon: "🚀" },
    { label: "Happy Clients", value: "200+", icon: "😊" },
    { label: "Team Members", value: "50+", icon: "👥" },
    { label: "Years Experience", value: "10+", icon: "⏰" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment with cutting-edge technologies"
    },
    {
      icon: Lock,
      title: "Secure by Design",
      description: "Enterprise-grade security built into every solution from the ground up"
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Grow without limits with our flexible and scalable infrastructure solutions"
    },
    {
      icon: Database,
      title: "Data-Driven",
      description: "Insights that drive better business decisions and strategic planning"
    }
  ];

  const trustSignals = [
    { icon: Eye, label: "Transparent Pricing", description: "No hidden fees or surprises" },
    { icon: Heart, label: "Customer First", description: "Your success is our priority" },
    { icon: TargetIcon, label: "Results Focused", description: "Measurable outcomes guaranteed" },
    { icon: Sparkles, label: "Innovation Leader", description: "Cutting-edge technology solutions" }
  ];

  const aiServices = [
    {
      title: "AI Autonomous Systems",
      description: "Self-managing AI systems that operate independently",
      icon: Bot,
      path: "/services/ai-autonomous-systems",
      features: ["Self-Learning", "Automated Decision Making", "Continuous Optimization"]
    },
    {
      title: "Quantum Technology",
      description: "Next-generation computing solutions",
      icon: Microchip,
      path: "/services/quantum-technology",
      features: ["Quantum Computing", "Quantum Security", "Quantum Algorithms"]
    },
    {
      title: "Machine Learning",
      description: "Custom ML models for your business needs",
      icon: Brain,
      path: "/ai-solutions",
      features: ["Custom Models", "Training Data", "Model Deployment"]
    }
  ];

  const industrySolutions = [
    {
      title: "Healthcare",
      description: "AI-powered healthcare solutions",
      icon: ShieldCheck,
      path: "/solutions/healthcare",
      features: ["Patient Care", "Diagnostics", "Administrative Efficiency"]
    },
    {
      title: "Finance",
      description: "Financial technology innovations",
      icon: BarChart,
      path: "/solutions/enterprise",
      features: ["Risk Management", "Fraud Detection", "Automated Trading"]
    },
    {
      title: "Manufacturing",
      description: "Smart manufacturing solutions",
      icon: Cpu,
      path: "/solutions/enterprise",
      features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization"]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, heroSlides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <SEOHead {...seoMetadata} />
      
      {/* Enhanced Service Categories Overview */}
      <motion.section 
        className="py-24 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={category.href} className="block">
                  <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl border border-white/25 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl shadow-xl">
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light text-center mb-6 text-lg leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan/25 to-zion-blue/25 text-zion-cyan text-sm font-semibold border border-zion-cyan/40">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Service Showcase */}
      <InteractiveServiceShowcase />

      {/* Comprehensive Services Overview */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Comprehensive Technology</span> Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              From cutting-edge AI to revolutionary space technology, we offer the most comprehensive suite of innovative solutions in the industry
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🔮</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Quantum Technologies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Quantum AI fusion, quantum internet, and quantum-safe cryptography
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium">
                    3 Services
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Emerging Technologies</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Space tech, biotechnology, nanotechnology, and fusion energy
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium">
                    12 Services
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-green rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Cloud & Infrastructure</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Multi-cloud orchestration, edge computing, and DevOps automation
                </p>
                <div className="text-center">
                  <span className="text-zion-cyan text-sm font-medium">
                    8 Services
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-red to-zion-purple rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Cybersecurity</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Zero-trust architecture, threat detection, and compliance management
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium">
                    5 Services
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-yellow to-zion-orange rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Digital Transformation</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  Digital workplace, API management, and performance monitoring
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium">
                    6 Services
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-zion-blue to-zion-cyan rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">AI & Machine Learning</h3>
                <p className="text-zion-slate-light text-center mb-4">
                  AI strategy, machine learning, and neural computing platforms
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium">
                    15 Services
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <a 
              href="/comprehensive-services-showcase-2025"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-dark transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Services */}
      <motion.section 
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Featured Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover our most innovative and in-demand technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <motion.section 
        className="py-24 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="gradient-text">Transform</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our innovative solutions drive digital transformation across diverse sectors
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="text-zion-slate-light text-center">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">Zion Tech Group</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Our track record speaks for itself - we deliver results that exceed expectations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{reason.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-zion-slate-light">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Impact</span> in Numbers
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Quantifying our success through measurable achievements and client satisfaction
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-24 h-24 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300 shadow-xl`}>
                  <div className="text-5xl group-hover:animate-bounce-gentle">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                <div className="text-zion-slate-light text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our innovative technology solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="btn-primary text-xl py-6 px-12 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="font-semibold">Get Started Today</span>
                  <span className="text-xl">→</span>
                </span>
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-xl py-6 px-12 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <span className="font-semibold">View All Services</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Website Health Monitor */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website <span className="gradient-text">Health Monitor</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We continuously monitor our website to ensure all links and services are working properly
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <LinkHealthChecker 
              links={[
                { url: '/', label: 'Home Page' },
                { url: '/services', label: 'Services Page' },
                { url: '/about', label: 'About Page' },
                { url: '/contact', label: 'Contact Page' },
                { url: '/blog', label: 'Blog Page' },
                { url: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn Profile' },
                { url: 'https://twitter.com/ziontechgroup', label: 'Twitter Profile' },
                { url: 'https://github.com/ziontechgroup', label: 'GitHub Profile' },
                { url: 'tel:+13024640950', label: 'Phone Number' },
                { url: 'mailto:kleber@ziontechgroup.com', label: 'Email Address' }
              ]}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Performance Monitor */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Performance</span> Monitoring
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real-time performance metrics to ensure optimal user experience and fast loading times
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <PerformanceMonitor />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;