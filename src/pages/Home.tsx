import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight as ArrowRightIcon,
  Users,
  TrendingUp,
  Award,
  Globe,
  Brain,
  Cloud,
  Shield,
  Zap
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "AI-Powered Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      description: "Leverage the power of AI to automate processes, gain insights, and drive innovation across your organization.",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Comprehensive IT Services",
      subtitle: "End-to-end technology solutions for modern businesses",
      description: "From infrastructure management to digital transformation, we provide the expertise you need to succeed.",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Micro-SaaS Solutions",
      subtitle: "Scalable software solutions for growing businesses",
      description: "Custom SaaS applications designed to streamline operations and boost productivity.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Globe, value: "25+", label: "Countries Served" }
  ];

  const services = [
    {
      title: "AI Content Hub Pro",
      description: "Enterprise-grade AI content creation platform for multi-platform content generation and optimization.",
      icon: Brain,
      path: "/services/ai-content-hub-pro",
      price: "$2,999/mo"
    },
    {
      title: "Quantum Security Platform",
      description: "Next-generation security platform leveraging quantum computing for unbreakable encryption and threat detection.",
      icon: Shield,
      path: "/services/quantum-security",
      price: "$7,999/mo"
    },
    {
      title: "Micro-SaaS Platform",
      description: "Scalable SaaS development platform for building and deploying custom business applications.",
      icon: Cloud,
      path: "/services/micro-saas-platform",
      price: "$1,999/mo"
    }
  ];

  const seoMetadata = {
    title: "Zion Tech Group - AI-Powered Solutions & IT Services",
    description: "Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative micro-SaaS platforms. Expert technology consulting and digital transformation.",
    keywords: "AI solutions, IT services, digital transformation, micro-SaaS, technology consulting, cybersecurity, cloud services",
    ogImage: "/images/zion-tech-group-og.jpg",
    ogType: "website"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center z-10 px-4 sm:px-6 lg:px-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className={`bg-gradient-to-r ${heroSlides[currentSlide].color} bg-clip-text text-transparent`}>
                {heroSlides[currentSlide].title}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            >
              {heroSlides[currentSlide].description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
              >
                Explore Services
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{service.price}</span>
                  <Link
                    to={service.path}
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of companies already leveraging our AI-powered solutions to drive growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
                <Zap className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;