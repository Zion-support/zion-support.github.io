import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Zap,
  Target,
  Users,
  Brain,
  Shield,
  Rocket,
  Globe,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  Activity,
  Code,
  Database,
  Server,
  Network,
  Eye,
  Heart,
  Building,
  Briefcase,
  TestTube,
  GraduationCap,
  HelpCircle,
  Lock,
  Cpu,
  Cloud,
  Smartphone,
  Monitor,
  PieChart,
  LineChart
} from 'lucide-react';

export function DataAnalyticsPage() {
  const analyticsServices = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights and reports',
      icon: BarChart3,
      href: '/services/business-intelligence',
      features: ['Interactive Dashboards', 'Custom Reports', 'KPI Tracking', 'Data Visualization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes using advanced machine learning',
      icon: Brain,
      href: '/services/predictive-analytics',
      features: ['Trend Forecasting', 'Risk Assessment', 'Customer Segmentation', 'Demand Planning'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data streams in real-time for instant insights',
      icon: Activity,
      href: '/services/real-time-analytics',
      features: ['Live Monitoring', 'Stream Processing', 'Instant Alerts', 'Performance Tracking'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Data Warehousing',
      description: 'Build scalable data warehouses for centralized data management',
      icon: Database,
      href: '/services/data-warehousing',
      features: ['Data Modeling', 'ETL Processes', 'Data Quality', 'Scalable Architecture'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Advanced Analytics',
      description: 'Deep dive analytics with statistical modeling and machine learning',
      icon: TrendingUp,
      href: '/services/advanced-analytics',
      features: ['Statistical Analysis', 'ML Models', 'A/B Testing', 'Correlation Analysis'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Data Visualization',
      description: 'Create compelling visual representations of complex data',
      icon: PieChart,
      href: '/services/data-visualization',
      features: ['Interactive Charts', 'Custom Dashboards', 'Storytelling', 'Mobile Responsive'],
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const analyticsCapabilities = [
    {
      title: 'Data Processing',
      description: 'Handle large-scale data processing and transformation',
      icon: Server,
      features: ['Big Data Processing', 'ETL Pipelines', 'Data Cleansing', 'Format Conversion']
    },
    {
      title: 'Machine Learning',
      description: 'Implement ML algorithms for predictive and prescriptive analytics',
      icon: Brain,
      features: ['Predictive Models', 'Classification', 'Regression', 'Clustering']
    },
    {
      title: 'Data Governance',
      description: 'Ensure data quality, security, and compliance',
      icon: Shield,
      features: ['Data Quality', 'Security Policies', 'Compliance', 'Access Control']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize analytics performance and query efficiency',
      icon: Zap,
      features: ['Query Optimization', 'Indexing', 'Caching', 'Parallel Processing']
    }
  ];

  const industries = [
    { name: 'Finance', icon: Building, description: 'Risk analysis and financial modeling' },
    { name: 'Healthcare', icon: Heart, description: 'Patient analytics and medical insights' },
    { name: 'Retail', icon: Users, description: 'Customer behavior and sales analytics' },
    { name: 'Manufacturing', icon: Activity, description: 'Production optimization and quality control' },
    { name: 'Marketing', icon: TrendingUp, description: 'Campaign performance and ROI analysis' },
    { name: 'Logistics', icon: Rocket, description: 'Supply chain optimization and route planning' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Data Analytics</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform raw data into actionable insights that drive business growth. 
              Our advanced analytics platform combines machine learning, real-time 
              processing, and intuitive visualization to unlock the power of your data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Get Analytics</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/20 hover:border-white/40"
              >
                <span>View All Services</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Analytics Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive analytics platform provides the tools and expertise 
              to extract maximum value from your data assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-400 mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Analytics Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our comprehensive range of data analytics services designed to 
              transform your data into strategic business advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.href}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our data analytics solutions are tailored to meet the unique challenges 
              and opportunities across diverse industry sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Benefits of Data Analytics
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Data-driven decision making delivers measurable improvements that drive 
            business growth and competitive advantage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Better Decisions</h3>
              <p className="text-blue-100">Data-driven insights for strategic planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Improved Efficiency</h3>
              <p className="text-blue-100">Optimize processes and resource allocation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Customer Insights</h3>
              <p className="text-blue-100">Understand and serve customers better</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Get Analytics Solution</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Transform your business with data-driven insights. Our analytics experts 
            are ready to help you harness the full potential of your data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start Analytics Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-semibold text-lg border-2 border-white"
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataAnalyticsPage;