import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Leaf, TrendingDown, Shield, Clock, TrendingUp, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Building2, Home, Droplets } from 'lucide-react';

const AICarbonFootprintManagementPlatform: React.FC = () => {
  const features = [
    {
      icon: <TrendingDown className="w-8 h-8 text-cyan-400" />,
      title: "Autonomous Carbon Tracking",
      description: "AI-powered monitoring and tracking of carbon emissions across all business operations"
    },
    {
      icon: <Leaf className="w-8 h-8 text-cyan-400" />,
      title: "Sustainability Intelligence",
      description: "Advanced analytics and insights for sustainable business decision-making"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "ESG Reporting Automation",
      description: "Automated environmental, social, and governance reporting with AI accuracy"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Carbon Reduction Planning",
      description: "Intelligent planning and optimization for carbon reduction strategies"
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Monitoring",
      description: "Live carbon footprint monitoring with instant alerts and notifications"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: "Compliance Management",
      description: "Automated compliance monitoring for environmental regulations and standards"
    }
  ];

  const benefits = [
    "Reduce carbon emissions by 40%",
    "Achieve carbon neutrality 3x faster",
    "Save up to $200,000 annually in energy costs",
    "Improve ESG ratings by 2-3 levels",
    "Ensure 99.9% compliance accuracy"
  ];

  const sustainabilityMetrics = [
    "Carbon Footprint (CO2e)",
    "Energy Consumption (kWh)",
    "Water Usage (gallons)",
    "Waste Generation (tons)",
    "Renewable Energy %",
    "Carbon Intensity (CO2e/$)"
  ];

  const useCases = [
    {
      icon: <Building2 className="w-8 h-8 text-cyan-400" />,
      industry: "Corporate Sustainability",
      description: "Enterprise-wide carbon management, ESG reporting, and sustainability strategy optimization"
    },
    {
      icon: <Home className="w-8 h-8 text-cyan-400" />,
      industry: "Manufacturing & Industry",
      description: "Industrial carbon tracking, energy optimization, and supply chain sustainability"
    },
    {
      icon: <Droplets className="w-8 h-8 text-cyan-400" />,
      industry: "Financial Services",
      description: "ESG investment analysis, carbon risk assessment, and sustainable finance reporting"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      features: [
        "Up to 10 locations",
        "Basic carbon tracking",
        "Standard ESG reporting",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      features: [
        "Up to 50 locations",
        "Advanced AI analytics",
        "Real-time monitoring",
        "Priority support",
        "Advanced reporting & API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      features: [
        "Unlimited locations",
        "Custom AI model training",
        "Dedicated sustainability expert",
        "White-label solutions",
        "Advanced security features",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Carbon Footprint Management Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered carbon footprint management platform that automates sustainability tracking, ESG reporting, and carbon reduction planning. Transform your environmental impact with cutting-edge AI technology." />
        <meta name="keywords" content="AI carbon management, sustainability platform, ESG reporting, carbon tracking, environmental compliance, carbon reduction" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-carbon-footprint-management-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Leaf className="w-16 h-16 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Carbon Footprint Management Platform
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your sustainability efforts with AI-powered carbon tracking, intelligent ESG reporting, and automated compliance monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors font-semibold">
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
                Advanced AI-Powered Sustainability Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with deep environmental expertise to deliver unprecedented sustainability insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-colors"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Environmental Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience unprecedented efficiency and accuracy in sustainability management and carbon reduction.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Metrics Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Sustainability Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Track and analyze all key environmental indicators with AI-powered precision and insights.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sustainabilityMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-colors text-center"
                >
                  <Leaf className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">{metric}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our platform is designed to meet the unique sustainability challenges of various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-colors text-center"
                >
                  <div className="flex justify-center mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible pricing options designed to scale with your sustainability goals.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-500 ring-2 ring-cyan-500/20' : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sustainability?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of organizations who have already revolutionized their environmental impact with AI-powered sustainability management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors font-semibold">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
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
                <div className="flex flex-col items-center gap-3">
                  <Phone className="w-8 h-8 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+1 302 464 0950</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Mail className="w-8 h-8 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="w-8 h-8 text-cyan-400" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICarbonFootprintManagementPlatform;