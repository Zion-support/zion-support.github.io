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
  MapPin
} from 'lucide-react';

const AIQuantumNeuralNetworkPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Quantum Neural Processing",
      description: "Advanced quantum computing algorithms for neural network optimization and training acceleration"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Learning",
      description: "Continuous adaptation and learning from data streams with quantum-enhanced pattern recognition"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quantum Security",
      description: "Unbreakable encryption using quantum key distribution and post-quantum cryptography"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Advanced forecasting capabilities using quantum-enhanced machine learning algorithms"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      features: [
        "Basic quantum neural processing",
        "Up to 100GB data processing",
        "Standard security protocols",
        "Email support",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      features: [
        "Advanced quantum algorithms",
        "Up to 1TB data processing",
        "Enhanced security features",
        "Priority support",
        "Advanced analytics & reporting",
        "Custom model training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      features: [
        "Full quantum neural network suite",
        "Unlimited data processing",
        "Military-grade security",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Financial Trading",
      description: "Quantum-enhanced algorithmic trading with real-time market prediction and risk assessment",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Healthcare Diagnostics",
      description: "Advanced medical image analysis and disease prediction using quantum neural networks",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cybersecurity",
      description: "Threat detection and prevention using quantum-enhanced pattern recognition",
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Supply Chain Optimization",
      description: "Complex logistics optimization and demand forecasting with quantum algorithms",
      icon: <Network className="w-8 h-8" />
    }
  ];

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
              <Brain className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Quantum Neural Network
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our cutting-edge quantum neural network platform. 
              Combining quantum computing power with advanced neural networks for unprecedented performance and capabilities.
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
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Discover the cutting-edge capabilities that make our platform the most advanced AI solution available
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-colors">
                  <div className="text-zion-cyan">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-zion-slate-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform transforms industries with quantum-enhanced AI capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 hover:border-zion-cyan/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-zion-cyan">
                      {useCase.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-zion-slate-light text-lg">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your organization's needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-cyan-dark text-slate-900 hover:from-zion-cyan-light hover:to-zion-cyan'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple hover:bg-zion-purple hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-dark/30 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and transform your business with the most advanced AI platform available
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-semibold hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
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

export default AIQuantumNeuralNetworkPlatform;