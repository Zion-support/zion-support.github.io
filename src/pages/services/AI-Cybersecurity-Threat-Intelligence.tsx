import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  TrendingUp,
  Lock,
  Search,
  AlertTriangle,
  Eye,
  Target,
  Award,
  Phone,
  Play,
  Network,
  Server,
  Database,
  Globe,
  ShieldCheck,
  Activity,
  BarChart3,
  AlertCircle,
  CheckSquare,
  Calendar,
  Settings,
  Cloud,
  RefreshCw,
  MapPin,
  Mail
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICybersecurityThreatIntelligence() {
  const features = [
    "AI-powered threat detection and analysis",
    "Real-time threat intelligence feeds",
    "Behavioral analysis and anomaly detection",
    "Automated incident response and remediation",
    "Threat hunting and investigation tools",
    "Vulnerability assessment and management",
    "Security orchestration and automation",
    "Compliance monitoring and reporting",
    "Dark web monitoring and intelligence",
    "Integration with SIEM and security tools"
  ];

  const benefits = [
    "Detect threats 10x faster than traditional methods",
    "Reduce false positives by 80%",
    "Automate 70% of security operations",
    "Improve incident response time by 60%",
    "Reduce security costs by 25-40%",
    "Enhance compliance and risk management"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Standard reporting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,599",
      period: "/month",
      features: [
        "Up to 1,000 endpoints",
        "Advanced AI detection",
        "Real-time monitoring",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      features: [
        "Unlimited endpoints",
        "Full AI capabilities",
        "Custom integrations",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const threatTypes = [
    {
      title: "Malware & Ransomware",
      description: "Advanced detection and prevention of malicious software attacks",
      icon: Shield
    },
    {
      title: "Phishing & Social Engineering",
      description: "AI-powered detection of sophisticated social engineering attempts",
      icon: Users
    },
    {
      title: "Network Attacks",
      description: "Real-time monitoring and prevention of network-based threats",
      icon: Network
    },
    {
      title: "Insider Threats",
      description: "Behavioral analysis to detect and prevent insider threats",
      icon: Eye
    }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Cybersecurity Threat Intelligence | Zion Tech Group"
        description="Revolutionary AI platform for cybersecurity threat detection, intelligence, and automated response. Detect threats 10x faster and reduce false positives by 80%."
        keywords="AI cybersecurity, threat intelligence, threat detection, security automation, incident response, vulnerability management"
        ogImage="https://ziontechgroup.com/images/ai-cybersecurity-threat-intelligence.jpg"
        ogUrl="https://ziontechgroup.com/services/ai-cybersecurity-threat-intelligence"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI-Powered Cybersecurity Threat Intelligence
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Stay ahead of cyber threats with our advanced AI platform that detects, analyzes, 
                  and responds to security incidents in real-time with unprecedented accuracy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#demo"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Request Demo
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                  >
                    <DollarSign className="mr-2 h-5 w-5" />
                    View Pricing
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Security Features for Modern Threats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge cybersecurity technology with machine learning 
                to deliver unmatched threat detection and response capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300"
                >
                  <CheckCircle className="h-8 w-8 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Security Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and accuracy in threat detection and response with our AI platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Threat Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform protects against all types of cyber threats with advanced detection and prevention capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threatTypes.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <threat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{threat.title}</h3>
                  <p className="text-gray-300 text-sm">{threat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your organization's security needs and scale as you grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-slate-700/50 p-8 rounded-xl border-2 ${
                    plan.popular 
                      ? 'border-red-500 bg-gradient-to-br from-slate-700/50 to-red-900/20' 
                      : 'border-slate-600'
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
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Enhance Your Cybersecurity?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of organizations already using our AI platform to protect against evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}