import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Database,
  Cpu,
  Eye,
  Target,
  Lightbulb,
  Rocket,
  Star,
  Clock,
  Globe,
  Award
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';

const AIBusinessIntelligence: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Advanced ML algorithms that learn from your data to provide predictive insights and automated decision-making capabilities.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live dashboards and reports that update in real-time, giving you instant visibility into your business performance.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using historical data patterns and advanced statistical modeling.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI-powered recommendations and alerts that help you make data-driven decisions faster than ever before.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with encryption, access controls, and compliance with industry standards.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Team-based analytics with role-based access, sharing capabilities, and collaborative dashboards.",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const benefits = [
    "Increase revenue by 15-25% through data-driven insights",
    "Reduce operational costs by 20-30% with process optimization",
    "Improve customer satisfaction by 40% with predictive analytics",
    "Accelerate decision-making by 60% with real-time dashboards",
    "Reduce risk by 35% with predictive risk modeling",
    "Boost team productivity by 45% with automated reporting"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 5 users",
        "Basic ML models",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "Data integration (3 sources)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 20 users",
        "Advanced ML models",
        "Custom dashboards",
        "Priority support",
        "Real-time alerts",
        "Data integration (10 sources)",
        "API access",
        "Custom training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "Comprehensive solution for large enterprises with complex analytics requirements",
      features: [
        "Unlimited users",
        "Custom ML models",
        "Advanced dashboards",
        "24/7 dedicated support",
        "Custom integrations",
        "Data warehouse",
        "Advanced security",
        "Compliance reporting",
        "Custom development",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns and preferences to optimize marketing strategies and improve retention.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Forecasting",
      description: "Predict revenue, expenses, and cash flow to make informed financial decisions.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize inventory levels, reduce costs, and improve delivery times with predictive analytics.",
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Risk Management",
      description: "Identify and mitigate risks before they impact your business with advanced risk modeling.",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Business Intelligence Solutions | Zion Tech Group"
        description="Transform your business with AI-powered business intelligence solutions. Get real-time insights, predictive analytics, and automated reporting."
        keywords="AI business intelligence, machine learning, predictive analytics, data analytics, business insights"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Business Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your data into actionable insights with AI-powered business intelligence solutions that drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into strategic insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of your data with intelligent analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI business intelligence transforms different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700 hover:border-cyan-500/50'
                  } transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your AI business intelligence journey today and unlock the power of data-driven decision making
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBusinessIntelligence;