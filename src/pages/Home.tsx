
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import SEOMeta from '../components/SEOMeta';

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
      ariaLabel: "AI Strategy Consulting service - Comprehensive AI strategy development and implementation consulting for enterprises"
    },
    {
      title: "Quantum AI Fusion Platform",
      description: "Revolutionary platform combining quantum computing with artificial intelligence",
      icon: "🔮",
      price: "From $25,000",
      category: "Quantum Computing",
      features: ["Quantum Algorithms", "AI Integration", "Performance Optimization"],
      isNew: true,
      ariaLabel: "Quantum AI Fusion Platform - Revolutionary platform combining quantum computing with artificial intelligence"
    },
    {
      title: "Neuromorphic Computing Platform",
      description: "Brain-inspired computing architecture for ultra-efficient AI processing",
      icon: "🧠",
      price: "From $35,000",
      category: "AI Architecture",
      features: ["Neural Networks", "Efficient Processing", "Scalable Architecture"],
      ariaLabel: "Neuromorphic Computing Platform - Brain-inspired computing architecture for ultra-efficient AI processing"
    },
    {
      title: "Edge AI Orchestration Platform",
      description: "Intelligent orchestration of AI workloads across distributed edge computing",
      icon: "🌐",
      price: "From $15,000",
      category: "Edge Computing",
      features: ["Edge Deployment", "Load Balancing", "Real-time Processing"],
      ariaLabel: "Edge AI Orchestration Platform - Intelligent orchestration of AI workloads across distributed edge computing"
    },
    {
      title: "Federated Learning Platform",
      description: "Privacy-preserving AI training across distributed data sources",
      icon: "🔒",
      price: "From $20,000",
      category: "Privacy AI",
      features: ["Data Privacy", "Distributed Training", "Secure Communication"],
      ariaLabel: "Federated Learning Platform - Privacy-preserving AI training across distributed data sources"
    },
    {
      title: "AI Ethics & Governance Platform",
      description: "Comprehensive framework for ethical AI development and governance",
      icon: "⚖️",
      price: "From $18,000",
      category: "AI Governance",
      features: ["Ethical Guidelines", "Compliance Tools", "Audit Trails"],
      ariaLabel: "AI Ethics & Governance Platform - Comprehensive framework for ethical AI development and governance"
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
    { label: "Projects Completed", value: "500+", icon: "🚀", ariaLabel: "Over 500 projects completed successfully" },
    { label: "Happy Clients", value: "200+", icon: "😊", ariaLabel: "Over 200 satisfied clients" },
    { label: "Team Members", value: "50+", icon: "👥", ariaLabel: "Over 50 team members" },
    { label: "Years Experience", value: "10+", icon: "⏰", ariaLabel: "Over 10 years of experience" }
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
    <>
      <SEOMeta
        title="The Future of Tech & AI Marketplace"
        description="Discover Zion Tech Group's comprehensive collection of 35+ innovative micro SAAS services, from AI-powered productivity tools to revolutionary quantum computing platforms. Transform your business with cutting-edge technology solutions."
        keywords="AI Strategy Consulting, Quantum Computing, Neuromorphic Computing, Edge AI, Federated Learning, AI Ethics, Technology Solutions, Zion Tech Group"
        type="website"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <HeroSection />
        
        {/* Service Categories Overview */}
        <motion.section 
          className="py-16 sm:py-20 bg-white/5 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="service-categories-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 id="service-categories-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Service Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-zion-slate-light max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions designed to transform your business
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="region"
              aria-label="Service categories grid"
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="group"
                >
                  <Link to={category.href} className="block focus:outline-none focus:ring-4 focus:ring-zion-cyan/50 rounded-2xl">
                    <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift group-hover:shadow-zion-glow">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl sm:text-2xl" aria-hidden="true">{category.icon}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-center mb-4 text-sm sm:text-base">
                        {category.description}
                      </p>
                      <div className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/20 text-zion-cyan text-xs sm:text-sm font-medium">
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

        {/* Featured Services */}
        <motion.section 
          className="py-16 sm:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="featured-services-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 id="featured-services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="gradient-text">Featured Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-zion-slate-light max-w-3xl mx-auto">
                Discover our most innovative and in-demand technology solutions
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="region"
              aria-label="Featured services grid"
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
          className="py-16 sm:py-20 bg-white/5 backdrop-blur-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="stats-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
              <h2 id="stats-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="gradient-text">Zion Tech Group</span>
              </h2>
              <p className="text-lg sm:text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our track record speaks for itself - we deliver results that exceed expectations
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              role="region"
              aria-label="Company statistics and achievements"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center"
                  role="article"
                  aria-label={stat.ariaLabel}
                >
                  <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover-lift">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden="true">{stat.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-zion-slate-light text-sm sm:text-base">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 sm:py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          aria-labelledby="cta-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={itemVariants}>
              <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative technology solutions can drive your business forward
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-primary focus:ring-4 focus:ring-zion-cyan/50 focus:outline-none transition-all duration-300"
                  aria-label="Get started with our services today"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary focus:ring-4 focus:ring-zion-purple/50 focus:outline-none transition-all duration-300"
                  aria-label="View all our available services"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
