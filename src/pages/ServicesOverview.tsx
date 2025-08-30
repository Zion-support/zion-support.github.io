import React from 'react';
import { motion   } from 'framer-motion';
import { Link   } from 'react-router-dom';
import { Brain, 
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
import { SEO   } from '../components/SEO';

export default function ServicesOverview(...args: any[]): any {
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
          description: 'Modern infrastructure design and implementation',
          price: 'From $8,000',
          features: ['Infrastructure design', 'Implementation', 'Ongoing support'],
          link: '/services/it-infrastructure',
          popular: false
        },
        {
          title: 'Digital Transformation',
          description: 'End-to-end digital transformation consulting and implementation',
          price: 'From $15,000',
          features: ['Strategy development', 'Technology selection', 'Change management'],
          link: '/services/digital-transformation',
          popular: false
        },
        {
          title: 'IT Consulting',
          description: 'Strategic IT consulting and technology advisory services',
          price: 'From $3,500',
          features: ['Technology assessment', 'Strategic planning', 'Vendor selection'],
          link: '/services/it-consulting',
          popular: false
        },
        {
          title: 'Zero Trust Network Architecture',
          description: 'Advanced security architecture implementation',
          price: 'From $12,000',
          features: ['Security assessment', 'Architecture design', 'Implementation'],
          link: '/services/zero-trust-network-architecture',
          popular: false
        },
        {
          title: 'Green IT Solutions',
          description: 'Sustainable technology solutions and energy optimization',
          price: 'From $6,000',
          features: ['Energy audit', 'Green technology', 'Sustainability reporting'],
          link: '/services/green-it',
          popular: false
        }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Specialized software-as-a-service solutions for specific business needs',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          title: 'Cloud FinOps Optimizer',
          description: 'Cloud cost optimization and financial operations management',
          price: 'From $1,999/month',
          features: ['Cost analysis', 'Optimization', 'Financial reporting'],
          link: '/services/cloud-finops-optimizer',
          popular: true
        },
        {
          title: 'AI Compliance Assistant',
          description: 'Automated compliance monitoring and reporting',
          price: 'From $1,500/month',
          features: ['Compliance monitoring', 'Automated reporting', 'Risk assessment'],
          link: '/services/ai-compliance-assistant',
          popular: false
        },
        {
          title: 'LLM Content Studio',
          description: 'AI-powered content creation and management platform',
          price: 'From $999/month',
          features: ['Content generation', 'AI editing', 'Multi-platform publishing'],
          link: '/services/llm-content-studio',
          popular: false
        },
        {
          title: 'Customer Feedback Surveys',
          description: 'Intelligent customer feedback collection and analysis',
          price: 'From $799/month',
          features: ['Survey creation', 'AI analysis', 'Insight generation'],
          link: '/services/mobile-feedback-surveys',
          popular: false
        },
        {
          title: 'FinOps Advisor',
          description: 'Financial operations optimization and cost management',
          price: 'From $2,500/month',
          features: ['Cost optimization', 'Financial planning', 'Performance analytics'],
          link: '/services/finops-advisor',
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

            <div className="grid md: anyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex)   => (
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

          <div className="grid md: anyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {emergingTechnologies.map((tech, index)   => (
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

          <div className="grid md: anyanygrid-cols-2 lg:grid-cols-4 gap-8">
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
            ].map((feature, index)   => (
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