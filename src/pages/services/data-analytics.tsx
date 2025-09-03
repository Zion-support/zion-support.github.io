<<<<<<< HEAD
import React from 'react'; import { motion  } from 'framer-motion'; import { SEO } from '../../components/SEO'; import { ; BarChart3,; TrendingUp,; Database,; PieChart,; LineChart,; Activity,; Zap,; Shield,; Target,; CheckCircle,; ArrowRight,; Play,; Users,; Building,; Factory,; Car,; Home,; City,; Leaf,; Brain,; Cpu,; Network,; Eye,; Search,; Filter,; Download,; Share2;  } from 'lucide-react'; ; const DataAnalyticsPage: React.FC = () => {; const features = [; {; icon: BarChart3,; title: 'Advanced Analytics',; description: 'Sophisticated statistical analysis and predictive modeling'; },; {; icon: TrendingUp,; title: 'Real-time Dashboards',; description: 'Live monitoring and visualization of key performance indicators'; },; {; icon: Database,; title: 'Data Integration',; description: 'Seamless connection with multiple data sources and systems'; },; {; icon: PieChart,; title: 'Interactive Visualizations',; description: 'Dynamic charts and graphs for better data understanding'; },; {; icon: LineChart,; title: 'Trend Analysis',; description: 'Historical data analysis and future trend forecasting'; },; {; icon: Activity,; title: 'Performance Monitoring',; description: 'Continuous tracking of business metrics and KPIs'; }; ]; ; const capabilities = [; {; icon: Brain,; title: 'Machine Learning',; description: 'AI-powered predictive analytics and pattern recognition'; },; {; icon: Cpu,; title: 'Big Data Processing',; description: 'Handle massive datasets with high-performance computing'; },; {; icon: Network,; title: 'Data Warehousing',; description: 'Centralized data storage and management solutions'; },; {; icon: Eye,; title: 'Data Visualization',; description: 'Beautiful and intuitive charts, graphs, and dashboards'; },; {; icon: Search,; title: 'Advanced Search',; description: 'Powerful querying and filtering capabilities'; },; {; icon: Filter,; title: 'Data Cleansing',; description: 'Automated data quality improvement and validation'; }; ]; ; const useCases = [; {; icon: Building,; title: 'Business Intelligence',; description: 'Executive dashboards and strategic decision support'; },; {; icon: Factory,; title: 'Manufacturing Analytics',; description: 'Production optimization and quality control insights'; },; {; icon: Car,; title: 'Sales Analytics',; description: 'Customer behavior analysis and sales forecasting'; },; {; icon: Home,; title: 'Marketing Analytics',; description: 'Campaign performance and ROI measurement'; },; {; icon: Leaf,; title: 'Financial Analytics',; description: 'Risk assessment and financial performance tracking'; },; {; icon: City,; title: 'Operational Analytics',; description: 'Process optimization and efficiency improvements'; }; ]; ; const benefits = [; 'Improve decision-making with data-driven insights',; 'Increase operational efficiency by 25-35%',; 'Reduce costs through better resource allocation',; 'Identify new business opportunities and trends',; 'Enhance customer experience and satisfaction',; 'Streamline reporting and compliance processes'; ]; ; return(; <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"";" <SEO ";"";" title="Data Analytics & Business Intelligence - Zion Tech Group";"";" description="Transform your data into actionable insights with our advanced Data Analytics & BI platform.Real-time dashboards, predictive analytics, and comprehensive reporting for data-driven decisions.";";" />;"";" {}";"";" <section className="relative pt-32 pb-20 overflow-hidden">";"";" <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>";"";" <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" animate={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center";"";" >";"";" <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-400/10 text-purple-400 text-sm font-medium mb-6">";"";" <BarChart3 className="w-4 h-4 mr-2" />;";" Data Analytics & BI;"";" </div>";"";" <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">;"";" Data Analytics &";"";" <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">;";" Business Intelligence;";" </span>;"";" </h1>";"";" <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">;" Transform raw data into actionable insights with our advanced analytics platform.;";" Real-time dashboards, predictive analytics, and comprehensive reporting for;";" data-driven decision making.;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200";"";" >";"";" <Play className="w-5 h-5 mr-2" />; Watch Demo;" </motion.button>;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200";"";" >";"";" <ArrowRight className="w-5 h-5 mr-2" />; Learn More; </motion.button>; </div>;" </motion.div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Platform Features;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Comprehensive analytics capabilities designed for enterprise-scale data operations;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {features.map((feature, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-400/50 hover:bg-slate-800/70 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">";"";" <feature.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">;";" {feature.title};"";" </h3>";"";" <p className="text-gray-400">; {feature.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Advanced Capabilities;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Cutting-edge technologies for comprehensive data analysis and insights;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {capabilities.map((capability, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-400/50 hover:bg-slate-800/70 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">";"";" <capability.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">;";" {capability.title};"";" </h3>";"";" <p className="text-gray-400">; {capability.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Industry Applications;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Transform operations across diverse industries with data-driven insights;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">; {useCases.map((useCase, index) => (; <motion.div;" key={index};";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8, delay: index * 0.1 }}";"";" className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-purple-400/50 hover:bg-slate-800/70 transition-all duration-300";"";" >";"";" <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">";"";" <useCase.icon className="w-6 h-6 text-white" />;"";" </div>";"";" <h3 className="text-xl font-semibold text-white mb-2">;";" {useCase.title};"";" </h3>";"";" <p className="text-gray-400">; {useCase.description}; </p>; </motion.div>; ))};" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-slate-800/30">";"";" <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;" <motion.div;";" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="text-center mb-16";"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Business Benefits;"";" </h2>";"";" <p className="text-xl text-gray-300 max-w-2xl mx-auto">;" Measurable improvements in efficiency, decision-making, and business performance;";" </p>;";" </motion.div>;";"";" <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;" <motion.div;";" initial={{ opacity: 0, x: -20 }};";" whileInView={{ opacity: 1, x: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="space-y-4";";" >;"";" {benefits.slice(0, 3).map((benefit, index) => (";"";" <div key={index} className="flex items-center space-x-3">";"";" <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />";"";" <span className="text-gray-300">{benefit}</span>; </div>; ))}; </motion.div>;" <motion.div;";" initial={{ opacity: 0, x: 20 }};";" whileInView={{ opacity: 1, x: 0 }};"";" transition={{ duration: 0.8   }}";"";" className="space-y-4";";" >;"";" {benefits.slice(3).map((benefit, index) => (";"";" <div key={index} className="flex items-center space-x-3">";"";" <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />";"";" <span className="text-gray-300">{benefit}</span>; </div>; ))}; </motion.div>;" </div>;";" </div>;";" </section>;"";" {}";"";" <section className="py-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20">";"";" <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">; <motion.div;" initial={{ opacity: 0, y: 20 }};";" whileInView={{ opacity: 1, y: 0 }};";" transition={{ duration: 0.8   }};"";" >";"";" <h2 className="text-4xl font-bold text-white mb-4">;";" Ready to Unlock Your Data's Potential?;"";" </h2>";"";" <p className="text-xl text-gray-300 mb-8">;";" Discover how our Data Analytics platform can transform your business insights;"";" </p>";"";" <div className="flex flex-col sm:flex-row gap-4 justify-center">;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-600 transition-all duration-200";"";" >";"";" <Users className="w-5 h-5 mr-2" />; Schedule Consultation;" </motion.button>;";" <motion.button;";" whileHover={{ scale: 1.05   }};"";" whileTap={{ scale: 0.95   }}";"";" className="inline-flex items-center px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/10 transition-all duration-200";"";" >";"";" <ArrowRight className="w-5 h-5 mr-2" />; View Case Studies; </motion.button>; </div>; </motion.div>; </div>; </section>; </div>;" );";" };";" ;"";" export default DataAnalyticsPage;";"";"
=======
import React from "react"
import Link from "next/link"
import { Database, Brain, Check, ExternalLink, Phone, Mail, ArrowRight, Target, Zap, Shield, FileText, BarChart3 } from "lucide-react"
  );
export default function DataAnalytics() {
  const features = [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3"
  ]
  const useCases = [
    "Use Case 1",
    "Use Case 2",
    "Use Case 3"
  ]
  const pricing = [
      }
];
    {
      name: "Professional",
      price: "$799/mo",
      details: ["Up to 50 users", "Advanced features", "Priority support", "99.9% SLA"]
    }
  ];
    {
      name: "Enterprise",
      price: "$1,999/mo",
    }
  ];

  ]
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Database className="w-4 h-4 mr-2"  />
            AI-Powered Data Analytics Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Data Analytics Platform</h1>
          <p className="text-indigo-100 text-xl">
            Transform your data analytics operations with AI-powered tools that optimize performance, enhance scalability, and maximize efficiency.
          </p>
        </div>
      </section>
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Data Analytics Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}

            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime SLA.
            </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {pricing.map((tier, index) => (
                <div key={index} className="rounded-lg p-4 border border-gray-200 hover:border-indigo-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{tier.name}</div>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">{tier.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {tier.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}

                  </ul>
                </div>
              ))}

            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2"  />
              </Link>
              <Link href="/contact" className="px-5 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors inline-flex items-center">
                Contact Sales <Phone className="w-4 h-4 ml-2"  />
              </Link>
            </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Zap className="w-6 h-6 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-indigo-600 mr-3"  />
                  <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                </div>
                <p className="text-gray-600">Comprehensive data analytics solutions tailored for {industry.toLowerCase()}.</p>
              </div>
            ))}

          </div>
      </section>
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data Analytics?</h2>
          <p className="text-indigo-100 text-xl mb-8">
            Get started with our AI-powered data analytics platform today.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
              Get Started <ArrowRight className="w-4 h-4 ml-2"  />
            </Link>
            <Link href="/demo" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
              Schedule Demo <Mail className="w-4 h-4 ml-2"  />
            </Link>
          </div>
      </section>
    </div>
  ),
>>>>>>> main
