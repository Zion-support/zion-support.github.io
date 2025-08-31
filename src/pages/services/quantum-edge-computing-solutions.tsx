import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Cpu, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  AlertTriangle,
  Lightbulb,
  BarChart,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Monitor,
  Network,
  Server,
  HardDrive,
  Layers,
  CircuitBoard,
  Rocket,
  Target,
  Lock,
  Wifi,
  Satellite,
  Radio,
  Signal,
  Gauge,
  Flash
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantumEdgeComputingSolutions() {
  const features = [
    {
      icon: Atom,
      title: "Quantum-Classical Hybrid Computing",
      description: "Seamlessly integrate quantum processing with classical computing for optimal performance and efficiency",
      benefits: ["Quantum advantage", "Hybrid algorithms", "Performance optimization", "Scalable architecture"]
    },
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Advanced AI models running at the edge for real-time decision making and reduced latency",
      benefits: ["Real-time processing", "Low latency", "Bandwidth optimization", "Offline operation"]
    },
    {
      icon: Network,
      title: "Distributed Edge Networks",
      description: "Intelligent edge node distribution for optimal resource utilization and fault tolerance",
      benefits: ["Load balancing", "Fault tolerance", "Geographic distribution", "Auto-scaling"]
    },
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Post-quantum cryptography and quantum-resistant security protocols for future-proof protection",
      benefits: ["Quantum-resistant encryption", "Advanced authentication", "Secure key distribution", "Threat detection"]
    },
    {
      icon: Zap,
      title: "Real-time Data Processing",
      description: "Ultra-fast data processing at the edge with quantum-enhanced algorithms and optimization",
      benefits: ["Sub-millisecond latency", "High throughput", "Real-time analytics", "Stream processing"]
    },
    {
      icon: Brain,
      title: "Adaptive Learning Systems",
      description: "Self-optimizing edge systems that learn and adapt to changing conditions and requirements",
      benefits: ["Machine learning", "Auto-optimization", "Predictive maintenance", "Dynamic scaling"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for small businesses exploring quantum edge computing",
      features: [
        "Up to 5 edge nodes",
        "Basic quantum processing",
        "Standard security protocols",
        "Email support",
        "Monthly performance reports",
        "Basic AI models"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,999",
      period: "/month",
      description: "Ideal for growing businesses requiring advanced quantum edge capabilities",
      features: [
        "Up to 25 edge nodes",
        "Advanced quantum algorithms",
        "Enhanced security protocols",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "/month",
      description: "For large enterprises requiring maximum quantum edge performance and customization",
      features: [
        "Unlimited edge nodes",
        "Custom quantum algorithms",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "Multi-tenant support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Ultra-Fast Processing",
      description: "Achieve 100-1000x faster processing speeds with quantum-enhanced edge computing"
    },
    {
      icon: Shield,
      title: "Future-Proof Security",
      description: "Quantum-resistant security protocols that protect against emerging threats"
    },
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Distributed edge computing network spanning multiple continents for optimal performance"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Easily scale from 5 to 50,000+ edge nodes with our cloud-based platform"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Ultra-fast trading algorithms, risk assessment, and fraud detection with quantum edge processing"
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Real-time medical imaging analysis, drug discovery, and patient monitoring at the edge"
    },
    {
      title: "Autonomous Vehicles",
      description: "Real-time decision making, sensor fusion, and navigation optimization for autonomous systems"
    },
    {
      title: "Smart Cities",
      description: "Intelligent traffic management, environmental monitoring, and public safety systems"
    }
  ];

  const technologies = [
    {
      icon: Atom,
      title: "Quantum Processing Units",
      description: "State-of-the-art quantum processors for complex computational tasks"
    },
    {
      icon: Cpu,
      title: "Edge AI Accelerators",
      description: "Specialized hardware for AI model inference and training at the edge"
    },
    {
      icon: Network,
      title: "5G/6G Networks",
      description: "Ultra-low latency network infrastructure for edge computing applications"
    },
    {
      icon: Shield,
      title: "Quantum Cryptography",
      description: "Advanced security protocols resistant to quantum computing attacks"
    },
    {
      icon: Database,
      title: "Edge Databases",
      description: "Distributed database systems optimized for edge computing environments"
    },
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "Comprehensive monitoring and alerting systems for edge infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Edge Computing Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum Edge
              <span className="text-zion-cyan"> Computing Solutions</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize your computing infrastructure with quantum-enhanced edge computing. 
              Achieve 100-1000x faster processing speeds with distributed quantum processing at the edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Quantum Edge Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform combines the power of quantum computing with edge processing to deliver 
              unprecedented performance and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Built on cutting-edge quantum computing, edge processing, and AI technologies 
              to deliver unmatched performance and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="p-3 bg-zion-purple/20 rounded-lg w-fit mb-4">
                  <tech.icon className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-zion-slate-light">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your quantum edge computing needs. All plans include our core 
              quantum processing capabilities with enterprise-grade security and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-2xl shadow-zion-cyan/20 scale-105' 
                    : 'border-zion-purple/30'
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
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                      : 'bg-zion-purple/20 text-zion-purple border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Quantum Edge Platform?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Join the quantum computing revolution with our edge processing platform that delivers 
              unprecedented performance and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-zion-cyan/20 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our quantum edge computing platform is designed to handle the most demanding 
              computational challenges across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Quantum Edge Computing?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the future of computing with quantum-enhanced edge processing, 
              unprecedented performance, and limitless possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-purple font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-6 h-6 text-zion-cyan mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}