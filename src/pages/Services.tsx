import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Rocket, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Building, 
  TrendingUp, 
  Lightbulb, 
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
  Star as StarIcon
} from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'ai-analytics',
      name: 'AI & Analytics',
      description: 'Intelligent solutions that transform data into actionable insights',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      featured: true
    },
    {
      id: 'cloud-devops',
      name: 'Cloud & DevOps',
      description: 'Scalable infrastructure and automated development operations',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      featured: true
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions and regulatory compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      featured: true
    },
    {
      id: 'edge-iot',
      name: 'Edge & IoT',
      description: 'Next-generation edge computing and IoT solutions',
      icon: Zap,
      color: 'from-teal-500 to-green-600',
      featured: false
    },
    {
      id: 'quantum-emerging',
      name: 'Quantum & Emerging Tech',
      description: 'Cutting-edge quantum computing and emerging technologies',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-600',
      featured: false
    },
    {
      id: 'healthcare-specialized',
      name: 'Healthcare & Specialized',
      description: 'Industry-specific solutions for healthcare and specialized sectors',
      icon: Star,
      color: 'from-pink-500 to-rose-600',
      featured: false
    }
  ];

  const allServices = [
    // AI & Analytics Services
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'ai-analytics',
      description: 'Machine Learning & Data Science solutions that transform business data into actionable insights',
      icon: BrainIcon,
      color: 'from-indigo-500 to-purple-600',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Data Visualization', 'Real-time Insights'],
      benefits: ['30% improvement in decision-making', 'Automated data processing', 'Predictive capabilities'],
      featured: true
    },
    {
      id: 'ai-workflow-orchestrator',
      name: 'AI Workflow Orchestrator',
      category: 'ai-analytics',
      description: 'Intelligent Process Automation that streamlines complex business workflows',
      icon: Settings,
      color: 'from-purple-500 to-pink-600',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Performance Monitoring'],
      benefits: ['70% reduction in manual work', 'Improved accuracy', 'Faster processing'],
      featured: true
    },
    {
      id: 'ai-data-governance',
      name: 'AI Data Governance',
      category: 'ai-analytics',
      description: 'AI-Powered Data Protection and governance solutions',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      features: ['Data Classification', 'Privacy Protection', 'Compliance Monitoring', 'Risk Assessment'],
      benefits: ['Enhanced data security', 'Regulatory compliance', 'Reduced risk exposure'],
      featured: false
    },
    {
      id: 'ai-customer-success-platform',
      name: 'AI Customer Success Platform',
      category: 'ai-analytics',
      description: 'Proactive Customer Engagement and success management',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      features: ['Customer Analytics', 'Predictive Churn', 'Personalized Engagement', 'Success Metrics'],
      benefits: ['25% increase in customer satisfaction', 'Reduced churn rates', 'Improved retention'],
      featured: false
    },
    {
      id: 'ai-sales-copilot',
      name: 'AI Sales Copilot',
      category: 'ai-analytics',
      description: 'AI-powered sales automation and optimization',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Optimization', 'Performance Analytics'],
      benefits: ['40% increase in conversion rates', 'Faster sales cycles', 'Better lead quality'],
      featured: true
    },
    {
      id: 'ai-compliance-assistant',
      name: 'AI Compliance Assistant',
      category: 'ai-analytics',
      description: 'Regulatory compliance automation and monitoring',
      icon: CheckCircle,
      color: 'from-emerald-500 to-teal-600',
      features: ['Compliance Monitoring', 'Risk Assessment', 'Automated Reporting', 'Policy Management'],
      benefits: ['Reduced compliance costs', 'Automated monitoring', 'Real-time alerts'],
      featured: false
    },
    {
      id: 'ai-auto-email-responder',
      name: 'AI Auto Email Responder',
      category: 'ai-analytics',
      description: 'Faster replies with CRM logging and intelligent responses',
      icon: Mail,
      color: 'from-teal-500 to-green-600',
      features: ['Smart Responses', 'CRM Integration', 'Sentiment Analysis', 'Response Tracking'],
      benefits: ['80% faster response times', 'Improved customer experience', 'Better tracking'],
      featured: false
    },
    {
      id: 'llm-content-studio',
      name: 'LLM Content Studio',
      category: 'ai-analytics',
      description: 'On-brand AI content generation and management',
      icon: FileText,
      color: 'from-yellow-500 to-orange-600',
      features: ['Content Generation', 'Brand Consistency', 'Multi-format Support', 'Quality Control'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'Scalable production'],
      featured: false
    },

    // Cloud & DevOps Services
    {
      id: 'cloud-devops',
      name: 'Cloud DevOps',
      category: 'cloud-devops',
      description: 'Infrastructure & Automation solutions for modern applications',
      icon: CloudIcon,
      color: 'from-blue-500 to-cyan-600',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
      benefits: ['Faster deployments', 'Reduced downtime', 'Scalable infrastructure'],
      featured: true
    },
    {
      id: 'cloud-finops-optimizer',
      name: 'Cloud FinOps Optimizer',
      category: 'cloud-devops',
      description: 'Cloud cost optimization and financial operations management',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600',
      features: ['Cost Optimization', 'Resource Management', 'Budget Tracking', 'Performance Analysis'],
      benefits: ['30% cost reduction', 'Better resource utilization', 'Improved ROI'],
      featured: false
    },
    {
      id: 'finops-advisor',
      name: 'FinOps Advisor',
      category: 'cloud-devops',
      description: 'Financial operations consulting and optimization',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-600',
      features: ['Financial Planning', 'Cost Analysis', 'Optimization Strategies', 'ROI Measurement'],
      benefits: ['Strategic cost management', 'Improved financial planning', 'Better decision making'],
      featured: false
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      category: 'cloud-devops',
      description: 'End-to-end digital modernization and transformation',
      icon: Rocket,
      color: 'from-purple-500 to-pink-600',
      features: ['Strategy Development', 'Technology Assessment', 'Implementation', 'Change Management'],
      benefits: ['Modernized operations', 'Improved efficiency', 'Competitive advantage'],
      featured: true
    },
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      category: 'cloud-devops',
      description: 'Enterprise infrastructure design and management',
      icon: Building,
      color: 'from-slate-500 to-gray-600',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      benefits: ['Reliable infrastructure', 'Scalable solutions', 'Reduced maintenance'],
      featured: false
    },

    // Cybersecurity & Compliance Services
    {
      id: 'zero-trust-network-architecture',
      name: 'Zero Trust Network Architecture',
      category: 'cybersecurity',
      description: 'Advanced security framework for modern enterprise networks',
      icon: ShieldIcon,
      color: 'from-red-500 to-orange-600',
      features: ['Identity Verification', 'Access Control', 'Network Segmentation', 'Continuous Monitoring'],
      benefits: ['Enhanced security posture', 'Reduced attack surface', 'Compliance ready'],
      featured: true
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'cybersecurity',
      description: 'Advanced security solutions powered by artificial intelligence',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Security Analytics'],
      benefits: ['Proactive threat prevention', 'Faster incident response', 'Reduced false positives'],
      featured: true
    },

    // Edge & IoT Services
    {
      id: 'iot-edge',
      name: 'IoT & Edge Computing',
      category: 'edge-iot',
      description: 'Smart Devices & Networks for connected ecosystems',
      icon: ZapIcon,
      color: 'from-teal-500 to-green-600',
      features: ['Device Management', 'Edge Processing', 'Data Analytics', 'Network Security'],
      benefits: ['Real-time processing', 'Reduced latency', 'Scalable IoT solutions'],
      featured: false
    },
    {
      id: 'edge-computing-platform',
      name: 'Edge Computing Platform',
      category: 'edge-iot',
      description: 'Ultra-Low Latency Processing and edge intelligence',
      icon: Cpu,
      color: 'from-green-500 to-emerald-600',
      features: ['Edge Nodes', 'Data Processing', 'Load Balancing', 'Performance Optimization'],
      benefits: ['Minimal latency', 'Improved performance', 'Reduced bandwidth costs'],
      featured: false
    },
    {
      id: 'digital-twin',
      name: 'Digital Twin',
      category: 'edge-iot',
      description: 'Simulation & Monitoring for physical systems',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Analysis'],
      benefits: ['Reduced downtime', 'Optimized operations', 'Predictive insights'],
      featured: false
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      category: 'edge-iot',
      description: 'Business intelligence and data-driven insights',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-600',
      features: ['Data Processing', 'Visualization', 'Reporting', 'Predictive Analytics'],
      benefits: ['Better decision making', 'Improved efficiency', 'Competitive insights'],
      featured: false
    },

    // Quantum & Emerging Technology Services
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      category: 'quantum-emerging',
      description: 'Next-generation quantum computing solutions',
      icon: RocketIcon,
      color: 'from-yellow-500 to-orange-600',
      features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization', 'Research Support'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-ready technology'],
      featured: false
    },
    {
      id: 'quantum-ai-platform',
      name: 'Quantum AI Platform',
      category: 'quantum-emerging',
      description: 'Next-gen quantum computing with AI integration',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      features: ['Quantum ML', 'Hybrid Algorithms', 'AI Integration', 'Performance Optimization'],
      benefits: ['Quantum advantage', 'AI acceleration', 'Breakthrough capabilities'],
      featured: false
    },
    {
      id: 'blockchain-enterprise-solutions',
      name: 'Blockchain Enterprise Solutions',
      category: 'quantum-emerging',
      description: 'DeFi & Smart Contracts for enterprise applications',
      icon: Network,
      color: 'from-cyan-500 to-blue-600',
      features: ['Smart Contracts', 'DeFi Protocols', 'Tokenization', 'Security'],
      benefits: ['Transparent transactions', 'Reduced costs', 'New business models'],
      featured: false
    },
    {
      id: 'space-tech',
      name: 'Space Technology',
      category: 'quantum-emerging',
      description: 'Space tech solutions and satellite applications',
      icon: Globe,
      color: 'from-purple-500 to-pink-600',
      features: ['Satellite Systems', 'Space Analytics', 'Earth Observation', 'Communication'],
      benefits: ['Global coverage', 'Real-time data', 'Innovation leadership'],
      featured: false
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      category: 'quantum-emerging',
      description: 'Green IT Solutions and environmental technology',
      icon: StarIcon,
      color: 'from-green-500 to-emerald-600',
      features: ['Green Computing', 'Energy Efficiency', 'Carbon Reduction', 'Sustainable Tech'],
      benefits: ['Environmental impact', 'Cost savings', 'Regulatory compliance'],
      featured: false
    },

    // Healthcare & Specialized Services
    {
      id: 'healthcare-tech',
      name: 'Healthcare Technology',
      category: 'healthcare-specialized',
      description: 'AI Medicine & Diagnostics for healthcare innovation',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      features: ['Medical Imaging', 'Diagnostic AI', 'Patient Care', 'Clinical Research'],
      benefits: ['Improved diagnostics', 'Better patient outcomes', 'Reduced costs'],
      featured: false
    },
    {
      id: 'ai-healthcare-analytics',
      name: 'AI Healthcare Analytics',
      category: 'healthcare-specialized',
      description: 'Healthcare data insights and predictive analytics',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      features: ['Health Analytics', 'Predictive Medicine', 'Population Health', 'Clinical Insights'],
      benefits: ['Better patient care', 'Reduced readmissions', 'Improved outcomes'],
      featured: false
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      category: 'healthcare-specialized',
      description: 'Enterprise IT solutions and strategic consulting',
      icon: Building,
      color: 'from-slate-500 to-gray-600',
      features: ['Strategy Development', 'Technology Assessment', 'Implementation', 'Optimization'],
      benefits: ['Strategic guidance', 'Technology alignment', 'Improved efficiency'],
      featured: false
    },
    {
      id: 'green-it',
      name: 'Green IT',
      category: 'healthcare-specialized',
      description: 'Environmental solutions and sustainable technology',
      icon: Star,
      color: 'from-green-500 to-emerald-600',
      features: ['Energy Efficiency', 'Carbon Reduction', 'Sustainable Practices', 'Green Computing'],
      benefits: ['Environmental impact', 'Cost savings', 'Regulatory compliance'],
      featured: false
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const stats = [
    { label: 'Services Delivered', value: '500+', icon: CheckCircle, color: 'from-cyan-500 to-blue-600' },
    { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'from-yellow-500 to-orange-600' },
    { label: 'Years of Experience', value: '15+', icon: Award, color: 'from-purple-500 to-pink-600' },
    { label: 'Global Reach', value: '25+ Countries', icon: Globe, color: 'from-emerald-500 to-teal-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Comprehensive technology services including AI, Cloud, Cybersecurity, Edge Computing, and emerging technologies. Transform your business with our innovative solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions that drive innovation, enhance security, 
              and accelerate digital transformation for enterprises worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Case Studies
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

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive range of technology services organized by category.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
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
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full mb-4">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Service
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
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
                
                <button className="w-full py-2 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
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
              Let's discuss how our services can help you achieve your technology goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

