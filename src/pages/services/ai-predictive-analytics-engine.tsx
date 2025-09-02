import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  DollarSign,
  ExternalLink,
  Play,
  PieChart,
  Activity,
  Eye,
  Headphones,
  Mail,
  Phone,
  Settings,
  Clock,
  Users,
  Cpu,
  Network,
  Database,
  Shield,
  Monitor,
  HardDrive,
  Wifi,
  LineChart,
  PieChart as PieChartIcon,
  Scatter,
  Gauge
} from 'lucide-react';

export default function AIPredictiveAnalyticsEngine() {
  const features = [
    {
      icon: Brain,
      title: "Advanced Machine Learning Models",
      description: "Deep learning, neural networks, and ensemble methods for accurate predictions with 95%+ accuracy rates."
    },
    {
      icon: BarChart3,
      title: "Real-Time Predictive Analytics",
      description: "Live data processing and instant predictions with sub-second response times for critical business decisions."
    },
    {
      icon: Target,
      title: "Multi-Domain Predictions",
      description: "Forecast sales, demand, churn, pricing, inventory, and market trends across all business functions."
    },
    {
      icon: Zap,
      title: "Automated Model Training",
      description: "Self-improving AI models that continuously learn from new data and automatically optimize performance."
    },
    {
      icon: Database,
      title: "Big Data Processing",
      description: "Handle petabytes of data with distributed computing and real-time streaming analytics capabilities."
    },
    {
      icon: Shield,
      title: "Explainable AI",
      description: "Transparent predictions with detailed explanations, feature importance, and model interpretability."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1M data points/month",
        "Basic ML models (5 models)",
        "Standard predictions",
        "Email support",
        "Basic dashboards",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10M data points/month",
        "Advanced ML models (20 models)",
        "Real-time predictions",
        "Priority support",
        "Custom dashboards",
        "Advanced analytics",
        "API access",
        "Model customization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data points",
        "Custom ML models (unlimited)",
        "Real-time streaming analytics",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced API & webhooks",
        "Multi-tenant architecture",
        "SLA guarantee (99.9% uptime)"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Increase Revenue by 25%",
      description: "Optimize pricing, inventory, and sales strategies with accurate demand forecasting and market predictions."
    },
    {
      icon: Target,
      title: "Reduce Risk by 40%",
      description: "Identify potential issues before they occur with predictive risk modeling and early warning systems."
    },
    {
      icon: TrendingUp,
      title: "Improve Decision Speed by 60%",
      description: "Make data-driven decisions instantly with real-time predictions and automated insights."
    },
    {
      icon: Activity,
      title: "Optimize Operations by 35%",
      description: "Streamline processes, reduce waste, and improve efficiency with predictive maintenance and optimization."
    }
  ];

  const useCases = [
    {
      industry: "Retail & E-commerce",
      challenge: "Inventory management and demand forecasting for seasonal products",
      solution: "AI models predict demand patterns, optimize inventory levels, and prevent stockouts or overstocking",
      result: "30% reduction in inventory costs, 25% increase in sales"
    },
    {
      industry: "Financial Services",
      challenge: "Credit risk assessment and fraud detection",
      solution: "Advanced ML models analyze transaction patterns and customer behavior to predict risk and detect anomalies",
      result: "50% reduction in fraud losses, 40% improvement in approval accuracy"
    },
    {
      industry: "Manufacturing",
      challenge: "Predictive maintenance and quality control",
      solution: "IoT data analysis predicts equipment failures and quality issues before they impact production",
      result: "45% reduction in downtime, 35% improvement in product quality"
    },
    {
      industry: "Healthcare",
      challenge: "Patient outcome prediction and resource optimization",
      solution: "Medical data analysis predicts patient risks and optimizes treatment plans and resource allocation",
      result: "30% improvement in patient outcomes, 25% reduction in costs"
    }
  ];

  const predictionTypes = [
    {
      icon: TrendingUp,
      title: "Sales Forecasting",
      description: "Predict future sales with 95% accuracy using historical data, seasonality, and market trends"
    },
    {
      icon: Users,
      title: "Customer Churn Prediction",
      description: "Identify customers likely to churn and implement retention strategies before they leave"
    },
    {
      icon: DollarSign,
      title: "Price Optimization",
      description: "Dynamic pricing models that maximize revenue while maintaining competitive advantage"
    },
    {
      icon: BarChart3,
      title: "Demand Planning",
      description: "Accurate demand forecasting for inventory management and supply chain optimization"
    },
    {
      icon: Target,
      title: "Risk Assessment",
      description: "Predict and mitigate business risks including credit, market, and operational risks"
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description: "Predict system performance issues and optimize operations for maximum efficiency"
    }
  ];

  const technologies = [
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "PyTorch", category: "Neural Networks" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "Apache Spark", category: "Big Data" },
    { name: "Kafka", category: "Streaming" },
    { name: "Elasticsearch", category: "Search & Analytics" },
    { name: "Redis", category: "Caching" },
    { name: "Docker", category: "Containerization" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Grafana", category: "Visualization" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "MLflow", category: "MLOps" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics Engine - Zion Tech Group</title>
        <meta name="description" content="Advanced AI predictive analytics engine with 95% accuracy. Real-time forecasting, machine learning models, and big data processing. Starting at $499/month." />
        <meta name="keywords" content="predictive analytics, AI forecasting, machine learning, data science, business intelligence, predictive modeling" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-predictive-analytics-engine" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI Predictive Analytics Engine
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Predictive
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Analytics Engine</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable predictions with our advanced AI analytics engine. 
                Real-time forecasting, machine learning models, and 95%+ accuracy for critical business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Predicting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our predictive analytics engine combines cutting-edge AI with enterprise-grade performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prediction Types Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Predictions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive prediction capabilities across all business functions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {predictionTypes.map((prediction, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <prediction.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{prediction.title}</h3>
                  <p className="text-slate-300">{prediction.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Technologies
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built with cutting-edge AI and data science technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See real results with our AI-powered predictive analytics platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Success Stories
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                See how different industries leverage our predictive analytics platform
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Challenge:</h4>
                    <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-emerald-400 mb-2">Solution:</h4>
                    <p className="text-slate-300 text-sm">{useCase.solution}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-green-400 mb-1">Result:</h4>
                    <p className="text-green-300 text-sm font-semibold">{useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your predictive analytics needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Predict Your Future Success?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join industry leaders already using our AI platform to make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-emerald-400 hover:text-emerald-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}