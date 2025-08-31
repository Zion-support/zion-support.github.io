import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Clock, 
  Users, 
  Target,
  Lock,
  Search,
  Edit,
  Download,
  Share2,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Settings,
  Filter,
  Globe,
  Database,
  TrendingUp,
  DollarSign,
  Star,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AILegalDocumentAutomationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Document Analysis",
      description: "Advanced NLP and machine learning algorithms that understand legal language, context, and requirements",
      benefits: ["Intelligent contract review", "Automated clause identification", "Risk assessment", "Compliance checking"]
    },
    {
      icon: FileText,
      title: "Smart Document Generation",
      description: "Generate legally compliant documents from templates with AI-powered customization and validation",
      benefits: ["Template library", "Custom clause insertion", "Legal compliance validation", "Multi-jurisdiction support"]
    },
    {
      icon: Search,
      title: "Intelligent Contract Review",
      description: "Automated analysis of contracts to identify risks, missing clauses, and compliance issues",
      benefits: ["Risk scoring", "Missing clause detection", "Compliance gap analysis", "Automated recommendations"]
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      description: "Ensure documents meet regulatory requirements and identify potential legal risks automatically",
      benefits: ["Regulatory compliance", "Risk assessment", "Audit trails", "Compliance reporting"]
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Streamline legal document processes with automated approvals, routing, and notifications",
      benefits: ["Approval workflows", "Automated routing", "Deadline tracking", "Integration with legal tools"]
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, access controls, and comprehensive audit logging",
      benefits: ["End-to-end encryption", "Role-based access", "Audit trails", "SOC 2 compliance"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small law firms and legal departments",
      features: [
        "Up to 10 users",
        "Basic document templates",
        "AI contract review (100/month)",
        "Email support",
        "Standard security",
        "Basic compliance checking"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for growing legal practices",
      features: [
        "Up to 50 users",
        "Advanced templates & clauses",
        "AI contract review (500/month)",
        "Priority support",
        "Advanced security features",
        "Full compliance suite",
        "Workflow automation",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited users",
        "Custom template creation",
        "Unlimited AI analysis",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "Multi-jurisdiction support",
        "Custom training"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Law Firms",
      description: "Streamline contract review, automate document generation, and improve client service delivery",
      metrics: ["90% faster contract review", "70% reduction in errors", "50% cost savings"]
    },
    {
      industry: "Corporate Legal",
      description: "Standardize legal processes, ensure compliance, and reduce legal spend across the organization",
      metrics: ["80% process automation", "95% compliance rate", "60% time savings"]
    },
    {
      industry: "Real Estate",
      description: "Automate lease agreements, purchase contracts, and legal document processing",
      metrics: ["85% faster document processing", "75% error reduction", "Enhanced compliance"]
    },
    {
      industry: "Healthcare",
      description: "Ensure HIPAA compliance, automate consent forms, and streamline legal documentation",
      metrics: ["100% compliance rate", "90% faster processing", "Reduced legal risks"]
    }
  ];

  const benefits = [
    "Reduce legal document processing time by 80%",
    "Eliminate 95% of manual errors in legal documents",
    "Ensure 100% regulatory compliance automatically",
    "Save up to $50,000 annually in legal costs",
    "Improve client satisfaction with faster turnaround",
    "Reduce legal risks through automated validation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Legal Document
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automation Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your legal practice with AI-powered document automation, intelligent contract review, 
              and automated compliance management. Save time, reduce errors, and ensure regulatory compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center"
                >
                  <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful Legal Technology Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to modernize your legal practice and deliver exceptional client service
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
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that best fits your legal practice needs and scale as you grow
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
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-slate-800/50 to-blue-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
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
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored legal automation solutions for different industries and practice areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                
                <div>
                  <h4 className="text-blue-400 font-medium mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-3 h-3 text-blue-400 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join hundreds of law firms and legal departments that have already revolutionized their document processes with AI-powered automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400/50 text-blue-400 font-semibold rounded-xl hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}