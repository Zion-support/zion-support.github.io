import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Workflow, 
  BarChart3, 
  Users, 
  Shield, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
  Target,
  Lightbulb,
  Atom,
  Lock,
  Eye,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Activity,
  Heart,
  AlertTriangle,
  Globe,
  Cpu,
  Database,
  Network,
  Monitor,
  PieChart,
  LineChart,
  Building,
  ShoppingCart
} from 'lucide-react';

export default function InnovativeServicesShowcase2026() {
  const newServices = [
    {
      title: "AI Business Process Automation Platform",
      description: "Revolutionize your business operations with intelligent automation that learns, adapts, and optimizes your processes in real-time.",
      price: "From $299/month",
      features: [
        "Intelligent Workflow Design & Orchestration",
        "AI-Powered Decision Making & Routing",
        "Real-time Process Monitoring & Analytics",
        "Automated Document Processing & Extraction",
        "Smart Form Generation & Validation"
      ],
      benefits: [
        "Reduce manual processing time by 85%",
        "Increase process accuracy to 99.5%",
        "Cut operational costs by 60%",
        "Improve employee productivity by 75%"
      ],
      href: "/services/ai-business-process-automation-platform",
      color: "from-blue-400 to-purple-500",
      icon: Workflow,
      category: "Business Automation"
    },
    {
      title: "AI Customer Experience Analytics Platform",
      description: "Unlock the power of customer data with AI-driven analytics that reveal insights, predict behavior, and transform customer experiences.",
      price: "From $199/month",
      features: [
        "Real-time Customer Journey Mapping",
        "AI-Powered Sentiment Analysis",
        "Predictive Customer Behavior Modeling",
        "Multi-channel Experience Tracking",
        "Automated Customer Feedback Analysis"
      ],
      benefits: [
        "Increase customer satisfaction by 45%",
        "Reduce customer churn by 35%",
        "Boost customer lifetime value by 60%",
        "Improve response time by 80%"
      ],
      href: "/services/ai-customer-experience-analytics-platform",
      color: "from-purple-400 to-pink-500",
      icon: Users,
      category: "Customer Analytics"
    },
    {
      title: "AI Financial Risk Management Platform",
      description: "Revolutionize your financial risk management with AI-powered analytics that detect threats in real-time and ensure complete regulatory compliance.",
      price: "From $399/month",
      features: [
        "Real-time Risk Monitoring & Alerts",
        "AI-Powered Fraud Detection & Prevention",
        "Advanced Credit Risk Assessment",
        "Market Risk Analysis & Prediction",
        "Operational Risk Management"
      ],
      benefits: [
        "Reduce financial losses by 70%",
        "Improve fraud detection accuracy to 99.8%",
        "Cut compliance costs by 60%",
        "Accelerate risk assessment by 85%"
      ],
      href: "/services/ai-financial-risk-management-platform",
      color: "from-blue-400 to-cyan-500",
      icon: Shield,
      category: "Financial Risk"
    }
  ];

  const stats = [
    { number: '3', label: 'New AI Platforms', icon: Brain },
    { number: '85%', label: 'Average Time Savings', icon: Clock },
    { number: '70%', label: 'Average Cost Reduction', icon: DollarSign },
    { number: '99%+', label: 'Accuracy Improvements', icon: CheckCircle }
  ];

  const categories = [
    {
      name: "Business Automation",
      description: "Streamline operations and boost productivity",
      icon: Workflow,
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "Customer Analytics",
      description: "Understand and optimize customer experiences",
      icon: Users,
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Financial Risk",
      description: "Protect assets and ensure compliance",
      icon: Shield,
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const useCases = [
    {
      title: "Enterprise Process Optimization",
      description: "Large corporations using our automation platform to streamline operations across multiple departments",
      icon: Building,
      impact: "Save $2M+ annually"
    },
    {
      title: "E-commerce Customer Insights",
      description: "Online retailers leveraging customer analytics to personalize experiences and boost conversions",
      icon: ShoppingCart,
      impact: "Increase sales by 40%"
    },
    {
      title: "Banking Risk Management",
      description: "Financial institutions protecting assets with AI-powered risk detection and compliance automation",
      icon: DollarSign,
      impact: "Reduce losses by 70%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Innovative AI Services Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover our revolutionary AI services launched in 2026. Transform business operations, customer experiences, and financial risk management with cutting-edge AI technology." />
        <meta name="keywords" content="AI services 2026, business automation, customer analytics, financial risk management, AI platforms" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2 text-purple-400" />
                New in 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Innovative AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the future of business technology with our revolutionary AI platforms designed to transform 
                operations, customer experiences, and risk management across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Explore All Services
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Three powerful categories of AI services designed to transform every aspect of your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{category.name}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services Showcase */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">AI Platforms</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our latest AI-powered solutions that are setting new industry standards and driving unprecedented business transformation.
              </p>
            </motion.div>

            <div className="space-y-12">
              {newServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="text-2xl font-bold text-purple-400 mb-6">{service.price}</div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        to={service.href}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                    
                    <div>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-white font-semibold mb-4">Key Benefits:</h4>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Impact</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading companies are already transforming their businesses with our innovative AI platforms.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm">
                    {useCase.impact}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join the AI revolution and experience unprecedented business transformation. 
                Start your journey with our innovative AI platforms today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Need Help Getting Started?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI experts are here to help you implement the perfect AI strategy for your business transformation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://ziontechgroup.com/contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <a
                    href="https://ziontechgroup.com/services"
                    className="inline-flex items-center px-6 py-3 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                  >
                    View All Services
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
