import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  Eye, 
  Lock, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Target,
  Award,
  Rocket,
  Cpu,
  Database,
  ShieldCheck,
  Globe2,
  Sparkles,
  DollarSign,
  Calendar,
  Award as AwardIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Network,
  Search,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  X,
  Virus,
  Bug,
  Activity,
  Monitor,
  Server,
  Cloud,
  Key,
  Fingerprint,
  Scan,
  Fire,
  AlertCircle,
  Shield as ShieldIcon,
  Globe,
  Wifi,
  HardDrive,
  Smartphone,
  Tablet,
  Laptop,
  Desktop
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICybersecurityThreatDetection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect threats in real-time with 99.9% accuracy",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Behavioral Analysis",
      description: "Continuous monitoring of user and system behavior to identify anomalies",
      icon: Activity,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Zero-Day Threat Prevention",
      description: "Proactive detection of unknown threats before they can cause damage",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Response",
      description: "Automated threat response and mitigation within seconds",
      icon: Zap,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Multi-Platform Protection",
      description: "Comprehensive security across all devices, networks, and cloud environments",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Advanced Analytics",
      description: "Deep insights into security posture and threat intelligence",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 2999,
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        '24/7 monitoring',
        'Standard support',
        'Basic reporting',
        '10 user accounts'
      ],
      limitations: [
        'Limited AI model access',
        'Basic threat response',
        'Standard response time (2h)'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 6999,
      description: 'Ideal for growing businesses with security needs',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        '100 user accounts',
        'API access',
        'Custom integrations',
        'Threat hunting'
      ],
      limitations: [
        'Limited to 100 concurrent users',
        'Advanced features (additional cost)'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 14999,
      description: 'For large enterprises with complex security requirements',
      features: [
        'Unlimited endpoints',
        'Premium AI models',
        'Custom AI training',
        '24/7 dedicated support',
        'Full threat intelligence',
        'Unlimited users',
        'White-label options',
        'Custom integrations',
        'On-site training',
        'SLA guarantees',
        'Compliance reporting'
      ],
      limitations: [
        'Custom pricing for large deployments'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Threat Detection",
      description: "Detect threats 10x faster than traditional solutions",
      icon: Eye,
      metric: "10x"
    },
    {
      title: "False Positive Reduction",
      description: "AI reduces false alarms by 95%",
      icon: Target,
      metric: "95%"
    },
    {
      title: "Response Time",
      description: "Automated response within seconds",
      icon: Zap,
      metric: "<1s"
    },
    {
      title: "Cost Savings",
      description: "Reduce security incidents by 80%",
      icon: TrendingUp,
      metric: "80%"
    }
  ];

  const useCases = [
    {
      title: "Financial Services",
      description: "Protect sensitive financial data and prevent fraud",
      icon: DollarSign,
      examples: ["Fraud detection", "Transaction monitoring", "Compliance", "Risk assessment"]
    },
    {
      title: "Healthcare",
      description: "Secure patient data and medical systems",
      icon: Shield,
      examples: ["HIPAA compliance", "Patient data protection", "Medical device security", "Access control"]
    },
    {
      title: "E-commerce",
      description: "Protect customer data and prevent breaches",
      icon: Package,
      examples: ["Payment security", "Customer data protection", "Fraud prevention", "API security"]
    },
    {
      title: "Government",
      description: "Secure critical infrastructure and sensitive information",
      icon: Shield,
      examples: ["Infrastructure protection", "Classified data security", "Threat intelligence", "Incident response"]
    }
  ];

  const competitors = [
    {
      name: "CrowdStrike",
      price: "$8,000/month",
      features: ["Endpoint protection", "Threat detection", "Incident response"],
      ourAdvantage: "More affordable, better AI capabilities, modern interface"
    },
    {
      name: "SentinelOne",
      price: "$7,500/month",
      features: ["AI-powered protection", "Threat hunting", "Automation"],
      ourAdvantage: "Lower cost, advanced AI features, better user experience"
    },
    {
      name: "Carbon Black",
      price: "$6,800/month",
      features: ["Endpoint security", "Threat intelligence", "Analytics"],
      ourAdvantage: "More affordable, AI-first approach, modern technology stack"
    }
  ];

  const threatTypes = [
    {
      name: "Malware & Ransomware",
      description: "AI detects and blocks malicious software before execution",
      icon: Virus,
      risk: "High",
      protection: "99.9%"
    },
    {
      name: "Phishing Attacks",
      description: "Advanced email security with AI-powered threat detection",
      icon: Mail,
      risk: "Medium",
      protection: "99.5%"
    },
    {
      name: "DDoS Attacks",
      description: "Real-time network traffic analysis and mitigation",
      icon: Network,
      risk: "High",
      protection: "99.8%"
    },
    {
      name: "Insider Threats",
      description: "Behavioral analysis to detect suspicious user activity",
      icon: Users,
      risk: "Medium",
      protection: "98.5%"
    },
    {
      name: "Zero-Day Exploits",
      description: "Proactive detection of unknown vulnerabilities",
      icon: AlertTriangle,
      risk: "Critical",
      protection: "99.2%"
    },
    {
      name: "Advanced Persistent Threats",
      description: "Long-term threat monitoring and intelligence",
      icon: Eye,
      risk: "Critical",
      protection: "99.7%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Threat Detection - Zion Tech Group"
        description="Advanced AI-powered cybersecurity platform for real-time threat detection, behavioral analysis, and automated response. Protect your business with cutting-edge AI security technology."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-zion-cyan font-medium">AI Cybersecurity Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                  Threat Detection
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Protect your business with AI technology that detects threats in real-time, 
                analyzes behavior patterns, and responds automatically to security incidents 
                before they can cause damage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
                >
                  Watch Demo
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">AI Security Monitor</div>
                      <div className="text-slate-400 text-sm">Analyzing threats...</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-white text-sm mb-2">Security Status:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Threats Blocked: 1,247</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Response Time: 0.3s</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 text-green-400">●</div>
                        <span className="text-slate-300 text-sm">System Status: Secure</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">99.9%</div>
                    <div className="text-slate-400 text-sm">Threat Detection Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Cybersecurity?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform delivers superior protection with measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/30"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-red-400 mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Threat Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Threat Protection</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Protect against all types of cyber threats with AI-powered detection and response
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threatTypes.map((threat, index) => (
            <motion.div
              key={threat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <threat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{threat.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      threat.risk === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      threat.risk === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {threat.risk}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-3">{threat.description}</p>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{threat.protection} Protection</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced AI technology designed specifically for cybersecurity excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tailored cybersecurity solutions for different industries and compliance requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-slate-400 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the plan that fits your business size and security requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 bg-slate-800/50 backdrop-blur-sm rounded-3xl border ${
                plan.popular ? 'border-red-500/50 ring-2 ring-red-500/20' : 'border-slate-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-red-400 mb-2">${plan.price}</div>
                <div className="text-slate-400">per month</div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-slate-300 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {plan.limitations.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-slate-400 mb-3">Limitations:</h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-4 h-4 text-slate-500">•</div>
                        <span className="text-slate-400 text-sm">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link
                to="/contact"
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50'
                }`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Market Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">How We Compare</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how our AI cybersecurity platform stacks up against traditional solutions
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left text-slate-300 font-medium py-4 px-6">Feature</th>
                  <th className="text-center text-slate-300 font-medium py-4 px-6">Zion Tech Group</th>
                  {competitors.map((competitor) => (
                    <th key={competitor.name} className="text-center text-slate-300 font-medium py-4 px-6">
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/30">
                  <td className="py-4 px-6 text-white font-medium">Starting Price</td>
                  <td className="py-4 px-6 text-center text-red-400 font-bold">$2,999/month</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className="py-4 px-6 text-center text-slate-400">
                      {competitor.price}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="py-4 px-6 text-white font-medium">AI Capabilities</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ Advanced</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className="py-4 px-6 text-center text-slate-400">
                      Basic
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-slate-700/30">
                  <td className="py-4 px-6 text-white font-medium">Response Time</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ <1 second</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className="py-4 px-6 text-center text-slate-400">
                      5-10 seconds
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white font-medium">Support</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ 24/7</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className="py-4 px-6 text-center text-slate-400">
                      Business Hours
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-3xl border border-red-500/20 p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that are already protected by AI-powered cybersecurity. 
            Start your free trial today and experience the future of threat detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
            >
              Schedule Demo
              <Play className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}