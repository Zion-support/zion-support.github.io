import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Scale, 
  Search, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Lock,
  Globe,
  BookOpen,
  Gavel,
  FileCheck,
  AlertTriangle,
  TrendingUp,
  Target,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AILegalDocumentAnalysis() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze legal documents with 95% accuracy"
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Semantic search across millions of legal documents and precedents"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Real-time compliance checking against regulatory frameworks"
    },
    {
      icon: Zap,
      title: "Automated Review",
      description: "Process thousands of documents in minutes, not days"
    },
    {
      icon: FileCheck,
      title: "Risk Assessment",
      description: "Identify potential legal risks and compliance issues automatically"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into legal document patterns and trends"
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
        "Basic analytics dashboard"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for mid-sized law firms and legal departments",
      features: [
        "Up to 10,000 documents/month",
        "Advanced AI analysis",
        "Comprehensive compliance monitoring",
        "Priority support",
        "Advanced analytics",
        "Custom templates",
        "API access"
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
        "Full compliance suite",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "Advanced security features"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const benefits = [
    "Reduce document review time by 80%",
    "Improve accuracy by 95% compared to manual review",
    "Cut legal research costs by 60%",
    "Ensure 100% compliance with regulations",
    "Handle 10x more documents with same team size",
    "Reduce legal risks and liability exposure"
  ];

  const useCases = [
    {
      title: "Contract Review",
      description: "Automatically analyze contracts for risks, obligations, and compliance issues",
      icon: FileText
    },
    {
      title: "Regulatory Compliance",
      description: "Monitor documents against changing regulatory requirements in real-time",
      icon: Shield
    },
    {
      title: "Due Diligence",
      description: "Accelerate M&A due diligence with AI-powered document analysis",
      icon: Search
    },
    {
      title: "Litigation Support",
      description: "Quickly identify relevant documents and evidence for legal cases",
      icon: Gavel
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: Target },
    { number: "80%", label: "Time Savings", icon: Clock },
    { number: "60%", label: "Cost Reduction", icon: DollarSign },
    { number: "10x", label: "Productivity Boost", icon: TrendingUp }
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal Document Analysis Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionize legal document processing with our AI-powered analysis platform. Reduce review time by 80%, improve accuracy by 95%, and ensure compliance." />
        <meta name="keywords" content="AI legal analysis, document review, compliance monitoring, legal tech, contract analysis, due diligence" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-legal-document-analysis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Scale className="w-4 h-4 mr-2 text-blue-400" />
                AI-Powered Legal Tech
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Legal Document <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analysis Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your legal practice with AI-powered document analysis. Process thousands of documents in minutes, 
                ensure compliance, and reduce legal risks with 95% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Legal Professionals</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with legal expertise to deliver unmatched document analysis capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI platform transforms various aspects of legal practice and business operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                      <useCase.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400">{useCase.description}</p>
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
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your legal practice size and document processing needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-blue-500/50 bg-gradient-to-br from-zinc-800/80 to-blue-900/20' 
                      : 'border-zinc-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Legal Practice</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency and accuracy in legal document processing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Transform</span> Your Legal Practice?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of legal professionals who have already revolutionized their document processing with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500 text-white font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+1 302 464 0950</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}