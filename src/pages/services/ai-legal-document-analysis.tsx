import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Scale, 
  FileText, 
  Search, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Zap,
  Globe,
  Lock,
  BarChart3,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Play,
  Download,
  Eye,
  Target,
  Award,
  Rocket,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Globe2,
  Leaf,
  Sparkles,
  DollarSign,
  Calendar,
  Award as AwardIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AILegalDocumentAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      title: "AI-Powered Contract Analysis",
      description: "Advanced NLP algorithms analyze contracts for risks, obligations, and opportunities",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Legal Research Automation",
      description: "Automated case law research and precedent analysis with AI insights",
      icon: Search,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time compliance checking against regulatory frameworks and standards",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Risk Assessment",
      description: "AI-driven risk scoring and mitigation recommendations for legal documents",
      icon: Target,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Document Generation",
      description: "Intelligent legal document drafting with customizable templates",
      icon: FileText,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Multi-language Support",
      description: "Support for 50+ languages with legal terminology accuracy",
      icon: Globe,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 999,
      description: 'Perfect for small law firms and solo practitioners',
      features: [
        'Up to 100 documents/month',
        'Basic contract analysis',
        'Standard legal research',
        'Email support',
        'Basic compliance checking',
        '5 user accounts'
      ],
      limitations: [
        'Limited AI model access',
        'Basic reporting',
        'Standard response time (24h)'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 2499,
      description: 'Ideal for growing law firms and legal departments',
      features: [
        'Up to 500 documents/month',
        'Advanced AI analysis',
        'Comprehensive legal research',
        'Priority support',
        'Advanced compliance monitoring',
        '25 user accounts',
        'Custom templates',
        'API access'
      ],
      limitations: [
        'Limited to 25 concurrent users',
        'Advanced features (additional cost)'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 4999,
      description: 'For large law firms and corporate legal departments',
      features: [
        'Unlimited documents',
        'Premium AI models',
        'Custom AI training',
        '24/7 dedicated support',
        'Full compliance suite',
        'Unlimited users',
        'White-label options',
        'Custom integrations',
        'On-site training',
        'SLA guarantees'
      ],
      limitations: [
        'Custom pricing for large deployments'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save 80% Time",
      description: "Automate routine legal document review and analysis",
      icon: Clock,
      metric: "80%"
    },
    {
      title: "Reduce Risk by 90%",
      description: "AI-powered risk detection catches issues humans might miss",
      icon: Shield,
      metric: "90%"
    },
    {
      title: "Increase Accuracy",
      description: "Machine learning improves accuracy with every document processed",
      icon: Target,
      metric: "95%"
    },
    {
      title: "Cost Savings",
      description: "Reduce legal research and document review costs significantly",
      icon: TrendingUp,
      metric: "60%"
    }
  ];

  const useCases = [
    {
      title: "Contract Review & Analysis",
      description: "Automated contract review for risks, obligations, and opportunities",
      icon: FileText,
      examples: ["M&A contracts", "Employment agreements", "Vendor contracts", "NDAs"]
    },
    {
      title: "Legal Research",
      description: "AI-powered case law research and precedent analysis",
      icon: Search,
      examples: ["Case law research", "Statute analysis", "Regulatory compliance", "Legal opinions"]
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time compliance checking against regulatory frameworks",
      icon: Shield,
      examples: ["GDPR compliance", "SOX compliance", "Industry regulations", "Internal policies"]
    },
    {
      title: "Due Diligence",
      description: "Automated due diligence document analysis and risk assessment",
      icon: Eye,
      examples: ["M&A due diligence", "Investment analysis", "Regulatory audits", "Risk assessment"]
    }
  ];

  const competitors = [
    {
      name: "LexisNexis",
      price: "$2,500/month",
      features: ["Legal research", "Document analysis", "Compliance tools"],
      ourAdvantage: "More affordable, better AI capabilities, modern interface"
    },
    {
      name: "Westlaw",
      price: "$3,000/month",
      features: ["Case law database", "Legal forms", "Analytics"],
      ourAdvantage: "Lower cost, advanced AI features, better user experience"
    },
    {
      name: "Thomson Reuters",
      price: "$2,800/month",
      features: ["Legal research", "Practice management", "Compliance"],
      ourAdvantage: "More affordable, AI-first approach, modern technology stack"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Legal Document Analysis - Zion Tech Group"
        description="Advanced AI-powered legal document analysis platform for contract review, legal research, compliance monitoring, and risk assessment. Transform your legal practice with cutting-edge AI technology."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <span className="text-zion-cyan font-medium">AI Legal Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Legal
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-blue">
                  Document Analysis
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Transform your legal practice with advanced AI technology that analyzes contracts, 
                conducts legal research, monitors compliance, and assesses risks with unprecedented accuracy and speed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transform hover:scale-105 transition-all duration-200"
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
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">AI Analysis</div>
                      <div className="text-slate-400 text-sm">Processing document...</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="text-white text-sm mb-2">Contract Analysis Results:</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Risk Level: Low</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Compliance: ✅</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-400" />
                        <span className="text-slate-300 text-sm">Review Required: 2 clauses</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-cyan">95%</div>
                    <div className="text-slate-400 text-sm">Accuracy Rate</div>
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
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AI Legal Analysis?</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our AI-powered platform delivers measurable results that transform your legal practice
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
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced AI technology designed specifically for legal professionals
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
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-zion-cyan/50 transition-all duration-300"
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
          <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how AI legal analysis transforms different areas of legal practice
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
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center flex-shrink-0">
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
            Choose the plan that fits your practice size and needs
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
                plan.popular ? 'border-zion-cyan/50 ring-2 ring-zion-cyan/20' : 'border-slate-700/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-zion-cyan mb-2">${plan.price}</div>
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
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90'
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
            See how our AI legal analysis platform stacks up against traditional solutions
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
                  <td className="py-4 px-6 text-center text-zion-cyan font-bold">$999/month</td>
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
                  <td className="py-4 px-6 text-white font-medium">User Experience</td>
                  <td className="py-4 px-6 text-center text-green-400">✅ Modern</td>
                  {competitors.map((competitor) => (
                    <td key={competitor.name} className="py-4 px-6 text-center text-slate-400">
                      Legacy
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
          className="text-center bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 rounded-3xl border border-zion-cyan/20 p-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Join thousands of legal professionals who are already using AI to work smarter, 
            not harder. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transform hover:scale-105 transition-all duration-200"
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