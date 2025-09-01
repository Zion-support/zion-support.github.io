import React from 'react';
import { motion } from 'framer-motion';
import {

  Scale, 
  FileText, 
  Shield, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Zap, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  BarChart3,
  Lock,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckSquare,
  AlertTriangle,
  BookOpen,
  Code,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Eye,
  Search,
  Filter,
  FileCheck,
  Clipboard,
  PenTool,
  Brain,
  Rocket,
  Sparkles
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AILegalDocumentAnalyzer() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze legal documents with 99.2% accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {

      icon: Shield,
      title: "Risk Assessment",
      description: "Automatically identify potential risks, compliance issues, and legal vulnerabilities",
      color: "from-red-500 to-orange-500"
    },
    {

      icon: CheckCircle,
      title: "Compliance Checking",
      description: "Real-time compliance verification against current laws and regulations",
      color: "from-green-500 to-emerald-500"
    },
    {

      icon: Search,
      title: "Smart Search",
      description: "Natural language search across thousands of legal documents instantly",
      color: "from-blue-500 to-cyan-500"
    },
    {

      icon: TrendingUp,
      title: "Predictive Insights",
      description: "AI-powered predictions on case outcomes and legal strategy recommendations",
      color: "from-indigo-500 to-purple-500"
    },
    {

      icon: Users,
      title: "Collaboration Tools",
      description: "Multi-user collaboration with role-based access and real-time updates",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    {

      icon: Clock,
      title: "Time Savings",
      description: "Reduce document review time by 85%",
      metric: "85%"
    },
    {

      icon: DollarSign,
      title: "Cost Reduction",
      description: "Lower legal costs by 60%",
      metric: "60%"
    },
    {

      icon: Target,
      title: "Accuracy",
      description: "99.2% accuracy in legal analysis",
      metric: "99.2%"
    },
    {

      icon: TrendingUp,
      title: "Efficiency",
      description: "Increase productivity by 3x",
      metric: "3x"
    }
  ];

  const pricing = [
    {

      name: "Basic",
      price: 3499,
      period: "one-time setup",
      features: [
        "Document analysis up to 100 pages/month",
        "Basic risk assessment",
        "Compliance checking",
        "Email support",
        "Standard templates",
        "5 user licenses"
      ],
      popular: false,
      cta: "Get Started"
    },
    {

      name: "Professional",
      price: 5999,
      period: "one-time setup",
      features: [
        "Everything in Basic",
        "Unlimited document analysis",
        "Advanced risk assessment",
        "Custom compliance rules",
        "Priority support",
        "API access",
        "15 user licenses"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {

      name: "Enterprise",
      price: 9999,
      period: "one-time setup",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Training & onboarding",
        "Unlimited users"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const integrations = [
    { name: "Clio", icon: Database, category: "Practice Management" },
    { name: "MyCase", icon: Server, category: "Case Management" },
    { name: "PracticePanther", icon: Cloud, category: "Legal Software" },
    { name: "DocuSign", icon: FileCheck, category: "E-Signature" },
    { name: "Adobe Sign", icon: PenTool, category: "Document Signing" },
    { name: "Microsoft Office", icon: Monitor, category: "Productivity" }
  ];

  const useCases = [
    {

      title: "Contract Review & Analysis",
      description: "Automatically analyze contracts for risks, compliance issues, and optimization opportunities",
      icon: FileText,
      color: "from-blue-500 to-cyan-500"
    },
    {

      title: "Legal Research & Discovery",
      description: "AI-powered legal research with intelligent case law analysis and precedent identification",
      icon: Search,
      color: "from-purple-500 to-pink-500"
    },
    {

      title: "Compliance Monitoring",
      description: "Real-time compliance monitoring across all legal documents and regulatory changes",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {

      title: "Risk Assessment",
      description: "Comprehensive risk assessment with automated alerts and mitigation recommendations",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Legal Document Analyzer - Zion Tech Group"
        description="Advanced AI platform that analyzes legal documents, contracts, and agreements with 99.2% accuracy. Identifies risks, compliance issues, and provides intelligent recommendations for legal professionals."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-8"
            >
              <Scale className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              AI Legal Document
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Analyzer
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Advanced AI platform that analyzes legal documents, contracts, and agreements with 99.2% accuracy. 
              Identifies risks, compliance issues, and provides intelligent recommendations for legal professionals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 font-semibold rounded-lg transition-all duration-200"
              >
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage the power of AI to streamline your legal document analysis and improve outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to revolutionize your legal document analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI can transform different aspects of your legal practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-slate-800/50 rounded-xl border border-slate-700/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-400 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that best fits your legal practice needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl border ${

                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50 shadow-2xl shadow-purple-500/25' 
                    : 'bg-slate-800/50 border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="inline-flex items-center px-3 py-1 bg-purple-500 text-white text-sm font-medium rounded-full mb-4">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Works with your existing legal software and tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-medium text-white mb-1">{integration.name}</h4>
                <p className="text-xs text-gray-400">{integration.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Legal Practice?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join thousands of legal professionals who are already using AI to improve their document analysis and client outcomes.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-200"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to revolutionize your legal practice with AI? Our team is here to help you get started.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+13024640950" className="text-white font-medium hover:text-purple-400 transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white font-medium">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Accuracy Rate</span>
                  <span className="text-white font-semibold">99.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Setup Time</span>
                  <span className="text-white font-semibold">3-5 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">ROI Timeline</span>
                  <span className="text-white font-semibold">4 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Support</span>
                  <span className="text-white font-semibold">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Market Price</span>
                  <span className="text-white font-semibold">$3,000-6,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}