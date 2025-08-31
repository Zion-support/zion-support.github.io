import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  BarChart3,
  Zap,
  Clock,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Rocket,
  Lightbulb,
  Activity,
  Workflow,
  Eye,
  Search,
  Settings,
  Palette,
  Users2,
  Cog,
  ShoppingCart,
  Calendar,
  Handshake,
  BookOpen,
  Video,
  GraduationCap,
  PenTool,
  FileText,
  Briefcase,
  Globe,
  Building,
  Coins,
  CreditCard,
  PiggyBank,
  TrendingDown,
  ArrowUpDown,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  FileCheck,
  Scale,
  Gavel,
  BookOpen as BookOpenIcon,
  Clipboard,
  Calculator,
  Receipt,
  PieChart,
  LineChart,
  BarChart,
  Activity as ActivityIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  DollarSign as DollarSignIcon,
  Coins as CoinsIcon,
  CreditCard as CreditCardIcon,
  PiggyBank as PiggyBankIcon,
  ArrowUpDown as ArrowUpDownIcon,
  RefreshCw as RefreshCwIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  FileCheck as FileCheckIcon,
  Scale as ScaleIcon,
  Gavel as GavelIcon,
  BookOpen as BookOpenIcon2,
  Clipboard as ClipboardIcon,
  Calculator as CalculatorIcon,
  Receipt as ReceiptIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon
} from 'lucide-react';

const AIFinancialRiskManagementEnhanced: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms for real-time risk identification and scoring"
    },
    {
      icon: Shield,
      title: "Comprehensive Risk Monitoring",
      description: "24/7 monitoring of market risks, credit risks, and operational risks with instant alerts"
    },
    {
      icon: BarChart3,
      title: "Predictive Risk Analytics",
      description: "Forecast potential risks using historical data and market trends with 90%+ accuracy"
    },
    {
      icon: Workflow,
      title: "Automated Risk Mitigation",
      description: "Intelligent workflows for automatic risk response and mitigation strategies"
    },
    {
      icon: Eye,
      title: "Real-time Risk Dashboard",
      description: "Comprehensive visualization of risk metrics, trends, and exposure levels"
    },
    {
      icon: AlertCircle,
      title: "Early Warning System",
      description: "Proactive alerts for emerging risks before they impact your business"
    }
  ];

  const benefits = [
    "Reduce financial losses by 40-60%",
    "Improve risk assessment accuracy by 85%",
    "Reduce compliance violations by 75%",
    "Increase risk-adjusted returns by 30%",
    "Reduce manual risk monitoring by 70%",
    "Improve regulatory compliance by 90%"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their risk management journey",
      features: [
        "Up to $10M portfolio value",
        "Basic risk assessment",
        "Standard monitoring",
        "Email alerts",
        "Core risk dashboard",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex financial operations",
      features: [
        "Up to $100M portfolio value",
        "Advanced AI risk models",
        "Real-time monitoring",
        "Priority alerts",
        "Advanced analytics",
        "Custom integrations",
        "Compliance tracking"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex risk management needs",
      features: [
        "Unlimited portfolio value",
        "Custom AI models",
        "White-label solution",
        "Dedicated risk manager",
        "Advanced security",
        "Custom development",
        "Regulatory compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Investment Management",
      description: "Portfolio risk assessment, market risk monitoring, and compliance tracking",
      icon: PieChart
    },
    {
      title: "Banking & Finance",
      description: "Credit risk assessment, operational risk monitoring, and regulatory compliance",
      icon: Coins
    },
    {
      title: "Insurance",
      description: "Underwriting risk assessment, claims risk analysis, and fraud detection",
      icon: Shield
    },
    {
      title: "Corporate Finance",
      description: "Financial risk management, treasury operations, and compliance monitoring",
      icon: Building
    }
  ];

  const riskTypes = [
    {
      title: "Market Risk",
      icon: TrendingUp,
      description: "Monitor market volatility, interest rate changes, and currency fluctuations"
    },
    {
      title: "Credit Risk",
      icon: CreditCard,
      description: "Assess borrower creditworthiness and portfolio credit exposure"
    },
    {
      title: "Operational Risk",
      icon: Cog,
      description: "Identify operational inefficiencies and process-related risks"
    },
    {
      title: "Compliance Risk",
      icon: Gavel,
      description: "Ensure regulatory compliance and avoid legal penalties"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Financial Risk Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Risk
              <span className="text-zion-cyan"> Management</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Protect your business with AI-powered financial risk management that provides real-time monitoring, 
              predictive analytics, and automated mitigation strategies to safeguard your assets and ensure compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Risk Management Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Everything you need to identify, assess, and mitigate financial risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Monitor and manage all types of financial risks in one platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskTypes.map((riskType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <riskType.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{riskType.title}</h3>
                <p className="text-zion-slate-light">{riskType.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              See the measurable impact of AI-powered financial risk management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-zion-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                </div>
                <p className="text-lg text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that fits your risk management needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-zion-blue-dark/50 border rounded-lg p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-zion-purple/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-zion-cyan text-slate-900 hover:bg-zion-cyan-light'
                      : 'bg-zion-purple text-white hover:bg-zion-purple-light'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Financial Institution
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI risk management works across all financial services and business types
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join thousands of companies using AI to manage financial risks and ensure compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-slate-900 font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-white">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-white text-center">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIFinancialRiskManagementEnhanced;