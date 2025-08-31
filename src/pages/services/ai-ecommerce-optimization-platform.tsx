import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Eye,
  Settings,
  Download,
  Calendar,
  Analytics,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
  Smile,
  Frown,
  Activity,
  PieChart,
  LineChart,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  UserCheck,
  MousePointer,
  Smartphone,
  Monitor,
  Cpu,
  Workflow,
  Rocket,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  CreditCard,
  Package,
  Truck,
  Store
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIEcommerceOptimizationPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Product Recommendations",
      description: "Intelligent product suggestions that increase conversion rates and average order value",
      benefits: ["Personalized recommendations", "Cross-selling optimization", "Upselling strategies", "Behavioral analysis"]
    },
    {
      icon: Target,
      title: "Dynamic Pricing Optimization",
      description: "AI-driven pricing strategies that maximize revenue while maintaining competitiveness",
      benefits: ["Real-time price adjustments", "Competitive pricing analysis", "Demand forecasting", "Profit optimization"]
    },
    {
      icon: Activity,
      title: "Customer Behavior Analytics",
      description: "Deep insights into customer shopping patterns, preferences, and purchase behavior",
      benefits: ["Shopping cart analysis", "Abandonment tracking", "Customer segmentation", "Lifetime value prediction"]
    },
    {
      icon: TrendingUp,
      title: "Inventory Management & Forecasting",
      description: "Predictive inventory management to prevent stockouts and optimize warehouse operations",
      benefits: ["Demand forecasting", "Stock level optimization", "Reorder automation", "Seasonal planning"]
    },
    {
      icon: Shield,
      title: "Fraud Detection & Security",
      description: "Advanced fraud detection systems that protect your business and customers",
      benefits: ["Real-time fraud detection", "Payment security", "Risk assessment", "Compliance monitoring"]
    },
    {
      icon: Zap,
      title: "Marketing Automation & Personalization",
      description: "Automated marketing campaigns with personalized content and targeted messaging",
      benefits: ["Email automation", "SMS campaigns", "Social media ads", "Retargeting strategies"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$699",
      period: "/month",
      description: "Perfect for small e-commerce businesses",
      features: [
        "Up to 1,000 products",
        "Basic AI recommendations",
        "Standard analytics",
        "Email support",
        "Basic fraud detection",
        "Standard reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing e-commerce businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI recommendations",
        "Dynamic pricing",
        "Priority support",
        "Advanced fraud detection",
        "Custom dashboards",
        "Marketing automation",
        "Inventory forecasting"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large e-commerce operations",
      features: [
        "Unlimited products",
        "Enterprise AI models",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced security features",
        "White-label options",
        "Custom ML models"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Online Retail Stores",
      description: "Optimize product recommendations, pricing, and inventory management for maximum sales",
      metrics: ["35% increase in conversion rates", "45% improvement in average order value", "60% reduction in cart abandonment", "50% better inventory turnover"]
    },
    {
      title: "Marketplace Platforms",
      description: "Enhance seller performance and buyer experience with intelligent optimization tools",
      metrics: ["40% increase in marketplace revenue", "55% improvement in seller performance", "70% reduction in fraud incidents", "65% better customer retention"]
    },
    {
      title: "D2C Brands",
      description: "Direct-to-consumer optimization with personalized experiences and automated marketing",
      metrics: ["50% increase in customer lifetime value", "60% improvement in marketing ROI", "75% reduction in customer acquisition costs", "80% better personalization"]
    }
  ];

  const benefits = [
    "Increase conversion rates by 35%",
    "Boost average order value by 45%",
    "Reduce cart abandonment by 60%",
    "Improve inventory turnover by 50%",
    "Enhance customer lifetime value by 55%",
    "Reduce fraud incidents by 70%"
  ];

  const industries = [
    { name: "Fashion & Apparel", icon: "👕", description: "Style recommendations and sizing optimization" },
    { name: "Electronics", icon: "📱", description: "Tech product matching and warranty optimization" },
    { name: "Home & Garden", icon: "🏠", description: "Lifestyle product curation and seasonal planning" },
    { name: "Beauty & Health", icon: "💄", description: "Personalized beauty recommendations and skin analysis" },
    { name: "Sports & Fitness", icon: "🏃‍♂️", description: "Athletic gear optimization and performance tracking" },
    { name: "Food & Beverage", icon: "🍕", description: "Dietary preferences and subscription optimization" }
  ];

  const metrics = [
    { icon: ShoppingCart, label: "Conversion Rate", value: "+35%", description: "Average improvement" },
    { icon: TrendingUp, label: "Order Value", value: "+45%", description: "Increase in AOV" },
    { icon: Heart, label: "Customer Retention", value: "+55%", description: "Loyalty improvement" },
    { icon: Clock, label: "Response Time", value: "<2s", description: "Real-time optimization" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <ShoppingCart className="w-4 h-4 mr-2 text-orange-400" />
                AI-Powered E-commerce Optimization
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI E-commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Optimization Platform</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your e-commerce business with AI-powered optimization. Increase conversions by 35%, 
                boost average order value by 45%, and reduce cart abandonment by 60%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
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

        {/* Metrics Section */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <metric.icon className="w-12 h-12 text-orange-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-gray-400 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">E-commerce Success</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize, automate, and scale your e-commerce business
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
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your e-commerce optimization needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-orange-500/50 shadow-2xl shadow-orange-500/20' 
                      : 'border-zinc-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}>
                    {plan.cta}
                  </button>
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
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how e-commerce businesses across industries are transforming with AI optimization
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center text-sm text-orange-400">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Industries</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our e-commerce optimization solutions work across diverse business sectors
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-400">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600/20 to-red-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">E-commerce Business</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of e-commerce businesses already optimizing with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
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

        {/* Contact Section */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Ready to revolutionize your e-commerce business? Contact our team today.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-orange-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-orange-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-orange-400" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://ziontechgroup.com/services"
                    className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
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