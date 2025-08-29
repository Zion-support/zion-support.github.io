import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Shield, 
  Zap, 
  Rocket, 
  Globe, 
  Heart, 
  Lock, 
  Database, 
  Cloud, 
  Cpu, 
  BarChart3, 
  Users, 
  MessageCircle, 
  BookOpen, 
  DollarSign, 
  Star, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Leaf,
  Satellite,
  Blockchain,
  Stethoscope,
  Recycle,
  Search,
  Code,
  Monitor,
  Smartphone,
  Activity,
  Target,
  Lightbulb,
  Gauge,
  FileText,
  Settings,
  Award
} from 'lucide-react';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge AI solutions for business intelligence, compliance, and automation',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and insights powered by machine learning',
          href: '/services/ai-business-intelligence',
          price: 'From $2,500/month',
          features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'AI-powered recommendations']
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and customer relationship optimization',
          href: '/services/ai-sales-copilot',
          price: 'From $1,800/month',
          features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automated follow-ups']
        },
        {
          name: 'AI Compliance Assistant',
          description: 'Automated regulatory compliance and risk management',
          href: '/services/ai-compliance-assistant',
          price: 'From $3,200/month',
          features: ['Regulatory monitoring', 'Risk assessment', 'Compliance reporting', 'Audit automation']
        },
        {
          name: 'AI Auto Email Responder',
          description: 'Smart email management with AI-powered responses',
          href: '/services/ai-auto-email-responder',
          price: 'From $899/month',
          features: ['Automated responses', 'CRM integration', 'Sentiment analysis', 'Performance tracking']
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content creation and optimization platform',
          href: '/services/llm-content-studio',
          price: 'From $1,200/month',
          features: ['Content generation', 'SEO optimization', 'Brand consistency', 'Multi-language support']
        },
        {
          name: 'AI Cybersecurity Suite',
          description: 'Comprehensive AI-powered security and threat detection',
          href: '/services/ai-cybersecurity-suite',
          price: 'From $4,500/month',
          features: ['Threat detection', 'Behavioral analysis', 'Incident response', 'Security automation']
        },
        {
          name: 'Quantum AI Platform',
          description: 'Next-generation quantum computing and AI integration',
          href: '/services/quantum-ai-platform',
          price: 'From $8,500/month',
          features: ['Quantum algorithms', 'AI optimization', 'High-performance computing', 'Research tools']
        },
        {
          name: 'AI Healthcare Analytics',
          description: 'AI-powered healthcare insights and predictive medicine',
          href: '/services/ai-healthcare-analytics',
          price: 'From $6,500/month',
          features: ['Patient analytics', 'Diagnostic assistance', 'Treatment optimization', 'Population health']
        }
      ]
    },
    {
      title: 'Cloud & DevOps Solutions',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Scalable cloud infrastructure and DevOps automation for modern applications',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end DevOps automation and CI/CD pipelines',
          href: '/services/cloud-devops',
          price: 'From $3,500/month',
          features: ['CI/CD automation', 'Infrastructure as code', 'Monitoring & alerting', 'Performance optimization']
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          href: '/services/cloud-finops-optimizer',
          price: 'From $2,800/month',
          features: ['Cost optimization', 'Resource management', 'Budget tracking', 'ROI analysis']
        },
        {
          name: 'FinOps Advisor',
          description: 'Strategic financial operations consulting and optimization',
          href: '/services/finops-advisor',
          price: 'From $4,200/month',
          features: ['Strategic planning', 'Cost optimization', 'Performance analysis', 'Best practices']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade infrastructure solutions and management',
          href: '/services/it-infrastructure',
          price: 'From $5,500/month',
          features: ['Network design', 'Server management', 'Security implementation', '24/7 monitoring']
        }
      ]
    },
    {
      title: 'Blockchain & Security',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'Advanced blockchain solutions and comprehensive security services',
      services: [
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Enterprise-grade blockchain infrastructure and applications',
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $7,500/month',
          features: ['Smart contract development', 'DeFi security', 'Cross-chain integration', 'Enterprise blockchain']
        },
        {
          name: 'Smart Contract Risk Scanner',
          description: 'AI-powered smart contract security and vulnerability detection',
          href: '/services/smart-contract-risk-scanner',
          price: 'From $799/month',
          features: ['Vulnerability scanning', 'Multi-chain support', 'Risk assessment', 'Security reporting']
        },
        {
          name: 'AI Compliance Copilot',
          description: 'Comprehensive compliance automation and risk management',
          href: '/services/ai-compliance-copilot',
          price: 'From $3,800/month',
          features: ['Regulatory compliance', 'Risk assessment', 'Audit automation', 'Policy management']
        }
      ]
    },
    {
      title: 'Innovative Technology Solutions',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'Cutting-edge technology solutions for emerging industries and challenges',
      services: [
        {
          name: 'Healthcare Technology',
          description: 'AI-powered healthcare solutions and medical technology',
          href: '/services/healthcare-tech',
          price: 'From $8,500/month',
          features: ['Medical diagnostics', 'Patient analytics', 'Telemedicine platforms', 'Drug discovery']
        },
        {
          name: 'Sustainability Solutions',
          description: 'Green technology and environmental monitoring platforms',
          href: '/services/sustainability',
          price: 'From $5,500/month',
          features: ['Carbon tracking', 'Energy optimization', 'Environmental monitoring', 'Compliance reporting']
        },
        {
          name: 'Space Technology',
          description: 'Advanced space technology and satellite solutions',
          href: '/services/space-tech',
          price: 'From $15,000/month',
          features: ['Satellite systems', 'Earth observation', 'Space communications', 'Space infrastructure']
        },
        {
          name: 'Digital Twin',
          description: 'Digital twin solutions for simulation and monitoring',
          href: '/services/digital-twin',
          price: 'From $4,200/month',
          features: ['3D modeling', 'Real-time monitoring', 'Predictive analytics', 'Simulation tools']
        },
        {
          name: 'IoT Edge Computing',
          description: 'Edge computing and IoT platform solutions',
          href: '/services/iot-edge',
          price: 'From $3,800/month',
          features: ['Edge processing', 'IoT management', 'Real-time analytics', 'Device optimization']
        },
        {
          name: 'Data Analytics',
          description: 'Advanced data analysis and business intelligence',
          href: '/services/data-analytics',
          price: 'From $2,800/month',
          features: ['Data processing', 'Business intelligence', 'Predictive analytics', 'Custom reporting']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600',
      description: 'Productized SaaS solutions for specific business needs and niches',
      services: [
        {
          name: 'Micro SaaS Solutions',
          description: 'Complete micro SaaS platform and development services',
          href: '/services/micro-saas-solutions',
          price: 'From $1,500/month',
          features: ['Platform development', 'User management', 'Billing integration', 'Analytics dashboard']
        },
        {
          name: 'Customer Feedback Surveys',
          description: 'AI-powered customer feedback and survey platform',
          href: '/services/mobile-feedback-surveys',
          price: 'From $699/month',
          features: ['Survey creation', 'AI insights', 'Response analysis', 'Performance tracking']
        }
      ]
    }
  ];

  const quickStats = [
    { label: 'Services Available', value: '25+' },
    { label: 'Industries Served', value: '15+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Average ROI', value: '300%' },
    { label: 'Response Time', value: '<2 hours' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of Zion Tech Group's innovative services including AI solutions, blockchain technology, healthcare tech, sustainability solutions, and space technology. Expert IT services and micro SaaS solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Comprehensive Technology Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
              <br />
              <span className="text-white">Overview</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of innovative technology solutions designed to 
              transform your business and drive digital innovation across all industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet 
              the evolving needs of modern businesses and organizations.
            </p>
          </motion.div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group"
                    >
                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="text-lg font-bold text-blue-400 mb-4">{service.price}</div>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={service.href}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group-hover:translate-x-1 transition-transform"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement the right technology solutions 
              to drive innovation and achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Pricing Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}