import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Mail, 
  ShoppingCart, 
  FileText, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Lock,
  Target,
  Lightbulb,
  Code,
  Server,
  Network,
  MessageSquare,
  Calendar,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  HelpCircle,
  Phone,
  Mail as MailIcon,
  MapPin
} from 'lucide-react';

export default function MicroSaaS() {
  const microSaaSServices = [
    {
      category: 'AI-Powered Content & Marketing',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Content Creation Suite',
          description: 'Generate high-quality blog posts, social media content, and marketing materials with AI-powered writing tools.',
          features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Consistency'],
          pricing: '$29/month',
          marketPrice: '$50-100/month',
          benefits: ['Save 80% content creation time', 'Increase engagement by 40%', 'Maintain consistent brand voice'],
          link: '/micro-saas/ai-content-marketing-suite'
        },
        {
          name: 'AI Email Marketing Automation',
          description: 'Intelligent email campaigns with automated follow-ups, personalization, and performance optimization.',
          features: ['Automated Follow-ups', 'Personalization Engine', 'A/B Testing', 'Analytics Dashboard', 'Template Library'],
          pricing: '$19/month',
          marketPrice: '$30-60/month',
          benefits: ['Increase open rates by 35%', 'Reduce manual work by 90%', 'Boost conversion rates'],
          link: '/micro-saas/ai-email-automation'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media posting, engagement, and content optimization across all platforms.',
          features: ['Multi-platform Posting', 'Content Scheduling', 'Engagement Automation', 'Analytics & Insights', 'Hashtag Optimization'],
          pricing: '$24/month',
          marketPrice: '$40-80/month',
          benefits: ['Save 10+ hours weekly', 'Increase followers by 60%', 'Boost engagement rates'],
          link: '/micro-saas/ai-social-manager'
        }
      ]
    },
    {
      category: 'E-Commerce & Business Tools',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Smart Return Management System',
          description: 'Automated return processing, label generation, and tracking for e-commerce businesses.',
          features: ['Automated Returns', 'Label Generation', 'Status Tracking', 'Customer Notifications', 'Analytics Dashboard'],
          pricing: '$39/month',
          marketPrice: '$60-120/month',
          benefits: ['Reduce return processing time by 70%', 'Improve customer satisfaction', 'Lower operational costs'],
          link: '/micro-saas/return-management'
        },
        {
          name: 'AI Inventory Optimizer',
          description: 'Predictive inventory management with demand forecasting and automated reordering.',
          features: ['Demand Forecasting', 'Automated Reordering', 'Stock Alerts', 'Analytics Reports', 'Multi-location Support'],
          pricing: '$49/month',
          marketPrice: '$80-150/month',
          benefits: ['Reduce stockouts by 50%', 'Lower inventory costs by 25%', 'Improve cash flow'],
          link: '/micro-saas/inventory-optimizer'
        },
        {
          name: 'Customer Review Manager',
          description: 'Automated review collection, management, and response system for businesses.',
          features: ['Review Collection', 'Automated Responses', 'Review Analytics', 'Reputation Monitoring', 'Multi-platform Support'],
          pricing: '$29/month',
          marketPrice: '$50-100/month',
          benefits: ['Increase review volume by 80%', 'Improve response time by 90%', 'Boost online reputation'],
          link: '/micro-saas/review-manager'
        }
      ]
    },
    {
      category: 'Productivity & Workflow',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent business process automation with custom workflows and integrations.',
          features: ['Custom Workflows', 'API Integrations', 'Task Automation', 'Performance Analytics', 'Team Collaboration'],
          pricing: '$59/month',
          marketPrice: '$100-200/month',
          benefits: ['Reduce manual tasks by 85%', 'Increase productivity by 60%', 'Streamline operations'],
          link: '/micro-saas/ai-workflow-orchestrator'
        },
        {
          name: 'Smart Meeting Scheduler',
          description: 'AI-powered meeting scheduling with time zone optimization and conflict resolution.',
          features: ['Smart Scheduling', 'Time Zone Handling', 'Conflict Resolution', 'Calendar Integration', 'Meeting Analytics'],
          pricing: '$19/month',
          marketPrice: '$30-60/month',
          benefits: ['Save 5+ hours weekly', 'Reduce scheduling conflicts', 'Improve meeting efficiency'],
          link: '/micro-saas/meeting-scheduler'
        },
        {
          name: 'AI Document Processor',
          description: 'Automated document processing, extraction, and organization with intelligent categorization.',
          features: ['Document Extraction', 'Smart Categorization', 'OCR Processing', 'Search & Filter', 'Cloud Storage'],
          pricing: '$34/month',
          marketPrice: '$50-100/month',
          benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Improve organization'],
          link: '/micro-saas/document-processor'
        }
      ]
    },
    {
      category: 'Analytics & Intelligence',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'AI Financial Analytics Platform',
          description: 'Advanced financial analysis with predictive modeling and automated reporting.',
          features: ['Predictive Analytics', 'Automated Reports', 'Risk Assessment', 'Performance Tracking', 'Custom Dashboards'],
          pricing: '$79/month',
          marketPrice: '$120-250/month',
          benefits: ['Improve financial accuracy by 40%', 'Reduce reporting time by 80%', 'Better decision making'],
          link: '/micro-saas/ai-financial-analytics-platform'
        },
        {
          name: 'Business Intelligence Dashboard',
          description: 'Real-time business metrics and insights with customizable dashboards and alerts.',
          features: ['Real-time Metrics', 'Custom Dashboards', 'Automated Alerts', 'Data Visualization', 'Export Options'],
          pricing: '$44/month',
          marketPrice: '$70-140/month',
          benefits: ['Make data-driven decisions', 'Identify trends early', 'Improve business performance'],
          link: '/micro-saas/business-intelligence'
        },
        {
          name: 'AI Supply Chain Optimizer',
          description: 'Intelligent supply chain management with demand forecasting and optimization.',
          features: ['Demand Forecasting', 'Route Optimization', 'Cost Analysis', 'Risk Management', 'Performance Tracking'],
          pricing: '$69/month',
          marketPrice: '$100-200/month',
          benefits: ['Reduce costs by 20%', 'Improve delivery times', 'Minimize supply chain risks'],
          link: '/micro-saas/ai-supply-chain-optimization'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          name: 'Quantum Cryptography Suite',
          description: 'Next-generation security with quantum-resistant encryption and secure communications.',
          features: ['Quantum Encryption', 'Secure Communications', 'Key Management', 'Compliance Tools', 'Audit Trails'],
          pricing: '$99/month',
          marketPrice: '$150-300/month',
          benefits: ['Future-proof security', 'Meet compliance requirements', 'Protect sensitive data'],
          link: '/micro-saas/quantum-cryptography'
        },
        {
          name: 'AI Security Monitor',
          description: 'Intelligent threat detection and automated security monitoring for businesses.',
          features: ['Threat Detection', 'Automated Monitoring', 'Incident Response', 'Security Reports', 'Compliance Tracking'],
          pricing: '$54/month',
          marketPrice: '$80-160/month',
          benefits: ['Detect threats 5x faster', 'Reduce security incidents', 'Ensure compliance'],
          link: '/micro-saas/ai-security-monitor'
        },
        {
          name: 'Data Privacy Manager',
          description: 'Automated data privacy compliance with GDPR, CCPA, and other regulations.',
          features: ['Privacy Compliance', 'Data Mapping', 'Consent Management', 'Audit Reports', 'Policy Templates'],
          pricing: '$39/month',
          marketPrice: '$60-120/month',
          benefits: ['Ensure compliance', 'Reduce legal risks', 'Protect customer data'],
          link: '/micro-saas/data-privacy-manager'
        }
      ]
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Solutions', icon: Code },
    { number: '10,000+', label: 'Active Users', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Server },
    { number: '24/7', label: 'Support Available', icon: HelpCircle }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Affordable pricing starting from $19/month with no hidden fees or long-term contracts.'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process and comprehensive onboarding.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and regular backups.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support from our team of experts to help you succeed.'
    }
  ];

  return (
    <>
      <SEO 
        title="Micro SaaS Solutions - Zion Tech Group" 
        description="Innovative micro SaaS solutions for modern businesses. AI-powered tools for content creation, automation, analytics, and more. Starting from $19/month."
        keywords="micro SaaS, AI tools, business automation, content creation, analytics, workflow automation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Micro SaaS
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, affordable software solutions that solve specific business problems. 
              From AI-powered content creation to automated workflows, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-6 border border-cyan-400/20">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SaaS solutions designed to solve specific business challenges
            </p>
          </motion.div>

          <div className="space-y-16">
            {microSaaSServices.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                      className="bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl p-6 border border-slate-500/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-bold text-white">{service.pricing}</span>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        </div>
                        <p className="text-sm text-green-400 font-medium">Save up to 50% vs market rates</p>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-gray-300 flex items-center">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to={service.link}
                        className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide affordable, powerful solutions that deliver real value to your business
            </p>
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
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our micro SaaS solutions to drive growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300">
                Ready to discuss your micro SaaS needs? Contact us today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MailIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}