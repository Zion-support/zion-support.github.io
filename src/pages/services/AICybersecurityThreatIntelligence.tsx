import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  Zap, 
  Eye, 
  Lock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Cpu,
  Globe,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Network,
  Database,
  Server,
  Code,
  Target,
  TrendingUp,
  BarChart3,
  Activity,
  Fingerprint,
  Search,
  Monitor,
  Cloud
} from 'lucide-react';

const AICybersecurityThreatIntelligence = () => {
  const features = [
    {
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and analyze threats in real-time with 99.9% accuracy",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 network monitoring with instant threat alerts and automated response capabilities",
      icon: Monitor,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Behavioral Analysis",
      description: "AI-powered user behavior analytics to identify insider threats and anomalous activities",
      icon: Activity,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Threat Intelligence",
      description: "Global threat feed integration with real-time updates on emerging cyber threats",
      icon: Globe,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Automated Response",
      description: "Intelligent incident response automation that mitigates threats within seconds",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Vulnerability Assessment",
      description: "Continuous vulnerability scanning and risk assessment across your entire infrastructure",
      icon: Search,
      color: "from-red-500 to-pink-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI threat detection",
        "Basic monitoring",
        "Email alerts",
        "Up to 100 endpoints",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced AI algorithms",
        "Real-time monitoring",
        "Behavioral analysis",
        "Threat intelligence feeds",
        "Priority support",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$14,999",
      period: "/month",
      description: "For large corporations and government agencies",
      features: [
        "Custom AI model development",
        "Advanced threat hunting",
        "Dedicated security team",
        "SLA guarantees",
        "On-premise deployment",
        "White-label solutions",
        "Compliance reporting"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Threat Prevention",
      description: "Proactively identify and prevent cyber attacks before they occur",
      metric: "99.9% prevention"
    },
    {
      title: "Response Time",
      description: "Automated threat response reduces incident resolution time significantly",
      metric: "90% faster"
    },
    {
      title: "Cost Savings",
      description: "Prevent costly data breaches and reduce security incident costs",
      metric: "60% cost reduction"
    },
    {
      title: "Compliance",
      description: "Meet industry standards and regulatory requirements automatically",
      metric: "100% compliance"
    }
  ];

  const securityFeatures = [
    {
      title: "Network Security",
      description: "Advanced firewall protection, intrusion detection, and network segmentation",
      icon: Network,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Endpoint Protection",
      description: "Comprehensive endpoint security with AI-powered malware detection",
      icon: Server,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Security",
      description: "Multi-cloud security with automated compliance and threat detection",
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Protection",
      description: "Encryption, access control, and data loss prevention across all systems",
      icon: Lock,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-red-400 mr-3" />
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                AI Cybersecurity Threat Intelligence
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your organization with the most advanced AI-powered cybersecurity platform. 
              Detect, analyze, and respond to threats in real-time with unprecedented accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Secure Your Organization
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides comprehensive cybersecurity protection with real-time threat detection, 
              behavioral analysis, and automated response capabilities.
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
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-red-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Security Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect every aspect of your digital infrastructure with our multi-layered security approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform has protected thousands of organizations from cyber threats worldwide.
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
                <div className="text-4xl font-bold text-red-400 mb-4">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Competitive Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that best fits your organization's needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-red-400 shadow-2xl shadow-red-500/20' 
                    : 'border-slate-600'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white hover:from-red-600 hover:to-purple-600'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of organizations that trust our AI-powered cybersecurity platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Contact Zion Tech Group</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-gray-300">Phone</p>
              <a href="tel:+13024640950" className="text-white hover:text-red-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-gray-300">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-red-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-gray-300">Address</p>
              <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityThreatIntelligence;