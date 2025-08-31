import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Search, 
  FileText, 
  Scale, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Clock,
  DollarSign,
  Star,
  Award,
  Globe,
  Lock,
  BarChart3,
  Workflow,
  Database,
  Cpu,
  Network,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIAutonomousLegalResearchPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Case Analysis",
      description: "Advanced AI algorithms analyze legal precedents, case law, and judicial decisions with 99.7% accuracy"
    },
    {
      icon: Search,
      title: "Intelligent Legal Research",
      description: "Natural language search across millions of legal documents, statutes, and regulations in real-time"
    },
    {
      icon: Workflow,
      title: "Automated Document Review",
      description: "AI-driven contract analysis, risk assessment, and compliance checking with automated workflows"
    },
    {
      icon: BarChart3,
      title: "Predictive Legal Analytics",
      description: "Machine learning models predict case outcomes, settlement probabilities, and legal strategy effectiveness"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Real-time regulatory compliance tracking and automated alerts for legal and regulatory changes"
    },
    {
      icon: Database,
      title: "Centralized Knowledge Base",
      description: "Unified platform for legal research, document management, and knowledge sharing across teams"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for solo practitioners and small law firms",
      features: [
        "Up to 1,000 legal document searches/month",
        "Basic AI case analysis",
        "Standard compliance monitoring",
        "Email support",
        "Basic reporting and analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing law firms and legal departments",
      features: [
        "Up to 10,000 legal document searches/month",
        "Advanced AI case analysis",
        "Real-time compliance monitoring",
        "Priority support",
        "Advanced analytics and reporting",
        "Custom workflows",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large law firms and corporate legal departments",
      features: [
        "Unlimited legal document searches",
        "Full AI-powered legal research suite",
        "Custom AI model training",
        "24/7 dedicated support",
        "Advanced security and compliance",
        "White-label solutions",
        "Custom integrations",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "90% Time Savings",
      description: "Reduce legal research time from hours to minutes with AI-powered automation"
    },
    {
      icon: DollarSign,
      title: "60% Cost Reduction",
      description: "Lower legal research costs and improve billing efficiency"
    },
    {
      icon: TrendingUp,
      title: "95% Accuracy Rate",
      description: "AI models trained on millions of legal documents ensure high accuracy"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless collaboration across legal teams with shared knowledge base"
    }
  ];

  const useCases = [
    {
      title: "Contract Analysis & Review",
      description: "Automated contract review, risk assessment, and compliance checking",
      icon: FileText
    },
    {
      title: "Legal Research & Precedent Analysis",
      description: "AI-powered case law research and precedent identification",
      icon: Search
    },
    {
      title: "Regulatory Compliance",
      description: "Real-time monitoring of regulatory changes and compliance requirements",
      icon: Shield
    },
    {
      title: "Litigation Strategy",
      description: "Predictive analytics for case outcomes and legal strategy optimization",
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI Autonomous Legal Research Platform | Zion Tech Group"
        description="Revolutionary AI-powered legal research platform that automates case analysis, document review, and compliance monitoring. Reduce research time by 90% and costs by 60%."
        keywords="AI legal research, legal automation, case analysis, legal AI, compliance monitoring, legal technology"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Legal Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Legal Research Platform
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform legal research with AI-powered automation. Analyze millions of legal documents, 
              predict case outcomes, and ensure compliance with unprecedented speed and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Legal Research Technology
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with comprehensive legal databases 
              to deliver unprecedented research capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Legal Practice
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in legal research and analysis.
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
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From contract analysis to litigation strategy, our platform covers every aspect of legal practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-blue-100 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose the plan that best fits your legal practice needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-blue-900/20 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-400 shadow-lg shadow-blue-400/25' 
                    : 'border-blue-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-blue-100 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-blue-100">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-blue-500/20 text-blue-300 border border-blue-400 hover:bg-blue-500/30'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of legal professionals who have already revolutionized their research capabilities 
              with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-100 hover:text-blue-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-blue-100">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <p className="text-blue-100">
              Ready to revolutionize your legal practice? Contact us today to learn more about our 
              AI Autonomous Legal Research Platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}