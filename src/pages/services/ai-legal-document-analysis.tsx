import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Scale, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Search,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Target,
  Lightbulb,
  BookOpen,
  Gavel,
  FileCheck,
  AlertTriangle,
  Eye,
  Download,
  Upload,
  Share2,
  Settings,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Laptop
} from 'lucide-react';

export default function AILegalDocumentAnalysis() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze legal documents with 99.5% accuracy"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Semantic search across millions of legal documents in seconds"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automated compliance checking against current regulations and standards"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant notifications on regulatory changes affecting your documents"
    },
    {
      icon: BarChart3,
      title: "Risk Assessment",
      description: "AI-driven risk scoring and vulnerability identification"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption and SOC 2 Type II compliance"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small law firms and solo practitioners",
      features: [
        "Up to 1,000 documents/month",
        "Basic AI analysis",
        "Standard compliance checks",
        "Email support",
        "Basic reporting"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for mid-size law firms and legal departments",
      features: [
        "Up to 10,000 documents/month",
        "Advanced AI analysis",
        "Comprehensive compliance monitoring",
        "Priority support",
        "Advanced analytics dashboard",
        "API access",
        "Custom workflows"
      ],
      popular: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Advanced integrations",
        "Custom compliance rules",
        "On-premise deployment option"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const useCases = [
    {
      title: "Contract Review & Analysis",
      description: "Automatically analyze contracts for risks, obligations, and compliance issues",
      icon: FileCheck,
      benefits: ["90% faster review", "Risk identification", "Compliance checking"]
    },
    {
      title: "Regulatory Compliance",
      description: "Stay compliant with changing regulations across multiple jurisdictions",
      icon: Scale,
      benefits: ["Real-time updates", "Multi-jurisdiction", "Automated monitoring"]
    },
    {
      title: "Due Diligence",
      description: "Accelerate due diligence processes with AI-powered document analysis",
      icon: Search,
      benefits: ["Faster processing", "Comprehensive analysis", "Risk assessment"]
    },
    {
      title: "Legal Research",
      description: "Find relevant case law and precedents in seconds",
      icon: BookOpen,
      benefits: ["Semantic search", "Precedent analysis", "Citation tracking"]
    }
  ];

  const integrations = [
    { name: "Clio", type: "Practice Management" },
    { name: "MyCase", type: "Case Management" },
    { name: "PracticePanther", type: "Legal Software" },
    { name: "Smokeball", type: "Practice Management" },
    { name: "Zapier", type: "Automation" },
    { name: "Microsoft 365", type: "Productivity" },
    { name: "Google Workspace", type: "Productivity" },
    { name: "Salesforce", type: "CRM" }
  ];

  const stats = [
    { number: "99.5%", label: "Analysis Accuracy", icon: CheckCircle },
    { number: "90%", label: "Time Savings", icon: Clock },
    { number: "50+", label: "Regulations Supported", icon: Scale },
    { number: "10,000+", label: "Legal Firms Using", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>AI Legal Document Analysis Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize legal document analysis with AI-powered platform. 99.5% accuracy, real-time compliance monitoring, and intelligent risk assessment. Start from $299/month." />
        <meta name="keywords" content="AI legal analysis, legal document review, compliance monitoring, contract analysis, legal AI platform, legal technology" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-legal-document-analysis" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Scale className="w-12 h-12 text-blue-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Legal Document Analysis
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform legal document review with 99.5% accuracy. Automate compliance monitoring, 
              risk assessment, and contract analysis using advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for Legal Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with deep legal expertise to deliver 
              unprecedented accuracy and efficiency in document analysis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your legal practice needs. All plans include our core AI analysis features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered document analysis can revolutionize different aspects of your legal work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing legal software and tools for a seamless workflow experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-blue-300" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of legal professionals who are already using AI to work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg text-white transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg font-semibold text-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Have Questions? We're Here to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}