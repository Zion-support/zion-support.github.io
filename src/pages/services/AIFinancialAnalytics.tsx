import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  Clock, 
  Users, 
  Globe,
  Target,
  Rocket,
  Star,
  Award,
  Lock,
  Cloud,
  Smartphone,
  Monitor,
  Database,
  Cpu,
  Network,
  Server,
  PieChart,
  LineChart,
  Activity,
  AlertTriangle,
  FileText,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Power,
  Battery,
  CreditCard,
  Wallet,
  PiggyBank,
  Calculator,
  Percent,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Multiply,
  Hash,
  Hash as HashIcon,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChartIcon,
  DollarSign as DollarIcon,
  Brain as BrainIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  CheckCircle as CheckIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Star as StarIcon,
  Award as AwardIcon,
  Lock as LockIcon,
  Cloud as CloudIcon,
  Smartphone as MobileIcon,
  Monitor as DesktopIcon,
  Database as DataIcon,
  Cpu as CpuIcon,
  Network as NetworkIcon,
  Server as ServerIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Activity as ActivityIcon,
  AlertTriangle as AlertIcon,
  FileText as FileIcon,
  Settings as SettingsIcon,
  Bell as BellIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw as RefreshIcon,
  Power as PowerIcon,
  Battery as BatteryIcon,
  CreditCard as CreditCardIcon,
  Wallet as WalletIcon,
  PiggyBank as PiggyBankIcon,
  Calculator as CalculatorIcon,
  Percent as PercentIcon,
  TrendingDown as TrendingDownIcon,
  ArrowUp as ArrowUpIcon,
  ArrowDown as ArrowDownIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
  Equal as EqualIcon,
  Divide as DivideIcon,
  Multiply as MultiplyIcon
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIFinancialAnalytics() {
  const analyticsFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Financial Modeling',
      description: 'Advanced machine learning algorithms for predictive financial modeling and forecasting',
      benefits: ['95% accuracy in revenue forecasting', 'Real-time market trend analysis', 'Automated financial scenario planning']
    },
    {
      icon: BarChart3,
      title: 'Advanced Risk Assessment',
      description: 'Comprehensive risk analysis using AI to identify and quantify financial risks',
      benefits: ['Real-time risk monitoring', 'Predictive risk modeling', 'Automated risk mitigation strategies']
    },
    {
      icon: TrendingUp,
      title: 'Investment Portfolio Optimization',
      description: 'AI-driven portfolio management with automated rebalancing and optimization',
      benefits: ['Dynamic asset allocation', 'Risk-adjusted returns optimization', 'Automated rebalancing']
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring for financial regulations and reporting requirements',
      benefits: ['Real-time compliance tracking', 'Automated reporting', 'Regulatory change alerts']
    },
    {
      icon: Zap,
      title: 'Real-Time Market Intelligence',
      description: 'Live market data analysis with AI-powered insights and trend detection',
      benefits: ['Live market monitoring', 'Trend prediction', 'Opportunity identification']
    },
    {
      icon: Users,
      title: 'Client Portfolio Management',
      description: 'Comprehensive client relationship management with automated reporting and insights',
      benefits: ['Personalized client insights', 'Automated reporting', 'Client engagement optimization']
    }
  ];

  const financialModels = [
    {
      category: 'Valuation Models',
      description: 'AI-powered company and asset valuation using multiple methodologies',
      capabilities: ['DCF Analysis', 'Comparable Company Analysis', 'Precedent Transactions', 'Real Options Valuation']
    },
    {
      category: 'Risk Models',
      description: 'Comprehensive risk assessment and modeling for financial instruments',
      capabilities: ['VaR Calculation', 'Stress Testing', 'Monte Carlo Simulation', 'Scenario Analysis']
    },
    {
      category: 'Portfolio Models',
      description: 'Advanced portfolio optimization and management models',
      capabilities: ['Modern Portfolio Theory', 'Black-Litterman Model', 'Risk Parity', 'Factor Models']
    },
    {
      category: 'Market Models',
      description: 'Market behavior prediction and trend analysis models',
      capabilities: ['Technical Analysis', 'Sentiment Analysis', 'Market Microstructure', 'Volatility Modeling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'For financial professionals and small firms',
      features: [
        'Up to 5 user licenses',
        'Basic AI financial modeling',
        'Standard risk assessment tools',
        'Portfolio optimization',
        'Basic market intelligence',
        'Email support',
        'Standard reporting',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$899',
      period: '/month',
      description: 'For growing financial institutions',
      features: [
        'Up to 25 user licenses',
        'Advanced AI modeling suite',
        'Comprehensive risk management',
        'Advanced portfolio analytics',
        'Real-time market intelligence',
        'Priority support',
        'Custom reporting',
        'API access',
        'Advanced integrations',
        'Compliance monitoring'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Institutional',
      price: '$1,999',
      period: '/month',
      description: 'For large financial institutions',
      features: [
        'Unlimited user licenses',
        'Full AI analytics suite',
        'Custom financial models',
        'Advanced risk analytics',
        'White-label solutions',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Dedicated account manager',
        'Training and certification'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'Investment Banking',
      description: 'M&A analysis, IPO valuation, and financial advisory services',
      benefits: ['Accurate company valuations', 'Deal structure optimization', 'Risk assessment automation']
    },
    {
      industry: 'Asset Management',
      description: 'Portfolio optimization, risk management, and performance analysis',
      benefits: ['Enhanced portfolio returns', 'Automated risk management', 'Client reporting automation']
    },
    {
      industry: 'Corporate Finance',
      description: 'Financial planning, budgeting, and strategic decision support',
      benefits: ['Improved financial planning', 'Better resource allocation', 'Strategic decision support']
    },
    {
      industry: 'Insurance & Risk',
      description: 'Risk assessment, pricing optimization, and claims analysis',
      benefits: ['Accurate risk pricing', 'Claims fraud detection', 'Portfolio optimization']
    }
  ];

  const integrations = [
    { name: 'Bloomberg Terminal', icon: Monitor, description: 'Real-time market data and analytics' },
    { name: 'Reuters Eikon', icon: BarChart3, description: 'Financial data and research platform' },
    { name: 'FactSet', icon: Database, description: 'Financial data and analytics integration' },
    { name: 'Salesforce', icon: Users, description: 'CRM integration for client management' },
    { name: 'QuickBooks', icon: Calculator, description: 'Accounting software integration' },
    { name: 'Excel', icon: FileText, description: 'Spreadsheet integration and export' }
  ];

  const complianceFeatures = [
    { name: 'SOX Compliance', icon: Shield, description: 'Sarbanes-Oxley Act compliance monitoring' },
    { name: 'Basel III', icon: Lock, description: 'Banking regulation compliance' },
    { name: 'MiFID II', icon: Globe, description: 'European financial markets regulation' },
    { name: 'Dodd-Frank', icon: FileText, description: 'Financial reform compliance' },
    { name: 'GDPR', icon: Users, description: 'Data protection regulation' },
    { name: 'SOC 2', icon: CheckCircle, description: 'Security and availability compliance' }
  ];

  return (
    <>
      <SEO 
        title="AI-Powered Financial Analytics Platform - Zion Tech Group"
        description="Advanced AI financial analytics platform with predictive modeling, risk assessment, and portfolio optimization. Transform your financial decision-making with intelligent insights."
        canonical="/services/ai-financial-analytics"
        url="https://ziontechgroup.com/services/ai-financial-analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                  AI-Powered Financial Analytics Platform
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
                  Transform your financial decision-making with AI-driven insights, predictive modeling, and advanced risk assessment for superior investment outcomes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#pricing" 
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    View Pricing
                  </a>
                  <a 
                    href="/contact" 
                    className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Analytics Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced Financial Analytics Features
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our AI-powered platform delivers unprecedented insights for financial professionals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Models */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Advanced Financial Models
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Comprehensive financial modeling capabilities powered by artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {financialModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{model.category}</h3>
                  <p className="text-slate-300 mb-4">{model.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {model.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {capability}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Industry Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our platform serves diverse financial industry needs with specialized solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{useCase.industry}</h3>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Regulatory Compliance & Security
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Meet industry standards with our comprehensive compliance features
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-6 rounded-xl border border-slate-700"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.name}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Financial Analytics Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Choose the plan that fits your financial institution's needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-slate-800/80 p-8 rounded-xl border ${
                    plan.popular 
                      ? 'border-green-500 ring-2 ring-green-500/20' 
                      : 'border-slate-700'
                  } hover:border-green-500 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Financial Data Integrations
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Connect with leading financial data providers and platforms
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{integration.name}</h4>
                  <p className="text-xs text-slate-400">{integration.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Financial Analytics?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join leading financial institutions already using AI-powered analytics for superior decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}