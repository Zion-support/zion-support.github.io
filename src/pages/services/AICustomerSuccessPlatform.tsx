import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  BarChart3, 
  MessageCircle, 
  DollarSign, 
  Shield, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Heart,
  Zap,
  Award,
  Clock,
  PieChart,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AICustomerSuccessPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Customer Insights",
      description: "Advanced machine learning algorithms analyze customer behavior, satisfaction patterns, and engagement metrics to predict churn and identify upsell opportunities."
    },
    {
      icon: Users,
      title: "Intelligent Customer Segmentation",
      description: "Automatically segment customers based on usage patterns, engagement levels, and business value to deliver personalized success strategies."
    },
    {
      icon: MessageCircle,
      title: "Proactive Engagement Automation",
      description: "AI-driven communication that reaches out to customers at the right time with the right message, preventing issues before they arise."
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics & Forecasting",
      description: "Forecast customer lifetime value, churn probability, and expansion opportunities using sophisticated predictive modeling."
    },
    {
      icon: Target,
      title: "Success Path Optimization",
      description: "Intelligent recommendations for customer onboarding, feature adoption, and success milestones to maximize customer value."
    },
    {
      icon: Shield,
      title: "Risk Management & Early Warning",
      description: "Identify at-risk customers early and automatically trigger intervention strategies to prevent churn and maintain satisfaction."
    }
  ];

  const benefits = [
    "Increase customer retention by 25-40%",
    "Boost customer lifetime value by 30-50%",
    "Reduce churn by 60-80%",
    "Improve customer satisfaction scores by 35%",
    "Automate 70% of customer success tasks",
    "Achieve 95% customer health visibility"
  ];

  const useCases = [
    {
      title: "SaaS & Software Companies",
      description: "Optimize customer onboarding, feature adoption, and renewal processes for subscription-based software products.",
      icon: Globe
    },
    {
      title: "Enterprise B2B Services",
      description: "Manage complex customer relationships, track success metrics, and drive expansion opportunities for large enterprise clients.",
      icon: Users
    },
    {
      title: "E-commerce & Retail",
      description: "Enhance customer loyalty, optimize post-purchase experience, and drive repeat purchases through intelligent engagement.",
      icon: ShoppingCart
    },
    {
      title: "Financial Services",
      description: "Improve customer satisfaction, reduce account closures, and increase cross-selling opportunities in banking and financial services.",
      icon: DollarSign
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for growing companies building their customer success practice",
      features: [
        "Up to 1,000 customers",
        "Basic AI insights and analytics",
        "Standard engagement automation",
        "Email and chat support",
        "Core integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for established companies with dedicated customer success teams",
      features: [
        "Up to 10,000 customers",
        "Advanced AI analytics and predictions",
        "Multi-channel engagement automation",
        "Priority support",
        "Advanced integrations and APIs",
        "Custom success metrics",
        "Team collaboration tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "Comprehensive solution for large enterprises with complex customer relationships",
      features: [
        "Unlimited customers",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated success manager",
        "Advanced security and compliance",
        "On-premise deployment options",
        "Custom integrations and workflows"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const roi = [
    {
      metric: "Customer Retention",
      improvement: "25-40%",
      description: "Higher retention rates and reduced churn"
    },
    {
      metric: "Lifetime Value",
      improvement: "30-50%",
      description: "Increased customer value and expansion"
    },
    {
      metric: "Churn Reduction",
      improvement: "60-80%",
      description: "Significantly lower customer loss"
    },
    {
      metric: "Efficiency Gain",
      improvement: "70%",
      description: "Automated customer success tasks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer Success Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your customer relationships with intelligent success strategies that predict churn, drive adoption, and maximize customer lifetime value through AI-powered insights and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Start Succeeding Today
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-green-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Phone className="w-5 h-5 mr-2 inline-block" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Customer Success Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive tools to understand, engage, and succeed with your customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-green-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Customer Relationships
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in customer retention, satisfaction, and lifetime value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer success platform delivers results across diverse industries and business models.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your customer success needs and business scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-600/20 to-blue-600/20' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Return on Investment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients consistently achieve significant improvements in customer success metrics and business outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roi.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">{metric.improvement}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI-powered customer success platform can help you retain more customers, increase satisfaction, and drive business growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Mail className="w-5 h-5 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-green-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-green-400/50"
              >
                <Phone className="w-5 h-5 mr-2 inline-block" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">Zion Tech Group</span>
            <Star className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-gray-400">
            Empowering businesses to succeed with their customers through intelligent AI solutions.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <a href="https://ziontechgroup.com" className="hover:text-green-400 transition-colors">
              ziontechgroup.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AICustomerSuccessPlatform;