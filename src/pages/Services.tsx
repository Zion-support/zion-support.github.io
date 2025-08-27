import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu,
  Lock,
  Heart,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Network,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  ShoppingCart,
  Headphones,
  Mail,
  Search,
  HelpCircle,
  ShieldCheck,
  Globe2,
  Leaf
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead management',
          href: '/services/ai-sales-copilot',
          features: ['Lead scoring', 'Automated follow-ups', 'Sales analytics']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting',
          href: '/services/ai-compliance-assistant',
          features: ['Regulatory tracking', 'Automated audits', 'Risk assessment']
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content creation and management',
          href: '/services/llm-content-studio',
          features: ['Content generation', 'Brand consistency', 'SEO optimization']
        },
        {
          name: 'Interview Assessment AI',
          description: 'Intelligent candidate evaluation and scoring',
          href: '/services/interview-assessment',
          features: ['Structured interviews', 'Bias detection', 'Performance metrics']
        }
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automation',
          href: '/services/cloud-devops',
          features: ['Infrastructure as Code', 'CI/CD pipelines', 'Monitoring & alerting']
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial management',
          href: '/services/cloud-finops-optimizer',
          features: ['Cost tracking', 'Resource optimization', 'Budget management']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure solutions',
          href: '/services/it-infrastructure',
          features: ['Network design', 'Security implementation', 'Performance optimization']
        }
      ]
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation and response management',
          href: '/services/ai-auto-email-responder',
          features: ['Smart responses', 'CRM integration', 'Sentiment analysis']
        },
        {
          name: 'Email Sequencer',
          description: 'Automated email marketing and follow-up sequences',
          href: '/services/email-sequencer',
          features: ['Sequence automation', 'A/B testing', 'Performance tracking']
        },
        {
          name: 'Micro CRM',
          description: 'Lightweight CRM solution for small businesses',
          href: '/services/micro-crm',
          features: ['Contact management', 'Sales tracking', 'Task automation']
        }
      ]
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable business insights',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Website Analytics',
          description: 'Privacy-first website analytics and insights',
          href: '/services/website-analytics',
          features: ['Visitor tracking', 'Conversion analysis', 'Privacy compliance']
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered survey and feedback collection',
          href: '/services/mobile-feedback-surveys',
          features: ['Survey automation', 'Sentiment analysis', 'Actionable insights']
        },
        {
          name: 'Affiliate Tracking',
          description: 'Comprehensive affiliate marketing platform',
          href: '/services/affiliate-tracking',
          features: ['Commission tracking', 'Performance analytics', 'Payout management']
        }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance solutions',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'Automated compliance management and reporting',
          href: '/services/ai-compliance-copilot',
          features: ['SOC2 automation', 'ISO compliance', 'Evidence collection']
        },
        {
          name: 'Security Headers & CSP',
          description: 'Advanced web security and content security policies',
          href: '/services/security-headers-csp',
          features: ['HSTS implementation', 'CSP configuration', 'Security monitoring']
        },
        {
          name: 'DSR Privacy Portal',
          description: 'GDPR and CCPA data subject rights management',
          href: '/services/dsr-portal',
          features: ['Data requests', 'Automated workflows', 'Compliance reporting']
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      description: 'Industry-specific and specialized technology solutions',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Podcast Transcription',
          description: 'AI-powered audio transcription and show notes',
          href: '/services/podcast-transcription',
          features: ['Accurate transcription', 'Show notes generation', 'Multi-language support']
        },
        {
          name: 'Returns Management',
          description: 'E-commerce returns and RMA automation',
          href: '/services/returns-management',
          features: ['Automated processing', 'Customer self-service', 'Analytics dashboard']
        },
        {
          name: 'IT Helpdesk',
          description: 'Comprehensive IT support and ticket management',
          href: '/services/it-helpdesk',
          features: ['Ticket tracking', 'SLA management', 'Knowledge base']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance features'
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Intuitive interfaces and seamless integrations'
    },
    {
      icon: Star,
      title: 'Proven Results',
      description: 'Track record of successful implementations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Our Services - Zion Tech Group"
        description="Discover Zion Tech Group's comprehensive range of AI, cloud, and technology services designed to transform your business."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI, cloud, and technology solutions designed to transform your business 
              and drive innovation across all industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: (categoryIndex * 0.1) + (serviceIndex * 0.1) }}
                      className="group"
                    >
                      <Link to={service.href}>
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                            <span className="text-sm font-medium">Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-300">Delivering value through innovation and expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative services can help you achieve your goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

