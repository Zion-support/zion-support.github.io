import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from "@/components/SEO";
import { EnhancedInnovativeServicesShowcase } from "@/components/EnhancedInnovativeServicesShowcase";
import { EnhancedPricingComparison } from "@/components/EnhancedPricingComparison";

// Enhanced loading component with better UX
const EnhancedLoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="relative">
      <div className="w-32 h-32 border-4 border-cyan-400/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-32 h-32 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-lg">
        ZION
      </div>
      <div className="mt-4 text-center">
        <div className="text-cyan-400 text-sm animate-pulse">Loading amazing experiences...</div>
      </div>
    </div>
  </div>
);

// Performance-optimized stats section
const StatsSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: "500+", label: "Projects Delivered", description: "Successful implementations", icon: "🚀" },
    { value: "50+", label: "Expert Team", description: "Certified professionals", icon: "👥" },
    { value: "99.9%", label: "Uptime", description: "Reliable infrastructure", icon: "⚡" },
    { value: "24/7", label: "Support", description: "Always available", icon: "🛡️" }
  ];

  return (
    <section id="stats-section" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

// Hero section with enhanced animations
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "AI-Powered Business Solutions",
      subtitle: "Transform your business with cutting-edge AI technology",
      description: "From autonomous business management to intelligent decision-making, we deliver the future of business automation.",
      cta: "Explore AI Solutions",
      link: "/ai-services",
      bgGradient: "from-purple-600 via-blue-600 to-cyan-600"
    },
    {
      title: "Micro SAAS Innovation",
      subtitle: "Scalable software solutions for modern businesses",
      description: "Custom micro SAAS applications that grow with your business, from startup to enterprise scale.",
      cta: "Discover Micro SAAS",
      link: "/micro-saas-services",
      bgGradient: "from-green-600 via-emerald-600 to-teal-600"
    },
    {
      title: "IT Infrastructure Excellence",
      subtitle: "Robust, scalable, and secure IT solutions",
      description: "Enterprise-grade infrastructure, cloud solutions, and cybersecurity services to protect and scale your business.",
      cta: "IT Services",
      link: "/it-services",
      bgGradient: "from-red-600 via-orange-600 to-yellow-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border border-purple-500/20 rounded-full opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-300 mb-6 font-medium">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={slides[currentSlide].link}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              {slides[currentSlide].cta}
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-cyan-400 scale-125' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Services overview section
const ServicesOverview = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Autonomous business management, predictive analytics, and intelligent automation",
      icon: "🤖",
      link: "/ai-services",
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Micro SAAS Solutions",
      description: "Custom software applications, scalable platforms, and business automation tools",
      icon: "💻",
      link: "/micro-saas-services",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "IT Infrastructure",
      description: "Cloud solutions, cybersecurity, and enterprise-grade infrastructure services",
      icon: "🛡️",
      link: "/it-services",
      color: "from-green-500 to-green-700"
    },
    {
      title: "Digital Transformation",
      description: "Business process optimization, automation, and modern technology integration",
      icon: "🚀",
      link: "/digital-transformation",
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI-powered automation to enterprise infrastructure, we provide end-to-end solutions 
            that drive innovation and growth for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link to={service.link}>
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 h-full">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Home component
export default function Home() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - AI, Micro SAAS & IT Solutions"
        description="Transform your business with cutting-edge AI technology, custom micro SAAS solutions, and enterprise-grade IT infrastructure. Expert consulting and implementation services."
        keywords="AI solutions, micro SAAS, IT services, digital transformation, business automation, enterprise solutions"
      />
      
      <HeroSection />
      <ServicesOverview />
      <StatsSection />
      <EnhancedInnovativeServicesShowcase />
      <EnhancedPricingComparison />
    </>
  );
}