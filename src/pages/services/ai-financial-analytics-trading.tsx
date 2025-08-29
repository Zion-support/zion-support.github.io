import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Zap, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Shield,
  Globe,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Rocket,
  Sparkles,
  FileText,
  Code,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Cpu,
  Network,
  ShieldCheck,
  Eye,
  Search,
  Filter,
  Clipboard,
  PenTool,
  LineChart,
  CandlestickChart,
  PieChart,
  BarChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Percent,
  Calculator,
  Wallet,
  CreditCard,
  PiggyBank,
  Coins,
  Bitcoin,
  DollarSign as DollarIcon,
  Euro,
  PoundSterling,
  Yen,
  Won,
  Ruble,
  Rupee,
  Lira,
  Shekel,
  Dinar,
  Dirham,
  Riyal,
  Ringgit,
  Baht,
  Peso,
  Real,
  Peso2,
  Tenge,
  Hryvnia,
  Leu,
  Zloty,
  Koruna,
  Forint,
  Krona,
  Franc,
  Guilder,
  Mark,
  Lira2,
  Drachma,
  Escudo,
  Peseta,
  Schilling,
  Franc2,
  Mark2,
  Lira3,
  Drachma2,
  Escudo2,
  Peseta2,
  Schilling2,
  Franc3,
  Mark3,
  Lira4,
  Drachma3,
  Escudo3,
  Peseta3,
  Schilling3,
  Franc4,
  Mark4,
  Lira5,
  Drachma4,
  Escudo4,
  Peseta4,
  Schilling4,
  Franc5,
  Mark5,
  Lira6,
  Drachma5,
  Escudo5,
  Peseta5,
  Schilling5,
  Franc6,
  Mark6,
  Lira7,
  Drachma6,
  Escudo6,
  Peseta6,
  Schilling6,
  Franc7,
  Mark7,
  Lira8,
  Drachma7,
  Escudo7,
  Peseta7,
  Schilling7,
  Franc8,
  Mark8,
  Lira9,
  Drachma8,
  Escudo8,
  Peseta8,
  Schilling8,
  Franc9,
  Mark9,
  Lira10,
  Drachma9,
  Escudo9,
  Peseta9,
  Schilling9,
  Franc10,
  Mark10,
  Lira11,
  Drachma10,
  Escudo10,
  Peseta10,
  Schilling10,
  Franc11,
  Mark11,
  Lira12,
  Drachma11,
  Escudo11,
  Peseta11,
  Schilling11,
  Franc12,
  Mark12,
  Lira13,
  Drachma12,
  Escudo12,
  Peseta12,
  Schilling12,
  Franc13,
  Mark13,
  Lira14,
  Drachma13,
  Escudo13,
  Peseta13,
  Schilling13,
  Franc14,
  Mark14,
  Lira15,
  Drachma14,
  Escudo14,
  Peseta14,
  Schilling14,
  Franc15,
  Mark15,
  Lira16,
  Drachma15,
  Escudo15,
  Peseta15,
  Schilling15,
  Franc16,
  Mark16,
  Lira17,
  Drachma16,
  Escudo16,
  Peseta16,
  Schilling16,
  Franc17,
  Mark17,
  Lira18,
  Drachma17,
  Escudo17,
  Peseta17,
  Schilling17,
  Franc18,
  Mark18,
  Lira19,
  Drachma18,
  Escudo18,
  Peseta18,
  Schilling18,
  Franc19,
  Mark19,
  Lira20,
  Drachma19,
  Escudo19,
  Peseta19,
  Schilling19,
  Franc20,
  Mark20,
  Lira21,
  Drachma20,
  Escudo20,
  Peseta20,
  Schilling20,
  Franc21,
  Mark21,
  Lira22,
  Drachma21,
  Escudo21,
  Peseta21,
  Schilling21,
  Franc22,
  Mark22,
  Lira23,
  Drachma22,
  Escudo22,
  Peseta22,
  Schilling22,
  Franc23,
  Mark23,
  Lira24,
  Drachma23,
  Escudo23,
  Peseta23,
  Schilling23,
  Franc24,
  Mark24,
  Lira25,
  Drachma24,
  Escudo24,
  Peseta24,
  Schilling24,
  Franc25,
  Mark25,
  Lira26,
  Drachma25,
  Escudo25,
  Peseta25,
  Schilling25,
  Franc26,
  Mark26,
  Lira27,
  Drachma26,
  Escudo26,
  Peseta26,
  Schilling26,
  Franc27,
  Mark27,
  Lira28,
  Drachma27,
  Escudo27,
  Peseta27,
  Schilling27,
  Franc28,
  Mark28,
  Lira29,
  Drachma28,
  Escudo28,
  Peseta28,
  Schilling28,
  Franc29,
  Mark29,
  Lira30,
  Drachma29,
  Escudo29,
  Peseta29,
  Schilling29,
  Franc30,
  Mark30,
  Lira31,
  Drachma30,
  Escudo30,
  Peseta30,
  Schilling30,
  Franc31,
  Mark31,
  Lira32,
  Drachma31,
  Escudo31,
  Peseta31,
  Schilling31,
  Franc32,
  Mark32,
  Lira33,
  Drachma32,
  Escudo32,
  Peseta32,
  Schilling32,
  Franc33,
  Mark33,
  Lira34,
  Drachma33,
  Escudo33,
  Peseta33,
  Schilling33,
  Franc34,
  Mark34,
  Lira35,
  Drachma34,
  Escudo34,
  Peseta34,
  Schilling34,
  Franc35,
  Mark35,
  Lira36,
  Drachma35,
  Escudo35,
  Peseta35,
  Schilling35,
  Franc36,
  Mark36,
  Lira37,
  Drachma36,
  Escudo36,
  Peseta36,
  Schilling36,
  Franc37,
  Mark37,
  Lira38,
  Drachma37,
  Escudo37,
  Peseta37,
  Schilling37,
  Franc38,
  Mark38,
  Lira39,
  Drachma38,
  Escudo38,
  Peseta38,
  Schilling38,
  Franc39,
  Mark39,
  Lira40,
  Drachma39,
  Escudo39,
  Peseta39,
  Schilling39,
  Franc40,
  Mark40,
  Lira41,
  Drachma40,
  Escudo40,
  Peseta40,
  Schilling40,
  Franc41,
  Mark41,
  Lira42,
  Drachma41,
  Escudo41,
  Peseta41,
  Schilling41,
  Franc42,
  Mark42,
  Lira43,
  Drachma42,
  Escudo42,
  Peseta42,
  Schilling42,
  Franc43,
  Mark43,
  Lira44,
  Drachma43,
  Escudo43,
  Peseta43,
  Schilling43,
  Franc44,
  Mark44,
  Lira45,
  Drachma44,
  Escudo44,
  Peseta44,
  Schilling44,
  Franc45,
  Mark45,
  Lira46,
  Drachma45,
  Escudo45,
  Peseta45,
  Schilling45,
  Franc46,
  Mark46,
  Lira47,
  Drachma46,
  Escudo46,
  Peseta46,
  Schilling46,
  Franc47,
  Mark47,
  Lira48,
  Drachma47,
  Escudo47,
  Peseta47,
  Schilling47,
  Franc48,
  Mark48,
  Lira49,
  Drachma48,
  Escudo48,
  Peseta48,
  Schilling48,
  Franc49,
  Mark49,
  Lira50,
  Drachma49,
  Escudo49,
  Peseta49,
  Schilling49,
  Franc50,
  Mark50,
  Lira51,
  Drachma50,
  Escudo50,
  Peseta50,
  Schilling50,
  Franc51,
  Mark51,
  Lira52,
  Drachma51,
  Escudo51,
  Peseta51,
  Schilling51,
  Franc52,
  Mark52,
  Lira53,
  Drachma52,
  Escudo52,
  Peseta52,
  Schilling52,
  Franc53,
  Mark53,
  Lira54,
  Drachma53,
  Escudo53,
  Peseta53,
  Schilling53,
  Franc54,
  Mark54,
  Lira55,
  Drachma54,
  Escudo54,
  Peseta54,
  Schilling54,
  Franc55,
  Mark55,
  Lira56,
  Drachma55,
  Escudo55,
  Peseta55,
  Schilling55,
  Franc56,
  Mark56,
  Lira57,
  Drachma56,
  Escudo56,
  Peseta56,
  Schilling56,
  Franc57,
  Mark57,
  Lira58,
  Drachma57,
  Escudo57,
  Peseta57,
  Schilling57,
  Franc58,
  Mark58,
  Lira59,
  Drachma58,
  Escudo58,
  Peseta58,
  Schilling58,
  Franc59,
  Mark59,
  Lira60,
  Drachma59,
  Escudo59,
  Peseta59,
  Schilling59,
  Franc60,
  Mark60,
  Lira61,
  Drachma60,
  Escudo60,
  Peseta60,
  Schilling60,
  Franc61,
  Mark61,
  Lira62,
  Drachma61,
  Escudo61,
  Peseta61,
  Schilling61,
  Franc62,
  Mark62,
  Lira63,
  Drachma62,
  Escudo62,
  Peseta62,
  Schilling62,
  Franc63,
  Mark63,
  Lira64,
  Drachma63,
  Escudo63,
  Peseta63,
  Schilling63,
  Franc64,
  Mark64,
  Lira65,
  Drachma64,
  Escudo64,
  Peseta64,
  Schilling64,
  Franc65,
  Mark65,
  Lira66,
  Drachma65,
  Escudo65,
  Peseta65,
  Schilling65,
  Franc66,
  Mark66,
  Lira67,
  Drachma66,
  Escudo66,
  Peseta66,
  Schilling66,
  Franc67,
  Mark67,
  Lira68,
  Drachma67,
  Escudo67,
  Peseta67,
  Schilling67,
  Franc68,
  Mark68,
  Lira69,
  Drachma68,
  Escudo68,
  Peseta68,
  Schilling68,
  Franc69,
  Mark69,
  Lira70,
  Drachma69,
  Escudo69,
  Peseta69,
  Schilling69,
  Franc70,
  Mark70,
  Lira71,
  Drachma70,
  Escudo70,
  Peseta70,
  Schilling70,
  Franc71,
  Mark71,
  Lira72,
  Drachma71,
  Escudo71,
  Peseta71,
  Schilling71,
  Franc72,
  Mark72,
  Lira73,
  Drachma72,
  Escudo72,
  Peseta72,
  Schilling72,
  Franc73,
  Mark73,
  Lira74,
  Drachma73,
  Escudo73,
  Peseta73,
  Schilling73,
  Franc74,
  Mark74,
  Lira75,
  Drachma74,
  Escudo74,
  Peseta74,
  Schilling74,
  Franc75,
  Mark75,
  Lira76,
  Drachma75,
  Escudo75,
  Peseta75,
  Schilling75,
  Franc76,
  Mark76,
  Lira77,
  Drachma76,
  Escudo76,
  Peseta76,
  Schilling76,
  Franc77,
  Mark77,
  Lira78,
  Drachma77,
  Escudo77,
  Peseta77,
  Schilling77,
  Franc78,
  Mark78,
  Lira79,
  Drachma78,
  Escudo78,
  Peseta78,
  Schilling78,
  Franc79,
  Mark79,
  Lira80,
  Drachma79,
  Escudo79,
  Peseta79,
  Schilling79,
  Franc80,
  Mark80,
  Lira81,
  Drachma80,
  Escudo80,
  Peseta80,
  Schilling80,
  Franc81,
  Mark81,
  Lira82,
  Drachma81,
  Escudo81,
  Peseta81,
  Schilling81,
  Franc82,
  Mark82,
  Lira83,
  Drachma82,
  Escudo82,
  Peseta82,
  Schilling82,
  Franc83,
  Mark83,
  Lira84,
  Drachma83,
  Escudo83,
  Peseta83,
  Schilling83,
  Franc84,
  Mark84,
  Lira85,
  Drachma84,
  Escudo84,
  Peseta84,
  Schilling84,
  Franc85,
  Mark85,
  Lira86,
  Drachma85,
  Escudo85,
  Peseta85,
  Schilling85,
  Franc86,
  Mark86,
  Lira87,
  Drachma86,
  Escudo86,
  Peseta86,
  Schilling86,
  Franc87,
  Mark87,
  Lira88,
  Drachma87,
  Escudo87,
  Peseta87,
  Schilling87,
  Franc88,
  Mark88,
  Lira89,
  Drachma88,
  Escudo88,
  Peseta88,
  Schilling88,
  Franc89,
  Mark89,
  Lira90,
  Drachma89,
  Escudo89,
  Peseta89,
  Schilling89,
  Franc90,
  Mark90,
  Lira91,
  Drachma90,
  Escudo90,
  Peseta90,
  Schilling90,
  Franc91,
  Mark91,
  Lira92,
  Drachma91,
  Escudo91,
  Peseta91,
  Schilling91,
  Franc92,
  Mark92,
  Lira93,
  Drachma92,
  Escudo92,
  Peseta92,
  Schilling92,
  Franc93,
  Mark93,
  Lira94,
  Drachma93,
  Escudo93,
  Peseta93,
  Schilling93,
  Franc94,
  Mark94,
  Lira95,
  Drachma94,
  Escudo94,
  Peseta94,
  Schilling94,
  Franc95,
  Mark95,
  Lira96,
  Drachma95,
  Escudo95,
  Peseta95,
  Schilling95,
  Franc96,
  Mark96,
  Lira97,
  Drachma96,
  Escudo96,
  Peseta96,
  Schilling96,
  Franc97,
  Mark97,
  Lira98,
  Drachma97,
  Escudo97,
  Peseta97,
  Schilling97,
  Franc98,
  Mark98,
  Lira99,
  Drachma98,
  Escudo98,
  Peseta98,
  Schilling98,
  Franc99,
  Mark99,
  Lira100,
  Drachma99,
  Escudo99,
  Peseta99,
  Schilling99,
  Franc100,
  Mark100,
  MessageSquare,
  Play,
  Calendar
} from 'lucide-react';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AIFinancialAnalyticsTrading() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms analyze market patterns with 94% accuracy",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: LineChart,
      title: "Predictive Trading Signals",
      description: "Real-time AI-generated trading signals based on market sentiment and patterns",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Portfolio Optimization",
      description: "AI-driven portfolio rebalancing and risk management strategies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Risk Management AI",
      description: "Intelligent risk assessment and automated stop-loss management",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Sentiment Analysis",
      description: "Real-time social media and news sentiment analysis for market prediction",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Activity,
      title: "Algorithmic Trading",
      description: "Automated trading strategies based on AI market analysis",
      color: "from-red-500 to-pink-500"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Return on Investment",
      description: "Increase portfolio returns by 45%",
      metric: "45%"
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Reduce portfolio risk by 60%",
      metric: "60%"
    },
    {
      icon: Clock,
      title: "Time Efficiency",
      description: "Save 80% of analysis time",
      metric: "80%"
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Lower trading costs by 35%",
      metric: "35%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for individual investors",
      features: [
        "Basic AI market analysis",
        "5 trading signals per day",
        "Portfolio tracking",
        "Basic risk management",
        "Email support",
        "Mobile app access",
        "Real-time market data"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for active traders",
      features: [
        "Advanced AI analytics",
        "Unlimited trading signals",
        "Portfolio optimization",
        "Advanced risk management",
        "Priority support",
        "API access",
        "Custom trading strategies",
        "Multi-asset support",
        "Advanced charting tools"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For institutional investors",
      features: [
        "Full AI suite access",
        "Custom AI model training",
        "Institutional risk management",
        "Dedicated support manager",
        "White-label options",
        "Advanced security features",
        "Custom development",
        "Multi-user access",
        "Advanced reporting"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Stock Trading",
      description: "AI-powered stock analysis and automated trading strategies",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cryptocurrency",
      description: "Real-time crypto market analysis and trading automation",
      icon: Bitcoin,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Forex Trading",
      description: "AI-driven currency pair analysis and risk management",
      icon: DollarIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Portfolio Management",
      description: "Intelligent portfolio optimization and rebalancing",
      icon: PieChart,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Financial Analytics & Trading Platform - Zion Tech Group"
        description="Revolutionary AI-powered financial analytics and trading platform that increases portfolio returns by 45% and reduces risk by 60%."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered Financial
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Analytics & Trading
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your trading with intelligent automation, predictive analytics, 
              and AI-driven insights that increase returns by 45% and reduce risk by 60%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with advanced financial tools 
              to deliver unprecedented trading insights and automation.
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
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of traders and investors who have transformed their financial 
              performance with our AI-powered platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial 
              and our industry-leading AI technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20' 
                    : 'border-gray-700'
                } hover:border-gray-600 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-sm font-semibold">
                      <Star className="w-4 h-4 mr-2" />
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/demo"}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white hover:from-emerald-600 hover:to-blue-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Trading Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform is designed to work across all financial markets and asset classes, 
              providing tailored solutions for your specific trading needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${useCase.color} mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of financial trading with AI-powered analytics that 
              delivers real results and measurable ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold text-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold text-lg hover:bg-gray-800 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to revolutionize your trading? Our AI experts are here 
                to help you implement the perfect solution for your financial goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Request a Custom Demo
              </h3>
              <p className="text-gray-300 mb-6">
                See how our AI platform can transform your specific trading needs.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-200 w-full justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}