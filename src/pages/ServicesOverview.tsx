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
  Megaphone,
  Truck,
  Target,
  BarChart3,
  FileText,
  Settings,
  Palette,
  Code,
  Monitor,
  Smartphone as Mobile,
  Wifi,
  Database as DataIcon,
  Shield as SecurityIcon,
  Globe as WebIcon,
  Zap as Lightning,
  Brain as AI,
  Rocket as Innovation,
  Heart as Health,
  Lock as Blockchain,
  Cpu as Quantum,
  Rocket as Space
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      color: 'from-purple-600 to-pink-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Transform your data into actionable insights with advanced AI algorithms',
          href: '/services/ai-business-intelligence',
          price: 'From $5,000',
          rating: 4.9,
          features: ['Predictive Analytics', 'Real-time Dashboards', 'Machine Learning Models']
        },
        {
          name: 'AI Sales Copilot',
          description: 'AI-powered sales automation and customer relationship management',
          href: '/services/ai-sales-copilot',
          price: 'From $3,500',
          rating: 4.8,
          features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated regulatory compliance and risk management solutions',
          href: '/services/ai-compliance-assistant',
          price: 'From $7,500',
          rating: 4.9,
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting']
        },
        {
          name: 'AI Project Manager',
          description: 'AI-powered project management with intelligent planning and optimization',
          href: '/services/ai-project-manager',
          price: 'From $299/month',
          rating: 4.9,
          features: ['AI Planning', 'Team Collaboration', 'Performance Analytics']
        },
        {
          name: 'AI Financial Advisor',
          description: 'Intelligent financial planning and investment management',
          href: '/services/ai-financial-advisor',
          price: 'From $99/month',
          rating: 4.9,
          features: ['Investment Analysis', 'Financial Planning', 'Risk Management']
        },
        {
          name: 'AI Marketing Automation',
          description: 'End-to-end marketing automation with AI-powered personalization',
          href: '/services/ai-marketing-automation',
          price: 'From $199/month',
          rating: 4.8,
          features: ['Audience Targeting', 'Campaign Management', 'Content Delivery']
        },
        {
          name: 'AI Supply Chain Optimizer',
          description: 'Intelligent supply chain optimization with demand forecasting',
          href: '/services/ai-supply-chain-optimizer',
          price: 'From $399/month',
          rating: 4.9,
          features: ['Demand Forecasting', 'Route Optimization', 'Inventory Management']
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
          href: '/services/cloud-devops',
          price: 'From $8,000',
          rating: 4.9,
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging']
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,500',
          rating: 4.8,
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management']
        },
        {
          name: 'Edge Computing Platform',
          description: 'Distributed edge computing with ultra-low latency and real-time analytics',
          href: '/services/edge-computing-platform',
          price: 'From $4,500',
          rating: 4.8,
          features: ['Edge Nodes', 'Load Balancing', 'Real-time Analytics']
        }
      ]
    },
    {
      name: 'Digital Transformation',
      icon: Rocket,
      description: 'Digital transformation and innovative technology solutions',
      color: 'from-green-600 to-emerald-600',
      services: [
        {
          name: 'Digital Twin',
          description: 'Real-time digital simulation and monitoring solutions',
          href: '/services/digital-twin',
          price: 'From $15,000',
          rating: 4.9,
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure and network management',
          href: '/services/it-infrastructure',
          price: 'From $12,000',
          rating: 4.8,
          features: ['Network Design', 'Server Management', 'Security Implementation']
        },
        {
          name: 'Data Analytics',
          description: 'Comprehensive data analysis and business intelligence solutions',
          href: '/services/data-analytics',
          price: 'From $6,500',
          rating: 4.7,
          features: ['Data Mining', 'Statistical Analysis', 'Business Intelligence']
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security protocols and threat protection systems',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered cybersecurity and compliance management',
          href: '/services/ai-compliance-copilot',
          price: 'From $9,500',
          rating: 4.9,
          features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response']
        },
        {
          name: 'Zero Trust Architecture',
          description: 'Advanced zero-trust security implementation and management',
          href: '/services/zero-trust-network-architecture',
          price: 'From $18,000',
          rating: 4.9,
          features: ['Identity Verification', 'Access Control', 'Network Segmentation']
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered cybersecurity solutions',
          href: '/services/ai-cybersecurity-suite',
          price: 'From $12,000',
          rating: 4.9,
          features: ['Threat Intelligence', 'Behavioral Analysis', 'Automated Response']
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      description: 'Productized SaaS solutions for business automation',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Micro SaaS Solutions',
          description: 'Custom SaaS applications for specific business niches',
          href: '/services/micro-saas-solutions',
          price: 'From $10,000',
          rating: 4.8,
          features: ['Custom Development', 'User Management', 'Analytics Dashboard']
        },
        {
          name: 'AI Auto Email Responder',
          description: 'Intelligent email automation and CRM integration',
          href: '/services/ai-auto-email-responder',
          price: 'From $2,800',
          rating: 4.7,
          features: ['Smart Responses', 'CRM Integration', 'Analytics Tracking']
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered customer feedback and survey management',
          href: '/services/mobile-feedback-surveys',
          price: 'From $1,500',
          rating: 4.6,
          features: ['Survey Creation', 'Response Analysis', 'Sentiment Analysis']
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content generation and management platform',
          href: '/services/llm-content-studio',
          price: 'From $2,500',
          rating: 4.7,
          features: ['Content Creation', 'Brand Voice Consistency', 'SEO Optimization']
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Lightbulb,
      description: 'Next-generation technology solutions for the future',
      color: 'from-violet-600 to-purple-600',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum computing solutions for complex problem-solving',
          href: '/services/quantum-computing',
          price: 'From $25,000',
          rating: 4.9,
          features: ['Quantum Algorithms', 'Problem Solving', 'Research Support']
        },
        {
          name: 'Blockchain Solutions',
          description: 'Enterprise blockchain implementation and DeFi solutions',
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $20,000',
          rating: 4.8,
          features: ['Smart Contracts', 'DeFi Integration', 'Enterprise Solutions']
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Internet of Things and edge computing infrastructure',
          href: '/services/iot-edge',
          price: 'From $15,000',
          rating: 4.8,
          features: ['Device Management', 'Data Collection', 'Real-time Processing']
        },
        {
          name: 'Space Technology',
          description: 'Advanced space technology and satellite solutions',
          href: '/services/space-tech',
          price: 'From $50,000',
          rating: 4.9,
          features: ['Satellite Systems', 'Space Analytics', 'Research Support']
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
      description: 'Cutting-edge AI and emerging technology solutions for competitive advantage'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes for reliable solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of all our AI-powered services, IT solutions, and micro SAAS offerings. Discover how we can transform your business with cutting-edge technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Complete Service Portfolio
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of AI-powered services, IT solutions, and innovative micro SAAS platforms. 
              From artificial intelligence to emerging technologies, we have the expertise to transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/pricing"
                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-purple-500 hover:text-purple-300 transition-all duration-300"
              >
                View Pricing
              </Link>
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
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-16">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex items-center text-yellow-400 mr-2">
                          {[...Array(Math.floor(service.rating))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">({service.rating})</span>
                      </div>
                      <span className="text-purple-400 font-semibold text-sm">{service.price}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative solutions can drive your success and give you a competitive edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/request-quote"
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
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