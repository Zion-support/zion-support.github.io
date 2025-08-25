import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Code, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Brain,
  Lock,
  Cloud,
  Database,
  Workflow,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  Target,
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  Clock
} from 'lucide-react';

export default function MicroSAASSolutions() {
  const services = [
    {
      title: "AI-Powered Business Intelligence Platform",
      description: "Intelligent analytics platform that transforms raw data into actionable business insights using advanced AI algorithms.",
      icon: Brain,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom AI Models", "Automated Reporting"],
      price: "$2,500/month",
      category: "AI & Analytics",
      rating: 4.9,
      reviewCount: 156,
      path: "/services/ai-bi-platform"
    },
    {
      title: "Quantum-Safe Cybersecurity Suite",
      description: "Next-generation security platform using quantum-resistant encryption to protect against future cyber threats.",
      icon: Lock,
      features: ["Quantum Encryption", "Threat Intelligence", "Zero-Trust Architecture", "Compliance Monitoring"],
      price: "$3,200/month",
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 89,
      path: "/services/quantum-security"
    },
    {
      title: "Intelligent Workflow Automation",
      description: "AI-driven process automation that learns from your business operations and continuously optimizes workflows.",
      icon: Workflow,
      features: ["Process Mining", "Smart Automation", "Performance Analytics", "Integration Hub"],
      price: "$1,800/month",
      category: "Automation",
      rating: 4.7,
      reviewCount: 234,
      path: "/services/workflow-automation"
    },
    {
      title: "Predictive Customer Success Platform",
      description: "AI-powered customer success platform that predicts churn, identifies upsell opportunities, and automates customer engagement.",
      icon: Users,
      features: ["Churn Prediction", "Customer Scoring", "Automated Engagement", "Success Metrics"],
      price: "$2,100/month",
      category: "Customer Success",
      rating: 4.9,
      reviewCount: 178,
      path: "/services/customer-success"
    },
    {
      title: "Real-Time Supply Chain Intelligence",
      description: "End-to-end supply chain visibility with AI-powered demand forecasting and risk assessment.",
      icon: Globe,
      features: ["Demand Forecasting", "Risk Assessment", "Real-time Tracking", "Optimization Engine"],
      price: "$2,800/month",
      category: "Supply Chain",
      rating: 4.6,
      reviewCount: 92,
      path: "/services/supply-chain-intelligence"
    },
    {
      title: "Intelligent Document Processing",
      description: "AI-powered document analysis and processing platform that extracts insights from unstructured data.",
      icon: FileText,
      features: ["OCR & Text Extraction", "Intelligent Classification", "Data Validation", "Workflow Integration"],
      price: "$1,500/month",
      category: "Document AI",
      rating: 4.8,
      reviewCount: 145,
      path: "/services/document-processing"
    },
    {
      title: "Predictive Maintenance System",
      description: "IoT-enabled predictive maintenance platform that prevents equipment failures and optimizes maintenance schedules.",
      icon: Cpu,
      features: ["IoT Integration", "Failure Prediction", "Maintenance Optimization", "Cost Analytics"],
      price: "$2,200/month",
      category: "IoT & Maintenance",
      rating: 4.7,
      reviewCount: 167,
      path: "/services/predictive-maintenance"
    },
    {
      title: "AI-Powered Marketing Automation",
      description: "Intelligent marketing platform that personalizes campaigns, optimizes conversions, and predicts customer behavior.",
      icon: Target,
      features: ["Personalization Engine", "Conversion Optimization", "Behavioral Analysis", "Campaign Automation"],
      price: "$1,900/month",
      category: "Marketing",
      rating: 4.9,
      reviewCount: 203,
      path: "/services/marketing-automation"
    },
    {
      title: "Intelligent Financial Planning Platform",
      description: "AI-driven financial planning and analysis platform for businesses and individuals.",
      icon: DollarSign,
      features: ["Financial Forecasting", "Risk Assessment", "Portfolio Optimization", "Compliance Monitoring"],
      price: "$2,400/month",
      category: "FinTech",
      rating: 4.8,
      reviewCount: 134,
      path: "/services/financial-planning"
    },
    {
      title: "Smart Energy Management System",
      description: "AI-powered energy optimization platform that reduces costs and improves sustainability.",
      icon: Zap,
      features: ["Energy Optimization", "Cost Analysis", "Sustainability Metrics", "Predictive Modeling"],
      price: "$1,700/month",
      category: "Energy",
      rating: 4.6,
      reviewCount: 78,
      path: "/services/energy-management"
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
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
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant patient management systems with AI-powered diagnostics",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Finance",
      description: "Regulatory-compliant financial tools with real-time risk assessment",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Education",
      description: "Learning management and student tracking with personalized learning paths",
      icon: Building,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Real Estate",
      description: "Property management and client portals with market analysis",
      icon: Building,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Manufacturing",
      description: "Smart factory solutions with predictive maintenance and quality control",
      icon: Building,
      color: "from-gray-500 to-blue-500"
    },
    {
      name: "Retail",
      description: "Omnichannel retail solutions with AI-powered inventory management",
      icon: Building,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Up to 5 users",
        "Basic AI models",
        "Standard support",
        "Core features",
        "Email support"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      price: "$1,500",
      period: "/month",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "Up to 25 users",
        "Advanced AI models",
        "Priority support",
        "Custom integrations",
        "Phone & email support",
        "Advanced analytics"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$3,500",
      period: "/month",
      description: "For large organizations requiring enterprise-grade solutions",
      features: [
        "Unlimited users",
        "Custom AI models",
        "24/7 dedicated support",
        "Full customization",
        "On-premise options",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Cutting-edge micro SAAS solutions powered by AI, designed for rapid deployment, scalability, and business transformation across industries."
        keywords="micro saas, ai solutions, business intelligence, cybersecurity, workflow automation, customer success, supply chain, document processing"
      />
      
      {/* Hero Section */}
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
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge micro SAAS platforms designed to revolutionize your business operations
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
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  <div className="text-2xl font-bold text-cyan-400 mt-1">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.path}
                  className="w-full futuristic-btn text-center group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className={`w-16 h-16 mx-auto mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored SAAS platforms designed for your industry's unique challenges and requirements
            </p>
          </div>

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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs with our flexible pricing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`glass-card p-8 text-center relative ${
                  tier.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300 mb-8">{tier.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full futuristic-btn text-center ${
                    tier.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : ''
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          </div>
        </div>
      </section>
    </div>
  );
}