import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { ;
  BarChart3,;
  Brain, ;
  Zap, ;
  CheckCircle,;
  Star,;
  TrendingUp,;
  Award,;
  Lock,;
  Database,;
  Cpu,;
  Network,;
  FileText,;
  MessageCircle,;
  Phone,;
  Mail,;
  MapPin,;
  Building,;
  Video,;
  Eye,;
  Target,;
  Users,;
  ArrowRight,;
  Key,;
  Fingerprint,;
  EyeOff,;
  Server,;
  Globe2,;
  ShieldCheck,;
  Wifi,;
  Smartphone,;
  Activity,;
  Clock,;
  BarChart,;
  PieChart,;
  GitBranch,;
  Code,;
  Package,;
  Play,;
  Settings,;
  Monitor,;
  Shield,;
  Rocket,;
  Globe,;
  Factory,;
  Car,;
  Heart,;
  LineChart,;
  Scatter,;
  Layers;
} from "lucide-react"
export default function DataAnalytics() {;
  const features = [;
    {;
      icon: BarChart3,title: 'Advanced Analytics',description: 'Comprehensive data analysis with machine learning and AI',color: 'from-blue-500 to-cyan-500'
    };
    {;
      icon: Brain,title: 'AI-Powered Insights',description: 'Intelligent data processing and predictive analytics',color: 'from-purple-500 to-pink-500'
    };
    {;
      icon: Database,title: 'Big Data Processing',description: 'Handle massive datasets with distributed computing',color: 'from-green-500 to-emerald-500'
    };
    {;
      icon: LineChart,title: 'Real-Time Analytics',description: 'Live data streaming and instant insights',color: 'from-yellow-500 to-orange-500'
    };
    {;
      icon: Shield,title: 'Data Security',description: 'Enterprise-grade security and compliance',color: 'from-red-500 to-pink-500'
    };
    {;
      icon: Globe,title: 'Data Visualization',description: 'Interactive dashboards and beautiful charts',color: 'from-indigo-500 to-blue-500'
    };
  ];
  const benefits = [;
    'Unlock insights from 100% of your data with AI analysisReduce decision-making time by 80% with real-time analytics',;
    'Improve business performance by 35% with data-driven insightsAutomate reporting and eliminate manual data processing',;
    'Scale analytics to handle any data volume or velocityEnsure data quality and accuracy with automated validation'
  ],;

  const useCases = [;
    {;
      title: 'Business Intelligence',description: 'Comprehensive BI dashboards and reporting',icon: BarChart3;
    };
    {;
      title: 'Customer Analytics',description: 'Deep customer insights and behavior analysis',icon: Users;
    };
    {;
      title: 'Financial Analytics',description: 'Risk assessment and financial performance analysis',icon: TrendingUp;
    };
    {;
      title: 'Operational Analytics',description: 'Process optimization and performance monitoring',icon: Activity;
    };
  ];
  const analyticsCapabilities = [;
    {;
      name: 'Data Processing',description: 'Advanced ETL and data transformation capabilities',examples: ['Data cleaningTransformation', 'Aggregation']
    },;
    {;
      name: 'Machine Learning',description: 'AI-powered predictive analytics and modeling',examples: ['Predictive modelsClassification', 'Clustering']
    },;
    {;
      name: 'Real-Time Streaming',description: 'Live data processing and instant analytics',examples: ['Stream processingEvent analytics', 'Live dashboards']
    },;
    {;
      name: 'Data Visualization',description: 'Interactive charts and comprehensive dashboards',examples: ['Custom chartsInteractive dashboards', 'Mobile views']
    };
  ],;

  return (
    <>;
      <SEO ;
        title="Data Analytics - Zion Tech Group"
        description="Revolutionary data analytics platform with AI-powered insights, real-time processing, and comprehensive visualization. Transform your data into actionable business intelligence."
        keywords="data analytics, business intelligence, AI analytics, big data, predictive analytics, data visualization, real-time analytics"
      />;
      ;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        {/* Hero Section */};
        <section className="relative overflow-hidden py-20 lg:py-32">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              className="[^"]*"
            >;
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-6">;
                <[^>]*/>
                Analytics Innovation;
              </[^>]*>
              ;
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">;
                Data;
                <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">;
                  Analytics;
                </[^>]*>
              </[^>]*>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Transform your data into actionable insights with our revolutionary analytics platform. ;
                AI-powered analysis, real-time processing, and beautiful visualizations that ;
                drive better business decisions and outcomes.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Get Started;
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  View Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
          ;
          {/* Background Elements */};
          <div className="absolute inset-0 overflow-hidden pointer-events-none">;
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></[^>]*>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Features Section */};
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Revolutionary Analytics Features;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our data analytics platform combines cutting-edge technology with practical ;
                applications to deliver unprecedented insights and intelligence.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {features.map((feature, index) => (;
                <motion.div
                  key={feature.title};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>;
                    <[^>]*/>
                  </[^>]*>
                  ;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">;
                    {feature.title};
                  </[^>]*>
                  ;
                  <p className="text-gray-400 leading-relaxed">;
                    {feature.description};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Benefits Section */};
        <section className="py-20 bg-slate-800/30">;
          <div className="container-responsive">;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">;
              <motion.div
                initial={{ opacity: 0, x: -30 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
              >;
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                  Transform Your Data Strategy;
                </[^>]*>
                ;
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">;
                  Our data analytics platform delivers measurable improvements in decision-making ;
                  speed, business performance, and operational efficiency while providing ;
                  comprehensive insights from all your data sources.;
                </[^>]*>
                ;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">;
                  {benefits.map((benefit, index) => (;
                    <motion.div
                      key={benefit};
                      initial={{ opacity: 0, x: -20 }};
                      whileInView={{ opacity: 1, x: 0 }};
                      transition={{ duration: 0.5, delay: index * 0.1 }};
                      viewport={{ once: true }};
                      className="[^"]*"
                    >;
                      <[^>]*/>
                      <span className="text-gray-300">{benefit}</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
              ;
              <motion.div
                initial={{ opacity: 0, x: 30 }};
                whileInView={{ opacity: 1, x: 0 }};
                transition={{ duration: 0.8 }};
                viewport={{ once: true }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl p-8 border border-indigo-500/30">;
                  <div className="text-center">;
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <h3 className="text-2xl font-bold text-white mb-4">;
                      Analytics Impact;
                    </[^>]*>
                    ;
                    <div className="grid grid-cols-2 gap-6">;
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-indigo-400 mb-2">100%</[^>]*>
                        <div className="text-sm text-gray-400">Data Utilization</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-purple-400 mb-2">80%</[^>]*>
                        <div className="text-sm text-gray-400">Faster Decisions</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-pink-400 mb-2">35%</[^>]*>
                        <div className="text-sm text-gray-400">Performance Gain</[^>]*>
                      </[^>]*>
                      <div className="text-center">;
                        <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</[^>]*>
                        <div className="text-sm text-gray-400">Real-Time</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Analytics Capabilities Section */};
        <section className="py-20">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Analytics Capabilities;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our platform provides comprehensive analytics capabilities that ;
                transform raw data into actionable business intelligence.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {analyticsCapabilities.map((capability, index) => (;
                <motion.div
                  key={capability.name};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">;
                    {capability.name};
                  </[^>]*>
                  ;
                  <p className="text-gray-400 mb-4 leading-relaxed">;
                    {capability.description};
                  </[^>]*>
                  ;
                  <div className="space-y-2">;
                    {capability.examples.map((example, idx) => (;
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">;
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></[^>]*>
                        {example};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Use Cases Section */};
        <section className="py-20 bg-slate-800/30">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">;
                Data Analytics Use Cases;
              </[^>]*>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">;
                Our analytics platform adapts to various business needs and industries;
                providing tailored solutions for different analytical requirements.;
              </[^>]*>
            </[^>]*>
            ;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
              {useCases.map((useCase, index) => (;
                <motion.div
                  key={useCase.title};
                  initial={{ opacity: 0, y: 30 }};
                  whileInView={{ opacity: 1, y: 0 }};
                  transition={{ duration: 0.6, delay: index * 0.1 }};
                  viewport={{ once: true }};
                  className="[^"]*"
                >;
                  <div className="flex items-start gap-4">;
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                      <[^>]*/>
                    </[^>]*>
                    ;
                    <div className="flex-1">;
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">;
                        {useCase.title};
                      </[^>]*>
                      <p className="text-gray-400 leading-relaxed">;
                        {useCase.description};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* CTA Section */};
        <section className="py-20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">;
          <div className="container-responsive">;
            <motion.div
              initial={{ opacity: 0, y: 30 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">;
                Ready to Transform Your Data?;
              </[^>]*>
              ;
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">;
                Join leading organizations that are already using our data analytics ;
                platform to unlock insights and drive better business decisions.;
              </[^>]*>
              ;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Start Today;
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  Schedule Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};