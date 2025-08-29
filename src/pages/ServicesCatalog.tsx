import React from 'react';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Cpu, 
  Truck,
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
  Globe,
  Lock,
  Heart,
  Package,
  Search,
  PenTool,
  Eye,
  MousePointer,
  Monitor,
  Headphones,
  Clock,
  MapPin,
  AlertTriangle
} from 'lucide-react';

const ServicesCatalog: React.FC = () => {
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
          description: 'Automated regulatory compliance and risk management',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Trails'],
          href: '/services/ai-compliance-assistant',
          price: 'From $4,200',
          rating: 4.9,
          reviewCount: 156
        },
        {
          name: 'AI Content Optimizer',
          description: 'AI-powered content optimization that increases organic traffic by 40-60%',
          features: ['Content Analysis', 'SEO Optimization', 'Performance Tracking', 'A/B Testing'],
          href: '/services/ai-content-optimizer',
          price: 'From $299/month',
          rating: 4.9,
          reviewCount: 203
        },
        {
          name: 'LLM Content Studio',
          description: 'AI-powered content creation and management platform',
          features: ['Content Generation', 'Brand Voice Consistency', 'Multi-language Support', 'Content Analytics'],
          href: '/services/llm-content-studio',
          price: 'From $2,800',
          rating: 4.7,
          reviewCount: 94
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Modern infrastructure and automation solutions',
      color: 'from-blue-600 to-cyan-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'Streamline your development and operations with cloud-native solutions',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Auto-scaling'],
          href: '/services/cloud-devops',
          price: 'From $6,500',
          rating: 4.8,
          reviewCount: 178
        },
        {
          name: 'Cloud FinOps Optimizer',
          description: 'Optimize cloud costs and financial operations',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'Cost Forecasting'],
          href: '/services/cloud-finops-optimizer',
          price: 'From $4,800',
          rating: 4.9,
          reviewCount: 145
        },
        {
          name: 'Edge Computing Platform',
          description: 'Next-generation edge computing infrastructure',
          features: ['Edge Analytics', 'Real-time Processing', 'Low-latency Operations', 'Distributed Computing'],
          href: '/services/edge-computing-platform',
          price: 'From $8,200',
          rating: 4.7,
          reviewCount: 89
        }
      ]
    },
    {
      name: 'Supply Chain & Operations',
      icon: Truck,
      description: 'Streamline operations and logistics with AI-powered solutions',
      color: 'from-emerald-600 to-teal-600',
      services: [
        {
          name: 'AI Supply Chain Optimization',
          description: 'AI-powered supply chain optimization that reduces costs by 20-35%',
          features: ['Demand Forecasting', 'Inventory Optimization', 'Route Optimization', 'Risk Management'],
          href: '/services/ai-supply-chain-optimization',
          price: 'From $499/month',
          rating: 4.9,
          reviewCount: 167
        },
        {
          name: 'Returns Management SaaS',
          description: 'Streamlined returns and reverse logistics management',
          features: ['RMA Processing', 'Return Analytics', 'Customer Self-service', 'Integration APIs'],
          href: '/services/returns-management',
          price: 'From $199/month',
          rating: 4.8,
          reviewCount: 134
        },
        {
          name: 'IoT Edge Computing',
          description: 'Smart device networks and edge computing solutions',
          features: ['Device Management', 'Real-time Analytics', 'Edge AI', 'Security & Compliance'],
          href: '/services/iot-edge',
          price: 'From $5,500',
          rating: 4.7,
          reviewCount: 98
        }
      ]
    },
    {
      name: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-600 to-orange-600',
      services: [
        {
          name: 'AI Compliance Copilot',
          description: 'AI-powered compliance automation and risk management',
          features: ['Regulatory Monitoring', 'Risk Assessment', 'Compliance Reporting', 'Audit Automation'],
          href: '/services/ai-compliance-copilot',
          price: 'From $3,800',
          rating: 4.9,
          reviewCount: 189
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Modern security framework for enterprise networks',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
          href: '/services/zero-trust-network-architecture',
          price: 'From $7,500',
          rating: 4.8,
          reviewCount: 156
        },
        {
          name: 'GDPR & Cookie Compliance',
          description: 'Automated GDPR compliance and cookie management',
          features: ['Consent Management', 'Cookie Scanning', 'Audit Logs', 'Compliance Reports'],
          href: '/services/gdpr-cookie-compliance',
          price: 'From $149/month',
          rating: 4.9,
          reviewCount: 223
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Cpu,
      description: 'Future-ready cutting-edge technology solutions',
      color: 'from-indigo-600 to-purple-600',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum computing solutions',
          features: ['Quantum Algorithms', 'Quantum Simulation', 'Quantum Machine Learning', 'Research Support'],
          href: '/services/quantum-computing',
          price: 'From $12,000',
          rating: 4.6,
          reviewCount: 67
        },
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Distributed ledger technology for enterprise applications',
          features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity', 'Asset Tokenization'],
          href: '/services/blockchain-enterprise-solutions',
          price: 'From $8,500',
          rating: 4.7,
          reviewCount: 89
        },
        {
          name: 'Space Technology',
          description: 'Innovative space-based technology solutions',
          features: ['Satellite Communications', 'Space Analytics', 'Earth Observation', 'Space Data Processing'],
          href: '/services/space-tech',
          price: 'From $15,000',
          rating: 4.5,
          reviewCount: 45
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      icon: Zap,
      description: 'Specialized software-as-a-service solutions',
      color: 'from-yellow-600 to-orange-600',
      services: [
        {
          name: 'Website AI Chatbot',
          description: 'AI-powered chatbot that qualifies leads and books meetings 24/7',
          features: ['Lead Qualification', 'Meeting Scheduling', '24/7 Availability', 'Multi-language Support'],
          href: '/services/website-ai-chatbot',
          price: 'From $99/month',
          rating: 4.9,
          reviewCount: 312
        },
        {
          name: 'API Monitoring SaaS',
          description: 'Comprehensive API monitoring and status page management',
          features: ['Uptime Monitoring', 'Performance Metrics', 'Status Pages', 'Incident Management'],
          href: '/services/api-monitoring',
          price: 'From $79/month',
          rating: 4.8,
          reviewCount: 198
        },
        {
          name: 'AI Proofreading Studio',
          description: 'AI-powered content proofreading and optimization',
          features: ['Grammar Checking', 'Style Optimization', 'Brand Voice Consistency', 'Multi-language Support'],
          href: '/services/ai-proofreading-studio',
          price: 'From $129/month',
          rating: 4.9,
          reviewCount: 267
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <SEO 
        title="Services Catalog - Zion Tech Group"
        description="Comprehensive catalog of AI services, IT solutions, and micro SaaS products. Explore our innovative solutions with transparent pricing and clear outcomes."
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">Complete Service Catalog</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services Catalog
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Explore our comprehensive catalog of AI-powered services, enterprise IT solutions, and innovative micro SaaS products. Each solution is designed to deliver measurable results and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Get Custom Quote
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>

      {/* Service Categories */}
      <section className="container mx-auto px-4 py-16">
        {serviceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-full mb-6`}>
                <category.icon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                {category.name}
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (serviceIndex * 0.05) }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-slate-300">{service.rating}</span>
                      <span className="text-xs text-slate-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-300">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-slate-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <a
                    href={service.href}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform transition-transform"
                  >
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you choose the right solutions and implement them for maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesCatalog;

