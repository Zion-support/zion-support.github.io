import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  TrendingUp, 
  BarChart3, 
  Shield, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Cloud,
  Lock,
  Workflow,
  Target,
  Rocket,
  Star,
  Clock,
  DollarSign,
  Monitor,
  Smartphone,
  Network,
  Activity,
  Settings,
  Phone,
  Mail,
  MapPin,
  Recycle,
  TreePine,
  Sun,
  Wind,
  Droplets,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  Building,
  Factory,
  Home
} from 'lucide-react';

export default function AISustainabilityManagementPlatform() {
  const features = [
    {
      icon: Leaf,
      title: "Carbon Footprint Tracking",
      description: "Real-time monitoring and analysis of carbon emissions across all business operations with AI-powered insights."
    },
    {
      icon: BarChart3,
      title: "Environmental Analytics",
      description: "Advanced analytics dashboard providing comprehensive environmental impact metrics and trend analysis."
    },
    {
      icon: Workflow,
      title: "Automated Compliance",
      description: "AI-driven compliance monitoring for environmental regulations with automated reporting and alerts."
    },
    {
      icon: Target,
      title: "Sustainability Goal Setting",
      description: "Intelligent goal setting and tracking with predictive analytics for achieving sustainability targets."
    },
    {
      icon: Users,
      title: "Stakeholder Engagement",
      description: "Comprehensive stakeholder communication tools with automated reporting and transparency features."
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description: "Enterprise-grade security with GDPR compliance and secure data handling for sensitive environmental data."
    }
  ];

  const benefits = [
    "Reduce carbon emissions by up to 40%",
    "Achieve sustainability certifications 3x faster",
    "Save up to $200,000 annually on compliance costs",
    "Improve ESG ratings and investor confidence",
    "Real-time environmental impact monitoring",
    "Automated regulatory compliance reporting"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Basic carbon footprint tracking",
        "Environmental impact reporting",
        "Compliance monitoring (basic)",
        "Email support",
        "Standard analytics dashboard"
      ]
    },
    {
      plan: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies with sustainability goals",
      features: [
        "Advanced carbon tracking & analytics",
        "Full compliance monitoring suite",
        "Stakeholder engagement tools",
        "Priority support",
        "Custom sustainability goals",
        "Advanced reporting & analytics"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$1,199",
      period: "/month",
      description: "For large organizations with complex sustainability requirements",
      features: [
        "Custom AI model training",
        "API access & integrations",
        "Dedicated sustainability consultant",
        "Custom compliance frameworks",
        "Advanced security & audit features",
        "White-label solutions"
      ]
    }
  ];

  const useCases = [
    {
      title: "Corporate Sustainability",
      description: "Comprehensive sustainability management for large corporations with multi-site operations.",
      icon: Building
    },
    {
      title: "Manufacturing & Industry",
      description: "Environmental impact monitoring and optimization for manufacturing processes.",
      icon: Factory
    },
    {
      title: "Real Estate & Construction",
      description: "Green building certification and sustainable construction project management.",
      icon: Home
    },
    {
      title: "Financial Services",
      description: "ESG risk assessment and sustainable investment portfolio management.",
      icon: TrendingUp
    }
  ];

  const sustainabilityMetrics = [
    {
      metric: "Carbon Emissions",
      icon: Leaf,
      description: "Track CO2, methane, and other greenhouse gas emissions"
    },
    {
      metric: "Energy Consumption",
      icon: Zap,
      description: "Monitor electricity, gas, and renewable energy usage"
    },
    {
      metric: "Water Management",
      icon: Droplets,
      description: "Track water consumption, quality, and conservation"
    },
    {
      metric: "Waste Management",
      icon: Recycle,
      description: "Monitor waste generation, recycling rates, and disposal"
    },
    {
      metric: "Biodiversity Impact",
      icon: TreePine,
      description: "Assess impact on local ecosystems and wildlife"
    },
    {
      metric: "Supply Chain Sustainability",
      icon: Network,
      description: "Track environmental impact across supply chain"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-green-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-8">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Powered Sustainability Management
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Sustainability Management Platform
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your environmental impact with AI-powered sustainability management. 
              Track, analyze, and optimize your sustainability initiatives with unprecedented precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Sustainability Management
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI platform provides end-to-end sustainability management with intelligent insights 
              and automated compliance monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Metrics Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Track Key Sustainability Metrics
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Monitor and analyze all critical environmental impact indicators with real-time data and AI insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainabilityMetrics.map((metric, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <metric.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{metric.metric}</h3>
                </div>
                <p className="text-zion-slate-light text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Environmental Impact
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience measurable improvements in sustainability performance with our AI-powered platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sustainable Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your sustainability goals and scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular 
                  ? 'border-green-400 bg-zion-slate-dark/70 scale-105' 
                  : 'border-green-500/30 bg-zion-slate-dark/50 hover:border-green-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'border border-green-400 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform serves diverse industries with tailored sustainability management solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-zion-slate-dark/50 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center p-12 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-green-600/20 rounded-2xl border border-green-500/30">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Join thousands of organizations already using AI to transform their sustainability initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Have questions about our AI Sustainability Management Platform? Our team is here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center p-6">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}