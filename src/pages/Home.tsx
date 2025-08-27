
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Globe, 
  Zap, 
  Shield,
  TrendingUp,
  Rocket,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Cloud,
  Heart,
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';

// Stats data
const stats = [
  {
    value: "500+",
    label: "Global Clients",
    description: "Serving businesses worldwide",
    icon: Users
  },
  {
    value: "50+",
    label: "Countries",
    description: "International presence",
    icon: Globe
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Reliable infrastructure",
    icon: Shield
  },
  {
    value: "24/7",
    label: "Support",
    description: "Always available",
    icon: Zap
  }
];

// Services data
const services = [
  {
    title: "AI & Analytics",
    description: "Advanced artificial intelligence and data analytics solutions",
    icon: Brain,
    href: "/services/ai-analytics",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security and threat protection",
    icon: Shield,
    href: "/services/cybersecurity",
    color: "from-red-500 to-pink-600"
  },
  {
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automation",
    icon: Cloud,
    href: "/services/cloud-devops",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "IoT & Edge",
    description: "Internet of Things and edge computing solutions",
    icon: Cpu,
    href: "/services/iot-edge",
    color: "from-green-500 to-teal-600"
  },
  {
    title: "Quantum Computing",
    description: "Next-generation quantum technology",
    icon: Rocket,
    href: "/services/quantum-computing",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Blockchain",
    description: "Secure decentralized solutions",
    icon: Lock,
    href: "/services/blockchain",
    color: "from-yellow-500 to-orange-600"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content: "Zion Tech Group transformed our digital infrastructure. Their AI solutions increased our efficiency by 300%.",
    avatar: "/images/avatars/sarah.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateLab",
    content: "The cybersecurity implementation was seamless. We feel completely protected now.",
    avatar: "/images/avatars/michael.jpg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Director, DataFlow",
    content: "Their cloud migration expertise saved us months of work and significantly reduced costs.",
    avatar: "/images/avatars/emily.jpg",
    rating: 5
  }
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/services" 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg font-semibold text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
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
      </section>

        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-4 h-4 bg-zion-cyan rounded-full opacity-60"></div>
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <div className="w-3 h-3 bg-zion-purple rounded-full opacity-60"></div>
        </motion.div>
        <motion.div 
          className="absolute bottom-40 left-20"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
        >
          <div className="w-2 h-2 bg-zion-blue rounded-full opacity-60"></div>
        </motion.div>
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Services Section */}
      <section className="py-20 bg-zion-slate">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.href} className="block">
                  <div className="bg-zion-slate-dark rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-zion-cyan/20">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan/80 transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Trusted by leading companies worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate rounded-xl p-8 border border-zion-cyan/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-zion-slate-light mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-zion-slate-light">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-zion-cyan rounded-lg font-semibold hover:bg-zion-slate-light transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-cyan transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
