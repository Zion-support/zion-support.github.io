<<<<<<< HEAD
import {}
  Brain,
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  Shield,  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Calculator,
  PieChart,
  Scale,
  Gavel,
  Clipboard,
  BookOpen,
  LineChart,
  ShoppingBag} from 'lucide-react';

export default function AIBusinessIntelligence(function AIBusinessIntelligence(function AIBusinessIntelligence() {): any {): any {}
  return()    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"""
      {/* Hero Section */}""""
      <section className="relative overflow-hidden pt-32 pb-20">""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="text-center""""
          >""""
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">""""
              <Brain className="w-4 h-4"  />              <span>AI-Powered Business Intelligence</span>"""
            </div>""""
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence"""
            </h1>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with intelligent analytics, predictive;
              insights, and data-driven decision making powered by advanced AI;
              algorithms."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"""
              >"""
                Start Free Trial""""
                <ArrowRight className="inline ml-2 w-5 h-5"  />              </motion.button>
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"""
              >
                Schedule Demo;
              </motion.button>
            </div>
          </motion.div>"""
        </div>""""
        <div className="absolute inset-0 overflow-hidden">""""
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>""""
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>
"""
      {/* Features Section */}""""
      <section className="py-20">""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Features"""
            </h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered business intelligence tools designed to;
              drive better decisions and accelerate growth.
            </p>
          </div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.6, delay: index * 0.1 }}""""
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300""""
              >""""
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">""""
                  <feature.icon className="w-8 h-8 text-blue-400" />"""
                </div>""""
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}"""
                </h3>""""
=======
import React from 'react.ts';
import { motion              } from 'framer-motion.ts';
import { Link              } from 'react-router-dom.ts';
import { Brain, 
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
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory
             } from 'lucide-react.ts';
import { SEO              } from '../../components/SEO';

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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="text-cyan-400 font-medium">AI-Powered Solutions</span>
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
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index)              => (
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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
"""
      {/* Benefits Section */}""""
      <section className="py-20 bg-slate-800/30">""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Business Benefits"""
            </h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements in your business performance with;
              AI-powered insights.
            </p>
          </div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}"""
                transition={{ duration: 0.6, delay: index * 0.1 }}""""
                className="flex items-start""""
              >""""
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0"  />"                <span className="text-gray-300 text-lg">{benefit}</span>
=======

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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
"""
      {/* Analytics Types Section */}""""
      <section className="py-20">""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Types of Analytics"""
            </h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From descriptive to prescriptive analytics, our AI platform covers;
              the complete spectrum of business intelligence.
            </p>
          </div>"""
""""
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsTypes.map((type, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.6, delay: index * 0.1 }}""""
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300""""
              >""""
                <div className="flex items-center mb-6">""""
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4">""""
                    <type.icon className="w-6 h-6 text-blue-400" />
                  </div>"""
                  <div>""""
                    <h3 className="text-xl font-semibold text-white">
                      {type.title}"""
                    </h3>""""
                    <p className="text-gray-400">{type.description}</p>
                  </div>
                </div>"""
""""
                <ul className="space-y-3">"""
                  {type.features.map((feature, featureIndex) => (""""
                    <li key={featureIndex} className="flex items-start">""""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  />"                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
=======

      {/* Benefits Section */}
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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
          
          <div className="grid md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8">
            {useCases.map((useCase, index)              => (
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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
"""
      {/* Use Cases Section */}""""
      <section className="py-20 bg-slate-800/30">""""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""""
          <div className="text-center mb-16">""""
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry Applications"""
            </h2>""""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI business intelligence transforms operations across;
              different industries.
            </p>
          </div>"""
""""
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}"""
                transition={{ duration: 0.6, delay: index * 0.1 }}""""
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300""""
              >""""
                <div className="flex items-center mb-6">""""
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4">""""
                    <useCase.icon className="w-6 h-6 text-blue-400" />"""
                  </div>""""
                  <h3 className="text-xl font-semibold text-white">
                    {useCase.industry}
                  </h3>
                </div>"""
""""
                <ul className="space-y-3">"""
                  {useCase.applications.map((application, appIndex) => (""""
                    <li key={appIndex} className="flex items-start">""""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  />""""
                      <span className="text-gray-300 text-sm">
                        {application}
                      </span>                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
"""
      {/* CTA Section */}""""
      <section className="py-20">""""
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}"""
            transition={{ duration: 0.8 }}""""
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-2xl p-12""""
          >""""
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?"""
            </h2>""""
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start leveraging the power of AI business intelligence today and;
              see immediate improvements in your decision-making and business;
              performance."""
            </p>""""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"""
              >"""
                Get Started Now""""
                <ArrowRight className="inline ml-2 w-5 h-5"  />              </motion.button>
              <motion.button;
                whileHover={{ scale: 1.05 }}"""
                whileTap={{ scale: 0.95 }}""""
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"""
              >
                Contact Sales;
              </motion.button>
=======

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
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
            </div>
          </motion.div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  )}'"""
'"'"""
=======
  );
}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
