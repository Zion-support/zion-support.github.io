import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  BarChart3, 
  Users, 
  Lock, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Rocket
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
const UltimateAIServicesShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('ai-solutions');
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const services = {
    'ai-solutions': {
      title: "Revolutionary AI Solutions",
      subtitle: "Transform your business with cutting-edge artificial intelligence",
      icon: Brain,
      color: "from-purple-600 to-blue-600",
      services: [
        {
          name: "AI-Powered Business Automation",
          description: "Streamline operations with intelligent automation that learns and adapts",
          features: ["Process Optimization", "Predictive Analytics", "Smart Decision Making"],
          price: "Starting at $5,000/month"
        },
        {
          name: "Machine Learning Platforms",
          description: "Build and deploy ML models that scale with your business",
          features: ["Custom Model Development", "Real-time Inference", "Continuous Learning"],
          price: "Starting at $3,500/month"
        },
        {
          name: "Natural Language Processing",
          description: "Understand and process human language with unprecedented accuracy",
          features: ["Sentiment Analysis", "Language Translation", "Content Generation"],
          price: "Starting at $2,500/month"
        }
      ]
    },
    'quantum-computing': {
      title: "Quantum Computing Solutions",
      subtitle: "Harness the power of quantum mechanics for exponential computing",
      icon: Cpu,
      color: "from-cyan-600 to-teal-600",
      services: [
        {
          name: "Quantum Optimization",
          description: "Solve complex optimization problems in seconds, not years",
          features: ["Supply Chain Optimization", "Financial Modeling", "Resource Allocation"],
          price: "Starting at $10,000/month"
        },
        {
          name: "Quantum Machine Learning",
          description: "Accelerate ML training with quantum-enhanced algorithms",
          features: ["Quantum Neural Networks", "Quantum Feature Maps", "Quantum Kernels"],
          price: "Starting at $7,500/month"
        },
        {
          name: "Quantum Cryptography",
          description: "Unbreakable security through quantum key distribution",
          features: ["Quantum Key Distribution", "Post-Quantum Cryptography", "Secure Communication"],
          price: "Starting at $5,000/month"
        }
      ]
    },
    'cybersecurity': {
      title: "Next-Gen Cybersecurity",
      subtitle: "Protect your digital assets with AI-powered security solutions",
      icon: Shield,
      color: "from-red-600 to-orange-600",
      services: [
        {
          name: "AI Threat Detection",
          description: "Identify and neutralize threats before they cause damage",
          features: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response"],
          price: "Starting at $4,000/month"
        },
        {
          name: "Zero-Trust Architecture",
          description: "Implement comprehensive security with never trust, always verify",
          features: ["Identity Verification", "Network Segmentation", "Continuous Monitoring"],
          price: "Starting at $6,000/month"
        },
        {
          name: "Quantum-Safe Security",
          description: "Future-proof your security against quantum attacks",
          features: ["Post-Quantum Algorithms", "Quantum Key Distribution", "Hybrid Security"],
          price: "Starting at $8,000/month"
        }
      ]
    },
    'data-analytics': {
      title: "Advanced Data Analytics",
      subtitle: "Turn your data into actionable insights with AI-powered analytics",
      icon: BarChart3,
      color: "from-green-600 to-emerald-600",
      services: [
        {
          name: "Predictive Analytics",
          description: "Forecast future trends and behaviors with machine learning",
          features: ["Demand Forecasting", "Risk Assessment", "Customer Behavior Prediction"],
          price: "Starting at $3,000/month"
        },
        {
          name: "Real-time Dashboards",
          description: "Monitor your business metrics with live, interactive dashboards",
          features: ["Custom Visualizations", "Alert Systems", "Mobile Access"],
          price: "Starting at $2,500/month"
        },
        {
          name: "Data Science Consulting",
          description: "Expert guidance on data strategy and implementation",
          features: ["Data Strategy", "Model Development", "Team Training"],
          price: "Starting at $5,000/month"
        }
      ]
    }
  };
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "The AI solutions transformed our operations completely. We've seen 300% improvement in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow Inc",
      content: "Quantum computing gave us the competitive edge we needed. Our optimization problems are solved in minutes now.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Security Director, SecureNet",
      content: "Their cybersecurity platform prevented 15 major attacks in the first month alone. Incredible technology.",
      rating: 5
    }
  ];
  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
    { number: "50+", label: "Countries Served" }
  ];
  return (
    <>
      <SEOHead
        title="Ultimate AI Services Showcase 2026 - Revolutionary AI Solutions"
        description="Discover our comprehensive suite of cutting-edge AI solutions including quantum computing, cybersecurity, data analytics, and business automation. Transform your business with our advanced AI services."
        keywords="AI services, artificial intelligence solutions, quantum computing, cybersecurity, data analytics, business automation, machine learning, AI consulting"
        url="https://ziontechgroup.com/ultimate-ai-services-showcase-2026"
        type="website"
        image="https://ziontechgroup.com/images/ultimate-ai-services-showcase-2026.jpg"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ultimate AI Services
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Showcase 2026
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover the most advanced AI solutions that are revolutionizing industries worldwide. 
              From quantum computing to neural interfaces, we're building the future today.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Stats Section */}
      <motion.div 
        className="py-16 bg-white/10 backdrop-blur-sm"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Services Tabs */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <service.icon className="w-5 h-5" />
                {service.title}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{services[activeTab].title}</h2>
              <p className="text-xl text-gray-300">{services[activeTab].subtitle}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services[activeTab].services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-blue-400 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Trusted by industry leaders worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies already using our AI solutions to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Start Free Trial <Rocket className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );

};

export default UltimateAIServicesShowcase2026;
