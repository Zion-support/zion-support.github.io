import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Shield, 
  Brain, 
  BarChart3, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Target, 
  Users,
  DollarSign,
  Activity,
  Lock,
  Cloud,
  Network,
  Database,
  Workflow,
  MessageCircle,
  Calendar,
  FileText,
  Video,
  BookOpen,
  Star,
  Award,
  Lightbulb,
  Rocket,
  Building2,
  Monitor,
  Smartphone,
  Wifi,
  Satellite,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  MessageSquare,
  PieChart,
  LineChart,
  BarChart,
  Cpu,
  Server,
  Globe,
  Clock,
  Eye,
  Search,
  Settings,
  Palette,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  ExternalLink
} from 'lucide-react';

export default function AIFinancialTradingRiskManagement() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Risk Assessment",
      description: "Advanced machine learning algorithms continuously analyze market data to identify potential risks in real-time."
    },
    {
      icon: Shield,
      title: "Real-time Risk Monitoring",
      description: "24/7 monitoring of trading activities with instant alerts for any risk threshold breaches."
    },
    {
      icon: TrendingUp,
      title: "Predictive Risk Modeling",
      description: "Forecast potential market risks using historical data analysis and predictive analytics."
    },
    {
      icon: BarChart3,
      title: "Comprehensive Risk Analytics",
      description: "Deep insights into portfolio risk exposure, volatility analysis, and correlation assessments."
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Automated compliance monitoring ensuring adherence to financial regulations and reporting requirements."
    },
    {
      icon: Cloud,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales with your trading volume and risk management needs."
    }
  ];

  const riskTypes = [
    {
      category: "Market Risk",
      description: "Monitor and manage exposure to market fluctuations, volatility, and directional changes",
      items: [
        "Price volatility analysis",
        "Market correlation monitoring",
        "Sector-specific risk assessment",
        "Global market exposure tracking"
      ]
    },
    {
      category: "Credit Risk",
      description: "Assess and manage counterparty default risks and credit exposure",
      items: [
        "Counterparty credit scoring",
        "Credit limit monitoring",
        "Default probability modeling",
        "Collateral management"
      ]
    },
    {
      category: "Operational Risk",
      description: "Identify and mitigate risks from internal processes, systems, and human factors",
      items: [
        "System failure monitoring",
        "Process automation risks",
        "Human error prevention",
        "Business continuity planning"
      ]
    },
    {
      category: "Liquidity Risk",
      description: "Manage risks related to asset liquidity and funding availability",
      items: [
        "Liquidity stress testing",
        "Funding gap analysis",
        "Asset liquidity scoring",
        "Emergency funding protocols"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduced Risk Exposure",
      description: "Minimize potential losses through proactive risk identification and management"
    },
    {
      icon: Shield,
      title: "Enhanced Compliance",
      description: "Automated regulatory reporting and compliance monitoring"
    },
    {
      icon: Users,
      title: "Improved Decision Making",
      description: "Data-driven insights for better trading and risk management decisions"
    },
    {
      icon: Cog,
      title: "Operational Efficiency",
      description: "Streamlined risk management processes with automated workflows"
    }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Brain, description: "Advanced AI algorithms for risk prediction and analysis" },
    { name: "Real-time Analytics", icon: Activity, description: "Instant processing of market data and risk metrics" },
    { name: "Blockchain Security", icon: Network, description: "Secure and transparent transaction monitoring" },
    { name: "Cloud Computing", icon: Cloud, description: "Scalable infrastructure for high-performance computing" },
    { name: "Big Data Processing", icon: Database, description: "Handling massive datasets for comprehensive analysis" },
    { name: "API Integration", icon: Workflow, description: "Seamless integration with existing trading systems" }
  ];

  const useCases = [
    {
      title: "Hedge Funds",
      description: "Advanced risk management for complex trading strategies and portfolio optimization",
      icon: TrendingUp
    },
    {
      title: "Investment Banks",
      description: "Comprehensive risk monitoring for trading desks and investment portfolios",
      icon: Building2
    },
    {
      title: "Asset Managers",
      description: "Portfolio risk assessment and optimization for institutional clients",
      icon: Users
    },
    {
      title: "Trading Firms",
      description: "Real-time risk monitoring for high-frequency and algorithmic trading",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 text-zion-purple text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Financial Trading
              <span className="block text-zion-cyan">Risk Management</span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              Protect your trading operations with intelligent risk management powered by advanced AI. 
              Monitor, analyze, and mitigate risks in real-time across all your financial instruments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
              >
                Contact Sales
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Risk Management Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive risk management capabilities designed 
              specifically for modern financial trading operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Risk Coverage
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our platform monitors and manages all types of financial risks, providing 
              complete protection for your trading operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {riskTypes.map((risk, index) => (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-zion-cyan mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  {risk.category}
                </h3>
                <p className="text-zinc-300 mb-4">{risk.description}</p>
                <ul className="space-y-3">
                  {risk.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Transform your risk management approach with AI-powered insights and automation, 
              delivering measurable improvements across all key metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-800/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI risk management solutions are designed for various financial institutions 
              and trading operations, from hedge funds to investment banks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-zinc-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technologies
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust, scalable, and 
              intelligent risk management solutions for modern financial markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-zinc-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Risk Management?
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Join leading financial institutions that have already enhanced their risk management 
              capabilities with Zion Tech Group's AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white font-semibold rounded-lg hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-zion-purple/25"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zion-cyan hover:text-zion-cyan transition-all duration-300"
              >
                View Case Studies
                <FileText className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Related AI Financial Services
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered financial services designed to 
              transform your trading and investment operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/services/ai-financial-trading-platform"
              className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                AI Financial Trading Platform
              </h3>
              <p className="text-zinc-300 mb-4">
                Advanced algorithmic trading platform powered by artificial intelligence for optimal execution and performance.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/ai-business-intelligence"
              className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                AI Business Intelligence
              </h3>
              <p className="text-zinc-300 mb-4">
                Comprehensive business intelligence platform with AI-powered analytics and insights for strategic decision making.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/ai-data-analytics-platform"
              className="group bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                AI Data Analytics Platform
              </h3>
              <p className="text-zinc-300 mb-4">
                Advanced data analytics platform leveraging AI and machine learning for comprehensive business insights.
              </p>
              <div className="flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}