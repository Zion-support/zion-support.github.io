import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Clock, 
  Globe, 
  Users, 
  CheckCircle,
  Zap,
  Rocket,
  Code,
  Lock,
  Cloud,
  Building
} from 'lucide-react';
import { SEO } from "@/components/SEO";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Stats data
  const stats = [
    {
      value: "500+",
      label: "AI Solutions",
      description: "Deployed worldwide",
      icon: Brain
    },
    {
      value: "99.9%",
      label: "Uptime",
      description: "Reliability guarantee",
      icon: Shield
    },
    {
      value: "24/7",
      label: "Support",
      description: "Always available",
      icon: Clock
    },
    {
      value: "50+",
      label: "Countries",
      description: "Global presence",
      icon: Globe
    }
  ];

  // AI Services data
  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "Automated reporting"],
      path: "/services/ai-business-intelligence",
      icon: Brain
    },
    {
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences with intelligent automation and predictive analytics.",
      features: ["Customer segmentation", "Behavioral analysis", "Personalized recommendations", "Automated support"],
      path: "/services/ai-customer-experience",
      icon: Users
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your digital assets with next-generation AI-powered security solutions.",
      features: ["Threat detection", "Behavioral analysis", "Automated response", "24/7 monitoring"],
      path: "/services/ai-cybersecurity",
      icon: Shield
    }
  ];

  // Service categories
  const serviceCategories = [
    {
      name: "AI & Analytics",
      description: "Cutting-edge artificial intelligence services for business transformation",
      icon: Brain,
      href: "/services/ai-analytics",
      count: 15,
      color: "from-zion-cyan to-zion-blue"
    },
    {
      name: "AI Finance",
      description: "Intelligent financial planning and wealth management solutions",
      icon: Zap,
      href: "/services/ai-finance",
      count: 8,
      color: "from-zion-green to-zion-cyan"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security protocols and threat protection systems",
      icon: Lock,
      href: "/services/cybersecurity",
      count: 12,
      color: "from-zion-red to-zion-orange"
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problems",
      icon: Rocket,
      href: "/services/quantum-computing",
      count: 6,
      color: "from-zion-blue to-zion-cyan"
    },
    {
      name: "Blockchain",
      description: "Secure and transparent blockchain technology solutions",
      icon: Code,
      href: "/services/blockchain",
      count: 10,
      color: "from-zion-purple to-zion-blue"
    },
    {
      name: "IoT & Edge",
      description: "Internet of Things and edge computing solutions",
      icon: Cloud,
      href: "/services/iot-edge",
      count: 14,
      color: "from-zion-green to-zion-cyan"
    },
    {
      name: "Education Tech",
      description: "AI-powered educational technology and learning platforms",
      icon: Users,
      href: "/services/education-technology",
      count: 9,
      color: "from-zion-blue to-zion-green"
    },
    {
      name: "Real Estate Tech",
      description: "Advanced real estate analytics and investment platforms",
      icon: Building,
      href: "/services/real-estate-technology",
      count: 7,
      color: "from-zion-orange to-zion-blue"
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions"
        description="Discover cutting-edge AI solutions, expert talent, and innovative technology services. Transform your business with Zion Tech Group's comprehensive tech ecosystem."
        canonical="/"
        url="https://ziontechgroup.com"
      />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-futuristic">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 transform hover:scale-105 text-white"
              >
                Explore Our Services
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-3 h-3 bg-zion-blue rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-40 left-20 animate-pulse delay-2000">
          <div className="w-2 h-2 bg-zion-purple rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-zion-slate-light">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-24 bg-gradient-to-b from-zion-slate-dark/50 to-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business and drive innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link to={category.href} className="block h-full">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <category.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-semibold border border-zion-cyan/30">
                        {category.count} Services
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive innovation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-zion-slate to-zion-slate-dark p-8 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get in touch with our technology experts to discuss your specific needs and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-semibold hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300 text-lg"
              >
                Get Free Consultation
              </Link>
              
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 text-lg"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
            
            <div className="mt-8 text-zion-slate-light">
              <p className="mb-2">📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>📧 <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}