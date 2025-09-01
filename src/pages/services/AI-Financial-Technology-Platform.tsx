import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Handshake,
  Lightbulb,
  Cloud,
  Smartphone,
  Building,
  Heart,
  ShoppingCart,
  PenTool,
  Leaf,
  FileText,
  Sparkles,
  Workflow,
  Truck,
  ShieldCheck,
  TrendingDown,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  AlertTriangle,
  Fingerprint,
  Key,
  Server,
  Wifi,
  HardDrive,
  Monitor,
  CreditCard,
  Wallet,
  PiggyBank,
  ChartBar,
  Calculator,
  Lock,
  Zap,
  Users,
  BarChart3
} from 'lucide-react';

export default function AIFinancialTechnologyPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Trading",
      description: "Advanced machine learning algorithms that execute trades with millisecond precision and adapt to market conditions in real-time."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Intelligent risk assessment and mitigation systems that protect investments and ensure regulatory compliance."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-driven market forecasting and trend analysis that provides actionable insights for investment decisions."
    },
    {
      icon: CreditCard,
      title: "Digital Banking",
      description: "Next-generation digital banking solutions with AI-enhanced security and personalized financial services."
    },
    {
      icon: ChartBar,
      title: "Portfolio Optimization",
      description: "Intelligent portfolio management that automatically rebalances and optimizes investments for maximum returns."
    },
    {
      icon: Lock,
      title: "Blockchain Security",
      description: "Advanced blockchain technology for secure, transparent, and tamper-proof financial transactions."
    }
  ];

  const benefits = [
    "Increase trading profits by up to 300%",
    "Reduce financial risk by 75%",
    "24/7 automated trading operations",
    "Real-time market analysis",
    "Advanced fraud detection",
    "Regulatory compliance automation",
    "Personalized financial services",
    "Secure blockchain transactions"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$3,999",
      period: "/month",
      description: "Perfect for individual investors and small financial firms",
      features: [
        "Basic AI trading algorithms",
        "Risk management tools",
        "Standard analytics dashboard",
        "Email support",
        "Basic compliance reporting",
        "Up to $100K trading volume"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$8,999",
      period: "/month",
      description: "Ideal for growing financial institutions and trading firms",
      features: [
        "Advanced AI trading algorithms",
        "Comprehensive risk management",
        "Advanced analytics & reporting",
        "Priority support",
        "Full compliance automation",
        "Unlimited trading volume",
        "Custom algorithm development",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$18,999",
      period: "/month",
      description: "For large financial institutions and hedge funds",
      features: [
        "Full AI fintech platform",
        "Custom AI model development",
        "Advanced predictive analytics",
        "Dedicated support team",
        "Multi-tenant architecture",
        "Custom integrations",
        "SLA guarantees",
        "On-premise deployment option"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Investment Banking",
      description: "AI-powered deal analysis, risk assessment, and market intelligence for investment decisions",
      icon: TrendingUp
    },
    {
      industry: "Hedge Funds",
      description: "Advanced algorithmic trading, portfolio optimization, and risk management",
      icon: ChartBar
    },
    {
      industry: "Retail Banking",
      description: "Personalized financial services, fraud detection, and customer experience optimization",
      icon: CreditCard
    },
    {
      industry: "Insurance",
      description: "AI-driven risk assessment, claims processing, and fraud prevention",
      icon: Shield
    },
    {
      industry: "Fintech Startups",
      description: "Rapid development of innovative financial products and services",
      icon: Zap
    },
    {
      industry: "Regulatory Compliance",
      description: "Automated compliance monitoring, reporting, and risk assessment",
      icon: ShieldCheck
    }
  ];

  const fintechSolutions = [
    "Digital Wallets",
    "Peer-to-Peer Lending",
    "Cryptocurrency Trading",
    "Insurtech Solutions",
    "Regtech Platforms",
    "Wealth Management",
    "Payment Processing",
    "Credit Scoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Technology Platform - Zion Tech Group"
        description="Revolutionary AI-powered fintech platform for trading, risk management, and digital banking. Transform financial operations with AI."
        keywords="AI fintech, financial technology, AI trading, digital banking, risk management, blockchain"
        canonicalUrl="https://ziontechgroup.com/services/AI-Financial-Technology-Platform"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Technology Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize your financial operations with our AI-powered platform. From algorithmic trading to digital banking, 
              our technology delivers unprecedented performance and security in the financial sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Financial Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable results that revolutionize how financial institutions operate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <p className="text-white text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Fintech Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI features designed specifically for financial technology applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform serves diverse financial sectors with specialized solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <useCase.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fintech Solutions */}
      <section className="py-20 bg-gradient-to-r from-green-500/5 to-emerald-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Fintech Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end financial technology solutions for modern financial institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fintechSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center"
              >
                <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <p className="text-white font-semibold">{solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Financial Technology Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that transforms your financial operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-400/50 scale-105' 
                    : 'border-white/10 hover:border-green-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI%20Financial%20Technology%20Platform%20-%20{plan.name}%20Plan"
                  className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200 text-center block"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Finance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to learn how our AI Financial Technology Platform can revolutionize your operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-white font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-green-400 hover:text-green-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-white font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-white font-semibold">Address</p>
                <p className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI%20Financial%20Technology%20Platform%20Inquiry"
                className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-200 hover:scale-105 shadow-lg shadow-green-500/25"
              >
                Request Demo
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-200"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}