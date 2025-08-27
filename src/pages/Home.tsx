import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Globe, 
  Code, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Atom,
  Heart,
  Factory,
  Satellite,
  Cpu,
  Database,
  Network
} from 'lucide-react';

export default function Home() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Global Clients",
      description: "Serving businesses worldwide"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Countries",
      description: "Global presence"
    },
    {
      icon: Code,
      value: "1000+",
      label: "Projects",
      description: "Successfully delivered"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service"
    }
  ];

  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services including machine learning, natural language processing, and computer vision",
      icon: Brain,
      link: "/services/ai",
      features: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics"],
      color: "from-zion-cyan to-zion-purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tech Talent",
      description: "Expert developers, engineers, and IT professionals for your projects",
      icon: Users,
      link: "/talent",
      features: ["Full-Stack Developers", "DevOps Engineers", "Data Scientists", "UI/UX Designers"],
      color: "from-zion-blue to-zion-cyan",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Equipment",
      description: "High-performance tech infrastructure and hardware solutions",
      icon: Zap,
      link: "/equipment",
      features: ["Cloud Infrastructure", "High-Performance Computing", "Network Solutions", "Security Hardware"],
      color: "from-zion-purple to-zion-blue",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Consulting",
      description: "Strategic technology guidance and digital transformation consulting",
      icon: TrendingUp,
      link: "/consulting",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"],
      color: "from-zion-cyan to-zion-green",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const innovativeServices = [
    {
      title: "Quantum Computing",
      description: "Revolutionary quantum computing solutions for complex problem solving",
      icon: Atom,
      link: "/services/quantum-computing",
      color: "from-zion-blue to-zion-cyan"
    },
    {
      title: "Neuromorphic Computing",
      description: "Brain-inspired computing for ultra-efficient AI processing",
      icon: Brain,
      link: "/services/neuromorphic-computing",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Synthetic Biology",
      description: "Bio-engineering platform for medical and environmental solutions",
      icon: Heart,
      link: "/services/synthetic-biology",
      color: "from-zion-pink to-zion-purple"
    },
    {
      title: "Advanced Robotics",
      description: "Autonomous robotics platform for manufacturing and logistics",
      icon: Cpu,
      link: "/services/advanced-robotics",
      color: "from-zion-blue to-zion-purple"
    },
    {
      title: "Brain-Computer Interface",
      description: "Neural interface technology for medical and assistive applications",
      icon: Brain,
      link: "/services/brain-computer-interface",
      color: "from-zion-purple to-zion-cyan"
    },
    {
      title: "Space Technology",
      description: "Advanced space technology solutions and satellite systems",
      icon: Satellite,
      link: "/services/space-technology",
      color: "from-zion-purple to-zion-cyan"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupXYZ",
      content: "The talent we found through Zion was exceptional. They delivered our MVP in record time.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "IT Director, GlobalCorp",
      content: "Outstanding cybersecurity services. They helped us achieve SOC2 compliance in just 6 months.",
      rating: 5,
      avatar: "👩‍🔒"
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

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 particles"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        
        <div className="relative z-10 container-responsive py-20 lg:py-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-gradient text-shadow-neon">
                The Future of Technology
              </span>
              <br />
              <span className="text-white">
                Starts Here
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Zion Tech Group is the world's premier marketplace for cutting-edge technology solutions, 
              connecting innovative companies with the most advanced AI, quantum computing, and emerging tech services.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/services"
                className="btn-futuristic text-lg px-8 py-4"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary text-lg px-8 py-4"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-zion-cyan mb-2">
                  {stat.label}
                </div>
                <div className="text-zion-slate-light">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive innovation
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card-futuristic group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovative Services Section */}
      <section className="py-20 relative futuristic-bg-alt">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Innovation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore the frontiers of technology with our revolutionary services that are shaping the future
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {innovativeServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="card-futuristic group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-zion-slate-light mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light text-sm font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Explore
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with Zion Tech Group
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                className="card-futuristic text-center group"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-zion-cyan text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="card-futuristic max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join the future of technology with Zion Tech Group. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="btn-futuristic text-lg px-8 py-4"
                >
                  Get Started Today
                  <Rocket className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}