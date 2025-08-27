import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Cloud,
  CheckCircle,
  Star,
  Zap,
  Target,
  Rocket,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Database,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  Calendar,
  DollarSign,
  Percent
} from 'lucide-react';

export default function AIBusinessIntelligenceAnalytics() {
  const features = [
    "AI-Powered Predictive Analytics",
    "Real-time Data Visualization",
    "Intelligent Business Insights",
    "Automated Report Generation",
    "Advanced Data Mining",
    "Natural Language Query Interface",
    "Multi-Source Data Integration",
    "Custom Dashboard Creation"
  ];

  const benefits = [
    "Increase revenue by 25% through data-driven insights",
    "Reduce decision-making time by 70% with instant analytics",
    "Improve operational efficiency by 40%",
    "Identify new business opportunities with predictive modeling",
    "Reduce costs by 30% through optimization insights",
    "Enhance customer satisfaction by 35%",
    "Achieve 95% forecast accuracy",
    "Enable real-time business monitoring"
  ];

  const capabilities = [
    {
      category: "Data Analytics",
      items: [
        "Real-time data processing and analysis",
        "Advanced statistical modeling",
        "Machine learning algorithms",
        "Predictive analytics and forecasting",
        "Anomaly detection and alerting"
      ]
    },
    {
      category: "Business Intelligence",
      items: [
        "Interactive dashboards and reports",
        "KPI tracking and monitoring",
        "Performance benchmarking",
        "Trend analysis and insights",
        "Competitive intelligence"
      ]
    },
    {
      category: "Data Integration",
      items: [
        "Multi-source data connectors",
        "ETL/ELT data pipelines",
        "Real-time data streaming",
        "Data quality management",
        "Master data management"
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Natural language processing",
        "Automated insights generation",
        "Intelligent recommendations",
        "Pattern recognition",
        "Cognitive analytics"
      ]
    }
  ];

  const useCases = [
    "Financial Performance Analysis",
    "Customer Behavior Insights",
    "Supply Chain Optimization",
    "Sales Forecasting & Planning",
    "Marketing Campaign Analytics",
    "Operational Performance Monitoring",
    "Risk Assessment & Management",
    "Product Performance Analysis"
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$19,999",
      period: "one-time setup",
      features: [
        "Basic AI analytics platform",
        "Up to 5 data sources",
        "Standard dashboards",
        "Basic reporting",
        "Email support",
        "Cloud deployment"
      ]
    },
    {
      name: "Professional",
      price: "$39,999",
      period: "one-time setup",
      features: [
        "Advanced AI analytics",
        "Up to 20 data sources",
        "Custom dashboards",
        "Advanced reporting",
        "Priority support",
        "On-premise deployment option",
        "Advanced security features"
      ]
    },
    {
      name: "Enterprise",
      price: "$79,999",
      period: "one-time setup",
      features: [
        "Full AI BI platform",
        "Unlimited data sources",
        "Custom analytics workflows",
        "24/7 dedicated support",
        "Hybrid deployment options",
        "Advanced analytics & ML",
        "Custom integrations",
        "White-label solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      <SEO 
        title="AI Business Intelligence Analytics | Zion Tech Group"
        description="Revolutionary AI-powered business intelligence and analytics platform that transforms data into actionable insights and predictive business intelligence."
        keywords="AI business intelligence, analytics platform, data insights, predictive analytics, business analytics, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl mb-8 border border-green-400/30">
              <Brain className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                AI Business Intelligence
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transform your business data into actionable intelligence with our AI-powered analytics platform. 
              Get real-time insights, predictive analytics, and intelligent recommendations that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
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
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven business intelligence and analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 border border-green-400/30">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Transformative Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See measurable improvements across your entire business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Comprehensive Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI-powered business intelligence and analytics solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8 hover:bg-white/10 hover:border-green-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mr-4 border border-green-400/30">
                    {index === 0 && <BarChart3 className="w-6 h-6 text-green-400" />}
                    {index === 1 && <TrendingUp className="w-6 h-6 text-green-400" />}
                    {index === 2 && <Database className="w-6 h-6 text-green-400" />}
                    {index === 3 && <Brain className="w-6 h-6 text-green-400" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
              Business Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform every aspect of your business with intelligent analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:bg-white/10 hover:border-green-400/40 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-emerald-400/30">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold">{useCase}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business intelligence needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.name === 'Professional' 
                    ? 'border-green-400/50 bg-gradient-to-b from-green-500/10 to-transparent' 
                    : 'border-green-400/20'
                } hover:border-green-400/40 transition-all duration-300`}
              >
                {plan.name === 'Professional' && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today to learn how our AI business intelligence platform can drive growth and efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+1 302 464 0950</p>
              <a 
                href="tel:+13024640950" 
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <Mail className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Send Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <MapPin className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-4">364 E Main St STE 1008, Middletown DE 19709</p>
              <a 
                href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                View on Map
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}