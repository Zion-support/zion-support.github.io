import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Shield, 
  TrendingUp, 
  Heart, 
  Target, 
  Zap, 
  Cloud, 
  Rocket, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Users,
  MessageCircle,
  DollarSign,
  BarChart3,
  Settings,
  Globe,
  Lock,
  Cpu,
  Eye,
  BookOpen,
  ShoppingCart,
  GraduationCap,
  FileText,
  Building
} from 'lucide-react';

export default function InnovativeServicesShowcase2025() {
  const featuredServices = [
    {
      title: 'AI Project Management Platform',
      description: 'Revolutionize project delivery with AI-powered task prioritization, predictive analytics, and intelligent team collaboration.',
      icon: Target,
      href: '/services/ai-project-management-platform',
      color: 'from-purple-600 to-pink-600',
      features: ['AI-Powered Task Prioritization', 'Smart Team Collaboration', 'Predictive Timeline Management', 'Performance Analytics'],
      price: 'From $299/month',
      category: 'Project Management'
    },
    {
      title: 'AI Cybersecurity Threat Detection',
      description: 'Advanced AI-powered cybersecurity platform with 99.9% threat detection rate and real-time automated response.',
      icon: Shield,
      href: '/services/ai-cybersecurity-threat-detection',
      color: 'from-red-600 to-orange-600',
      features: ['AI-Powered Threat Detection', '24/7 Network Monitoring', 'Zero-Day Attack Prevention', 'Automated Response'],
      price: 'From $499/month',
      category: 'Cybersecurity'
    },
    {
      title: 'AI Financial Trading Platform',
      description: 'Revolutionary AI-powered trading platform delivering 25% higher returns through intelligent market analysis and automation.',
      icon: TrendingUp,
      href: '/services/ai-financial-trading-platform',
      color: 'from-green-600 to-blue-600',
      features: ['AI-Powered Market Analysis', 'Automated Trading Strategies', 'Real-Time Portfolio Optimization', 'Risk Management'],
      price: 'From $199/month',
      category: 'Financial Services'
    },
    {
      title: 'AI Healthcare Analytics Platform',
      description: 'Transform healthcare delivery with AI-powered diagnosis support, predictive analytics, and patient monitoring.',
      icon: Heart,
      href: '/services/ai-healthcare-analytics-platform',
      color: 'from-blue-600 to-cyan-600',
      features: ['AI-Powered Diagnosis Support', 'Predictive Health Analytics', 'Patient Outcome Prediction', 'Real-Time Monitoring'],
      price: 'From $799/month',
      category: 'Healthcare'
    }
  ];

  const allServices = [
    {
      category: 'AI & Machine Learning',
      services: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation and CRM optimization' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Automated regulatory compliance and risk management' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Intelligent workflow automation with multi-agent coordination' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance', description: 'AI-powered data classification and compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI-powered content generation and management' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine learning and data science solutions' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure automation and deployment solutions' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization and financial management' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations optimization' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Ultra-low latency edge processing' }
      ]
    },
    {
      category: 'Digital Solutions',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation and monitoring solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart devices and network solutions' },
        { name: 'Blockchain Enterprise', href: '/services/blockchain-enterprise-solutions', description: 'Enterprise blockchain solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence and analytics' }
      ]
    },
    {
      category: 'Micro SaaS Solutions',
      services: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', description: 'Prioritize deals with machine learning' },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', description: '24/7 on-site customer assistance' },
        { name: 'RAG Search', href: '/services/rag-search', description: 'AI answers with citations' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', description: 'Train, deploy, and monitor ML models' },
        { name: 'eCommerce Personalization', href: '/services/ecommerce-personalization', description: 'Product recommendations and search' }
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms deliver unprecedented insights and automation'
    },
    {
      icon: Zap,
      title: 'Real-Time Performance',
      description: 'Instant processing and response times for critical business operations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance certifications and data protection'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Solutions that grow with your business from startup to enterprise'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Innovative Services Showcase 2025 - Zion Tech Group"
        description="Discover our cutting-edge AI-powered services for 2025. From project management to cybersecurity, financial trading to healthcare analytics. Transform your business with the future of technology."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Innovative Services 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Business Technology</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our revolutionary AI-powered services designed to transform your business in 2025. 
              From intelligent automation to predictive analytics, we're building the future of enterprise technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </Link>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most innovative AI-powered solutions designed to revolutionize your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <Link 
                    to={service.href}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the advantages of cutting-edge AI technology designed for enterprise success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of AI-powered solutions across all business domains
            </p>
          </motion.div>

          <div className="space-y-12">
            {allServices.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 text-purple-400 mr-3" />
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.href}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                    >
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                      <div className="mt-4 flex items-center text-purple-400 text-sm font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
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
              Join thousands of businesses already experiencing the future of AI-powered technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
            
            <p className="text-gray-400 mt-6">
              Free consultation • Custom solutions • Enterprise support
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}