import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Award,
  Rocket,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Share2,
  Play,
  Pause,
  RefreshCw,
  Maximize2,
  Minimize2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Move,
  Grid,
  List,
  Calendar,
  Clock3,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Video,
  Camera,
  Mic,
  Headphones,
  Wifi,
  Bluetooth,
  Battery,
  Signal,
  WifiOff,
  BluetoothOff,
  BatteryCharging,
  SignalHigh,
  SignalMedium,
  SignalLow,
  SignalOff,
  WifiHigh,
  WifiMedium,
  WifiLow,
  WifiOff2,
  BluetoothHigh,
  BluetoothMedium,
  BluetoothLow,
  BluetoothOff2,
  BatteryFull,
  BatteryMedium,
  BatteryLow,
  BatteryEmpty,
  BatteryCharging2,
  BatteryFull2,
  BatteryMedium2,
  BatteryLow2,
  BatteryEmpty2,
  BatteryCharging3,
  BatteryFull3,
  BatteryMedium3,
  BatteryLow3,
  BatteryEmpty3,
  BatteryCharging4,
  BatteryFull4,
  BatteryMedium4,
  BatteryLow4,
  BatteryEmpty4,
  BatteryCharging5,
  BatteryFull5,
  BatteryMedium5,
  BatteryLow5,
  BatteryEmpty5,
  BatteryCharging6,
  BatteryFull6,
  BatteryMedium6,
  BatteryLow6,
  BatteryEmpty6,
  BatteryCharging7,
  BatteryFull7,
  BatteryMedium7,
  BatteryLow7,
  BatteryEmpty7,
  BatteryCharging8,
  BatteryFull8,
  BatteryMedium8,
  BatteryLow8,
  BatteryEmpty8,
  BatteryCharging9,
  BatteryFull9,
  BatteryMedium9,
  BatteryLow9,
  BatteryEmpty9,
  BatteryCharging10,
  BatteryFull10,
  BatteryMedium10,
  BatteryLow10,
  BatteryEmpty10,
  Target,
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  HeatMap,
  Funnel,
  UserCheck,
  UserX,
  Eye,
  Heart,
  MessageCircle,
  Star,
  FileText,
  Briefcase,
  Building,
  Globe,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  Smartphone,
  Monitor,
  Tablet,
  Target2,
  Users2,
  Palette,
  MousePointer,
  MousePointer2,
  MousePointerClick,
  MousePointerClick2,
  MousePointerOff,
  MousePointerOff2,
  MousePointerCheck,
  MousePointerCheck2,
  MousePointerCode,
  MousePointerCode2,
  MousePointerDollar,
  MousePointerDollar2,
  MousePointerHeart,
  MousePointerHeart2,
  MousePointerMinus,
  MousePointerMinus2,
  MousePointerOff3,
  MousePointerOff4,
  MousePointerOff5,
  MousePointerOff6,
  MousePointerOff7,
  MousePointerOff8,
  MousePointerOff9,
  MousePointerOff10,
  MousePointerOff11,
  MousePointerOff12,
  MousePointerOff13,
  MousePointerOff14,
  MousePointerOff15,
  MousePointerOff16,
  MousePointerOff17,
  MousePointerOff18,
  MousePointerOff19,
  MousePointerOff20,
  MousePointerOff21,
  MousePointerOff22,
  MousePointerOff23,
  MousePointerOff24,
  MousePointerOff25,
  MousePointerOff26,
  MousePointerOff27,
  MousePointerOff28,
  MousePointerOff29,
  MousePointerOff30,
  MousePointerOff31,
  MousePointerOff32,
  MousePointerOff33,
  MousePointerOff34,
  MousePointerOff35,
  MousePointerOff36,
  MousePointerOff37,
  MousePointerOff38,
  MousePointerOff39,
  MousePointerOff40,
  MousePointerOff41,
  MousePointerOff42,
  MousePointerOff43,
  MousePointerOff44,
  MousePointerOff45,
  MousePointerOff46,
  MousePointerOff47,
  MousePointerOff48,
  MousePointerOff49,
  MousePointerOff50
} from 'lucide-react';

const AIPoweredMarketingAutomation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Customer Segmentation",
      description: "Advanced machine learning algorithms that automatically segment customers based on behavior, preferences, and purchase patterns."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: "Predictive Campaign Optimization",
      description: "AI-driven insights that predict campaign performance and automatically optimize content, timing, and targeting for maximum ROI."
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Personalized Content Generation",
      description: "Automatically create personalized marketing content, emails, and ads tailored to individual customer preferences and behavior."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      title: "Real-Time Analytics & Insights",
      description: "Comprehensive dashboards with real-time performance metrics, customer journey tracking, and conversion optimization insights."
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "Multi-Channel Automation",
      description: "Seamlessly orchestrate campaigns across email, social media, SMS, web, and advertising platforms with unified automation."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Compliance & Privacy Management",
      description: "Built-in GDPR, CCPA, and privacy compliance tools with automated consent management and data protection."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses starting their marketing automation journey",
      features: [
        "Up to 1,000 contacts",
        "Basic email automation",
        "Standard templates (25+)",
        "Email support",
        "Basic analytics dashboard",
        "Mobile app access",
        "Up to 3 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses with advanced marketing needs",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI segmentation",
        "Premium templates (100+)",
        "Priority support",
        "Advanced analytics & reporting",
        "Multi-channel automation",
        "API access",
        "Up to 10 team members",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations requiring enterprise-grade solutions",
      features: [
        "Unlimited contacts",
        "Custom AI model training",
        "White-label solutions",
        "24/7 dedicated support",
        "Full analytics suite",
        "Custom integrations",
        "Advanced security features",
        "Unlimited team members",
        "Dedicated account manager",
        "On-premise deployment options"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Revenue by 50%",
      description: "AI-powered personalization and optimization drive higher conversion rates and customer lifetime value.",
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: "Reduce Marketing Costs by 40%",
      description: "Automate routine tasks, optimize ad spend, and eliminate manual campaign management overhead.",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Improve Customer Engagement by 75%",
      description: "Personalized content and timely automation keep customers engaged across all touchpoints.",
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      title: "Save 20+ Hours per Week",
      description: "Automate repetitive marketing tasks and focus on strategy and creative work that drives results.",
      icon: <Clock className="w-8 h-8 text-orange-400" />
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Personalized product recommendations, abandoned cart recovery, and customer lifecycle marketing.",
      metrics: ["Conversion rate", "Customer lifetime value", "Cart recovery rate"]
    },
    {
      industry: "SaaS",
      description: "User onboarding, feature adoption campaigns, and subscription renewal automation.",
      metrics: ["User activation", "Feature adoption", "Churn reduction"]
    },
    {
      industry: "Healthcare",
      description: "Patient appointment reminders, health education campaigns, and follow-up care automation.",
      metrics: ["Appointment adherence", "Patient engagement", "Care compliance"]
    },
    {
      industry: "Real Estate",
      description: "Lead nurturing, property updates, and market insights automation.",
      metrics: ["Lead conversion", "Client retention", "Market engagement"]
    }
  ];

  const marketingChannels = [
    "Email Marketing",
    "Social Media",
    "SMS Marketing",
    "Web Push Notifications",
    "Advertising Platforms",
    "Content Marketing",
    "Influencer Marketing",
    "Event Marketing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Supercharge Marketing with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Automation
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Transform your marketing with intelligent automation, AI-powered personalization, 
              and data-driven campaigns that convert prospects into loyal customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zinc-500 transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Marketing Features
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform automates every aspect of marketing, from customer segmentation 
              to campaign optimization and personalization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multi-Channel Marketing Automation
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Orchestrate seamless campaigns across all marketing channels with unified automation 
              and intelligent cross-channel optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketingChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-4 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  {index === 0 && <MailIcon className="w-4 h-4 text-cyan-400" />}
                  {index === 1 && <MessageCircleIcon className="w-4 h-4 text-cyan-400" />}
                  {index === 2 && <Smartphone className="w-4 h-4 text-cyan-400" />}
                  {index === 3 && <Bell className="w-4 h-4 text-cyan-400" />}
                  {index === 4 && <Target className="w-4 h-4 text-cyan-400" />}
                  {index === 5 && <FileText className="w-4 h-4 text-cyan-400" />}
                  {index === 6 && <Users className="w-4 h-4 text-cyan-400" />}
                  {index === 7 && <Calendar className="w-4 h-4 text-cyan-400" />}
                </div>
                <p className="text-sm text-white font-medium">{channel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Marketing Results
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Join thousands of businesses that have revolutionized their marketing 
              with AI-powered automation and personalization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-zinc-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Tailored marketing automation solutions for different industries with proven success metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-zinc-300 mb-4">{useCase.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Metrics:</h4>
                  <ul className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (
                      <li key={idx} className="text-sm text-zinc-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Choose the plan that best fits your marketing needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zinc-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-zinc-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zinc-400">{plan.period}</span>
                  </div>
                  <p className="text-zinc-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-zinc-700 text-white hover:bg-zinc-600'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join thousands of businesses that trust our AI-powered platform to automate 
              marketing and drive exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:border-zinc-500 transition-all duration-300"
              >
                Schedule Demo
                <MessageSquare className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredMarketingAutomation;