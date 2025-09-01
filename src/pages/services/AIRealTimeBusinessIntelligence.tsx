import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Brain,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Globe,
  Database,
  Cpu,
  Shield,
  Zap,
  Eye,
  Target,
  Users,
  DollarSign,
  PieChart,
  Activity,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  Calendar,
  FileText,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';

const AIRealTimeBusinessIntelligence: React.FC = () => {
  const features = [
    "Real-time data processing and analytics",
    "Predictive modeling and forecasting",
    "Automated report generation",
    "Interactive dashboards and visualizations",
    "Natural language query processing",
    "Anomaly detection and alerting",
    "Multi-source data integration",
    "Custom KPI tracking",
    "Mobile-responsive analytics",
    "API access for custom integrations"
  ];

  const benefits = [
    "Reduce decision-making time by 70%",
    "Improve forecast accuracy by 40%",
    "Automate 80% of reporting tasks",
    "Enable real-time business monitoring",
    "Increase data-driven insights"
  ];

  const useCases = [
    "Executive dashboards",
    "Sales performance tracking",
    "Financial reporting",
    "Operational monitoring",
    "Strategic planning"
  ];

  const targetAudience = [
    "Business executives",
    "Data analysts",
    "Operations managers",
    "Financial controllers",
    "Sales managers"
  ];

  const technology = [
    "Python",
    "TensorFlow",
    "Apache Kafka",
    "React",
    "Node.js",
    "PostgreSQL"
  ];

  const integrations = [
    "Salesforce",
    "HubSpot",
    "QuickBooks",
    "Shopify",
    "Google Analytics"
  ];

  const security = [
    "SOC 2",
    "GDPR",
    "End-to-end encryption",
    "Role-based access control"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Real-Time Business Intelligence Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced real-time analytics platform that provides instant insights, predictive modeling, and automated reporting for data-driven decision making." />
        <meta name="keywords" content="AI business intelligence, real-time analytics, predictive modeling, data analytics, business insights, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-real-time-business-intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Real-Time
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Business Intelligence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced real-time analytics platform that provides instant insights, predictive modeling, 
              and automated reporting for data-driven decision making.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Real-time Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Predictive Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>Automated Reporting</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                Get Started Today
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold"
              >
                <Eye className="w-6 h-6" />
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-black/50 backdrop-blur-sm border-t border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-400 mb-2" />
              <span className="text-gray-300 text-sm">Phone</span>
              <a href="tel:+13024640950" className="text-white font-semibold hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-gray-300 text-sm">Email</span>
              <a href="mailto:kleber@ziontechgroup.com" className="text-white font-semibold hover:text-purple-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-green-400 mb-2" />
              <span className="text-gray-300 text-sm">Website</span>
              <a href="https://ziontechgroup.com" className="text-white font-semibold hover:text-green-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Transform Your Business with Real-Time Intelligence
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Our AI-powered Business Intelligence platform delivers instant insights and predictive analytics 
                that enable faster, more informed decision-making across your organization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Real-time data processing and analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Advanced predictive modeling capabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Automated reporting and visualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-gray-300">Natural language query processing</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Service Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Price:</span>
                  <span className="text-green-400 font-semibold">$899/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Market Price:</span>
                  <span className="text-white">$899 - $3,999/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ROI:</span>
                  <span className="text-green-400 font-semibold">300-500%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Delivery:</span>
                  <span className="text-white">4-6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Innovation Level:</span>
                  <span className="text-purple-400 font-semibold">Revolutionary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Support Level:</span>
                  <span className="text-blue-400 font-semibold">Premium</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our AI Real-Time Business Intelligence platform comes packed with cutting-edge features 
              designed to transform your data into actionable insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Feature {index + 1}</h3>
                </div>
                <p className="text-gray-300">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Measurable Benefits</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Experience tangible improvements in your business operations with our AI-powered platform.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Benefit {index + 1}</h3>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover how our AI Real-Time Business Intelligence platform can transform your specific business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Target Audience</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our platform is designed for professionals who need real-time insights to make better decisions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6 text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{audience}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Technical Specifications</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Built with cutting-edge technology to ensure reliability, security, and performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-8 h-8 text-blue-400" />
                Technology Stack
              </h3>
              <div className="space-y-3">
                {technology.map((tech, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400" />
                Integrations
              </h3>
              <div className="space-y-3">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{integration}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-400" />
                Security & Compliance
              </h3>
              <div className="space-y-3">
                {security.map((sec, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{sec}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">Uptime: 99.9%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-semibold">API Endpoints: 200</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Join leading organizations that are already leveraging our AI-powered real-time business intelligence 
              platform to make faster, more informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                Call Now: +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
              >
                <Mail className="w-6 h-6" />
                Email: kleber@ziontechgroup.com
              </a>
              <a
                href="https://ziontechgroup.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                <Globe className="w-6 h-6" />
                Visit Website
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIRealTimeBusinessIntelligence;