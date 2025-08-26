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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp Inc.",
      content: "Zion Tech Group transformed our AI infrastructure completely. Their quantum AI platform increased our processing speed by 300%.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow Systems",
      content: "The edge AI orchestration platform revolutionized our IoT deployment. Seamless integration and incredible performance gains.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "AI Director, FutureTech Labs",
      content: "Outstanding AI strategy consulting. They helped us navigate the complex AI landscape and achieve remarkable ROI.",
      rating: 5,
      avatar: "👩‍🔬"
    }
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

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Our <span className="gradient-text animate-neon-pulse">Service Categories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
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
                variants={cardVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <Link to={category.href} className="block">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover-lift group-hover:shadow-zion-glow overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,221,210,0.03)_25%,rgba(34,221,210,0.03)_50%,transparent_50%,transparent_75%,rgba(34,221,210,0.03)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light text-center mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {category.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 text-zion-cyan text-sm font-medium border border-zion-cyan/30 group-hover:from-zion-cyan/30 group-hover:to-zion-purple/30 transition-all duration-300">
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

      {/* Enhanced Featured Services */}
      <motion.section 
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              <span className="gradient-text animate-neon-pulse">Featured Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
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
              <motion.div key={service.title} variants={cardVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* New Testimonials Section */}
      <motion.section 
        className="py-24 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              What Our <span className="gradient-text animate-neon-pulse">Clients Say</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Real feedback from industry leaders who have transformed their businesses with our solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                whileHover="hover"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover-lift group-hover:shadow-zion-glow relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,221,210,0.03)_25%,rgba(34,221,210,0.03)_50%,transparent_50%,transparent_75%,rgba(34,221,210,0.03)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-2xl text-yellow-400">⭐</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-zion-slate-light text-lg leading-relaxed mb-8 text-center italic group-hover:text-white transition-colors duration-300">
                      "{testimonial.content}"
                    </blockquote>
                    
                    {/* Author */}
                    <div className="text-center">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-2">{testimonial.name}</h4>
                      <p className="text-zion-cyan text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Stats Section */}
      <motion.section 
        className="py-24 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Why Choose <span className="gradient-text animate-neon-pulse">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Our track record speaks for itself - we deliver results that exceed expectations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover="hover"
                className="text-center group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover-lift group-hover:shadow-zion-glow relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,221,210,0.03)_25%,rgba(34,221,210,0.03)_50%,transparent_50%,transparent_75%,rgba(34,221,210,0.03)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-6 group-hover:scale-110 group-hover:animate-bounce-gentle transition-all duration-500">{stat.icon}</div>
                    <div className="text-4xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">{stat.value}</div>
                    <div className="text-zion-slate-light group-hover:text-white transition-colors duration-300">{stat.label}</div>
                  </div>
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
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="gradient-text animate-neon-pulse">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our innovative technology solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="btn-primary text-lg py-5 px-10 hover:scale-105 transition-transform duration-300 group"
              >
                <span className="flex items-center gap-3">
                  <span className="group-hover:rotate-12 transition-transform duration-300">🚀</span>
                  Get Started Today
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-lg py-5 px-10 hover:scale-105 transition-transform duration-300 group"
              >
                <span className="flex items-center gap-3">
                  <span className="group-hover:bounce transition-all duration-300">🔍</span>
                  View All Services
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;