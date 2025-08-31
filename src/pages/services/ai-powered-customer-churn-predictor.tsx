import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingDown, 
  Users, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  Target,
  Activity,
  AlertTriangle,
  Lightbulb,
  Database,
  Cpu,
  Globe,
  Lock,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIPoweredCustomerChurnPredictor = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Predictive Analytics",
      description: "Advanced machine learning algorithms that analyze customer behavior patterns to predict churn risk with 95%+ accuracy."
    },
    {
      icon: BarChart3,
      title: "Real-time Risk Scoring",
      description: "Continuous monitoring and scoring of customer churn risk with real-time alerts and actionable insights."
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Intelligent segmentation based on behavior, demographics, and engagement patterns for targeted retention strategies."
    },
    {
      icon: Target,
      title: "Proactive Intervention",
      description: "Automated triggers and recommendations for customer success teams to prevent churn before it happens."
    },
    {
      icon: Activity,
      title: "Behavioral Analysis",
      description: "Deep analysis of customer interactions, usage patterns, and satisfaction indicators to identify early warning signs."
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description: "Enterprise-grade security with GDPR compliance and SOC 2 Type II certification for data protection."
    }
  ];

  const benefits = [
    "Reduce customer churn by up to 40%",
    "Increase customer lifetime value by 25%",
    "Improve customer retention rates by 35%",
    "Save up to $500K annually in customer acquisition costs",
    "Boost customer satisfaction scores by 30%",
    "Enable data-driven retention strategies"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 customers",
        "Basic churn prediction models",
        "Email alerts",
        "Standard reporting",
        "Email support"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 customers",
        "Advanced ML models",
        "Real-time alerts",
        "Custom dashboards",
        "Priority support",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited customers",
        "Custom ML models",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "SaaS Companies",
      description: "Predict subscription cancellations and implement retention strategies for recurring revenue businesses.",
      icon: Cpu
    },
    {
      title: "E-commerce",
      description: "Identify at-risk customers and personalize retention campaigns to reduce cart abandonment.",
      icon: ShoppingCart
    },
    {
      title: "Financial Services",
      description: "Monitor account activity patterns to predict customer attrition and implement proactive engagement.",
      icon: DollarSign
    },
    {
      title: "Healthcare",
      description: "Track patient engagement and predict potential disengagement for better care outcomes.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8">
              <TrendingDown className="w-4 h-4 mr-2" />
              AI-Powered Customer Retention
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Customer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Churn Predictor
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your customer retention strategy with AI that predicts churn before it happens. 
              Our advanced machine learning platform analyzes customer behavior patterns to identify 
              at-risk customers and provides actionable insights to prevent churn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Features for Customer Retention
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge machine learning with intuitive analytics 
              to give you unprecedented insights into customer behavior and churn risk.
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
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your Customer Retention
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies that have revolutionized their customer retention 
              strategies with our AI-powered churn prediction platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered churn prediction platform adapts to your industry's unique 
              challenges and customer behavior patterns.
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
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial 
              with full access to all features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-blue-500 bg-slate-700/80 shadow-2xl shadow-blue-500/25' 
                    : 'border-slate-600 bg-slate-700/50 hover:border-blue-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Retention?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that are already using AI to predict and prevent customer churn. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Demo
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing icon component
const ShoppingCart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

const Play = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

export default AIPoweredCustomerChurnPredictor;