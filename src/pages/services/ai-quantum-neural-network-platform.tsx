import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  DollarSign, 
  CheckCircle,
  Cpu,
  Database,
  Cloud,
  Lock,
  Activity,
  Target,
  Rocket,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Network,
  CircuitBoard,
  Quantum,
  Microscope,
  TestTube,
  FlaskConical
} from 'lucide-react';

const AIQuantumNeuralNetworkPlatform: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Neural Networks",
      description: "Hybrid quantum-classical neural networks that leverage quantum computing for unprecedented AI performance."
    },
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning models enhanced with quantum computing capabilities."
    },
    {
      icon: CircuitBoard,
      title: "Quantum Circuit Optimization",
      description: "Intelligent quantum circuit design and optimization for maximum computational efficiency."
    },
    {
      icon: Network,
      title: "Distributed Computing",
      description: "Scalable distributed computing architecture across quantum and classical systems."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Ultra-fast processing speeds with quantum acceleration for time-sensitive applications."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Quantum-resistant encryption and security protocols for enterprise-grade protection."
    }
  ];

  const pricingPlans = [
    {
      name: "Research",
      price: "$1,999",
      period: "/month",
      description: "For research institutions and academic use",
      features: [
        "Up to 100 quantum computations/month",
        "Basic quantum neural network models",
        "Research-grade accuracy",
        "Email support",
        "Academic licensing"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For growing businesses and startups",
      features: [
        "Up to 1,000 quantum computations/month",
        "Advanced quantum AI models",
        "Custom model training",
        "API access",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Quantum Elite",
      price: "$12,999",
      period: "/month",
      description: "For large-scale quantum operations",
      features: [
        "Unlimited quantum computations",
        "Full quantum AI autonomy",
        "Custom quantum algorithms",
        "White-label options",
        "Dedicated quantum engineers",
        "On-premise quantum deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "1000x",
      description: "Faster computation speed"
    },
    {
      metric: "99.9%",
      description: "Quantum accuracy rate"
    },
    {
      metric: "50%",
      description: "Reduction in energy consumption"
    },
    {
      metric: "Unlimited",
      description: "Scalability potential"
    }
  ];

  const useCases = [
    {
      icon: Microscope,
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research with quantum-powered molecular simulations."
    },
    {
      icon: TestTube,
      title: "Material Science",
      description: "Design new materials with quantum-accurate property predictions."
    },
    {
      icon: FlaskConical,
      title: "Chemical Engineering",
      description: "Optimize chemical processes with quantum chemistry calculations."
    },
    {
      icon: Cpu,
      title: "Financial Modeling",
      description: "Revolutionary risk assessment and portfolio optimization."
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Process massive datasets with quantum-enhanced algorithms."
    },
    {
      icon: Network,
      title: "Cybersecurity",
      description: "Quantum-resistant encryption and threat detection."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Quantum Neural Network Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize AI with our quantum neural network platform. Achieve 1000x faster computation speeds and 99.9% accuracy with hybrid quantum-classical AI models." />
        <meta name="keywords" content="quantum AI, quantum neural networks, quantum computing, AI platform, quantum machine learning, hybrid AI" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-quantum-neural-network-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-zion-cyan/20 text-zion-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Atom className="w-4 h-4" />
              <span>Quantum AI Platform</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Quantum Neural
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Network Platform</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Experience the future of artificial intelligence with our revolutionary quantum neural network platform. 
              Achieve 1000x faster computation speeds and unlock unprecedented AI capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Quantum Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quantum Performance That Defies Limits
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our quantum neural network platform delivers performance metrics that were previously impossible to achieve.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <div className="text-zion-slate-light">
                  {benefit.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Quantum AI Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience the cutting-edge capabilities that make our platform the most advanced quantum AI solution available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 p-6 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
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
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Transform Industries with Quantum AI
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform is revolutionizing multiple industries with unprecedented quantum computing capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 p-6 rounded-xl border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-purple/30 transition-all duration-300">
                  <useCase.icon className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-zion-slate-light">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Quantum AI Pricing Plans
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Access the power of quantum AI with flexible pricing designed for every level of quantum computing needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/25' 
                    : 'border-zion-purple/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple hover:bg-zion-purple hover:text-white'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-3xl p-12 text-center border border-zion-cyan/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum AI?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and unlock the full potential of artificial intelligence. 
              Start your quantum AI journey today with our cutting-edge platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Quantum Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Contact Quantum Experts
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Ready to explore the quantum frontier? Our quantum AI experts are here to guide you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan font-medium">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan font-medium">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIQuantumNeuralNetworkPlatform;