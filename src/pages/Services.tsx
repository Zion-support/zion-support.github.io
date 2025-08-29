import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Lock, 
  Heart, 
  Globe, 
  ShoppingCart, 
  MessageCircle, 
  Users, 
  BookOpen, 
  DollarSign,
  Zap,
  Star,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const serviceCategories = [
  {
    name: 'AI & Analytics',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Intelligent solutions that transform data into actionable insights',
    services: [
      {
        name: 'AI Business Intelligence',
        href: '/services/ai-business-intelligence',
        description: 'Machine learning-powered analytics and business intelligence solutions',
        features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'AI-powered Reporting']
      },
      {
        name: 'AI Sales Copilot',
        href: '/services/ai-sales-copilot',
        description: 'AI-driven sales automation and optimization',
        features: ['Lead Scoring', 'Sales Forecasting', 'Customer Insights', 'Automated Follow-ups']
      },
      {
        name: 'AI Compliance Assistant',
        href: '/services/ai-compliance-assistant',
        description: 'Automated regulatory compliance and risk management',
        features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Support']
      },
      {
        name: 'LLM Content Studio',
        href: '/services/llm-content-studio',
        description: 'AI-powered content creation and management',
        features: ['Content Generation', 'Brand Consistency', 'SEO Optimization', 'Multi-format Output']
      }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'from-blue-600 to-cyan-600',
    description: 'Scalable infrastructure and automated development workflows',
    services: [
      {
        name: 'Cloud DevOps',
        href: '/services/cloud-devops',
        description: 'End-to-end cloud infrastructure and DevOps automation',
        features: ['Infrastructure as Code', 'CI/CD Pipelines', 'Cloud Migration', 'Performance Optimization']
      },
      {
        name: 'Cloud FinOps Optimizer',
        href: '/services/cloud-finops-optimizer',
        description: 'Cloud cost optimization and financial operations',
        features: ['Cost Monitoring', 'Resource Optimization', 'Budget Management', 'ROI Analysis']
      },
      {
        name: 'FinOps Advisor',
        href: '/services/finops-advisor',
        description: 'Strategic financial operations consulting',
        features: ['Cost Strategy', 'Resource Planning', 'Optimization Roadmap', 'Best Practices']
      }
    ]
  },
  {
    name: 'Digital Solutions',
    icon: Rocket,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge digital transformation and innovation',
    services: [
      {
        name: 'Digital Twin',
        href: '/services/digital-twin',
        description: 'Real-time digital replicas for simulation and monitoring',
        features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analytics']
      },
      {
        name: 'IT Infrastructure',
        href: '/services/it-infrastructure',
        description: 'Enterprise-grade infrastructure solutions',
        features: ['Network Design', 'Security Implementation', 'Scalability Planning', '24/7 Support']
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        description: 'Comprehensive data analysis and visualization',
        features: ['Data Mining', 'Statistical Analysis', 'Interactive Dashboards', 'Custom Reports']
      }
    ]
  },
  {
    name: 'IoT & Edge Computing',
    icon: Cpu,
    color: 'from-orange-600 to-red-600',
    description: 'Connected devices and edge intelligence solutions',
    services: [
      {
        name: 'IoT Edge Computing',
        href: '/services/iot-edge',
        description: 'Edge computing solutions for IoT applications',
        features: ['Edge Processing', 'Real-time Analytics', 'Low-latency Operations', 'Offline Capability']
      },
      {
        name: 'Smart Device Management',
        href: '/services/smart-device-management',
        description: 'Comprehensive IoT device lifecycle management',
        features: ['Device Provisioning', 'Remote Monitoring', 'Firmware Updates', 'Security Management']
      }
    ]
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-indigo-600 to-purple-600',
    description: 'Advanced security and compliance solutions',
    services: [
      {
        name: 'AI Compliance Copilot',
        href: '/services/ai-compliance-copilot',
        description: 'AI-powered security compliance automation',
        features: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Auditing']
      },
      {
        name: 'Zero Trust Architecture',
        href: '/services/zero-trust-network-architecture',
        description: 'Modern security framework implementation',
        features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring']
      }
    ]
  },
  {
    name: 'Specialized Solutions',
    icon: Star,
    color: 'from-yellow-600 to-orange-600',
    description: 'Industry-specific and specialized technology solutions',
    services: [
      {
        name: 'Healthcare Technology',
        href: '/services/healthcare-tech',
        description: 'AI-powered healthcare solutions and compliance',
        features: ['HIPAA Compliance', 'Patient Analytics', 'Clinical Decision Support', 'Telemedicine']
      },
      {
        name: 'Blockchain Solutions',
        href: '/services/blockchain-enterprise-solutions',
        description: 'Enterprise blockchain and DeFi solutions',
        features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Tokenization']
      },
      {
        name: 'Sustainability Solutions',
        href: '/services/sustainability',
        description: 'Green IT and environmental technology',
        features: ['Energy Optimization', 'Carbon Tracking', 'Green Infrastructure', 'ESG Reporting']
      }
    ]
  }
];

const featuredServices = [
  {
    name: 'Micro SaaS Solutions',
    href: '/services/micro-saas-solutions',
    description: 'Scalable software solutions for niche markets',
    icon: ShoppingCart,
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'AI Auto Email Responder',
    href: '/services/ai-auto-email-responder',
    description: 'Intelligent email automation and CRM integration',
    icon: MessageCircle,
    color: 'from-purple-400 to-pink-500'
  },
  {
    name: 'Customer Feedback Surveys',
    href: '/services/mobile-feedback-surveys',
    description: 'AI-powered feedback collection and analysis',
    icon: Users,
    color: 'from-green-400 to-emerald-500'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, cloud computing, cybersecurity, digital transformation, and specialized solutions for modern enterprises."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions that drive innovation, efficiency, and growth for modern enterprises
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25 hover:shadow-xl hover:shadow-cyan-400/30"
              >
                Get a Quote
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our most popular and innovative services that are transforming businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Link
                  to={service.href}
                  className="block bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 h-full"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + categoryIndex * 0.1 }}
                className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="text-slate-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 + serviceIndex * 0.05 }}
                      className="group"
                    >
                      <Link
                        to={service.href}
                        className="block bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 h-full"
                      >
                        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {service.name}
                        </h4>
                        <p className="text-slate-300 text-sm mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Explore Service</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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

      {/* Why Choose Us */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Innovation First',
                description: 'Leading-edge solutions that keep you ahead of the competition'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security and compliance for your peace of mind'
              },
              {
                icon: Zap,
                title: 'Rapid Deployment',
                description: 'Quick implementation and fast time-to-value for your business'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: '24/7 technical support and dedicated account management'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 md:p-12 border border-slate-600/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our services can help you achieve your technology goals
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-cyan-400/25"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

