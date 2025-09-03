<<<<<<< HEAD
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3, Users, Globe, Star, Award, Rocket, Lightbulb } from "lucide-react"

export default function Services() {
  const serviceCategories = [
    {
      name: "AI-Powered Solutions",
      description: "Revolutionary AI services that transform business operations",
      icon: Brain,
      count: 45,
      color: "from-purple-400 to-pink-500",
      href: "/ai-services",
      services: ["AI Revenue Optimization", "AI Customer Experience", "AI Autonomous DevOps", "AI Business Intelligence", "AI Legal Research", "AI Healthcare Analytics", "AI Financial Trading", "AI Supply Chain Optimization"]
    },
    {
      name: "Micro SAAS Platforms",
      description: "Innovative software solutions for modern businesses",
      icon: Database,
      count: 65,
      color: "from-blue-400 to-cyan-500",
      href: "/micro-saas",
      services: ["Content Creation Studio", "Project Management", "Customer Support", "Sales Analytics", "Invoice Automation", "Social Media Scheduler", "Email Marketing", "Time Tracking"]
    },
    {
      name: "IT Infrastructure",
      description: "Enterprise-grade technology solutions and services",
      icon: Shield,
      count: 35,
      color: "from-green-400 to-emerald-500",
      href: "/it-services",
      services: ["Quantum Secure Infrastructure", "Edge Computing", "Cloud Migration", "Cybersecurity", "DevOps Automation", "Network Security", "Data Backup", "IT Consulting"]
    },
    {
      name: "Business Automation",
      description: "Streamline operations with intelligent automation solutions",
      icon: Zap,
      count: 25,
      color: "from-orange-400 to-red-500",
      href: "/business-automation",
      services: ["Workflow Automation", "Document Processing", "Customer Onboarding", "Inventory Management", "HR Automation", "Financial Reporting", "Lead Generation", "Quality Assurance"]
    },
    {
      name: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      icon: Rocket,
      count: 30,
      color: "from-teal-400 to-blue-500",
      href: "/digital-transformation",
      services: ["Cloud Migration", "API Integration", "Mobile App Development", "Web Development", "E-commerce Solutions", "Digital Marketing", "SEO Optimization", "Analytics Dashboard"]
    }
  ]

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
      title: "Smart Invoice Automation Suite",
      description: "Automate 95% of invoice processing with AI-powered document recognition and approval workflows.",
      price: "From $299/month",
      features: ["AI Document Recognition", "Automated Approval Workflows", "Multi-Currency Support", "Real-time Analytics"],
      href: "/services/smart-invoice-automation-suite",
      color: "from-green-400 to-emerald-500",
      popular: true,
      benefits: ["Reduce processing time by 95%", "Eliminate manual data entry", "Improve accuracy by 99.8%", "Save 20+ hours weekly"]
    },
    {
      title: "AI Social Media Content Studio",
      description: "Generate engaging social media content 10x faster with AI-powered creation and scheduling tools.",
      price: "From $199/month",
      features: ["AI Content Generation", "Multi-Platform Scheduling", "Brand Voice Consistency", "Performance Analytics"],
      href: "/services/ai-social-media-content-studio",
      color: "from-blue-400 to-cyan-500",
      benefits: ["Create content 10x faster", "Increase engagement by 45%", "Maintain brand consistency", "Save 15+ hours weekly"]
    },
    {
      title: "AI Customer Support Automation",
      description: "Resolve 80% of customer inquiries instantly with intelligent chatbots and automated workflows.",
      price: "From $499/month",
      features: ["Intelligent Chatbots", "Multi-Language Support", "Sentiment Analysis", "Escalation Management"],
      href: "/services/ai-customer-support-automation",
      color: "from-orange-400 to-red-500",
      benefits: ["Resolve 80% of inquiries instantly", "Reduce support costs by 60%", "Improve customer satisfaction", "24/7 availability"]
    },
    {
      title: "AI Project Management Platform",
      description: "Streamline project delivery with AI-powered task management, resource optimization, and risk prediction.",
      price: "From $399/month",
      features: ["AI Task Prioritization", "Resource Optimization", "Risk Prediction", "Progress Analytics"],
      href: "/services/ai-project-management-platform",
      color: "from-indigo-400 to-purple-500",
      benefits: ["Improve delivery time by 35%", "Reduce project risks by 70%", "Optimize resource allocation", "Increase team productivity"]
    },
    {
      title: "AI Email Marketing Automation",
      description: "Boost email engagement by 65% with AI-powered personalization and send-time optimization.",
      price: "From $199/month",
      features: ["AI Personalization", "Send-Time Optimization", "A/B Testing", "Advanced Analytics"],
      href: "/services/ai-email-marketing-automation",
      color: "from-teal-400 to-blue-500",
      benefits: ["Increase open rates by 45%", "Boost click-through rates by 65%", "Reduce unsubscribe rates", "Improve ROI by 200%"]
    },
    {
      title: "AI Time Tracking & Productivity",
      description: "Optimize team productivity with AI-powered time tracking and intelligent insights.",
      price: "From $149/month",
      features: ["Automatic Time Tracking", "Productivity Analytics", "Distraction Detection", "Performance Insights"],
      href: "/services/ai-time-tracking-productivity",
      color: "from-yellow-400 to-orange-500",
      benefits: ["Increase productivity by 25%", "Reduce time waste by 40%", "Improve focus time", "Optimize work schedules"]
    },
    {
      title: "AI Legal Document Analyzer",
      description: "Analyze legal documents 50x faster with AI-powered contract review and risk assessment.",
      price: "From $799/month",
      features: ["Contract Analysis", "Risk Assessment", "Compliance Checking", "Document Comparison"],
      href: "/services/ai-legal-document-analyzer",
      color: "from-red-400 to-pink-500",
      benefits: ["Analyze documents 50x faster", "Reduce legal costs by 70%", "Improve accuracy by 95%", "Identify risks instantly"]
    },
    {
      title: "AI Healthcare Analytics Platform",
      description: "Improve patient outcomes with AI-powered healthcare analytics and predictive insights.",
      price: "From $1,999/month",
      features: ["Patient Risk Prediction", "Treatment Optimization", "Resource Planning", "Compliance Monitoring"],
      href: "/services/ai-healthcare-analytics-platform",
      color: "from-emerald-400 to-green-500",
      benefits: ["Improve patient outcomes by 30%", "Reduce readmission rates", "Optimize resource allocation", "Ensure compliance"]
    },
    {
      title: "AI Financial Trading Platform",
      description: "Maximize trading profits with AI-powered market analysis and automated trading strategies.",
      price: "From $2,499/month",
      features: ["AI Market Analysis", "Automated Trading", "Risk Management", "Portfolio Optimization"],
      href: "/services/ai-financial-trading-platform",
      color: "from-purple-400 to-indigo-500",
      benefits: ["Increase trading profits by 40%", "Reduce risk by 60%", "24/7 market monitoring", "Automated execution"]
    },
    {
      title: "AI Supply Chain Optimization",
      description: "Optimize supply chain operations with AI-powered demand forecasting and inventory management.",
      price: "From $1,499/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Supplier Management", "Risk Assessment"],
      href: "/services/ai-supply-chain-optimization",
      color: "from-cyan-400 to-blue-500",
      benefits: ["Reduce inventory costs by 25%", "Improve forecast accuracy by 85%", "Minimize stockouts", "Optimize supplier relationships"]
    },
    {
      title: "AI HR Recruitment Platform",
      description: "Hire top talent 3x faster with AI-powered candidate screening and interview automation.",
      price: "From $599/month",
      features: ["AI Candidate Screening", "Interview Automation", "Skills Assessment", "Cultural Fit Analysis"],
      href: "/services/ai-hr-recruitment-platform",
      color: "from-pink-400 to-rose-500",
      benefits: ["Hire 3x faster", "Improve candidate quality", "Reduce bias in hiring", "Save 20+ hours per hire"]
    }
  ]

  const pricing = [
    {
      name: "Starter",
      price: "$1,999/month",
      details: ["Basic AI features", "Standard support", "Up to 10 users", "99.5% uptime SLA"]
    },
    {
      name: "Professional",
      price: "$4,999/month",
      details: ["Advanced AI features", "Priority support", "Up to 100 users", "99.9% uptime SLA"]
    },
    {
      name: "Enterprise",
      price: "$9,999/month",
      details: ["Full AI suite", "24/7 dedicated support", "Unlimited users", "99.99% uptime SLA"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2" />
            Comprehensive Technology Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Zion Tech Group Services</h1>
          <p className="text-indigo-100 text-xl max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered solutions, innovative micro SAAS platforms, and enterprise-grade IT services.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Started Today
            </Link>
            <Link href="#services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
          <p className="text-gray-600 text-lg">Comprehensive technology solutions for modern businesses</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} Services</span>
                  <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Featured Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {category.services.slice(0, 2).map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                    {category.services.length > 2 && (
                      <span className="text-xs text-gray-500">+{category.services.length - 2} more</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-gray-600 text-lg">Our most innovative and impactful solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Most Popular
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-4">{service.price}</div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="w-3 h-3 text-green-500 mr-2" />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-gray-600 text-lg">Choose the plan that fits your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((tier, index) => (
            <div key={index} className={`rounded-xl p-6 shadow-lg ${tier.name === 'Professional' ? 'border-2 border-indigo-500 bg-indigo-50' : 'border border-gray-200 bg-white'}`}>
              {tier.name === 'Professional' && (
                <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-4">{tier.price}</div>
              <ul className="space-y-3 mb-6">
                {tier.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
                tier.name === 'Professional' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 text-lg">Contact our technology experts today</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-white">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-indigo-400 mr-3" />
                  <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white">https://ziontechgroup.com</a>
                </div>
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-indigo-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-4">Get a personalized consultation to discuss your technology needs</p>
              <Link href="https://ziontechgroup.com/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
