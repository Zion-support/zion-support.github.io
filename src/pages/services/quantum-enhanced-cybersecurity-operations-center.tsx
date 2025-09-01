import React from 'react';
import { motion } from 'framer-motion';
import {

  Shield, 
  Zap, 
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
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  Cpu,
  Network,
  Lock,
  Key,
  Fingerprint,
  Radar,
  Satellite,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Globe2,
  Cloud,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon,
  Clock as ClockIcon,
  Globe as GlobeIcon,
  Database as DatabaseIcon2,
  Activity as ActivityIcon2,
  Eye as EyeIcon2,
  Settings as SettingsIcon2,
  Download as DownloadIcon2,
  Share2 as Share2Icon2,
  Filter as FilterIcon2,
  Search as SearchIcon2,
  AlertTriangle as AlertTriangleIcon2,
  Lightbulb as LightbulbIcon2,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuantumEnhancedCybersecurityOperationsCenter() {

  const features = [
    {

      icon: Brain,
      title: "Quantum AI Threat Detection",
      description: "Advanced quantum machine learning algorithms that detect and analyze threats in real-time with unprecedented accuracy",
      benefits: ["Quantum-enhanced pattern recognition", "Real-time threat analysis", "Predictive threat modeling"]
    },
    {

      icon: Shield,
      title: "Zero-Trust Security Architecture",
      description: "Implement comprehensive zero-trust security with quantum-resistant encryption and continuous verification",
      benefits: ["Quantum-resistant encryption", "Continuous verification", "Micro-segmentation"]
    },
    {

      icon: Radar,
      title: "Advanced Threat Intelligence",
      description: "AI-powered threat intelligence that aggregates and analyzes data from global security sources",
      benefits: ["Global threat feeds", "AI-powered analysis", "Real-time updates"]
    },
    {

      icon: Activity,
      title: "24/7 Security Operations",
      description: "Round-the-clock security monitoring with automated incident response and human expert oversight",
      benefits: ["Continuous monitoring", "Automated response", "Expert escalation"]
    },
    {

      icon: Zap,
      title: "Quantum Cryptography",
      description: "Next-generation quantum cryptography for unbreakable communication and data protection",
      benefits: ["Quantum key distribution", "Unbreakable encryption", "Future-proof security"]
    },
    {

      icon: Network,
      title: "Network Security Orchestration",
      description: "Intelligent network security that automatically adapts and responds to emerging threats",
      benefits: ["Adaptive security", "Automated response", "Network resilience"]
    }
  ];

  const pricingPlans = [
    {

      name: "Essential",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small to medium businesses requiring advanced cybersecurity",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "24/7 monitoring",
        "Email support",
        "Standard reports",
        "Basic incident response"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing companies with complex security requirements",
      features: [
        "Up to 1,000 endpoints",
        "Advanced threat detection",
        "Quantum AI analytics",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "White-label options",
        "Dedicated security team"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade cybersecurity operations",
      features: [
        "Unlimited endpoints",
        "Custom security solutions",
        "Advanced quantum cryptography",
        "24/7 dedicated support",
        "Custom AI models",
        "Advanced compliance",
        "API access",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {

      industry: "Financial Services",
      description: "Protect critical financial systems with quantum-enhanced security and compliance",
      metrics: ["Threat detection rate", "Incident response time", "Compliance score"]
    },
    {

      industry: "Healthcare",
      description: "Secure patient data and medical systems with HIPAA-compliant quantum security",
      metrics: ["Data breach prevention", "System uptime", "Patient trust score"]
    },
    {

      industry: "Government",
      description: "Defend critical infrastructure and sensitive government systems",
      metrics: ["National security", "Infrastructure protection", "Threat intelligence"]
    },
    {

      industry: "Manufacturing",
      description: "Protect industrial control systems and intellectual property",
      metrics: ["Production security", "IP protection", "Operational continuity"]
    }
  ];

  const securityLayers = [
    { icon: Lock, name: "Network Security", description: "Advanced firewall and intrusion detection" },
    { icon: Key, name: "Access Control", description: "Multi-factor authentication and identity management" },
    { icon: Fingerprint, name: "Biometric Security", description: "Advanced biometric authentication systems" },
    { icon: Server, name: "Endpoint Protection", description: "Comprehensive endpoint security solutions" },
    { icon: Cloud, name: "Cloud Security", description: "Secure cloud infrastructure and applications" },
    { icon: Database, name: "Data Protection", description: "Encryption and data loss prevention" }
  ];

  const complianceFrameworks = [
    "SOC 2 Type II",
    "ISO 27001",
    "NIST Cybersecurity Framework",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "FedRAMP",
    "CIS Controls"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Quantum-Enhanced Cybersecurity Operations Center
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Next-Generation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Cybersecurity Operations</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our quantum-enhanced cybersecurity operations center combines cutting-edge AI, quantum computing, 
              and human expertise to provide unparalleled protection against evolving cyber threats.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge cybersecurity capabilities powered by quantum computing and AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Layers
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multi-layered security approach covering every aspect of your digital infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <layer.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{layer.name}</h3>
                <p className="text-gray-400">{layer.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet and exceed industry standards with our comprehensive compliance framework
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">{framework}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${

                  plan.popular 
                    ? 'border-blue-500/50 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${

                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored cybersecurity for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-300">
                      <Shield className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Future?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join organizations worldwide that trust our quantum-enhanced cybersecurity solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Security Assessment
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                Contact Security Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">
            <p className="mb-2">
              <strong>Contact Us:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com
            </p>
            <p>
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
            </p>
            <p className="mt-2">
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}