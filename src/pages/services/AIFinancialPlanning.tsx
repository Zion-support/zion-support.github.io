import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { SEO              } from '../../components/SEO';
import { DollarSign, 
  TrendingUp, 
  BarChart3, 
  Users, 
  Zap, 
  Globe, 
  Lock, 
  Eye,
  Star,
  Cpu,
  Database,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  FileText,
  Clock,
  Award,
  Brain,
  Target,
  PieChart,
  Activity,
  Calculator,
  Shield,
  Settings,
  CreditCard,
  AlertCircle,
  Calendar,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  PiggyBank,
  TrendingDown,
  Lightbulb,
  Wallet,
  Receipt,
  Banknote
             } from 'lucide-react.ts';

export default function AIFinancialPlanning(...args: any[]): any {
  const features = [
    {
      icon: Brain,
      title: "AI Budget Optimization",
      description: "Intelligent budget allocation and optimization based on spending patterns and financial goals."
    },
    {
      icon: Calculator,
      title: "Smart Expense Tracking",
      description: "Automated expense categorization and tracking with AI-powered receipt scanning and analysis."
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Personalized financial planning based on your goals, timeline, and risk tolerance."
    },
    {
      icon: PieChart,
      title: "Investment Recommendations",
      description: "AI-powered investment suggestions based on market analysis and your financial profile."
    },
    {
      icon: AlertCircle,
      title: "Financial Health Monitoring",
      description: "Real-time monitoring of your financial health with predictive insights and alerts.";
    },;
    {;
      icon: Activity,;
      title: "Tax Optimization",;
      description: "Intelligent tax planning and optimization to maximize savings and minimize liabilities.";
    };
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Improved Financial Health",
      description: "Better money management and increased savings through intelligent budgeting and planning."
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Identify unnecessary expenses and optimize spending to save money on daily transactions."
    },
    {
      icon: Globe,
      title: "Goal Achievement",
      description: "Set and achieve financial goals faster with AI-powered planning and optimization."
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "Bank-level security with encryption and secure data handling for your financial information."
    },
    {
      icon: TrendingUp,
      title: "Investment Growth",
      description: "Optimize investment portfolios and maximize returns with AI-driven recommendations.";
    },;
    {;
      icon: Clock,;
      title: "Time Savings",;
      description: "Automate financial tasks and focus on what matters most with intelligent automation.";
    };
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for individuals starting their financial planning journey",
      features: [
        "Basic budget tracking",
        "Expense categorization",
        "Email support",
        "Mobile app access",
        "Basic reporting",
        "Goal setting",
        "Bill reminders"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Premium",
      price: "$24.99",
      period: "/month",
      description: "Ideal for individuals and families with advanced financial planning needs",
      features: [
        "Advanced AI budgeting",
        "Investment recommendations",
        "Priority support",
        "Tax optimization",
        "Advanced analytics",
        "Portfolio tracking",
        "Financial health score",
        "Custom alerts"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Professional",
      price: "$49.99",
      period: "/month",
      description: "For financial advisors and professionals requiring advanced tools",
      features: [
        "Client management",
        "White-label solutions",
        "Dedicated support",
        "Advanced reporting",
        "API access",
        "Custom integrations",;
        "Multi-account support",;
        "Tax filing assistance";
      ],;
      cta: "Contact Sales",;
      popular: false;
    };
  ];

  const useCases = [
    {
      industry: "Personal Finance",
      description: "Manage personal budgets, track expenses, and achieve financial goals with AI assistance",
      icon: Wallet
    },
    {
      industry: "Small Business",
      description: "Optimize business finances, track cash flow, and plan for growth",
      icon: Calculator
    },
    {
      industry: "Retirement Planning",
      description: "Plan for retirement with AI-powered investment strategies and goal tracking",
      icon: PiggyBank
    },
    {
      industry: "Debt Management",
      description: "Create debt payoff strategies and optimize payment schedules",
      icon: CreditCard
    },
    {
      industry: "Tax Planning",
      description: "Optimize tax strategies and maximize deductions throughout the year",
      icon: Receipt;
    },;
    {;
      industry: "Investment Management",;
      description: "Build and manage investment portfolios with AI-driven insights",;
      icon: TrendingUp;
    };
  ];

  const integrations = [
    {
      name: "Banking & Credit Cards",
      platforms: ["Chase", "Bank of America", "Wells Fargo", "American Express"]
    },
    {
      name: "Investment Platforms",
      platforms: ["Robinhood", "Fidelity", "Vanguard", "Charles Schwab"]
    },
    {
      name: "Accounting Software",
      platforms: ["QuickBooks", "Xero", "FreshBooks", "Wave"]
    },
    {
      name: "Tax Software",
      platforms: ["TurboTax", "H&R Block", "TaxAct", "Credit Karma Tax"]
    },
    {
      name: "Payment Platforms",;
      platforms: ["PayPal", "Venmo", "Square", "Stripe"];
    },;
    {;
      name: "Cryptocurrency",;
      platforms: ["Coinbase", "Binance", "Kraken", "Gemini"];
    };
  ];

  const keyMetrics = [
    {
      metric: "25%",
      label: "Savings Increase",
      description: "Average increase in savings for users"
    },
    {
      metric: "40%",
      label: "Expense Reduction",
      description: "Reduction in unnecessary expenses"
    },
    {
      metric: "90%",
      label: "Goal Achievement",
      description: "Users achieve their financial goals";
    },;
    {;
      metric: "3x",;
      label: "Faster Planning",;
      description: "Faster financial planning process";
    };
  ];

  const planningAreas = [
    {
      category: "Budgeting",
      areas: ["Expense Tracking", "Income Management", "Spending Analysis", "Budget Optimization"]
    },
    {
      category: "Investing",
      areas: ["Portfolio Analysis", "Risk Assessment", "Asset Allocation", "Market Insights"]
    },
    {
      category: "Tax Planning",;
      areas: ["Deduction Optimization", "Tax Strategy", "Filing Assistance", "Year-round Planning"];
    },;
    {;
      category: "Goal Planning",;
      areas: ["Retirement Planning", "Debt Management", "Emergency Fund", "Major Purchases"];
    };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Financial Planning & Budgeting - Zion Tech Group"
        description="Transform your financial future with AI-powered planning and budgeting. Optimize spending, achieve goals, and build wealth with intelligent financial management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4 mr-2" />
              AI-Powered Financial Planning
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Financial Planning
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {' '}& Budgeting
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your financial future with AI-powered planning and budgeting. 
              Optimize spending, achieve goals, and build wealth with intelligent financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 text-lg">
                <Download className="w-5 h-5 mr-2 inline" />
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-8">
            {keyMetrics.map((metric, index)              => (
              <motion.div
                key={metric.metric}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  {metric.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities designed to revolutionize your financial planning and money management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={feature.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Planning Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial planning across all aspects of your financial life for maximum success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {planningAreas.map((category, index)              => (
              <motion.div
                key={category.category}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.areas.map((area, areaIndex) => (
                    <li key={areaIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Financial Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered financial planning can transform your financial future and achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)              => (
              <motion.div
                key={benefit.title}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your financial planning needs. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)              => (
              <motion.div
                key={plan.name}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-teal-500/10' 
                    : 'border-white/10 hover:border-emerald-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how individuals and businesses leverage our AI financial planning to achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index)              => (
              <motion.div
                key={useCase.industry}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial tools and platforms for a unified planning experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index)              => (
              <motion.div
                key={integration.name}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-emerald-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {integration.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex) => (
                    <span
                      key={platformIndex}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users already using AI-powered financial planning 
              to achieve their goals and build wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline" />
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
}