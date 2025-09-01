import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Rocket, 
  Shield, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Users, 
  Target, 
  TrendingUp, 
  Heart, 
  Building, 
  Car, 
  Factory, 
  City, 
  Leaf, 
  Atom, 
  Satellite, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Code,
  Server,
  Smartphone,
  Network,
  Eye,
  PenTool,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function InnovativeMicroSAASServices2025() {
  const microSAASServices = [
    {
      category: 'AI-Powered Business Solutions',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      services: [
        { 
          name: 'AI Business Intelligence Platform', 
          href: '/services/ai-business-intelligence-platform', 
          description: 'Advanced analytics and ML-powered insights',
          price: '$2,500',
          roi: '400%',
          features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'API integration']
        },
        { 
          name: 'AI Content Marketing Automation', 
          href: '/services/ai-content-marketing-automation', 
          description: 'Automated content creation and optimization',
          price: '$1,800',
          roi: '350%',
          features: ['Content generation', 'SEO optimization', 'Social media automation', 'Performance tracking']
        },
        { 
          name: 'AI Project Management Platform', 
          href: '/services/ai-project-management-platform', 
          description: 'Intelligent project planning and execution',
          price: '$2,200',
          roi: '380%',
          features: ['AI task prioritization', 'Resource optimization', 'Risk assessment', 'Progress tracking']
        }
      ]
    },
    {
      category: 'AI Healthcare & Life Sciences',
      icon: Heart,
      color: 'from-red-600 to-pink-600',
      services: [
        { 
          name: 'AI Healthcare Analytics Platform', 
          href: '/services/ai-healthcare-analytics-platform', 
          description: 'Medical AI and predictive diagnostics',
          price: '$3,500',
          roi: '450%',
          features: ['Patient data analysis', 'Disease prediction', 'Treatment optimization', 'HIPAA compliance']
        },
        { 
          name: 'AI Healthcare Predictive Analytics', 
          href: '/services/ai-healthcare-predictive-analytics', 
          description: 'Advanced healthcare forecasting and insights',
          price: '$4,200',
          roi: '500%',
          features: ['Population health analytics', 'Risk stratification', 'Clinical decision support', 'Real-time monitoring']
        }
      ]
    },
    {
      category: 'AI Financial Services',
      icon: DollarSign,
      color: 'from-green-600 to-emerald-600',
      services: [
        { 
          name: 'AI Financial Trading Platform', 
          href: '/services/ai-financial-trading-platform', 
          description: 'Algorithmic trading and risk management',
          price: '$5,000',
          roi: '600%',
          features: ['Algorithmic trading', 'Risk assessment', 'Portfolio optimization', 'Market analysis']
        },
        { 
          name: 'AI Financial Trading Risk Management', 
          href: '/services/ai-financial-trading-risk-management', 
          description: 'Advanced financial risk assessment and mitigation',
          price: '$4,800',
          roi: '550%',
          features: ['Real-time risk monitoring', 'Stress testing', 'Compliance reporting', 'Alert systems']
        }
      ]
    },
    {
      category: 'AI Legal & Compliance',
      icon: Shield,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { 
          name: 'AI Legal Research Platform', 
          href: '/services/ai-legal-research-platform', 
          description: 'Legal document analysis and research',
          price: '$2,800',
          roi: '420%',
          features: ['Document analysis', 'Case law research', 'Legal insights', 'Compliance tracking']
        },
        { 
          name: 'AI Legal Document Automation', 
          href: '/services/ai-legal-document-automation', 
          description: 'Automated legal document generation and review',
          price: '$3,200',
          roi: '480%',
          features: ['Document generation', 'Contract review', 'Legal templates', 'Version control']
        }
      ]
    },
    {
      category: 'AI HR & Talent Management',
      icon: Users,
      color: 'from-orange-600 to-red-600',
      services: [
        { 
          name: 'AI HR Platform', 
          href: '/services/ai-hr-platform', 
          description: 'Intelligent human resources management',
          price: '$2,600',
          roi: '400%',
          features: ['Recruitment automation', 'Performance analytics', 'Employee engagement', 'Talent development']
        },
        { 
          name: 'AI Customer Success Platform', 
          href: '/services/ai-customer-success-platform', 
          description: 'AI-powered customer experience optimization',
          price: '$2,400',
          roi: '380%',
          features: ['Customer insights', 'Success tracking', 'Automated outreach', 'Churn prevention']
        }
      ]
    },
    {
      category: 'AI Supply Chain & Operations',
      icon: Network,
      color: 'from-teal-600 to-green-600',
      services: [
        { 
          name: 'AI Supply Chain Optimization', 
          href: '/services/ai-supply-chain-optimization', 
          description: 'Intelligent supply chain management',
          price: '$3,800',
          roi: '520%',
          features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management']
        },
        { 
          name: 'AI Workflow Orchestrator', 
          href: '/services/ai-workflow-orchestrator', 
          description: 'Intelligent process automation and optimization',
          price: '$3,000',
          roi: '450%',
          features: ['Process automation', 'Workflow optimization', 'Integration management', 'Performance analytics']
        }
      ]
    }
  ];

  const benefits = [
    { icon: CheckCircle, title: 'Rapid Deployment', description: 'Deploy in 2-8 weeks vs. traditional 6-18 months' },
    { icon: DollarSign, title: 'Proven ROI', description: 'Average 400% return on investment within 12 months' },
    { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 compliant with advanced security features' },
    { icon: Users, title: 'Dedicated Support', description: '24/7 technical support and success management' },
    { icon: Zap, title: 'Scalable Architecture', description: 'Grows with your business needs' },
    { icon: Rocket, title: 'Innovation First', description: 'Cutting-edge AI and emerging technologies' }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics and patient care' },
    { name: 'Financial Services', icon: DollarSign, description: 'Intelligent trading and risk management' },
    { name: 'Legal Services', icon: Shield, description: 'Document automation and legal research' },
    { name: 'Manufacturing', icon: Factory, description: 'Smart manufacturing and supply chain' },
    { name: 'Retail & E-commerce', icon: ShoppingCart, description: 'Customer experience optimization' },
    { name: 'Government', icon: Building, description: 'Digital transformation and compliance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 bg-clip-text text-transparent mb-6">
              Innovative Micro SAAS Services 2025
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover Zion Tech Group's revolutionary AI-powered micro SaaS solutions that are transforming industries worldwide. 
              From predictive analytics to quantum computing, we deliver cutting-edge technology with proven ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Your Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI-Powered Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our innovative micro SaaS services combine cutting-edge AI technology with scalable architecture to deliver maximum business value.
            </p>
          </motion.div>

          <div className="space-y-12">
            {microSAASServices.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} mr-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.services.map((service) => (
                    <div
                      key={service.name}
                      className="bg-slate-700/30 rounded-xl p-6 border border-slate-600/50 hover:border-purple-400/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{service.name}</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-400">{service.price}</div>
                          <div className="text-sm text-gray-400">monthly</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">{service.roi}</div>
                          <div className="text-xs text-gray-400">ROI</div>
                        </div>
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-sm font-medium rounded-lg transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with proven ROI, competitive pricing, and world-class support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 inline-block">
                  <benefit.icon className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored micro SaaS solutions designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-purple-400/30 transition-all duration-300 text-center"
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4 inline-block">
                  <industry.icon className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-3xl p-12 border border-purple-400/20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our innovative micro SaaS solutions can drive growth, reduce costs, and give you a competitive advantage in 2025 and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold rounded-xl transition-all duration-300"
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