import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Atom, 
  Lock, 
  Eye, 
  Zap, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Handshake,
  Lightbulb,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  PenTool,
  Leaf,
  Satellite,
  FileText,
  Sparkles,
  Workflow,
  Truck,
  ShieldCheck,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Fingerprint,
  Key,
  Server,
  Wifi,
  HardDrive,
  Monitor
} from 'lucide-react';

export default function QuantumAICybersecurityPlatform() {
  const features = [
    {
      icon: Atom,
      title: "Quantum Encryption",
      description: "Post-quantum cryptography algorithms that are resistant to quantum computer attacks, ensuring future-proof security."
    },
    {
      icon: Brain,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to cyber threats in real-time with 99.9% accuracy."
    },
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Comprehensive zero-trust security model that verifies every user, device, and network connection before granting access."
    },
    {
      icon: Eye,
      title: "Behavioral Analytics",
      description: "AI-powered user behavior analysis that identifies anomalous activities and potential insider threats."
    },
    {
      icon: Zap,
      title: "Real-time Response",
      description: "Automated incident response that neutralizes threats within milliseconds of detection."
    },
    {
      icon: Network,
      title: "Network Segmentation",
      description: "Intelligent network segmentation that isolates threats and prevents lateral movement across systems."
    }
  ];

  const benefits = [
    "99.9% threat detection accuracy",
    "Zero false positive rate",
    "Real-time threat neutralization",
    "Quantum-resistant encryption",
    "24/7 autonomous monitoring",
    "Compliance with all major standards",
    "Reduced security team workload",
    "Protection against future quantum attacks"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$3,999",
      period: "/month",
      description: "Perfect for small to medium businesses requiring advanced cybersecurity",
      features: [
        "AI threat detection",
        "Basic quantum encryption",
        "Real-time monitoring",
        "Email support",
        "Standard compliance reporting",
        "Up to 100 endpoints"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing enterprises with complex security requirements",
      features: [
        "Advanced AI threat detection",
        "Full quantum encryption suite",
        "Zero-trust architecture",
        "Priority support",
        "Advanced compliance reporting",
        "Unlimited endpoints",
        "Custom security policies",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$15,999",
      period: "/month",
      description: "For large enterprises requiring maximum security and compliance",
      features: [
        "Full quantum AI cybersecurity suite",
        "Custom AI model training",
        "Advanced behavioral analytics",
        "Dedicated security team",
        "Multi-tenant architecture",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Protect critical financial data, prevent fraud, and ensure regulatory compliance",
      icon: DollarSign
    },
    {
      industry: "Healthcare",
      description: "Secure patient data, protect medical devices, and ensure HIPAA compliance",
      icon: Heart
    },
    {
      industry: "Government",
      description: "National security, classified information protection, and cyber warfare defense",
      icon: Building
    },
    {
      industry: "Manufacturing",
      description: "Protect intellectual property, secure supply chains, and prevent industrial espionage",
      icon: Building
    },
    {
      industry: "Technology",
      description: "Secure cloud infrastructure, protect user data, and prevent data breaches",
      icon: Cpu
    },
    {
      industry: "Energy",
      description: "Protect critical infrastructure, prevent cyber attacks on power grids",
      icon: Zap
    }
  ];

  const securityStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "NIST Cybersecurity Framework",
    "GDPR Compliance",
    "HIPAA Compliance",
    "PCI DSS",
    "FedRAMP",
    "CIS Controls"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Quantum AI Cybersecurity Platform - Zion Tech Group"
        description="Next-generation cybersecurity platform combining quantum computing and AI. Achieve 99.9% threat detection with quantum-resistant encryption."
        keywords="quantum cybersecurity, AI security, quantum encryption, cybersecurity platform, threat detection"
        canonicalUrl="https://ziontechgroup.com/services/Quantum-AI-Cybersecurity-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Quantum AI{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                Cybersecurity Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The future of cybersecurity is here. Our quantum AI platform combines the power of quantum computing 
              with advanced artificial intelligence to provide unprecedented protection against all cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-orange-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Get Protected
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-red-400/50 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Unprecedented Security Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum AI platform delivers security capabilities that were previously impossible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-red-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-red-500/5 to-orange-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that redefine what's possible in cybersecurity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform protects critical infrastructure across all major industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-red-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Standards */}
      <section className="py-20 bg-gradient-to-r from-red-500/5 to-orange-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform meets and exceeds all major cybersecurity standards and regulations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-red-400/50 transition-all duration-300 text-center"
              >
                <ShieldCheck className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{standard}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/50 scale-105' 
                    : 'border-white/10 hover:border-red-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Quantum%20AI%20Cybersecurity%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-red-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-500 hover:to-orange-600 transition-all duration-200 text-center block"
                >
                  Get Protected
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our Quantum AI Cybersecurity Platform can protect your organization
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-red-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-red-400 hover:text-red-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-red-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-red-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Quantum%20AI%20Cybersecurity%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-red-400 to-orange-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-orange-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-red-400/50 text-red-400 font-semibold rounded-lg hover:bg-red-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}