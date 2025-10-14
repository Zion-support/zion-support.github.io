import React from 'react'
import React from 'react';
import { Link  } from 'react-router-dom';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, BarChart, MessageSquare, Eye, Phone, Lock, Database, Cloud, Code, Settings, BarChart3, ShoppingCart, Car, Target, Globe, Cpu, Smartphone, FileText, Bot, Music, Video, CreditCard, Train, Home, Heart, GraduationCap  } from 'lucide-react';import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const ServicesPage: React.FC  = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Comprehensive AI solutions for every business need',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month',
      popular: true,
      link: '/ai-services'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation and workflow optimization',
      features: ['Workflow Automation', 'Smart Scheduling', 'Process Optimization', 'Task Management'],
      price: 'Starting at $2,000/month',
      popular: false,
      link: '/ai-automation'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights with AI',
      features: ['Predictive Analytics', 'Data Visualization', 'Business Intelligence', 'Real-time Insights'],
      price: 'Starting at $1,800/month',
      popular: false,
      link: '/ai-data-analytics'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: '24/7 AI-powered customer service solutions',
      features: ['Chatbots', 'Voice Assistants', 'Ticket Management', 'Sentiment Analysis'],
      price: 'Starting at $299/month',
      popular: true,
      link: '/ai-customer-support'
    },
    {
      icon: Target,
      title: 'AI Marketing',
      description: 'Revolutionary AI-powered marketing automation',
      features: ['Ad Optimization', 'Content Generation', 'Lead Scoring', 'Campaign Management'],
      price: 'Starting at $199/month',
      popular: true,
      link: '/ai-marketing'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision and image processing',
      features: ['Object Detection', 'Image Recognition', 'Quality Control', 'Facial Recognition'],
      price: 'Starting at $1,200/month',
      popular: false,
      link: '/ai-computer-vision'
    }
  ]
  const itServices = [
    {
      icon: Database,
      title: 'Database Management',
      description: 'Comprehensive database solutions and optimization',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Monitoring'],
      price: 'Starting at $1,000/month',
      popular: false,
      link: '/database-management'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for your business',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'Starting at $1,500/month',
      popular: true,
      link: '/cybersecurity'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Monitoring', 'Cost Optimization'],
      price: 'Starting at $800/month',
      popular: true,
      link: '/cloud-services'
    },
    {
      icon: Code,
      title: 'DevOps & CI/CD',
      description: 'Automated development and deployment pipelines',
      features: ['CI/CD Setup', 'Container Orchestration', 'Monitoring', 'Security Scanning'],
      price: 'Starting at $1,200/month',
      popular: false,
      link: '/devops-cicd'
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Complete system management and maintenance',
      features: ['Server Management', 'Performance Tuning', 'Updates', 'Troubleshooting'],
      price: 'Starting at $600/month',
      popular: false,
      link: '/system-administration'
    },
    {
      icon: Globe,
      title: 'Network Solutions',
      description: 'Enterprise network infrastructure and security',
      features: ['Network Design', 'Security Implementation', 'Monitoring', 'Optimization'],
      price: 'Starting at $900/month',
      popular: false,
      link: '/network-solutions'
    }
  ]
  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and analytics',
      features: ['Custom Dashboards', 'Real-time Data', 'Predictive Insights', 'Export Reports'],
      price: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Assistant',
      description: 'Complete e-commerce automation and optimization',
      features: ['Inventory Management', 'Order Processing', 'Customer Service', 'Analytics'],
      price: '$99/month',
      popular: true,
      link: '/ai-ecommerce-solutions'
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'No-code mobile app development with AI',
      features: ['Drag & Drop Builder', 'AI Code Generation', 'App Store Publishing', 'Analytics'],
      price: '$149/month',
      popular: false,
      link: '/ai-mobile-app-development'
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Intelligent document processing and management',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'],
      price: '$59/month',
      popular: true,
      link: '/ai-document-processing'
    },
    {
      icon: Bot,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for any platform',
      features: ['Visual Builder', 'Multi-platform', 'Analytics', 'Custom Training'],
      price: '$49/month',
      popular: true,
      link: '/ai-chatbot-builder'
    },
    {
      icon: Music,
      title: 'AI Content Creator',
      description: 'AI-powered content generation and optimization',
      features: ['Blog Writing', 'Social Media', 'Video Scripts', 'SEO Optimization'],
      price: '$39/month',
      popular: false,
      link: '/ai-content-generation'
    }
  ]
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% return on investment for our clients'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ certified professionals with 10+ years experience'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support with guaranteed response times'
    },
    {
      icon: Shield,
      title: 'Fast Delivery',
      description: 'Quick implementation with minimal downtime'
    }
  ]
  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Support Available', value: '24/7' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer 
        title="AI & IT Services - Zion Tech Group"
        description="Comprehensive AI and IT solutions including AI services, automation, cybersecurity, cloud services, and micro SAAS applications. Starting from $39/month."
        keywords="AI services, IT solutions, micro SAAS, automation, cybersecurity, cloud services, business intelligence"
      />
      <Navigation />
                {/* Hero Section */}
                <section className="pt-24 pb-16"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Our Services
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Comprehensive AI and IT solutions designed to transform your business operations and drive growth
  
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <$2 />
                href="tel:+13024640950"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (302) 464-0950
  
              <$2 />
                to="/contact"
                className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Free Consultation,
  
            </div>
                </div>
        </div>
                </section>
                {/* Stats Section */}
                <section className="py-16 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
                {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2"></div>
                {stat.value}
                <div className="text-gray-300 text-sm md:text-base"></div>
                {stat.label}
            ))}
      {/* AI Services Section */}
                <section className="py-24"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              AI Services,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Advanced artificial intelligence solutions to automate, optimize, and transform your business
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {aiServicesData.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4"></div>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular
                )}
                <div className="flex items-center mb-4"></div>
                  <service.icon className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white"></h3>
                {service.title}
                <p className="text-gray-300 mb-4"></p>
                {service.description}
                <ul className="space-y-2 mb-6"></ul>
                {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {feature}
                  ))}
                <div className="text-center"></div>
                  <div className="text-2xl font-bold text-cyan-400 mb-4"></div>
                {service.price}
                <$2 />
                    to={service.link}
                    className="bg-cyan-500 hover: bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block">
                    Learn More,
  
                </div>
                </div>
            ))}
      {/* IT Services Section */}
                <section className="py-24 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              IT Services
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Robust IT infrastructure and support services to keep your business running smoothly,
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {itServicesData.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4"></div>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular
                )}
                <div className="flex items-center mb-4"></div>
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white"></h3>
                {service.title}
                <p className="text-gray-300 mb-4"></p>
                {service.description}
                <ul className="space-y-2 mb-6"></ul>
                {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {feature}
                  ))}
                <div className="text-center"></div>
                  <div className="text-2xl font-bold text-blue-400 mb-4"></div>
                {service.price}
                <$2 />
                    to={service.link}
                    className="bg-blue-500 hover: bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block">
                    Learn More,
  
                </div>
                </div>
            ))}
      {/* Micro SAAS Services Section */}
                <section className="py-24"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Micro SAAS Solutions,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {microSaasServicesData.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {service.popular && (
                  <div className="flex items-center justify-center mb-4"></div>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular
                )}
                <div className="flex items-center mb-4"></div>
                  <service.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white"></h3>
                {service.title}
                <p className="text-gray-300 mb-4"></p>
                {service.description}
                <ul className="space-y-2 mb-6"></ul>
                {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                {feature}
                  ))}
                <div className="text-center"></div>
                  <div className="text-2xl font-bold text-purple-400 mb-4"></div>
                {service.price}
                <$2 />
                    to={service.link}
                    className="bg-purple-500 hover: bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block">
                    Learn More,
  
                </div>
                </div>
            ))}
      {/* Benefits Section */}
                <section className="py-24 bg-white/5"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We deliver exceptional results with proven expertise and cutting-edge technology,
  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <div className="bg-cyan-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"></div>
                  <benefit.icon className="h-8 w-8 text-cyan-400" />
                <h3 className="text-xl font-semibold text-white mb-2"></h3>
                {benefit.title}
                <p className="text-gray-300"></p>
                {benefit.description}
            ))}
      {/* CTA Section */}
                <section className="py-24"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl p-12 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Ready to Transform Your Business?
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"></p>
              Contact us today to discuss how our AI and IT solutions can help your organization thrive.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <$2 />
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors hover:bg-gray-100 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (302) 464-0950
  
              <$2 />
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Free Consultation
  
            </div>
                </div>
        </div>
                </section>

      <Footer />
    </div>
  ),
}
export default ServicesPage</Link>
                </a>
  </p>
                </Link>
  </span>
                </h2>
  </Link>
                </span>
  </p>
                </h2>
  </Link>
                </span>
  </p>
                </h2>
  </Link>
                </a>
  </p>
                </h1>
  </SEOOptimizer>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></div>
                </div></p>
                </p></p>
                </p></p>
                </p></h2>
                </h3></h3>
                </h3></h3>
                </ul></ul>
                </ul></li>
                </li></li>
                </section></section>
                </section></section>
                </section>
;