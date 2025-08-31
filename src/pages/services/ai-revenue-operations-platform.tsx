import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Zap, 
  Brain, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  Target,
  Shield,
  Cloud,
  Mail,
  Phone,
  Globe,
  Video,
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  Clock,
  Award,
  Headphones,
  Calendar,
  Bell,
  FileText,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIRevenueOperationsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Revenue Intelligence",
      description: "Advanced analytics and machine learning to predict revenue trends, identify opportunities, and optimize pricing strategies",
      benefits: ["Revenue forecasting", "Opportunity identification", "Pricing optimization"]
    },
    {
      icon: TrendingUp,
      title: "Unified Revenue Operations",
      description: "Integrate sales, marketing, and customer success data into a single platform for comprehensive revenue insights",
      benefits: ["Data unification", "Cross-functional insights", "End-to-end visibility"]
    },
    {
      icon: Zap,
      title: "Automated Revenue Processes",
      description: "Streamline quote-to-cash processes, contract management, and revenue recognition with intelligent automation",
      benefits: ["Process automation", "Contract management", "Revenue recognition"]
    },
    {
      icon: BarChart3,
      title: "Real-time Revenue Analytics",
      description: "Live dashboards and reports showing key revenue metrics, pipeline health, and performance indicators",
      benefits: ["Live dashboards", "Pipeline analytics", "Performance tracking"]
    },
    {
      icon: Target,
      title: "Predictive Revenue Modeling",
      description: "AI-driven models to forecast revenue, predict churn risk, and identify expansion opportunities",
      benefits: ["Revenue forecasting", "Churn prediction", "Expansion insights"]
    },
    {
      icon: Shield,
      title: "Revenue Compliance & Governance",
      description: "Ensure revenue recognition compliance with ASC 606, SOX, and other regulatory requirements",
      benefits: ["Regulatory compliance", "Audit readiness", "Risk management"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for growing companies with up to $5M annual revenue",
      features: [
        "Up to $5M revenue tracking",
        "Basic revenue analytics",
        "Standard dashboards",
        "Email support",
        "Core compliance features",
        "Basic automation"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for established companies with advanced revenue operations needs",
      features: [
        "Up to $50M revenue tracking",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Advanced automation",
        "Custom integrations",
        "White-label options",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade revenue operations",
      features: [
        "Unlimited revenue tracking",
        "Custom AI models",
        "Advanced analytics",
        "24/7 dedicated support",
        "Custom workflows",
        "Advanced security",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "SaaS",
      description: "Optimize subscription revenue, reduce churn, and increase customer lifetime value through intelligent revenue operations",
      metrics: ["MRR growth", "Churn reduction", "CLV increase"]
    },
    {
      industry: "Enterprise Software",
      description: "Streamline complex sales cycles, manage enterprise contracts, and ensure accurate revenue recognition",
      metrics: ["Sales cycle efficiency", "Contract value", "Revenue accuracy"]
    },
    {
      industry: "E-commerce",
      description: "Optimize pricing strategies, reduce cart abandonment, and increase average order value",
      metrics: ["Conversion rates", "AOV increase", "Revenue per customer"]
    },
    {
      industry: "Financial Services",
      description: "Ensure regulatory compliance, optimize pricing models, and improve revenue forecasting accuracy",
      metrics: ["Compliance scores", "Pricing accuracy", "Forecast precision"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Revenue Growth",
      description: "Optimize pricing, identify opportunities, and streamline processes to increase revenue by 20-35%"
    },
    {
      icon: DollarSign,
      title: "Improve Revenue Predictability",
      description: "AI-powered forecasting provides 95%+ accuracy in revenue predictions, improving planning and decision-making"
    },
    {
      icon: Users,
      title: "Enhance Team Productivity",
      description: "Automate routine tasks and provide actionable insights, increasing team productivity by 40-60%"
    },
    {
      icon: Zap,
      title: "Reduce Revenue Leakage",
      description: "Identify and prevent revenue leakage through intelligent monitoring and automated compliance checks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Driven Revenue Operations
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Optimize Revenue with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our AI-powered revenue operations platform unifies sales, marketing, and customer success data 
              to drive predictable revenue growth and optimize your entire revenue engine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Revenue Operations Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to optimize your revenue engine and drive predictable growth
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
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven results and measurable impact on your revenue operations
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
                <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your revenue operations needs
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
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored revenue operations solutions for various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div>
                  <h4 className="text-lg font-medium text-white mb-3">Key Metrics:</h4>
                  <ul className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center text-gray-300">
                        <BarChart3 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Revenue Operations?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have revolutionized their revenue operations with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}