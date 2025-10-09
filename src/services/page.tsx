'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Atom } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-50',
      description: 'Powerful, affordable AI-powered tools designed for modern businesses',
      services: [
        { 
          name: 'AI Project Manager Pro', 
          price: '$199/month', 
          description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Budget optimization'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          popular: true,
          category: 'Productivity'
        },
        { 
          name: 'AI Social Media Manager', 
          price: '$149/month', 
          description: 'Automate your social media with AI-powered content creation and smart scheduling',
          features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Hashtag optimization', 'Competitor analysis'],
          benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
          popular: true,
          category: 'Marketing'
        },
        { 
          name: 'AI Analytics Dashboard', 
          price: '$299/month', 
          description: 'Transform your data into actionable insights with AI-powered analytics',
          features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
          benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
          popular: true,
          category: 'Analytics'
        },
        { 
          name: 'AI Email Marketing Suite', 
          price: '$199/month', 
          description: 'Transform your email marketing with AI-powered content generation and automation',
          features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
          benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher click rates'],
          popular: true,
          category: 'Marketing'
        },
        { 
          name: 'AI Customer Support Bot', 
          price: '$249/month', 
          description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
          features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
          benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
          popular: true,
          category: 'Support'
        },
        { 
          name: 'AI Video Generator', 
          price: '$249/month', 
          description: 'Create professional videos with AI-powered editing and generation',
          features: ['AI video creation', 'Auto-editing', 'Voice synthesis', 'Text-to-video', 'Template library', 'Brand customization'],
          benefits: ['80% faster video production', 'Professional quality', 'Cost-effective', 'Scalable content'],
          popular: true,
          category: 'Content'
        },
        { 
          name: 'AI Workflow Automation', 
          price: '$299/month', 
          description: 'Automate complex business workflows with intelligent AI agents',
          features: ['Process automation', 'Smart routing', 'Exception handling', 'Integration APIs', 'Custom workflows', 'Analytics'],
          benefits: ['90% process reduction', 'Error elimination', '24/7 operation', 'Cost savings'],
          popular: true,
          category: 'Automation'
        },
        { 
          name: 'AI E-commerce Assistant', 
          price: '$399/month', 
          description: 'AI-powered e-commerce optimization and management tools',
          features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'Personalization', 'Sales forecasting'],
          benefits: ['35% increase in sales', '25% higher AOV', '40% better conversion', 'Reduced cart abandonment'],
          popular: true,
          category: 'E-commerce'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-50',
      description: 'Advanced artificial intelligence solutions for enterprise applications',
      services: [
        { 
          name: 'Machine Learning Solutions', 
          price: '$2,500/month', 
          description: 'Custom ML models for predictive analytics and decision-making',
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
          benefits: ['40% better predictions', '60% faster insights', 'ROI tracking', 'Scalable models']
        },
        { 
          name: 'Natural Language Processing', 
          price: '$1,800/month', 
          description: 'Advanced NLP solutions for text analysis and language understanding',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
          benefits: ['95% accuracy', 'Multi-language support', 'Real-time processing', 'Custom training']
        },
        { 
          name: 'Computer Vision', 
          price: '$2,200/month', 
          description: 'Image and video analysis solutions for object detection and recognition',
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Medical Imaging'],
          benefits: ['99% accuracy', 'Real-time processing', 'Edge deployment', 'Custom models']
        },
        { 
          name: 'AI Automation', 
          price: '$1,900/month', 
          description: 'Intelligent process automation with decision-making capabilities',
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing'],
          benefits: ['80% process reduction', '90% error reduction', '24/7 operation', 'Cost savings']
        },
        { 
          name: 'Quantum AI Computing', 
          price: '$5,000/month', 
          description: 'Next-generation quantum algorithms for complex problem solving',
          features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation', 'Research & Development', 'Custom Solutions'],
          benefits: ['Exponential speedup', 'Complex optimization', 'Future-proof technology', 'Competitive advantage']
        },
        { 
          name: 'AI Cybersecurity', 
          price: '$2,800/month', 
          description: 'AI-powered threat detection and prevention systems',
          features: ['Threat Detection', 'Anomaly Detection', 'Behavioral Analysis', 'Incident Response', 'Risk Assessment', 'Compliance Monitoring'],
          benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Reduced false positives']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-50',
      description: 'Comprehensive IT solutions for modern enterprise infrastructure',
      services: [
        { 
          name: 'Cloud Services', 
          price: '$1,999/month', 
          description: 'Cloud migration, setup, and optimization services',
          features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Auto-scaling', 'Disaster Recovery'],
          benefits: ['50% cost reduction', '99.9% uptime', 'Global deployment', '24/7 monitoring']
        },
        { 
          name: 'Cybersecurity', 
          price: '$2,499/month', 
          description: 'Advanced security solutions with threat detection and prevention',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
          benefits: ['99.9% threat detection', 'Real-time monitoring', 'Zero-day protection', 'Compliance ready']
        },
        { 
          name: 'DevOps & CI/CD', 
          price: '$1,799/month', 
          description: 'Streamlined development workflows with automated testing and deployment',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Blue-Green Deployments'],
          benefits: ['80% faster deployments', '90% fewer errors', 'Automated rollbacks', 'Zero-downtime updates']
        },
        { 
          name: 'Database Services', 
          price: '$1,299/month', 
          description: 'Database design, optimization, and management with AI-powered tuning',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Query Optimization'],
          benefits: ['300% performance boost', '99.99% availability', 'Automated backups', 'Real-time monitoring']
        },
        { 
          name: 'Network Infrastructure', 
          price: '$1,599/month', 
          description: 'Enterprise-grade network design, implementation, and management',
          features: ['Network Design', 'SD-WAN Implementation', 'Load Balancing', 'VPN Setup', 'Network Monitoring', 'Bandwidth Optimization'],
          benefits: ['40% faster speeds', '99.9% reliability', 'Global connectivity', 'Cost optimization']
        },
        { 
          name: 'IT Support & Helpdesk', 
          price: '$899/month', 
          description: '24/7 technical support and helpdesk services',
          features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training', 'System Maintenance'],
          benefits: ['Instant response', '95% satisfaction', 'Proactive monitoring', 'User empowerment']
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-400',
      bgColor: 'bg-orange-50',
      description: 'Cutting-edge technologies for next-generation business solutions',
      services: [
        { 
          name: 'Quantum Computing Solutions', 
          price: 'Custom Pricing', 
          description: 'Next-generation quantum algorithms and quantum security implementations',
          features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Machine Learning', 'Cryptography'],
          benefits: ['Exponential speedup', 'Unbreakable security', 'Future-proof technology', 'Competitive advantage']
        },
        { 
          name: 'Autonomous Systems', 
          price: 'Custom Pricing', 
          description: 'Self-managing and self-optimizing systems for enterprise operations',
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Intelligent Automation'],
          benefits: ['Zero-downtime operations', 'Predictive maintenance', 'Cost optimization', 'Scalable intelligence']
        },
        { 
          name: 'Blockchain & Web3', 
          price: '$2,999/month', 
          description: 'Decentralized solutions, smart contracts, and Web3 applications',
          features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
          benefits: ['Decentralized security', 'Transparent operations', 'Tokenization', 'Community governance']
        },
        { 
          name: 'IoT & Edge Computing', 
          price: '$1,999/month', 
          description: 'Connected devices and edge computing solutions',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
          benefits: ['Real-time insights', 'Reduced latency', 'Cost efficiency', 'Scalable connectivity']
        },
        { 
          name: 'Business Intelligence', 
          price: '$2,299/month', 
          description: 'Data-driven insights and predictive analytics for decision-making',
          features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Real-time Reporting'],
          benefits: ['Data-driven decisions', 'Predictive insights', 'Real-time analytics', 'Competitive intelligence']
        },
        { 
          name: 'Robotics Solutions', 
          price: 'Custom Pricing', 
          description: 'Intelligent robotic solutions for manufacturing and service industries',
          features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Assembly Automation'],
          benefits: ['Increased productivity', 'Consistent quality', '24/7 operation', 'Cost reduction']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Services - Zion Tech Group"
        description="Comprehensive AI and IT services for your business transformation. Micro SAAS solutions, AI services, IT infrastructure, and specialized technologies."
        keywords={['AI services', 'IT solutions', 'micro SAAS', 'business transformation', 'cloud services', 'cybersecurity']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Service Categories
              </h2>
              <div className="space-y-16">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                    <div className="flex items-center mb-8">
                      <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                          {service.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                                Popular
                              </div>
                            </div>
                          )}
                          <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                          <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                          
                          {/* Features */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                                  <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Benefits */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h5>
                            <ul className="space-y-1">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                                  <TrendingUp className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                            <a
                              href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our services today and see the difference AI and IT solutions can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;