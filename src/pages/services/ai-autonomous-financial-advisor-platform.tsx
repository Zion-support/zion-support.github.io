import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Globe,
  Lock,
  Activity,
  PieChart,
  Target,
  Rocket,
  Award,
  HeadphonesIcon,
  FileText,
  Calculator,
  PiggyBank,
  CreditCard,
  Building2,
  Smartphone,
  Monitor,
  Cloud,
  Database,
  Workflow,
  Eye,
  Search,
  Settings,
  Palette,
  Zap as ZapIcon,
  Phone,
  Mail,
  MapPin,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Cog,
  Palette as PaletteIcon,
  Menu,
  X,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Truck,
  Heart,
  Scale,
  Home,
  BookOpen,
  Calendar,
  Clock as ClockIcon,
  UserCheck,
  ShieldCheck,
  Zap as ZapIcon2,
  TrendingDown,
  AlertTriangle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Plus,
  Minus,
  Divide,
  Percent,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10
} from 'lucide-react';

export default function AIAutonomousFinancialAdvisorPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Investment Analysis",
      description: "Advanced machine learning algorithms analyze market trends, company fundamentals, and economic indicators to provide intelligent investment recommendations."
    },
    {
      icon: Shield,
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, portfolio stress testing, and regulatory compliance monitoring to protect your investments."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "Dynamic portfolio rebalancing and optimization based on your risk tolerance, goals, and market conditions."
    },
    {
      icon: Users,
      title: "Personalized Financial Planning",
      description: "AI-driven financial planning that adapts to your life changes, goals, and financial situation in real-time."
    },
    {
      icon: BarChart3,
      title: "Real-time Market Intelligence",
      description: "24/7 market monitoring with instant alerts and insights on opportunities and potential risks."
    },
    {
      icon: Zap,
      title: "Automated Trading Execution",
      description: "Seamless integration with major exchanges for automated trade execution based on your strategy preferences."
    }
  ];

  const benefits = [
    "Reduce emotional decision-making in investments",
    "Access institutional-grade financial analysis",
    "Optimize tax efficiency and minimize fees",
    "Achieve better risk-adjusted returns",
    "Save time on research and portfolio management",
    "Get personalized advice without human bias"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individual investors getting started",
      features: [
        "Basic portfolio analysis",
        "Investment recommendations",
        "Risk assessment",
        "Basic financial planning",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced features for serious investors",
      features: [
        "Advanced AI analysis",
        "Portfolio optimization",
        "Real-time alerts",
        "Tax optimization",
        "Priority support",
        "Custom strategies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Full-featured platform for institutions",
      features: [
        "All Professional features",
        "Multi-portfolio management",
        "Advanced compliance tools",
        "API access",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Individual Investors",
      description: "Get professional-grade investment advice and portfolio management without the high fees of traditional advisors.",
      icon: Users
    },
    {
      title: "Financial Advisors",
      description: "Enhance your practice with AI-powered tools that provide deeper insights and better client outcomes.",
      icon: UserCheck
    },
    {
      title: "Institutional Clients",
      description: "Scale your investment operations with automated analysis and risk management capabilities.",
      icon: Building2
    },
    {
      title: "Retirement Planning",
      description: "Optimize your retirement portfolio with AI-driven strategies that adapt to changing life circumstances.",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Autonomous Financial Advisor Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered financial advisory platform that provides intelligent investment recommendations, portfolio optimization, and automated risk management." />
        <meta name="keywords" content="AI financial advisor, investment analysis, portfolio optimization, risk management, automated trading, financial planning" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-financial-advisor-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Financial Advisory
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Financial
              <span className="text-zion-cyan"> Advisor Platform</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Revolutionize your investment strategy with our AI-powered financial advisory platform. 
              Get institutional-grade analysis, automated portfolio optimization, and intelligent risk management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Financial Advisory Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI platform combines advanced machine learning with financial expertise to deliver 
              unparalleled investment insights and portfolio management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-zion-slate-dark/50 border border-zion-purple/20 rounded-xl hover:border-zion-cyan/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-zion-cyan/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Financial Advisor?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the future of financial advisory with AI-powered insights and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-zion-cyan mt-1 flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Who Benefits from AI Financial Advisory?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our platform serves diverse clients with tailored solutions for every investment need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-zion-slate-dark/30 border border-zion-purple/20 rounded-xl text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-zion-slate-light text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the plan that best fits your investment needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'border-zion-cyan bg-zion-slate-dark/80 scale-105'
                    : 'border-zion-purple/20 bg-zion-slate-dark/50 hover:border-zion-cyan/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                    : 'bg-zion-purple/20 text-zion-purple hover:bg-zion-purple/30'
                }">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Investment Strategy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Join thousands of investors who trust our AI platform for intelligent financial guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Financial Advisor Platform Demo Request"
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan/90 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Demo
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">+1 (302) 464-0950</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <span className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}