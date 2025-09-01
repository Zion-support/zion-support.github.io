import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  TrendingUp,
  Bot,
  Cpu,
  Database,
  Lock,
  Rocket,
  Target,
  Eye,
  FileText,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Settings,
  GitBranch,
  Activity,
  LineChart,
  PieChart,
  ScatterPlot
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIPredictiveAnalyticsPlatform: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced ML Models",
      description: "State-of-the-art machine learning algorithms including deep learning, ensemble methods, and neural networks"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live data processing and instant insights with sub-second response times"
    },
    {
      icon: Zap,
      title: "AutoML Capabilities",
      description: "Automated model selection, hyperparameter tuning, and feature engineering"
    },
    {
      icon: Database,
      title: "Multi-Data Source Integration",
      description: "Connect to databases, APIs, cloud storage, and real-time data streams"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, role-based access control, and compliance with industry standards"
    },
    {
      icon: Activity,
      title: "Predictive Monitoring",
      description: "Proactive alerts and anomaly detection before issues impact your business"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 predictive models",
        "10GB data storage",
        "Basic ML algorithms",
        "Email support",
        "Standard dashboards",
        "Monthly model updates"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,199",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 predictive models",
        "100GB data storage",
        "Advanced ML algorithms",
        "Priority support",
        "Custom dashboards",
        "Weekly model updates",
        "API access",
        "Real-time streaming"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade analytics",
      features: [
        "Unlimited predictive models",
        "Unlimited data storage",
        "Custom ML algorithms",
        "Dedicated support team",
        "Custom development",
        "Daily model updates",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Predict Future Trends",
      description: "Forecast market changes, customer behavior, and business opportunities"
    },
    {
      icon: DollarSign,
      title: "Increase Revenue",
      description: "Identify growth opportunities and optimize pricing strategies"
    },
    {
      icon: Star,
      title: "Reduce Risk",
      description: "Predict and prevent potential issues before they impact your business"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "Make informed strategic decisions based on predictive insights"
    }
  ];

  const useCases = [
    {
      title: "Customer Behavior Prediction",
      description: "Predict customer churn, lifetime value, and purchasing patterns to optimize marketing strategies",
      examples: ["Churn prediction", "Customer segmentation", "Purchase forecasting", "Recommendation engines"]
    },
    {
      title: "Financial Risk Assessment",
      description: "Identify potential financial risks and opportunities through predictive modeling",
      examples: ["Credit scoring", "Fraud detection", "Market forecasting", "Investment optimization"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Predict demand, optimize inventory levels, and prevent supply chain disruptions",
      examples: ["Demand forecasting", "Inventory optimization", "Supplier risk assessment", "Logistics optimization"]
    },
    {
      title: "Operational Efficiency",
      description: "Predict equipment failures, optimize resource allocation, and improve operational performance",
      examples: ["Predictive maintenance", "Resource optimization", "Performance monitoring", "Quality control"]
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Customer behavior prediction, inventory optimization, pricing strategies",
      icon: "🛒"
    },
    {
      name: "Healthcare",
      description: "Patient outcome prediction, disease progression, treatment optimization",
      icon: "🏥"
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, market prediction, portfolio optimization",
      icon: "💳"
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, supply chain optimization",
      icon: "🏭"
    },
    {
      name: "Transportation",
      description: "Route optimization, demand forecasting, maintenance scheduling",
      icon: "🚚"
    },
    {
      name: "Energy",
      description: "Load forecasting, equipment maintenance, renewable energy optimization",
      icon: "⚡"
    }
  ];

  const mlAlgorithms = [
    {
      name: "Deep Learning",
      description: "Neural networks for complex pattern recognition",
      useCase: "Image analysis, natural language processing"
    },
    {
      name: "Random Forest",
      description: "Ensemble method for classification and regression",
      useCase: "Customer segmentation, risk assessment"
    },
    {
      name: "Gradient Boosting",
      description: "Sequential learning for high accuracy predictions",
      useCase: "Financial modeling, demand forecasting"
    },
    {
      name: "Time Series Analysis",
      description: "Specialized algorithms for temporal data",
      useCase: "Sales forecasting, trend analysis"
    },
    {
      name: "Clustering",
      description: "Unsupervised learning for data exploration",
      useCase: "Market segmentation, anomaly detection"
    },
    {
      name: "Natural Language Processing",
      description: "Text analysis and sentiment prediction",
      useCase: "Customer feedback analysis, social media monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Predictive Analytics Platform - Zion Tech Group"
        description="Transform your business with AI-powered predictive analytics. Forecast trends, optimize operations, and make data-driven decisions with advanced machine learning."
        keywords="predictive analytics, AI analytics, machine learning, business intelligence, forecasting, data science"
        canonical="https://ziontechgroup.com/services/ai-predictive-analytics-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI-Powered Analytics
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of predictive analytics with AI that learns from your data. 
              Forecast trends, optimize operations, and make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
                <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage predictive models at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ML Algorithms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Machine Learning Algorithms
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              State-of-the-art algorithms designed for real-world business applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlAlgorithms.map((algorithm, index) => (
              <motion.div
                key={algorithm.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{algorithm.name}</h3>
                <p className="text-slate-300 mb-4">{algorithm.description}</p>
                <div className="text-sm text-purple-400 font-medium">
                  Use Case: {algorithm.useCase}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your analytics needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Predictive Analytics?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business with data-driven insights and predictive capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Business Functions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Apply predictive analytics across all areas of your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-slate-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored predictive analytics solutions for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Ready to Predict Your Business Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Join thousands of businesses that have transformed their operations with predictive analytics
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Ready to transform your business with predictive analytics? Our data science experts are here to help.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPredictiveAnalyticsPlatform;