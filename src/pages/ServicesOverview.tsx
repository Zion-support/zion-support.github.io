import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Globe,
  Lock,
  Heart,
  Leaf,
  Rocket,
  Cpu,
  Database,
  Network,
  Building,
  Award,
  BookOpen,
  Play,
  FileText,
  Settings,
  Key,
  Zap,
  Target,
  Lightbulb,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Eye,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const serviceCategories = [
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions that transform business operations and decision-making.',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        {
          name: 'AI Enterprise Orchestrator',
          description: 'Multi-agent AI coordination and workflow automation',
          href: '/services/ai-enterprise-orchestrator',
          featured: true
        },
        {
          name: 'AI Business Intelligence',
          description: 'Advanced analytics and predictive insights',
          href: '/services/ai-business-intelligence',
          featured: true
        },
        {
          name: 'AI Healthcare Predictive Analytics',
          description: 'Predictive diagnostics and patient care optimization',
          href: '/services/ai-healthcare-predictive-analytics',
          featured: true
        },
        {
          name: 'AI Financial Compliance Assistant',
          description: 'Automated regulatory compliance monitoring',
          href: '/services/ai-financial-compliance-assistant',
          featured: false
        },
        {
          name: 'AI Supply Chain Optimization',
          description: 'Intelligent supply chain management',
          href: '/services/ai-supply-chain-optimization',
          featured: false
        }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions protecting your digital assets from evolving cyber threats.',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Suite',
          description: 'AI-powered threat detection and response',
          href: '/services/ai-cybersecurity-suite',
          featured: true
        },
        {
          name: 'Zero Trust Network Architecture',
          description: 'Modern security framework implementation',
          href: '/services/zero-trust-network-architecture',
          featured: false
        },
        {
          name: 'Incident Response Platform',
          description: 'Rapid response and recovery solutions',
          href: '/services/incident-response-platform',
          featured: false
        }
      ]
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions and modern infrastructure management for digital transformation.',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      services: [
        {
          name: 'Cloud DevOps',
          description: 'End-to-end cloud infrastructure and automation',
          href: '/services/cloud-devops',
          featured: true
        },
        {
          name: 'Digital Twin Solutions',
          description: 'Real-time monitoring and predictive maintenance',
          href: '/services/digital-twin',
          featured: false
        },
        {
          name: 'IoT Edge Computing',
          description: 'Edge processing and IoT connectivity',
          href: '/services/iot-edge',
          featured: false
        }
      ]
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      description: 'Strategic guidance and implementation for modernizing your business operations and technology stack.',
      icon: Building,
      color: 'from-blue-500 to-indigo-600',
      services: [
        {
          name: 'Digital Transformation Consulting',
          description: 'Strategic consulting and process optimization',
          href: '/services/digital-transformation',
          featured: true
        },
        {
          name: 'IT Infrastructure Modernization',
          description: 'Legacy system modernization and optimization',
          href: '/services/it-infrastructure',
          featured: false
        }
      ]
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      description: 'Enterprise blockchain solutions for secure, transparent, and efficient business processes.',
      icon: Lock,
      color: 'from-yellow-500 to-orange-600',
      services: [
        {
          name: 'Blockchain Enterprise Solutions',
          description: 'Supply chain, identity, and smart contracts',
          href: '/services/blockchain-enterprise-solutions',
          featured: false
        }
      ]
    },
    {
      id: 'healthcare-tech',
      name: 'Healthcare Technology',
      description: 'Innovative technology solutions designed specifically for healthcare providers and organizations.',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      services: [
        {
          name: 'Healthcare Technology Solutions',
          description: 'Comprehensive healthcare technology platform',
          href: '/services/healthcare-tech',
          featured: true
        }
      ]
    },
    {
      id: 'financial-tech',
      name: 'Financial Technology',
      description: 'Advanced fintech solutions for financial institutions and businesses.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      services: [
        {
          name: 'FinOps Advisor',
          description: 'Cloud financial operations optimization',
          href: '/services/finops-advisor',
          featured: false
        }
      ]
    },
    {
      id: 'sustainability',
      name: 'Sustainability',
      description: 'Green technology solutions for reducing environmental impact and achieving sustainability goals.',
      icon: Leaf,
      color: 'from-green-500 to-teal-600',
      services: [
        {
          name: 'Sustainability Solutions',
          description: 'Green technology and environmental optimization',
          href: '/services/sustainability',
          featured: false
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SaaS Solutions',
      description: 'Scalable, focused software solutions that address specific business needs and challenges.',
      icon: Zap,
      color: 'from-indigo-500 to-purple-600',
      services: [
        {
          name: 'AI Lead Scoring',
          description: 'AI-powered lead qualification platform',
          href: '/services/ai-lead-scoring',
          featured: false
        },
        {
          name: 'Website AI Chatbot',
          description: 'Intelligent customer support chatbot',
          href: '/services/website-ai-chatbot',
          featured: false
        },
        {
          name: 'AI Content Optimizer Pro',
          description: 'SEO and content optimization platform',
          href: '/services/ai-content-optimizer-pro',
          featured: false
        }
      ]
    }
  ];

  const stats = [
    { label: 'Services Offered', value: '25+', icon: Settings },
    { label: 'Industries Served', value: '15+', icon: Building },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Years of Experience', value: '10+', icon: Award }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Specialized services designed for specific business challenges and industry requirements.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Cutting-edge technology and innovative approaches to solve complex business problems.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise in their respective technology domains.'
    },
    {
      icon: Clock,
      title: 'Rapid Implementation',
      description: 'Quick deployment and implementation to deliver value faster to your business.'
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description: 'Clear metrics and KPIs to track the success and ROI of our solutions.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards for all our solutions and services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of Zion Tech Group's technology services including AI, cybersecurity, cloud infrastructure, and digital transformation solutions." />
        <meta name="keywords" content="services overview, AI services, cybersecurity, cloud computing, digital transformation, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <Grid className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Services Overview
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of cutting-edge technology services designed to 
              transform your business and drive innovation across all industries.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Service Categories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-slate-300 leading-relaxed">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {category.services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-white">{service.name}</h4>
                        <p className="text-slate-400 text-sm">{service.description}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {service.featured && (
                          <span className="px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full">
                            Featured
                          </span>
                        )}
                        <Link
                          to={service.href}
                          className="inline-flex items-center px-3 py-1 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200 text-sm"
                        >
                          Learn More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={`/services#${category.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  View all {category.name} services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Service Comparison
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-800/50">
                    <th className="px-6 py-4 text-left text-white font-semibold">Service Category</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Best For</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Implementation Time</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">ROI Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">AI & Machine Learning</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300">Data-driven decision making, process automation</td>
                    <td className="px-6 py-4 text-slate-300">4-12 weeks</td>
                    <td className="px-6 py-4 text-slate-300">3-6 months</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Cybersecurity</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300">Threat protection, compliance, risk management</td>
                    <td className="px-6 py-4 text-slate-300">2-8 weeks</td>
                    <td className="px-6 py-4 text-slate-300">Immediate</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Cloud className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Cloud & Infrastructure</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300">Scalability, cost optimization, modernization</td>
                    <td className="px-6 py-4 text-slate-300">6-16 weeks</td>
                    <td className="px-6 py-4 text-slate-300">2-4 months</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                          <Building className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white font-medium">Digital Transformation</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300">Business process optimization, technology strategy</td>
                    <td className="px-6 py-4 text-slate-300">12-24 weeks</td>
                    <td className="px-6 py-4 text-slate-300">6-12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 mb-6">
              Explore our services in detail, get a custom quote, or schedule a consultation 
              with our expert team to find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services-catalog"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Browse Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;