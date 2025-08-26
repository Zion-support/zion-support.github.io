
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import InteractiveServiceShowcase from '../components/InteractiveServiceShowcase';
import LinkHealthChecker from '../components/LinkHealthChecker';
import PerformanceMonitor from '../components/PerformanceMonitor';

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
    { label: "Projects Completed", value: "500+", icon: "🚀" },
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

      {/* Website Health Monitor */}
      <motion.section 
        className="py-20 bg-white/5 backdrop-blur-sm"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Website <span className="gradient-text">Health Monitor</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We continuously monitor our website to ensure all links and services are working properly
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <LinkHealthChecker 
              links={[
                { url: '/', label: 'Home Page' },
                { url: '/services', label: 'Services Page' },
                { url: '/about', label: 'About Page' },
                { url: '/contact', label: 'Contact Page' },
                { url: '/blog', label: 'Blog Page' },
                { url: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn Profile' },
                { url: 'https://twitter.com/ziontechgroup', label: 'Twitter Profile' },
                { url: 'https://github.com/ziontechgroup', label: 'GitHub Profile' },
                { url: 'tel:+13024640950', label: 'Phone Number' },
                { url: 'mailto:kleber@ziontechgroup.com', label: 'Email Address' }
              ]}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Performance Monitor */}
      <motion.section 
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="gradient-text">Performance</span> Monitoring
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real-time performance metrics to ensure optimal user experience and fast loading times
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <PerformanceMonitor />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
