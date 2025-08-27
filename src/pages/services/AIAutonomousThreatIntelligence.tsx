import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Target, 
  CheckCircle, 
  Star,
  BarChart3,
  Users,
  Globe,
  Zap,
  Cpu,
  Database,
  Network,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Sparkles,
  Activity,
  Gauge,
  Workflow,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  Smartphone,
  Wifi,
  Cloud,
  BarChart,
  TrendingUp,
  Activity,
  ShieldCheck
} from 'lucide-react';

export default function AIAutonomousThreatIntelligence() {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Threat Detection',
      description: 'AI-powered monitoring that identifies threats before they become attacks',
      benefits: ['24/7 surveillance', 'Zero-day threat detection', 'Behavioral analysis']
    },
    {
      icon: Shield,
      title: 'Autonomous Response',
      description: 'AI that automatically blocks and mitigates threats without human intervention',
      benefits: ['Instant threat neutralization', 'Adaptive defense strategies', 'Self-learning protection']
    },
    {
      icon: Target,
      title: 'Predictive Intelligence',
      description: 'Machine learning models that predict and prevent future attacks',
      benefits: ['Attack pattern recognition', 'Risk assessment', 'Proactive defense']
    },
    {
      icon: Network,
      title: 'Global Threat Intelligence',
      description: 'Real-time threat data from worldwide sources and dark web monitoring',
      benefits: ['Global threat visibility', 'Dark web intelligence', 'Cross-platform correlation']
    }
  ];

  const threatTypes = [
    {
      title: 'Ransomware Protection',
      description: 'Advanced ransomware detection and prevention',
      icon: Lock,
      price: '$15,000/month',
      features: ['Behavioral analysis', 'File encryption detection', 'Backup protection']
    },
    {
      title: 'Phishing Defense',
      description: 'AI-powered email and web phishing detection',
      icon: Mail,
      price: '$12,000/month',
      features: ['URL analysis', 'Content filtering', 'Social engineering detection']
    },
    {
      title: 'DDoS Mitigation',
      description: 'Intelligent DDoS attack prevention and mitigation',
      icon: Network,
      price: '$18,000/month',
      features: ['Traffic analysis', 'Rate limiting', 'Geographic blocking']
    },
    {
      title: 'Insider Threat Detection',
      description: 'Monitor and detect malicious insider activities',
      icon: Users,
      price: '$20,000/month',
      features: ['User behavior analysis', 'Access monitoring', 'Anomaly detection']
    }
  ];

  const pricing = [
    {
      name: 'Threat Shield Basic',
      price: '$8,000',
      period: '/month',
      description: 'Essential threat intelligence for small organizations',
      features: [
        'Basic threat detection',
        'Email security',
        'Standard support',
        'Basic reporting'
      ]
    },
    {
      name: 'Threat Shield Pro',
      price: '$25,000',
      period: '/month',
      description: 'Advanced threat intelligence for growing organizations',
      features: [
        'Advanced threat detection',
        'Autonomous response',
        'Priority support',
        'Real-time monitoring',
        'Predictive analytics'
      ],
      popular: true
    },
    {
      name: 'Threat Shield Enterprise',
      price: '$75,000',
      period: '/month',
      description: 'Complete threat intelligence for large enterprises',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'Dedicated security analyst',
        '24/7 support',
        'White-label solutions'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(239,68,68,0.1)_50%,transparent_70%)] animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Threat Intelligence
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              The world's most advanced AI-powered threat intelligence platform that autonomously detects, 
              analyzes, and neutralizes cyber threats in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Start Security Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-400 rounded-full font-semibold text-lg hover:bg-red-400 hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of cybersecurity with autonomous AI threat intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Threat Protection Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection against all types of cyber threats
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg mr-3">
                    <threat.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{threat.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {threat.description}
                </p>
                
                <div className="text-red-400 font-semibold text-lg mb-4">
                  {threat.price}
                </div>

                <ul className="space-y-2">
                  {threat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect threat intelligence plan for your organization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm rounded-2xl p-8 border ${
                  plan.popular 
                    ? 'border-red-400/60 shadow-lg shadow-red-500/25' 
                    : 'border-red-500/20'
                } hover:border-red-400/40 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700'
                      : 'bg-red-600/20 border border-red-400 hover:bg-red-600/30'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the cybersecurity revolution with autonomous AI threat intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              >
                Start Security Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-red-400 rounded-full font-semibold text-lg hover:bg-red-400 hover:text-gray-900 transition-all duration-300"
              >
                Contact Security Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}