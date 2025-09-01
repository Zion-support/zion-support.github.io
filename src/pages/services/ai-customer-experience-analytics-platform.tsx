import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {

  Brain, 
  Users, 
  BarChart3, 
  TrendingUp, 
  Target, 
  MessageCircle, 
  Eye, 
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Activity,
  Smartphone,
  Globe,
  Zap,
  Phone,
  Mail,
  MapPin,
  Monitor,
  PieChart,
  LineChart,
  ShoppingCart
} from 'lucide-react';

export default function AICustomerExperienceAnalyticsPlatform() {

  const features = [
    "Real-time Customer Journey Mapping",
    "AI-Powered Sentiment Analysis",
    "Predictive Customer Behavior Modeling",
    "Multi-channel Experience Tracking",
    "Automated Customer Feedback Analysis",
    "Personalization Engine & Recommendations",
    "Customer Lifetime Value Prediction",
    "Churn Risk Assessment & Prevention",
    "Voice & Text Analytics",
    "Advanced Reporting & Dashboards"
  ];

  const benefits = [
    "Increase customer satisfaction by 45%",
    "Reduce customer churn by 35%",
    "Boost customer lifetime value by 60%",
    "Improve response time by 80%",
    "Enhance personalization accuracy by 90%",
    "Increase conversion rates by 55%"
  ];

  const pricing = [
    {

      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting with CX analytics",
      features: [
        "Up to 10,000 customer interactions/month",
        "Basic sentiment analysis",
        "Standard reporting dashboard",
        "Email support",
        "3 user seats"
      ],
      popular: false
    },
    {

      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies with advanced CX needs",
      features: [
        "Up to 100,000 customer interactions/month",
        "Advanced AI analytics",
        "Multi-channel tracking",
        "Priority support",
        "Custom dashboards",
        "10 user seats",
        "API access"
      ],
      popular: true
    },
    {

      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large organizations with enterprise-scale CX requirements",
      features: [
        "Unlimited customer interactions",
        "Custom AI model training",
        "Advanced predictive analytics",
        "24/7 dedicated support",
        "Custom development",
        "Unlimited user seats",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  const useCases = [
    {

      title: "E-commerce Customer Journey",
      description: "Track customer behavior across your online store to optimize conversion funnels and reduce cart abandonment",
      icon: ShoppingCart,
      impact: "Increase conversions by 40%"
    },
    {

      title: "Customer Support Optimization",
      description: "Analyze support interactions to identify pain points and improve response quality and speed",
      icon: MessageCircle,
      impact: "Reduce support tickets by 30%"
    },
    {

      title: "Product Experience Enhancement",
      description: "Understand how customers use your products to identify improvement opportunities and new features",
      icon: Target,
      impact: "Boost product adoption by 50%"
    },
    {

      title: "Marketing Campaign Optimization",
      description: "Track campaign performance and customer engagement to optimize marketing spend and messaging",
      icon: TrendingUp,
      impact: "Improve ROI by 65%"
    }
  ];

  const stats = [
    { number: '1M+', label: 'Customer Interactions Analyzed', icon: Activity },
    { number: '95%', label: 'Sentiment Analysis Accuracy', icon: Brain },
    { number: '45%', label: 'Average Satisfaction Increase', icon: Star },
    { number: '35%', label: 'Churn Reduction', icon: TrendingUp }
  ];

  const analyticsTypes = [
    {

      name: "Behavioral Analytics",
      description: "Track how customers interact with your products and services",
      icon: Eye,
      metrics: ["Click patterns", "Navigation paths", "Feature usage", "Session duration"]
    },
    {

      name: "Sentiment Analysis",
      description: "Understand customer emotions and satisfaction levels",
      icon: Heart,
      metrics: ["Emotion detection", "Satisfaction scoring", "Feedback analysis", "Trend identification"]
    },
    {

      name: "Predictive Analytics",
      description: "Forecast customer behavior and identify opportunities",
      icon: TrendingUp,
      metrics: ["Churn prediction", "LTV forecasting", "Next-best-action", "Demand prediction"]
    },
    {

      name: "Journey Analytics",
      description: "Map complete customer experiences across touchpoints",
      icon: Globe,
      metrics: ["Touchpoint mapping", "Journey optimization", "Bottleneck identification", "Experience scoring"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Experience Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Transform customer experiences with AI-powered analytics. Increase satisfaction by 45%, reduce churn by 35%, and boost customer lifetime value by 60%." />
        <meta name="keywords" content="customer experience analytics, AI analytics, customer journey mapping, sentiment analysis, predictive analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-customer-experience-analytics-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2 text-purple-400" />
                AI-Powered Analytics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Customer Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Analytics Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Unlock the power of customer data with AI-driven analytics that reveal insights, predict behavior, 
                and transform customer experiences. Drive growth through data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Analytics</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive analytics tools powered by artificial intelligence to understand and optimize every aspect of customer experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Four powerful analytics approaches that work together to give you complete customer insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <type.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{type.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="space-y-2">
                    {type.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300 text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Measurable <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See the real results that AI-powered customer experience analytics deliver to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how leading companies are using our platform to transform customer experiences and drive business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                    {useCase.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your customer experience analytics needs. Start small, scale as you grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${

                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20 scale-105' 
                      : 'border-white/10 hover:border-blue-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-1">{plan.price}</div>
                    <div className="text-gray-400 mb-4">{plan.period}</div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Customer Experiences?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join hundreds of companies that have revolutionized their customer experience with AI-powered analytics. 
                Start your free trial today and see the impact in just 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Need Help Getting Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our customer experience experts are here to help you implement the perfect analytics strategy for your business.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="https://ziontechgroup.com/services"
                    className="inline-flex items-center px-6 py-3 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                  >
                    View All Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}