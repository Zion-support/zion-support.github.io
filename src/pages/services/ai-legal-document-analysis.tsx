import React from 'react';
import { motion } from 'framer-motion';
import {

  FileText, 
  Search, 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  BarChart3,
  Lock,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AILegalDocumentAnalysis() {

  const features = [
    {

      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Contract Analysis",
      description: "Advanced NLP algorithms analyze contracts, identify risks, and extract key terms with 99.2% accuracy"
    },
    {

      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Document Search",
      description: "Semantic search across millions of legal documents with context-aware results and relevance scoring"
    },
    {

      icon: <Shield className="w-6 h-6" />,
      title: "Compliance Monitoring",
      description: "Real-time compliance tracking with automated alerts for regulatory changes and deadline management"
    },
    {

      icon: <Zap className="w-6 h-6" />,
      title: "Automated Risk Assessment",
      description: "AI-driven risk scoring and mitigation recommendations for legal documents and contracts"
    },
    {

      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Review",
      description: "Multi-user document review with version control, comments, and approval workflows"
    },
    {

      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into document patterns, risk trends, and compliance metrics"
    }
  ];

  const pricing = [
    {

      name: "Starter",
      price: "$299",
      period: "/month",
      features: [
        "Up to 100 documents/month",
        "Basic AI analysis",
        "Standard search",
        "Email support",
        "Basic compliance alerts"
      ],
      popular: false
    },
    {

      name: "Professional",
      price: "$799",
      period: "/month",
      features: [
        "Up to 1,000 documents/month",
        "Advanced AI analysis",
        "Semantic search",
        "Priority support",
        "Full compliance monitoring",
        "Risk assessment",
        "API access"
      ],
      popular: true
    },
    {

      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      features: [
        "Unlimited documents",
        "Custom AI models",
        "Advanced analytics",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce legal review time by 85%",
    "Identify contract risks 3x faster",
    "Ensure 100% compliance accuracy",
    "Save $50,000+ annually on legal costs",
    "Improve contract negotiation outcomes",
    "Streamline due diligence processes"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Legal Document Analysis Platform - Zion Tech Group"
        description="Advanced AI platform for legal document analysis, contract review, and compliance monitoring. Reduce legal review time by 85% with intelligent automation."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Legal Document Analysis
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your legal operations with intelligent document analysis, automated risk assessment, and compliance monitoring. 
              Reduce review time by 85% while improving accuracy and reducing costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Legal Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by legal experts and AI engineers, our platform delivers unprecedented efficiency and accuracy in legal document analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Legal Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to streamline legal document analysis and improve your practice efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your legal practice needs. All plans include our core AI analysis capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${

                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                } hover:border-blue-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Market-Leading Legal Tech Solution
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-green-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Market Price Range</p>
                    <p className="text-gray-300">$500 - $3,000/month for similar solutions</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Setup Time</p>
                    <p className="text-gray-300">2-4 weeks for full implementation</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">ROI Timeline</p>
                    <p className="text-gray-300">300% return within 6 months</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-purple-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Target Market</p>
                    <p className="text-gray-300">Law firms, corporate legal departments, compliance teams</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Accuracy</span>
                  <span className="text-green-400 font-semibold">99.2%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-blue-400 font-semibold">10x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cost Savings</span>
                  <span className="text-purple-400 font-semibold">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Compliance Rate</span>
                  <span className="text-yellow-400 font-semibold">100%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-blue-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of legal professionals who have already revolutionized their document analysis workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white font-semibold mb-2">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white font-semibold mb-2">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-white font-semibold mb-2">Address</p>
              <p className="text-gray-300">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://ziontechgroup.com"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Visit our website
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}