import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Brain, Server, Cloud, Shield, Database, Network, Zap, Users, TrendingUp, BarChart3, MessageSquare, Eye, Leaf, CreditCard, Heart, Truck, ShoppingCart, Phone, Mail, MapPin, Star, Clock, DollarSign, Globe, Bot, Cpu, Settings, Monitor, HardDrive, Wifi, Lock, ArrowRight, CheckCircle, Zap as ZapIcon, Target, FileText, MessageCircle, BarChart, Shield as ShieldIcon, Cloud as CloudIcon, Database as DatabaseIcon, Network as NetworkIcon, HardDrive as HardDriveIcon, MessageSquare as MessageSquareIcon, Database as DatabaseIcon2 } from 'lucide-react';

const ServicesHubPage: React.FC = () => {
  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Services',
      description: 'Affordable, focused software solutions designed specifically for small businesses, startups, and entrepreneurs',
      icon: <ZapIcon className="w-12 h-12" />,
      color: 'from-green-400 to-emerald-600',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      services: 15,
      startingPrice: '$15',
      features: ['Task Management', 'Financial Tools', 'Marketing Automation', 'CRM Solutions', 'Analytics Platforms'],
      benefits: ['Cost-effective', 'Easy to implement', 'Scalable solutions', 'Quick ROI', 'No long-term contracts'],
      route: '/micro-saas-services'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions that transform businesses through automation, insights, and intelligent decision-making',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      services: 8,
      startingPrice: '$35',
      features: ['Content Generation', 'Customer Support Bots', 'Sales Intelligence', 'Computer Vision', 'Process Automation'],
      benefits: ['10x productivity increase', 'Automated workflows', 'Predictive insights', '24/7 availability', 'Scalable AI'],
      route: '/ai-services'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure, security, and technical solutions designed to modernize and optimize your business technology operations',
      icon: <Server className="w-12 h-12" />,
      color: 'from-blue-400 to-cyan-600',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      services: 8,
      startingPrice: '$75',
      features: ['Cloud Infrastructure', 'Cybersecurity', 'Network Monitoring', 'Data Backup', 'DevOps Automation'],
      benefits: ['Enterprise-grade reliability', 'Enhanced security', 'Cost optimization', '24/7 monitoring', 'Scalable infrastructure'],
      route: '/it-services'
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technology',
      description: 'Next-generation technology solutions including blockchain, IoT, quantum computing, and space technology innovations',
      icon: <Globe className="w-12 h-12" />,
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      services: 6,
      startingPrice: '$100',
      features: ['Blockchain Solutions', 'IoT Platforms', 'Quantum Computing', 'Space Technology', 'Edge Computing'],
      benefits: ['Future-proof technology', 'Competitive advantage', 'Innovation leadership', 'Market disruption', 'High ROI potential'],
      route: '/emerging-tech-services'
=======
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network, 
  Globe, 
  Users, 
  Zap, 
  BarChart3,
  TrendingUp,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  ArrowUpZA,
  Circle,
  Lightbulb,
  Eye,
  MessageSquare,
  Server,
  Lock,
  Monitor,
  Settings,
  FileText,
  Video,
  Mic
} from 'lucide-react';

export default function ServicesHubPage() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions',
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      color: 'from-zion-cyan/20 to-zion-cyan/5',
      borderColor: 'border-zion-cyan/30',
      services: [
        {
          title: 'AI Development & Integration',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 156,
          features: ['Custom AI Models', 'API Integration', 'Performance Optimization'],
          link: '/ai-services'
        },
        {
          title: 'Machine Learning Solutions',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89,
          features: ['Data Preprocessing', 'Model Training', 'Deployment'],
          link: '/ai-services'
        },
        {
          title: 'Natural Language Processing',
          price: 'From $3,800',
          rating: 4.6,
          reviewCount: 67,
          features: ['Text Analysis', 'Sentiment Detection', 'Language Models'],
          link: '/ai-services'
        },
        {
          title: 'Computer Vision Solutions',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 92,
          features: ['Object Detection', 'Image Classification', 'Video Analysis'],
          link: '/ai-services'
        }
      ],
      link: '/ai-services'
    },
    {
      id: 'it-services',
      title: 'IT Infrastructure & Services',
      description: 'Enterprise-grade IT solutions for modern businesses',
      icon: <Cloud className="h-12 w-12 text-zion-blue" />,
      color: 'from-zion-blue/20 to-zion-blue/5',
      borderColor: 'border-zion-blue/30',
      services: [
        {
          title: 'Cloud Migration & Strategy',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234,
          features: ['Migration Planning', 'Cost Optimization', 'Performance Tuning'],
          link: '/it-services'
        },
        {
          title: 'Cybersecurity Assessment',
          price: 'From $5,500',
          rating: 4.8,
          reviewCount: 189,
          features: ['Security Audit', 'Vulnerability Scan', 'Penetration Testing'],
          link: '/it-services'
        },
        {
          title: 'DevOps Implementation',
          price: 'From $6,500',
          rating: 4.7,
          reviewCount: 156,
          features: ['CI/CD Setup', 'Infrastructure as Code', 'Monitoring Tools'],
          link: '/it-services'
        },
        {
          title: 'Managed IT Services',
          price: 'From $2,500/month',
          rating: 4.5,
          reviewCount: 67,
          features: ['24/7 Monitoring', 'Help Desk Support', 'Proactive Maintenance'],
          link: '/it-services'
        }
      ],
      link: '/it-services'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Comprehensive business transformation for the digital age',
      icon: <TrendingUp className="h-12 w-12 text-zion-purple" />,
      color: 'from-zion-purple/20 to-zion-purple/5',
      borderColor: 'border-zion-purple/30',
      services: [
        {
          title: 'Digital Strategy & Roadmap',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 89,
          features: ['Business Analysis', 'Technology Assessment', 'Digital Roadmap'],
          link: '/digital-transformation'
        },
        {
          title: 'Legacy System Modernization',
          price: 'From $25,000',
          rating: 4.7,
          reviewCount: 134,
          features: ['System Analysis', 'Migration Planning', 'Data Migration'],
          link: '/digital-transformation'
        },
        {
          title: 'Business Process Optimization',
          price: 'From $8,500',
          rating: 4.8,
          reviewCount: 156,
          features: ['Process Mapping', 'Workflow Design', 'Automation Planning'],
          link: '/digital-transformation'
        },
        {
          title: 'Customer Experience Transformation',
          price: 'From $20,000',
          rating: 4.9,
          reviewCount: 78,
          features: ['Journey Mapping', 'UX Design', 'Technology Integration'],
          link: '/digital-transformation'
        }
      ],
      link: '/digital-transformation'
    },
    {
      id: 'development-services',
      title: 'Software Development',
      description: 'Custom software solutions for web, mobile, and enterprise applications',
      icon: <Code className="h-12 w-12 text-green-500" />,
      color: 'from-green-500/20 to-green-500/5',
      borderColor: 'border-green-500/30',
      services: [
        {
          title: 'Web Application Development',
          price: 'From $12,000',
          rating: 4.6,
          reviewCount: 112,
          features: ['Custom Development', 'Responsive Design', 'Database Design'],
          link: '/it-services'
        },
        {
          title: 'Mobile App Development',
          price: 'From $15,000',
          rating: 4.7,
          reviewCount: 89,
          features: ['UI/UX Design', 'Cross-platform Development', 'Testing & QA'],
          link: '/it-services'
        },
        {
          title: 'API Development & Integration',
          price: 'From $8,000',
          rating: 4.8,
          reviewCount: 134,
          features: ['RESTful APIs', 'Third-party Integration', 'Documentation'],
          link: '/it-services'
        },
        {
          title: 'Custom Software Solutions',
          price: 'From $20,000',
          rating: 4.7,
          reviewCount: 95,
          features: ['Requirements Analysis', 'Custom Development', 'Testing & Deployment'],
          link: '/it-services'
        }
      ],
      link: '/it-services'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics Services',
      description: 'Transform data into actionable business insights',
      icon: <BarChart3 className="h-12 w-12 text-pink-500" />,
      color: 'from-pink-500/20 to-pink-500/5',
      borderColor: 'border-pink-500/30',
      services: [
        {
          title: 'Data Science & Analytics',
          price: 'From $4,200',
          rating: 4.7,
          reviewCount: 134,
          features: ['Data Mining', 'Statistical Analysis', 'Visualization'],
          link: '/ai-services'
        },
        {
          title: 'Business Intelligence',
          price: 'From $6,800',
          rating: 4.7,
          reviewCount: 95,
          features: ['Data Warehouse Setup', 'Dashboard Creation', 'Report Automation'],
          link: '/it-services'
        },
        {
          title: 'Big Data Engineering',
          price: 'From $8,500',
          rating: 4.6,
          reviewCount: 78,
          features: ['Data Pipeline Design', 'ETL Development', 'Performance Optimization'],
          link: '/it-services'
        },
        {
          title: 'Predictive Analytics',
          price: 'From $7,500',
          rating: 4.8,
          reviewCount: 89,
          features: ['Model Development', 'Forecasting', 'Risk Analysis'],
          link: '/ai-services'
        }
      ],
      link: '/ai-services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets',
      icon: <Shield className="h-12 w-12 text-red-500" />,
      color: 'from-red-500/20 to-red-500/5',
      borderColor: 'border-red-500/30',
      services: [
        {
          title: 'Security Assessment & Audit',
          price: 'From $5,500',
          rating: 4.8,
          reviewCount: 189,
          features: ['Security Audit', 'Vulnerability Scan', 'Compliance Review'],
          link: '/it-services'
        },
        {
          title: 'AI-Powered Threat Detection',
          price: 'From $5,500',
          rating: 4.7,
          reviewCount: 112,
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response'],
          link: '/ai-services'
        },
        {
          title: 'Endpoint Security',
          price: 'From $4,200',
          rating: 4.6,
          reviewCount: 73,
          features: ['Antivirus Protection', 'Device Management', 'Policy Enforcement'],
          link: '/it-services'
        },
        {
          title: 'Security Training & Awareness',
          price: 'From $3,500',
          rating: 4.5,
          reviewCount: 56,
          features: ['Security Training', 'Phishing Simulations', 'Compliance Training'],
          link: '/it-services'
        }
      ],
      link: '/it-services'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
    }
  ];

  const featuredServices = [
    {
<<<<<<< HEAD
      name: 'AI Content Creator Pro',
      category: 'AI Services',
      price: '$45/month',
      description: 'Advanced AI-powered content creation platform with SEO optimization and multi-language support',
      icon: <FileText className="w-6 h-6" />,
      color: 'text-purple-400'
    },
    {
      name: 'Cloud Infrastructure Manager',
      category: 'IT Services',
      price: '$150/month',
      description: 'Enterprise-grade cloud infrastructure management with automated scaling and cost optimization',
      icon: <CloudIcon className="w-6 h-6" />,
      color: 'text-blue-400'
    },
    {
      name: 'TaskFlow Pro',
      category: 'Micro SAAS',
      price: '$15/month',
      description: 'AI-powered task management with intelligent workflow automation and team performance analytics',
      icon: <ZapIcon className="w-6 h-6" />,
      color: 'text-green-400'
    }
  ];

  const stats = [
    { label: 'Total Services', value: '37+', icon: <CheckCircle className="w-6 h-6" /> },
    { label: 'Service Categories', value: '4', icon: <Target className="w-6 h-6" /> },
    { label: 'Starting Price', value: '$15', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Implementation Time', value: '1-4 weeks', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Services Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive portfolio of innovative micro SAAS, AI services, IT infrastructure, and emerging technology solutions designed to transform your business
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className={`${category.bgColor} ${category.borderColor} border rounded-2xl p-8 hover:scale-105 transition-all duration-300`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-${category.color.split('-')[1]}-400`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.services}</div>
                    <div className="text-gray-400 text-sm">Services</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">Starting at {category.startingPrice}/month</div>
                  <div className="text-gray-400 text-sm">Competitive pricing with industry-leading value</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.benefits.map((benefit, index) => (
                      <span key={index} className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  to={category.route}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}
                >
                  Explore {category.name}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className={service.color}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-white mb-4">{service.price}</div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our services deliver measurable results with 250-400% ROI within 3-8 months</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Implementation</h3>
              <p className="text-gray-300">Get up and running in 1-4 weeks with our streamlined onboarding process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with SOC 2, GDPR, and industry standards</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Our team of experts is here to help you choose the right solutions and get started quickly
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-8">
              <div>
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Phone</p>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Website
              </a>
              <Link 
                to="/request-quote"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHubPage;
=======
      title: 'AI-Powered Recruiting Assistant',
      description: 'Streamline your hiring process with intelligent candidate matching and screening',
      price: 'From $2,500/month',
      rating: 4.9,
      reviewCount: 234,
      link: '/zion-hire-ai',
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      badge: 'Most Popular'
    },
    {
      title: 'Global IT Onsite Services',
      description: 'Professional IT support available in 50+ countries with local technicians',
      price: 'From $150/hour',
      rating: 4.8,
      reviewCount: 567,
      link: '/it-onsite-services',
      icon: <Globe className="h-8 w-8 text-zion-blue" />,
      badge: 'Global Service'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for modernizing your business operations and technology',
      price: 'From $12,000',
      rating: 4.9,
      reviewCount: 89,
      link: '/digital-transformation',
      icon: <TrendingUp className="h-8 w-8 text-zion-purple" />,
      badge: 'Premium Service'
    }
  ];

  return (
    <>
      <SEO 
        title="Services Hub - Zion Tech Group" 
        description="Comprehensive portfolio of AI services, IT solutions, and digital transformation services. Expert consulting and implementation for modern businesses."
        keywords="AI services, IT services, digital transformation, software development, cybersecurity, data analytics, consulting"
        canonical="https://ziontechgroup.com/services"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-cyan py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 via-zion-purple/10 to-zion-cyan/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-zion-blue/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Services Hub
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of AI services, IT solutions, and digital transformation 
                services. From strategy to implementation, we help businesses thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/request-quote">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our most popular and highly-rated services that deliver exceptional value to businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      {service.icon}
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-zion-purple">{service.price}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">{service.rating}</span>
                      <span className="text-sm text-muted-foreground">({service.reviewCount} reviews)</span>
                    </div>
                  </CardContent>
                  
                  <CardContent className="pt-0">
                    <Button asChild className="w-full group-hover:bg-zion-purple group-hover:text-white transition-all duration-300">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive service categories, each designed to address specific business 
                challenges and drive measurable results.
              </p>
            </div>

            <div className="space-y-12">
              {serviceCategories.map((category) => (
                <div key={category.id} className={`p-8 rounded-2xl bg-gradient-to-r ${category.color} border ${category.borderColor}`}>
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      {category.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-muted-foreground text-lg">{category.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {category.services.map((service, index) => (
                          <div key={index} className="bg-background/50 p-4 rounded-lg border border-border/50">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-white">{service.title}</h4>
                              <span className="text-sm font-bold text-zion-cyan">{service.price}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-xs text-muted-foreground">{service.rating}</span>
                              <span className="text-xs text-muted-foreground">({service.reviewCount})</span>
                            </div>
                            <div className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-xs text-muted-foreground">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="bg-zion-purple hover:bg-zion-purple-light text-white">
                        <Link to={category.link}>
                          View All {category.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our experts help you identify the right solutions for your business. 
              Get a free consultation and discover how our services can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
