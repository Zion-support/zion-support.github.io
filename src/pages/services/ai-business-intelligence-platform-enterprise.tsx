import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Globe, 
  Database, 
  Brain,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIBusinessIntelligencePlatformEnterprise: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Predictive Analytics",
      description: "Advanced machine learning algorithms that predict business trends, customer behavior, and market opportunities with 95%+ accuracy."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: "Real-Time BI Dashboard",
      description: "Live data visualization and reporting across all business metrics with customizable KPI dashboards and automated alerts."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Multi-User Collaboration",
      description: "Role-based access control with real-time collaboration tools, shared workspaces, and automated workflow approvals."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, multi-factor authentication, and comprehensive audit trails."
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: "Data Integration Hub",
      description: "Connect to 100+ data sources including ERP, CRM, databases, cloud services, and IoT devices with automated ETL processes."
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "Automated Insights",
      description: "AI-generated business insights, anomaly detection, and automated report generation with natural language explanations."
    }
  ];

  const benefits = [
    {
      metric: "25%",
      description: "Increase in revenue through data-driven decision making"
    },
    {
      metric: "40+",
      description: "Hours saved weekly on manual reporting and analysis"
    },
    {
      metric: "95%",
      description: "Improvement in decision accuracy and forecasting"
    },
    {
      metric: "3x",
      description: "Faster time to insights and market response"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$2,999",
      period: "/month",
      features: [
        "Up to 10 users",
        "5 data source connections",
        "Basic AI analytics",
        "Standard support",
        "Monthly reports"
      ]
    },
    {
      plan: "Professional",
      price: "$4,999",
      period: "/month",
      features: [
        "Up to 50 users",
        "25 data source connections",
        "Advanced AI analytics",
        "Priority support",
        "Real-time dashboards",
        "Custom integrations"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$9,999",
      period: "/month",
      features: [
        "Unlimited users",
        "Unlimited data sources",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Platform Enterprise | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI-powered business intelligence platform with predictive analytics, real-time dashboards, and advanced data integration capabilities." />
        <meta name="keywords" content="AI business intelligence, enterprise BI, predictive analytics, data visualization, business analytics platform" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-business-intelligence-platform-enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence Platform
                <span className="text-cyan-400 block">Enterprise Edition</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with the most advanced AI-powered business intelligence platform. 
                Get real-time insights, predictive analytics, and automated decision-making capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for scale, security, and performance with cutting-edge AI technology
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See real results with our AI-powered business intelligence platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Enterprise Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your organization's needs and scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-500 ring-2 ring-cyan-500/20' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                      : 'border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Join leading enterprises that have already revolutionized their decision-making with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBusinessIntelligencePlatformEnterprise;