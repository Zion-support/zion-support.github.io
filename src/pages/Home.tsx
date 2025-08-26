
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import InteractiveServiceShowcase from '../components/InteractiveServiceShowcase';

const Home: React.FC = () => {
  const featuredServices = [
    {
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation consulting for enterprises",
      icon: "🤖",
      price: "From $2,500",
      category: "AI & Machine Learning",
      features: ["Strategic Planning", "Implementation Roadmap", "ROI Analysis"],
      isPopular: true
    },
    {
      title: "Quantum AI Fusion Platform",
      description: "Revolutionary platform combining quantum computing with artificial intelligence",
      icon: "🔮",
      price: "From $25,000",
      category: "Quantum Computing",
      features: ["Quantum Algorithms", "AI Integration", "Performance Optimization"],
      isNew: true
    },
    {
      title: "Neuromorphic Computing Platform",
      description: "Brain-inspired computing architecture for ultra-efficient AI processing",
      icon: "🧠",
      price: "From $35,000",
      category: "AI Architecture",
      features: ["Neural Networks", "Efficient Processing", "Scalable Architecture"]
    },
    {
      title: "Edge AI Orchestration Platform",
      description: "Intelligent orchestration of AI workloads across distributed edge computing",
      icon: "🌐",
      price: "From $15,000",
      category: "Edge Computing",
      features: ["Edge Deployment", "Load Balancing", "Real-time Processing"]
    },
    {
      title: "Federated Learning Platform",
      description: "Privacy-preserving AI training across distributed data sources",
      icon: "🔒",
      price: "From $20,000",
      category: "Privacy AI",
      features: ["Data Privacy", "Distributed Training", "Secure Communication"]
    },
    {
      title: "AI Ethics & Governance Platform",
      description: "Comprehensive framework for ethical AI development and governance",
      icon: "⚖️",
      price: "From $18,000",
      category: "AI Governance",
      features: ["Ethical Guidelines", "Compliance Tools", "Audit Trails"]
    }
  ];

  const serviceCategories = [
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <HeroSection />
      
      {/* Service Categories Overview */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Service Categories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions designed to transform your business
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={itemVariants}
                className="group"
              >
                <Link to={category.href} className="block">
                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift group-hover:shadow-zion-glow">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light text-center mb-4">
                      {category.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium">
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

      {/* Interactive Service Showcase */}
      <InteractiveServiceShowcase />

      {/* Comprehensive Services Overview */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Comprehensive Technology</span> Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
              From cutting-edge AI to revolutionary space technology, we offer the most comprehensive suite of innovative solutions in the industry
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Featured Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most innovative and in-demand technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredServices.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">Zion Tech Group</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our track record speaks for itself - we deliver results that exceed expectations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="btn-secondary"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
