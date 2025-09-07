import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  FileText, 
  Scale, 
  Brain, 
  Shield, 
  Zap, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Search,
  BookOpen,
  Users,
  TrendingUp,
  Lock,
  Globe,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AILegalDocumentAnalysis() {
  const features = [
    {
      title: "Intelligent Document Processing",
      description: "AI-powered extraction and analysis of legal documents with 99.2% accuracy",
      icon: Brain,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Contract Risk Assessment",
      description: "Automated identification of potential legal risks and compliance issues",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Legal Research Assistant",
      description: "AI-driven case law research and precedent analysis in real-time",
      icon: Search,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Document Comparison",
      description: "Side-by-side analysis of contract versions with change tracking",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring of regulatory changes and compliance requirements",
      icon: Scale,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Legal Analytics Dashboard",
      description: "Comprehensive insights into legal operations and risk metrics",
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 299,
      period: "month",
      description: "Perfect for small law firms and solo practitioners",
      features: [
        "Up to 100 documents/month",
        "Basic contract analysis",
        "Standard risk assessment",
        "Email support",
        "Basic compliance monitoring",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: 799,
      period: "month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Up to 500 documents/month",
        "Advanced AI analysis",
        "Custom risk scoring",
        "Priority support",
        "Advanced compliance tools",
        "API access",
        "Custom integrations",
        "Training sessions"
      ],
      cta: "Get Started",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: 1999,
      period: "month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label solutions",
        "Advanced analytics",
        "Custom compliance rules",
        "On-site training"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "90% Time Savings",
      description: "Reduce document review time from hours to minutes",
      icon: Clock,
      metric: "90%"
    },
    {
      title: "99.2% Accuracy",
      description: "Industry-leading accuracy in legal document analysis",
      icon: CheckCircle,
      metric: "99.2%"
    },
    {
      title: "50% Cost Reduction",
      description: "Significant reduction in legal research and review costs",
      icon: DollarSign,
      metric: "50%"
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock access to legal analysis tools",
      icon: Globe,
      metric: "24/7"
    }
  ];

  const useCases = [
    {
      title: "Contract Review & Analysis",
      description: "Automated review of contracts, NDAs, and legal agreements",
      icon: FileText,
      examples: ["Employment contracts", "Vendor agreements", "Partnership deals"]
    },
    {
      title: "Due Diligence",
      description: "Comprehensive analysis of legal documents for M&A transactions",
      icon: Search,
      examples: ["Merger reviews", "Acquisition analysis", "Legal risk assessment"]
    },
    {
      title: "Compliance Monitoring",
      description: "Continuous monitoring of regulatory changes and compliance",
      icon: Shield,
      examples: ["GDPR compliance", "Industry regulations", "Policy updates"]
    },
    {
      title: "Legal Research",
      description: "AI-powered research assistant for case law and precedents",
      icon: BookOpen,
      examples: ["Case law research", "Precedent analysis", "Legal opinions"]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <>
      <SEO 
        title="AI Legal Document Analysis | Zion Tech Group"
        description="Revolutionary AI-powered legal document analysis platform. 99.2% accuracy, 90% time savings, and comprehensive legal research tools. Start your free trial today."
        keywords="AI legal analysis, legal document processing, contract analysis, legal research, compliance monitoring, law firm software"
        canonical="https://ziontechgroup.com/services/ai-legal-document-analysis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Legal Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Legal Document Analysis
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your legal practice with AI-powered document analysis. 
                99.2% accuracy, 90% time savings, and comprehensive legal research tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Legal AI Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with deep legal expertise 
                to deliver unprecedented accuracy and efficiency.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Proven Results & Benefits
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of legal professionals who have transformed their practice 
                with our AI-powered platform.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-4">
                    {benefit.metric}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Comprehensive Legal Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                From contract review to compliance monitoring, our AI platform handles 
                every aspect of legal document analysis.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-slate-300 mb-4">{useCase.description}</p>
                      <ul className="space-y-2">
                        {useCase.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-slate-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your practice size and needs. 
                All plans include our core AI features and 24/7 support.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                      : 'border-slate-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-slate-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Legal Practice?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Join thousands of legal professionals who have already revolutionized 
                their document analysis with AI. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-slate-500 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-300">
                  Ready to revolutionize your legal practice? Contact our team to learn more.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-slate-300">{contactInfo.phone}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-slate-300">{contactInfo.email}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-slate-300">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}