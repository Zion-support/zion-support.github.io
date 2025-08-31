import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Scale, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  MapPin,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Lock,
  Eye,
  Activity,
  Target,
  Brain,
  Network,
  Smartphone,
  Monitor,
  Server,
  Workflow,
  BarChart,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Gavel,
  BookOpen,
  Search,
  Edit3,
  Copy,
  CheckSquare,
  AlertTriangle,
  FileCheck,
  Briefcase,
  UserCheck
} from 'lucide-react';

const AILegalDocumentAutomationPlatform = () => {
  const features = [
    {
      title: "AI Document Analysis",
      description: "Advanced AI algorithms that analyze legal documents, extract key information, and identify potential issues",
      icon: FileText,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Automated Contract Review",
      description: "Intelligent contract analysis with risk assessment, compliance checking, and automated recommendations",
      icon: Scale,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Legal Research Assistant",
      description: "AI-powered legal research with case law analysis, precedent identification, and citation management",
      icon: Search,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Document Generation",
      description: "Automated legal document creation with customizable templates and intelligent content suggestions",
      icon: Edit3,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Compliance Monitoring",
      description: "Real-time compliance tracking with regulatory updates and automated compliance reporting",
      icon: Shield,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Workflow Automation",
      description: "Streamlined legal processes with automated approvals, notifications, and task management",
      icon: Workflow,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const benefits = [
    "Reduce document review time by 80%",
    "Improve accuracy by 95%",
    "Cut legal costs by 40%",
    "Increase productivity by 300%",
    "Minimize human error by 90%",
    "Enable 24/7 document processing"
  ];

  const pricingPlans = [
    {
      name: "Legal Assistant",
      price: "$1,999",
      period: "/month",
      description: "For small law firms",
      features: [
        "AI Document Analysis (up to 100 docs/month)",
        "Basic Contract Review",
        "Document Templates",
        "Mobile App Access",
        "Email Support",
        "Basic Analytics Dashboard"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Legal Professional",
      price: "$4,999",
      period: "/month",
      description: "For growing law practices",
      features: [
        "Everything in Legal Assistant",
        "AI Document Analysis (up to 500 docs/month)",
        "Advanced Contract Review",
        "Legal Research Assistant",
        "Compliance Monitoring",
        "API Access",
        "Priority Support",
        "Advanced Analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Legal Enterprise",
      price: "Custom",
      period: "",
      description: "For large law firms",
      features: [
        "Everything in Legal Professional",
        "Unlimited Documents",
        "Custom AI Models",
        "White-label Solutions",
        "Dedicated Support",
        "Custom Integrations",
        "On-premise Deployment",
        "SLA Guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Contract Management",
      description: "Automated contract review, analysis, and management for corporate legal departments",
      icon: Briefcase,
      metrics: "80% faster review, 95% accuracy improvement"
    },
    {
      title: "Due Diligence",
      description: "Streamlined due diligence processes with AI-powered document analysis and risk assessment",
      icon: FileCheck,
      metrics: "70% time reduction, 90% risk identification"
    },
    {
      title: "Compliance & Regulatory",
      description: "Automated compliance monitoring and regulatory reporting for financial institutions",
      icon: Shield,
      metrics: "85% compliance improvement, 60% cost reduction"
    },
    {
      title: "Litigation Support",
      description: "AI-powered document discovery and case preparation for litigation teams",
      icon: Gavel,
      metrics: "75% faster discovery, 80% cost savings"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-8">
              <FileText className="w-4 h-4 mr-2" />
              Revolutionary Legal Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Legal Document
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Automation Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your legal practice with AI-powered document automation, intelligent contract review, 
              and advanced legal research. Increase efficiency, reduce costs, and deliver exceptional client service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Phone className="w-5 h-5 ml-2" />
              </Link>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Revolutionary Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Modern Legal Practice
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge legal technology with artificial intelligence 
              to deliver unprecedented efficiency and accuracy in legal document processing.
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
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Legal Practice
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Flexible Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Legal Professionals
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your legal practice needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
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

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Proven Success Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Legal Applications
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.metrics}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Legal Practice?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join leading law firms that have already revolutionized their practice with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-xl hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Phone className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+1 302 464 0950" className="text-green-400 hover:text-green-300">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <MapPinIcon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-blue-400">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AILegalDocumentAutomationPlatform;