import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Workflow, 
  BarChart3, 
  ArrowRight, 
  CheckCircle, 
  Star,
  DollarSign,
  ExternalLink,
  Play,
  Target,
  PieChart,
  Activity,
  Eye,
  Headphones,
  Mail,
  Phone,
  Settings,
  Clock,
  Users,
  Cpu,
  Network,
  Database,
  Shield,
  Monitor,
  HardDrive,
  Wifi,
  Zap,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      icon: Brain,
      title: "AI Customer Insights Platform",
      description: "Transform customer feedback into actionable insights with real-time sentiment analysis and predictive analytics.",
      category: "AI Services",
      price: "Starting at $299/month",
      features: [
        "Real-time sentiment analysis",
        "Predictive customer analytics",
        "Multi-channel feedback aggregation",
        "Customer journey mapping",
        "Privacy-first data processing"
      ],
      link: "/services/ai-customer-insights-platform",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Workflow,
      title: "AI Workflow Automation Studio",
      description: "Automate complex business processes with visual workflow builder and 500+ integrations.",
      category: "Micro SaaS",
      price: "Starting at $199/month",
      features: [
        "Visual workflow builder",
        "AI-powered automation",
        "500+ integrations",
        "Real-time triggers",
        "Enterprise security"
      ],
      link: "/services/ai-workflow-automation-studio",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Cloud,
      title: "Enterprise Cloud Migration",
      description: "Expert cloud migration services with zero-downtime migration to AWS, Azure, or GCP.",
      category: "IT Services",
      price: "Starting at $15,000",
      features: [
        "Multi-cloud strategy",
        "Legacy system modernization",
        "Security-first approach",
        "Performance optimization",
        "24/7 monitoring & support"
      ],
      link: "/services/enterprise-cloud-migration",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "AI Predictive Analytics Engine",
      description: "Advanced AI analytics engine with 95%+ accuracy for real-time forecasting and business intelligence.",
      category: "AI Services",
      price: "Starting at $499/month",
      features: [
        "Advanced ML models",
        "Real-time predictions",
        "Multi-domain forecasting",
        "Automated model training",
        "Explainable AI"
      ],
      link: "/services/ai-predictive-analytics-engine",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description: "Competitive pricing with transparent costs and no hidden fees. See ROI within 30 days."
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Quick deployment with minimal setup time. Get started in days, not months."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 compliant with end-to-end encryption and 24/7 security monitoring."
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support across all time zones with dedicated customer success managers."
    }
  ];

  const industries = [
    { name: "Financial Services", icon: DollarSign },
    { name: "Healthcare", icon: Activity },
    { name: "Manufacturing", icon: Settings },
    { name: "Retail & E-commerce", icon: ShoppingCart },
    { name: "Technology", icon: Cpu },
    { name: "Education", icon: Users }
  ];

  return (
    <>
      <Helmet>
        <title>New Services 2025 - Zion Tech Group</title>
        <meta name="description" content="Discover our latest AI, IT, and Micro SaaS services for 2025. Advanced analytics, workflow automation, cloud migration, and customer insights. Contact: +1 302 464 0950" />
        <meta name="keywords" content="new services 2025, AI services, IT services, micro SaaS, cloud migration, predictive analytics, workflow automation" />
        <link rel="canonical" href="https://ziontechgroup.com/new-services-2025" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                New Services 2025
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Revolutionary
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> New Services</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Discover our latest AI, IT, and Micro SaaS solutions designed to transform your business. 
                Cutting-edge technology with proven results and transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* New Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Latest Services
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Revolutionary solutions combining AI, cloud technology, and automation to drive business success
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full mr-3">
                          {service.category}
                        </span>
                        <span className="text-sm font-semibold text-green-400">
                          {service.price}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={service.link}
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Proven results with measurable business impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted Across Industries
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our services are trusted by leading companies across various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of companies already using our revolutionary services to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Questions? Call us at <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">+1 302 464 0950</a></p>
              <p className="mt-2">Visit us at <span className="text-purple-400">364 E Main St STE 1008, Middletown DE 19709</span></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}