import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Zap, 
  Lock, 
  Globe, 
  Database, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Target,
  Rocket,
  Cpu,
  Network,
  BookOpen,
  GraduationCap,
  Building2,
  Heart,
  Atom,
  Satellite,
  Brain,
  Activity,
  Search,
  FileText,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Wifi,
  ShieldCheck,
  AlertCircle,
  Target2,
  LockKeyhole,
  Fingerprint,
  Scan,
  Bug,
  AlertTriangle,
  Flame,
  AlertOctagon
} from 'lucide-react';

export default function AICybersecurityThreatIntelligence() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze threats in real-time with 99.9% accuracy"
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "24/7 surveillance of your entire digital infrastructure with instant threat alerts and response"
    },
    {
      icon: AlertTriangle,
      title: "Predictive Threat Intelligence",
      description: "AI algorithms predict emerging threats before they materialize, giving you proactive defense capabilities"
    },
    {
      icon: Users,
      title: "Threat Hunting Teams",
      description: "Expert cybersecurity analysts work alongside AI to investigate and neutralize advanced persistent threats"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated threat containment and remediation without human intervention delays"
    },
    {
      icon: Shield,
      title: "Zero-Day Protection",
      description: "Protection against unknown vulnerabilities and zero-day exploits through behavioral analysis"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Enterprise Security",
      description: "Comprehensive threat protection for large organizations with complex IT infrastructures"
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Advanced threat detection for cloud-native applications and multi-cloud environments"
    },
    {
      icon: Heart,
      title: "Healthcare Security",
      description: "HIPAA-compliant cybersecurity protecting patient data and medical systems"
    },
    {
      icon: DollarSign,
      title: "Financial Services",
      description: "Bank-grade security for financial institutions and payment processing systems"
    },
    {
      icon: Server,
      title: "Critical Infrastructure",
      description: "Industrial control system protection for power plants and manufacturing facilities"
    },
    {
      icon: Smartphone,
      title: "IoT Security",
      description: "Comprehensive protection for connected devices and smart home systems"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email alerts",
        "Standard support",
        "Basic reporting",
        "Cloud dashboard"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses and mid-size organizations",
      features: [
        "Up to 1,000 endpoints",
        "Advanced AI threat detection",
        "Real-time monitoring",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Threat hunting support"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Dedicated threat hunters",
        "24/7 support",
        "Custom integrations",
        "Compliance reporting",
        "SLA guarantees",
        "White-label options"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Real-Time Protection",
      description: "Detect and respond to threats in milliseconds, not minutes"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Save up to 60% on security costs compared to traditional solutions"
    },
    {
      icon: Target,
      title: "Proactive Defense",
      description: "Stop threats before they reach your systems with predictive intelligence"
    },
    {
      icon: Rocket,
      title: "Compliance Ready",
      description: "Meet SOC 2, ISO 27001, and other security compliance requirements"
    }
  ];

  const threatTypes = [
    {
      icon: Bug,
      title: "Malware & Ransomware",
      description: "Advanced detection and prevention of malicious software attacks"
    },
    {
      icon: Network,
      title: "Network Attacks",
      description: "DDoS protection and network intrusion detection systems"
    },
    {
      icon: AlertCircle,
      title: "Phishing & Social Engineering",
      description: "AI-powered detection of sophisticated social engineering attempts"
    },
    {
      icon: LockKeyhole,
      title: "Data Breaches",
      description: "Real-time monitoring and prevention of unauthorized data access"
    },
    {
      icon: Bug,
      title: "Zero-Day Exploits",
      description: "Behavioral analysis to catch unknown vulnerabilities"
    },
    {
      icon: Flame,
      title: "Advanced Persistent Threats",
      description: "Long-term threat hunting and sophisticated attack prevention"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-red-500/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>AI-Powered Cybersecurity Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400"> Threat Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stay one step ahead of cyber threats with our AI-powered threat intelligence platform. 
              Detect, analyze, and neutralize threats in real-time with 99.9% accuracy and zero false positives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300">
                <Eye className="w-5 h-5 mr-2" />
                Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Threat Intelligence Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines cutting-edge machine learning with expert human intelligence 
              to provide unparalleled threat detection and response capabilities.
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
                className="bg-slate-800/50 p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform protects against all types of cyber threats, from common malware to sophisticated 
              nation-state attacks and everything in between.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <motion.div
                key={threat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <threat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{threat.title}</h3>
                <p className="text-gray-300 leading-relaxed">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to finance, our cybersecurity platform provides industry-specific protection 
              and compliance features for organizations of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your organization's needs and scale as you grow. 
              All plans include our core AI threat detection capabilities.
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
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-red-500 shadow-lg shadow-red-500/25' 
                    : 'border-slate-600'
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
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience enterprise-grade security with AI-powered intelligence that protects your business 
              around the clock.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-red-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations who trust our AI-powered cybersecurity platform 
              to protect their critical systems and data from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
              >
                Schedule Security Audit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}