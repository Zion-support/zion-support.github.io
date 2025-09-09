import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  Users,
  CheckCircle,
  Play,
  Settings,
  Cpu,
  Cloud,
  Lock,
  Target,
  Rocket,
  Star,
  Globe,
  Eye,
  PieChart,
  LineChart,
  Activity,
  Filter,
  Search,
  Download,
  Share2,
  AlertTriangle,
  Lightbulb,
  Target as TargetIcon,
  TrendingDown,
  DollarSign
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIDataAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "AI-powered forecasting and trend prediction for strategic decision making",
      price: "$399/month"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Live data visualization with interactive charts and customizable widgets",
      price: "$199/month"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect to 100+ data sources with automated ETL processes",
      price: "$299/month"
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI automatically identifies patterns and generates actionable insights",
      price: "$249/month"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security with encryption and compliance monitoring",
      price: "$199/month"
    },
    {
      icon: Users,
      title: "Collaborative Analytics",
      description: "Team-based analysis with shared dashboards and reports",
      price: "$149/month"
    }
  ];

  const capabilities = [
    "Advanced statistical analysis and modeling",
    "Machine learning algorithm integration",
    "Natural language query processing",
    "Automated report generation",
    "Real-time data streaming",
    "Predictive modeling and forecasting",
    "Anomaly detection and alerting",
    "Custom data visualization",
    "API integration and webhooks",
    "Mobile-responsive dashboards",
    "Data export and sharing",
    "Scheduled reporting and alerts"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      features: [
        "Up to 5 data sources",
        "Basic analytics dashboard",
        "Standard reports",
        "Email support",
        "Basic data visualization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      features: [
        "Up to 25 data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Advanced visualizations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      features: [
        "Unlimited data sources",
        "Full AI capabilities",
        "Custom development",
        "White-label options",
        "Advanced security",
        "Dedicated account manager",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights and strategic recommendations",
      icon: TrendingUp,
      benefit: "Improve decision making by 60%"
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior, preferences, and lifetime value",
      icon: Users,
      benefit: "Increase customer retention by 45%"
    },
    {
      title: "Financial Analytics",
      description: "Monitor financial performance, detect fraud, and optimize cash flow",
      icon: DollarSign,
      benefit: "Reduce financial risks by 70%"
    },
    {
      title: "Operational Analytics",
      description: "Optimize business processes and identify efficiency improvements",
      icon: Activity,
      benefit: "Boost operational efficiency by 35%"
    }
  ];

  const benefits = [
    "Make data-driven decisions with confidence",
    "Identify hidden patterns and opportunities",
    "Predict future trends and market changes",
    "Automate routine reporting tasks",
    "Improve operational efficiency",
    "Enhance customer experience",
    "Reduce costs through optimization",
    "Stay ahead of competition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Data Analytics - Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered analytics. Advanced machine learning, predictive analytics, and real-time dashboards for data-driven decision making."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI-Powered Analytics
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              AI Data Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your raw data into actionable insights with cutting-edge AI analytics. 
              Our platform combines machine learning, predictive analytics, and real-time 
              dashboards to help you make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-400 font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to transform data into actionable business intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 rounded-2xl border border-emerald-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="text-emerald-400 font-semibold text-lg">{feature.price}</div>
                </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Analytics for Every Business Need
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI analytics can transform different aspects of your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-emerald-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-3">{useCase.description}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
                      {useCase.benefit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with data-driven insights and AI-powered intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-xl border border-emerald-500/20 bg-slate-800/30 hover:border-emerald-500/40 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive tools and features for enterprise-level data analysis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3 p-4 rounded-xl border border-emerald-500/20 bg-slate-800/30 hover:border-emerald-500/40 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{capability}</span>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options to fit businesses of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-emerald-500/50 bg-gradient-to-br from-slate-800 to-slate-700' 
                    : 'border-slate-600 bg-slate-800/50'
                } backdrop-blur-sm`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their operations with AI-powered analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500/30 text-emerald-400 font-semibold text-lg hover:bg-emerald-500/10 transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </motion.button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              Questions? Email <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:underline">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-emerald-400 hover:underline">+1 302 464 0950</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}