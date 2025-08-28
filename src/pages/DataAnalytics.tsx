import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Cpu,
  Lock,
  Eye,
  Activity,
  PieChart,
  LineChart,
  Scatter,
  Calendar,
  Clock,
  Filter,
  Search,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Bell,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Info
} from 'lucide-react';

export default function DataAnalytics() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive business intelligence and data visualization tools",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms for predictive analytics and pattern recognition",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Real-time Monitoring",
      description: "Live dashboards and instant alerts for critical business metrics",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Enterprise-grade security and compliance for sensitive data",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud platforms and data warehouses",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Collaborative Analytics",
      description: "Team-based data exploration and shared insights",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable insights for strategic decision-making",
      icon: Target,
      benefits: ["Performance tracking", "KPI monitoring", "Trend analysis"]
    },
    {
      title: "Customer Analytics",
      description: "Understand customer behavior and preferences for improved engagement",
      icon: Users,
      benefits: ["Customer segmentation", "Behavioral analysis", "Churn prediction"]
    },
    {
      title: "Financial Analytics",
      description: "Monitor financial performance and identify optimization opportunities",
      icon: TrendingUp,
      benefits: ["Revenue analysis", "Cost optimization", "Risk assessment"]
    },
    {
      title: "Operational Analytics",
      description: "Optimize business processes and improve operational efficiency",
      icon: Activity,
      benefits: ["Process optimization", "Resource allocation", "Performance monitoring"]
    }
  ];

  const technologies = [
    "Python & R", "Apache Spark", "TensorFlow", "Power BI", "Tableau", 
    "AWS Redshift", "Google BigQuery", "Snowflake", "Apache Kafka", "Elasticsearch"
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
              Data Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge data analytics solutions. 
              Unlock insights, drive decisions, and accelerate growth with our comprehensive analytics platform.
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
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive data analytics platform provides everything you need to turn data into actionable insights.
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

      {/* Use Cases Section */}
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
              Analytics Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our data analytics solutions can transform your business across different domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
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
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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

      {/* Technologies Section */}
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
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with the latest technologies and frameworks for maximum performance and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
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
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the data-driven revolution with Zion Tech Group. Our analytics solutions are designed to drive growth, 
              efficiency, and competitive advantage for your business.
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