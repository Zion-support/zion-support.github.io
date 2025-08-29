import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Rocket, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Users,
  Target,
  Globe,
  Cpu,
  Database,
  Lock,
  Eye,
  Activity,
  BarChart3,
  TrendingUp,
  Code,
  Cloud,
  Smartphone,
  Server,
  Network,
  Palette,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ShoppingCart
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      description: 'Transform your business with intelligent automation and predictive insights',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      services: [
        {
          name: 'AI Business Intelligence',
          description: 'Predictive analytics and business insights with 95%+ accuracy',
          href: '/services/ai-business-intelligence',
          price: 'From $2,500/month',
          features: ['Predictive analytics', 'Real-time dashboards', 'Customer intelligence', 'Performance optimization'],
          popular: true
        },
        {
          name: 'AI Content Creation Suite',
          description: 'Automated content generation and marketing automation',
          href: '/services/ai-content-creation-suite',
          price: 'From $1,800/month',
          features: ['Content generation', 'Marketing automation', 'SEO optimization', 'Brand consistency']
        },
        {
          name: 'AI Sales Copilot',
          description: 'Intelligent sales automation and lead scoring',
          href: '/services/ai-sales-copilot',
          price: 'From $2,200/month',
          features: ['Lead scoring', 'Sales automation', 'Pipeline optimization', 'Revenue forecasting']
        },
        {
          name: 'AI Customer Support',
          description: '24/7 automated customer service with human-like interactions',
          href: '/services/ai-customer-support-automation',
          price: 'From $1,500/month',
          features: ['24/7 support', 'Multi-language', 'Ticket automation', 'Customer satisfaction']
        }
      ]
    },
    {
      title: 'Cybersecurity & Security',
      description: 'Protect your business with enterprise-grade security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      services: [
        {
          name: 'AI Cybersecurity Platform',
          description: 'Advanced threat detection and response with AI-powered intelligence',
          href: '/services/ai-cybersecurity-platform',
          price: 'From $3,500/month',
          features: ['AI threat detection', 'Zero-trust architecture', 'Automated response', 'Compliance ready'],
          popular: true
        },
        {
          name: 'Zero Trust Network Access',
          description: 'Secure remote access and network security',
          href: '/services/zero-trust-network-access',
          price: 'From $2,800/month',
          features: ['Secure access', 'Network segmentation', 'Identity verification', 'Threat prevention']
        },
        {
          name: 'Security Headers & CSP',
          description: 'Web application security hardening and protection',
          href: '/services/security-headers-csp',
          price: 'From $1,200/month',
          features: ['Security headers', 'Content Security Policy', 'XSS protection', 'HTTPS enforcement']
        },
        {
          name: 'DSR Portal',
          description: 'Data subject rights management and compliance',
          href: '/services/dsr-portal',
          price: 'From $1,500/month',
          features: ['GDPR compliance', 'Data requests', 'Privacy management', 'Audit trails']
        }
      ]
    },
    {
      title: 'Development & Platforms',
      description: 'Build and launch applications with enterprise-grade infrastructure',
      icon: Rocket,
      color: 'from-purple-500 to-indigo-600',
      services: [
        {
          name: 'Micro SAAS Platform',
          description: 'Rapid application development platform for micro SAAS applications',
          href: '/services/micro-saas-platform',
          price: 'From $1,500/month',
          features: ['Rapid development', 'Pre-built templates', 'AI integration', 'Auto-scaling'],
          popular: true
        },
        {
          name: 'Cloud DevOps Services',
          description: 'Infrastructure automation and management',
          href: '/services/cloud-devops',
          price: 'From $3,000/month',
          features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring', 'Automation']
        },
        {
          name: 'IT Infrastructure',
          description: 'Enterprise infrastructure solutions and management',
          href: '/services/it-infrastructure',
          price: 'From $4,500/month',
          features: ['Network management', 'Server administration', 'Backup solutions', '24/7 support']
        },
        {
          name: 'FinOps Optimization',
          description: 'Cloud cost optimization and financial operations',
          href: '/services/cloud-finops-optimizer',
          price: 'From $2,500/month',
          features: ['Cost optimization', 'Resource management', 'Budget tracking', 'ROI analysis']
        }
      ]
    }
  ];

  const industries = [
    {
      name: 'Financial Services',
      description: 'AI-powered risk management, fraud detection, and compliance solutions',
      icon: DollarSign,
      href: '/solutions/financial',
      services: ['AI Business Intelligence', 'AI Cybersecurity Platform', 'Compliance Management']
    },
    {
      name: 'Healthcare',
      description: 'Patient data security, AI diagnostics, and operational efficiency',
      icon: Activity,
      href: '/solutions/healthcare',
      services: ['AI Healthcare Analytics', 'HIPAA Compliance', 'Patient Data Security']
    },
    {
      name: 'Manufacturing',
      description: 'IoT integration, predictive maintenance, and supply chain optimization',
      icon: Cpu,
      href: '/solutions/manufacturing',
      services: ['IoT Edge Computing', 'Predictive Maintenance', 'Supply Chain AI']
    },
    {
      name: 'Retail & E-commerce',
      description: 'Customer analytics, inventory management, and personalized experiences',
      icon: ShoppingCart,
      href: '/solutions/retail',
      services: ['Customer Analytics', 'Inventory Management', 'Personalization Engine']
    }
  ];

  const stats = [
    { number: '50+', label: 'AI Services' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Helmet>
        <title>Technology Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, cybersecurity, and development services. Transform your business with our cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, cybersecurity, micro SAAS, technology consulting, digital transformation, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm mb-8">
            <Zap className="w-4 h-4 text-blue-300" />
            <span>Comprehensive Technology Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Cutting-Edge Technology
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            From AI-powered business intelligence to enterprise cybersecurity and rapid application development, 
            we provide the tools and expertise to accelerate your digital transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Technology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to address the most pressing technology challenges 
              facing modern businesses.
            </p>
          </div>

          <div className="space-y-20">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group">
                      <Link to={service.href} className="block">
                        <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                          service.popular ? 'border-blue-500 ring-4 ring-blue-500/20' : 'border-gray-100'
                        }`}>
                          {service.popular && (
                            <div className="absolute -top-3 left-6">
                              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Popular
                              </span>
                            </div>
                          )}

                          <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                          
                          <div className="mb-6">
                            <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                              Learn More
                            </span>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering tailored technology solutions for specific industries, 
              understanding the unique challenges and compliance requirements of each sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <Link to={industry.href} className="block">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Services:</h4>
                      <ul className="space-y-2">
                        {industry.services.map((service, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-sm">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Let's discuss how our technology services can help you achieve your business goals 
            and drive measurable outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Phone className="w-5 h-5 text-blue-300" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Mail className="w-5 h-5 text-blue-300" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <MapPin className="w-5 h-5 text-blue-300" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}