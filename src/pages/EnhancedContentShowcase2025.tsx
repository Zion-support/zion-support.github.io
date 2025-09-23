import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Globe, 
  Cpu, 
  Lock, 
  Sparkles, 
  TrendingUp,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Rocket
} from 'lucide-react';

const EnhancedContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredServices = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Revolutionary AI solutions that automate complex business processes, reducing costs by up to 70% while increasing efficiency.",
      icon: Brain,
      features: ["Process Automation", "Intelligent Analytics", "Predictive Insights", "Cost Optimization"],
      pricing: "Starting at $2,999/month",
      badge: "🔥 HOT",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Next-generation quantum computing services for solving complex optimization problems and advanced cryptography.",
      icon: Zap,
      features: ["Quantum Algorithms", "Optimization Problems", "Cryptography", "Research & Development"],
      pricing: "Starting at $9,999/month",
      badge: "🚀 NEW",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity solutions with AI-powered threat detection and real-time response capabilities.",
      icon: Shield,
      features: ["Threat Detection", "Real-time Monitoring", "Incident Response", "Compliance Management"],
      pricing: "Starting at $4,999/month",
      badge: "⚡ POPULAR",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "Cloud-Native Infrastructure",
      description: "Scalable cloud infrastructure with automated deployment, monitoring, and optimization for modern applications.",
      icon: Cloud,
      features: ["Auto-scaling", "DevOps Automation", "Cost Optimization", "24/7 Monitoring"],
      pricing: "Starting at $1,999/month",
      badge: "⭐ FEATURED",
      color: "from-green-500 to-teal-500"
    }
  ];

  const emergingTechServices = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI agents that can execute complex tasks independently",
      icon: Cpu,
      status: "Beta Available"
    },
    {
      title: "Neural Interface Technology",
      description: "Brain-computer interface solutions for enhanced human-computer interaction",
      icon: Brain,
      status: "Research Phase"
    },
    {
      title: "Blockchain 3.0 Solutions",
      description: "Next-generation blockchain with quantum-resistant cryptography",
      icon: Lock,
      status: "Coming Soon"
    },
    {
      title: "Edge AI Computing",
      description: "Distributed AI processing at the network edge for ultra-low latency",
      icon: Globe,
      status: "Available Now"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group's AI solutions transformed our business operations. We saw a 300% increase in efficiency within the first quarter.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "Founder",
      content: "The quantum computing solutions helped us solve optimization problems that were previously impossible. Game-changing technology.",
      rating: 5,
      avatar: "👨‍🔬"
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet Solutions",
      role: "Security Director",
      content: "Their cybersecurity suite prevented 15 potential breaches in the first month. Outstanding protection and support.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "$50M+", label: "Cost Savings Delivered", icon: TrendingUp },
    { number: "24/7", label: "Expert Support", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with Advertising Banner */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          {/* Promotional Banner */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-4 rounded-lg mb-8 text-center font-bold text-lg shadow-2xl"
          >
            🎉 LIMITED TIME: Get 30% OFF all AI services + FREE consultation! Book now before December 31st! 🎉
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Future of Technology is Here
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover cutting-edge AI, quantum computing, and emerging technologies that will revolutionize your business. 
              Join 500+ enterprises already transforming with Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Get Started Free
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services Carousel */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Solutions</h2>
          <p className="text-xl text-gray-300">Revolutionary technologies driving the future</p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${featuredServices[currentSlide].color}`}>
                    <featuredServices[currentSlide].icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {featuredServices[currentSlide].badge}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {featuredServices[currentSlide].title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  {featuredServices[currentSlide].description}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {featuredServices[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {featuredServices[currentSlide].pricing}
                  </span>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className={`h-64 bg-gradient-to-br ${featuredServices[currentSlide].color} rounded-2xl flex items-center justify-center`}>
                  <featuredServices[currentSlide].icon className="w-32 h-32 text-white opacity-80" />
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                  NEW!
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 gap-2">
            {featuredServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emerging Technologies */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Emerging Technologies</h2>
          <p className="text-xl text-gray-300">The next wave of innovation is coming</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergingTechServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {service.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300">Real results from real businesses</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                  <div className="text-blue-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of forward-thinking companies already leveraging our cutting-edge technologies. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-bold text-lg flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg flex items-center gap-2">
              <Users className="w-5 h-5" />
              Contact Sales
            </button>
          </div>
          <p className="text-blue-100 mt-4 text-sm">
            No credit card required • 30-day money-back guarantee • 24/7 support
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;