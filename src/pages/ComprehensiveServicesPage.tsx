import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Heart,
  Atom,
  Cpu,
  Shield,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Lock,
  Eye,
  Clock,
  Award,
  Rocket,
  Briefcase,
  Building,
  Database,
  Server,
  Network,
  Zap,
  Target,
  TrendingUp,
  FileText,
  Globe,
  Activity,
  BarChart3,
  Code,
  GitBranch,
  Cloud,
  LineChart,
  PieChart,
  Workflow,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitBranchPlus,
  GitCompare,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequestNew,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequestNew,
  GitPullRequestClosed,
  GitPullRequestDraft,
  GitPullRequestNew
} from 'lucide-react';

export function ComprehensiveServicesPage() {
  const featuredServices = [
    {
      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot',
      description: 'Transform your sales team with AI-powered intelligence, automation, and insights that drive revenue growth',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      features: [
        'AI-Powered Lead Scoring',
        'Smart Conversation Intelligence',
        'Predictive Sales Analytics',
        'Customer Behavior Insights',
        'Automated Follow-up Sequences',
        'Performance Analytics Dashboard'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Improve win rates by 28%',
        'Reduce sales cycle time',
        'Focus on qualified leads'
      ],
      pricing: {
        starter: '$99/month',
        professional: '$299/month',
        enterprise: 'Custom'
      },
      href: '/services/ai-sales-copilot',
      popular: true
    },
    {
      id: 'ai-healthcare-analytics-platform',
      title: 'AI Healthcare Analytics Platform',
      description: 'Revolutionize healthcare delivery with AI-powered analytics, predictive insights, and intelligent patient care management',
      icon: Heart,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'AI-Powered Diagnosis Support',
        'Predictive Patient Analytics',
        'Real-time Health Monitoring',
        'HIPAA-Compliant Security',
        'Care Team Collaboration',
        'Population Health Insights'
      ],
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Early intervention opportunities',
        'Better resource allocation',
        'Improved patient outcomes'
      ],
      pricing: {
        clinical: '$499/month',
        hospital: '$1,999/month',
        enterprise: 'Custom'
      },
      href: '/services/ai-healthcare-analytics-platform',
      popular: false
    },
    {
      id: 'quantum-ai-trading-platform',
      title: 'Quantum AI Trading Platform',
      description: 'Revolutionize financial trading with the world\'s first quantum AI platform. Experience 1000x faster optimization and unprecedented market insights',
      icon: Atom,
      color: 'from-purple-500 to-blue-600',
      features: [
        'Quantum Algorithm Optimization',
        'AI-Powered Market Analysis',
        'High-Frequency Trading',
        'Quantum-Secure Infrastructure',
        'Portfolio Risk Management',
        'Global Market Access'
      ],
      benefits: [
        '1000x faster optimization',
        '95% prediction accuracy',
        'Microsecond execution',
        '40% ROI improvement'
      ],
      pricing: {
        professional: '$2,999/month',
        institutional: '$9,999/month',
        enterprise: 'Custom'
      },
      href: '/services/quantum-ai-trading-platform',
      popular: false
    },
    {
      id: 'ai-devops-automation-platform',
      title: 'AI DevOps Automation Platform',
      description: 'Revolutionize your DevOps with AI-powered automation. Deploy faster, code better, and maintain higher quality with intelligent automation',
      icon: Cpu,
      color: 'from-green-500 to-cyan-600',
      features: [
        'AI-Powered Code Review',
        'Intelligent CI/CD Pipelines',
        'Automated Security Scanning',
        'Performance Optimization',
        'Predictive Monitoring',
        'Smart Git Operations'
      ],
      benefits: [
        '90% faster code reviews',
        '10x faster deployment cycles',
        '99.9% uptime',
        '60% reduction in incidents'
      ],
      pricing: {
        team: '$199/month',
        enterprise: '$799/month',
        enterprisePlus: 'Custom'
      },
      href: '/services/ai-devops-automation-platform',
      popular: false
    }
  ];

  const industrySolutions = [
    {
      title: 'Financial Services',
      description: 'AI-powered solutions for banking, insurance, and fintech companies',
      icon: DollarSign,
      services: ['Quantum AI Trading', 'AI Risk Management', 'Fraud Detection', 'Compliance Automation'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Healthcare',
      description: 'Advanced AI solutions for hospitals, clinics, and research institutions',
      icon: Heart,
      services: ['AI Healthcare Analytics', 'Predictive Diagnostics', 'Patient Monitoring', 'Research Automation'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Manufacturing',
      description: 'Smart manufacturing solutions with AI and IoT integration',
      icon: Building,
      services: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Retail & E-commerce',
      description: 'AI-powered solutions for modern retail and online commerce',
      icon: FileText, // Changed from ShoppingCart to FileText as ShoppingCart is not imported
      services: ['AI Sales Copilot', 'Customer Analytics', 'Inventory Optimization', 'Personalization'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP of Sales',
      company: 'TechCorp Solutions',
      content: 'AI Sales Copilot increased our team\'s productivity by 40% and improved our win rate significantly.',
      rating: 5,
      service: 'AI Sales Copilot'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Cardiologist',
      company: 'HeartCare Specialists',
      content: 'The predictive analytics help us identify high-risk patients before complications arise.',
      rating: 5,
      service: 'AI Healthcare Analytics'
    },
    {
      name: 'David Rodriguez',
      role: 'Head of Trading',
      company: 'Mercury Trading Group',
      content: 'The execution speed and accuracy have transformed our high-frequency trading operations.',
      rating: 5,
      service: 'Quantum AI Trading'
    },
    {
      name: 'Alex Thompson',
      role: 'DevOps Lead',
      company: 'TechFlow Solutions',
      content: 'Our deployment time reduced from hours to minutes with the AI automation platform.',
      rating: 5,
      service: 'AI DevOps Automation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Comprehensive AI Solutions Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our complete suite of innovative AI-powered services designed to transform your business across every industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Featured AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship AI services that are revolutionizing industries and driving unprecedented business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-700/50 backdrop-blur-sm border rounded-xl p-8 hover:border-indigo-500 transition-all duration-300 ${
                  service.popular ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-gray-600'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-indigo-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Pricing</h4>
                  <div className="flex flex-wrap gap-4">
                    {Object.entries(service.pricing).map(([plan, price]) => (
                      <div key={plan} className="text-center">
                        <div className="text-sm text-gray-400 capitalize">{plan}</div>
                        <div className="text-lg font-semibold text-white">{price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-600 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions designed to address the unique challenges and opportunities in your industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                    <p className="text-gray-300 text-sm">{solution.description}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Available Services</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-indigo-400" />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the transformative impact of our AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm">"{testimonial.content}"</p>
                <div className="mb-3">
                  <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                  <p className="text-indigo-400 text-xs">{testimonial.role}</p>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
                <div className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                  {testimonial.service}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations in leveraging AI for unprecedented growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  Industry-leading AI technology
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  Proven track record of success
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  Dedicated support and training
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-400" />
                  Custom solutions for your business
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
