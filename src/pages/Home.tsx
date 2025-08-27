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
  Database
} from 'lucide-react';

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
      title: "AI Business Intelligence",
      description: "Transform data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.",
      icon: Brain,
      path: "/services/ai-analytics",
      category: "AI Solutions",
      price: "$2,500/mo",
      rating: 4.9,
      reviewCount: 127,
      highlights: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "AI Insights"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability and performance.",
      icon: Cloud,
      path: "/services/cloud-devops",
      category: "Infrastructure",
      price: "$1,800/mo",
      rating: 4.8,
      reviewCount: 89,
      highlights: ["99.9% Uptime", "Auto-scaling", "Security First", "Cost Optimization"]
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with enterprise-grade security solutions. From threat detection to compliance management, we've got you covered.",
      icon: Shield,
      path: "/services/cybersecurity",
      category: "Security",
      price: "$3,200/mo",
      rating: 4.9,
      reviewCount: 156,
      highlights: ["24/7 Monitoring", "Threat Detection", "Compliance Ready", "Incident Response"]
    }
  ];

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions",
      icon: Brain
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud computing solutions",
      icon: Cloud
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security and compliance services",
      icon: Shield
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation consulting",
      icon: Zap
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions helped us increase efficiency by 40%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLab",
      content: "The cybersecurity implementation was seamless. We feel much more secure and compliant now.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GlobalTech",
      content: "Outstanding service and support. The team is always available and solutions are cutting-edge.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].gradient} opacity-80`}></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  <div className="relative h-full flex items-center">
                    <div className="max-w-4xl mx-auto text-center text-white px-8">
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                      >
                        {heroSlides[currentSlide].title}
                      </motion.h1>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-zion-cyan mb-6"
                      >
                        {heroSlides[currentSlide].subtitle}
                      </motion.p>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-zion-slate-light mb-8 max-w-3xl mx-auto"
                      >
                        {heroSlides[currentSlide].description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                      >
                        {heroSlides[currentSlide].features.map((feature, index) => (
                          <span
                            key={feature}
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-zion-cyan" />
                            {feature}
                          </span>
                        ))}
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                      >
                        <Link
                          to={heroSlides[currentSlide].path}
                          className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          {heroSlides[currentSlide].cta}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-zion-cyan w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-cyan font-semibold mb-2">{stat.label}</div>
                  <div className="text-zion-slate-light text-sm">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Featured Services</h2>
              <p className="text-zion-slate-light text-lg">Discover how our innovative solutions can transform your business</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-white text-sm">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-zion-cyan font-bold text-xl">{service.price}</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-zion-slate-light text-sm mb-2">Key Features:</div>
                    <div className="space-y-1">
                      {service.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-zion-cyan mr-2" />
                          <span className="text-zion-slate-light">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-zion-slate-light text-lg">We deliver results that matter</p>
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
        <section className="py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-zion-slate-light text-lg mb-8">Join thousands of businesses already leveraging our innovative solutions</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300 font-medium text-lg"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
}
