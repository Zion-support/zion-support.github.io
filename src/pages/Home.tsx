
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

const Home: React.FC = () => {
  const featuredServices = [
    {
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation consulting for enterprises",
      icon: "🤖",
      price: "From $2,500",
      category: "AI & Machine Learning",
      features: ["Strategic Planning", "Implementation Roadmap", "ROI Analysis"],
      isPopular: true,
      rating: 4.9,
      customers: 1800,
      setupTime: "2-3 days"
    },
    {
      title: "Quantum AI Fusion Platform",
      description: "Revolutionary platform combining quantum computing with artificial intelligence",
      icon: "🔮",
      price: "From $25,000",
      category: "Quantum Computing",
      features: ["Quantum Algorithms", "AI Integration", "Performance Optimization"],
      isNew: true,
      rating: 4.8,
      customers: 450,
      setupTime: "1-2 weeks"
    },
    {
      title: "Neuromorphic Computing Platform",
      description: "Brain-inspired computing architecture for ultra-efficient AI processing",
      icon: "🧠",
      price: "From $35,000",
      category: "AI Architecture",
      features: ["Neural Networks", "Efficient Processing", "Scalable Architecture"],
      rating: 4.7,
      customers: 320,
      setupTime: "2-3 weeks"
    },
    {
      title: "Edge AI Orchestration Platform",
      description: "Intelligent orchestration of AI workloads across distributed edge computing",
      icon: "🌐",
      price: "From $15,000",
      category: "Edge Computing",
      features: ["Edge Deployment", "Load Balancing", "Real-time Processing"],
      rating: 4.8,
      customers: 750,
      setupTime: "1 week"
    },
    {
      title: "Federated Learning Platform",
      description: "Privacy-preserving AI training across distributed data sources",
      icon: "🔒",
      price: "From $20,000",
      category: "Privacy AI",
      features: ["Data Privacy", "Distributed Training", "Secure Communication"],
      rating: 4.9,
      customers: 620,
      setupTime: "1-2 weeks"
    },
    {
      title: "AI Ethics & Governance Platform",
      description: "Comprehensive framework for ethical AI development and governance",
      icon: "⚖️",
      price: "From $18,000",
      category: "AI Governance",
      features: ["Ethical Guidelines", "Compliance Tools", "Audit Trails"],
      rating: 4.8,
      customers: 480,
      setupTime: "1 week"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      count: 13,
      description: "Cutting-edge artificial intelligence solutions",
      icon: "🤖",
      color: "from-zion-blue to-zion-cyan",
      href: "/services/ai"
    },
    {
      name: "Quantum Computing",
      count: 1,
      description: "Revolutionary quantum computing platforms",
      icon: "🔮",
      color: "from-zion-purple to-zion-cyan",
      href: "/services/quantum"
    },
    {
      name: "IT & Infrastructure",
      count: 2,
      description: "Enterprise-grade IT solutions",
      icon: "🖥️",
      color: "from-zion-cyan to-zion-green",
      href: "/services/infrastructure"
    },
    {
      name: "Data & Analytics",
      count: 1,
      description: "Advanced data analytics platforms",
      icon: "📊",
      color: "from-zion-yellow to-zion-orange",
      href: "/services/analytics"
    },
    {
      name: "Automation",
      count: 1,
      description: "Intelligent process automation",
      icon: "⚡",
      color: "from-zion-orange to-zion-red",
      href: "/services/automation"
    },
    {
      name: "Cybersecurity",
      count: 1,
      description: "Advanced security solutions",
      icon: "🛡️",
      color: "from-zion-red to-zion-purple",
      href: "/services/security"
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

      {/* Enhanced Featured Services */}
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
