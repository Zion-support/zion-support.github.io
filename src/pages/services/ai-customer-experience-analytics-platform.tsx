import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Users,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Star,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  HeatMap,
  Funnel,
  UserCheck,
  UserX,
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
  BatteryEmpty10
} from 'lucide-react';

const AICustomerExperienceAnalyticsPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced natural language processing to understand customer emotions and intent across all communication channels."
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      title: "Real-Time Customer Journey Tracking",
      description: "Monitor customer interactions across touchpoints with predictive analytics for proactive engagement."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: "Predictive Customer Behavior Modeling",
      description: "Machine learning algorithms that forecast customer needs and churn risks with 95% accuracy."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "360° Customer Profile Analytics",
      description: "Comprehensive customer profiles with behavioral patterns, preferences, and lifetime value predictions."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: "Advanced Performance Metrics",
      description: "Customizable dashboards with KPIs, conversion funnels, and ROI tracking across all customer touchpoints."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Privacy-First Data Collection",
      description: "GDPR and CCPA compliant data collection with end-to-end encryption and secure analytics processing."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses starting their CX analytics journey",
      features: [
        "Up to 10,000 customer interactions/month",
        "Basic sentiment analysis",
        "Standard reporting dashboard",
        "Email support",
        "Basic integrations (3 platforms)",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing companies with advanced analytics needs",
      features: [
        "Up to 100,000 customer interactions/month",
        "Advanced AI sentiment analysis",
        "Custom dashboard creation",
        "Priority support",
        "Advanced integrations (10 platforms)",
        "90-day data retention",
        "Predictive analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade solutions",
      features: [
        "Unlimited customer interactions",
        "Custom AI model training",
        "White-label solutions",
        "24/7 dedicated support",
        "Unlimited integrations",
        "Unlimited data retention",
        "Advanced security features",
        "Custom deployment options",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Customer Retention by 35%",
      description: "Predict and prevent churn with AI-powered insights and proactive engagement strategies.",
      icon: <Heart className="w-8 h-8 text-red-400" />
    },
    {
      title: "Boost Customer Satisfaction by 42%",
      description: "Identify pain points and optimize customer journeys for better experiences across all touchpoints.",
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      title: "Reduce Support Costs by 28%",
      description: "Automate routine inquiries and route complex issues to the right agents for faster resolution.",
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: "Improve Conversion Rates by 31%",
      description: "Optimize customer touchpoints based on behavioral data and personalized recommendations.",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Track customer journey from browsing to purchase, optimize product recommendations, and reduce cart abandonment.",
      metrics: ["Conversion rate", "Average order value", "Customer lifetime value"]
    },
    {
      industry: "SaaS",
      description: "Monitor user engagement, identify feature adoption patterns, and predict subscription renewals.",
      metrics: ["User activation rate", "Feature adoption", "Churn prediction"]
    },
    {
      industry: "Healthcare",
      description: "Improve patient experience, track appointment satisfaction, and optimize care delivery processes.",
      metrics: ["Patient satisfaction", "Appointment adherence", "Care quality scores"]
    },
    {
      industry: "Financial Services",
      description: "Enhance customer onboarding, detect fraud patterns, and personalize financial product recommendations.",
      metrics: ["Onboarding completion", "Fraud detection rate", "Product adoption"]
    }
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
              AI-Powered Analytics Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Customer Experience with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Analytics
              </span>
            </h1>
            <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
              Unlock deep insights into customer behavior, predict trends, and deliver exceptional experiences 
              with our advanced AI-powered customer experience analytics platform.
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
              Powerful Features for Modern Businesses
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive insights and analytics to help you understand 
              your customers better than ever before.
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

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-800/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Join thousands of companies that have transformed their customer experience with our platform.
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
      <section className="py-20">
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
              Tailored analytics solutions for different industries with proven success metrics.
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
      <section className="py-20 bg-zinc-800/20">
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
              Choose the plan that best fits your business needs and scale as you grow.
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join thousands of businesses that trust our AI-powered analytics platform to deliver 
              exceptional customer experiences and drive growth.
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

export default AICustomerExperienceAnalyticsPlatform;