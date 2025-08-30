import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import {
  FileText,
  Brain,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Lock,
  Search,
  Edit3,
  Download,
  Share2,
  BarChart3,
  Target,
  TrendingUp,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Database,
  Network,
  Cloud,
  Rocket,
  Lightbulb,
  Workflow,
  Bot,
  Sparkles,
  Palette,
  Eye,
  Server,
  Smartphone,
  Code,
  Layers,
  Activity,
  FileCheck,
  BookOpen,
  Scale,
  Gavel,
  Briefcase,
  Clipboard,
  AlertTriangle,
  CheckSquare,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  UserCheck,
  Calendar,
  Timer,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  Plus,
  Minus,
  Divide,
  Percent,
  Hash,
  HashIcon
} from 'lucide-react';

export default function AILegalDocumentAutomation() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Document Analysis',
      description: 'Advanced natural language processing to understand and analyze legal documents with 99.2% accuracy',
      benefits: ['Instant document classification', 'Key clause identification', 'Risk assessment scoring', 'Compliance checking']
    },
    {
      icon: FileText,
      title: 'Automated Document Generation',
      description: 'Generate legally compliant documents from templates with intelligent field population and validation',
      benefits: ['Template library with 500+ documents', 'Smart field detection', 'Legal compliance validation', 'Multi-format export']
    },
    {
      icon: Shield,
      title: 'Compliance & Risk Management',
      description: 'Built-in compliance checking against current regulations and automated risk assessment',
      benefits: ['Real-time regulation updates', 'Risk scoring algorithms', 'Compliance audit trails', 'Regulatory change alerts']
    },
    {
      icon: Search,
      title: 'Intelligent Search & Discovery',
      description: 'Semantic search across document repositories with AI-powered relevance ranking',
      benefits: ['Natural language queries', 'Context-aware results', 'Document relationship mapping', 'Advanced filtering options']
    },
    {
      icon: Workflow,
      title: 'Automated Workflow Management',
      description: 'Streamline legal processes with intelligent routing and approval workflows',
      benefits: ['Custom workflow builder', 'Automated task assignment', 'Deadline tracking', 'Performance analytics']
    },
    {
      icon: Lock,
      title: 'Enterprise Security & Privacy',
      description: 'Bank-level security with end-to-end encryption and compliance with legal industry standards',
      benefits: ['SOC 2 Type II certified', 'GDPR compliance', 'Role-based access control', 'Audit logging']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small law firms and solo practitioners',
      features: [
        'Up to 100 documents/month',
        'Basic AI analysis',
        'Standard templates (50+)',
        'Email support',
        'Basic compliance checking'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?service=ai-legal-document-automation&plan=starter'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing law firms and legal departments',
      features: [
        'Up to 1,000 documents/month',
        'Advanced AI analysis',
        'Premium templates (200+)',
        'Priority support',
        'Advanced compliance features',
        'Workflow automation',
        'API access'
      ],
      popular: true,
      cta: 'Get Started',
      href: '/contact?service=ai-legal-document-automation&plan=professional'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large law firms and corporate legal departments',
      features: [
        'Unlimited documents',
        'Custom AI models',
        'Custom template creation',
        'Dedicated support manager',
        'Full compliance suite',
        'Advanced analytics',
        'Custom integrations',
        'On-premise deployment option'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?service=ai-legal-document-automation&plan=enterprise'
    }
  ];

  const useCases = [
    {
      title: 'Contract Management',
      description: 'Automate contract creation, review, and approval processes',
      icon: FileText,
      benefits: ['Reduce contract review time by 70%', 'Eliminate manual errors', 'Faster deal closure']
    },
    {
      title: 'Legal Research',
      description: 'AI-powered case law research and precedent analysis',
      icon: Search,
      benefits: ['Find relevant cases 10x faster', 'Identify key precedents', 'Track legal trends']
    },
    {
      title: 'Compliance Monitoring',
      description: 'Automated compliance checking and regulatory updates',
      icon: Shield,
      benefits: ['Stay current with regulations', 'Reduce compliance risks', 'Automated reporting']
    },
    {
      title: 'Document Review',
      description: 'Intelligent document review with risk assessment',
      icon: Eye,
      benefits: ['Faster review cycles', 'Consistent quality', 'Risk identification']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Managing Partner',
      company: 'Johnson & Associates Law',
      content: 'This platform has transformed our document workflow. We\'ve reduced document processing time by 80% and eliminated costly errors.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'General Counsel',
      company: 'TechCorp Inc.',
      content: 'The AI-powered compliance checking has saved us countless hours and helped us avoid potential regulatory issues.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Solo Practitioner',
      company: 'Rodriguez Legal Services',
      content: 'As a solo practitioner, this tool has been invaluable. It\'s like having a team of paralegals working 24/7.',
      rating: 5
    }
  ];

  const marketComparison = {
    competitors: [
      { name: 'DocuSign', price: '$15-45/user/month', features: 'Basic e-signature, limited AI' },
      { name: 'ContractPodAi', price: '$1,200-2,500/month', features: 'Good AI, expensive' },
      { name: 'Kira Systems', price: '$2,000-5,000/month', features: 'Advanced AI, enterprise only' }
    ],
    ourAdvantage: [
      'More affordable than competitors',
      'Better AI capabilities',
      'Comprehensive feature set',
      'Superior customer support',
      'Faster implementation'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Legal Document Automation Platform | Zion Tech Group"
        description="Transform your legal practice with AI-powered document automation. Reduce costs by 70%, eliminate errors, and streamline workflows. Starting at $299/month."
        keywords="AI legal automation, legal document management, contract automation, legal compliance, law firm software"
        canonicalUrl="https://ziontechgroup.com/services/ai-legal-document-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Legal Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Legal Document
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Automation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your legal practice with intelligent document automation. Reduce costs by 70%, eliminate manual errors, 
              and streamline workflows with AI-powered legal technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=ai-legal-document-automation"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">70%</div>
                <div className="text-gray-400">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-400">Time Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">99.2%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">Availability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Legal Practice
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with deep legal expertise to deliver 
              unprecedented efficiency and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Practice Size
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your practice. All plans include our core AI features and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-br from-slate-800/80 to-blue-900/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.href}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">Need a custom solution?</p>
            <Link
              to="/contact?service=ai-legal-document-automation&plan=custom"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
            >
              Contact Sales Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how leading law firms and legal departments are using our platform to transform their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we compare to the competition and why leading legal professionals choose our platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Competitor Comparison</h3>
              <div className="space-y-4">
                {marketComparison.competitors.map((competitor, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-white">{competitor.name}</h4>
                      <span className="text-gray-400 text-sm">{competitor.price}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{competitor.features}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Advantages</h3>
              <div className="space-y-4">
                {marketComparison.ourAdvantage.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Leading Legal Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about the transformative impact of our AI legal automation platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-blue-400">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of law firms already using our AI-powered platform to streamline operations, 
              reduce costs, and deliver better client service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=ai-legal-document-automation"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact?service=ai-legal-document-automation&demo=request"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
              >
                Schedule Demo
                <Calendar className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Full feature access</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}