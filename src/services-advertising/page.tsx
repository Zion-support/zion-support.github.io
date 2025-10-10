'use client';
import React from 'react';
import { Brain, BarChart, Users, Target, CheckCircle, ArrowRight, Star, Zap, Shield, Clock, TrendingUp, Award, Phone, Mail, MapPin, DollarSign, Calendar, Globe, Code, Database, Cloud, Settings, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Palette, Camera, Music, Video, ShoppingCart, Calculator, Home, Heart, Stethoscope, GraduationCap, Briefcase, Factory, Car, Plane, Ship, Train, Gamepad2, Truck, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesAdvertisingPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI-Powered Micro SAAS Solutions',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      description: 'Ready-to-use AI applications that solve specific business problems',
      services: [
        {
          name: 'AI Project Manager Pro',
          price: '$99/month',
          description: 'Intelligent project planning with AI-powered resource optimization',
          features: ['40% productivity increase', '70% fewer delays', '85% planning accuracy', '30% cost reduction'],
          marketPrice: '$200-500/month',
          savings: '50% savings',
          link: '/ai-project-manager'
        },
        {
          name: 'AI Writing Assistant Pro',
          price: '$49/month',
          description: 'Advanced AI writing assistant with content optimization and SEO analysis',
          features: ['300% content output', '85% SEO score', '50% time savings', '50+ languages'],
          marketPrice: '$150-300/month',
          savings: '67% savings',
          link: '/ai-writing-assistant'
        },
        {
          name: 'AI Social Media Manager',
          price: '$89/month',
          description: 'Complete social media management with AI-powered content creation',
          features: ['200% engagement', '150% reach increase', '70% time savings', '6 platforms'],
          marketPrice: '$300-800/month',
          savings: '70% savings',
          link: '/ai-social-media-manager'
        },
        {
          name: 'AI CRM Intelligence',
          price: '$199/month',
          description: 'Advanced CRM with AI-powered customer insights and predictive analytics',
          features: ['45% sales increase', '60% customer retention', '35% deal closure', 'Automated follow-ups'],
          marketPrice: '$500-1500/month',
          savings: '60% savings',
          link: '/ai-crm'
        },
        {
          name: 'AI Financial Analyzer Pro',
          price: '$299/month',
          description: 'Comprehensive financial analysis with AI-powered forecasting and risk assessment',
          features: ['95% forecast accuracy', '40% risk reduction', '25% cost savings', 'Automated reporting'],
          marketPrice: '$800-2000/month',
          savings: '63% savings',
          link: '/ai-financial-analyzer'
        },
        {
          name: 'AI Video Generator Pro',
          price: '$199/month',
          description: 'Professional video creation with AI-powered editing and effects',
          features: ['90% time savings', 'Professional quality', 'Unlimited videos', 'Brand consistency'],
          marketPrice: '$500-1500/month',
          savings: '60% savings',
          link: '/ai-video-generation'
        }
      ]
    },
    {
      title: 'Enterprise AI Solutions',
      icon: Cpu,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      description: 'Custom AI solutions for large organizations and complex business needs',
      services: [
        {
          name: 'Machine Learning Solutions',
          price: 'Starting at $5,000/month',
          description: 'Custom ML models tailored to your specific business requirements',
          features: ['Custom algorithms', 'Data preprocessing', 'Model training', 'Deployment support'],
          marketPrice: '$15,000-50,000/month',
          savings: '67% savings',
          link: '/machine-learning'
        },
        {
          name: 'AI Business Intelligence',
          price: 'Starting at $3,000/month',
          description: 'Advanced analytics and insights powered by artificial intelligence',
          features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Data visualization'],
          marketPrice: '$10,000-30,000/month',
          savings: '70% savings',
          link: '/ai-business-intelligence'
        },
        {
          name: 'AI Cybersecurity Shield',
          price: 'Starting at $2,500/month',
          description: 'Advanced cybersecurity with AI-powered threat detection and prevention',
          features: ['99.9% protection', 'Real-time response', 'Compliance assurance', '24/7 monitoring'],
          marketPrice: '$8,000-25,000/month',
          savings: '69% savings',
          link: '/ai-cybersecurity'
        },
        {
          name: 'AI Healthcare Solutions',
          price: 'Starting at $4,000/month',
          description: 'AI-powered healthcare applications for medical diagnosis and patient care',
          features: ['Medical diagnosis', 'Patient monitoring', 'Treatment recommendations', 'HIPAA compliance'],
          marketPrice: '$12,000-40,000/month',
          savings: '67% savings',
          link: '/ai-healthcare'
        },
        {
          name: 'AI Fintech Solutions',
          price: 'Starting at $3,500/month',
          description: 'Financial technology solutions powered by artificial intelligence',
          features: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Regulatory compliance'],
          marketPrice: '$10,000-35,000/month',
          savings: '65% savings',
          link: '/ai-fintech'
        },
        {
          name: 'AI Mobile App Development',
          price: 'Starting at $2,000/month',
          description: 'AI-powered mobile applications with intelligent features',
          features: ['Cross-platform development', 'AI integration', 'App store deployment', 'Maintenance support'],
          marketPrice: '$6,000-20,000/month',
          savings: '67% savings',
          link: '/ai-mobile-app-development'
        }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud Services',
      icon: Cloud,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        {
          name: 'Cloud Services & Migration',
          price: 'Starting at $1,500/month',
          description: 'Complete cloud migration and management services',
          features: ['AWS/Azure/GCP setup', 'Data migration', 'Cost optimization', '24/7 monitoring'],
          marketPrice: '$5,000-15,000/month',
          savings: '70% savings',
          link: '/cloud-services'
        },
        {
          name: 'Cybersecurity Solutions',
          price: 'Starting at $1,200/month',
          description: 'Advanced security solutions to protect your business',
          features: ['Firewall management', 'Threat detection', 'Incident response', 'Compliance support'],
          marketPrice: '$4,000-12,000/month',
          savings: '70% savings',
          link: '/cybersecurity'
        },
        {
          name: 'DevOps & CI/CD',
          price: 'Starting at $2,000/month',
          description: 'Automated development workflows and deployment pipelines',
          features: ['CI/CD setup', 'Container orchestration', 'Monitoring', 'Performance optimization'],
          marketPrice: '$6,000-18,000/month',
          savings: '67% savings',
          link: '/devops'
        },
        {
          name: 'Database Services',
          price: 'Starting at $800/month',
          description: 'Database design, optimization, and management services',
          features: ['Database design', 'Performance tuning', 'Backup solutions', 'Security hardening'],
          marketPrice: '$2,500-8,000/month',
          savings: '68% savings',
          link: '/database-services'
        },
        {
          name: 'Network Infrastructure',
          price: 'Starting at $1,000/month',
          description: 'Enterprise networking solutions and infrastructure management',
          features: ['Network design', 'Security implementation', 'Performance monitoring', 'Disaster recovery'],
          marketPrice: '$3,000-10,000/month',
          savings: '67% savings',
          link: '/network-infrastructure'
        },
        {
          name: 'IT Support & Helpdesk',
          price: 'Starting at $500/month',
          description: '24/7 technical support and helpdesk services',
          features: ['24/7 support', 'Remote assistance', 'Ticket management', 'Knowledge base'],
          marketPrice: '$1,500-5,000/month',
          savings: '67% savings',
          link: '/it-support'
        }
      ]
    },
    {
      title: 'Specialized Technology Solutions',
      icon: Settings,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      description: 'Cutting-edge technology solutions for specialized industries',
      services: [
        {
          name: 'Quantum Computing',
          price: 'Starting at $10,000/month',
          description: 'Quantum computing solutions for complex problem solving',
          features: ['Quantum algorithms', 'Hardware access', 'Research support', 'Custom solutions'],
          marketPrice: '$30,000-100,000/month',
          savings: '67% savings',
          link: '/quantum-computing'
        },
        {
          name: 'Autonomous Systems',
          price: 'Starting at $5,000/month',
          description: 'AI-powered autonomous systems for various applications',
          features: ['System design', 'AI integration', 'Testing', 'Deployment support'],
          marketPrice: '$15,000-50,000/month',
          savings: '67% savings',
          link: '/autonomous-systems'
        },
        {
          name: 'Blockchain & Web3',
          price: 'Starting at $3,000/month',
          description: 'Blockchain development and Web3 solutions',
          features: ['Smart contracts', 'DApp development', 'DeFi solutions', 'NFT platforms'],
          marketPrice: '$8,000-25,000/month',
          savings: '63% savings',
          link: '/blockchain'
        },
        {
          name: 'IoT & Edge Computing',
          price: 'Starting at $2,500/month',
          description: 'Internet of Things and edge computing solutions',
          features: ['Device integration', 'Data processing', 'Real-time analytics', 'Security'],
          marketPrice: '$7,000-20,000/month',
          savings: '64% savings',
          link: '/iot-edge'
        },
        {
          name: 'Business Intelligence',
          price: 'Starting at $2,000/month',
          description: 'Advanced business intelligence and analytics solutions',
          features: ['Data warehousing', 'ETL processes', 'Reporting', 'Predictive analytics'],
          marketPrice: '$6,000-18,000/month',
          savings: '67% savings',
          link: '/business-intelligence'
        },
        {
          name: 'Robotics Solutions',
          price: 'Starting at $4,000/month',
          description: 'AI-powered robotics solutions for automation',
          features: ['Robot design', 'AI integration', 'Programming', 'Maintenance'],
          marketPrice: '$12,000-35,000/month',
          savings: '67% savings',
          link: '/robotics'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Average 65% cost reduction compared to market rates. Our competitive pricing ensures maximum ROI for your business.',
      stats: '65% Average Savings'
    },
    {
      icon: Clock,
      title: 'Fast Deployment',
      description: 'Get started in days, not months. Our pre-built solutions and experienced team ensure rapid implementation.',
      stats: '90% Faster Deployment'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance. SOC 2 Type II certified with 99.9% uptime guarantee.',
      stats: '99.9% Uptime'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from our team of AI and IT experts. Dedicated account managers for enterprise clients.',
      stats: '24/7 Support'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Over 1000+ successful implementations. Our clients see measurable improvements within 30 days.',
      stats: '1000+ Clients'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions recognized by leading industry publications and technology organizations.',
      stats: '15+ Awards'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group has transformed our business operations. The AI solutions have increased our productivity by 200% while reducing costs by 60%.',
      rating: 5,
      savings: '$50,000/month'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The micro SAAS solutions are game-changers. We\'re now able to compete with much larger companies thanks to their AI-powered tools.',
      rating: 5,
      savings: '$25,000/month'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'Their IT infrastructure services are exceptional. We\'ve achieved 99.9% uptime and reduced our IT costs by 70% since partnering with them.',
      rating: 5,
      savings: '$75,000/month'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: '24/7 Support Available'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI & IT Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive AI and IT solutions. 
            Get enterprise-grade technology at startup prices with 65% average cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-cyan-400 mb-2">65%</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-gray-300">Successful Projects</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Expert Support</div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Service Categories</h2>
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-700/70 transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-white text-lg">{service.name}</h4>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                          <div className="text-sm text-gray-400">vs {service.marketPrice}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-green-400">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-green-400">{service.savings}</span>
                        <a
                          href={service.link}
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  <div className="text-lg font-bold text-green-400 mt-2">Saves {testimonial.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Ready to Get Started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1">Phone</h3>
                <p className="text-gray-300">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1">Address</h3>
                <p className="text-gray-300 text-sm">{contactInfo.address}</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <h3 className="font-bold text-white mb-1">Support</h3>
                <p className="text-gray-300">{contactInfo.hours}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesAdvertisingPage;