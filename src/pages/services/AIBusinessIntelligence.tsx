import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Globe,
  Clock,
  Star
} from 'lucide-react';
<<<<<<< HEAD
=======
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database, 
  Zap, 
  Target, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Lock,
  BarChart,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
import { Link } from 'react-router-dom';
import { Brain, BarChart3, TrendingUp, Users, Shield, Zap, ArrowRight, CheckCircle, Star } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Predictive Analytics",
      description: "Advanced machine learning models that forecast trends, customer behavior, and business outcomes with high accuracy.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards that provide instant insights into key performance indicators and business metrics.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "AI-driven recommendations for optimizing business processes, resource allocation, and strategic decision-making.",
      color: "from-green-500 to-emerald-500"
=======
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data."
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Live monitoring and visualization of key performance indicators with instant updates and alerts."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using historical data and AI models for better decision-making."
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    },
    {
      icon: Database,
      title: "Data Integration",
<<<<<<< HEAD
      description: "Seamless integration with existing data sources, databases, and business applications for unified insights.",
      color: "from-orange-500 to-yellow-500"
=======
      description: "Seamlessly connect and consolidate data from multiple sources for comprehensive analysis."
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Generate intelligent reports automatically with AI-generated insights and recommendations."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Monitor progress towards business objectives with AI-powered performance tracking."
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "Increase revenue by 25-40% through data-driven insights",
    "Reduce operational costs by 15-30% with optimized processes",
    "Improve customer satisfaction by 35% with predictive analytics",
    "Accelerate decision-making by 60% with real-time intelligence",
    "Identify new market opportunities with AI-powered trend analysis",
    "Enhance risk management with predictive risk modeling"
=======
    "Make data-driven decisions with confidence",
    "Identify hidden opportunities and risks",
    "Optimize business processes automatically",
    "Improve customer experience and satisfaction",
    "Reduce operational costs through efficiency",
    "Stay ahead of market trends and competition"
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
  ];

  const useCases = [
    {
<<<<<<< HEAD
      industry: "Financial Services",
      applications: [
        "Fraud detection and prevention",
        "Credit risk assessment",
        "Investment portfolio optimization",
        "Customer churn prediction"
      ]
    },
    {
      industry: "Healthcare",
      applications: [
        "Patient outcome prediction",
        "Resource allocation optimization",
        "Disease pattern analysis",
        "Treatment effectiveness assessment"
      ]
    },
    {
<<<<<<< HEAD
      industry: "Manufacturing",
      applications: [
        "Predictive maintenance",
        "Quality control optimization",
        "Supply chain optimization",
        "Production efficiency analysis"
      ]
    },
    {
      industry: "Retail",
      applications: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Price optimization",
        "Marketing campaign effectiveness"
=======
import { Brain, TrendingUp, BarChart3, PieChart, LineChart, Target, Users, DollarSign, Zap, Shield, Globe, Database } from 'lucide-react';
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Target, 
  Users, 
  Building,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Award,
  Database,
  Cpu,
  Eye,
  Lock
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01

const AIBusinessIntelligence = () => {
  const features = [
    {
      icon: Brain,
<<<<<<< HEAD
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis for informed decision-making',
      benefits: ['Forecast market trends', 'Predict customer behavior', 'Optimize resource allocation']
=======
      title: 'Advanced AI Analytics',
      description: 'Leverage machine learning algorithms to uncover hidden patterns and insights in your data.'
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
<<<<<<< HEAD
      description: 'Live business metrics and KPIs with interactive visualizations',
      benefits: ['Live data monitoring', 'Customizable widgets', 'Mobile-responsive design']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Automated progress monitoring and performance optimization',
      benefits: ['KPI tracking', 'Performance alerts', 'Goal optimization']
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'Deep insights into customer behavior and preferences',
      benefits: ['Customer segmentation', 'Behavioral analysis', 'Personalization insights']
    },
    {
      icon: DollarSign,
      title: 'Financial Analytics',
      description: 'Advanced financial modeling and risk assessment',
      benefits: ['Revenue forecasting', 'Cost optimization', 'Risk analysis']
=======
      description: 'Interactive dashboards that provide instant visibility into key business metrics and KPIs.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using sophisticated AI prediction models.'
    },
    {
      icon: Users,
      title: 'User Behavior Analysis',
      description: 'Understand customer behavior patterns and preferences for better decision making.'
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
    },
    {
      icon: Shield,
      title: 'Data Security',
<<<<<<< HEAD
      description: 'Enterprise-grade security with compliance automation',
      benefits: ['SOC2 compliance', 'Data encryption', 'Access controls']
=======
      name: "Enterprise",
      price: "$12,000",
      period: "/month",
      description: "Comprehensive solution for large enterprises with complex analytics requirements",
      features: [
        "Unlimited users",
        "Custom ML models",
        "Advanced dashboards",
        "24/7 dedicated support",
        "Custom integrations",
        "Data warehouse",
        "Advanced security",
        "Compliance reporting",
        "Custom development",
        "Training & onboarding"
      ],
      popular: false
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data",
      benefits: ["Predictive analytics", "Anomaly detection", "Pattern recognition", "Automated insights"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Interactive dashboards that provide instant visibility into your business performance and KPIs",
      benefits: ["Live data updates", "Customizable widgets", "Mobile responsive", "Role-based access"]
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using historical data and advanced statistical models",
      benefits: ["Sales forecasting", "Demand prediction", "Risk assessment", "Trend analysis"]
    },
    {
      icon: Users,
      title: "Customer Intelligence",
      description: "Deep insights into customer behavior, preferences, and lifetime value for better decision-making",
      benefits: ["Customer segmentation", "Behavioral analysis", "Churn prediction", "Personalization"]
    },
    {
      icon: Building,
      title: "Operational Analytics",
      description: "Monitor and optimize business operations with real-time performance metrics and alerts",
      benefits: ["Process optimization", "Resource allocation", "Efficiency tracking", "Performance monitoring"]
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with built-in compliance features for data protection and governance",
      benefits: ["GDPR compliance", "SOC2 certified", "Data encryption", "Access controls"]
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
    }
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: "Customer Behavior Analysis",
      description: "Understand customer patterns and preferences to optimize marketing strategies and improve retention.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Forecasting",
      description: "Predict revenue, expenses, and cash flow to make informed financial decisions.",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize inventory levels, reduce costs, and improve delivery times with predictive analytics.",
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    {
<<<<<<< HEAD
      industry: 'Retail',
      applications: [
        'Inventory optimization',
        'Customer behavior analysis',
        'Pricing strategy optimization',
        'Marketing campaign effectiveness'
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
      ]
    }
  ];

<<<<<<< HEAD
  const technologies = [
    "Machine Learning Algorithms",
    "Deep Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Time Series Analysis",
    "Anomaly Detection",
    "Clustering & Classification",
    "Regression Analysis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                {" "}That Transforms
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Unlock the power of your data with AI-driven business intelligence solutions that provide 
              real-time insights, predictive analytics, and actionable recommendations to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-purple-500/50 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
=======
  const implementationSteps = [
    {
      step: 1,
      title: 'Data Assessment',
      description: 'Evaluate current data infrastructure and identify improvement opportunities',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Solution Design',
      description: 'Design custom AI models and analytics workflows for your business needs',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy AI models and integrate with existing business systems',
      duration: '4-6 weeks'
    },
    {
      step: 4,
      title: 'Training & Optimization',
      description: 'Train your team and continuously optimize AI models for better performance',
      duration: '2-3 weeks'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
=======
      industry: "Healthcare",
      title: "Patient Outcome Prediction",
      description: "Predict patient outcomes and optimize treatment plans using AI-powered analytics",
      metrics: ["95% accuracy", "30% faster diagnosis", "40% cost reduction"]
    },
    {
      industry: "Financial Services",
      title: "Risk Assessment & Fraud Detection",
      description: "Real-time risk analysis and fraud detection for secure financial operations",
      metrics: ["99.9% detection rate", "60% faster processing", "Zero false positives"]
    },
    {
      industry: "Manufacturing",
      title: "Predictive Maintenance",
      description: "Prevent equipment failures and optimize maintenance schedules with predictive analytics",
      metrics: ["80% fewer breakdowns", "25% cost savings", "99% uptime"]
    },
    {
      industry: "Retail",
      title: "Customer Behavior Analysis",
      description: "Understand customer preferences and optimize marketing strategies for better engagement",
      metrics: ["45% conversion increase", "30% customer retention", "50% ROI improvement"]
    }
  ];

  const technologies = [
    {
      name: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition and prediction",
      icon: Brain
    },
    {
      name: "Big Data Processing",
      description: "Scalable data processing for large datasets",
      icon: Database
    },
    {
      name: "Real-Time Analytics",
      description: "Instant data processing and insights delivery",
      icon: Zap
    },
    {
      name: "Natural Language Processing",
      description: "AI-powered text analysis and understanding",
      icon: Eye
    },
    {
      name: "Cloud Computing",
      description: "Scalable cloud infrastructure for data storage and processing",
      icon: Globe
    },
    {
      name: "Advanced Security",
      description: "Enterprise-grade security and compliance features",
      icon: Lock
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 10 data sources",
        "Basic dashboards",
        "Standard reporting",
        "Email support",
        "Basic AI insights"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Advanced analytics for growing businesses",
      features: [
        "Up to 50 data sources",
        "Advanced dashboards",
        "Custom reporting",
        "Priority support",
        "Advanced AI insights",
        "Predictive analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Full-scale AI business intelligence for large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced reporting",
        "24/7 dedicated support",
        "Full AI capabilities",
        "Custom integrations",
        "On-premise options",
        "White-label solutions"
      ],
      popular: false
    }
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Business Intelligence
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Business Intelligence Suite
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business data into actionable intelligence with our advanced AI-powered analytics platform. 
            Make data-driven decisions with confidence using predictive analytics, real-time insights, and automated reporting.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
              Schedule Demo
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
<<<<<<< HEAD
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful AI-Powered Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge machine learning with intuitive 
              analytics to deliver actionable insights that drive business success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
=======
      title: "Sales & Marketing",
      description: "Optimize campaigns, predict customer behavior, and maximize ROI with AI-driven insights.",
      icon: TrendingUp
    },
    {
      title: "Financial Analysis",
      description: "Monitor cash flow, detect fraud, and optimize investment strategies using AI analytics.",
      icon: BarChart
    },
    {
      title: "Operations Management",
      description: "Streamline processes, predict maintenance needs, and optimize resource allocation.",
      icon: Activity
    },
    {
      title: "Customer Intelligence",
      description: "Understand customer preferences, predict churn, and personalize experiences.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Brain className="w-8 h-8 text-cyan-500" />
            <span className="text-cyan-500 font-semibold">AI Business Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
              {" "}AI-Powered Intelligence
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock the full potential of your data with advanced AI analytics, real-time insights, and predictive intelligence that drives smarter business decisions.
=======
      description: 'Enterprise-grade security with SOC2 compliance and advanced encryption.'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI-powered automated reporting and intelligent alerting systems.'
    }
  ];

  const benefits = [
    'Increase revenue by 15-25% through data-driven insights',
    'Reduce operational costs by 20-30% with predictive analytics',
    'Improve customer satisfaction by 35% with behavioral analysis',
    'Accelerate decision-making by 50% with real-time dashboards',
    'Reduce manual reporting time by 80% with automation',
    'Achieve 99.9% data accuracy with AI validation'
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, and portfolio optimization using AI analytics.',
      icon: '💰'
    },
    {
      title: 'Healthcare',
      description: 'Patient outcome prediction, resource optimization, and treatment effectiveness analysis.',
      icon: '🏥'
    },
    {
      title: 'Retail',
      description: 'Customer segmentation, inventory optimization, and demand forecasting.',
      icon: '🛒'
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            AI Business Intelligence
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with AI-powered analytics, predictive insights, and intelligent decision-making tools. 
            Unlock the full potential of your data with cutting-edge artificial intelligence.
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg"
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
            >
              Get Started
            </Link>
            <Link
<<<<<<< HEAD
              to="/services"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200"
            >
              View All Services
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Transform Your Business</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in performance, efficiency, and profitability with our 
              AI Business Intelligence solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence solutions are tailored to meet the unique challenges 
              and opportunities across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{app}</span>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Powerful AI-Driven Features
          </motion.h2>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
=======
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Transform Data into
              <br />
              Strategic Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Leverage the power of artificial intelligence to unlock hidden patterns, 
              predict future trends, and make data-driven decisions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose AI Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform delivers actionable insights that transform how you understand 
            and operate your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
                      {benefit}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Industry Applications
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                      {application}
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
=======
      title: "Risk Management",
      description: "Identify and mitigate risks before they impact your business with advanced risk modeling.",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Business Intelligence Solutions | Zion Tech Group"
        description="Transform your business with AI-powered business intelligence solutions. Get real-time insights, predictive analytics, and automated reporting."
        keywords="AI business intelligence, machine learning, predictive analytics, data analytics, business insights"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Analytics
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
                AI Business Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your data into actionable insights with AI-powered business intelligence solutions that drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Technologies */}
      <section className="py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Technologies</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built on cutting-edge AI and machine learning technologies to deliver 
              the most accurate and actionable business intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <span className="text-gray-300 text-sm">{tech}</span>
=======
      {/* Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Implementation Process
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                  {step.duration}
                </span>
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
              </motion.div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Intelligence Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform provides comprehensive analytics capabilities designed for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-12 text-center">
            <motion.div
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Business Benefits
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="text-center"
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
              <Lightbulb className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join leading organizations that are already leveraging AI-powered business intelligence 
                to gain competitive advantages and drive unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-purple-500/50 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
=======
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
=======
        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into strategic insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of your data with intelligent analytics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI business intelligence transforms different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                      : 'border-gray-700 hover:border-cyan-500/50'
                  } transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your AI business intelligence journey today and unlock the power of data-driven decision making
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full font-semibold transition-all duration-300">
                  Contact Sales
                </button>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
              </div>
            </motion.div>
<<<<<<< HEAD
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Better Decisions</h3>
              <p className="text-gray-400">Make data-driven decisions with confidence using AI-powered insights</p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost Savings</h3>
              <p className="text-gray-400">Reduce operational costs and increase ROI through intelligent automation</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </div>
  );
}
=======

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-gray-300 mb-6">
              Start leveraging the power of AI to unlock insights from your data and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
  );
};

export default AIBusinessIntelligence;
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of AI-driven business intelligence that gives you a competitive edge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI Business Intelligence transforms various aspects of your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance, security, and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">Machine Learning</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">Big Data</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">Security</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold">Cloud Native</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and unlock the full potential of your data with our advanced business intelligence platform.
=======
              </div>
            );
          })}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Industry Applications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI Business Intelligence is transforming businesses across different industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {useCase.industry}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
              <p className="text-gray-300 mb-4">{useCase.description}</p>
              <div className="space-y-2">
                {useCase.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                    <span className="text-cyan-400 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on the latest AI and data science technologies for maximum performance and accuracy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className={`relative bg-gray-800/50 rounded-2xl p-8 border ${
              tier.popular 
                ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                : 'border-gray-700/50'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
                <p className="text-gray-300">{tier.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business Intelligence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations that are already leveraging AI-powered insights 
            to drive growth and competitive advantage.
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-500 hover:text-cyan-500 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-c0fa
=======
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
=======
              to="/case-studies"
              className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
};

export default AIBusinessIntelligence;
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
=======

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge technology with intuitive design 
              to deliver actionable insights that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See real results with our AI Business Intelligence solutions that deliver 
              quantifiable improvements across all aspects of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI Business Intelligence platform is designed to work across industries, 
              providing tailored solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and unlock the full potential of your data. 
              Get started with AI Business Intelligence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-200 font-semibold text-lg"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-ea9e
