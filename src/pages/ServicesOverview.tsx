import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe,
  Zap,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Award,
  Lightbulb,
  Database,
  Network,
  Smartphone,
  Server,
  Calendar,
  Target,
  BarChart3,
  Activity,
  PieChart,
  Microscope,
  Building
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and data analytics solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models', 'Data Visualization'],
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 127
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups'],
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated regulatory compliance and risk management solutions',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Trails'],
          href: '/services/ai-compliance-assistant',
          price: 'From $7,500',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Workflow Orchestrator',
          description: 'Intelligent workflow automation with multi-agent coordination and real-time optimization',
          features: ['Process Orchestration', 'Multi-Agent Systems', 'Dynamic Adaptation', 'Performance Analytics'],
          href: '/services/ai-workflow-orchestrator',
          price: 'From $2,500',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Data Governance',
          description: 'AI-powered data classification, compliance automation, and intelligent access control',
          features: ['Data Classification', 'Compliance Automation', 'Access Control', 'Data Lineage'],
          href: '/services/ai-data-governance',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content generation and management platform',
          features: ['Content Creation', 'Brand Voice Consistency', 'SEO Optimization', 'Multi-language Support'],
          href: '/services/llm-content-studio',
          price: 'From $2,500',
          rating: 4.7,
          reviewCount: 203
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automated deployment solutions',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Auto-scaling'],
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking'],
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 167
        },
        {
          name: 'FinOps Advisor',
          description: 'Strategic financial operations consulting and implementation',
          features: ['Financial Planning', 'Cost Control', 'Performance Metrics', 'Strategic Guidance'],
          href: '/services/finops-advisor',
          price: 'From $6,000',
          rating: 4.9,
          reviewCount: 98
        },
        {
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing with ultra-low latency and real-time analytics',
          features: ['Edge Nodes', 'Load Balancing', 'Real-time Analytics', 'Global Network'],
          href: '/services/edge-computing-platform',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 76
        }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      description: 'Digital transformation and innovative technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Digital Twin',
          description: 'Real-time digital simulation and monitoring solutions',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics'],
          href: '/services/digital-twin',
          price: 'From $15,000',
          rating: 4.9,
          reviewCount: 78
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure and network management',
          features: ['Network Design', 'Server Management', 'Security Implementation', '24/7 Monitoring'],
          href: '/services/it-infrastructure',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 145
        },
        {
          name: 'Data Analytics',
          description: 'Comprehensive data analysis and business intelligence solutions',
          features: ['Data Mining', 'Statistical Analysis', 'Business Intelligence', 'Custom Dashboards'],
          href: '/services/data-analytics',
          price: 'From $6,500',
          rating: 4.7,
          reviewCount: 189
        }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security protocols and threat protection systems',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered cybersecurity and compliance management',
          features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Audits'],
          href: '/services/ai-compliance-copilot',
          price: 'From $9,500',
          rating: 4.9,
          reviewCount: 267
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Advanced zero-trust security implementation and management',
          features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $18,000',
          rating: 4.9,
          reviewCount: 134
        }
      ]
    },
    {
      name: 'Business Tools',
      icon: ShoppingCart,
      description: 'Productized SaaS solutions for business automation',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Micro SaaS Solutions',
          description: 'Custom SaaS applications for specific business niches',
          features: ['Custom Development', 'User Management', 'Analytics Dashboard', 'API Integration'],
          href: '/services/micro-saas-solutions',
          price: 'From $10,000',
          rating: 4.8,
          reviewCount: 112
        },
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation and CRM integration',
          features: ['Smart Responses', 'CRM Integration', 'Analytics Tracking', 'Custom Templates'],
          href: '/services/ai-auto-email-responder',
          price: 'From $2,800',
          rating: 4.7,
          reviewCount: 298
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered customer feedback and survey management',
          features: ['Survey Creation', 'Response Analysis', 'Sentiment Analysis', 'Actionable Insights'],
          href: '/services/mobile-feedback-surveys',
          price: 'From $1,500',
          rating: 4.6,
          reviewCount: 445
        },
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer success with predictive analytics and automated engagement',
          features: ['Churn Prevention', 'Health Scoring', 'Automated Engagement', 'Predictive Analytics'],
          href: '/services/ai-customer-success-platform',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 234
        },
        {
          name: 'AI Project Manager',
          description: 'AI-powered project management with intelligent planning and team collaboration',
          features: ['AI Planning', 'Team Collaboration', 'Goal Tracking', 'Performance Analytics'],
          href: '/services/ai-project-manager',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Financial Advisor',
          description: 'Personalized financial planning and investment optimization with AI insights',
          features: ['Portfolio Management', 'Goal Planning', 'Risk Management', 'Tax Optimization'],
          href: '/services/ai-financial-advisor',
          price: 'From $99',
          rating: 4.9,
          reviewCount: 203
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Cpu,
      description: 'Next-generation technology solutions for the future',
      color: 'from-violet-600 to-purple-600',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum computing solutions for complex problem-solving',
          features: ['Quantum Algorithms', 'Problem Optimization', 'Research Tools', 'Enterprise Integration'],
          href: '/services/quantum-computing',
          price: 'From $25,000',
          rating: 4.9,
          reviewCount: 45
        },
        {
          name: 'Blockchain Solutions',
          description: 'Enterprise blockchain implementation and DeFi solutions',
          features: ['Smart Contracts', 'DeFi Platforms', 'Supply Chain', 'Digital Identity'],
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $15,000',
          rating: 4.8,
          reviewCount: 67
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Internet of Things and edge computing infrastructure',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Scalable Infrastructure'],
          href: '/services/iot-edge',
          price: 'From $8,500',
          rating: 4.8,
          reviewCount: 89
        },
        {
          name: 'Healthcare Technology',
          description: 'AI-powered healthcare solutions and medical technology',
          features: ['Predictive Diagnostics', 'Patient Monitoring', 'Treatment Optimization', 'Research Support'],
          href: '/services/ai-healthcare-analytics',
          price: 'From $1,999',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'Sustainability Solutions',
          description: 'Green technology and sustainability-focused solutions',
          features: ['Energy Optimization', 'Carbon Tracking', 'Green Infrastructure', 'Environmental Analytics'],
          href: '/services/sustainability',
          price: 'From $12,000',
          rating: 4.8,
          reviewCount: 78
        },
        {
          name: 'Space Technology',
          description: 'Advanced space technology and satellite solutions',
          features: ['Satellite Systems', 'Space Analytics', 'Orbital Solutions', 'Research Platforms'],
          href: '/services/space-tech',
          price: 'From $50,000',
          rating: 4.9,
          reviewCount: 23
        }
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '15+ years of technology innovation and successful project delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry knowledge and experience'
    },
    {
      icon: TrendingUp,
      title: 'Innovation Focus',
      description: 'Cutting-edge solutions that keep you ahead of the competition'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control for reliable solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Explore our comprehensive portfolio of AI-powered services, IT solutions, and innovative technology services. From AI analytics to cloud infrastructure, we have the solutions you need."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Complete Service Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered services, IT solutions, and innovative technology 
              services designed to transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-gray-500 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">{service.rating}</span>
                        <span className="text-gray-400 text-xs">({service.reviewCount})</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-semibold">{service.price}</span>
                      <Link
                        to={service.href}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
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
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you choose the right services and implement solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:border-white/40 transition-all duration-200"
              >
                Contact Sales Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}