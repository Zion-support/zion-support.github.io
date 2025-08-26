import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const featuredServices = [
    {
      title: "AI Strategy Consulting",
      description: "Comprehensive AI strategy development and implementation consulting",
      icon: "🤖",
      price: "From $2,500",
      category: "AI & Machine Learning"
    },
    {
      title: "Quantum AI Fusion Platform",
      description: "Revolutionary platform combining quantum computing with artificial intelligence",
      icon: "🔮",
      price: "From $25,000",
      category: "Quantum Computing"
    },
    {
      title: "Neuromorphic Computing Platform",
      description: "Brain-inspired computing architecture for ultra-efficient AI processing",
      icon: "🧠",
      price: "From $35,000",
      category: "AI Architecture"
    },
    {
      title: "Edge AI Orchestration Platform",
      description: "Intelligent orchestration of AI workloads across distributed edge computing",
      icon: "🌐",
      price: "From $15,000",
      category: "Edge Computing"
    },
    {
      title: "Federated Learning Platform",
      description: "Privacy-preserving AI training across distributed data sources",
      icon: "🔒",
      price: "From $20,000",
      category: "Privacy AI"
    },
    {
      title: "AI Ethics & Governance Platform",
      description: "Comprehensive framework for ethical AI development and governance",
      icon: "⚖️",
      price: "From $18,000",
      category: "AI Governance"
    }
  ];

  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      count: 13,
      description: "Cutting-edge artificial intelligence solutions",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Quantum Computing",
      count: 1,
      description: "Revolutionary quantum computing platforms",
      icon: "🔮",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "IT & Infrastructure",
      count: 2,
      description: "Enterprise-grade IT solutions",
      icon: "🖥️",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Data & Analytics",
      count: 1,
      description: "Advanced data analytics platforms",
      icon: "📊",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Automation",
      count: 1,
      description: "Intelligent process automation",
      icon: "⚡",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Industry Solutions",
      count: 12,
      description: "Specialized industry AI solutions",
      icon: "🏭",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
    { number: "24/7", label: "Support Available", icon: "🛟" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our AI infrastructure. Their expertise in quantum computing is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      content: "The edge AI orchestration platform they built for us increased our processing speed by 300%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, InnovateAI",
      content: "Outstanding AI strategy consulting that helped us navigate the complex AI landscape successfully.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - The Future of Tech & AI Marketplace</title>
        <meta name="description" content="Discover our comprehensive collection of 35+ innovative micro SAAS services, from AI-powered productivity tools to revolutionary quantum computing platforms. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI solutions, quantum computing, machine learning, digital transformation, IT consulting, cybersecurity, cloud services, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - The Future of Tech & AI Marketplace" />
        <meta property="og:description" content="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - The Future of Tech & AI Marketplace" />
        <meta name="twitter:description" content="Leading provider of innovative technology solutions, AI-powered services, and digital transformation expertise." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Future of Tech & AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Marketplace
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover our comprehensive collection of 35+ innovative micro SAAS services, 
              from AI-powered productivity tools to revolutionary quantum computing platforms. 
              Transform your business with cutting-edge technology solutions.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="text-blue-400">Phone:</span> +1 302 464 0950</p>
                  <p><span className="text-blue-400">Email:</span> kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <p><span className="text-blue-400">Website:</span> ziontechgroup.com</p>
                  <p><span className="text-blue-400">Address:</span> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Explore All Services
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by leading organizations worldwide
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Service Categories Overview */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300">
                Explore our comprehensive range of innovative technology solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{category.count} Services</span>
                    <Link
                      to="/services"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group-hover:translate-x-1 transform transition-transform"
                    >
                      View All →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Services */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-gray-300">
                Discover our most innovative and cutting-edge solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {featuredServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-400">{service.category}</span>
                    <div className="text-lg font-bold text-blue-400">{service.price}</div>
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm group-hover:translate-x-1 transform transition-transform"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by industry leaders worldwide
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          className="py-16 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300">
                Leading the way in innovative technology solutions
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-gray-300 text-sm">Cutting-edge AI, quantum computing, and emerging technologies</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300 text-sm">Experienced professionals with deep technical expertise</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Quality Assured</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade solutions with proven track records</p>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">ROI Focused</h3>
                <p className="text-gray-300 text-sm">Solutions designed to deliver measurable business value</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts is ready to help you implement the perfect solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;