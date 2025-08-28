import React from 'react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Globe, 
  Shield, 
  Rocket, 
  Zap, 
  Bot, 
  Mail, 
  BarChart3,
  Brain,
  Lock,
  Cloud,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Code,
  TrendingUp,
  Users,
  Target,
  Award,
  Star,
  Phone,
  MapPin,
  Mail as MailIcon,
  BarChart,
  PieChart,
  Activity,
  Zap as Lightning
} from 'lucide-react';

const EnhancedServicesLanding: React.FC = () => {
  const featuredServices = [
    {
      id: 'ai-business-intelligence',
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform. Achieve 95% accuracy in predictions and 10x faster decision-making.',
      icon: Brain,
      price: '$2,999/month',
      roi: '300-500% ROI',
      features: ['Predictive Analytics', 'Natural Language Queries', 'Real-time Dashboards', 'Automated Insights'],
      category: 'AI & Analytics'
    },
    {
      id: 'zero-trust-security',
      title: 'Zero Trust Cybersecurity Suite',
      description: 'Next-generation security with AI-powered threat detection, behavioral analytics, and automated incident response.',
      icon: Shield,
      price: '$4,999/month',
      roi: '400-600% ROI',
      features: ['Zero Trust Architecture', 'AI Threat Detection', 'Behavioral Analytics', '24/7 SOC'],
      category: 'Cybersecurity'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing as a Service',
      description: 'Access quantum computing power through the cloud for complex optimization and simulation problems.',
      icon: Cpu,
      price: '$15,000/month',
      roi: '500-1000% ROI',
      features: ['Multi-Quantum Processors', 'Hybrid Computing', 'Financial Modeling', 'Drug Discovery'],
      category: 'Quantum Computing'
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3 Platform',
      description: 'Build, deploy, and manage blockchain applications, smart contracts, and DeFi protocols with enterprise-grade security.',
      icon: Database,
      price: '$5,999/month',
      roi: '300-500% ROI',
      features: ['Multi-Blockchain Support', 'Smart Contract Development', 'DeFi Protocols', 'NFT Marketplaces'],
      category: 'Blockchain & Web3'
    },
    {
      id: 'fintech-regtech',
      title: 'FinTech & RegTech Platform',
      description: 'Modernize financial services with AI-powered compliance, fraud detection, and automated regulatory reporting.',
      icon: DollarSign,
      price: '$6,999/month',
      roi: '400-600% ROI',
      features: ['AI Fraud Detection', 'Automated Compliance', 'Real-time Monitoring', 'Regulatory Reporting'],
      category: 'Financial Technology'
    },
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI & Telemedicine',
      description: 'Revolutionize healthcare delivery with AI-powered diagnostics, remote patient monitoring, and predictive health analytics.',
      icon: Users,
      price: '$5,499/month',
      roi: '300-500% ROI',
      features: ['AI Diagnostics', 'Telemedicine Platform', 'Patient Monitoring', 'Health Analytics'],
      category: 'Healthcare Technology'
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence solutions for business transformation',
      services: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Machine Learning Models'],
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions with zero trust architecture',
      services: ['Zero Trust Security', 'Threat Detection', 'Compliance Management', 'Incident Response'],
      icon: Shield,
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions with AI-powered optimization',
      services: ['Cloud Management', 'DevOps Automation', 'Infrastructure as Code', 'Performance Monitoring'],
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Emerging Technologies',
      description: 'Future-ready solutions including quantum computing and blockchain',
      services: ['Quantum Computing', 'Blockchain Development', 'Web3 Solutions', 'Space Technology'],
      icon: Rocket,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Proven ROI',
      description: 'Average 300-1000% return on investment within 6-12 months'
    },
    {
      icon: Award,
      title: 'Enterprise Quality',
      description: 'SOC 2, ISO 27001, and industry-leading security standards'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support with dedicated account management'
    },
    {
      icon: TrendingUp,
      title: 'Future-Ready',
      description: 'Built for 2030 and beyond with cutting-edge technology'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp Solutions',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group transformed our data analytics capabilities. We achieved 95% accuracy in predictions and reduced decision-making time by 10x.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'VP of Engineering, InnovateTech',
      company: 'InnovateTech',
      content: 'Their zero trust security implementation reduced our security incidents by 90% and ensured full compliance with industry regulations.',
      rating: 5
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Chief Medical Officer, HealthTech Inc',
      company: 'HealthTech Inc',
      content: 'The healthcare AI platform improved our diagnostic accuracy by 30% and enabled 24/7 remote patient monitoring.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Enhanced Services - Zion Tech Group"
        description="Discover our comprehensive suite of innovative micro SAAS, IT, and AI services. Transform your business with cutting-edge technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Business with Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Unlock the power of cutting-edge technology with our comprehensive suite of micro SAAS, IT, and AI services. 
              Built for the future, delivering measurable results today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/comprehensive-2030"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="bg-slate-800/50 border border-slate-600 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-blue-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-4 w-4 text-purple-400 mr-2" />
                  <span className="text-purple-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-green-300">Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our most popular and impactful solutions that are transforming businesses across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <span className="text-xs text-blue-400 font-medium">{service.category}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-green-400 font-medium">{service.roi}</span>
                </div>
              </div>

              <Link
                to={`/services/${service.id}`}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 block"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-blue-500/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across all major technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">{category.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm">
                      <ArrowRight className="h-3 w-3 text-blue-400 mr-2" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-blue-500/30">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses that have transformed with our technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our innovative technology solutions to gain competitive advantage and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/comprehensive-2030"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedServicesLanding;