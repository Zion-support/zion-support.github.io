import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  Eye, 
  Lock, 
  AlertTriangle, 
  Activity, 
  Network, 
  Server, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Settings,
  Globe,
  Cloud,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Handshake,
  Code,
  Smartphone,
  Monitor,
  HardDrive,
  FileText,
  MessageCircle,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Zap,
  Users,
  Database,
  Cpu,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  TrendingUp
} from 'lucide-react';

export default function AICybersecurityIntelligencePlatform() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze threats in real-time",
      icon: Brain,
      benefits: ["99.9% threat detection accuracy", "Zero-day attack prevention", "Behavioral analysis"]
    },
    {
      title: "Intelligent Incident Response",
      description: "Automated response systems that contain and neutralize threats instantly",
      icon: Shield,
      benefits: ["Automated threat containment", "Response time under 30 seconds", "Intelligent escalation"]
    },
    {
      title: "Predictive Security Analytics",
      description: "Forecast potential security risks before they become actual threats",
      icon: TrendingUp,
      benefits: ["Risk prediction models", "Vulnerability assessment", "Proactive defense"]
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement comprehensive zero trust security across all systems and users",
      icon: Lock,
      benefits: ["Identity verification", "Continuous monitoring", "Least privilege access"]
    }
  ];

  const securityModules = [
    {
      name: "Network Security",
      description: "Advanced firewall, intrusion detection, and network monitoring",
      icon: Network,
      features: ["DDoS protection", "Traffic analysis", "VPN management"]
    },
    {
      name: "Endpoint Security",
      description: "Comprehensive protection for all devices and endpoints",
      icon: Monitor,
      features: ["Malware detection", "Device control", "Data encryption"]
    },
    {
      name: "Cloud Security",
      description: "Secure cloud infrastructure and applications",
      icon: Cloud,
      features: ["Cloud access security", "API protection", "Data loss prevention"]
    },
    {
      name: "Application Security",
      description: "Secure software development and runtime protection",
      icon: Code,
      features: ["SAST/DAST scanning", "Runtime protection", "Vulnerability management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$3,499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard security modules",
        "Daily security reports"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$8,999",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced threat detection",
        "Priority support",
        "All security modules",
        "Real-time monitoring",
        "Custom security policies"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$24,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Custom integrations",
        "Compliance automation"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const complianceFrameworks = [
    "SOC 2 Type II", "ISO 27001", "GDPR", "HIPAA", "PCI DSS", "NIST", "FedRAMP", "SOX"
  ];

  const threatIntelligence = [
    {
      type: "Malware Analysis",
      description: "Advanced malware detection and analysis using AI",
      capabilities: ["Behavioral analysis", "Sandbox testing", "Threat intelligence"]
    },
    {
      type: "Phishing Detection",
      description: "AI-powered phishing email and website detection",
      capabilities: ["URL analysis", "Content scanning", "Sender reputation"]
    },
    {
      type: "Ransomware Protection",
      description: "Real-time ransomware detection and prevention",
      capabilities: ["File monitoring", "Behavioral detection", "Backup protection"]
    },
    {
      type: "Insider Threat Detection",
      description: "Monitor and detect potential insider threats",
      capabilities: ["User behavior analysis", "Access monitoring", "Anomaly detection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Intelligence Platform
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your organization with next-generation AI-powered cybersecurity that detects, 
              prevents, and responds to threats in real-time. Stay ahead of evolving cyber risks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-40 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive cybersecurity protection with intelligent 
              threat detection and automated response capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Protect every aspect of your digital infrastructure with our modular security approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {securityModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{module.name}</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">{module.description}</p>
                
                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                      <ShieldCheck className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Threat Intelligence
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Leverage AI-powered threat intelligence to stay ahead of emerging cyber threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatIntelligence.map((intel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-8 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{intel.type}</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-4 leading-relaxed">{intel.description}</p>
                
                <ul className="space-y-2">
                  {intel.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-zion-slate-light text-sm">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Meet industry standards and regulatory requirements with our compliance-ready security platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-purple/20 rounded-xl p-6 text-center hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{framework}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the perfect security plan for your organization. All plans include our core AI cybersecurity features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-red-500 shadow-2xl shadow-red-500/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'bg-zion-purple/20 text-red-400 border border-zion-purple/30 hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Digital Future Today
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already protected by our AI-powered cybersecurity platform. 
              Don't wait until it's too late.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
              >
                Security Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
              <p className="text-red-400 font-semibold">+1 302 464 0950</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
              <p className="text-red-400 font-semibold">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Visit Us</h3>
              <p className="text-red-400 font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}