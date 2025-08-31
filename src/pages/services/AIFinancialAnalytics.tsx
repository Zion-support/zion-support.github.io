<<<<<<< HEAD
import { TrendingUp, BarChart3, Shield, CheckCircle, ArrowRight, ExternalLink, Phone, Mail, DollarSign, Target, Zap, Calculator, PieChart export default function AIFinancialAnalytics(...args: any[]): any {
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Play,
  Phone,
  Mail,
  MapPin,
  Calculator,
  AlertTriangle,
  FileText,
  Calendar,
  UserCheck,
  TrendingDown,
  Percent,
  Clock
             } from 'lucide-react.ts';
import { SEO              } from '../../components/SEO';

const AIFinancialAnalytics = () => {
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Forecasting",
      description: "Advanced machine learning algorithms that predict market trends, revenue patterns, and financial outcomes with 95%+ accuracy"
    },
    {
      icon: BarChart3,
      title: "Real-time Financial Dashboards",
      description: "Live financial metrics, KPIs, and performance indicators with instant updates from multiple data sources"
    },
    {
      icon: TrendingUp,
      title: "Risk Assessment & Management",
      description: "Intelligent risk scoring, portfolio analysis, and automated alerts for potential financial threats and opportunities"
    },
    {
      icon: Zap,
      title: "Automated Financial Reporting",
      description: "AI-generated financial reports, compliance documentation, and regulatory filings that adapt to your business needs"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with SOC 2, GDPR, and financial industry compliance for sensitive financial data"
    },
    {
      icon: Globe,
      title: "Multi-currency & Global Support",
      description: "Handle international transactions, multi-currency accounting, and global financial regulations seamlessly"
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Improve investment returns by 25-40%',
    'Reduce financial analysis time by 80%',
    'Automate compliance and reporting',
    'Real-time market insights and alerts',
    'Predict market trends with 85% accuracy',
    'Optimize portfolio allocation automatically'
  ];

  const pricing = [
    {
      name: 'Analyst',
      price: '$199/mo',
      features: ['Up to 10 portfolios', 'Basic AI insights', 'Standard reporting', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/mo',
      features: ['Up to 50 portfolios', 'Advanced AI analytics', 'Real-time alerts', 'Priority support', 'Custom dashboards'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/mo',
      features: ['Unlimited portfolios', 'Full AI suite', 'Custom AI training', 'Dedicated support', 'API access', 'White-label solutions'],
=======
  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 financial accounts",
        "Basic AI forecasting",
        "5 user licenses",
        "Standard reports",
        "Email support",
        "Basic integrations",
        "Monthly analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses and financial teams",
      features: [
        "Up to 50 financial accounts",
        "Advanced AI analytics",
        "25 user licenses",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Advanced integrations",
        "Real-time analytics",
        "Risk management"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with complex financial needs",
      features: [
        "Unlimited accounts",
        "Custom AI models",
        "Unlimited users",
        "Advanced security",
        "Dedicated support",
        "Custom development",
        "On-premise options",
        "SLA guarantees",
        "Regulatory compliance"
      ],
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      popular: false

  ];

  const useCases = [
    {
      title: "Investment Portfolio Management",
      description: "AI-powered portfolio optimization, risk assessment, and performance tracking for investment professionals",
      icon: TrendingUp
    },
    {
      title: "Business Financial Planning",
      description: "Budget forecasting, cash flow analysis, and financial planning with predictive AI insights",
      icon: Calculator
    },
    {
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, regulatory compliance monitoring, and audit trail management",
      icon: Shield
    },
    {
      title: "Trading & Market Analysis",
      description: "Real-time market data analysis, trading signals, and algorithmic trading recommendations",
      icon: Activity
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Better Returns",
      value: "15-25%",
      description: "Improve investment returns with AI insights"
    },
    {
      icon: Clock,
      title: "Faster Analysis",
      value: "90%",
      description: "Reduce analysis time from hours to minutes"
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      value: "30-50%",
      description: "Lower operational costs and improve efficiency"
    },
    {
      icon: Target,
      title: "Risk Reduction",
      value: "40-60%",
      description: "Better risk management and compliance"
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "CFO",
      company: "TechGrowth Capital",
      content: "The AI financial analytics have transformed our decision-making process. We've improved returns by 22% while reducing risk exposure.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Portfolio Manager",
      company: "Global Investments Ltd",
      content: "Real-time AI insights help us make better trading decisions. The risk assessment tools are incredibly accurate.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Financial Controller",
      company: "InnovateCorp",
      content: "Automated reporting saves us 20+ hours per week. The compliance features ensure we never miss regulatory deadlines.",
      rating: 5
    }
  ];

  const integrations = [
    { name: "QuickBooks", icon: Calculator, description: "Accounting software integration" },
    { name: "Salesforce", icon: Users, description: "CRM and sales data sync" },
    { name: "Bloomberg", icon: TrendingUp, description: "Market data feeds" },
    { name: "Excel", icon: FileText, description: "Spreadsheet automation" },
    { name: "Tableau", icon: BarChart3, description: "Data visualization" },
    { name: "Power BI", icon: Monitor, description: "Business intelligence" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="AI-Powered Financial Analytics - Zion Tech Group"
        description="Transform financial decision-making with AI analytics. Real-time insights, predictive forecasting, and risk management. Start from $399/month."
      />
      
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <TrendingUp className="w-4 h-4 mr-2" /> AI-Powered Financial Analytics
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Financial Analytics Platform</h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Transform your financial decision-making with AI-driven insights, predictive analytics, and automated portfolio optimization.
            Stay ahead of the market with intelligent financial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              View Pricing
            </a>
            <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </a>
=======
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center relative z-10"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
              <Brain className="w-4 h-4 mr-2 text-cyan-400" />
              AI-Powered Financial Analytics
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Financial Analytics
              </span>
              <br />
              <span className="text-white">Powered by AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your financial decision-making with AI-powered analytics that provide real-time insights, 
              predictive forecasting, and intelligent risk management for better returns and compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center group"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact AI analytics can have on your financial performance
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Financial Intelligence</h2>
          <p className="text-xl text-gray-600">Everything you need to make smarter financial decisions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Zap className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Analytics Suite</h2>
            <p className="text-xl text-gray-600">From portfolio analysis to market prediction, we cover all your financial analytics needs</p>
          </div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-6">
            {analyticsTypes.map((analyticsType, index)              => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
                <PieChart className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 text-sm">{analyticsType}</h3>
              </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your financial analysis with AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-xl text-gray-600">Ideal for financial professionals and organizations seeking data-driven insights</p>
        </div>

        <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6">
          {useCases.map((useCase, index)              => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600">Your financial data is protected with the highest security standards</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOC 2 Compliant</h3>
              <p className="text-gray-600">Industry-leading security and compliance standards</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">All data is encrypted in transit and at rest</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Factor Authentication</h3>
              <p className="text-gray-600">Advanced security for account protection</p>
            </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries are transforming financial analysis with AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {useCases.map((useCase, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial tools and workflows
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {integration.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
        </div>
      </section>

      {/* Pricing Section */}
<<<<<<< HEAD
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your financial analytics needs</p>
          </div>

          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricing.map((plan, index)              => (
              <div key={index} className={`relative bg-white rounded-xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-200'
              }`}>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your financial analysis needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {pricingPlans.map((plan, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
<<<<<<< HEAD

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
=======
                
                <div className={`glass rounded-2xl p-8 border transition-all duration-300 backdrop-blur-sm h-full ${
                  plan.popular 
                    ? 'border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10' 
                    : 'border-white/20 hover:border-cyan-400/40'
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="https://ziontechgroup.com/contact"
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
                        : 'border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for enterprise pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-700 font-semibold">
              Contact Sales Team
            </a>
          </div>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-8">
            {testimonials.map((testimonial, index)              => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass rounded-2xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 group-hover:transform group-hover:scale-105 backdrop-blur-sm h-full">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.comp}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Analysis?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading companies that are already improving returns and reducing risk with AI-powered financial analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400/30 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Phone</div>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <div className="text-white font-semibold">Address</div>
              <div className="text-gray-300 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
<<<<<<< HEAD

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <Mail className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Get detailed information and pricing</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-700 font-semibold">
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Website</h3>
          <p className="text-gray-600 mb-4">
            Learn more about our complete suite of AI-powered business solutions
          </p>
          <a
            href="https://ziontechgroup.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"

            Visit ziontechgroup.com <ExternalLink className="w-4 h-4 ml-2" />
          </a>
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}}}
=======
};

export default AIFinancialAnalytics;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
