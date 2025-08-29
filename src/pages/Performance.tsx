import React from 'react';
import { motion } from 'framer-motion';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import PerformanceDashboard from '@/components/PerformanceDashboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Gauge, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Database,
  Globe,
  Smartphone,
  Cloud,
  Lock
} from 'lucide-react';

const Performance: React.FC = () => {
  const performanceFeatures = [
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live performance metrics with Core Web Vitals tracking",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Gauge,
      title: "Performance Scoring",
      description: "Automated performance grading from A to F with actionable insights",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Optimization Recommendations",
      description: "AI-powered suggestions for performance improvements",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "Comprehensive security metrics and threat detection",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Resource Analysis",
      description: "Detailed CPU, memory, and network performance insights",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Database,
      title: "Data Optimization",
      description: "Database performance and query optimization monitoring",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const optimizationStrategies = [
    {
      title: "Code Splitting",
      description: "Implement dynamic imports and route-based code splitting for faster initial loads",
      impact: "High",
      effort: "Medium"
    },
    {
      title: "Image Optimization",
      description: "Use WebP format, lazy loading, and responsive images for better performance",
      impact: "High",
      effort: "Low"
    },
    {
      title: "Bundle Optimization",
      description: "Tree shaking, minification, and compression for smaller bundle sizes",
      impact: "Medium",
      effort: "Low"
    },
    {
      title: "Caching Strategy",
      description: "Implement effective caching policies for static assets and API responses",
      impact: "High",
      effort: "Medium"
    },
    {
      title: "CDN Integration",
      description: "Use Content Delivery Networks for global performance optimization",
      impact: "High",
      effort: "Medium"
    },
    {
      title: "Database Indexing",
      description: "Optimize database queries and implement proper indexing strategies",
      impact: "Medium",
      effort: "High"
    }
  ];

  return (
    <>
      <EnhancedSEO
        title="Performance Monitoring & Optimization - Zion Tech Group"
        description="Advanced performance monitoring, Core Web Vitals tracking, and AI-powered optimization recommendations. Transform your application's performance with real-time insights."
        keywords="performance monitoring, Core Web Vitals, optimization, performance dashboard, web performance, Zion Tech Group"
        canonical="https://ziontechgroup.com/performance"
        tags={["Performance", "Monitoring", "Optimization", "Core Web Vitals", "Web Performance"]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Performance
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}Monitoring
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Real-time performance insights, Core Web Vitals tracking, and AI-powered optimization recommendations
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="text-lg px-4 py-2 bg-green-500/20 text-green-400 border-green-500/30">
                  Core Web Vitals
                </Badge>
                <Badge className="text-lg px-4 py-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
                  Real-time Monitoring
                </Badge>
                <Badge className="text-lg px-4 py-2 bg-purple-500/20 text-purple-400 border-purple-500/30">
                  AI Optimization
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <PerformanceDashboard />
          </div>
        </section>

        {/* Performance Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Performance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive performance monitoring and optimization tools designed for modern web applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performanceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Performance Optimization Strategies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven strategies to improve your application's performance and user experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {optimizationStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/30">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-xl">{strategy.title}</CardTitle>
                        <div className="flex gap-2">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            Impact: {strategy.impact}
                          </Badge>
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                            Effort: {strategy.effort}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{strategy.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Performance Metrics
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the metrics that matter for web performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">FCP</h3>
                  <p className="text-blue-300 text-sm">First Contentful Paint</p>
                  <p className="text-white text-xs mt-2">Target: &lt; 1.8s</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">LCP</h3>
                  <p className="text-green-300 text-sm">Largest Contentful Paint</p>
                  <p className="text-white text-xs mt-2">Target: &lt; 2.5s</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">FID</h3>
                  <p className="text-yellow-300 text-sm">First Input Delay</p>
                  <p className="text-white text-xs mt-2">Target: &lt; 100ms</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/50 to-red-800/50 border-red-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">CLS</h3>
                  <p className="text-red-300 text-sm">Cumulative Layout Shift</p>
                  <p className="text-white text-xs mt-2">Target: &lt; 0.1</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started with our comprehensive performance monitoring and optimization tools today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Start Monitoring
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Performance;