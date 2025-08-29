import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Server, 
  Zap, 
  Shield, 
  Users, 
  Truck, 
  Workflow, 
  MessageSquare, 
  BarChart3, 
  Cloud, 
  Database, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Target,
  Cpu,
  Lock,
  Monitor,
  Activity,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function ServicesOverview() {
  const serviceCategories = [
    {
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          title: 'AI Workflow Automation',
          description: 'Intelligent process automation with AI-powered optimization',
          price: 'From $3,500',
          features: ['Process mapping', 'AI implementation', 'Ongoing optimization'],
          link: '/services/ai-workflow-automation',
          popular: true
        },
        {
          title: 'AI Customer Experience Platform',
          description: 'AI-powered personalization and customer journey optimization',
          price: 'From $4,500',
          features: ['CX assessment', 'Platform implementation', 'Performance optimization'],
          link: '/services/ai-customer-experience-platform',
          popular: false
        },
        {
          title: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management and logistics optimization',
          price: 'From $5,500',
          features: ['Supply chain assessment', 'AI platform implementation', 'Continuous optimization'],
          link: '/services/ai-supply-chain-optimization',
          popular: false
        },
        {
          title: 'AI Cybersecurity Suite',
          description: 'Advanced AI-powered threat detection and security automation',
          price: 'From $2,500/month',
          features: ['Threat intelligence', 'SOC services', 'Compliance monitoring'],
          link: '/services/ai-cybersecurity-suite',
          popular: true
        },
        {
          title: 'AI Business Intelligence',
          description: 'Next-generation BI with AI-powered insights and analytics',
          price: 'From $2,999/month',
          features: ['AI data analysis', 'Predictive analytics', 'Custom dashboards'],
          link: '/services/ai-business-intelligence',
          popular: false
        },
        {
          title: 'AI Sales Copilot',
          description: 'AI-powered sales automation and lead optimization',
          price: 'From $1,999/month',
          features: ['Lead scoring', 'Sales automation', 'Performance analytics'],
          link: '/services/ai-sales-copilot',
          popular: false
        },
        // NEW AI SERVICES ADDED
        {
          title: 'AI Legal Document Automation',
          description: 'Intelligent legal document generation and compliance automation',
          price: 'From $1,899/month',
          features: ['Contract generation', 'Compliance checking', 'Legal research automation'],
          link: '/services/ai-legal-document-automation',
          popular: true
        },
        {
          title: 'AI Healthcare Revenue Cycle',
          description: 'AI-powered healthcare billing and revenue optimization',
          price: 'From $2,499/month',
          features: ['Claim processing', 'Denial prevention', 'Revenue forecasting'],
          link: '/services/ai-healthcare-revenue-cycle',
          popular: false
        },
        {
          title: 'AI Real Estate Analytics',
          description: 'Advanced real estate investment analytics and market insights',
          price: 'From $1,599/month',
          features: ['Market analysis', 'Investment scoring', 'Portfolio optimization'],
          link: '/services/ai-real-estate-analytics',
          popular: false
        },
        {
          title: 'AI Manufacturing Quality Control',
          description: 'Computer vision and AI-powered quality control automation',
          price: 'From $3,299/month',
          features: ['Defect detection', 'Process optimization', 'Quality monitoring'],
          link: '/services/ai-manufacturing-quality-control',
          popular: true
        },
        {
          title: 'AI Financial Trading Algorithm',
          description: 'High-frequency trading algorithms with AI optimization',
          price: 'From $4,999/month',
          features: ['Market analysis', 'Risk management', 'Portfolio optimization'],
          link: '/services/ai-financial-trading-algorithm',
          popular: false
        },
        {
          title: 'AI Customer Service Automation',
          description: '24/7 AI-powered customer service and support automation',
          price: 'From $1,299/month',
          features: ['Chatbots', 'Ticket routing', 'Knowledge base integration'],
          link: '/services/ai-customer-service-automation',
          popular: true
        },
        {
          title: 'AI Marketing Automation',
          description: 'Intelligent marketing campaign optimization and personalization',
          price: 'From $1,899/month',
          features: ['Campaign optimization', 'Content personalization', 'ROI optimization'],
          link: '/services/ai-marketing-automation',
          popular: false
        },
        {
          title: 'AI HR Management',
          description: 'Intelligent HR automation and employee performance optimization',
          price: 'From $1,599/month',
          features: ['Recruitment automation', 'Performance analytics', 'Skills gap analysis'],
          link: '/services/ai-hr-management',
          popular: false
        },
        {
          title: 'AI Project Management',
          description: 'AI-powered project planning and resource optimization',
          price: 'From $1,299/month',
          features: ['Project planning', 'Risk prediction', 'Resource optimization'],
          link: '/services/ai-project-management',
          popular: false
        },
        {
          title: 'AI Financial Planning',
          description: 'Intelligent financial planning and investment optimization',
          price: 'From $899/month',
          features: ['Financial analysis', 'Investment strategies', 'Risk assessment'],
          link: '/services/ai-financial-planning',
          popular: false
        },
        {
          title: 'AI Energy Management',
          description: 'AI-powered energy consumption optimization and sustainability',
          price: 'From $2,199/month',
          features: ['Energy optimization', 'Predictive maintenance', 'Sustainability reporting'],
          link: '/services/ai-energy-management',
          popular: false
        },
        {
          title: 'AI Logistics Optimization',
          description: 'Intelligent logistics and route optimization automation',
          price: 'From $1,899/month',
          features: ['Route optimization', 'Fleet management', 'Delivery optimization'],
          link: '/services/ai-logistics-optimization',
          popular: false
        },
        {
          title: 'AI Cybersecurity Threat Detection',
          description: 'Advanced AI-powered threat detection and incident response',
          price: 'From $3,999/month',
          features: ['Threat detection', 'Incident response', 'Compliance monitoring'],
          link: '/services/ai-cybersecurity-threat-detection',
          popular: true
        },
        {
          title: 'AI Content Creation',
          description: 'AI-powered content generation and brand consistency',
          price: 'From $799/month',
          features: ['Content generation', 'Brand voice consistency', 'SEO optimization'],
          link: '/services/ai-content-creation',
          popular: false
        },
        {
          title: 'AI Data Analytics',
          description: 'Advanced AI-powered data analytics and business intelligence',
          price: 'From $2,499/month',
          features: ['Data processing', 'Predictive modeling', 'Custom dashboards'],
          link: '/services/ai-data-analytics',
          popular: false
        }
      ]
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure and digital transformation solutions',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          title: 'Cloud DevOps',
          description: 'Cloud migration and DevOps transformation services',
          price: 'From $5,000',
          features: ['Cloud migration', 'DevOps implementation', '24/7 managed services'],
          link: '/services/cloud-devops',
          popular: true
        },
        {
          title: 'IT Infrastructure',
          description: 'Enterprise infrastructure design and implementation',
          price: 'From $8,000',
          features: ['Infrastructure design', 'Implementation', 'Ongoing support'],
          link: '/services/it-infrastructure',
          popular: false
        },
        {
          title: 'Digital Transformation',
          description: 'End-to-end digital transformation consulting and implementation',
          price: 'From $15,000',
          features: ['Strategy development', 'Technology selection', 'Implementation support'],
          link: '/services/digital-transformation',
          popular: true
        },
        {
          title: 'IT Consulting',
          description: 'Strategic IT consulting and technology advisory services',
          price: 'From $2,500/month',
          features: ['Technology assessment', 'Strategy development', 'Implementation guidance'],
          link: '/services/it-consulting',
          popular: false
        },
        {
          title: 'Data Analytics',
          description: 'Business intelligence and data analytics solutions',
          price: 'From $3,500',
          features: ['Data assessment', 'Analytics implementation', 'Dashboard creation'],
          link: '/services/data-analytics',
          popular: false
        }
      ]
    },
    {
      name: 'Emerging Technologies',
      description: 'Cutting-edge quantum computing, blockchain, and space technology solutions',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      services: [
        {
          title: 'Quantum Computing Solutions',
          description: 'Next-generation quantum computing and quantum AI platforms',
          price: 'From $8,000/month',
          features: ['Quantum algorithm development', 'Quantum AI integration', 'Performance optimization'],
          link: '/services/quantum-computing-solutions',
          popular: true
        },
        {
          title: 'Quantum AI Platform',
          description: 'Revolutionary quantum AI platform for complex problem solving',
          price: 'From $12,000/month',
          features: ['Quantum AI algorithms', 'Hybrid quantum-classical computing', 'Custom development'],
          link: '/services/quantum-ai-platform',
          popular: false
        },
        {
          title: 'Blockchain Enterprise Solutions',
          description: 'Enterprise blockchain and DeFi solutions',
          price: 'From $5,000',
          features: ['Blockchain development', 'Smart contract implementation', 'DeFi integration'],
          link: '/services/blockchain-enterprise-solutions',
          popular: false
        },
        {
          title: 'Space Technology',
          description: 'AI-powered space technology and satellite operations',
          price: 'From $15,000/month',
          features: ['Satellite operations', 'Space exploration', 'Space analytics'],
          link: '/services/space-tech',
          popular: false
        }
      ]
    },
    {
      name: 'Specialized Solutions',
      description: 'Industry-specific solutions for healthcare, sustainability, and specialized needs',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      services: [
        {
          title: 'Healthcare Technology',
          description: 'AI-powered healthcare solutions and medical technology',
          price: 'From $6,000',
          features: ['Medical AI implementation', 'Healthcare analytics', 'Compliance management'],
          link: '/services/healthcare-tech',
          popular: true
        },
        {
          title: 'Sustainability Solutions',
          description: 'Green IT and sustainability technology solutions',
          price: 'From $4,500',
          features: ['Sustainability assessment', 'Green technology implementation', 'Environmental monitoring'],
          link: '/services/sustainability',
          popular: false
        },
        {
          title: 'Micro SaaS Solutions',
          description: 'Productized SaaS solutions for specific business niches',
          price: 'From $2,500',
          features: ['SaaS development', 'Productization', 'Go-to-market strategy'],
          link: '/services/micro-saas-solutions',
          popular: false
        },
        {
          title: 'AI Auto Email Responder',
          description: 'Intelligent email automation and response management',
          price: 'From $299/month',
          features: ['Email automation', 'Response generation', 'CRM integration'],
          link: '/services/ai-auto-email-responder',
          popular: true
        },
        {
          title: 'Customer Feedback Surveys',
          description: 'AI-powered customer feedback and survey automation',
          price: 'From $199/month',
          features: ['Survey automation', 'AI insights', 'Performance analytics'],
          link: '/services/mobile-feedback-surveys',
          popular: false
        }
      ]
    },
    {
      name: 'Edge & IoT Services',
      description: 'Advanced edge computing and Internet of Things solutions',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      services: [
        {
          title: 'IoT & Edge Computing',
          description: 'Comprehensive IoT and edge computing solutions',
          price: 'From $4,500',
          features: ['IoT implementation', 'Edge computing setup', 'Device management'],
          link: '/services/iot-edge',
          popular: false
        },
        {
          title: 'Edge Computing Platform',
          description: 'Ultra-low latency edge computing platform',
          price: 'From $6,500/month',
          features: ['Edge platform setup', 'Performance optimization', 'Scalability management'],
          link: '/services/edge-computing-platform',
          popular: true
        },
        {
          title: 'Digital Twin',
          description: 'Digital twin technology for simulation and monitoring',
          price: 'From $8,500',
          features: ['Digital twin creation', 'Real-time monitoring', 'Predictive analytics'],
          link: '/services/digital-twin',
          popular: false
        }
      ]
    }
  ];

  const emergingTechnologies = [
    {
      title: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions and consulting',
      price: 'From $25,000',
      link: '/services/quantum-computing',
      icon: Cpu
    },
    {
      title: 'Space Technology',
      description: 'Innovative space technology solutions and satellite systems',
      price: 'From $50,000',
      link: '/services/space-tech',
      icon: Globe
    },
    {
      title: 'IoT Edge Computing',
      description: 'Edge computing solutions for IoT and real-time processing',
      price: 'From $15,000',
      link: '/services/iot-edge',
      icon: Activity
    },
    {
      title: 'Blockchain Solutions',
      description: 'Enterprise blockchain implementation and consulting',
      price: 'From $20,000',
      link: '/services/blockchain-enterprise-solutions',
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services Overview - Zion Tech Group"
        description="Comprehensive overview of our AI, IT, and micro-SaaS services. Transform your business with cutting-edge technology solutions and expert consulting."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive technology solutions that drive innovation, efficiency, and growth across your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 1 ? 'bg-gradient-to-r from-slate-800/50 to-slate-700/50' : ''}`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                {category.name}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                  className={`bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border ${
                    service.popular ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-slate-600'
                  } relative`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Emerging Technologies */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Emerging Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with cutting-edge technology solutions that define the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergingTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{tech.price}</div>
                <Link 
                  to={tech.link}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-sm"
                >
                  Explore
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of working with technology experts who understand your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Expert Team',
                description: 'Certified professionals with years of industry experience'
              },
              {
                icon: Target,
                title: 'Proven Results',
                description: 'Track record of successful implementations and measurable ROI'
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the right solutions and implement them successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}