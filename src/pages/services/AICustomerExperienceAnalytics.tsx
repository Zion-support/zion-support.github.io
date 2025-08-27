import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  BarChart3, 
  Eye, 
  Target, 
  TrendingUp, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Cpu,
  Network,
  Bot,
  Settings,
  FileText,
  Search,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  Zap,
  Clock,
  Heart,
  Smile,
  Frown,
  Activity,
  PieChart,
  LineChart,
  BarChart
} from 'lucide-react';

export default function AICustomerExperienceAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced machine learning algorithms that understand customer emotions and intent in real-time"
    },
    {
      icon: Eye,
      title: "Customer Journey Mapping",
      description: "Visualize and analyze complete customer journeys across all touchpoints and channels"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast customer behavior, churn risk, and satisfaction trends using AI models"
    },
    {
      icon: Target,
      title: "Personalization Engine",
      description: "AI-driven recommendations and personalized experiences based on customer data"
    },
    {
      icon: MessageCircle,
      title: "Voice of Customer Analytics",
      description: "Extract insights from customer feedback, reviews, and support interactions"
    },
    {
      icon: TrendingUp,
      title: "Real-time Dashboards",
      description: "Live monitoring of customer experience metrics and instant alerting"
    }
  ];

  const benefits = [
    "Increase customer satisfaction scores by up to 40% with AI-driven insights",
    "Reduce customer churn by 35% through predictive analytics and proactive engagement",
    "Improve customer lifetime value by 50% with personalized experiences",
    "Reduce support costs by 30% through intelligent automation and self-service",
    "Gain 360-degree customer visibility across all channels and touchpoints",
    "Make data-driven decisions with real-time analytics and predictive modeling"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses starting their CX analytics journey",
      features: [
        "Up to 10,000 customer interactions/month",
        "Basic sentiment analysis",
        "Standard dashboards",
        "Email support",
        "Core analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Advanced analytics for growing businesses with complex customer journeys",
      features: [
        "Up to 100,000 customer interactions/month",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Predictive modeling",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Enterprise-grade solution for large organizations with unlimited scale",
      features: [
        "Unlimited customer interactions",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced integrations",
        "Multi-tenant architecture"
      ],
      popular: false
    }
  ];

  const analyticsTypes = [
    {
      name: "Sentiment Analysis",
      description: "Understand customer emotions and satisfaction levels",
      icon: Heart,
      metrics: ["Positive/Negative ratio", "Emotion trends", "Satisfaction scores"]
    },
    {
      name: "Behavioral Analytics",
      description: "Track customer actions and interaction patterns",
      icon: Activity,
      metrics: ["Click patterns", "Navigation flows", "Engagement metrics"]
    },
    {
      name: "Predictive Analytics",
      description: "Forecast future customer behavior and trends",
      icon: TrendingUp,
      metrics: ["Churn prediction", "Lifetime value", "Purchase likelihood"]
    },
    {
      name: "Journey Analytics",
      description: "Map and optimize customer experience journeys",
      icon: Target,
      metrics: ["Touchpoint analysis", "Conversion rates", "Drop-off points"]
    }
  ];

  const useCases = [
    {
      title: "E-commerce",
      description: "Optimize shopping experiences and increase conversion rates",
      icon: ShoppingCart
    },
    {
      title: "SaaS Platforms",
      description: "Improve user onboarding and reduce churn through data insights",
      icon: Cpu
    },
    {
      title: "Financial Services",
      description: "Enhance customer satisfaction and loyalty in banking",
      icon: TrendingUp
    },
    {
      title: "Healthcare",
      description: "Improve patient experience and care quality",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 mb-6">
              <Brain className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-pink-300 font-medium">AI-Powered Customer Insights</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Customer Experience
              <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform customer insights into actionable intelligence with AI-powered analytics. 
              Understand, predict, and optimize every customer interaction for maximum satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-pink-500/50 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand, analyze, and optimize your customer experience with AI intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Customer Experience Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of customer analytics with AI-powered insights and predictive intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Analytics Types
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple analytical approaches to give you complete customer intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                <ul className="space-y-2 text-left">
                  {type.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and customer analytics needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-pink-500/50 shadow-lg shadow-pink-500/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600'
                      : 'border border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Customer Experience Analytics transforms businesses across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join businesses worldwide that use AI analytics to create exceptional customer experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-pink-500/50 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}