import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Lock, 
  BarChart3, 
  Smartphone, 
  Rocket, 
  Target, 
  Lightbulb, 
  Code, 
  Network, 
  Eye, 
  Star, 
  CheckCircle, 
  Users, 
  Building, 
  Palette,
  TrendingUp,
  Award,
  Heart,
  Clock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "Leverage the power of machine learning, natural language processing, and computer vision to drive innovation and efficiency across your organization.",
      icon: <Brain className="w-16 h-16" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "Quantum Computing",
      subtitle: "Next-generation computational power for complex problem solving",
      description: "Harness the revolutionary potential of quantum computing to solve previously intractable problems in cryptography, optimization, and scientific research.",
      icon: <Cpu className="w-16 h-16" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-600/20"
    },
    {
      title: "Digital Transformation",
      subtitle: "Modernize your business for the digital age",
      description: "Complete digital transformation solutions including cloud migration, process automation, and modern application development to future-proof your business.",
      icon: <Rocket className="w-16 h-16" />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/20 to-teal-600/20"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions for business automation and insights",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      count: 45,
      href: "/services/ai-ml",
      services: [
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Machine Learning Platforms",
        "AI Consulting & Strategy"
      ]
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      count: 28,
      href: "/services/cybersecurity",
      services: [
        "Threat Detection & Response",
        "Security Audits & Compliance",
        "Penetration Testing",
        "Security Architecture",
        "Incident Response"
      ]
    },
    {
      name: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and modern infrastructure management",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      count: 32,
      href: "/services/cloud",
      services: [
        "Cloud Migration",
        "DevOps & CI/CD",
        "Serverless Architecture",
        "Container Orchestration",
        "Infrastructure as Code"
      ]
    },
    {
      name: "Data & Analytics",
      description: "Transform raw data into actionable business intelligence",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      count: 36,
      href: "/services/data",
      services: [
        "Business Intelligence",
        "Big Data Processing",
        "Data Engineering",
        "Real-time Analytics",
        "Data Visualization"
      ]
    },
    {
      name: "Development",
      description: "Custom software development and modern application solutions",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      count: 41,
      href: "/services/development",
      services: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Microservices",
        "Legacy Modernization"
      ]
    },
    {
      name: "IoT & Edge Computing",
      description: "Connected devices and edge computing solutions",
      icon: Network,
      color: "from-yellow-500 to-orange-500",
      count: 24,
      href: "/services/iot",
      services: [
        "IoT Platform Development",
        "Edge Computing",
        "Sensor Networks",
        "Device Management",
        "Data Streaming"
      ]
    }
  ];

  const microSaasServices = [
    {
      name: "AI Content Generator",
      description: "Automated content creation for marketing, blogs, and social media",
      features: ["Multi-language support", "SEO optimization", "Brand voice consistency"],
      price: "$99/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence and performance monitoring",
      features: ["Custom metrics", "Automated reporting", "Mobile responsive"],
      price: "$149/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Automated Customer Support",
      description: "AI-powered chatbot and ticket management system",
      features: ["24/7 availability", "Multi-channel support", "Learning capabilities"],
      price: "$199/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Solutions",
      content: "Zion Tech Group transformed our legacy systems into a modern, AI-powered platform. The results exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CEO, DataSphere Inc",
      content: "Their quantum computing expertise helped us solve complex optimization problems that were previously impossible.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, CloudFirst",
      content: "The cybersecurity implementation was seamless and significantly improved our threat detection capabilities.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50+", label: "Enterprise Clients", icon: <Building className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const HeroSection = () => {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        </div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-hologram">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30 neon-glow"></div>
          </div>
          <div className="absolute top-3/4 right-1/4 animate-hologram-delayed">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-40 neon-glow"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-hologram">
            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-50 neon-glow"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-hologram">
            <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 neon-glow"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium text-cyan-400 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Leading AI & Technology Solutions
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered
            </span>{' '}
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Zion Tech Group delivers cutting-edge artificial intelligence, quantum computing, and digital transformation solutions that drive innovation and accelerate business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI, quantum computing, IoT, and digital transformation solutions. Expert consulting and innovative technology services."
        keywords="AI solutions, quantum computing, IoT, digital transformation, technology consulting, cybersecurity, cloud services"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="futuristic-heading">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="futuristic-card hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{category.count}</div>
                      <div className="text-sm text-slate-400">Services</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={category.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 group-hover:translate-x-1"
                  >
                    Explore {category.name}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Innovative Micro SAAS Services Showcase */}
        <motion.section 
          className="py-24 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div className="text-center mb-20" variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Innovative <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ready-to-deploy micro SAAS applications that solve specific business challenges and drive immediate value
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-emerald-400">{service.price}</span>
                      <div className="text-sm text-slate-400">per month</div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 rounded-lg font-semibold text-center hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 block"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their operations with Zion Tech Group's innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
