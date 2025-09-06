import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { usePerformance } from '../hooks/usePerformance';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import { trackScrollDepth, trackButtonClick } from '../utils/analytics';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap,
  Shield,
  Globe,
  Code,
  Database,
  Smartphone,
  Cloud
} from 'lucide-react';

const Home: React.FC = () => {
  usePerformance();

  // Track scroll depth
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent > 25 && scrollPercent <= 50) {
        trackScrollDepth(25);
      } else if (scrollPercent > 50 && scrollPercent <= 75) {
        trackScrollDepth(50);
      } else if (scrollPercent > 75 && scrollPercent <= 90) {
        trackScrollDepth(75);
      } else if (scrollPercent > 90) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI Services",
      description: "Custom AI solutions powered by machine learning and deep learning technologies",
      href: "/services/ai-services"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive IT infrastructure and digital transformation solutions",
      href: "/services/it-services"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions for growing businesses",
      href: "/services/micro-saas"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      href: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      href: "/services/cloud-solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform data into actionable insights with advanced analytics",
      href: "/services/data-analytics"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized solutions that deliver exceptional performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced professionals with deep technical expertise"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients"
    }
  ];

  return (
    <>
      <SEO
        title="Zion Tech Group - AI & Technology Solutions"
        description="Leading AI-powered technology solutions for modern businesses. Transform your digital future with cutting-edge innovation and enterprise-grade reliability."
        keywords="AI, artificial intelligence, technology solutions, digital transformation, enterprise software, cloud computing, cybersecurity, automation"
        url="/"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  AI-Powered Solutions
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Leading provider of cutting-edge AI, IT, and digital transformation solutions. 
                We help businesses scale, innovate, and succeed in the digital age.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
              <Link
                to="/services"
                onClick={() => trackButtonClick('explore_services', 'hero')}
                className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                onClick={() => trackButtonClick('get_consultation', 'hero')}
                className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm md:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Zion Tech</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with proven expertise to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Blog Section */}
        <BlogSection />

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your project and discover how our AI-powered solutions can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  View Pricing
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;