import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Users, 
  Database, 
  Zap, 
  Eye, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Shield,
  Globe,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  ScatterPlot,
  HeatMap,
  Gauge,
  Calendar,
  Filter,
  Search,
  Download,
  Share2,
  Settings,
  AlertTriangle,
  Lightbulb,
  Rocket,
  FileText,
  ShoppingCart,
  Heart,
  Factory
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export function AIBusinessIntelligencePage() {
  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Monitor your business metrics in real-time with live dashboards and instant alerts',
      icon: Activity,
      benefits: ['Instant insights', 'Proactive monitoring', 'Quick response times']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning algorithms',
      icon: TrendingUp,
      benefits: ['Future planning', 'Risk mitigation', 'Opportunity identification']
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into intuitive charts, graphs, and interactive dashboards',
      icon: BarChart3,
      benefits: ['Clear insights', 'Better decision making', 'Stakeholder communication']
    },
    {
      title: 'Custom Reporting',
      description: 'Generate tailored reports for different departments and stakeholders',
      icon: FileText,
      benefits: ['Relevant insights', 'Department-specific views', 'Automated delivery']
    },
    {
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources and systems',
      icon: Database,
      benefits: ['Unified view', 'Data consistency', 'Reduced silos']
    },
    {
      title: 'Advanced AI Insights',
      description: 'Leverage artificial intelligence to uncover hidden patterns and correlations',
      icon: Brain,
      benefits: ['Deep analysis', 'Pattern recognition', 'Actionable insights']
    }
  ];

  const analyticsTypes = [
    {
      title: 'Descriptive Analytics',
      description: 'What happened in the past',
      icon: BarChart,
      examples: ['Sales reports', 'Customer demographics', 'Performance metrics']
    },
    {
      title: 'Diagnostic Analytics',
      description: 'Why did it happen',
      icon: Search,
      examples: ['Root cause analysis', 'Drill-down capabilities', 'Correlation studies']
    },
    {
      title: 'Predictive Analytics',
      description: 'What will happen next',
      icon: TrendingUp,
      examples: ['Sales forecasting', 'Customer churn prediction', 'Demand planning']
    },
    {
      title: 'Prescriptive Analytics',
      description: 'What should we do about it',
      icon: Target,
      examples: ['Recommendation engines', 'Optimization models', 'Action planning']
    }
  ];

  const industries = [
    {
      title: 'Retail & E-commerce',
      description: 'Customer behavior analysis, inventory optimization, sales forecasting',
      icon: ShoppingCart,
      metrics: ['Customer Lifetime Value', 'Conversion Rates', 'Inventory Turnover']
    },
    {
      title: 'Healthcare',
      description: 'Patient outcomes, operational efficiency, resource allocation',
      icon: Heart,
      metrics: ['Patient Satisfaction', 'Treatment Effectiveness', 'Resource Utilization']
    },
    {
      title: 'Finance',
      description: 'Risk assessment, fraud detection, portfolio optimization',
      icon: DollarSign,
      metrics: ['Risk Metrics', 'ROI Analysis', 'Fraud Detection Rate']
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, predictive maintenance, supply chain optimization',
      icon: Factory,
      metrics: ['Quality Metrics', 'Equipment Uptime', 'Supply Chain Efficiency']
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real data instead of gut feelings',
      icon: Target
    },
    {
      title: 'Improved Efficiency',
      description: 'Identify bottlenecks and optimize processes for better performance',
      icon: Zap
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with actionable insights',
      icon: Star
    },
    {
      title: 'Cost Reduction',
      description: 'Identify cost-saving opportunities and optimize resource allocation',
      icon: DollarSign
    },
    {
      title: 'Better Customer Experience',
      description: 'Understand customer needs and preferences for improved satisfaction',
      icon: Users
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential risks before they become problems',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SEO 
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with AI-powered business intelligence solutions. Get real-time insights, predictive analytics, and intelligent automation."
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI Business Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.
              Make smarter decisions, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20" />
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful BI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable business intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Types of Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From understanding the past to predicting the future, our platform covers all analytics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>• {example}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored BI solutions designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-cyan-400">Key Metrics:</h4>
                  <ul className="space-y-1">
                    {industry.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our BI Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of intelligent business analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with intelligent analytics and AI-powered insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AIBusinessIntelligencePage;