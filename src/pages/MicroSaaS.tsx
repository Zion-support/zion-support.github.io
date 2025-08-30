import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Rocket, 
  Zap, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Award, 
  Globe, 
  Building, 
  Settings, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Eye, 
  Heart, 
  Palette, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Mail, 
  Calendar,
  Clock,
  DollarSign,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Target as TargetIcon,
  UserCheck,
  MessageCircle,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  Server,
  Monitor,
  Smartphone,
  Laptop,
  Router,
  HardDrive,
  Wifi,
  Key,
  FileCode,
  GitBranch,
  Workflow,
  Layers,
  Box,
  Package,
  Truck,
  Factory,
  Home,
  Office,
  Store,
  School,
  Hospital,
  Bank,
  ShoppingCart,
  CreditCard,
  PieChart as PieChartIcon,
  Users as UsersIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Zap as ZapIcon2,
  Brain as BrainIcon2,
  Cloud as CloudIcon2,
  Shield as ShieldIcon2,
  Rocket as RocketIcon2,
  Star as StarIcon2
} from 'lucide-react';

export default function MicroSaaS() {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaaSServices = [
    {
      id: 'ai-auto-email-responder',
      name: 'AI Auto Email Responder',
      description: 'Intelligent email automation with CRM integration and smart responses',
      icon: Mail,
      color: 'from-cyan-500 to-blue-600',
      features: ['Smart Responses', 'CRM Integration', 'Sentiment Analysis', 'Response Tracking'],
      benefits: ['80% faster response times', 'Improved customer experience', 'Better tracking'],
      useCases: ['Customer Support', 'Sales Follow-up', 'Inquiry Management', 'Lead Nurturing'],
      pricing: 'From $2,800/month',
      rating: 4.7,
      reviewCount: 298,
      featured: true,
      category: 'Communication'
    },
    {
      id: 'ai-customer-success-platform',
      name: 'AI Customer Success Platform',
      description: 'Proactive customer engagement and success management',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      features: ['Customer Analytics', 'Predictive Churn', 'Personalized Engagement', 'Success Metrics'],
      benefits: ['25% increase in customer satisfaction', 'Reduced churn rates', 'Improved retention'],
      useCases: ['Customer Onboarding', 'Success Planning', 'Churn Prevention', 'Expansion Management'],
      pricing: 'From $2,500/month',
      rating: 4.7,
      reviewCount: 203,
      featured: true,
      category: 'Customer Success'
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      description: 'AI-powered sales automation and optimization',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Optimization', 'Performance Analytics'],
      benefits: ['40% increase in conversion rates', 'Faster sales cycles', 'Better lead quality'],
      useCases: ['Lead Generation', 'Sales Forecasting', 'Pipeline Management', 'Performance Tracking'],
      pricing: 'From $3,500/month',
      rating: 4.8,
      reviewCount: 167,
      featured: true,
      category: 'Sales'
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio',
      description: 'On-brand AI content generation and management',
      icon: FileText,
      color: 'from-yellow-500 to-orange-600',
      features: ['Content Generation', 'Brand Consistency', 'Multi-format Support', 'Quality Control'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'Scalable production'],
      useCases: ['Marketing Content', 'Blog Writing', 'Social Media', 'Product Descriptions'],
      pricing: 'From $2,500/month',
      rating: 4.6,
      reviewCount: 445,
      featured: false,
      category: 'Content'
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      description: 'Regulatory compliance automation and monitoring',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Policy Management'],
      benefits: ['Reduced compliance costs', 'Automated monitoring', 'Real-time alerts'],
      useCases: ['Regulatory Compliance', 'Risk Assessment', 'Audit Preparation', 'Policy Enforcement'],
      pricing: 'From $7,500/month',
      rating: 4.9,
      reviewCount: 98,
      featured: false,
      category: 'Compliance'
    },
    {
      id: 'ai-workflow-orchestrator',
      name: 'AI Workflow Orchestrator',
      description: 'Intelligent process automation with multi-agent coordination',
      icon: Workflow,
      color: 'from-purple-500 to-pink-600',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Performance Monitoring'],
      benefits: ['70% reduction in manual work', 'Improved accuracy', 'Faster processing'],
      useCases: ['Supply Chain Management', 'HR Processes', 'Customer Service', 'Quality Control'],
      pricing: 'From $3,500/month',
      rating: 4.8,
      reviewCount: 89,
      featured: false,
      category: 'Automation'
    },
    {
      id: 'ai-data-governance',
      name: 'AI Data Governance',
      description: 'AI-powered data protection and governance solutions',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      features: ['Data Classification', 'Privacy Protection', 'Compliance Monitoring', 'Risk Assessment'],
      benefits: ['Enhanced data security', 'Regulatory compliance', 'Reduced risk exposure'],
      useCases: ['GDPR Compliance', 'Data Privacy', 'Audit Preparation', 'Risk Management'],
      pricing: 'From $4,500/month',
      rating: 4.9,
      reviewCount: 156,
      featured: false,
      category: 'Data'
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Machine learning and data science solutions for business insights',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'Real-time Insights'],
      benefits: ['30% improvement in decision-making', 'Automated data processing', 'Predictive capabilities'],
      useCases: ['Financial Forecasting', 'Customer Segmentation', 'Risk Assessment', 'Performance Optimization'],
      pricing: 'From $5,000/month',
      rating: 4.9,
      reviewCount: 127,
      featured: false,
      category: 'Analytics'
    }
  ];

  const categories = [
    {
      name: 'Communication',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-600',
      description: 'AI-powered communication and engagement tools',
      serviceCount: 2
    },
    {
      name: 'Customer Success',
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      description: 'Customer engagement and success management solutions',
      serviceCount: 1
    },
    {
      name: 'Sales',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      description: 'Sales automation and optimization tools',
      serviceCount: 1
    },
    {
      name: 'Content',
      icon: FileText,
      color: 'from-yellow-500 to-orange-600',
      description: 'AI content generation and management platforms',
      serviceCount: 1
    },
    {
      name: 'Compliance',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      description: 'Regulatory compliance and risk management',
      serviceCount: 1
    },
    {
      name: 'Automation',
      icon: Workflow,
      color: 'from-purple-500 to-pink-600',
      description: 'Process automation and workflow optimization',
      serviceCount: 1
    },
    {
      name: 'Data',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      description: 'Data governance and management solutions',
      serviceCount: 1
    },
    {
      name: 'Analytics',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      description: 'Business intelligence and analytics platforms',
      serviceCount: 1
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months with our pre-built solutions',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible, scalable architecture',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance and advanced encryption',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Proven ROI',
      description: 'Measurable business outcomes with clear ROI and success metrics',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Globe,
      title: 'Global Support',
      description: '24/7 support across multiple time zones with local expertise',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Continuous Innovation',
      description: 'Regular updates and new features based on customer feedback',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const stats = [
    { label: 'Micro SaaS Solutions', value: '25+', icon: Rocket, color: 'from-blue-500 to-cyan-600' },
    { label: 'Active Users', value: '50,000+', icon: Users, color: 'from-indigo-500 to-purple-600' },
    { label: 'Client Satisfaction', value: '97%', icon: Star, color: 'from-yellow-500 to-orange-600' },
    { label: 'Implementation Time', value: '< 7 days', icon: Clock, color: 'from-green-500 to-emerald-600' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Rocket },
    { id: 'categories', label: 'Categories', icon: Target },
    { id: 'benefits', label: 'Benefits', icon: Star }
  ];

  const filteredServices = activeTab === 'overview' 
    ? microSaaSServices 
    : microSaaSServices.filter(service => service.category.toLowerCase() === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Transform your business with our productized micro SaaS solutions. AI-powered tools for communication, sales, customer success, and more."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our productized micro SaaS solutions. 
              AI-powered tools that deliver immediate value and scale with your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Micro SaaS Portfolio
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready-to-deploy AI-powered solutions that solve specific business challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {microSaaSServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-slate-800/50 rounded-2xl p-6 border transition-all duration-300 hover:border-cyan-400/50 ${
                      service.featured ? 'border-cyan-400/30' : 'border-slate-700/50'
                    }`}
                  >
                    {service.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-xs rounded-full mb-4">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Solution
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="inline-flex items-center px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full mb-3">
                      {service.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">({service.reviewCount})</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Categories Tab */}
          {activeTab === 'categories' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Solution Categories
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Explore our micro SaaS solutions organized by business function and use case.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                    
                    <div className="inline-flex items-center px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full">
                      {category.serviceCount} Solution{category.serviceCount !== 1 ? 's' : ''}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Why Choose Micro SaaS?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover the advantages of our productized micro SaaS approach.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Get started with our micro SaaS solutions and see results in days, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

