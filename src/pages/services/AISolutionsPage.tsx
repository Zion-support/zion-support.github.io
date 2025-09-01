import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Cpu,
  Database,
  Network,
  Globe,
  Rocket,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  DollarSign,
  Settings,
  Code,
  Server,
  Cloud,
  Lock,
  Eye,
  Activity,
  MessageCircle,
  FileText,
  Palette,
  Smartphone,
  Wifi,
  Atom
} from 'lucide-react';

export function AISolutionsPage() {
  const aiServices = [
    {
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      icon: BarChart3,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Content Creation",
      description: "Generate high-quality, engaging content at scale with our intelligent content creation tools.",
      icon: FileText,
      features: ["Blog Posts", "Social Media Content", "Email Campaigns", "Product Descriptions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your digital assets with AI-powered threat detection and response systems.",
      icon: Shield,
      features: ["Threat Detection", "Automated Response", "Risk Assessment", "Compliance Monitoring"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "AI Financial Analytics",
      description: "Optimize your financial operations with intelligent forecasting and risk management.",
      icon: TrendingUp,
      features: ["Market Analysis", "Risk Assessment", "Portfolio Optimization", "Fraud Detection"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Healthcare Analytics",
      description: "Improve patient outcomes with AI-driven healthcare insights and predictive diagnostics.",
      icon: Activity,
      features: ["Patient Monitoring", "Diagnostic Support", "Treatment Optimization", "Health Predictions"],
      color: "from-teal-500 to-blue-500"
    },
    {
      title: "AI HR Platform",
      description: "Streamline your human resources with intelligent recruitment and employee management.",
      icon: Users,
      features: ["Talent Acquisition", "Performance Analytics", "Employee Engagement", "Workforce Planning"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline workflows",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Better Decision Making",
      description: "Data-driven insights for strategic planning",
      icon: Target,
      color: "text-blue-400"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs through automation",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Enhanced Security",
      description: "Advanced threat detection and prevention",
      icon: Lock,
      color: "text-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed for the future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Our AI Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* AI Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our AI Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced AI Technology Stack
          </h2>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
                <p className="text-gray-300 text-sm">Advanced ML algorithms for pattern recognition and prediction</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600/20 rounded-full mb-4">
                  <Atom className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deep Learning</h3>
                <p className="text-gray-300 text-sm">Neural networks for complex data processing</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4">
                  <Cpu className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Natural Language Processing</h3>
                <p className="text-gray-300 text-sm">Text analysis and language understanding</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                  <Eye className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-300 text-sm">Image and video analysis capabilities</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Financial Services</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">40% Increase in Trading Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Our AI-powered trading platform helped a major financial institution achieve 40% higher trading efficiency 
                and 25% reduction in risk exposure.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Implementation: 6 months</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold">Healthcare</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">90% Accuracy in Diagnosis</h3>
              <p className="text-gray-300 mb-4">
                Our AI diagnostic system achieved 90% accuracy in early disease detection, 
                helping healthcare providers improve patient outcomes significantly.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                <span>Implementation: 8 months</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already leveraging our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default AISolutionsPage;