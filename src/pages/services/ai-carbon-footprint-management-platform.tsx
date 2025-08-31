import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Leaf, 
  TrendingDown, 
  BarChart3, 
  Globe, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Calculator,
  Database,
  Cloud,
  Smartphone,
  Target,
  Award,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AICarbonFootprintManagementPlatform() {
  const features = [
    {
      title: "AI-Powered Carbon Tracking",
      description: "Automatically track and analyze carbon emissions across all business operations with 95% accuracy",
      icon: BarChart3,
      benefits: ["Real-time monitoring", "Automated data collection", "Predictive analytics"]
    },
    {
      title: "Sustainability Reporting",
      description: "Generate comprehensive ESG reports compliant with international standards",
      icon: Database,
      benefits: ["GRI compliance", "TCFD reporting", "Custom dashboards"]
    },
    {
      title: "Carbon Reduction Recommendations",
      description: "AI-driven insights to reduce carbon footprint by up to 40%",
      icon: TrendingDown,
      benefits: ["Actionable insights", "ROI calculations", "Implementation roadmap"]
    },
    {
      title: "Supply Chain Monitoring",
      description: "Track carbon impact across your entire supply chain network",
      icon: Globe,
      benefits: ["Vendor assessment", "Scope 3 emissions", "Risk mitigation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Up to 100 emission sources",
        "Basic carbon tracking",
        "Monthly reports",
        "Email support"
      ],
      popular: false,
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies with complex operations",
      features: [
        "Unlimited emission sources",
        "Advanced analytics",
        "Real-time monitoring",
        "Custom reporting",
        "Priority support",
        "API access"
      ],
      popular: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade solutions",
      features: [
        "Everything in Professional",
        "Multi-site management",
        "Advanced AI insights",
        "Custom integrations",
        "Dedicated account manager",
        "On-site training",
        "White-label options"
      ],
      popular: false,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Stay ahead of evolving environmental regulations and avoid penalties",
      icon: Shield,
      metric: "100%"
    },
    {
      title: "Cost Savings",
      description: "Reduce operational costs through energy efficiency and waste reduction",
      icon: DollarSign,
      metric: "25-40%"
    },
    {
      title: "Brand Enhancement",
      description: "Improve brand reputation and customer loyalty through sustainability leadership",
      icon: Award,
      metric: "85%"
    },
    {
      title: "Investor Appeal",
      description: "Attract ESG-focused investors and improve access to green financing",
      icon: Users,
      metric: "3x"
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Track emissions from production processes, energy consumption, and waste management",
      savings: "30-45% reduction in carbon footprint"
    },
    {
      industry: "Logistics & Transportation",
      description: "Monitor fleet emissions, optimize routes, and implement green delivery options",
      savings: "25-35% reduction in fuel consumption"
    },
    {
      industry: "Retail & E-commerce",
      description: "Measure store operations, packaging impact, and supply chain emissions",
      savings: "20-30% reduction in operational emissions"
    },
    {
      industry: "Technology & Data Centers",
      description: "Track energy consumption, cooling systems, and renewable energy integration",
      savings: "40-50% reduction in energy costs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Carbon Footprint Management Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered carbon footprint management platform. Track, analyze, and reduce your carbon emissions with 95% accuracy. Start your sustainability journey today." />
        <meta name="keywords" content="carbon footprint, sustainability, ESG, carbon tracking, emissions management, AI sustainability, green business" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-carbon-footprint-management-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full">
                <Leaf className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Carbon Footprint
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Management Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business sustainability with our revolutionary AI platform. 
              Track, analyze, and reduce carbon emissions with 95% accuracy while 
              achieving regulatory compliance and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Carbon Management Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already reducing their environmental impact 
              while improving their bottom line.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-green-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Sustainable Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform provides everything you need to manage your carbon footprint 
              effectively and efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your sustainability goals and budget. 
              All plans include our core AI-powered carbon tracking capabilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-lg border-2 ${
                  plan.popular 
                    ? 'border-green-400 bg-slate-800 scale-105' 
                    : 'border-slate-600 bg-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600'
                    : 'bg-slate-600 text-white hover:bg-slate-500'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique sustainability challenges 
              of different industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-700 rounded-lg border border-slate-600"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-green-400 font-semibold">
                  <TrendingDown className="h-5 w-5 mr-2" />
                  {useCase.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Sustainability Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already reducing their environmental impact 
              while improving their bottom line. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your business sustainability? Our team of experts 
                is here to help you get started with carbon footprint management.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-green-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-green-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-700 p-8 rounded-lg border border-slate-600"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Request a Demo
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <textarea
                  placeholder="Tell us about your sustainability goals"
                  rows={4}
                  className="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300"
                >
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
