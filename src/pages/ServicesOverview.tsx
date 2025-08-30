import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Globe, 
  Heart, 
  Lock,
  Server,
  Cpu,
  Users,
  ShoppingCart,
  MessageCircle,
  BookOpen,
  DollarSign,
  Bot,
  Atom,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      services: [
        {
          name: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          description: 'Machine Learning & Data Science',
          features: ['Predictive Analytics', 'Data Visualization', 'ML Model Training', 'Real-time Insights']
        },
        {
          name: 'AI Workflow Orchestrator',
          href: '/services/ai-workflow-orchestrator',
          description: 'Intelligent Process Automation',
          features: ['Workflow Automation', 'Process Optimization', 'Smart Routing', 'Performance Monitoring']
        },
        {
          name: 'AI Data Governance',
          href: '/services/ai-data-governance',
          description: 'AI-Powered Data Protection',
          features: ['Data Classification', 'Privacy Compliance', 'Access Control', 'Audit Trails']
        },
        {
          name: 'AI Customer Success Platform',
          href: '/services/ai-customer-success-platform',
          description: 'Proactive Customer Engagement',
          features: ['Customer Insights', 'Predictive Churn', 'Success Metrics', 'Automated Outreach']
        }
      ]
    },
    {
      title: 'Cloud & DevOps Solutions',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Scalable cloud infrastructure and development operations',
      services: [
        {
          name: 'Cloud DevOps',
          href: '/services/cloud-devops',
          description: 'Infrastructure & Automation',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Auto-scaling']
        },
        {
          name: 'Cloud FinOps Optimizer',
          href: '/services/cloud-finops-optimizer',
          description: 'Cost optimization strategies',
          features: ['Cost Analysis', 'Resource Optimization', 'Budget Management', 'ROI Tracking']
        },
        {
          name: 'FinOps Advisor',
          href: '/services/finops-advisor',
          description: 'Financial operations optimization',
          features: ['Cost Allocation', 'Chargeback Models', 'Reserved Instances', 'Spot Instance Management']
        }
      ]
    },
    {
      title: 'Edge & IoT Services',
      icon: Server,
      color: 'from-green-600 to-emerald-600',
      description: 'Next-generation edge computing and IoT solutions',
      services: [
        {
          name: 'IoT & Edge Computing',
          href: '/services/iot-edge',
          description: 'Smart Devices & Networks',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Network Security']
        },
        {
          name: 'Edge Computing Platform',
          href: '/services/edge-computing-platform',
          description: 'Ultra-Low Latency Processing',
          features: ['Edge Nodes', 'Load Balancing', 'Data Synchronization', 'Performance Optimization']
        },
        {
          name: 'Digital Twin',
          href: '/services/digital-twin',
          description: 'Simulation & Monitoring',
          features: ['3D Modeling', 'Real-time Monitoring', 'Predictive Maintenance', 'Performance Simulation']
        }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      description: 'Advanced security and regulatory compliance solutions',
      services: [
        {
          name: 'AI Compliance Copilot',
          href: '/services/ai-compliance-copilot',
          description: 'AI-Powered Security',
          features: ['Compliance Monitoring', 'Risk Assessment', 'Policy Enforcement', 'Incident Response']
        },
        {
          name: 'Zero Trust Architecture',
          href: '/services/zero-trust-network-architecture',
          description: 'Advanced security framework',
          features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection']
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-orange-600 to-red-600',
      description: 'Scalable software-as-a-service solutions for niche markets',
      services: [
        {
          name: 'Micro SaaS Platform',
          href: '/services/micro-saas-solutions',
          description: 'Productized SaaS for niches',
          features: ['Custom Development', 'Scalable Architecture', 'Multi-tenancy', 'API Integration']
        },
        {
          name: 'AI Auto Email Responder',
          href: '/services/ai-auto-email-responder',
          description: 'Faster replies, CRM logging',
          features: ['Smart Responses', 'CRM Integration', 'Analytics Dashboard', 'Custom Templates']
        },
        {
          name: 'Customer Feedback Surveys',
          href: '/services/mobile-feedback-surveys',
          description: 'NPS/CSAT with AI insights',
          features: ['Survey Builder', 'Response Analysis', 'Sentiment Analysis', 'Actionable Insights']
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-pink-600 to-rose-600',
      description: 'Cutting-edge technologies shaping the future',
      services: [
        {
          name: 'Quantum Computing',
          href: '/services/quantum-computing-solutions',
          description: 'Next-generation computational power',
          features: ['Quantum Algorithms', 'Simulation Tools', 'Hardware Integration', 'Research Support']
        },
        {
          name: 'Blockchain Solutions',
          href: '/services/blockchain-enterprise-solutions',
          description: 'DeFi & Smart Contracts',
          features: ['Smart Contract Development', 'DeFi Protocols', 'Token Economics', 'Security Audits']
        },
        {
          name: 'Space Technology',
          href: '/services/space-tech',
          description: 'Satellite and space-based solutions',
          features: ['Satellite Data', 'Earth Observation', 'Space Analytics', 'IoT Integration']
        }
      ]
    }
  ];

  const featuredServices = [
    {
      name: 'AI Business Intelligence',
      href: '/services/ai-business-intelligence',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Transform your data into actionable insights with our advanced AI-powered business intelligence platform.',
      highlights: ['Machine Learning Models', 'Real-time Analytics', 'Predictive Insights', 'Custom Dashboards']
    },
    {
      name: 'Cloud Migration',
      href: '/services/cloud-devops',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Seamlessly migrate your infrastructure to the cloud with our proven migration methodology.',
      highlights: ['Assessment & Planning', 'Zero-downtime Migration', 'Cost Optimization', 'Security Implementation']
    },
    {
      name: 'AI Compliance Assistant',
      href: '/services/ai-compliance-assistant',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      description: 'Stay compliant with ever-changing regulations using our AI-powered compliance monitoring system.',
      highlights: ['Regulatory Updates', 'Automated Monitoring', 'Risk Assessment', 'Audit Preparation']
    }
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: 'Over 10 years of experience in AI, cloud, and digital transformation',
      metric: '500+'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Successfully delivered solutions to Fortune 500 companies worldwide',
      metric: '95%'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Pioneering cutting-edge technologies and methodologies',
      metric: '3x'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across North America, Europe, and Asia-Pacific',
      metric: '25+'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Comprehensive AI, cloud, and digital transformation solutions designed to accelerate your business growth 
              and drive innovation across every aspect of your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Started
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <DollarSign className="h-5 w-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our most popular and impactful solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6`}>
                <service.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.highlights.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                to={service.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
              >
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of services organized by category
            </p>
          </motion.div>

          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="border border-gray-200 rounded-xl p-8 bg-gray-50"
              >
                <div className="flex items-center mb-8">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${category.color} text-white mr-6`}>
                    <category.icon className="h-10 w-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                    <p className="text-lg text-gray-600 mt-2">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 hover:border-blue-300 group"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions that drive real results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-lg bg-blue-100 text-blue-600 mb-4">
                <item.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your business objectives and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <DollarSign className="h-5 w-5 mr-2" />
              Request Quote
            </Link>
          </div>
          <div className="mt-8 text-blue-100">
            <p>Our team will respond within 24 hours</p>
            <p>Free consultation and assessment included</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOverview;