import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building,
  Users,
  Shield,
  Cloud,
  Database,
  Network,
  Lock,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  Clock,
  DollarSign,
  Zap,
  Brain,
  Rocket,
  Cpu,
  Server,
  BarChart3,
  TrendingUp,
  Settings,
  Activity,
  ShoppingCart
} from 'lucide-react';

export default function Enterprise() {
  const enterpriseSolutions = [
    {
      category: 'Digital Transformation',
      solutions: [
        {
          name: 'Digital Transformation',
          description: 'Transform your organization with comprehensive digital transformation strategies and implementation.',
          features: ['Process Automation', 'Cloud Migration', 'Data Modernization', 'Change Management'],
          icon: Rocket,
          href: '/services/digital-transformation',
          color: 'from-blue-600 to-cyan-600'
        },
        {
          name: 'IT Infrastructure',
          description: 'Build robust, scalable IT infrastructure that supports your business growth and innovation.',
          features: ['Network Architecture', 'Data Centers', 'Cloud Infrastructure', 'Security Framework'],
          icon: Server,
          href: '/services/it-infrastructure',
          color: 'from-green-600 to-emerald-600'
        },
        {
          name: 'Cloud & DevOps',
          description: 'Accelerate development and deployment with modern cloud and DevOps practices.',
          features: ['Cloud Strategy', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting'],
          icon: Cloud,
          href: '/services/cloud-devops',
          color: 'from-purple-600 to-pink-600'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      solutions: [
        {
          name: 'Data Analytics',
          description: 'Unlock the power of your data with advanced analytics and business intelligence solutions.',
          features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Real-time Dashboards'],
          icon: BarChart3,
          href: '/services/data-analytics',
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'AI Business Intelligence',
          description: 'Leverage AI to transform your data into actionable business insights and predictions.',
          features: ['Machine Learning', 'Predictive Modeling', 'Natural Language Processing', 'Automated Insights'],
          icon: Brain,
          href: '/services/ai-business-intelligence',
          color: 'from-orange-600 to-red-600'
        },
        {
          name: 'Data Governance',
          description: 'Ensure data quality, security, and compliance across your organization.',
          features: ['Data Quality Management', 'Privacy Protection', 'Compliance Monitoring', 'Risk Assessment'],
          icon: Shield,
          href: '/services/ai-data-governance',
          color: 'from-gray-600 to-slate-600'
        }
      ]
    },
    {
      category: 'Cybersecurity & Compliance',
      solutions: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'Protect your enterprise with next-generation AI-powered cybersecurity solutions.',
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Automation'],
          icon: Lock,
          href: '/services/ai-cybersecurity-suite',
          color: 'from-red-600 to-pink-600'
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Implement comprehensive zero-trust security with continuous monitoring and verification.',
          features: ['Identity Verification', 'Continuous Monitoring', 'Access Control', 'Threat Prevention'],
          icon: Shield,
          href: '/services/zero-trust-network-architecture',
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Compliance Management',
          description: 'Streamline regulatory compliance with automated monitoring and reporting tools.',
          features: ['Regulatory Monitoring', 'Automated Reporting', 'Risk Assessment', 'Compliance Tracking'],
          icon: CheckCircle,
          href: '/services/ai-compliance-copilot',
          color: 'from-green-600 to-teal-600'
        }
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      description: 'Transform healthcare delivery with AI-powered diagnostics, patient care, and operational efficiency.',
      solutions: ['AI Healthcare Analytics', 'Digital Twin Solutions', 'IoT Edge Computing', 'Cybersecurity'],
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
      href: '/solutions/healthcare'
    },
    {
      industry: 'Finance',
      description: 'Drive innovation in financial services with AI, blockchain, and advanced analytics solutions.',
      solutions: ['AI Fraud Detection', 'Blockchain Solutions', 'Quantum Computing', 'RegTech'],
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      href: '/solutions/finance'
    },
    {
      industry: 'Manufacturing',
      description: 'Optimize manufacturing operations with IoT, AI, and digital twin technologies.',
      solutions: ['Digital Twin', 'IoT Edge Computing', 'Predictive Maintenance', 'Supply Chain Optimization'],
      icon: Cpu,
      color: 'from-orange-600 to-red-600',
      href: '/solutions/manufacturing'
    },
    {
      industry: 'Retail',
      description: 'Enhance customer experience and operational efficiency with AI and data analytics.',
      solutions: ['AI Personalization', 'Customer Analytics', 'Inventory Optimization', 'Omnichannel Solutions'],
      icon: ShoppingCart,
      color: 'from-purple-600 to-pink-600',
      href: '/solutions/retail'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Streamline operations and improve efficiency with intelligent automation and optimization.'
    },
    {
      icon: Brain,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time analytics and AI-powered insights.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your enterprise with advanced cybersecurity and compliance solutions.'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Deliver exceptional customer experiences with personalized and proactive solutions.'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce operational costs through intelligent automation and resource optimization.'
    },
    {
      icon: Rocket,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge technology and innovation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-50 via-white to-zion-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-slate-900 via-zion-slate-800 to-zion-slate-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-200 mb-8 max-w-4xl mx-auto">
              Transform your enterprise with comprehensive solutions that drive innovation, 
              efficiency, and sustainable growth across all business functions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services-overview"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              From digital transformation to cybersecurity, our enterprise solutions cover every aspect 
              of modern business operations and technology infrastructure.
            </p>
          </motion.div>

          <div className="space-y-16">
            {enterpriseSolutions.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-gradient-to-r from-zion-slate-50 to-zion-slate-100 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-zion-slate-900 mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.solutions.map((solution, solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: solutionIndex * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} text-white mb-4`}>
                        <solution.icon className="h-8 w-8" />
                      </div>
                      <h4 className="text-xl font-semibold text-zion-slate-900 mb-3">
                        {solution.name}
                      </h4>
                      <p className="text-zion-slate-600 mb-4">
                        {solution.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-zion-slate-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={solution.href}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-50 to-zion-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              Tailored solutions designed for the unique challenges and opportunities of your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${industry.color} text-white mb-6`}>
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-zion-slate-900 mb-4">
                  {industry.industry}
                </h3>
                <p className="text-zion-slate-600 mb-6">
                  {industry.description}
                </p>
                <div className="space-y-2 mb-6">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-zion-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </div>
                <Link
                  to={industry.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate-900 mb-4">
              Why Choose Our Enterprise Solutions?
            </h2>
            <p className="text-xl text-zion-slate-600 max-w-3xl mx-auto">
              Experience the transformative power of enterprise-grade solutions designed for scale, 
              security, and sustainable growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-zion-slate-50 to-zion-slate-100 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-zion-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-900 to-zion-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-zion-slate-200 mb-8">
              Let's discuss how our enterprise solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-slate-900 transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}