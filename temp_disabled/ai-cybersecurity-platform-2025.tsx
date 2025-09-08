import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Brain, 
  Zap, 
  Lock, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Search,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  Globe,
  Cpu,
  Database,
  Workflow,
  Eye,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Server,
  Cloud,
  Smartphone,
  Monitor,
  Activity,
  MessageCircle,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  Bug,
  Network,
  Key,
  Fingerprint,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Activity as ActivityIcon,
  TrendingDown,
  Zap as ZapIcon,
  Building2,
  CreditCard,
  UserCheck
} from 'lucide-react';

const AICybersecurityPlatform2025 = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and respond to threats in real-time with 99.9% accuracy."
    },
    {
      icon: Shield,
      title: "Zero-Day Attack Prevention",
      description: "Predict and prevent unknown threats before they can exploit vulnerabilities in your systems."
    },
    {
      icon: Workflow,
      title: "Automated Incident Response",
      description: "AI-driven automation handles security incidents instantly, reducing response time from hours to seconds."
    },
    {
      icon: Eye,
      title: "Behavioral Analytics",
      description: "Monitor user and system behavior patterns to identify anomalies and potential security threats."
    },
    {
      icon: BarChart3,
      title: "Real-time Security Dashboard",
      description: "Comprehensive visibility into your security posture with actionable insights and recommendations."
    },
    {
      icon: Zap,
      title: "Threat Intelligence",
      description: "Global threat intelligence network provides real-time updates on emerging cyber threats and vulnerabilities."
    }
  ];

  const useCases = [
    {
      title: "Enterprise Security",
      description: "Protect large organizations with comprehensive threat detection, compliance monitoring, and incident response.",
      icon: Building2,
      benefits: ["99.9% threat detection rate", "SOC 2 compliance", "24/7 monitoring"]
    },
    {
      title: "Financial Services",
      description: "Secure financial institutions with advanced fraud detection, transaction monitoring, and regulatory compliance.",
      icon: DollarSign,
      benefits: ["PCI DSS compliance", "Real-time fraud detection", "Regulatory reporting"]
    },
    {
      title: "Healthcare",
      description: "Protect patient data and medical systems with HIPAA-compliant security and medical device protection.",
      icon: Users,
      benefits: ["HIPAA compliance", "Medical device security", "Patient data protection"]
    },
    {
      title: "Government & Defense",
      description: "Secure government systems with military-grade encryption and advanced threat intelligence.",
      icon: Shield,
      benefits: ["FISMA compliance", "Military-grade security", "Classified data protection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their cybersecurity journey",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email security",
        "5 user accounts",
        "Email support",
        "Standard reporting"
      ],
      cta: "Start Free Trial",
      popular: false,
      savings: "Save $3,000/month"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing companies with advanced security requirements",
      features: [
        "Up to 1,000 endpoints",
        "Advanced AI detection",
        "Incident response automation",
        "Unlimited user accounts",
        "Priority support",
        "API access",
        "Custom integrations",
        "Compliance reporting"
      ],
      cta: "Start Free Trial",
      popular: true,
      savings: "Save $12,000/month"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex security needs",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "On-premise deployment",
        "Dedicated security team",
        "Advanced compliance",
        "SLA guarantees",
        "Custom training",
        "Threat hunting services"
      ],
      cta: "Contact Sales",
      popular: false,
      savings: "Save $50,000+/month"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "99.9% Threat Detection",
      description: "AI-powered detection identifies and blocks threats before they can cause damage"
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Automated incident response reduces threat response time from hours to seconds"
    },
    {
      icon: DollarSign,
      title: "60% Cost Reduction",
      description: "Automate security operations and reduce manual security overhead"
    },
    {
      icon: Users,
      title: "24/7 Protection",
      description: "Continuous monitoring and protection against evolving cyber threats"
    }
  ];

  const compliance = [
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for data security and privacy",
      icon: ShieldCheck
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management systems",
      icon: Lock
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      icon: CreditCard
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      icon: Users
    }
  ];

  const threats = [
    {
      name: "Ransomware",
      description: "AI-powered detection and prevention of ransomware attacks",
      icon: Bug
    },
    {
      name: "Phishing",
      description: "Advanced email security and phishing detection",
      icon: Mail
    },
    {
      name: "DDoS Attacks",
      description: "Distributed denial-of-service attack protection",
      icon: Network
    },
    {
      name: "Insider Threats",
      description: "Behavioral analytics to detect malicious insider activities",
      icon: UserCheck
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEO 
        title="AI Cybersecurity Platform 2025 | Zion Tech Group"
        description="Protect your organization with AI-powered cybersecurity. 99.9% threat detection, instant response, and comprehensive compliance."
        keywords="AI cybersecurity, threat detection, incident response, compliance, SOC 2, ISO 27001, security platform"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-orange-600/20 to-yellow-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl mb-8 shadow-2xl shadow-red-500/25">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              AI Cybersecurity Platform 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your organization with next-generation AI-powered cybersecurity. Detect threats with 99.9% accuracy, 
              respond instantly, and maintain compliance across all regulations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 border-2 border-red-400/50 text-red-400 font-semibold rounded-xl hover:bg-red-400/10 hover:border-red-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">60%</div>
                <div className="text-gray-400 text-sm">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Protection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">Instant</div>
                <div className="text-gray-400 text-sm">Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Next-Generation Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge cybersecurity technology with machine learning 
              to deliver the most advanced threat protection available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Leading Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how organizations across industries are protecting their assets 
              with our AI-powered cybersecurity platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8"
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-green-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Compliance
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet all regulatory requirements with our comprehensive compliance framework 
              and automated reporting capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.name}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Protect against the latest cyber threats with our comprehensive security 
              platform and AI-powered detection capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={threat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <threat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{threat.name}</h3>
                <p className="text-gray-400 leading-relaxed">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Security Posture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience measurable improvements in security effectiveness, compliance, and operational efficiency 
              with our AI-powered cybersecurity platform.
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your security needs. All plans include our core AI features 
              and come with a 30-day free trial.
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
                className={`relative bg-slate-700/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/25' 
                    : 'border-slate-600/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  {plan.savings && (
                    <div className="text-green-400 font-semibold text-sm">{plan.savings}</div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 hover:shadow-2xl hover:shadow-red-500/25'
                    : 'bg-slate-600 text-white hover:bg-slate-500'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-yellow-600/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who have already transformed their security posture 
              with AI-powered cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-red-400/50 text-red-400 font-semibold rounded-xl hover:bg-red-400/10 hover:border-red-400 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Need Help Getting Started?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPlatform2025;