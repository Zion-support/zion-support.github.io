'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Powerful, affordable AI-powered tools designed for modern businesses',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with AI-powered resource optimization and timeline prediction',
          price: '$99/month',
          marketPrice: '$150/month',
          savings: 'Save $51/month',
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration', 'Risk assessment', 'Resource optimization'],
          benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          popular: true,
          category: 'Productivity'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automate your social media with AI-powered content creation and smart scheduling',
          price: '$79/month',
          marketPrice: '$120/month',
          savings: 'Save $41/month',
          features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence', 'Multi-platform management', 'Engagement optimization'],
          benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach', '60% better targeting'],
          popular: true,
          category: 'Marketing'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Transform your data into actionable insights with AI-powered analytics',
          price: '$149/month',
          marketPrice: '$200/month',
          savings: 'Save $51/month',
          features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking', 'Predictive modeling', 'Custom reports'],
          benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift', '50% faster decisions'],
          popular: true,
          category: 'Analytics'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Transform your email marketing with AI-powered content generation and automation',
          price: '$99/month',
          marketPrice: '$150/month',
          savings: 'Save $51/month',
          features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns', 'A/B testing', 'Deliverability optimization'],
          benefits: ['65% open rate increase', '40% revenue growth', '80% time saved', '35% higher CTR'],
          popular: true,
          category: 'Marketing'
        },
        {
          name: 'AI Customer Support Bot',
          description: 'Provide 24/7 intelligent customer support with AI-powered chatbot',
          price: '$149/month',
          marketPrice: '$200/month',
          savings: 'Save $51/month',
          features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights', 'Multi-language support', 'Integration APIs'],
          benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically', '50% cost reduction'],
          popular: true,
          category: 'Support'
        },
        {
          name: 'AI Code Review Assistant',
          description: 'Advanced automated code analysis with AI-powered bug detection and optimization',
          price: '$89/month',
          marketPrice: '$130/month',
          savings: 'Save $41/month',
          features: ['Automated code review', 'Security vulnerability detection', 'Performance optimization', 'Git integration', 'Best practice recommendations', 'Team collaboration'],
          benefits: ['70% fewer bugs', '15+ hours saved/week', 'Improved code quality', '40% faster development'],
          popular: false,
          category: 'Development'
        },
        {
          name: 'AI Content Generator Pro',
          description: 'AI-powered content creation for blogs, social media, and marketing materials',
          price: '$199/month',
          marketPrice: '$250/month',
          savings: 'Save $51/month',
          features: ['Blog writing', 'Social media posts', 'Email templates', 'Ad copy generation', 'Technical docs', 'SEO optimization'],
          benefits: ['300% content output increase', '50% time saved', '40% better engagement', '60% SEO improvement'],
          popular: false,
          category: 'Content'
        },
        {
          name: 'AI SEO Optimizer',
          description: 'AI-driven SEO analysis and optimization with keyword research and competitor analysis',
          price: '$299/month',
          marketPrice: '$400/month',
          savings: 'Save $101/month',
          features: ['Keyword research', 'Content optimization', 'Technical SEO', 'Competitor analysis', 'Rank tracking', 'Performance monitoring'],
          benefits: ['80% SEO improvement', '60% organic traffic increase', '45% higher rankings', '35% conversion boost'],
          popular: false,
          category: 'SEO'
        },
        {
          name: 'AI Data Visualization Studio',
          description: 'Advanced data visualization and reporting tools with AI-powered insights',
          price: '$299/month',
          marketPrice: '$350/month',
          savings: 'Save $51/month',
          features: ['Interactive charts', 'Custom dashboards', 'Real-time updates', 'Export options', 'AI insights', 'Collaboration tools'],
          benefits: ['50% faster insights', '60% better decisions', '40% time saved', '35% accuracy improvement'],
          popular: false,
          category: 'Analytics'
        },
        {
          name: 'AI Video Generation Suite',
          description: 'AI-powered video creation with automated editing and voice synthesis',
          price: '$399/month',
          marketPrice: '$500/month',
          savings: 'Save $101/month',
          features: ['AI video creation', 'Automated editing', 'Voice synthesis', 'Multi-format output', 'Template library', 'Brand customization'],
          benefits: ['90% time saved', '70% cost reduction', '60% quality improvement', '80% faster production'],
          popular: false,
          category: 'Video'
        },
        {
          name: 'AI Voice Cloning Studio',
          description: 'Realistic voice synthesis and cloning technology for content creation',
          price: '$199/month',
          marketPrice: '$250/month',
          savings: 'Save $51/month',
          features: ['Voice cloning', 'Text-to-speech', 'Multi-language support', 'Emotion control', 'Custom voices', 'API integration'],
          benefits: ['95% voice accuracy', '80% time saved', '60% cost reduction', 'Unlimited usage'],
          popular: false,
          category: 'Audio'
        },
        {
          name: 'AI Music Composition',
          description: 'AI-generated music and soundtracks for content creators and businesses',
          price: '$149/month',
          marketPrice: '$200/month',
          savings: 'Save $51/month',
          features: ['AI music generation', 'Multiple genres', 'Custom compositions', 'Royalty-free', 'High-quality output', 'Commercial license'],
          benefits: ['100% original music', '90% time saved', '70% cost reduction', 'Unlimited downloads'],
          popular: false,
          category: 'Audio'
        },
        {
          name: 'AI Fashion Design Assistant',
          description: 'AI-powered fashion design and trend analysis for designers and retailers',
          price: '$249/month',
          marketPrice: '$300/month',
          savings: 'Save $51/month',
          features: ['AI design generation', 'Trend analysis', 'Color matching', 'Pattern creation', 'Size optimization', 'Market insights'],
          benefits: ['80% design time saved', '60% trend accuracy', '40% cost reduction', '50% faster to market'],
          popular: false,
          category: 'Design'
        },
        {
          name: 'AI Fitness Coach Pro',
          description: 'Personal AI fitness trainer with workout plans and nutrition advice',
          price: '$99/month',
          marketPrice: '$150/month',
          savings: 'Save $51/month',
          features: ['Personalized workouts', 'Nutrition planning', 'Progress tracking', 'Form analysis', 'Goal setting', 'Community features'],
          benefits: ['70% better results', '50% time saved', '60% motivation increase', '40% injury reduction'],
          popular: false,
          category: 'Health'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent process automation with AI-powered decision making',
          price: '$199/month',
          marketPrice: '$250/month',
          savings: 'Save $51/month',
          features: ['Process automation', 'AI decision making', 'Exception handling', 'Integration APIs', 'Custom workflows', 'Analytics'],
          benefits: ['85% process automation', '60% time saved', '70% error reduction', '50% cost savings'],
          popular: false,
          category: 'Automation'
        },
        {
          name: 'AI Email Assistant Pro',
          description: 'Smart email management with AI-powered response suggestions',
          price: '$99/month',
          marketPrice: '$130/month',
          savings: 'Save $31/month',
          features: ['Email classification', 'Response suggestions', 'Scheduling', 'Follow-up reminders', 'Spam filtering', 'Priority sorting'],
          benefits: ['60% time saved', '40% response improvement', '50% organization boost', '30% stress reduction'],
          popular: false,
          category: 'Productivity'
        },
        {
          name: 'AI Lead Generation Engine',
          description: 'Automated lead generation and qualification system with AI-powered scoring',
          price: '$349/month',
          marketPrice: '$450/month',
          savings: 'Save $101/month',
          features: ['Lead scoring', 'Contact discovery', 'Email outreach', 'CRM integration', 'Qualification', 'Follow-up automation'],
          benefits: ['200% more leads', '80% qualification accuracy', '60% conversion increase', '50% time saved'],
          popular: false,
          category: 'Sales'
        },
        {
          name: 'AI Sales Automation Suite',
          description: 'Intelligent sales process automation with pipeline management',
          price: '$399/month',
          marketPrice: '$500/month',
          savings: 'Save $101/month',
          features: ['Sales pipeline management', 'Deal tracking', 'Forecasting', 'Performance analytics', 'Automated follow-ups', 'CRM integration'],
          benefits: ['50% sales increase', '40% pipeline efficiency', '60% forecast accuracy', '35% time saved'],
          popular: false,
          category: 'Sales'
        },
        {
          name: 'AI E-commerce Optimizer',
          description: 'AI-powered e-commerce optimization with product recommendations',
          price: '$499/month',
          marketPrice: '$650/month',
          savings: 'Save $151/month',
          features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer insights', 'A/B testing', 'Conversion optimization'],
          benefits: ['45% conversion increase', '30% revenue growth', '50% inventory efficiency', '60% customer satisfaction'],
          popular: false,
          category: 'E-commerce'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Advanced artificial intelligence solutions for enterprise applications',
      services: [
        {
          name: 'Machine Learning Solutions',
          description: 'Custom ML models for predictive analytics and decision-making with advanced algorithms',
          price: '$1,500/month',
          marketPrice: '$2,000/month',
          savings: 'Save $500/month',
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization'],
          benefits: ['60% accuracy improvement', '40% cost reduction', '50% faster insights', '30% revenue increase'],
          popular: false,
          category: 'AI/ML'
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis, language understanding, and conversation AI',
          price: '$1,200/month',
          marketPrice: '$1,600/month',
          savings: 'Save $400/month',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing', 'Voice Recognition'],
          benefits: ['80% automation rate', '70% accuracy improvement', '60% time saved', '50% cost reduction'],
          popular: false,
          category: 'AI/ML'
        },
        {
          name: 'Computer Vision',
          description: 'Image and video analysis solutions for object detection and recognition',
          price: '$1,800/month',
          marketPrice: '$2,200/month',
          savings: 'Save $400/month',
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control', 'Medical Imaging'],
          benefits: ['95% accuracy rate', '80% automation', '70% time saved', '60% cost reduction'],
          popular: false,
          category: 'AI/ML'
        },
        {
          name: 'AI Automation',
          description: 'Intelligent process automation with decision-making capabilities',
          price: '$1,400/month',
          marketPrice: '$1,800/month',
          savings: 'Save $400/month',
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs', 'Monitoring'],
          benefits: ['90% process automation', '70% time saved', '60% error reduction', '50% cost savings'],
          popular: false,
          category: 'AI/ML'
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT solutions for modern enterprise infrastructure',
      services: [
        {
          name: 'Cloud Services',
          description: 'Cloud migration, setup, and optimization services with multi-cloud strategies',
          price: '$1,299/month',
          marketPrice: '$1,600/month',
          savings: 'Save $301/month',
          features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Monitoring', 'Backup Solutions'],
          benefits: ['40% cost reduction', '99.9% uptime', '50% faster deployment', '60% security improvement'],
          popular: false,
          category: 'Infrastructure'
        },
        {
          name: 'Cybersecurity',
          description: 'Advanced security solutions with threat detection and prevention',
          price: '$1,599/month',
          marketPrice: '$2,000/month',
          savings: 'Save $401/month',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance', 'Penetration Testing'],
          benefits: ['95% threat detection', '80% faster response', '70% risk reduction', '60% compliance improvement'],
          popular: false,
          category: 'Security'
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamlined development workflows with automated testing and deployment',
          price: '$1,199/month',
          marketPrice: '$1,500/month',
          savings: 'Save $301/month',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
          benefits: ['80% faster deployment', '70% fewer errors', '60% time saved', '50% cost reduction'],
          popular: false,
          category: 'Development'
        },
        {
          name: 'Database Services',
          description: 'Database design, optimization, and management with AI-powered tuning',
          price: '$899/month',
          marketPrice: '$1,200/month',
          savings: 'Save $301/month',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Scaling', 'Migration'],
          benefits: ['50% performance improvement', '99.9% uptime', '40% cost reduction', '60% faster queries'],
          popular: false,
          category: 'Infrastructure'
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      description: 'Cutting-edge technologies for the future of business',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum algorithms and quantum security implementations',
          price: 'Custom',
          marketPrice: 'Custom',
          savings: 'Competitive pricing',
          features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'],
          benefits: ['Exponential speedup', 'Unbreakable security', 'Revolutionary algorithms', 'Future-proof technology'],
          popular: false,
          category: 'Quantum'
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing and self-optimizing systems for enterprise operations',
          price: 'Custom',
          marketPrice: 'Custom',
          savings: 'Competitive pricing',
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'],
          benefits: ['90% automation', '80% efficiency gain', '70% cost reduction', '60% downtime reduction'],
          popular: false,
          category: 'Autonomous'
        },
        {
          name: 'Blockchain & Web3',
          description: 'Decentralized solutions, smart contracts, and Web3 applications',
          price: '$1,999/month',
          marketPrice: '$2,500/month',
          savings: 'Save $501/month',
          features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'],
          benefits: ['100% transparency', '80% cost reduction', '70% security improvement', '60% efficiency gain'],
          popular: false,
          category: 'Blockchain'
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge computing solutions for smart environments',
          price: '$1,499/month',
          marketPrice: '$1,800/month',
          savings: 'Save $301/month',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'],
          benefits: ['50% latency reduction', '60% bandwidth savings', '70% real-time processing', '80% device efficiency'],
          popular: false,
          category: 'IoT'
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
        description="Comprehensive AI and IT services for your business transformation. Micro SAAS solutions, AI services, IT infrastructure, and specialized solutions."
        keywords={['AI services', 'IT solutions', 'micro SAAS', 'business transformation', 'enterprise solutions']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className="text-center mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
            <div className="relative z-10 py-16 px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent cyber-text-3d neon-pulse">
                  Our Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business operations and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
                            <div>
                              <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                              {service.marketPrice && service.marketPrice !== 'Custom' && (
                                <div className="text-sm text-gray-400">
                                  <span className="line-through">{service.marketPrice}</span>
                                  <span className="text-green-400 ml-2 font-semibold">{service.savings}</span>
                                </div>
                              )}
                            </div>
                            <a
                              href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                              className="cyber-button px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-all"
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

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
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