import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Users,
  BarChart3,
  Target,
  TrendingUp,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Activity,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Settings,
  Database,
  Cloud,
  Lock,
  Shield,
  Zap,
  Heart,
  Star,
  ShoppingCart,
  UserPlus,
  UserMinus,
  Calendar,
  Bell,
  PieChart,
  LineChart,
  BarChart,
  MapPin,
  Tag,
  CreditCard,
  Gift,
  Award
} from 'lucide-react';

const AICustomerIntelligencePlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Segmentation",
      description: "Advanced machine learning algorithms that automatically segment customers based on behavior, preferences, and value",
      benefits: ["Dynamic segmentation updates", "Predictive behavior modeling", "Real-time customer insights"]
    },
    {
      icon: Eye,
      title: "360° Customer View",
      description: "Comprehensive customer profiles combining data from all touchpoints and interactions",
      benefits: ["Unified customer data", "Cross-channel insights", "Historical behavior tracking"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast customer lifetime value, churn risk, and purchase probability using advanced AI models",
      benefits: ["Churn prediction", "LTV forecasting", "Next-best-action recommendations"]
    },
    {
      icon: Target,
      title: "Personalized Marketing Automation",
      description: "AI-driven campaigns that automatically adapt to customer behavior and preferences",
      benefits: ["Dynamic content personalization", "Optimal timing optimization", "A/B testing automation"]
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize the complete customer journey across all touchpoints",
      benefits: ["Journey visualization", "Bottleneck identification", "Conversion optimization"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics Dashboard",
      description: "Live insights into customer behavior, campaign performance, and business metrics",
      benefits: ["Real-time monitoring", "Custom dashboards", "Automated reporting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their customer intelligence journey",
      features: [
        "Up to 10,000 customer profiles",
        "Basic AI segmentation",
        "Standard analytics dashboard",
        "Email support",
        "Basic integrations",
        "Monthly reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with advanced customer intelligence needs",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced AI segmentation",
        "Predictive analytics",
        "Priority support",
        "Premium integrations",
        "Real-time dashboards",
        "Custom reporting",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations requiring enterprise-grade customer intelligence",
      features: [
        "Unlimited customer profiles",
        "Custom AI models",
        "Advanced predictive analytics",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solution",
        "Custom SLA",
        "On-premise option"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "Personalized Shopping Experience",
      description: "Deliver tailored product recommendations and personalized shopping experiences",
      benefits: ["Increased conversion rates", "Higher average order value", "Improved customer retention"]
    },
    {
      industry: "SaaS",
      title: "User Adoption & Retention",
      description: "Identify at-risk users and optimize onboarding for better product adoption",
      benefits: ["Reduced churn", "Higher user engagement", "Better product-market fit"]
    },
    {
      industry: "Financial Services",
      title: "Customer Risk Assessment",
      description: "Evaluate customer risk profiles and optimize financial product offerings",
      benefits: ["Better risk management", "Improved product targeting", "Enhanced compliance"]
    },
    {
      industry: "Healthcare",
      title: "Patient Engagement",
      description: "Personalize patient communications and improve healthcare outcomes",
      benefits: ["Better patient compliance", "Improved health outcomes", "Enhanced patient satisfaction"]
    }
  ];

  const integrations = [
    { name: "Salesforce", category: "CRM", icon: Users },
    { name: "HubSpot", category: "Marketing", icon: Target },
    { name: "Shopify", category: "E-commerce", icon: ShoppingCart },
    { name: "Stripe", category: "Payments", icon: CreditCard },
    { name: "Mailchimp", category: "Email", icon: Mail },
    { name: "Google Analytics", category: "Analytics", icon: BarChart },
    { name: "Facebook Ads", category: "Advertising", icon: Target },
    { name: "Zapier", category: "Automation", icon: Zap }
  ];

  const metrics = [
    {
      icon: TrendingUp,
      title: "Customer Lifetime Value",
      value: "+45%",
      description: "Average increase in CLV"
    },
    {
      icon: Users,
      title: "Customer Retention",
      value: "+38%",
      description: "Improvement in retention rates"
    },
    {
      icon: Target,
      title: "Conversion Rate",
      value: "+52%",
      description: "Higher conversion rates"
    },
    {
      icon: DollarSign,
      title: "Revenue Growth",
      value: "+67%",
      description: "Average revenue increase"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Customer Intelligence
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Unlock the Power of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {" "}Customer Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform customer data into actionable insights with our AI-powered platform. 
                Understand your customers like never before and drive growth through personalized experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center mt-8 text-sm text-gray-400">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free 14-day trial • No credit card required</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-24 h-24 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Customer Intelligence</h3>
                    <p className="text-gray-300">AI-Powered Insights</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Customer Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand, engage, and retain your customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10'
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries leverage our customer intelligence platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-sm text-cyan-400 font-medium">{useCase.industry}</span>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already increased customer lifetime value by 45% using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Start Free Trial
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Schedule Demo
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Need help? Contact our team at{" "}
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                kleber@ziontechgroup.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerIntelligencePlatform;