import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Zap, 
  Users, 
  Globe, 
  Cpu, 
  Lock, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Code, 
  Database, 
  Network, 
  Smartphone, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  ShoppingCart, 
  Headphones, 
  Mail, 
  Search, 
  Clock, 
  DollarSign, 
  Target, 
  Workflow, 
  Atom, 
  Truck, 
  Factory, 
  Leaf, 
  Satellite, 
  Building, 
  Gauge, 
  MessageCircle, 
  Calendar, 
  Package, 
  CreditCard, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Cutting-edge AI solutions to transform your business',
      services: [
        {
          name: 'AI Content Creation Suite',
          description: 'Automated content generation for blogs, social media, and marketing materials',
          price: 'From $199/month',
          features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
          marketPrice: '$150-300/month',
          href: '/services/ai-content-creation-suite'
        },
        {
          name: 'AI Customer Support Automation',
          description: 'Intelligent chatbots and automated customer service solutions',
          price: 'From $299/month',
          features: ['24/7 Chatbot', 'Ticket Routing', 'Sentiment Analysis', 'Multi-language Support'],
          marketPrice: '$200-500/month',
          href: '/services/ai-customer-support-automation'
        },
        {
          name: 'AI Marketing Automation',
          description: 'Smart marketing campaigns with predictive analytics and personalization',
          price: 'From $399/month',
          features: ['Campaign Automation', 'Lead Scoring', 'Personalization', 'ROI Tracking'],
          marketPrice: '$300-600/month',
          href: '/services/ai-marketing-automation'
        },
        {
          name: 'AI Financial Analytics',
          description: 'Advanced financial modeling and risk assessment using machine learning',
          price: 'From $599/month',
          features: ['Risk Assessment', 'Fraud Detection', 'Investment Analysis', 'Compliance Monitoring'],
          marketPrice: '$500-1000/month',
          href: '/services/ai-financial-analytics'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-green-500 to-teal-600',
      description: 'Focused, powerful tools for specific business needs',
      services: [
        {
          name: 'Affiliate Marketing Tracking',
          description: 'Comprehensive affiliate program management and tracking platform',
          price: 'From $99/month',
          features: ['Referral Tracking', 'Commission Management', 'Performance Analytics', 'Custom Links'],
          marketPrice: '$50-200/month',
          href: '/services/affiliate-tracking'
        },
        {
          name: 'Event Management Dashboard',
          description: 'Complete event planning and management solution',
          price: 'From $149/month',
          features: ['Ticket Sales', 'Guest Management', 'Event Analytics', 'Payment Processing'],
          marketPrice: '$100-300/month',
          href: '/services/event-management-dashboard'
        },
        {
          name: 'Helpdesk Platform',
          description: 'Streamlined customer support and ticket management system',
          price: 'From $79/month',
          features: ['Ticket Management', 'Knowledge Base', 'Team Collaboration', 'Performance Metrics'],
          marketPrice: '$50-150/month',
          href: '/services/helpdesk-platform'
        },
        {
          name: 'Email Automation Sequencer',
          description: 'Advanced email marketing automation with behavioral triggers',
          price: 'From $129/month',
          features: ['Drip Campaigns', 'Behavioral Triggers', 'A/B Testing', 'Analytics Dashboard'],
          marketPrice: '$100-250/month',
          href: '/services/email-sequencer'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services & Solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive IT infrastructure and cloud solutions',
      services: [
        {
          name: 'Cloud Migration Services',
          description: 'Seamless migration to cloud platforms with zero downtime',
          price: 'From $2,999/project',
          features: ['Zero Downtime Migration', 'Data Security', 'Performance Optimization', '24/7 Support'],
          marketPrice: '$2,000-5,000/project',
          href: '/services/cloud-migration'
        },
        {
          name: 'DevOps & CI/CD Implementation',
          description: 'Automated development and deployment pipelines',
          price: 'From $1,999/month',
          features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Integration'],
          marketPrice: '$1,500-3,000/month',
          href: '/services/devops-cicd'
        },
        {
          name: 'Cybersecurity Assessment',
          description: 'Comprehensive security audit and vulnerability assessment',
          price: 'From $1,499/assessment',
          features: ['Vulnerability Scanning', 'Penetration Testing', 'Security Audit', 'Compliance Check'],
          marketPrice: '$1,000-2,500/assessment',
          href: '/services/cybersecurity-assessment'
        },
        {
          name: 'IT Infrastructure Management',
          description: 'Complete IT infrastructure monitoring and management',
          price: 'From $999/month',
          features: ['24/7 Monitoring', 'Proactive Maintenance', 'Performance Optimization', 'Incident Response'],
          marketPrice: '$800-1,500/month',
          href: '/services/it-infrastructure-management'
        }
      ]
    },
    {
      id: 'emerging-tech',
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-600',
      description: 'Next-generation technology solutions for the future',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum computing services for complex problem solving',
          price: 'From $4,999/month',
          features: ['Quantum Algorithms', 'Cloud Access', 'Expert Consultation', 'Custom Development'],
          marketPrice: '$3,000-8,000/month',
          href: '/services/quantum-computing'
        },
        {
          name: 'IoT Edge Computing',
          description: 'Internet of Things solutions with edge computing capabilities',
          price: 'From $1,999/month',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Scalable Architecture'],
          marketPrice: '$1,500-3,000/month',
          href: '/services/iot-edge-computing'
        },
        {
          name: 'Blockchain Development',
          description: 'Custom blockchain solutions and smart contract development',
          price: 'From $2,999/project',
          features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'Security Audit'],
          marketPrice: '$2,000-5,000/project',
          href: '/services/blockchain-development'
        }
      ]
    }
  ];

  return (
    <>
      <SEO title="Services - Zion Tech Group" />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional IT & AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of AI, micro SaaS, and IT services. 
                From cutting-edge AI solutions to robust infrastructure management, we deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing" 
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-600">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <Smartphone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-600">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Categories */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.id} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} mb-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900">{service.name}</h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
                          <div className="text-sm text-gray-500">Market: {service.marketPrice}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                          to={service.href}
                          className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                        >
                          Learn More
                        </Link>
                        <Link 
                          to="/contact"
                          className="flex-1 border border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and discover how our services can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
