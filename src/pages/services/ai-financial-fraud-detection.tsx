import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  Brain, 
  Zap, 
  CheckCircle, 
  DollarSign, 
  BarChart3,
  Lock,
  Eye,
  Clock,
  Users,
  Globe,
  Database,
  Cpu,
  Network,
  Smartphone,
  Monitor,
  Server,
  ShieldCheck,
  Globe2,
  Leaf,
  Satellite,
  Atom,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Star,
  Heart,
  Cloud,
  Target,
  Handshake,
  Rocket,
  Target as TargetIcon,
  BarChart,
  Activity,
  MessageCircle,
  Search,
  Settings,
  Palette,
  ChevronRight,
  Play,
  Pause,
  Stop,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Share2,
  MoreHorizontal,
  Filter,
  SortAsc,
  SortDesc,
  Calendar,
  Clock as ClockIcon,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

export default function AIFinancialFraudDetection() {
  const features = [
    {
      title: "Real-time Transaction Monitoring",
      description: "AI-powered analysis of every transaction in real-time with millisecond response",
      icon: Eye,
      benefits: ["Instant fraud detection", "Zero false positives", "24/7 monitoring"]
    },
    {
      title: "Advanced Machine Learning Models",
      description: "Self-learning algorithms that adapt to new fraud patterns automatically",
      icon: Brain,
      benefits: ["Pattern recognition", "Behavioral analysis", "Continuous learning"]
    },
    {
      title: "Multi-layered Security",
      description: "Combines AI, ML, and traditional security measures for comprehensive protection",
      icon: Shield,
      benefits: ["Defense in depth", "Risk scoring", "Threat intelligence"]
    },
    {
      title: "Compliance Automation",
      description: "Automated regulatory compliance reporting for financial institutions",
      icon: CheckCircle,
      benefits: ["GDPR compliance", "PCI DSS support", "SOX automation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small financial institutions",
      features: [
        "Up to 10,000 transactions/month",
        "Basic fraud detection",
        "Email alerts",
        "Standard support",
        "Basic reporting"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 100,000 transactions/month",
        "Advanced AI models",
        "Real-time alerts",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large financial institutions",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Credit Card Fraud",
      description: "Detect unauthorized credit card transactions in real-time",
      icon: CreditCard,
      examples: ["Stolen card detection", "Unusual spending patterns", "Geographic anomalies"]
    },
    {
      title: "Bank Transfer Fraud",
      description: "Prevent fraudulent bank transfers and wire fraud",
      icon: Banknote,
      examples: ["Account takeover", "Social engineering", "Money laundering"]
    },
    {
      title: "Investment Fraud",
      description: "Protect against investment scams and market manipulation",
      icon: TrendingUp,
      examples: ["Pump and dump schemes", "Insider trading", "Market manipulation"]
    },
    {
      title: "Insurance Fraud",
      description: "Detect fraudulent insurance claims and applications",
      icon: Shield,
      examples: ["False claims", "Exaggerated damages", "Identity theft"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Financial Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Fraud Detection
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Protect your financial institution with cutting-edge AI that detects fraud in real-time, 
              preventing millions in losses while maintaining zero false positives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
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
              Advanced Fraud Detection Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform combines multiple technologies to provide the most comprehensive 
              financial fraud protection available in the market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
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
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your organization's size and security requirements. 
              All plans include our core AI fraud detection capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-zion-blue-dark border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
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
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                    : 'bg-zion-purple/20 text-zion-cyan border border-zion-purple hover:bg-zion-purple/30'
                }`}>
                  {plan.cta}
                </button>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Fraud Protection
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI platform covers all types of financial fraud, from traditional scams 
              to sophisticated cyber attacks and emerging threats.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-zion-slate-light mb-4">{useCase.description}</p>
                    <div className="space-y-2">
                      {useCase.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3" />
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              Ready to Protect Your Financial Institution?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join hundreds of financial institutions that trust our AI to protect their assets 
              and customers from fraud. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <p className="text-sm text-zion-slate-light mt-6">
              No credit card required • 14-day free trial • Full support included
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Icon components for use cases
function CreditCard({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

function Banknote({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  );
}