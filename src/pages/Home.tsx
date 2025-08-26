import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import the new service data
import { NEXT_GEN_INNOVATIVE_SERVICES_2027 } from '../data/nextGenInnovativeServices2027';
import { ADVANCED_AI_SERVICES_2027 } from '../data/advancedAIServices2027';
import { ADVANCED_IT_INFRASTRUCTURE_SERVICES_2027 } from '../data/advancedITInfrastructureServices2027';

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');

  const heroSlides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization. Our solutions are designed to scale with your business needs.",
      image: "/images/hero-ai-solutions.jpg",
      cta: "Explore AI Solutions",
      path: "/ai-services",
      features: ["Machine Learning", "Predictive Analytics", "Process Automation", "Real-time Insights"],
      gradient: "from-zion-cyan via-zion-purple to-zion-blue"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed in today's competitive landscape.",
      image: "/images/hero-it-services.jpg",
      cta: "View Our Services",
      path: "/it-services",
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
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const featuredServices = [
    {
      title: "Quantum-Classical Hybrid AI",
      description: "Revolutionary AI platform combining quantum computing with classical AI algorithms",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      price: "$15,999/month",
      link: "/ai-services/quantum-classical-hybrid-ai"
    },
    {
      title: "6G Network Infrastructure",
      description: "Next-generation 6G network with terahertz frequencies and ultra-low latency",
      icon: Network,
      color: "from-blue-500 to-cyan-500",
      price: "$29,999/month",
      link: "/it-services/6g-network-infrastructure"
    },
    {
      title: "Synthetic Biology AI",
      description: "AI-powered platform for designing and optimizing biological systems",
      icon: Dna,
      color: "from-green-500 to-emerald-500",
      price: "$12,999/month",
      link: "/ai-services/synthetic-biology-ai"
    },
    {
      title: "Autonomous AI Agents",
      description: "Platform for creating autonomous AI agents that perform complex tasks",
      icon: Rocket,
      color: "from-orange-500 to-red-500",
      price: "$15,999/month",
      link: "/ai-services/autonomous-ai-agents"
    }
  ];

  const innovationCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        "Quantum-Classical Hybrid AI",
        "Multimodal AI Platform",
        "Autonomous AI Agents",
        "Neuromorphic AI Processing",
        "AI-Powered Drug Discovery",
        "AI Financial Trading Platform"
      ]
    },
    {
      title: "Next-Gen Infrastructure",
      description: "Revolutionary infrastructure solutions",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      services: [
        "6G Network Infrastructure",
        "Quantum-Secure Cloud",
        "AI-Powered Edge Computing",
        "Blockchain Infrastructure",
        "Zero-Trust Security",
        "Space Technology Platform"
      ]
    },
    {
      title: "Emerging Technologies",
      description: "Breakthrough technologies of the future",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      services: [
        "Synthetic Biology AI",
        "Holographic AR/VR",
        "Brain-Computer Interfaces",
        "Autonomous Drone Fleets",
        "Quantum Blockchain",
        "Neuromorphic Computing"
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution is powered by cutting-edge artificial intelligence"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with zero-trust architecture"
    },
    {
      icon: Cloud,
      title: "Cloud-Native",
      description: "Built for the cloud with scalability and reliability"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance and speed"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      rating: 5,
      content: "Zion Tech Group transformed our infrastructure with their AI-powered solutions. The results exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      rating: 5,
      content: "Their quantum computing solutions gave us a competitive edge we never thought possible."
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, FutureTech",
      rating: 5,
      content: "The level of innovation and support from Zion Tech Group is unmatched in the industry."
    }
  ];

  const quickActions = [
    { name: "Find Talent", icon: Users, path: "/talent", color: "from-blue-500 to-cyan-500" },
    { name: "Browse Services", icon: Code, path: "/services", color: "from-purple-500 to-pink-500" },
    { name: "Get Equipment", icon: Cpu, path: "/equipment", color: "from-green-500 to-teal-500" },
    { name: "Request Quote", icon: Rocket, path: "/contact", color: "from-orange-500 to-red-500" }
  ];

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        {/* Enhanced background with animated elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-zion-blue/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for services, talent, equipment, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </motion.div>

          {/* Hero Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {heroSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] p-8 lg:p-12">
                      <motion.div 
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                          {slide.features.map((feature, featureIndex) => (
                            <motion.span 
                              key={featureIndex} 
                              className="px-4 py-2 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.4 + featureIndex * 0.1 }}
                            >
                              {feature}
                            </motion.span>
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          <Link
                            to={slide.path}
                            className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            {slide.cta}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <div className={`w-full h-80 lg:h-96 bg-gradient-to-br ${slide.gradient} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <div className="text-center text-white">
                            <div className="text-6xl mb-4">🚀</div>
                            <p className="text-xl font-semibold">Innovation Hub</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-zion-cyan/30 text-white p-3 rounded-full hover:bg-zion-cyan/20 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-zion-cyan/30 text-white p-3 rounded-full hover:bg-zion-cyan/20 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Enhanced Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-zion-cyan w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quick Actions</h2>
            <p className="text-zion-slate-light text-lg">Get started with Zion Tech Group in seconds</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={action.path}
                  className="block p-6 bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{action.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-zion-slate-light">{stat.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Technology Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our cutting-edge services that are shaping the future of technology, business, and society
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="text-zion-cyan font-semibold text-lg">
                      {service.price}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-slate-dark/50 to-zion-slate/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovation Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of innovative solutions across multiple technology domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {innovationCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-zion-slate-dark/80 to-zion-slate/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-full mb-6`}>
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-6 text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate-light text-lg">Built for the future, designed for success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-zion-slate-light text-lg">Trusted by businesses worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-zion-slate-light text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of technology with Zion Tech Group. Our innovative solutions are designed to give you a competitive edge in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-full hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-full hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
