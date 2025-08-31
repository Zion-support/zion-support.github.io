import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  Lock, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Activity,
  Eye,
  Network,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  Play,
  Server,
  Cpu,
  Database,
  Users,
  BarChart3,
  TrendingUp,
  ShieldCheck,
  Bug,
  Key,
  Monitor,
  Search,
  FileText,
  Globe2,
  Wifi,
  Cloud,
  Server2
} from 'lucide-react';

export default function AICybersecurityIntelligencePlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and analyze threats in real-time with 99.9% accuracy"
    },
    {
      icon: Shield,
      title: "Zero-Day Attack Prevention",
      description: "Proactive identification of unknown threats using behavioral analysis and pattern recognition"
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous surveillance of your entire digital infrastructure with instant threat alerts"
    },
    {
      icon: Network,
      title: "Network Traffic Analysis",
      description: "Deep packet inspection and anomaly detection across all network communications"
    },
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "Military-grade encryption protocols with quantum-resistant algorithms for future-proof security"
    },
    {
      icon: Activity,
      title: "Behavioral Analytics",
      description: "User and entity behavior analytics to detect insider threats and compromised accounts"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard security dashboard",
        "Basic reporting",
        "SSL certificate management"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced AI algorithms",
        "Priority support",
        "Custom security policies",
        "Advanced threat hunting",
        "Compliance reporting",
        "API access",
        "24/7 monitoring"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced integrations",
        "Custom development",
        "SLA guarantees",
        "Threat intelligence feeds"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: "99.9% Threat Detection",
      description: "Advanced AI algorithms detect and prevent threats before they can cause damage"
    },
    {
      icon: DollarSign,
      title: "Reduce Security Costs",
      description: "Automated threat response reduces manual security operations by 80%"
    },
    {
      icon: Clock,
      title: "Real-time Response",
      description: "Instant threat detection and automated response within milliseconds"
    },
    {
      icon: Target,
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for SOC2, GDPR, HIPAA, and more"
    }
  ];

  const securityFeatures = [
    {
      icon: Bug,
      title: "Vulnerability Assessment",
      description: "Automated scanning and assessment of security vulnerabilities"
    },
    {
      icon: Key,
      title: "Identity Management",
      description: "Multi-factor authentication and privileged access management"
    },
    {
      icon: Monitor,
      title: "SIEM Integration",
      description: "Seamless integration with existing security information systems"
    },
    {
      icon: Search,
      title: "Forensic Analysis",
      description: "Advanced digital forensics and incident response capabilities"
    },
    {
      icon: FileText,
      title: "Compliance Reporting",
      description: "Automated compliance reports and audit trails"
    },
    {
      icon: Globe2,
      title: "Cloud Security",
      description: "Comprehensive protection for cloud-native applications"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Intelligence Platform
            </h1>
            
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your digital assets with the most advanced AI-powered cybersecurity platform. 
              Detect, prevent, and respond to threats in real-time with 99.9% accuracy and 
              zero false positives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI platform provides comprehensive cybersecurity protection for modern digital environments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section className="py-16 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Coverage
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Protect every aspect of your digital infrastructure with our comprehensive security suite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-purple" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience the future of cybersecurity with AI-powered protection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Plans
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the security level that matches your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                    : 'bg-zion-purple/20 text-zion-cyan border border-zion-purple/40 hover:bg-zion-purple/30'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of organizations protected by our AI-powered cybersecurity platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/20 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 bg-zion-slate-darker">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light">Phone</span>
              <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <span className="text-zion-slate-light">Address</span>
              <span className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}