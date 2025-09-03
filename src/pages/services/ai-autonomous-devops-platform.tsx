import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Server,
  Cloud,
  Database,
  GitBranch,
  Monitor,
  AlertTriangle,
  Settings,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Globe,
  Lock,
  Activity
} from 'lucide-react';

const AIAutonomousDevOpsPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Automation",
      description: "Intelligent automation that learns from your infrastructure patterns and optimizes deployments automatically.",
      benefits: ["95% reduction in manual tasks", "Self-healing infrastructure", "Predictive scaling"]
    },
    {
      icon: Zap,
      title: "Lightning-Fast Deployments",
      description: "Deploy applications 80% faster with AI-optimized CI/CD pipelines and intelligent resource allocation.",
      benefits: ["Sub-minute deployments", "Zero-downtime updates", "Automated rollbacks"]
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Built-in security scanning, vulnerability assessment, and compliance monitoring with AI threat detection.",
      benefits: ["Real-time threat detection", "Automated security patches", "Compliance automation"]
    },
    {
      icon: BarChart3,
      title: "Intelligent Monitoring",
      description: "AI-driven monitoring that predicts issues before they occur and automatically resolves them.",
      benefits: ["Predictive analytics", "Automated incident response", "Performance optimization"]
    }
  ];

  const capabilities = [
    {
      category: "Infrastructure Management",
      items: [
        "Auto-scaling based on demand patterns",
        "Intelligent resource optimization",
        "Multi-cloud orchestration",
        "Container orchestration with AI"
      ]
    },
    {
      category: "CI/CD Automation",
      items: [
        "Smart build optimization",
        "Automated testing with AI",
        "Intelligent deployment strategies",
        "Performance-based rollbacks"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "Automated security scanning",
        "Compliance monitoring",
        "Threat intelligence integration",
        "Zero-trust security implementation"
      ]
    },
    {
      category: "Monitoring & Analytics",
      items: [
        "Predictive performance monitoring",
        "Anomaly detection",
        "Cost optimization insights",
        "Business impact analysis"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 applications",
        "Basic AI automation",
        "Standard monitoring",
        "Email support",
        "99.9% uptime SLA"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 applications",
        "Advanced AI automation",
        "Predictive monitoring",
        "Priority support",
        "99.95% uptime SLA",
        "Multi-cloud support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19,999",
      period: "/month",
      description: "For large enterprises with complex needs",
      features: [
        "Unlimited applications",
        "Full AI automation suite",
        "Custom AI models",
        "24/7 dedicated support",
        "99.99% uptime SLA",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "95%",
      description: "Reduction in manual DevOps tasks",
      icon: Target
    },
    {
      metric: "80%",
      description: "Faster deployment times",
      icon: Rocket
    },
    {
      metric: "60%",
      description: "Reduction in infrastructure costs",
      icon: TrendingUp
    },
    {
      metric: "99.9%",
      description: "System uptime guarantee",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Autonomous DevOps Platform - Zion Tech Group</title>
        <meta name="description" content="Eliminate 95% of manual DevOps tasks with our AI-powered autonomous platform. Deploy 80% faster with intelligent automation, predictive monitoring, and self-healing infrastructure." />
        <meta name="keywords" content="AI DevOps, autonomous infrastructure, CI/CD automation, predictive monitoring, self-healing systems" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-12 w-12 text-yellow-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">AI Autonomous DevOps Platform</h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Eliminate 95% of manual DevOps tasks and deploy 80% faster with intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="#demo" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.metric}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary AI-Powered Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with proven DevOps practices to deliver unprecedented automation and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your DevOps operations with AI-powered automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{capability.category}</h3>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="h-5 w-5 text-blue-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include our core AI automation features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-xl shadow-lg relative ${
                  tier.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="/contact" 
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of companies already using our AI Autonomous DevOps Platform to achieve unprecedented efficiency and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Free Trial
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousDevOpsPlatform;