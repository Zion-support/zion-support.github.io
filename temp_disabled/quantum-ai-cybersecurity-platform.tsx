import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Zap, 
  Brain, 
  Lock, 
  Eye, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Crown,
  Rocket,
  TrendingUp,
  Users,
  Clock,
  Globe,
  Cpu,
  Database,
  Network,
  Code,
  Server,
  Cloud,
  Heart,
  Leaf,
  DollarSign,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Gauge,
  GitFork,
  Atom,
  Smartphone,
  Truck,
  Factory,
  City,
  CheckCircle2,
  Search,
  Filter,
  Activity,
  AlertTriangle,
  Key,
  Fingerprint,
  ServerCrash,
  Network
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantumAICybersecurityPlatform() {
  const features = [
    {
      title: 'Quantum-Resistant Encryption',
      description: 'Post-quantum cryptography algorithms that withstand quantum computing attacks',
      icon: Lock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning algorithms that identify and neutralize threats in real-time',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Zero-Trust Architecture',
      description: 'Comprehensive security framework with continuous verification and monitoring',
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Advanced Behavioral Analytics',
      description: 'AI-driven user behavior analysis to detect anomalies and potential threats',
      icon: Eye,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Automated Incident Response',
      description: 'Intelligent threat response with minimal human intervention',
      icon: Zap,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Quantum Key Distribution',
      description: 'Unhackable communication using quantum entanglement principles',
      icon: Atom,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: 399,
      period: 'month',
      description: 'Perfect for small businesses requiring advanced cybersecurity',
      features: [
        'Quantum-resistant encryption',
        'AI threat detection (basic)',
        'Zero-trust network access',
        'Email support',
        'Up to 10 users',
        'Standard security monitoring',
        'Monthly security reports'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Professional',
      price: 899,
      period: 'month',
      description: 'Ideal for growing organizations with complex security needs',
      features: [
        'Advanced quantum encryption',
        'Full AI threat detection suite',
        'Comprehensive zero-trust architecture',
        'Behavioral analytics',
        'Priority support',
        'Up to 100 users',
        'Advanced monitoring',
        'Custom security policies'
      ],
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 2499,
      period: 'month',
      description: 'For large organizations requiring maximum security',
      features: [
        'Full quantum cybersecurity suite',
        'Custom AI model development',
        'Dedicated security team',
        '24/7 priority support',
        'Unlimited users',
        'White-label solutions',
        'SLA guarantees',
        'On-site security training'
      ],
      icon: Star,
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const benefits = [
    'Protect against quantum computing attacks',
    'Reduce security incidents by up to 95%',
    'Real-time threat detection and response',
    'Compliance with international security standards',
    'Scalable security infrastructure',
    'AI-powered continuous monitoring'
  ];

  const securityFeatures = [
    {
      title: 'Network Security',
      description: 'Advanced firewall and intrusion prevention systems',
      icon: Network,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Endpoint Protection',
      description: 'Comprehensive device security and monitoring',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cloud Security',
      description: 'Multi-cloud security and compliance management',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Protection',
      description: 'Encryption at rest and in transit',
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEO 
        title="Quantum AI Cybersecurity Platform | Zion Tech Group"
        description="Protect your organization with our Quantum AI Cybersecurity Platform. Advanced threat detection, quantum-resistant encryption, and AI-powered security automation."
        keywords="quantum cybersecurity, AI security, quantum encryption, threat detection, zero-trust security, cybersecurity platform"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Quantum AI Cybersecurity
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum AI
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Cybersecurity Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Future-proof your security with quantum-resistant encryption and AI-powered threat detection. 
              Our platform provides unparalleled protection against emerging cyber threats.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500/10 transition-all duration-300"
              >
                Watch Demo
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines quantum computing principles with AI to create unbreakable security
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-indigo-500/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Protect every aspect of your digital infrastructure with our multi-layered security approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((securityFeature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${securityFeature.color} mb-4`}>
                  <securityFeature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{securityFeature.title}</h3>
                <p className="text-gray-300">{securityFeature.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the security level that fits your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                        : 'border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of cybersecurity with quantum AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations already protected by quantum AI cybersecurity
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}