import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Palette,
  FileText,
  Video,
  Music,
  Camera,
  Car,
  Home,
  ShoppingCart,
  CreditCard,
  Calendar,
  MessageSquare,
  FileImage,
  Monitor,
  Server,
  Network,
  Key,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Star,
  Award,
  Lightbulb,
  Compass,
  Layers,
  GitBranch,
  Zap as Lightning,
  Globe as World,
  Shield as Security,
  Heart,
  Leaf,
  Sun,
  Moon,
  Wind,
  Droplets,
  Flame,
  Snowflake,
  Package,
  BookOpen,
  Factory,
  ShoppingBag,
  Atom
=======
  Shield, 
  TrendingUp, 
  Database,
  Cpu,
  BarChart3,
  Target,
  Rocket,
  Brain,
  Monitor,
  Key,
  Settings,
  Cloud
=======
  ArrowRight,
  Brain
=======
  Building, 
  Rocket, 
  Cpu, 
  BarChart3 
} from 'lucide-react';

export default function MicroSAASSolutions() {
  const services = [
    {
      title: "Custom SAAS Development",
      description: "Tailored software-as-a-service solutions designed specifically for your business needs and industry requirements.",
      icon: Code,
      features: ["Custom workflows", "API integration", "User management", "Scalable architecture"]
    },
    {
      title: "Multi-tenant Architecture",
      description: "Efficient multi-tenant systems that maximize resource utilization while maintaining data isolation and security.",
      icon: Users,
      price: "$3,200",
      pricingModel: "monthly",
      features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"],
      benefits: ["Reduce infrastructure costs by 50%", "Improved resource utilization", "Enhanced security isolation", "Scalable architecture"],
      marketPrice: "$3,200 - $20,000/month",
      roi: "400-600% within 24 months"
=======
      features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"]
    },
    {
      title: "Subscription Management",
      description: "Comprehensive billing and subscription systems with flexible pricing models and automated renewals.",
      icon: BarChart3,
      price: "$1,800",
      pricingModel: "monthly",
      features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"],
      benefits: ["Increase revenue by 35%", "Reduce billing errors by 90%", "Automated renewals", "Better cash flow"],
      marketPrice: "$1,800 - $8,000/month",
      roi: "250-400% within 12 months"
=======
      features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"]
    },
    {
      title: "API Development & Integration",
      description: "Robust APIs that enable seamless integration with existing systems and third-party applications.",
      icon: Cpu,
      price: "$2,200",
      pricingModel: "monthly",
      features: ["RESTful APIs", "GraphQL support", "Webhook integration", "API documentation"],
      benefits: ["Faster system integration", "Reduced development costs", "Better third-party connectivity", "Enhanced user experience"],
      marketPrice: "$2,200 - $12,000/month",
      roi: "350-500% within 15 months"
=======
      features: ["RESTful APIs", "GraphQL support", "Webhook integration", "API documentation"]
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics dashboards providing insights into user behavior, system performance, and business metrics.",
      icon: TrendingUp,
      price: "$1,500",
      pricingModel: "monthly",
      features: ["Real-time metrics", "Custom reports", "Data visualization", "Export capabilities"],
      benefits: ["Improve decision making by 45%", "Identify growth opportunities", "Better user insights", "Data-driven strategies"],
      marketPrice: "$1,500 - $6,000/month",
      roi: "300-450% within 12 months"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that streamline business processes and improve operational efficiency.",
      icon: Zap,
      price: "$2,800",
      pricingModel: "monthly",
      features: ["Process automation", "AI decision making", "Workflow optimization", "Performance monitoring"],
      benefits: ["Reduce operational costs by 40%", "Improve efficiency by 60%", "24/7 automation", "Better resource utilization"],
      marketPrice: "$2,800 - $18,000/month",
      roi: "400-700% within 18 months"
=======
      title: "Custom Micro SAAS",
      description: "Tailored micro applications designed specifically for your business needs and workflows.",
      icon: Settings
    },
    {
      title: "Integration Services",
      description: "Seamless integration with existing systems and third-party applications.",
      icon: Cpu
    },
    {
      title: "API Development",
      description: "Robust APIs that enable your micro SAAS to communicate with other systems.",
      icon: Database
    },
    {
      title: "Cloud Deployment",
      description: "Scalable cloud deployment with automatic scaling and high availability.",
      icon: Cloud
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your applications.",
      icon: Monitor
    },
    {
      title: "Analytics & Insights",
      description: "Built-in analytics to track usage, performance, and user behavior.",
      icon: BarChart3
    }
  ];

  const technologies = [
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "PostgreSQL & MongoDB",
    "AWS & Azure",
    "Docker & Kubernetes",
    "GraphQL APIs",
    "Real-time WebSockets"
  ];

  const benefits = [
    {
      description: "Quick time-to-market with agile development methodologies and pre-built AI models",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one with cloud-native architecture",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with pay-as-you-grow pricing and automated optimization",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security protocols and compliance standards to protect your business",
      icon: Shield,
      color: "text-red-400"
    },
    {
      title: "AI-First Design",
      description: "Every solution is built with artificial intelligence at its core for maximum efficiency",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to keep your systems running",
      icon: Clock,
      color: "text-cyan-400"
=======
=======
      features: ["Real-time metrics", "Custom reports", "Data visualization", "Export capabilities"]
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Quick time-to-market with agile development methodologies",
      icon: Zap
    },
    {
      title: "Scalability",
      description: "Built to grow with your business from day one",
      icon: TrendingUp
    },
    {
      title: "Cost Efficiency",
      description: "Reduced infrastructure costs with cloud-native solutions",
      icon: BarChart3
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance standards",
      icon: Shield
    }
  ];

  const industries = [
    {
      name: "Healthcare",
=======
      description: "HIPAA-compliant patient management systems",
      icon: Building
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools",
      icon: Building
    },
    {
      name: "Education",
      description: "Learning management and student tracking",
      icon: Building
    },
    {
      name: "Real Estate",
      description: "Property management and client portals",
      title: "Cost Efficiency",
      description: "Lower development and maintenance costs compared to large enterprise applications.",
      icon: TrendingUp
    },
    {
      title: "Faster Deployment",
      description: "Get your solutions to market quickly with streamlined development processes.",
      icon: Rocket
    },
    {
      title: "Easier Maintenance",
      description: "Simplified codebases that are easier to maintain and update.",
      icon: Settings
    },
    {
      title: "Better User Experience",
      description: "Focused applications that provide superior user experience and satisfaction.",
      icon: Users
=======
      icon: Building
    }
  ];

  return (
        description="Custom software-as-a-service solutions designed for rapid deployment, scalability, and business growth across industries."
        tags={["micro SAAS", "custom software", "subscription management", "multi-tenant", "API development", "business software"]}
        url="https://ziontechgroup.com/services/micro-saas-solutions"
      />

      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Innovative AI-powered micro SAAS solutions designed for rapid deployment, scalability, and business growth across industries. Save up to 60% on costs with our intelligent automation platforms."
        keywords="micro SAAS, AI software, business automation, subscription management, multi-tenant, API development, business software, AI tools, automation platform"
        canonical="https://ziontechgroup.com/services/micro-saas-solutions"
=======
        description="Cutting-edge micro SAAS solutions powered by AI, designed for rapid deployment, scalability, and business transformation across industries."
        keywords="micro saas, ai solutions, business intelligence, cybersecurity, workflow automation, customer success, supply chain, document processing"
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Custom software-as-a-service solutions designed for rapid deployment, scalability, and business growth across industries."
        keywords="micro SAAS, custom software, subscription management, multi-tenant, API development, business software"
        canonical="https://ziontechgroup.com/services/micro-saas-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Rapid Deployment, Maximum Impact
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business ideas into powerful, scalable software solutions with our micro SAAS development 
            services designed for rapid deployment and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Portfolio
            </button>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
              AI-Powered Software Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Transform your business operations with our intelligent micro SAAS platforms. 
              From AI-powered analytics to quantum-safe security, we deliver solutions that 
              scale with your business and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#services" className="futuristic-btn text-lg px-8 py-4 group">
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300">
                Get Custom Quote
              </a>
            </div>
=======
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive SAAS Development Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end micro SAAS development services that 
              accelerate your business growth and digital transformation.
            </p>
          </div>
          
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Micro SAAS Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From AI content generation to intelligent project management, we provide cutting-edge micro SAAS solutions 
              that accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center pt-4 border-t border-zion-blue-light">
                  <div className="text-zion-cyan font-semibold">{service.price}</div>
                  <div className="text-sm text-zion-slate">Delivery: {service.delivery}</div>
                </div>
=======
              <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '')) / parseInt(service.marketPrice.replace('$', ''))) * 100)}%
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
=======
                
                {/* Pricing */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-zion-blue-dark">
                      {service.price}
                    </div>
                    <div className="text-sm text-zion-slate">
                      per {service.pricingModel}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate">
                        <div className="w-2 h-2 bg-zion-purple rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Info */}
                <div className="mb-4 p-3 bg-zion-blue-light rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate">Market Price:</span>
                    <span className="text-zion-blue-dark font-semibold">{service.marketPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="text-zion-slate">ROI:</span>
                    <span className="text-green-600 font-semibold">{service.roi}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <a
                    href="mailto:kleber@ziontechgroup.com?subject=Inquiry about Micro SAAS Solutions - ${service.title}"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                </div>
=======
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end services to build, deploy, and maintain your micro SAAS applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
=======
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose Our Micro SAAS Solutions?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the advantages of rapid development, AI-powered intelligence, and cost-effective solutions 
              designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-2">
                  {benefit.description}
                </p>
                <p className="text-sm text-green-400 font-medium">
                  {benefit.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-900/30 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Transparent Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/25' 
                  : 'border-gray-700/50 hover:border-cyan-500/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}>
                  Get Started
                </button>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Micro SAAS solutions offer significant advantages over traditional enterprise applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${industry.color} p-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-1">
                  {industry.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center text-xs text-zion-slate">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
=======
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industry-Specific Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Tailored micro SAAS solutions designed for the unique requirements and compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center group-hover:text-blue-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4 text-center">
                  {industry.description}
=======
              Experience the advantages of rapid development, scalability, and cost-effective solutions 
              designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored micro SAAS solutions designed for the unique requirements and compliance needs of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SAAS Solution?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Let us help you transform your business idea into a powerful, scalable software solution 
            that drives growth and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have already revolutionized their operations with our AI-powered SAAS solutions
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/contact"
                  className="futuristic-btn text-lg px-8 py-4 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="/pricing"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SAAS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how micro SAAS solutions can solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-purple-500/30"
            >
              Start Project
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-purple-400/50 text-purple-400 rounded-lg hover:bg-purple-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
          <div className="text-center text-gray-400">
            <p className="mb-2">Contact us for custom enterprise solutions</p>
            <p className="text-sm">
              📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a> | 
              📧 <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm mt-2">
              📍 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
=======
          </div>
        </div>
      </section>
    </div>
  );
}