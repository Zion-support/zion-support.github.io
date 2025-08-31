import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  BarChart3, 
  CheckCircle, 
  Brain,
  Search,
  Clock,
  Shield,
  Phone,
  Mail,
  MapPin,
  Target,
  Lightbulb,
  Package,
  Route,
  Warehouse,
  Zap,
  Lock,
  Globe2,
  Award,
  Rocket,
  Briefcase,
  LineChart,
  PieChart,
  Eye,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  CreditCard,
  Star,
  Heart,
  Filter,
  SortAsc,
  SortDesc,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  DollarSign
} from 'lucide-react';

export default function AIEcommerceOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI Product Recommendations",
      description: "Personalized product suggestions increasing conversion rates by 35%"
    },
    {
      icon: Users,
      title: "Customer Behavior Analysis",
      description: "Deep insights into customer preferences and shopping patterns"
    },
    {
      icon: BarChart3,
      title: "Dynamic Pricing",
      description: "AI-powered pricing optimization maximizing revenue and margins"
    },
    {
      icon: Search,
      title: "Smart Search & Filters",
      description: "Intelligent search with natural language processing and auto-complete"
    },
    {
      icon: Eye,
      title: "Visual Search",
      description: "Find products using images with 90% accuracy"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast demand, inventory needs, and customer lifetime value"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small e-commerce stores",
      features: [
        "Up to 1,000 products",
        "Basic AI recommendations",
        "Customer analytics",
        "Email support",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing e-commerce businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI analytics",
        "Dynamic pricing",
        "Priority support",
        "Advanced dashboards",
        "API access",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large e-commerce operations",
      features: [
        "Unlimited products",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced integrations",
        "Custom features",
        "On-premise option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Product Recommendations",
      description: "AI-powered suggestions increasing average order value by 25%",
      benefits: ["25% AOV increase", "Better conversion", "Customer satisfaction"]
    },
    {
      title: "Dynamic Pricing",
      description: "Intelligent pricing strategies optimizing revenue and margins",
      benefits: ["15% revenue increase", "Better margins", "Competitive pricing"]
    },
    {
      title: "Customer Segmentation",
      description: "Advanced customer clustering for targeted marketing campaigns",
      benefits: ["40% better targeting", "Higher engagement", "ROI improvement"]
    },
    {
      title: "Inventory Optimization",
      description: "AI-driven inventory management reducing stockouts and overstock",
      benefits: ["30% cost reduction", "Better availability", "Cash flow improvement"]
    }
  ];

  const stats = [
    { number: "35%", label: "Conversion Increase", icon: TrendingUp },
    { number: "25%", label: "AOV Improvement", icon: DollarSign },
    { number: "40%", label: "Customer Retention", icon: Users },
    { number: "90%", label: "Search Accuracy", icon: Target }
  ];

  const integrations = [
    { name: "Shopify", type: "E-commerce Platform" },
    { name: "WooCommerce", type: "E-commerce Platform" },
    { name: "Magento", type: "E-commerce Platform" },
    { name: "BigCommerce", type: "E-commerce Platform" },
    { name: "Salesforce", type: "CRM" },
    { name: "Mailchimp", type: "Email Marketing" },
    { name: "Google Analytics", type: "Analytics" },
    { name: "Facebook Ads", type: "Advertising" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>AI E-commerce Optimization Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize your e-commerce with AI-powered optimization. 35% conversion increase, 25% AOV improvement, and intelligent product recommendations. Start from $199/month." />
        <meta name="keywords" content="AI e-commerce, e-commerce optimization, product recommendations, dynamic pricing, customer analytics, e-commerce AI" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-ecommerce-optimization-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-pink-800 to-rose-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <ShoppingCart className="w-12 h-12 text-purple-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered E-commerce Optimization
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
              Transform your e-commerce business with AI-driven optimization. 35% conversion increase, 
              25% AOV improvement, and intelligent product recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for E-commerce Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with deep e-commerce expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your e-commerce business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-purple-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your E-commerce Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI optimization can revolutionize your online store.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <span key={benefitIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing e-commerce tools and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-300" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your E-commerce Store?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading online stores using AI to boost conversions and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-lg text-white transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-500 hover:bg-purple-50 rounded-lg font-semibold text-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Have Questions? We're Here to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}