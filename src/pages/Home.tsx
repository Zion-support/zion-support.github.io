
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import InteractiveServiceShowcase from '../components/InteractiveServiceShowcase';

const Home: React.FC = () => {
  const featuredServices = [
    {
      title: "QuantumEdge AI Platform",
      description: "Revolutionary platform combining quantum computing principles with AI for ultra-fast machine learning and optimization problems",
      icon: "🔮",
      price: "From $2,500",
      category: "Quantum AI",
      features: ["Quantum-inspired algorithms", "Hybrid quantum-classical processing", "Real-time optimization"],
      isNew: true
    },
    {
      title: "NeuromorphicAI Studio",
      description: "Brain-inspired AI development platform that mimics biological neural networks for ultra-efficient, low-power AI applications",
      icon: "🧠",
      price: "From $1,800",
      category: "Neuromorphic Computing",
      features: ["Spiking neural networks", "Event-driven processing", "Low-power AI models"],
      isPopular: true
    },
    {
      title: "Zero-Trust Network Architecture",
      description: "Comprehensive zero-trust network architecture implementation with continuous verification and micro-segmentation",
      icon: "🛡️",
      price: "From $4,500",
      category: "Network Security",
      features: ["Continuous identity verification", "Micro-segmentation", "Real-time threat detection"],
      isPopular: true
    },
    {
      title: "5G Private Network Solutions",
      description: "Enterprise-grade 5G private network solutions for industrial IoT, smart manufacturing, and autonomous operations",
      icon: "📡",
      price: "From $2,800",
      category: "5G Networks",
      features: ["Private 5G core network", "Ultra-low latency", "Massive IoT support"],
      isNew: true
    },
    {
      title: "SpaceTech AI Platform",
      description: "AI-powered platform for space mission planning, satellite operations, and space data analytics",
      icon: "🚀",
      price: "From $3,500",
      category: "Space Technology",
      features: ["Mission planning AI", "Satellite operations", "Space data analytics"],
      isNew: true
    },
    {
      title: "GreenTech AI Solutions",
      description: "AI-powered sustainability platform for environmental monitoring, carbon footprint reduction, and green energy optimization",
      icon: "🌱",
      price: "From $1,400",
      category: "Green Technology",
      features: ["Environmental monitoring", "Carbon footprint tracking", "Energy optimization"],
      isPopular: true
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      count: 15,
      description: "Cutting-edge artificial intelligence solutions",
      icon: "🤖",
      color: "from-zion-blue to-zion-cyan",
      href: "/services/ai"
    },
    {
      name: "Quantum Computing",
      count: 3,
      description: "Revolutionary quantum computing platforms",
      icon: "🔮",
      color: "from-zion-purple to-zion-cyan",
      href: "/services/quantum"
    },
    {
      name: "IT & Infrastructure",
      count: 12,
      description: "Enterprise-grade IT solutions",
      icon: "🖥️",
      color: "from-zion-cyan to-zion-green",
      href: "/services/infrastructure"
    },
    {
      name: "Cybersecurity",
      count: 8,
      description: "Advanced security solutions",
      icon: "🛡️",
      color: "from-zion-red to-zion-purple",
      href: "/services/cybersecurity"
    },
    {
      name: "Edge Computing",
      count: 6,
      description: "Distributed edge computing solutions",
      icon: "🌐",
      color: "from-zion-orange to-zion-red",
      href: "/services/edge"
    },
    {
      name: "Emerging Technologies",
      count: 10,
      description: "Next-generation technology solutions",
      icon: "⚡",
      color: "from-zion-yellow to-zion-orange",
      href: "/innovative-services-2025"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: "🚀", color: "from-zion-cyan to-zion-blue" },
    { label: "Happy Clients", value: "200+", icon: "😊", color: "from-zion-purple to-zion-cyan" },
    { label: "Team Members", value: "50+", icon: "👥", color: "from-zion-blue to-zion-green" },
    { label: "Years Experience", value: "10+", icon: "⏰", color: "from-zion-orange to-zion-red" }
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
      
      {/* Enhanced Service Categories Overview */}
      <motion.section 
        className="py-24 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology solutions designed to transform your business
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={category.href} className="block">
                  <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl border border-white/25 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl shadow-xl">
                    <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-zion-slate-light text-center mb-6 text-lg leading-relaxed">
                      {category.description}
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-zion-cyan/25 to-zion-blue/25 text-zion-cyan text-sm font-semibold border border-zion-cyan/40">
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

      {/* Featured Services */}
      <motion.section 
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Featured Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Discover our most innovative and in-demand technology solutions
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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

      {/* Enhanced Stats Section */}
      <motion.section 
        className="py-24 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Why Choose <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Our track record speaks for itself - we deliver results that exceed expectations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`w-24 h-24 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-300 shadow-xl`}>
                  <div className="text-5xl group-hover:animate-bounce-gentle">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                <div className="text-zion-slate-light text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to <span className="gradient-text bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our innovative technology solutions can drive your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="btn-primary text-xl py-6 px-12 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🚀</span>
                  <span className="font-semibold">Get Started Today</span>
                  <span className="text-xl">→</span>
                </span>
              </Link>
              <Link
                to="/services"
                className="btn-secondary text-xl py-6 px-12 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  <span className="font-semibold">View All Services</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
