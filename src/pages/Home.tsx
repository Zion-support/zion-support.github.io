import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  Search,
  Rocket,
  Code,
  Lock,
  Cpu,
  Database,
  Sparkles,
  Target,
  Lightbulb,
  Server,
  Wifi,
  Monitor,
  Laptop,
  Handshake,
  FileImage,
  Network,
  Heart,
  BarChart3,
  BookOpen,
  ShoppingCart,
  CpuIcon,
  MessageCircle
} from 'lucide-react';
import { innovativeMicroSaasServices2026, specializedServices2026, zionContactInfo } from '../data/innovativeMicroSaasServices2026';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/services/ai-analytics",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-zion-cyan via-zion-purple to-zion-blue"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/services",
      features: ["Cloud Infrastructure", "Cybersecurity", "DevOps Automation", "24/7 Support"],
      gradient: "from-zion-blue via-zion-cyan to-zion-purple"
    },
    {
      title: "Green IT Solutions",
      subtitle: "Sustainable technology for a better future",
      description: "Implement eco-friendly IT solutions that reduce your carbon footprint while maintaining performance and driving business value.",
      image: "/images/hero-green-it.jpg",
      cta: "Learn More",
      path: "/green-it",
      features: ["Energy Efficiency", "Carbon Reduction", "Sustainable Practices", "Cost Savings"],
      gradient: "from-zion-cyan via-zion-blue to-zion-purple"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", description: "Trusted by businesses worldwide" },
    { icon: TrendingUp, value: "95%", label: "Success Rate", description: "Proven track record of delivery" },
    { icon: Award, value: "10+", label: "Years Experience", description: "Deep industry expertise" },
    { icon: Globe, value: "25+", label: "Countries Served", description: "Global reach and support" }
  ];

  const featuredServices = [
    {
      title: "ZionAI Business Intelligence Suite",
      description: "Next-generation AI-powered business intelligence platform with real-time analytics, predictive modeling, and automated insights generation.",
      icon: Brain,
      path: "/services/ai-analytics",
      category: "AI Solutions",
      price: "$2,999/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom AI Models", "Multi-source Integration"],
      contact: zionContactInfo
    },
    {
      title: "ZionShield Enterprise Security",
      description: "Comprehensive cybersecurity platform with AI-powered threat detection, compliance management, and zero-trust architecture.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$2,499/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["AI Threat Detection", "Zero-trust Security", "Compliance Automation", "24/7 SOC Support"],
      contact: zionContactInfo
    },
    {
      title: "ZionQuantum Computing Platform",
      description: "Access to quantum computing resources for complex problem solving, optimization, and research applications.",
      icon: Rocket,
      path: "/services/quantum-computing",
      category: "Future Tech",
      price: "$4,999/mo",
      rating: 4.9,
      reviewCount: 45,
      highlights: ["Quantum Algorithms", "Hybrid Computing", "Research Tools", "Expert Consultation"],
      contact: zionContactInfo
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Analytics",
      icon: Brain,
      description: "Machine learning, predictive analytics, and business intelligence",
      services: ["AI Business Intelligence", "Data Analytics", "Predictive Modeling", "Process Automation"],
      path: "/services/ai-analytics",
      color: "from-zion-cyan to-zion-purple"
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      description: "Enterprise-grade security and compliance solutions",
      services: ["Threat Detection", "Zero-trust Security", "Compliance Management", "Incident Response"],
      path: "/services/cybersecurity",
      color: "from-zion-purple to-zion-pink"
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable infrastructure and automated deployment",
      services: ["Cloud Management", "CI/CD Pipelines", "Infrastructure as Code", "Auto-scaling"],
      path: "/services/cloud-devops",
      color: "from-zion-blue to-zion-cyan"
    },
    {
      name: "IoT & Edge",
      icon: Cpu,
      description: "Connected devices and edge computing solutions",
      services: ["Device Management", "Edge Computing", "Real-time Analytics", "Predictive Maintenance"],
      path: "/services/iot-edge",
      color: "from-zion-cyan to-zion-green"
    },
    {
      name: "Quantum Computing",
      icon: Rocket,
      description: "Next-generation computing for complex problems",
      services: ["Quantum Algorithms", "Optimization Solvers", "Research Tools", "Hybrid Computing"],
      path: "/services/quantum-computing",
      color: "from-zion-purple to-zion-orange"
    },
    {
      name: "Blockchain & Web3",
      icon: Lock,
      description: "Decentralized solutions and digital assets",
      services: ["Smart Contracts", "Supply Chain", "Identity Management", "DeFi Integration"],
      path: "/services/blockchain",
      color: "from-zion-orange to-zion-yellow"
    }
  ];

  const industrySolutions = [
    {
      name: "Healthcare",
      icon: Heart,
      description: "Digital health solutions and medical technology",
      solutions: ["Telemedicine", "AI Diagnostics", "Patient Management", "Medical IoT"],
      path: "/solutions/healthcare"
    },
    {
      name: "Finance",
      icon: BarChart3,
      description: "Fintech solutions and financial technology",
      solutions: ["Digital Banking", "AI Trading", "Risk Management", "Blockchain Finance"],
      path: "/solutions/finance"
    },
    {
      name: "Manufacturing",
      icon: CpuIcon,
      description: "Smart manufacturing and Industry 4.0",
      solutions: ["Digital Twin", "Predictive Maintenance", "Supply Chain", "Quality Control"],
      path: "/solutions/manufacturing"
    },
    {
      name: "Retail",
      icon: ShoppingCart,
      description: "E-commerce and retail technology",
      solutions: ["Omnichannel", "AI Personalization", "Inventory Management", "Customer Analytics"],
      path: "/solutions/retail"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Particle Effects */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container-responsive relative z-10">
          <div className="text-center space-y-8">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="futuristic-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl">
                Zion Tech Group
              </h1>
              <p className="futuristic-subheading text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto">
                Pioneering the future of technology with innovative AI, cybersecurity, and digital transformation solutions
              </p>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Empowering businesses worldwide with cutting-edge technology solutions that drive innovation, 
                enhance security, and accelerate digital transformation.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-cyan/60" />
                <input
                  type="text"
                  placeholder="Search for AI services, cybersecurity, cloud solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-cyan/60 focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 text-lg transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 futuristic-btn px-6 py-2"
                >
                  Search
                </button>
              </form>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/services"
                className="futuristic-btn px-8 py-4 text-lg font-semibold"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 text-lg font-semibold border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black rounded-lg transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full float-animation"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple/20 rounded-full float-animation-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zion-cyan/10 rounded-full float-animation-slow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="neon-text-cyan text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-zion-cyan/70 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-4xl lg:text-5xl mb-6">
              Featured Services
            </h2>
            <p className="futuristic-subheading text-xl text-zion-cyan max-w-3xl mx-auto">
              Discover our most innovative and impactful technology solutions
            </p>
          </motion.div>

          <div className="futuristic-grid">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="futuristic-card p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                    <div className="text-sm text-zion-cyan/70">{service.category}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-white/90">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/70 text-sm">({service.reviewCount} reviews)</span>
                  </div>
                </div>

                <Link
                  to={service.path}
                  className="futuristic-btn w-full text-center py-3"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-4xl lg:text-5xl mb-6">
              Service Categories
            </h2>
            <p className="futuristic-subheading text-xl text-zion-cyan max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card p-6 group cursor-pointer"
              >
                <Link to={category.path}>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {category.services.map((service, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-white/80 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-zion-cyan group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="futuristic-heading text-4xl lg:text-5xl mb-6">
              Industry Solutions
            </h2>
            <p className="futuristic-subheading text-xl text-zion-cyan max-w-3xl mx-auto">
              Tailored technology solutions for specific industry challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="futuristic-card p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                    <p className="text-zion-cyan/80">{industry.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {industry.solutions.map((solution, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-white/90 text-sm">{solution}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={industry.path}
                  className="futuristic-btn w-full text-center py-3"
                >
                  Explore {industry.name} Solutions
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="futuristic-card p-12 max-w-4xl mx-auto">
              <h2 className="futuristic-heading text-4xl lg:text-5xl mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="futuristic-subheading text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
                Let's discuss how our innovative technology solutions can drive your success
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div className="text-white font-semibold">Contact Us</div>
                  <div className="text-zion-cyan/70 text-sm">{zionContactInfo.phone}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-purple/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-zion-purple" />
                  </div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-zion-cyan/70 text-sm">{zionContactInfo.email}</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-zion-blue/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-zion-blue" />
                  </div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-zion-cyan/70 text-sm">{zionContactInfo.address}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="futuristic-btn px-8 py-4 text-lg font-semibold"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/request-quote"
                  className="px-8 py-4 text-lg font-semibold border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-black rounded-lg transition-all duration-300"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components
const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapPin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
