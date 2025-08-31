import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Brain, 
  Eye, 
  Target, 
  Lock, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
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
  Network,
  TrendingUp,
  BarChart3,
  Rocket,
  Handshake,
  Building2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award,
  Virus,
  Bug,
  AlertCircle,
  Security,
  Monitor,
  Server,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Users,
  Globe2,
  Activity as ActivityIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICybersecurityThreatIntelligence() {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that identify and analyze threats in real-time with 99.9% accuracy",
      benefits: ["Real-time threat detection", "Behavioral analysis", "Anomaly identification"]
    },
    {
      icon: Eye,
      title: "360° Threat Visibility",
      description: "Comprehensive monitoring across all endpoints, networks, and cloud environments",
      benefits: ["Full network coverage", "Cloud security monitoring", "Endpoint protection"]
    },
    {
      icon: Zap,
      title: "Automated Response & Remediation",
      description: "Instant automated threat response with intelligent remediation strategies",
      benefits: ["Zero-touch remediation", "Intelligent response", "Incident automation"]
    },
    {
      icon: Shield,
      title: "Advanced Threat Intelligence",
      description: "Global threat intelligence network with real-time updates and predictive analytics",
      benefits: ["Global threat feeds", "Predictive analytics", "Threat hunting"]
    },
    {
      icon: Target,
      title: "Compliance & Governance",
      description: "Built-in compliance frameworks for SOC 2, ISO 27001, GDPR, and industry standards",
      benefits: ["Automated compliance", "Audit trails", "Regulatory reporting"]
    },
    {
      icon: Cloud,
      title: "Cloud-Native Security",
      description: "Seamless integration with AWS, Azure, GCP, and hybrid cloud environments",
      benefits: ["Multi-cloud support", "Container security", "Serverless protection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$799",
      period: "/month",
      description: "Perfect for small businesses starting their security journey",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Email security",
        "Standard support",
        "Basic reporting",
        "Cloud backup protection"
      ],
      cta: "Start Free Trial",
      popular: false,
      marketPrice: "$1200-2000/month",
      savings: "Save up to 60%"
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing businesses with advanced security needs",
      features: [
        "Up to 500 endpoints",
        "Advanced threat detection",
        "Network security",
        "Priority support",
        "Advanced analytics",
        "Compliance reporting",
        "Threat intelligence feeds",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true,
      marketPrice: "$3500-6000/month",
      savings: "Save up to 67%"
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade security",
      features: [
        "Unlimited endpoints",
        "Custom threat models",
        "Advanced AI capabilities",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "On-premise deployment",
        "Custom compliance"
      ],
      cta: "Contact Sales",
      popular: false,
      marketPrice: "$8000-15000/month",
      savings: "Save up to 67%"
    }
  ];

  const threatStats = [
    {
      metric: "99.9%",
      description: "Threat Detection Accuracy",
      icon: Shield
    },
    {
      metric: "24/7",
      description: "Real-time Monitoring",
      icon: Monitor
    },
    {
      metric: "< 30s",
      description: "Response Time",
      icon: Zap
    },
    {
      metric: "0",
      description: "False Positives",
      icon: CheckCircle
    }
  ];

  const useCases = [
    {
      industry: "Financial Services",
      description: "Advanced fraud detection, compliance monitoring, and secure transaction processing",
      roi: "400% ROI in 12 months",
      threatsBlocked: "99.7% of cyber attacks"
    },
    {
      industry: "Healthcare",
      description: "Patient data protection, HIPAA compliance, and medical device security",
      roi: "350% ROI in 18 months",
      threatsBlocked: "99.8% of data breaches"
    },
    {
      industry: "Manufacturing",
      description: "Industrial IoT security, supply chain protection, and operational technology security",
      roi: "500% ROI in 15 months",
      threatsBlocked: "99.9% of OT attacks"
    },
    {
      industry: "Government",
      description: "National security, critical infrastructure protection, and citizen data security",
      roi: "600% ROI in 24 months",
      threatsBlocked: "99.9% of state-sponsored attacks"
    }
  ];

  const integrations = [
    "AWS Security Hub", "Azure Sentinel", "Google Cloud Security", "CrowdStrike", "SentinelOne",
    "Palo Alto Networks", "Cisco", "Fortinet", "Check Point", "Trend Micro",
    "Splunk", "IBM QRadar", "Microsoft Defender", "Symantec", "McAfee",
    "Slack", "Teams", "Jira", "ServiceNow", "PagerDuty"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  AI Cybersecurity
                </span>
                <br />
                <span className="text-white">Threat Intelligence Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your organization with AI-powered threat intelligence that detects, analyzes, 
                and responds to cyber threats in real-time with 99.9% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 rounded-xl border border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10 transition-colors">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-16 bg-gradient-to-r from-red-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {threatStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-red-500/20 rounded-xl inline-block mb-4">
                  <stat.icon className="w-8 h-8 text-red-400" />
                </div>
                <div className="text-3xl font-bold text-red-400 mb-2">{stat.metric}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Security Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity features powered by artificial intelligence and machine learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <feature.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
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
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cybersecurity Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade security at competitive prices. Protect your business without breaking the bank.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-red-400 shadow-2xl shadow-red-400/20 scale-105' 
                    : 'border-zion-purple/30'
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
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                  
                  {/* Market Price Comparison */}
                  <div className="mt-4 p-3 bg-zion-slate-dark/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-1">Market Price Range</div>
                    <div className="text-sm font-semibold text-white">{plan.marketPrice}</div>
                    <div className="text-xs text-red-400 font-medium">{plan.savings}</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:opacity-90'
                      : 'bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30 border border-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases & ROI */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industry Applications & Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our platform delivers measurable security improvements across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue-dark/50 border border-red-500/20 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Building2 className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{useCase.industry}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-red-500/10 rounded-lg">
                    <div className="text-red-400 font-bold text-lg">{useCase.roi}</div>
                    <div className="text-xs text-gray-400">Return on Investment</div>
                  </div>
                  <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                    <div className="text-purple-400 font-bold text-lg">{useCase.threatsBlocked}</div>
                    <div className="text-xs text-gray-400">Threats Blocked</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/30 to-zion-blue-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing security tools and platforms for a unified security experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-zion-slate-dark/50 border border-red-500/20 rounded-xl p-4 text-center hover:border-red-500/40 transition-colors"
              >
                <div className="text-red-400 font-medium text-sm">{integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark border border-red-500/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Organization?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of companies that trust our AI-powered cybersecurity platform to protect their digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-zion-slate-dark/50 to-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300">
              Our cybersecurity experts are ready to help you protect your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="p-4 bg-red-500/20 rounded-xl inline-block mb-4">
                <Phone className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-red-400 font-medium">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-500/20 rounded-xl inline-block mb-4">
                <Mail className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-purple-400 font-medium">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-red-500/20 rounded-xl inline-block mb-4">
                <MapPin className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-red-400 font-medium">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}