
import React, { Suspense, useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Zap, 
  Rocket, 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

import { SEO } from '@/components/SEO';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

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
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
          style={{
            left: particle.left,
            top: particle.top
          }}
        />
      ))}
    </div>
  );
});

// Service categories data
const serviceCategories = [
  {
    name: "AI Solutions",
    description: "Cutting-edge artificial intelligence services for business transformation",
    icon: "🤖",
    href: "/ai-services",
    count: 20,
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Edge & IoT",
    description: "Ultra-low latency edge computing and IoT platform solutions",
    icon: "⚡",
    href: "/services/edge-computing-platform",
    count: 8,
    color: "from-blue-500 to-purple-600"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment solutions",
    icon: "☁️",
    href: "/services/cloud-devops",
    count: 12,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Cybersecurity",
    description: "Advanced security protocols and threat protection systems",
    icon: "🔒",
    href: "/services/ai-compliance-copilot",
    count: 10,
    color: "from-red-500 to-orange-600"
  },
  {
    name: "Data Governance",
    description: "AI-powered data protection and compliance management",
    icon: "🛡️",
    href: "/services/ai-data-governance",
    count: 6,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Customer Success",
    description: "AI-driven customer engagement and retention platforms",
    icon: "💝",
    href: "/services/customer-success",
    count: 15,
    color: "from-pink-500 to-rose-600"
  }
];

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
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zion-slate-dark font-bold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zion-slate-dark"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Hero Slides */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zion-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                          <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                  {React.createElement(heroSlides[currentSlide].icon, { className: "w-12 h-12 text-cyan-400" })}
                </div>
              </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              {heroSlides[currentSlide].title}
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              {heroSlides[currentSlide].description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Slide Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

// Stats section component
const StatsSection = React.memo(() => {
  const stats = [
    { label: "Global Clients", value: "500+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Projects Delivered", value: "1000+", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Security Certifications", value: "25+", icon: Shield, color: "from-red-500 to-orange-500" },
    { label: "Countries Served", value: "45+", icon: Globe, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section className="py-20 bg-zion-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies 
            transform their digital infrastructure and achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
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

// Services preview section
const ServicesPreview = React.memo(() => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered insights to quantum computing breakthroughs, 
            we deliver cutting-edge solutions that drive innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link
                to={service.href}
                className="block bg-zion-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/10"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 text-3xl`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-medium">
                    {service.count} Solutions
                  </span>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});

// Testimonials section
const TestimonialsSection = React.memo(() => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechFlow Inc.",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. We've seen a 300% improvement in processing efficiency.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Engineering, DataSphere",
      content: "Their quantum computing expertise helped us solve complex optimization problems that were previously impossible to tackle.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director, Quantum Labs",
      content: "Working with Zion Tech Group has accelerated our research timeline by 2 years. Their innovative approach is unmatched.",
      rating: 5,
      avatar: "👩‍🔬"
    }
  ];

  return (
    <section className="py-20 bg-zion-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders 
            have to say about working with Zion Tech Group.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zion-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-zion-slate-700"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// CTA section
const CTASection = React.memo(() => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of companies already leveraging our cutting-edge technology 
            solutions to stay ahead of the competition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Free Consultation
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-zion-slate-dark font-bold rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

// Main Home component
const Home: React.FC = () => {
  const handleGetStarted = () => {
    // Handle get started action
    console.log('Get started clicked');
  };

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI, Quantum Computing & Micro SAAS Solutions"
        description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing expertise, and innovative micro SAAS services. Leading the future of technology."
        keywords="AI solutions, quantum computing, micro SAAS, digital transformation, cybersecurity, cloud computing, Zion Tech Group"
      />
      
      <FuturisticBackground />
      
      <main className="relative z-10">
        <HeroSection onGetStarted={handleGetStarted} />
        <StatsSection />
        <ServicesPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
};

export default Home;