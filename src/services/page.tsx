'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Rocket, Microscope, Layers, Database as DbIcon, Server, Network, Cpu as Processor, HardDrive, Wifi, Monitor, Keyboard, Mouse, Headphones, Printer, Scanner, Router, Switch, Firewall, Antivirus, Backup, Recovery, Migration, Integration, Consulting, Support, Maintenance, Upgrade, Security, Compliance, Audit, Training, Documentation, Testing, Quality, Performance, Scalability, Reliability, Availability, Monitoring, Alerting, Logging, Analytics, Reporting, Dashboard, API, SDK, Framework, Library, Tool, Platform, Service, Solution, Product, Technology, Innovation, Digital, Transformation, Automation, Optimization, Efficiency, Productivity, Growth, Success, Future, Next, Generation, Advanced, Cutting, Edge, State, Art, Revolutionary, Breakthrough, Game, Changing, Disruptive, Innovative, Intelligent, Smart, AI, ML, Deep, Learning, Neural, Network, Algorithm, Model, Data, Science, Analytics, Big, Data, Cloud, Computing, Edge, Computing, Quantum, Computing, Blockchain, Cryptocurrency, NFT, Metaverse, AR, VR, IoT, 5G, 6G, Cybersecurity, Privacy, GDPR, Compliance, Regulatory, Standards, Best, Practices, Methodology, Process, Workflow, Pipeline, Architecture, Design, Pattern, Framework, Methodology, Agile, DevOps, CI, CD, Microservices, Serverless, Container, Kubernetes, Docker, AWS, Azure, GCP, IBM, Oracle, Salesforce, Microsoft, Google, Amazon, Apple, Facebook, Meta, Twitter, LinkedIn, Instagram, TikTok, YouTube, Netflix, Spotify, Uber, Airbnb, Tesla, SpaceX, OpenAI, Anthropic, Google, DeepMind, NVIDIA, Intel, AMD, Qualcomm, ARM, Apple, Samsung, Huawei, Xiaomi, OnePlus, Sony, LG, Dell, HP, Lenovo, Asus, Acer, MSI, Razer, Logitech, Corsair, SteelSeries, HyperX, Kingston, Samsung, WD, Seagate, Crucial, G.Skill, ASUS, Gigabyte, MSI, EVGA, Zotac, Sapphire, PowerColor, XFX, ASRock, Biostar, ECS, Foxconn, Supermicro, Tyan, Intel, AMD, NVIDIA, Qualcomm, MediaTek, Broadcom, Marvell, Realtek, Atheros, Ralink, Intel, AMD, NVIDIA, Qualcomm, MediaTek, Broadcom, Marvell, Realtek, Atheros, Ralink } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Comprehensive AI solutions for every business need',
      services: [
        { 
          name: 'AI Consulting & Strategy', 
          price: '$2,500/month', 
          marketPrice: '$4,000',
          savings: '38%',
          description: 'Comprehensive AI strategy development and implementation planning', 
          features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Change Management', 'Training'],
          benefits: ['Clear AI vision', 'Reduced implementation risk', 'Faster time to value', 'Better ROI'],
          category: 'Consulting'
        },
        { 
          name: 'Machine Learning Solutions', 
          price: '$1,500/month', 
          marketPrice: '$2,500',
          savings: '40%',
          description: 'Custom ML models for predictive analytics and decision-making', 
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
          benefits: ['Better predictions', 'Automated decisions', 'Cost reduction', 'Competitive advantage'],
          category: 'AI/ML'
        },
        { 
          name: 'Natural Language Processing', 
          price: '$1,200/month', 
          marketPrice: '$2,000',
          savings: '40%',
          description: 'Advanced NLP solutions for text analysis and language understanding', 
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
          benefits: ['Better customer understanding', 'Automated text processing', 'Multi-language support', 'Improved efficiency'],
          category: 'AI/ML'
        },
        { 
          name: 'Computer Vision', 
          price: '$1,800/month', 
          marketPrice: '$3,000',
          savings: '40%',
          description: 'Image and video analysis solutions for object detection and recognition', 
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Quality Inspection'],
          benefits: ['Automated visual analysis', 'Quality control', 'Security enhancement', 'Process automation'],
          category: 'AI/ML'
        },
        { 
          name: 'AI Automation', 
          price: '$1,400/month', 
          marketPrice: '$2,200',
          savings: '36%',
          description: 'Intelligent process automation with decision-making capabilities', 
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration', 'Monitoring'],
          benefits: ['Reduced manual work', 'Faster processes', 'Better accuracy', 'Cost savings'],
          category: 'Automation'
        },
        { 
          name: 'AI Chatbots', 
          price: '$800/month', 
          marketPrice: '$1,500',
          savings: '47%',
          description: 'Intelligent conversational AI for customer service and support', 
          features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Human Handoff', 'Custom Training'],
          benefits: ['Always available', 'Consistent service', 'Cost effective', 'Scalable support'],
          category: 'Customer Service'
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Comprehensive IT solutions for modern enterprise infrastructure',
      services: [
        { 
          name: 'IT Infrastructure', 
          price: '$999/month', 
          marketPrice: '$1,500',
          savings: '33%',
          description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee', 
          features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions', 'Monitoring', 'Maintenance'],
          benefits: ['High availability', 'Better security', 'Reduced downtime', 'Cost optimization'],
          category: 'Infrastructure'
        },
        { 
          name: 'Cloud Services', 
          price: '$1,299/month', 
          marketPrice: '$2,000',
          savings: '35%',
          description: 'Cloud migration, setup, and optimization services', 
          features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Monitoring', 'Backup Solutions'],
          benefits: ['Scalability', 'Cost efficiency', 'Better performance', 'Global reach'],
          category: 'Cloud'
        },
        { 
          name: 'Cybersecurity', 
          price: '$1,599/month', 
          marketPrice: '$2,500',
          savings: '36%',
          description: 'Advanced security solutions with threat detection and prevention', 
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Training'],
          benefits: ['Better protection', 'Compliance assurance', 'Risk reduction', 'Peace of mind'],
          category: 'Security'
        },
        { 
          name: 'DevOps & CI/CD', 
          price: '$1,199/month', 
          marketPrice: '$1,800',
          savings: '33%',
          description: 'Streamlined development workflows with automated testing and deployment', 
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Deployment Automation'],
          benefits: ['Faster delivery', 'Better quality', 'Reduced errors', 'Team productivity'],
          category: 'Development'
        },
        { 
          name: 'Database Services', 
          price: '$899/month', 
          marketPrice: '$1,400',
          savings: '36%',
          description: 'Database design, optimization, and management with AI-powered tuning', 
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring', 'Scaling'],
          benefits: ['Better performance', 'Data security', 'Reliability', 'Cost optimization'],
          category: 'Data'
        },
        { 
          name: 'Network Services', 
          price: '$1,099/month', 
          marketPrice: '$1,700',
          savings: '35%',
          description: 'Network design, implementation, and monitoring solutions', 
          features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security', 'Optimization'],
          benefits: ['Better connectivity', 'Improved performance', 'Enhanced security', 'Reliable operations'],
          category: 'Infrastructure'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Powerful, affordable AI-powered tools designed for modern businesses',
      services: [
        { 
          name: 'AI Code Review Assistant', 
          price: '$199/month', 
          marketPrice: '$299',
          savings: '33%',
          description: 'Automated code analysis and quality improvement suggestions', 
          features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations', 'Git Integration', 'Documentation Generation'],
          benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', 'Faster development'],
          category: 'Development'
        },
        { 
          name: 'AI SEO Optimizer', 
          price: '$299/month', 
          marketPrice: '$499',
          savings: '40%',
          description: 'AI-powered SEO analysis and optimization recommendations', 
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Link Building', 'Performance Tracking'],
          benefits: ['Higher rankings', 'More organic traffic', 'Better conversions', 'Competitive advantage'],
          category: 'Marketing'
        },
        { 
          name: 'AI Analytics Dashboard', 
          price: '$399/month', 
          marketPrice: '$599',
          savings: '33%',
          description: 'Business intelligence and analytics with AI insights', 
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'Performance Metrics'],
          benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '25% faster decisions'],
          category: 'Analytics'
        },
        { 
          name: 'AI Marketing Automation', 
          price: '$249/month', 
          marketPrice: '$399',
          savings: '38%',
          description: 'Marketing automation and campaign optimization tools', 
          features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing', 'Personalization', 'Analytics'],
          benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '50% better ROI'],
          category: 'Marketing'
        },
        { 
          name: 'AI Document Processing', 
          price: '$179/month', 
          marketPrice: '$299',
          savings: '40%',
          description: 'Intelligent document analysis and data extraction', 
          features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Version Control', 'Search & Retrieval'],
          benefits: ['90% time saved', '99% accuracy', 'Automated workflows', 'Better organization'],
          category: 'Productivity'
        },
        { 
          name: 'AI Customer Support Bot', 
          price: '$149/month', 
          marketPrice: '$249',
          savings: '40%',
          description: 'Automated customer support and ticket management', 
          features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management', 'Multi-language Support', 'Analytics'],
          benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '60% cost savings'],
          category: 'Support'
        },
        { 
          name: 'AI Content Generator', 
          price: '$199/month', 
          marketPrice: '$299',
          savings: '33%',
          description: 'AI-powered content creation for blogs, social media, and marketing', 
          features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation', 'SEO Optimization', 'Multi-language Support'],
          benefits: ['10x content production', '50% better engagement', 'SEO optimized', 'Consistent brand voice'],
          category: 'Content'
        },
        { 
          name: 'AI Data Visualization', 
          price: '$299/month', 
          marketPrice: '$499',
          savings: '40%',
          description: 'Advanced data visualization and reporting tools', 
          features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options', 'AI Insights', 'Collaborative Features'],
          benefits: ['60% faster insights', 'Better decision making', 'Professional reports', 'Team collaboration'],
          category: 'Analytics'
        },
        { 
          name: 'AI Email Assistant', 
          price: '$99/month', 
          marketPrice: '$149',
          savings: '34%',
          description: 'Smart email management and response suggestions', 
          features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders', 'Priority Sorting', 'Template Library'],
          benefits: ['50% time saved', 'Better response quality', 'Never miss important emails', 'Improved productivity'],
          category: 'Productivity'
        },
        { 
          name: 'AI Lead Generation', 
          price: '$349/month', 
          marketPrice: '$599',
          savings: '42%',
          description: 'Automated lead generation and qualification system', 
          features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration', 'Qualification', 'Follow-up Automation'],
          benefits: ['300% more leads', '40% higher quality', 'Automated nurturing', 'Better conversion rates'],
          category: 'Sales'
        },
        { 
          name: 'AI Sales Automation', 
          price: '$399/month', 
          marketPrice: '$599',
          savings: '33%',
          description: 'Intelligent sales process automation and optimization', 
          features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics', 'Automated Follow-ups', 'ROI Tracking'],
          benefits: ['50% faster sales cycles', '35% higher close rates', 'Better forecasting', 'Automated processes'],
          category: 'Sales'
        },
        { 
          name: 'AI E-commerce Solutions', 
          price: '$499/month', 
          marketPrice: '$799',
          savings: '38%',
          description: 'AI-powered e-commerce optimization and management', 
          features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights', 'A/B Testing', 'Conversion Optimization'],
          benefits: ['25% increase in sales', '30% higher AOV', 'Reduced cart abandonment', 'Better customer experience'],
          category: 'E-commerce'
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Cutting-edge specialized solutions for next-generation business needs',
      services: [
        { 
          name: 'Quantum Computing', 
          price: 'Custom', 
          marketPrice: 'Enterprise',
          savings: 'Contact Us',
          description: 'Next-generation quantum algorithms and quantum security implementations', 
          features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development', 'Quantum Simulation', 'Cryptography'],
          benefits: ['Exponential speedup', 'Unbreakable security', 'Complex optimization', 'Future-proof technology'],
          category: 'Quantum'
        },
        { 
          name: 'Autonomous Systems', 
          price: 'Custom', 
          marketPrice: 'Enterprise',
          savings: 'Contact Us',
          description: 'Self-managing and self-optimizing systems for enterprise operations', 
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring', 'Adaptive Learning', 'Decision Making'],
          benefits: ['Reduced downtime', 'Lower maintenance costs', 'Better performance', 'Automated operations'],
          category: 'Autonomous'
        },
        { 
          name: 'Blockchain & Web3', 
          price: '$1,999/month', 
          marketPrice: '$3,500',
          savings: '43%',
          description: 'Decentralized solutions, smart contracts, and Web3 applications', 
          features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions', 'NFT Platforms', 'DAO Implementation'],
          benefits: ['Decentralized security', 'Transparent operations', 'New revenue streams', 'Future-ready technology'],
          category: 'Blockchain'
        },
        { 
          name: 'IoT & Edge Computing', 
          price: '$1,499/month', 
          marketPrice: '$2,500',
          savings: '40%',
          description: 'Connected devices and edge computing solutions', 
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation', 'Data Collection', 'Remote Monitoring'],
          benefits: ['Real-time insights', 'Reduced latency', 'Better security', 'Cost optimization'],
          category: 'IoT'
        },
        { 
          name: 'Business Intelligence', 
          price: '$1,799/month', 
          marketPrice: '$2,800',
          savings: '36%',
          description: 'Data-driven insights and predictive analytics for decision-making', 
          features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards', 'Predictive Modeling', 'Reporting'],
          benefits: ['Better decisions', 'Competitive advantage', 'Cost optimization', 'Risk mitigation'],
          category: 'Analytics'
        },
        { 
          name: 'Robotics Solutions', 
          price: 'Custom', 
          marketPrice: 'Enterprise',
          savings: 'Contact Us',
          description: 'Intelligent robotic solutions for manufacturing and service industries', 
          features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems', 'Quality Control', 'Safety Systems'],
          benefits: ['Increased productivity', 'Better quality', 'Reduced costs', 'Enhanced safety'],
          category: 'Robotics'
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
        title="Professional AI and IT Services - Zion Tech Group"
        description="Comprehensive AI and IT services for business transformation. Save up to 50% with our competitive pricing. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com"
        keywords={['AI services', 'IT solutions', 'business transformation', 'machine learning', 'cloud services', 'cybersecurity', 'micro saas']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Professional Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT services designed to transform your business operations. 
                Save up to 50% compared to market rates with our competitive pricing.
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
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Service Categories
              </h2>
              <div className="space-y-16">
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
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
                        <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
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
                          
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                                {service.marketPrice && service.savings && service.savings !== 'Contact Us' && (
                                  <div className="text-xs text-gray-400">
                                    <span className="line-through">{service.marketPrice}</span>
                                    <span className="text-green-400 ml-1">({service.savings} off)</span>
                                  </div>
                                )}
                              </div>
                              <div className="text-xs text-gray-400">{service.category}</div>
                            </div>
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
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Competitive Pricing
              </h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Market Average</h3>
                    <div className="text-4xl font-bold text-gray-400 mb-2">$2,500</div>
                    <p className="text-gray-300">Per month for similar services</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Our Pricing</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">$1,500</div>
                    <p className="text-gray-300">Per month for premium services</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">You Save</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                    <p className="text-gray-300">Compared to market rates</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our services today and see the difference AI and IT solutions can make.
                Contact us for a free consultation and custom quote.
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
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;