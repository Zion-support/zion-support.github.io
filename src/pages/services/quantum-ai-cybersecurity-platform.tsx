import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Atom,
  Brain,
  Lock,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Network,
  Cpu,
  Database,
  Activity,
  Users,
  Target,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Globe,
  Server,
  Key,
  Fingerprint
} from 'lucide-react';

export default function QuantumAICybersecurityPlatform() {
  const features = [
    "Quantum-Resistant Encryption",
    "AI-Powered Threat Detection",
    "Real-time Security Monitoring",
    "Advanced Behavioral Analytics",
    "Zero-Trust Architecture",
    "Quantum Key Distribution",
    "Automated Incident Response",
    "Compliance Management",
    "Penetration Testing",
    "Security Training Platform",
    "24/7 SOC Monitoring",
    "Custom Security Policies"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "For small to medium businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email security",
        "Standard reporting",
        "Email support",
        "Basic compliance"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "For growing enterprises",
      features: [
        "Up to 1000 endpoints",
        "Advanced AI detection",
        "Quantum encryption",
        "Real-time monitoring",
        "Priority support",
        "Advanced compliance",
        "Custom policies"
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
        "Full quantum security",
        "Custom AI models",
        "Dedicated SOC team",
        "White-label solution",
        "Custom development",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Quantum-Safe Security",
      description: "Future-proof protection against quantum computing threats"
    },
    {
      icon: Brain,
      title: "AI-Powered Defense",
      description: "Machine learning detects and prevents 99.9% of threats"
    },
    {
      icon: Zap,
      title: "Real-time Protection",
      description: "Instant threat response with zero-day attack prevention"
    },
    {
      icon: Users,
      title: "Compliance Ready",
      description: "Meet SOC2, GDPR, HIPAA, and other compliance requirements"
    }
  ];

  const securityMetrics = [
    { metric: "99.9%", label: "Threat Detection Rate" },
    { metric: "< 1ms", label: "Response Time" },
    { metric: "24/7", label: "Monitoring Coverage" },
    { metric: "Zero", label: "False Positives" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              <Atom className="w-4 h-4 mr-2" />
              Quantum AI Cybersecurity
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Cybersecurity Platform
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              The world's first quantum-resistant cybersecurity platform powered by AI. 
              Protect your organization from current and future threats with quantum encryption.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Protected Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
                <Eye className="w-5 h-5 mr-2" />
                Security Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityMetrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{item.metric}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive protection for the quantum computing era
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-red-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Quantum AI Security?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay ahead of evolving cyber threats with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the security plan that fits your organization's needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 bg-slate-700/50' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations already protected by our Quantum AI Cybersecurity Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
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

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}