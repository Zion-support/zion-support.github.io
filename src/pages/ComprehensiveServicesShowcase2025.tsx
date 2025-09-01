import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Heart, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  Globe,
  BarChart3,
  Target,
  Clock,
  DollarSign,
  Star,
  Award,
  CheckCircle,
  Database,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  AlertCircle,
  Mail,
  Cpu,
  PieChart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const ComprehensiveServicesShowcase2025: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Business Intelligence Platform",
      description: "Transform your business data into actionable intelligence with our cutting-edge AI platform. Get real-time insights, predictive analytics, and automated reporting that drive growth.",
      features: [
        "AI-Powered Analytics",
        "Predictive Insights",
        "Real-time Dashboards",
        "User Behavior Analysis",
        "Goal Tracking",
        "Automated Reporting"
      ],
      pricing: "Starting at $299/month",
      link: "/services/ai-business-intelligence-platform",
      color: "from-blue-500 to-purple-600",
      benefits: ["300%+ ROI Improvement", "40+ hours saved monthly", "25%+ revenue growth"]
    },
    {
      icon: Atom,
      title: "Quantum AI Trading Platform",
      description: "Revolutionize your trading with the world's first quantum-powered AI platform. Experience unprecedented speed, accuracy, and profitability in global markets.",
      features: [
        "Quantum Computing Power",
        "Advanced AI Models",
        "Real-time Execution",
        "Enterprise Security",
        "Predictive Analytics",
        "Global Market Access"
      ],
      pricing: "Starting at $1,499/month",
      link: "/services/quantum-ai-trading-platform",
      color: "from-purple-500 to-pink-600",
      benefits: ["500%+ ROI Improvement", "0.001ms execution speed", "87%+ success rate"]
    },
    {
      icon: Heart,
      title: "AI Healthcare Analytics Platform",
      description: "Transform healthcare delivery with our advanced AI platform. Get real-time insights, predictive analytics, and evidence-based recommendations that improve patient outcomes.",
      features: [
        "Patient Outcome Prediction",
        "Clinical Decision Support",
        "Population Health Analytics",
        "HIPAA Compliant Security",
        "Care Team Collaboration",
        "Predictive Analytics"
      ],
      pricing: "Starting at $2,499/month",
      link: "/services/ai-healthcare-analytics-platform",
      color: "from-green-500 to-blue-600",
      benefits: ["35%+ cost reduction", "50+ hours saved weekly", "28%+ outcome improvement"]
    }
  ];

  const industries = [
    "Healthcare",
    "Finance & Banking",
    "Manufacturing",
    "Retail & E-commerce",
    "Technology",
    "Education",
    "Government",
    "Energy & Utilities"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Performance Improvement",
      value: "300%+",
      description: "Average ROI improvement across all services"
    },
    {
      icon: Clock,
      title: "Time Savings",
      value: "50+ hours",
      description: "Per week saved on manual processes"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      value: "95%+",
      description: "Client satisfaction rate across all platforms"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      value: "100%",
      description: "Compliance with industry standards"
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
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 rounded-full">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive AI Services Showcase 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our cutting-edge AI-powered solutions designed to transform industries 
              and drive unprecedented growth. From business intelligence to quantum trading, 
              we have the technology to revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Explore Services
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Revolutionary AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is built with cutting-edge technology and designed to deliver 
              measurable results for your business.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-700 rounded-2xl p-8 hover:bg-slate-600 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`p-4 bg-gradient-to-r ${service.color} rounded-full w-fit mb-6`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="px-3 py-1 bg-slate-600 text-green-400 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Core Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="text-2xl font-bold text-white">
                        {service.pricing}
                      </div>
                      <a
                        href={service.link}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-600 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-4 text-center">Technology Stack</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Brain className="h-6 w-6 text-blue-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">AI/ML</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Database className="h-6 w-6 text-green-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">Big Data</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Shield className="h-6 w-6 text-purple-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">Security</p>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-slate-500 rounded-lg mb-2">
                          <Zap className="h-6 w-6 text-yellow-400 mx-auto" />
                        </div>
                        <p className="text-sm text-gray-300">Performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are designed to work across various industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses that have transformed their operations with our AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations that are already experiencing the future with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">
                  <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesShowcase2025;
