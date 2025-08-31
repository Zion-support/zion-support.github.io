<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react.ts';
import { SEO   } from '../../components/SEO';
import { motion   } from 'framer-motion.ts';
import { Truck, 
  Brain, 
=======
import React from 'react.ts';
<<<<<<< HEAD
import { Truck, BarChart3, ArrowRight, Check, ExternalLink, Phone, Mail, Zap, Target, Clock, Package, Globe export default function AISupplyChainOptimization(...args: any[]): any {
  const features = [
    'AI-powered demand forecasting and inventory optimization',
    'Real-time supply chain monitoring and analytics',
    'Intelligent route optimization and logistics planning',
    'Automated supplier management and risk assessment',
    'Predictive maintenance and equipment optimization',
    'Multi-warehouse inventory synchronization',
    'Advanced cost optimization and budget management',
    'Intelligent exception handling and alerting',
    'Comprehensive compliance and audit trails',
    'Scalable platform for enterprise supply chains'
  ];

  const benefits = [
    'Reduce inventory costs by 30%',
    'Improve delivery times by 40%',
    'Increase supply chain efficiency by 50%',
    'Reduce operational costs by 25%',
    'Enable real-time visibility and control',
    'Minimize supply chain disruptions'
  ];

  const useCases = [
    'Manufacturing supply chain optimization',
    'Retail inventory management',
    'Healthcare supply chain management',
    'E-commerce logistics optimization',
    'Food and beverage supply chains',
    'Automotive parts management'
=======
import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Truck, 
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
  MapPin,
  Shield,
  Settings,
  DollarSign,
  AlertCircle,
  Calendar,
  Package,
  Route,
  Warehouse,
  Factory,
  Ship,
  Plane,
  Store
} from 'lucide-react';

export default function AISupplyChainOptimization() {
  const features = [
    {
      icon: Brain,
      title: "AI Demand Forecasting",
      description: "Predict demand patterns with 95% accuracy using machine learning and historical data analysis."
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "Optimize delivery routes in real-time considering traffic, weather, and delivery windows."
    },
    {
      icon: Warehouse,
      title: "Inventory Optimization",
      description: "AI-powered inventory management with automated reordering and stock level optimization."
    },
    {
      icon: Target,
      title: "Supplier Performance Analytics",
      description: "Monitor supplier performance, quality metrics, and delivery reliability with predictive insights."
    },
    {
      icon: PieChart,
      title: "Cost Optimization",
      description: "Identify cost-saving opportunities across transportation, warehousing, and procurement."
    },
    {
      icon: Activity,
      title: "Real-time Visibility",
      description: "End-to-end supply chain visibility with real-time tracking and predictive analytics."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Reduced Costs",
      description: "Optimize transportation, inventory, and operational costs by up to 30% through AI insights."
    },
    {
      icon: DollarSign,
      title: "Improved Efficiency",
      description: "Streamline operations and reduce lead times with intelligent automation and optimization."
    },
    {
      icon: Globe,
      title: "Global Optimization",
      description: "Manage complex global supply chains with multi-location optimization and risk mitigation."
    },
    {
      icon: Lock,
      title: "Risk Management",
      description: "Identify and mitigate supply chain risks with predictive analytics and contingency planning."
    },
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Improve customer satisfaction and increase sales through better inventory availability and faster delivery."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automate routine supply chain tasks and focus on strategic decision-making."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$599",
      period: "/month",
      description: "Perfect for small businesses with basic supply chain optimization needs",
      features: [
        "Up to 5 locations",
        "Basic demand forecasting",
        "Email support",
        "Standard integrations",
        "Basic reporting",
        "Route optimization",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "Ideal for growing companies with complex supply chain requirements",
      features: [
        "Up to 25 locations",
        "Advanced AI forecasting",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Multi-modal optimization",
        "API access",
        "Supplier analytics",
        "Risk management"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade supply chain solutions",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Dedicated account manager",
        "White-label solutions",
        "Advanced security features",
        "Custom reporting",
        "On-premise deployment",
        "SLA guarantees",
        "24/7 support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      description: "Optimize fulfillment networks, reduce delivery times, and improve customer satisfaction",
      icon: Package
    },
    {
      industry: "Manufacturing",
      description: "Streamline production planning, optimize supplier networks, and reduce lead times",
      icon: Factory
    },
    {
      industry: "Retail",
      description: "Optimize store replenishment, reduce stockouts, and improve inventory turnover",
      icon: Store
    },
    {
      industry: "Logistics",
      description: "Optimize transportation networks, reduce costs, and improve delivery efficiency",
      icon: Truck
    },
    {
      industry: "Food & Beverage",
      description: "Manage perishable supply chains, reduce waste, and ensure food safety",
      icon: Package
    },
    {
      industry: "Healthcare",
      description: "Optimize medical supply chains, ensure availability, and reduce costs",
      icon: Shield
    }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  ];

  const tiers = [
    {
      name: 'Supply Chain Starter',
      price: '$599/mo',
      details: ['Up to 100 SKUs', 'Basic AI optimization', 'Standard reporting', 'Email support']
    },
    {
      name: 'Supply Chain Professional',
      price: '$1,599/mo',
      details: ['Up to 1,000 SKUs', 'Advanced AI features', 'Custom dashboards', 'Priority support']
    },
    {
      name: 'Supply Chain Enterprise',
      price: '$4,999/mo',
      details: ['Unlimited SKUs', 'Full AI suite', 'White-label options', '24/7 support']
    },
<<<<<<< HEAD
=======
    {
      name: "E-commerce",
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
      name: "Analytics",
      platforms: ["Tableau", "Power BI", "Google Analytics", "Custom APIs"]
    },
    {
      name: "IoT & Sensors",
      platforms: ["RFID", "GPS Tracking", "Temperature Sensors", "IoT Platforms"]
    }
  ];

  const keyMetrics = [
    {
      metric: "30%",
      label: "Cost Reduction",
      description: "Average reduction in supply chain costs"
    },
    {
      metric: "50%",
      label: "Lead Time Reduction",
      description: "Faster delivery and reduced lead times"
    },
    {
      metric: "95%",
      label: "Forecast Accuracy",
      description: "AI-powered demand prediction accuracy"
    },
    {
      metric: "40%",
      label: "Inventory Optimization",
      description: "Reduction in excess inventory levels"
    }
  ];

  const optimizationAreas = [
    {
      category: "Demand Planning",
      areas: ["Forecasting", "Seasonal Analysis", "Trend Prediction", "Demand Shaping"]
    },
    {
      category: "Inventory Management",
      areas: ["Stock Optimization", "Reorder Points", "Safety Stock", "ABC Analysis"]
    },
    {
      category: "Transportation",
      areas: ["Route Optimization", "Load Planning", "Carrier Selection", "Freight Optimization"]
    },
    {
      category: "Supplier Management",
      areas: ["Performance Tracking", "Risk Assessment", "Cost Analysis", "Quality Monitoring"]
    }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  ];
=======
import { SEO  } from '../../components/SEO';
import { Button  } from '../../components/ui/Button';
import { Card  } from '../../components/ui/Card';
import { Badge  } from '../../components/ui/Badge';
import { CheckCircle, Brain, TrendingUp, Truck, Shield, Zap, Globe, Clock, Phone, Mail, BarChart3, Target, Users, Database  } from 'lucide-react.ts';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

const AISupplyChainOptimization: React.FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<<<<<<< HEAD
      <SEO 
        title="AI Supply Chain Optimization Platform - Zion Tech Group"
        description="Revolutionary AI-powered supply chain optimization platform that predicts demand, optimizes inventory, and automates logistics with real-time analytics and predictive insights."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your supply chain with AI that predicts demand, optimizes inventory, and automates logistics. 
              Achieve 35% cost reduction and 50% faster delivery times with intelligent supply chain management.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
=======
      <SEO
        title="AI Supply Chain Optimization - Zion Tech Group"
        description="Optimize your supply chain with AI-powered forecasting, route optimization, and inventory management. Reduce costs and improve efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Optimization
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {' '}Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your supply chain with AI-powered optimization. 
              Reduce costs, improve efficiency, and enhance customer satisfaction with intelligent supply chain management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
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
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Intelligent Supply Chain Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-zion-cyan mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
=======
      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities designed to revolutionize your supply chain operations and logistics management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Optimization Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive optimization across all aspects of your supply chain for maximum efficiency and cost savings.
            </p>
          </motion.div>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-3">Key Benefits</h3>
              <ul className="space-y-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start">
                    <Zap className="w-4 h-4 text-zion-cyan mr-2 mt-0.5" />
                    <span className="text-zion-slate-dark text-sm">{b}</span>
                  </li>
                ))}
=======
      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose AI Supply Chain Optimization?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">35% Cost Reduction</h3>
              <p className="text-gray-300">Intelligent inventory optimization and route planning minimize operational costs</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">50% Faster Delivery</h3>
              <p className="text-gray-300">AI-optimized routes and predictive logistics ensure faster delivery times</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">95% Demand Accuracy</h3>
              <p className="text-gray-300">Machine learning algorithms predict demand with exceptional accuracy</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 text-center">
              <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">99.9% Uptime</h3>
              <p className="text-gray-300">Enterprise-grade infrastructure ensures continuous supply chain monitoring</p>
            </Card>
=======
            {optimizationAreas.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.areas.map((area, areaIndex) => (
                    <li key={areaIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
=======
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered supply chain optimization can transform your operations and drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Predictive Demand Forecasting</h3>
                  <p className="text-gray-300">AI algorithms analyze historical data, market trends, and external factors to predict demand with 95% accuracy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Intelligent Inventory Management</h3>
                  <p className="text-gray-300">Automated inventory optimization with real-time tracking and predictive reorder points</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Route Optimization</h3>
                  <p className="text-gray-300">AI-powered logistics optimization considering traffic, weather, and delivery windows</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Supplier Performance Analytics</h3>
                  <p className="text-gray-300">Comprehensive supplier evaluation and performance tracking with AI insights</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-300">24/7 supply chain visibility with instant alerts and automated responses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Risk Management</h3>
                  <p className="text-gray-300">Proactive identification and mitigation of supply chain risks and disruptions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Sustainability Optimization</h3>
                  <p className="text-gray-300">Green logistics optimization reducing carbon footprint and environmental impact</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Integration Hub</h3>
                  <p className="text-gray-300">Seamless integration with ERP, WMS, TMS, and other enterprise systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Industry Applications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Manufacturing</h3>
              <p className="text-gray-300">Optimize production planning, inventory management, and supplier relationships</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Retail & E-commerce</h3>
              <p className="text-gray-300">Demand forecasting, inventory optimization, and last-mile delivery optimization</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Healthcare</h3>
              <p className="text-gray-300">Medical supply chain optimization and pharmaceutical distribution management</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Logistics</h3>
              <p className="text-gray-300">Route optimization, fleet management, and warehouse automation</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Food & Beverage</h3>
              <p className="text-gray-300">Perishable goods management and cold chain optimization</p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Automotive</h3>
              <p className="text-gray-300">Just-in-time manufacturing and global supply chain coordination</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-white mb-2">$1,299</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 locations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI forecasting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly reports
                </li>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge variant="secondary" className="bg-blue-600 text-white">
                  Most Popular
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-2">$2,199</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25 locations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom workflows
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-2">$2,999</div>
              <div className="text-gray-400 mb-6">/month</div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited locations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Contact Sales
              </Button>
            </Card>
=======
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-500/10' 
                    : 'border-white/10 hover:border-orange-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Market Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Opportunity
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Market Size</h3>
              <p className="text-gray-300 mb-4">
                The global supply chain management market is valued at <strong className="text-white">$67.2 billion</strong> in 2024 and is expected to reach <strong className="text-white">$89.5 billion</strong> by 2026.
              </p>
              <p className="text-gray-300">
                AI-powered supply chain optimization represents the fastest-growing segment with a CAGR of <strong className="text-white">32.1%</strong>.
              </p>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">ROI & Benefits</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <strong className="text-white">400-800% ROI</strong> within 12 months</li>
                <li>• <strong className="text-white">35% reduction</strong> in operational costs</li>
                <li>• <strong className="text-white">50% faster</strong> delivery times</li>
                <li>• <strong className="text-white">95% improvement</strong> in demand accuracy</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders already using AI to revolutionize their supply chain operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
=======
      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations across industries leverage our AI supply chain optimization to improve efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          </div>
<<<<<<< HEAD

          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Pricing Plans</h3>
            <div className="grid md: anygrid-cols-3 gap-4">
              {tiers.map((t)  => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
=======
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Schedule Demo
            </Button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            Visit us at <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a>
          </p>
        </div>
      </section>
<<<<<<< HEAD
    </div>
  )}
=======
=======

>>>>>>> 0db51c83ec2639597974243032be26f90b238361
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
              Connect with your existing supply chain and logistics tools for a unified optimization experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index)  => (
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
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-orange-500/50"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
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

<<<<<<< HEAD
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-zion-slate-dark/70 text-lg">Get started with AI-powered supply chain optimization today</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Start Free Trial</h3>
            <p className="mb-6">Experience the power of AI-driven supply chain optimization with our 14-day free trial</p>
            <button className="bg-white text-zion-cyan px-6 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors">
              Start Free Trial
            </button>
          </div>

          <div className="bg-zion-slate-dark rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Schedule Demo</h3>
            <p className="mb-6">See our platform in action with a personalized demo from our experts</p>
            <button className="bg-zion-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI-powered supply chain optimization 
              to reduce costs and improve operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 text-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-lg">
                <Share2 className="w-5 h-5 mr-2 inline" />
<<<<<<< HEAD
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
=======
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
  );
<<<<<<< HEAD
}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
