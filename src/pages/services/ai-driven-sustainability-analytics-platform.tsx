import React from 'react';
import { motion } from 'framer-motion';
import {

  Leaf, 
  TrendingUp, 
  Brain, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Globe,
  Database,
  Activity,
  Eye,
  Settings,
  Download,
  Share2,
  Filter,
  Search,
  AlertTriangle,
  Lightbulb,
  BarChart,
  PieChart,
  LineChart,
  Activity as ActivityIcon,
  Eye as EyeIcon,
  Settings as SettingsIcon,
  Download as DownloadIcon,
  Share2 as Share2Icon,
  Filter as FilterIcon,
  Search as SearchIcon,
  AlertTriangle as AlertTriangleIcon,
  Lightbulb as LightbulbIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  Zap,
  Target,
  Users,
  Shield,
  Cloud,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Globe2,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  CheckCircle as CheckCircleIcon,
  ArrowRight as ArrowRightIcon,
  Star as StarIcon,
  Clock as ClockIcon,
  Globe as GlobeIcon,
  Database as DatabaseIcon2,
  Activity as ActivityIcon2,
  Eye as EyeIcon2,
  Settings as SettingsIcon2,
  Download as DownloadIcon2,
  Share2 as Share2Icon2,
  Filter as FilterIcon2,
  Search as SearchIcon2,
  AlertTriangle as AlertTriangleIcon2,
  Lightbulb as LightbulbIcon2,
  BarChart as BarChartIcon2,
  PieChart as PieChartIcon2,
  LineChart as LineChartIcon2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIDrivenSustainabilityAnalyticsPlatform() {

  const features = [
    {

      icon: Brain,
      title: "AI-Powered Carbon Footprint Analysis",
      description: "Advanced machine learning algorithms that automatically calculate and track carbon emissions across your entire organization",
      benefits: ["Real-time carbon tracking", "Automated data collection", "Predictive emission modeling"]
    },
    {

      icon: Leaf,
      title: "Sustainability Performance Monitoring",
      description: "Comprehensive monitoring of environmental, social, and governance (ESG) metrics with intelligent insights",
      benefits: ["ESG score tracking", "Performance benchmarking", "Goal progress monitoring"]
    },
    {

      icon: TrendingUp,
      title: "Predictive Sustainability Analytics",
      description: "AI-driven forecasting that predicts future sustainability trends and identifies optimization opportunities",
      benefits: ["Trend prediction", "Optimization recommendations", "Risk assessment"]
    },
    {

      icon: Target,
      title: "Goal Setting & Tracking",
      description: "Set ambitious sustainability goals and track progress with intelligent milestone management",
      benefits: ["Smart goal setting", "Progress tracking", "Automated alerts"]
    },
    {

      icon: Zap,
      title: "Energy Efficiency Optimization",
      description: "AI-powered recommendations for reducing energy consumption and improving operational efficiency",
      benefits: ["Energy optimization", "Cost reduction", "Efficiency improvements"]
    },
    {

      icon: Shield,
      title: "Compliance & Reporting",
      description: "Automated compliance monitoring and reporting for sustainability standards and regulations",
      benefits: ["Regulatory compliance", "Automated reporting", "Audit readiness"]
    }
  ];

  const pricingPlans = [
    {

      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small businesses starting their sustainability journey",
      features: [
        "Up to 50 users",
        "Basic carbon tracking",
        "Standard ESG metrics",
        "Email support",
        "Monthly reports",
        "Basic AI insights"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {

      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing companies with comprehensive sustainability needs",
      features: [
        "Up to 200 users",
        "Advanced analytics",
        "Custom ESG frameworks",
        "Priority support",
        "Real-time dashboards",
        "Advanced AI insights",
        "Custom integrations",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {

      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade sustainability management",
      features: [
        "Unlimited users",
        "Custom sustainability models",
        "Advanced AI algorithms",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced compliance",
        "API access",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {

      industry: "Manufacturing",
      description: "Optimize production processes and reduce environmental impact with AI-driven insights",
      metrics: ["Carbon emissions reduction", "Energy efficiency", "Waste reduction"]
    },
    {

      industry: "Retail",
      description: "Track supply chain sustainability and optimize operations for environmental impact",
      metrics: ["Supply chain transparency", "Carbon footprint", "Sustainable sourcing"]
    },
    {

      industry: "Technology",
      description: "Monitor data center efficiency and optimize cloud infrastructure sustainability",
      metrics: ["Energy efficiency", "Carbon intensity", "Green computing"]
    },
    {

      industry: "Transportation",
      description: "Optimize fleet operations and reduce emissions with intelligent routing and maintenance",
      metrics: ["Fleet efficiency", "Emissions reduction", "Route optimization"]
    }
  ];

  const sustainabilityMetrics = [
    { icon: Leaf, name: "Carbon Emissions", description: "Track CO2, methane, and other greenhouse gases" },
    { icon: Zap, name: "Energy Consumption", description: "Monitor electricity, fuel, and renewable energy usage" },
    { icon: Droplets, name: "Water Usage", description: "Track water consumption and wastewater management" },
    { icon: Trash2, name: "Waste Management", description: "Monitor waste generation and recycling rates" },
    { icon: Users, name: "Social Impact", description: "Track community engagement and social responsibility" },
    { icon: Shield, name: "Governance", description: "Monitor compliance and ethical business practices" }
  ];

  const reportingFrameworks = [
    "GRI Standards",
    "SASB Standards",
    "TCFD Framework",
    "CDP Reporting",
    "UN SDGs",
    "ISO 14001",
    "B Corp Certification",
    "ESG Ratings"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4 mr-2" />
              AI-Driven Sustainability Analytics Platform
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Sustainability Journey</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Our AI-powered sustainability platform provides comprehensive analytics, intelligent insights, and automated reporting 
              to help you achieve your environmental, social, and governance goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Your Sustainability Journey
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Watch Demo
                  <Play className="w-5 h-5" />
                </span>
              </button>
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Sustainability Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to measure, manage, and improve your sustainability performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Sustainability Metrics
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Track and analyze every aspect of your sustainability performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{metric.name}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Frameworks Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Standard Reporting Frameworks
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet and exceed industry standards with our comprehensive reporting capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reportingFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-sm font-semibold text-white">{framework}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Sustainable Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your sustainability goals and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${

                  plan.popular 
                    ? 'border-green-500/50 shadow-lg shadow-green-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${

                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tailored sustainability analytics for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Metrics:</h4>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center text-gray-300">
                      <Leaf className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Lead the Sustainability Revolution?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join thousands of businesses using AI to create a more sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25"
              >
                <span className="flex items-center gap-2">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
              >
                Contact Sustainability Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gray-400">
            <p className="mb-2">
              <strong>Contact Us:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com
            </p>
            <p>
              <strong>Address:</strong> 364 E Main St STE 1008 Middletown DE 19709
            </p>
            <p className="mt-2">
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-green-400 hover:text-green-300">https://ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Add missing icon components
const Play = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const Droplets = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const Trash2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
  </svg>
);