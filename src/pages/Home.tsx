import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Rocket, 
  Users, 
  Award, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Award,
  Target
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service",
      color: "from-orange-500 to-red-500"
    }
  ];

  const featuredServices = [
    {
      title: "Quantum-Classical Hybrid AI",
      description: "Revolutionary AI platform combining quantum computing with classical AI algorithms",
      icon: Brain,
      link: "/services/ai",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Tech Talent",
      description: "Expert developers, engineers, and IT professionals for your projects",
      icon: Users,
      link: "/talent",
      features: ["Full-Stack Developers", "DevOps Engineers", "Data Scientists", "UI/UX Designers"],
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Equipment",
      description: "High-performance tech infrastructure and hardware solutions",
      icon: Zap,
      link: "/equipment",
      features: ["Cloud Infrastructure", "High-Performance Computing", "Network Solutions", "Security Hardware"],
      color: "from-yellow-500 to-orange-500",
      gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Consulting",
      description: "Strategic technology guidance and digital transformation consulting",
      icon: TrendingUp,
      link: "/consulting",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"],
      color: "from-green-500 to-emerald-500",
      gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
    }
  ];

  const innovationCategories = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "👩‍💼",
      company: "TechCorp"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The talent we found through Zion was exceptional. They delivered our MVP in record time.",
      rating: 5,
      avatar: "👨‍💻",
      company: "StartupXYZ"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, GlobalCorp",
      content: "Outstanding cybersecurity services. They helped us achieve SOC2 compliance in just 6 months.",
      rating: 5,
      avatar: "👩‍🔒",
      company: "GlobalCorp"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Animated Background */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            variants={floatingVariants}
            animate="float"
            className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '1s' }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div 
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '2s' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          ></motion.div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              variants={itemVariants}
              className="mb-6"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Pioneering the Future of Technology
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
            >
              Zion Tech Group
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services that transform businesses worldwide
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                to="/services" 
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Get Started
              </Link>
            </motion.div>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-border">
                  <stat.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-4xl font-bold text-gradient mb-3">{stat.value}</h3>
                <p className="text-xl font-semibold text-zion-cyan mb-2">{stat.label}</p>
                <p className="text-zion-slate-light">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-zion-purple/10 to-zion-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
          </div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient mb-6">Featured Services</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our most popular solutions that are transforming businesses worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-futuristic p-8 hover:border-zion-cyan/40 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <span className="text-sm text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium">{service.rating}</span>
                    <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-3 text-zion-slate-light text-sm">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.path}
                  className="block w-full text-center button-primary"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          </div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gradient mb-6">Why Choose Zion Tech Group</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-purple/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 neon-border">
                  <feature.icon className="w-10 h-10 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"
            >
              Join the hundreds of companies that have already revolutionized their operations with Zion Tech Group's cutting-edge solutions.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
              >
                Start Your Journey
              </Link>
              
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
