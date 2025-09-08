import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Clock,
  Users,
  BarChart3,
  Activity,
  Eye,
  Shield,
  Mail,
  Phone,
  MapPin,
  Play,
  Calendar,
  TrendingUp,
  Target,
  Cpu,
  Database,
  Network,
  Scale,
  Gavel,
  BookOpen,
  Search,
  AlertTriangle,
  FileCheck,
  Lock,
  UserCheck
} from 'lucide-react';

const AIPoweredLegalDocumentAnalyzer = () => {
  const features = [
    {
      title: "AI Document Analysis",
      description: "Advanced AI algorithms analyze legal documents with 98% accuracy for risk assessment and compliance",
      icon: Brain,
      color: "text-blue-500"
    },
    {
      title: "Risk Assessment",
      description: "Automatically identify potential legal risks, compliance issues, and contract vulnerabilities",
      icon: AlertTriangle,
      color: "text-red-500"
    },
    {
      title: "Contract Review",
      description: "Comprehensive contract analysis with clause identification, term extraction, and obligation mapping",
      icon: FileCheck,
      color: "text-green-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time compliance checking against regulatory requirements and industry standards",
      icon: Shield,
      color: "text-purple-500"
    },
    {
      title: "Legal Research",
      description: "AI-powered legal research with case law analysis, precedent identification, and citation checking",
      icon: BookOpen,
      color: "text-orange-500"
    },
    {
      title: "Secure Processing",
      description: "Enterprise-grade security with end-to-end encryption and compliance with legal data protection standards",
      icon: Lock,
      color: "text-indigo-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Perfect for individual lawyers and small law firms",
      features: [
        "Up to 100 documents/month",
        "Basic AI analysis",
        "Risk assessment reports",
        "Email support",
        "Standard compliance checking",
        "PDF and Word support",
        "Basic legal research",
        "3 user accounts"
      ],
      popular: false,
      cta: "Start Free Trial",
      link: "/contact"
    },
    {
      name: "Firm",
      price: "$899",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Up to 500 documents/month",
        "Advanced AI analysis",
        "Comprehensive risk assessment",
        "Priority support",
        "Advanced compliance monitoring",
        "Multi-format support",
        "Advanced legal research",
        "Unlimited users",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial",
      link: "/contact",
      savings: "Save 20% annually"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Comprehensive solution for large law firms and corporations",
      features: [
        "Unlimited documents/month",
        "Custom AI model training",
        "Advanced risk analytics",
        "24/7 dedicated support",
        "Custom compliance frameworks",
        "White-label solutions",
        "Advanced security features",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      title: "Save 70% on Review Time",
      description: "Reduce document review time from hours to minutes with AI automation",
      icon: Clock,
      color: "text-blue-500"
    },
    {
      title: "Reduce Legal Risks by 80%",
      description: "Proactively identify and mitigate legal risks before they become issues",
      icon: Shield,
      color: "text-green-500"
    },
    {
      title: "Improve Compliance to 99%",
      description: "Ensure regulatory compliance with automated monitoring and alerts",
      icon: CheckCircle,
      color: "text-purple-500"
    },
    {
      title: "Enhance Client Service",
      description: "Provide faster, more accurate legal services with AI-powered insights",
      icon: UserCheck,
      color: "text-orange-500"
    }
  ];

  const useCases = [
    {
      title: "Contract Review",
      description: "Automate contract analysis for faster deal closure and risk mitigation",
      icon: FileText,
      examples: ["M&A agreements", "Employment contracts", "Vendor agreements", "Lease agreements"]
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure regulatory compliance across all legal documents and processes",
      icon: Shield,
      examples: ["GDPR compliance", "Industry regulations", "Corporate governance", "Data protection"]
    },
    {
      title: "Due Diligence",
      description: "Accelerate due diligence processes with AI-powered document analysis",
      icon: Search,
      examples: ["Financial documents", "Legal agreements", "Regulatory filings", "Corporate records"]
    },
    {
      title: "Legal Research",
      description: "Enhance legal research with AI-powered case law analysis and precedent identification",
      icon: BookOpen,
      examples: ["Case law research", "Statute analysis", "Precedent identification", "Citation checking"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Legal Document Analyzer
              </h1>
              <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
                Transform legal document review with AI-powered analysis. Identify risks, 
                ensure compliance, and accelerate legal processes with 98% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
                >
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Legal AI Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge legal technology with comprehensive 
              analysis capabilities to transform your legal practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-slate-600/50 mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Stop spending hours on manual document review and start focusing on 
              what matters most - serving your clients and growing your practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-xl border border-slate-600/30"
              >
                <div className={`p-3 rounded-lg bg-slate-600/50 ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Practice Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform is designed to serve legal professionals across 
              various practice areas and specialties.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-purple-600/20 text-purple-400 mr-4">
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Legal Practice Pricing
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that fits your legal practice needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-700/50 p-8 rounded-xl border ${
                  tier.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-slate-700/50 to-purple-900/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-zinc-400">{tier.period}</span>
                  </div>
                  <p className="text-zinc-300 mb-4">{tier.description}</p>
                  {tier.savings && (
                    <p className="text-green-400 text-sm font-semibold">{tier.savings}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={tier.link}
                  className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Join thousands of legal professionals who have transformed their practice 
              with our AI-powered document analysis platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-zinc-400 text-zinc-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-zinc-300 hover:text-white transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zinc-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zinc-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredLegalDocumentAnalyzer;