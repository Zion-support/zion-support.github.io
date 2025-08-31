import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Clock,
  DollarSign,
  Star,
  Globe,
  Lock,
  Cloud,
  MessageCircle,
  Play,
  Download,
  Search,
  Filter,
  PieChart,
  LineChart,
  Activity,
  Calendar,
  BookOpen,
  PenTool,
  Share2,
  Heart,
  Settings,
  Bell,
  Mail,
  Smartphone,
  Monitor,
  Tablet,
  Gavel,
  Scale,
  Briefcase,
  FileText,
  FolderOpen,
  Edit3,
  Save,
  Upload,
  Download as DownloadIcon,
  Eye,
  EyeOff,
  Copy,
  Share,
  Archive,
  Trash2,
  RefreshCw,
  AlertTriangle,
  Info,
  HelpCircle
} from 'lucide-react';

export default function AILegalDocumentAutomationPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Document Generation',
      description: 'Advanced AI creates legally compliant documents from templates and user inputs'
    },
    {
      icon: Shield,
      title: 'Legal Compliance Engine',
      description: 'Automated compliance checking against current laws and regulations across jurisdictions'
    },
    {
      icon: Zap,
      title: 'Smart Template Library',
      description: 'Extensive library of legal document templates with AI-powered customization'
    },
    {
      icon: Users,
      title: 'Collaborative Workflow',
      description: 'Multi-user collaboration with version control and approval workflows'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Automatic updates when laws change, ensuring documents remain compliant'
    },
    {
      icon: Target,
      title: 'Intelligent Review',
      description: 'AI-powered document review with risk assessment and improvement suggestions'
    }
  ];

  const benefits = [
    'Reduce document creation time by 80%',
    'Eliminate legal compliance errors',
    'Save $50,000+ annually on legal fees',
    'Improve document accuracy and consistency',
    'Automated legal research and updates',
    'Streamlined approval processes'
  ];

  const pricing = [
    {
      name: 'Solo Practitioner',
      price: '$299',
      period: '/month',
      description: 'Perfect for individual lawyers and small practices',
      features: [
        'Up to 100 documents/month',
        'Basic legal templates',
        'AI document generation',
        'Email support',
        'Standard compliance checks'
      ],
      popular: false
    },
    {
      name: 'Law Firm',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing law firms and legal teams',
      features: [
        'Up to 1,000 documents/month',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Multi-user access',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise Legal',
      price: '$1,299',
      period: '/month',
      description: 'For large legal departments and corporations',
      features: [
        'Unlimited documents',
        'Custom AI models',
        'White-label solution',
        'Advanced integrations',
        'Dedicated support',
        'Custom training'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Contract Management',
      description: 'Automate contract creation, review, and management with AI-powered insights',
      icon: FileText
    },
    {
      title: 'Legal Research',
      description: 'AI-powered legal research and case law analysis for faster insights',
      icon: Search
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance tracking and regulatory updates across jurisdictions',
      icon: Shield
    },
    {
      title: 'Document Review',
      description: 'Intelligent document review with risk assessment and improvement suggestions',
      icon: Eye
    }
  ];

  const documentTypes = [
    {
      icon: FileText,
      title: 'Contracts & Agreements',
      count: '50+ templates'
    },
    {
      icon: Briefcase,
      title: 'Corporate Documents',
      count: '75+ templates'
    },
    {
      icon: Gavel,
      title: 'Litigation Documents',
      count: '100+ templates'
    },
    {
      icon: Scale,
      title: 'Regulatory Filings',
      count: '60+ templates'
    }
  ];

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6"
            >
              <FileText className="h-4 w-4 mr-2" />
              Legal Document Automation
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              AI Legal Document
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Automation Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Transform your legal practice with AI-powered document automation. Create, review, 
              and manage legal documents with unprecedented speed and accuracy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Legal Document Library
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Access hundreds of professionally crafted legal document templates across all practice areas.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.map((docType, index) => (
              <motion.div
                key={docType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <docType.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{docType.title}</h3>
                <p className="text-purple-400 font-medium">{docType.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Advanced AI-Powered Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our platform combines cutting-edge AI with legal expertise to revolutionize document creation and management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Transform Your Legal Practice
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Perfect for Every Legal Practice
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300"
            >
              Choose the plan that fits your legal practice needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800/50 rounded-xl p-6 border ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-purple-500/10' 
                    : 'border-gray-700'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Legal Documents?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of legal professionals who have transformed their practice with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}