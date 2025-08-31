import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Network,
  Lock,
  BarChart3,
  Users,
  Globe,
  Rocket,
  Star,
  Phone,
  Mail,
  MapPin,
  Bot,
  Workflow,
  Eye,
  MessageCircle,
  Heart,
  Target,
  Lightbulb,
  PieChart,
  Activity,
  ShoppingCart,
  Settings,
  Atom,
  CircuitBoard
} from 'lucide-react';

const InnovativeAIServicesShowcase2025 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "AI Quantum Neural Network Platform",
      description: "Revolutionary quantum computing algorithms for neural network optimization and training acceleration",
      icon: <Brain className="w-8 h-8" />,
      link: "/services/ai-quantum-neural-network-platform",
      category: "Quantum AI",
      price: "From $2,999/month",
      features: ["Quantum Neural Processing", "Real-time Learning", "Quantum Security", "Predictive Analytics"]
    },
    {
      title: "AI Autonomous Business Operations Platform",
      description: "AI-powered systems that run your business operations 24/7 without human intervention",
      icon: <Bot className="w-8 h-8" />,
      link: "/services/ai-autonomous-business-operations-platform",
      category: "Business Automation",
      price: "From $1,999/month",
      features: ["Autonomous Operations", "Process Automation", "Predictive Decision Making", "Risk Management"]
    },
    {
      title: "AI Customer Experience Analytics Platform",
      description: "Transform customer experience with AI-powered analytics that understand your customers better",
      icon: <Users className="w-8 h-8" />,
      link: "/services/ai-customer-experience-analytics-platform",
      category: "Customer Analytics",
      price: "From $799/month",
      features: ["Real-time Insights", "Sentiment Analysis", "Predictive Analytics", "Journey Mapping"]
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management with predictive analytics and real-time optimization",
      icon: <Network className="w-8 h-8" />,
      link: "/services/ai-supply-chain-optimization",
      category: "Supply Chain",
      price: "From $3,999/month",
      features: ["Predictive Analytics", "Real-time Optimization", "Risk Management", "Cost Reduction"]
    },
    {
      title: "AI Cybersecurity Platform",
      description: "Advanced threat detection and prevention using AI-powered security algorithms",
      icon: <Shield className="w-8 h-8" />,
      link: "/services/ai-cybersecurity-platform",
      category: "Cybersecurity",
      price: "From $4,999/month",
      features: ["Threat Detection", "Behavioral Analysis", "Incident Response", "Compliance Management"]
    },
    {
      title: "AI Healthcare Platform",
      description: "Revolutionary healthcare solutions with AI-powered diagnostics and patient care",
      icon: <Heart className="w-8 h-8" />,
      link: "/services/ai-healthcare-platform",
      category: "Healthcare",
      price: "From $5,999/month",
      features: ["Medical Diagnostics", "Patient Monitoring", "Drug Discovery", "Care Optimization"]
    }
  ];

  const categories = ["All", "Quantum AI", "Business Automation", "Customer Analytics", "Supply Chain", "Cybersecurity", "Healthcare"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.15)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Revolutionary AI Services 2025
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Innovative AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Showcase
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Discover the future of artificial intelligence with our cutting-edge services. 
              From quantum computing to autonomous business operations, we're revolutionizing 
              how businesses operate and grow in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:scale-105 shadow-lg shadow-zion-purple/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-slate-900 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Category Filter */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-slate-900 shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/50 text-zion-slate-light border border-zion-purple/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
                    <div className="text-zion-cyan">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-xs bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-zion-cyan mb-2">
                    {service.price}
                  </div>
                  <p className="text-zion-slate-light text-sm">Starting price</p>
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:scale-105 group-hover:shadow-lg group-hover:shadow-zion-purple/25"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We're not just another AI company - we're your strategic partner in digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 text-center hover:border-zion-cyan/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Rocket className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-zion-slate-light">
                We leverage the latest AI, quantum computing, and machine learning technologies to deliver solutions that are years ahead of the competition.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 text-center hover:border-zion-cyan/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our team consists of world-class AI researchers, engineers, and business consultants with decades of combined experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 text-center hover:border-zion-cyan/30 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-zion-slate-light">
                We've helped hundreds of companies achieve breakthrough results with measurable ROI and transformative business outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join the AI revolution and discover how our innovative services can accelerate your digital transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovativeAIServicesShowcase2025;