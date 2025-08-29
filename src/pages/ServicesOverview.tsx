import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
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
  Truck,
  Target,
  BarChart3,
  Clock,
  Phone,
  Mail,
  MapPin
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
        },
        {
          name: 'AI Project Management',
          description: 'AI-powered project planning with predictive timelines and resource optimization',
          features: ['AI Planning', 'Team Collaboration', 'Risk Management', 'Performance Analytics'],
          href: '/services/ai-project-management',
          price: 'From $299',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Financial Trading',
          description: 'AI-powered trading platform with 85% success rate and automated strategies',
          features: ['AI Analysis', 'Real-time Trading', 'Risk Management', 'Portfolio Optimization'],
          href: '/services/ai-financial-trading',
          price: 'From $499',
          rating: 4.9,
          reviewCount: 89
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'AI-powered supply chain optimization with 95% forecasting accuracy',
          features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management', 'Risk Mitigation'],
          href: '/services/ai-supply-chain-optimization',
          price: 'From $2,999',
          rating: 4.9,
          reviewCount: 134
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
        }
      ]
    }
  ];

  const emergingTechnologies = [
    {
      name: 'Quantum Computing',
      icon: Cpu,
      description: 'Next-generation quantum computing solutions for complex problem-solving',
      href: '/services/quantum-computing',
      color: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Blockchain Solutions',
      icon: Lock,
      description: 'Enterprise blockchain implementation and DeFi solutions',
      href: '/services/blockchain-enterprise-solutions',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'IoT & Edge Computing',
      icon: Network,
      description: 'Internet of Things and edge computing infrastructure',
      href: '/services/iot-edge',
      color: 'from-green-600 to-teal-600'
    },
    {
      name: 'Healthcare Technology',
      icon: Heart,
      description: 'AI-powered healthcare solutions and medical technology',
      href: '/services/healthcare-tech',
      color: 'from-red-600 to-pink-600'
    },
    {
      name: 'Sustainability Solutions',
      icon: Globe,
      description: 'Green technology and sustainability-focused solutions',
      href: '/services/sustainability',
      color: 'from-emerald-600 to-green-600'
    },
    {
      name: 'Space Technology',
      icon: Rocket,
      description: 'Advanced space technology and satellite solutions',
      href: '/services/space-tech',
      color: 'from-slate-600 to-gray-600'
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
        description="Comprehensive overview of our innovative AI, IT, and micro SAAS services. From AI-powered analytics to cloud solutions, discover how we can transform your business."
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
              Our Services Overview
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of AI-powered solutions, IT services, and innovative micro SAAS platforms 
              designed to transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 1 ? 'bg-slate-800/30' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <category.icon className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">{category.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-400 font-semibold">{service.price}</span>
                    <span className="text-gray-400 text-sm">{service.reviewCount} reviews</span>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="w-full inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Emerging Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergingTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                  <tech.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <Link
                  to={tech.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver innovative solutions that drive real business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}