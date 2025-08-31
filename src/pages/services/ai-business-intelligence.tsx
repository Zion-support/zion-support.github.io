<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
=======
import React from 'react.ts';
<<<<<<< HEAD
import { Helmet              } from 'react-helmet-async.ts';
import { Brain, BarChart3, TrendingUp, Database, Users, Shield, Globe, ArrowRight, CheckCircle, Play, Download, Mail, Zap, Target, PieChart import { Link              } from 'react-router-dom.ts';
=======
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { Brain, 
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  BarChart3, 
  Target, 
  TrendingUp, 
  Zap, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Users,
  Globe,
  Star,
<<<<<<< HEAD
  Award,
  FileText,
  Search,
  Share2,
  PieChart
} from 'lucide-react';
=======
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory
             } from 'lucide-react.ts';
import { SEO              } from '../../components/SEO';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

export default function AIBusinessIntelligence(...args: any[]): any {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for predictive insights and trend analysis"
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Live business metrics and KPIs with interactive visualizations"
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "Forecast business outcomes and identify growth opportunities"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Monitor business performance across all departments and metrics"
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Intelligent report generation and distribution to stakeholders"
    },
    {
      icon: Users,
      title: "Collaborative Insights",
      description: "Team-based analytics with shared dashboards and insights"
    }
  ];

  const benefits = [
    "Increase revenue by 25-40%",
    "Improve decision-making speed by 60%",
    "Reduce operational costs by 30%",
    "Boost customer satisfaction by 45%",
    "Real-time business monitoring",
    "Predictive business insights"
  ];

  const analyticsTypes = [
    "Financial Analytics",
    "Customer Analytics",
    "Operational Analytics",
    "Sales Analytics",
    "Marketing Analytics",
    "Performance Analytics"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "For small businesses",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Standard dashboards",
        "Email support",
        "Core integrations"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "For growing companies",
      features: [
        "Up to 25 users",
        "Advanced AI analytics",
        "Custom dashboards",
        "Priority support",
        "Full integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom AI models",
        "White-label options",
        "Dedicated support",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
=======
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
<<<<<<< HEAD

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Intelligence</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform raw data into strategic insights with AI-powered business intelligence.
                Make data-driven decisions with predictive analytics, intelligent reporting, and real-time dashboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"

                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Data Analytics
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI-powered BI platform delivers actionable insights that drive strategic decision-making
                and business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Analytics",
                  description: "Advanced machine learning algorithms analyze patterns and predict future trends."
                },
                {
                  icon: BarChart3,
                  title: "Interactive Dashboards",
                  description: "Real-time dashboards with customizable widgets and intuitive visualizations."
                },
                {
                  icon: TrendingUp,
                  title: "Predictive Insights",
                  description: "Forecast business outcomes and identify opportunities before they arise."
                },
                {
                  icon: Database,
                  title: "Data Integration",
                  description: "Seamlessly connect to multiple data sources and systems for unified insights."
                },
                {
                  icon: Users,
                  title: "Collaborative Reporting",
                  description: "Share insights across teams with role-based access and collaborative features."
                },
                {
                  icon: Shield,
                  title: "Data Security",
                  description: "Enterprise-grade security with encryption, access controls, and compliance features."

              ].map((feature, index)              => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive BI Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                From data discovery to advanced analytics, our platform covers every aspect of business intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Advanced data mining and pattern recognition",
                    "Real-time streaming analytics and monitoring",
                    "Natural language query processing",
                    "Automated report generation and scheduling",
                    "Mobile-responsive dashboards and alerts",
                    "Integration with popular BI tools and platforms"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{capability}</span>
                    </div>
                  ))}
=======
              <span className="text-cyan-400 font-medium">AI-Powered Solutions</span>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business decisions with AI-powered analytics, predictive insights, and real-time intelligence that drives growth and competitive advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Business Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage AI technology to uncover insights and make data-driven business decisions.
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
=======
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Business Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform covers all aspects of business intelligence and analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-medium text-lg">{type}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI-Powered BI?</h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Traditional business intelligence tools are limited by manual processes and static reports. 
                Our AI-powered solutions provide dynamic, intelligent insights that adapt to your business needs.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/30 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">AI Analytics Dashboard</h3>
                  <p className="text-gray-300">Real-time insights at your fingertips</p>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Business Operations
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how AI-powered BI can revolutionize different aspects of your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Sales & Marketing",
                  description: "Track performance, predict customer behavior, and optimize campaigns with data-driven insights.",
                  icon: TrendingUp,
                  benefits: ["Lead scoring", "Customer segmentation", "Campaign optimization"]
                },
                {
                  title: "Operations & Supply Chain",
                  description: "Monitor efficiency, predict demand, and optimize inventory with real-time analytics.",
                  icon: Globe,
                  benefits: ["Demand forecasting", "Inventory optimization", "Performance monitoring"]
                },
                {
                  title: "Financial Analytics",
                  description: "Track KPIs, identify trends, and make informed financial decisions with predictive insights.",
                  icon: PieChart,
                  benefits: ["Budget tracking", "Revenue forecasting", "Risk assessment"]
                },
                {
                  title: "Human Resources",
                  description: "Analyze workforce data, predict turnover, and optimize talent management strategies.",
                  icon: Users,
                  benefits: ["Turnover prediction", "Performance analytics", "Talent optimization"]
                },
                {
                  title: "Customer Experience",
                  description: "Understand customer behavior, predict satisfaction, and improve service delivery.",
                  icon: Shield,
                  benefits: ["Sentiment analysis", "Churn prediction", "Service optimization"]
                },
                {
                  title: "Product Development",
                  description: "Analyze usage patterns, predict feature adoption, and optimize product roadmaps.",
                  icon: Target,
                  benefits: ["Usage analytics", "Feature adoption", "Product optimization"]

              ].map((useCase, index)              => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
=======
      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Business Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join organizations that have revolutionized their business intelligence with AI.
            </p>
          </motion.div>
<<<<<<< HEAD

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
=======
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {useCases.map((useCase, index)              => (
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the business intelligence solution that fits your organization's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
<<<<<<< HEAD
=======
                  <h3 className="text-2xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <div className="space-y-2">
                  {useCase.applications.map((application) => (
                    <div key={application} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300 text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cutting-Edge Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI and machine learning technologies to deliver powerful, 
              scalable business intelligence solutions.
            </p>
          </motion.div>
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-6">
            {technologies.map((tech, index)              => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven implementation methodology ensures successful deployment of AI business intelligence 
              solutions with minimal disruption to your operations.
            </p>
          </motion.div>
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index)              => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform translate-x-1/2"></div>
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
                }`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution in business intelligence and make data-driven decisions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}