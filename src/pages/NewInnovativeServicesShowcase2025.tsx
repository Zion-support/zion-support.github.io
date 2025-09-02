import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Mail, 
  Link, 
  RotateCcw, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Globe,
  Smartphone,
  Clock,
  Target,
  DollarSign,
  Eye,
  MousePointer,
  Palette,
  Database,
  Cpu,
  Network,
  Lock,
  Phone,
  MapPin,
  PieChart,
  Activity,
  CreditCard,
  UserCheck,
  Settings,
  Package,
  Truck,
  AlertTriangle,
  FileText,
  QrCode,
  Brain,
  Lightbulb,
  Trophy,
  Calendar,
  Sparkles,
  Rocket
} from 'lucide-react';

const NewInnovativeServicesShowcase2025 = () => {
  const newServices = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "AI Autonomous Email Marketing Platform",
      description: "Transform your email marketing with AI that creates, sends, and optimizes campaigns automatically. Achieve 40% higher open rates and 80% time savings.",
      features: [
        "AI-Powered Content Generation",
        "Intelligent Audience Segmentation", 
        "Predictive Send Time Optimization",
        "Real-Time Performance Analytics",
        "Automated Campaign Orchestration",
        "Compliance & Deliverability"
      ],
      pricing: "$99 - $799/month",
      benefits: [
        "40% Higher Open Rates",
        "80% Time Savings", 
        "3x Better Targeting",
        "25% Higher ROI"
      ],
      href: "/services/ai-autonomous-email-marketing-platform",
      color: "from-blue-500 to-purple-500",
      category: "Marketing Automation"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "AI Affiliate Marketing Tracking Platform",
      description: "Maximize your affiliate marketing ROI with AI-powered tracking, fraud detection, and automated optimization. Achieve 35% higher conversions and 90% fraud reduction.",
      features: [
        "Smart Link Generation",
        "Intelligent Attribution",
        "AI Fraud Detection",
        "Predictive Analytics",
        "Automated Payments",
        "Compliance Management"
      ],
      pricing: "$149 - $999/month",
      benefits: [
        "35% Higher Conversions",
        "90% Fraud Reduction",
        "75% Time Savings",
        "40% Better ROI"
      ],
      href: "/services/ai-affiliate-marketing-tracking-platform",
      color: "from-green-500 to-blue-500",
      category: "Affiliate Marketing"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "AI E-commerce Return Management Platform",
      description: "Streamline your return process with AI-powered automation, fraud detection, and inventory optimization. Achieve 60% faster processing and 40% cost reduction.",
      features: [
        "AI-Powered Return Prediction",
        "Automated Return Processing",
        "Smart Return Labels",
        "Return Analytics Dashboard",
        "Fraud Detection",
        "Inventory Optimization"
      ],
      pricing: "$79 - $499/month",
      benefits: [
        "60% Faster Processing",
        "40% Cost Reduction",
        "85% Customer Satisfaction",
        "90% Fraud Prevention"
      ],
      href: "/services/ai-ecommerce-return-management-platform",
      color: "from-orange-500 to-red-500",
      category: "E-commerce"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "AI Learning Management System",
      description: "Transform your training and education with AI-powered personalized learning, automated content creation, and predictive analytics. Achieve 45% faster learning and 90% engagement rates.",
      features: [
        "AI-Powered Content Creation",
        "Adaptive Learning Paths",
        "Predictive Analytics",
        "Intelligent Video Processing",
        "Automated Assessment",
        "Compliance & Security"
      ],
      pricing: "$99 - $799/month",
      benefits: [
        "45% Faster Learning",
        "90% Engagement Rate",
        "70% Time Savings",
        "85% Completion Rate"
      ],
      href: "/services/ai-learning-management-system",
      color: "from-purple-500 to-pink-500",
      category: "Education Technology"
    }
  ];

  const categories = [
    {
      name: "Marketing Automation",
      icon: <Target className="w-6 h-6" />,
      count: 1,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Affiliate Marketing", 
      icon: <Link className="w-6 h-6" />,
      count: 1,
      color: "from-green-500 to-blue-500"
    },
    {
      name: "E-commerce",
      icon: <Package className="w-6 h-6" />,
      count: 1,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Education Technology",
      icon: <GraduationCap className="w-6 h-6" />,
      count: 1,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    {
      number: "4",
      label: "New AI Services",
      description: "Cutting-edge micro SAAS solutions"
    },
    {
      number: "40%",
      label: "Average Performance Improvement",
      description: "Across all new services"
    },
    {
      number: "75%",
      label: "Time Savings",
      description: "Through AI automation"
    },
    {
      number: "90%",
      label: "Customer Satisfaction",
      description: "Based on user feedback"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              New Innovative Services 2025
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Revolutionary AI-Powered
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Micro SAAS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our latest collection of AI-powered micro SAAS services designed to transform your business operations. 
              From email marketing automation to learning management systems, these innovative solutions deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our new services span across multiple categories, each designed to address specific business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {category.count} service{category.count !== 1 ? 's' : ''}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              New AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest collection of innovative AI-powered micro SAAS solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-blue-400 font-medium">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="text-lg font-semibold text-green-400">
                      {service.pricing}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={service.href}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors text-center flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <button className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg font-semibold transition-colors">
                    Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses using our AI-powered solutions to achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-300 mb-6">
                  Ready to revolutionize your business with our AI-powered solutions? Contact our team to learn more.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-white">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-white">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewInnovativeServicesShowcase2025;