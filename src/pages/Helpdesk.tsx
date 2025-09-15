import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Users, 
  Ticket, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  Filter,
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Shield,
  Cloud,
  Zap,
  Target,
  Activity,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  RefreshCw,
  Eye,
  Lock,
  Database,
  Network,
  Smartphone,
  Monitor,
  Headphones,
  Mail,
  Phone,
  Video,
  FileText,
  Calendar,
  Tag,
  UserCheck,
  UserX,
  TrendingUp,
  PieChart,
  LineChart
} from 'lucide-react';

export default function Helpdesk() {
  const features = [
    {
      icon: Ticket,
      title: "Ticket Management",
      description: "Comprehensive ticket tracking and resolution workflow",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-agent support with role-based access control",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "SLA Management",
      description: "Service level agreement monitoring and alerts",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Search,
      title: "Knowledge Base",
      description: "Self-service portal with intelligent search",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Performance metrics and customer satisfaction tracking",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security and data protection",
      color: "from-red-500 to-pink-500"
    }
  ];

  const capabilities = [
    {
      title: "Multi-Channel Support",
      description: "Handle support requests across email, chat, phone, and social media",
      icon: Globe,
      benefits: ["Unified inbox", "Channel routing", "Response templates"]
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent ticket routing and automated responses",
      icon: Cpu,
      benefits: ["Smart categorization", "Auto-assignment", "Predictive analytics"]
    },
    {
      title: "Customer Self-Service",
      description: "Empower customers with knowledge base and FAQ systems",
      icon: Users,
      benefits: ["Knowledge management", "Community forums", "Video tutorials"]
    },
    {
      title: "Performance Analytics",
      description: "Monitor team performance and customer satisfaction metrics",
      icon: TrendingUp,
      benefits: ["Response time tracking", "Resolution rates", "CSAT scores"]
    }
  ];

  const integrations = [
    "Slack", "Microsoft Teams", "Zendesk", "Salesforce", "Jira", 
    "ServiceNow", "HubSpot", "Intercom", "Freshdesk", "Help Scout"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Helpdesk Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Streamline customer support operations with our comprehensive helpdesk platform. 
              Deliver exceptional customer experiences with intelligent automation and powerful analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Helpdesk Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive helpdesk platform provides everything you need to deliver exceptional customer support.
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
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our helpdesk platform can transform your customer support operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Support?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the customer support revolution with Zion Tech Group. Our helpdesk platform is designed to drive efficiency, 
              improve customer satisfaction, and scale your support operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-cyan-400/30 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 hover:border-cyan-400/50 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}