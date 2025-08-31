import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Eye, 
  Lock, 
  Zap, 
  AlertTriangle, 
  Users, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Cpu,
  Network,
  Cloud,
  Activity,
  BarChart3,
  FileText,
  Download,
  Play,
  Pause,
  RefreshCw,
  Search,
  Filter,
  Bell,
  Settings,
  Key,
  Fingerprint,
  Database,
  Server,
  Router,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  ShieldCheck,
  ShieldX,
  AlertCircle,
  CheckSquare,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AICybersecurityPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and respond to threats in real-time",
      benefits: ["Zero-day threat detection", "Behavioral analysis", "Automated response"]
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous monitoring of your entire digital infrastructure with instant alerts",
      benefits: ["Real-time monitoring", "Instant notifications", "Comprehensive coverage"]
    },
    {
      icon: Shield,
      title: "Multi-Layer Protection",
      description: "Comprehensive security covering network, endpoint, application, and data layers",
      benefits: ["Defense in depth", "Comprehensive coverage", "Integrated protection"]
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "AI-driven response systems that automatically contain and remediate threats",
      benefits: ["Instant containment", "Automated remediation", "Reduced response time"]
    },
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "Enterprise-grade encryption for data at rest and in transit",
      benefits: ["AES-256 encryption", "End-to-end protection", "Compliance ready"]
    },
    {
      icon: Users,
      title: "Identity & Access Management",
      description: "Secure user authentication and authorization with multi-factor authentication",
      benefits: ["MFA support", "Role-based access", "Single sign-on"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses requiring basic cybersecurity protection",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "24/7 monitoring",
        "Email support",
        "Standard reporting",
        "10GB log storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing companies with advanced security needs",
      features: [
        "Up to 200 endpoints",
        "Advanced AI detection",
        "Automated response",
        "Priority support",
        "Custom dashboards",
        "100GB log storage",
        "Compliance reporting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade security",
      features: [
        "Unlimited endpoints",
        "Full AI suite",
        "Custom integrations",
        "Dedicated support",
        "Unlimited storage",
        "SLA guarantees",
        "On-site deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const securityLayers = [
    {
      title: "Network Security",
      icon: Network,
      description: "Protect your network infrastructure with advanced firewall and intrusion detection",
      capabilities: ["Next-gen firewall", "Intrusion detection", "DDoS protection", "VPN management"]
    },
    {
      title: "Endpoint Security",
      icon: Laptop,
      description: "Secure all devices with advanced endpoint detection and response",
      capabilities: ["Antivirus protection", "EDR capabilities", "Device control", "Data loss prevention"]
    },
    {
      title: "Application Security",
      icon: Code,
      description: "Protect your applications with runtime application self-protection",
      capabilities: ["RASP", "API security", "Web application firewall", "Code analysis"]
    },
    {
      title: "Data Security",
      icon: Database,
      description: "Safeguard sensitive data with encryption and access controls",
      capabilities: ["Data encryption", "Access controls", "Data classification", "Backup protection"]
    }
  ];

  const threatIntelligence = [
    {
      title: "Real-time Threat Feeds",
      description: "Access to global threat intelligence from multiple sources",
      benefits: ["Latest threat data", "Global coverage", "Real-time updates"]
    },
    {
      title: "Behavioral Analysis",
      description: "AI-powered analysis of user and system behavior patterns",
      benefits: ["Anomaly detection", "Risk scoring", "Predictive alerts"]
    },
    {
      title: "Threat Hunting",
      description: "Proactive threat hunting using advanced analytics",
      benefits: ["Proactive detection", "Advanced analytics", "Custom queries"]
    },
    {
      title: "Incident Response",
      description: "Automated and manual incident response capabilities",
      benefits: ["Automated containment", "Playbook execution", "Forensic analysis"]
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      role: "CISO, SecureNet",
      company: "SecureNet Corporation",
      content: "Zion Tech's AI cybersecurity platform has transformed our security posture. We've reduced incident response time by 80%.",
      rating: 5,
      results: "80% faster incident response"
    },
    {
      name: "Lisa Thompson",
      role: "Security Director, TechFlow",
      company: "TechFlow Inc.",
      content: "The AI-powered threat detection is incredible. It caught threats our previous solution missed completely.",
      rating: 5,
      results: "95% threat detection rate"
    },
    {
      name: "Robert Chen",
      role: "VP of IT, DataSafe",
      company: "DataSafe Solutions",
      content: "Implementation was smooth and the ROI was immediate. Our security team can now focus on strategy rather than firefighting.",
      rating: 5,
      results: "60% reduction in security incidents"
    }
  ];

  const complianceFrameworks = [
    "SOC 2 Type II", "ISO 27001", "PCI DSS", "HIPAA", "GDPR", "NIST", "CIS Controls", "COBIT"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-400/30 rounded-full text-red-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Cybersecurity
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with the most advanced AI-powered cybersecurity platform. 
                Get real-time threat detection, automated response, and comprehensive protection across all your digital assets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-full text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-red-400 text-red-400 font-semibold rounded-full text-lg hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> AI Security Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of cybersecurity with AI-powered protection that adapts and learns from every threat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Security Layers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our multi-layered approach ensures complete protection across your entire digital infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4">
                    <layer.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{layer.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{layer.description}</p>
                <div className="space-y-2">
                  <h4 className="text-red-400 font-semibold mb-3">Capabilities:</h4>
                  {layer.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <ShieldCheck className="w-4 h-4 text-red-400 mr-2" />
                      {capability}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Threat Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of threats with our comprehensive threat intelligence and AI-powered analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatIntelligence.map((intel, index) => (
              <motion.div
                key={intel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{intel.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{intel.description}</p>
                <div className="space-y-2">
                  <h4 className="text-red-400 font-semibold mb-3">Key Benefits:</h4>
                  {intel.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <Target className="w-4 h-4 text-red-400 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Compliance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements and industry standards with our compliance-ready security platform.
            </p>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={framework}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-red-400/50 transition-all duration-300"
                >
                  <CheckSquare className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <span className="text-white font-medium">{framework}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-400/50 bg-red-500/10' 
                    : 'border-white/10 hover:border-red-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-transparent border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"> Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have achieved with our AI cybersecurity platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonial.name}</h4>
                    <p className="text-red-400">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-red-400 font-semibold text-sm">{testimonial.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of companies already protected by our AI cybersecurity platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-red-400 text-red-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform;