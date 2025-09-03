import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Target, 
  Users, 
  Shield, 
  BarChart3, 
  Cloud, 
  Lock, 
  TrendingUp, 
  Code, 
  Database, 
  Network, 
  Smartphone, 
  MessageSquare, 
  FileText, 
  ShoppingCart, 
  Headphones, 
  Search, 
  Clock, 
  Camera, 
  CreditCard, 
  Globe, 
  Monitor, 
  Server, 
  BarChart, 
  PieChart, 
  LineChart, 
  Activity, 
  Building2, 
  Home, 
  Car, 
  GraduationCap, 
  Heart, 
  ShoppingBag, 
  Briefcase, 
  Palette, 
  Music, 
  Video, 
  BookOpen, 
  Calendar, 
  Bell, 
  Eye, 
  Download, 
  Upload, 
  Share2, 
  QrCode, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Atom,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Play,
  ChevronRight,
  Sparkles,
  Infinity,
  Layers,
  Workflow,
  MessageCircle,
  HelpCircle,
  BookOpen as Book,
  Briefcase as Brief,
  Factory,
  Truck,
  Leaf,
  PieChart as Pie,
  LineChart as Line,
  BarChart as Bar
} from 'lucide-react';

export default function HomePage() {
  const heroStats = [
    { number: '500+', label: 'AI Solutions Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '$50M+', label: 'Revenue Generated', icon: TrendingUp },
    { number: '24/7', label: 'Expert Support', icon: Headphones }
  ];

  const serviceCategories = [
    {
      name: "AI-Powered Solutions",
      description: "Revolutionary AI services that transform business operations",
      icon: Brain,
      count: 25,
      color: "from-purple-400 to-pink-500",
      href: "/ai-services",
      services: [
        "AI Revenue Optimization - From $2,999/month",
        "AI Customer Experience - From $1,499/month", 
        "AI Autonomous DevOps - From $2,299/month",
        "AI Business Intelligence - From $1,799/month"
      ],
      benefits: ["Increase efficiency by 300%", "Reduce costs by 60%", "24/7 AI monitoring", "Scalable solutions"]
    },
    {
      name: "Micro SAAS Platforms",
      description: "Innovative software solutions for modern businesses",
      icon: Building2,
      count: 35,
      color: "from-blue-400 to-cyan-500",
      href: "/micro-saas",
      services: [
        "Content Creation Studio - From $299/month",
        "Project Management Hub - From $199/month",
        "Customer Support Center - From $149/month",
        "Sales Analytics Dashboard - From $399/month"
      ],
      benefits: ["Quick deployment", "User-friendly interface", "Affordable pricing", "Custom integrations"]
    },
    {
      name: "IT Infrastructure",
      description: "Enterprise-grade technology solutions and services",
      icon: Cloud,
      count: 20,
      color: "from-green-400 to-emerald-500",
      href: "/it-services",
      services: [
        "Cloud Migration Services - From $2,999/project",
        "DevOps Automation - From $1,999/month",
        "Cybersecurity Solutions - From $1,499/month",
        "Digital Transformation - From $5,999/project"
      ],
      benefits: ["Enterprise security", "Scalable infrastructure", "Expert implementation", "24/7 monitoring"]
    },
    {
      name: "Quantum Computing",
      description: "Next-generation quantum solutions for complex problems",
      icon: Atom,
      count: 8,
      color: "from-cyan-400 to-blue-500",
      href: "/quantum-services",
      services: [
        "Quantum AI Platform - From $8,999/month",
        "Quantum Trading Platform - From $12,999/month",
        "Quantum Machine Learning - From $6,999/month",
        "Quantum Edge Computing - From $9,999/month"
      ],
      benefits: ["Exponential processing power", "Future-proof technology", "Advanced algorithms", "Competitive advantage"]
    }
  ];

  const featuredServices = [
    {
      title: "AI Revenue Optimization Platform",
      description: "Increase revenue by 25-40% with AI-powered optimization that intelligently manages pricing, forecasting, and customer analytics.",
      price: "From $2,999/month",
      features: ["AI-Powered Revenue Forecasting", "Dynamic Pricing Optimization", "Customer Lifetime Value Analysis", "Revenue Leakage Detection"],
      href: "/services/ai-revenue-optimization-platform",
      color: "from-purple-400 to-pink-500",
      popular: true,
      benefits: ["Increase revenue by 25-40%", "Reduce revenue leakage by 60%", "Optimize pricing strategies", "Improve customer retention"]
    },
    {
      title: "AI Autonomous DevOps Platform",
      description: "Eliminate 95% of manual DevOps tasks and reduce deployment time by 80% with intelligent automation.",
      price: "From $2,299/month",
      features: ["Automated CI/CD Pipelines", "Intelligent Monitoring", "Self-Healing Infrastructure", "Predictive Scaling"],
      href: "/services/ai-autonomous-devops-platform",
      color: "from-blue-400 to-cyan-500",
      popular: false,
      benefits: ["95% reduction in manual tasks", "80% faster deployments", "99.9% uptime guarantee", "Cost optimization"]
    },
    {
      title: "Quantum AI Trading Platform",
      description: "Revolutionary quantum computing meets AI for unprecedented trading performance and market analysis.",
      price: "From $12,999/month",
      features: ["Quantum Algorithm Trading", "Real-time Market Analysis", "Risk Management", "Portfolio Optimization"],
      href: "/services/quantum-ai-trading-platform",
      color: "from-cyan-400 to-blue-500",
      popular: false,
      benefits: ["Superior market prediction", "Quantum speed advantage", "Advanced risk modeling", "Maximum returns"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech Group's AI solutions increased our operational efficiency by 300% and reduced costs by 60%. Their quantum computing platform gave us a significant competitive advantage.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Global Enterprises",
      role: "CEO",
      content: "The micro SAAS platforms are incredibly user-friendly and affordable. We deployed 5 different solutions in just 2 weeks. The ROI was immediate.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      role: "Head of Technology",
      content: "Their IT infrastructure services are top-notch. The cloud migration was seamless, and the cybersecurity implementation exceeded our expectations.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "+1 302 464 0950",
      href: "tel:+13024640950",
      description: "Call us for immediate support"
    },
    {
      icon: Mail,
      text: "kleber@ziontechgroup.com",
      href: "mailto:kleber@ziontechgroup.com",
      description: "Email us for detailed inquiries"
    },
    {
      icon: MapPin,
      text: "364 E Main St STE 1008 Middletown DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709",
      description: "Visit our headquarters"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI, Quantum Computing & Micro SAAS Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, quantum computing services, micro SAAS platforms, and IT infrastructure. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, quantum computing, micro SAAS, IT infrastructure, business automation, cloud services, cybersecurity" />
        <meta property="og:title" content="Zion Tech Group - AI, Quantum Computing & Micro SAAS Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, quantum computing services, micro SAAS platforms, and IT infrastructure." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-cyan-500/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Sparkles className="h-6 w-6 text-zion-purple animate-pulse" />
                <span className="text-zion-purple font-semibold text-sm uppercase tracking-wider">
                  Leading Technology Innovation
                </span>
                <Sparkles className="h-6 w-6 text-zion-purple animate-pulse" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-zion-purple to-cyan-400 bg-clip-text text-transparent">
                  AI & Quantum Technology
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Unlock unprecedented growth with our comprehensive suite of AI-powered solutions, 
                quantum computing services, and innovative micro SAAS platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Get Free Consultation</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-zion-purple text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-purple hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="h-5 w-5" />
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {heroStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="h-8 w-8 text-zion-purple" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Comprehensive Technology Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From AI automation to quantum computing, we provide cutting-edge solutions 
                that drive innovation and accelerate business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="group">
                  <Link to={category.href} className="block">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate rounded-xl p-6 h-full hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                          <category.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-sm text-gray-400">{category.count} Services</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-purple transition-colors">
                        {category.name}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {category.services.slice(0, 2).map((service, serviceIndex) => (
                          <div key={serviceIndex} className="text-xs text-gray-400 flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span>{service}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-zion-purple text-sm font-medium group-hover:text-zion-purple-light transition-colors">
                        <span>Explore Services</span>
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 lg:py-24 bg-zion-slate-dark/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Featured Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most popular and innovative services that are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}
                  
                  <Link to={service.href} className="block">
                    <div className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate rounded-xl p-6 h-full hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <div className={`w-full h-2 bg-gradient-to-r ${service.color} rounded-lg mb-6`}></div>
                      
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-purple transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-xs text-gray-400 flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-zion-purple">{service.price}</span>
                        <ArrowRight className="h-5 w-5 text-zion-purple group-hover:translate-x-1 transition-transform" />
                      </div>
                      
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="text-xs text-green-400 flex items-center space-x-2">
                            <TrendingUp className="h-3 w-3" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-cyan-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-zion-slate-dark/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our experts to discuss how our solutions can drive your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-zion-purple to-cyan-400 rounded-lg">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-zion-purple transition-colors">
                        {contact.text}
                      </h3>
                      <p className="text-gray-400 text-sm">{contact.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Start Your Project Today</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}