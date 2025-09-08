import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Activity, 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  ArrowRight,
  Download,
  Share2,
  Save,
  RefreshCw,
  Info,
  AlertCircle,
  Lightbulb,
  Zap,
  Users,
  Database,
  Cloud,
  Server,
  Network,
  Smartphone,
  Globe,
  Eye,
  Settings,
  Play,
  Pause,
  Square,
  RotateCcw,
  Maximize2,
  Minimize2,
  Filter,
  Search,
  Calendar,
  Target,
  Gauge,
  Cpu,
  HardDrive,
  Wifi,
  Monitor
} from 'lucide-react';

export default function PerformanceMonitor() {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    responseTime: 0,
    throughput: 0,
    errorRate: 0,
    uptime: 0
  });

  const [alerts, setAlerts] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedMetrics, setSelectedMetrics] = useState(['cpu', 'memory', 'disk']);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isMonitoring) {
      interval = setInterval(() => {
        // Simulate real-time metrics
        setMetrics(prev => ({
          cpu: Math.random() * 100,
          memory: Math.random() * 100,
          disk: Math.random() * 100,
          network: Math.random() * 100,
          responseTime: Math.random() * 1000,
          throughput: Math.random() * 1000,
          errorRate: Math.random() * 5,
          uptime: prev.uptime + 1
        }));

        // Simulate alerts
        if (Math.random() > 0.95) {
          const newAlert = {
            id: Date.now(),
            type: Math.random() > 0.5 ? 'warning' : 'critical',
            message: `High ${['CPU', 'Memory', 'Disk', 'Network'][Math.floor(Math.random() * 4)]} usage detected`,
            timestamp: new Date().toISOString()
          };
          setAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
        }

        // Update history
        setHistory(prev => {
          const newPoint = {
            timestamp: Date.now(),
            ...metrics
          };
          return [...prev.slice(-59), newPoint];
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMonitoring, metrics]);

  const startMonitoring = () => {
    setIsMonitoring(true);
    setHistory([]);
    setAlerts([]);
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
  };

  const resetMetrics = () => {
    setMetrics({
      cpu: 0,
      memory: 0,
      disk: 0,
      network: 0,
      responseTime: 0,
      throughput: 0,
      errorRate: 0,
      uptime: 0
    });
    setHistory([]);
    setAlerts([]);
  };

  const exportData = () => {
    const dataStr = JSON.stringify({ metrics, history, alerts }, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'performance-monitor-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const getStatusColor = (value: number, threshold: number) => {
    if (value >= threshold) return 'text-red-400';
    if (value >= threshold * 0.8) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getStatusIcon = (value: number, threshold: number) => {
    if (value >= threshold) return <AlertTriangle className="w-5 h-5 text-red-400" />;
    if (value >= threshold * 0.8) return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    return <CheckCircle className="w-5 h-5 text-green-400" />;
  };

  const benefits = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Track system performance metrics in real-time with instant alerts"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Analyze trends and identify performance bottlenecks"
    },
    {
      icon: AlertTriangle,
      title: "Proactive Alerts",
      description: "Get notified before performance issues impact users"
    },
    {
      icon: TrendingUp,
      title: "Capacity Planning",
      description: "Make informed decisions about infrastructure scaling"
    }
  ];

  const monitoringAreas = [
    {
      icon: Cpu,
      title: "CPU Performance",
      description: "Monitor processor usage, load averages, and thermal data"
    },
    {
      icon: HardDrive,
      title: "Storage Systems",
      description: "Track disk I/O, space utilization, and read/write performance"
    },
    {
      icon: Database,
      title: "Database Performance",
      description: "Monitor query performance, connection pools, and cache hit rates"
    },
    {
      icon: Network,
      title: "Network Metrics",
      description: "Track bandwidth usage, latency, and packet loss"
    },
    {
      icon: Server,
      title: "Application Performance",
      description: "Monitor response times, throughput, and error rates"
    },
    {
      icon: Cloud,
      title: "Cloud Resources",
      description: "Track cloud service utilization and costs"
    }
  ];

  const performanceTips = [
    {
      icon: Lightbulb,
      title: "Set Baseline Metrics",
      description: "Establish normal performance ranges to identify anomalies"
    },
    {
      icon: Target,
      title: "Define Alert Thresholds",
      description: "Configure alerts at 80% and 95% of capacity limits"
    },
    {
      icon: Zap,
      title: "Monitor Key Indicators",
      description: "Focus on response time, throughput, and error rates"
    },
    {
      icon: Clock,
      title: "Regular Reviews",
      description: "Schedule weekly performance reviews and monthly capacity planning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Performance Monitor Tool - Zion Tech Group</title>
        <meta name="description" content="Monitor your system performance in real-time with our comprehensive performance monitoring tool. Track CPU, memory, disk, network metrics and get proactive alerts." />
        <link rel="canonical" href="https://ziontechgroup.com/tools/performance-monitor" />
        <meta name="keywords" content="performance monitoring, system monitoring, CPU monitoring, memory monitoring, network monitoring, performance analytics, real-time metrics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Performance Monitor Tool
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Real-time system performance monitoring with proactive alerts and comprehensive analytics. 
              Track CPU, memory, disk, and network performance across your infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <Activity className="w-5 h-5 mr-2" />
                <span>Real-time Monitoring</span>
              </div>
              <div className="flex items-center text-gray-300">
                <BarChart3 className="w-5 h-5 mr-2" />
                <span>Performance Analytics</span>
              </div>
              <div className="flex items-center text-gray-300">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <span>Proactive Alerts</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Use Our Performance Monitor?
            </h2>
            <p className="text-gray-300 text-lg">
              Professional-grade monitoring for infrastructure of all sizes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Monitor
            </h2>
            <p className="text-gray-300 text-lg">
              Comprehensive coverage across all critical performance areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monitoringAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 text-center"
              >
                <div className="bg-slate-700/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-gray-300 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Monitoring Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live Performance Dashboard
            </h2>
            <p className="text-gray-300 text-lg">
              Monitor your system performance in real-time
            </p>
          </motion.div>

          {/* Control Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 mb-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-gray-300">
                    {isMonitoring ? 'Monitoring Active' : 'Monitoring Stopped'}
                  </span>
                </div>
                <div className="text-gray-300">
                  Uptime: {Math.floor(metrics.uptime / 60)}m {metrics.uptime % 60}s
                </div>
              </div>
              
              <div className="flex space-x-3">
                {!isMonitoring ? (
                  <button
                    onClick={startMonitoring}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Monitoring
                  </button>
                ) : (
                  <button
                    onClick={stopMonitoring}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                  >
                    <Pause className="w-4 h-4 mr-2" />
                    Stop Monitoring
                  </button>
                )}
                <button
                  onClick={resetMetrics}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </button>
                <button
                  onClick={exportData}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">CPU Usage</h3>
                {getStatusIcon(metrics.cpu, 90)}
              </div>
              <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.cpu, 90)}`}>
                {metrics.cpu.toFixed(1)}%
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.cpu >= 90 ? 'bg-red-500' : 
                    metrics.cpu >= 80 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${metrics.cpu}%` }}
                ></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Memory Usage</h3>
                {getStatusIcon(metrics.memory, 90)}
              </div>
              <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.memory, 90)}`}>
                {metrics.memory.toFixed(1)}%
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.memory >= 90 ? 'bg-red-500' : 
                    metrics.memory >= 80 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${metrics.memory}%` }}
                ></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Disk Usage</h3>
                {getStatusIcon(metrics.disk, 90)}
              </div>
              <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.disk, 90)}`}>
                {metrics.disk.toFixed(1)}%
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.disk >= 90 ? 'bg-red-500' : 
                    metrics.disk >= 80 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${metrics.disk}%` }}
                ></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Network</h3>
                {getStatusIcon(metrics.network, 90)}
              </div>
              <div className={`text-3xl font-bold mb-2 ${getStatusColor(metrics.network, 90)}`}>
                {metrics.network.toFixed(1)}%
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    metrics.network >= 90 ? 'bg-red-500' : 
                    metrics.network >= 80 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${metrics.network}%` }}
                ></div>
              </div>
            </motion.div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <h3 className="text-white font-semibold mb-4">Response Time</h3>
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {metrics.responseTime.toFixed(0)}ms
              </div>
              <div className="text-gray-300 text-sm">
                Average response time
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <h3 className="text-white font-semibold mb-4">Throughput</h3>
              <div className="text-2xl font-bold text-green-400 mb-2">
                {metrics.throughput.toFixed(0)} req/s
              </div>
              <div className="text-gray-300 text-sm">
                Requests per second
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50"
            >
              <h3 className="text-white font-semibold mb-4">Error Rate</h3>
              <div className="text-2xl font-bold text-red-400 mb-2">
                {metrics.errorRate.toFixed(2)}%
              </div>
              <div className="text-gray-300 text-sm">
                Error percentage
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Active Alerts
              </h2>
              <p className="text-gray-300 text-lg">
                Performance issues requiring attention
              </p>
            </motion.div>

            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border-l-4 ${
                    alert.type === 'critical' ? 'border-red-500' : 'border-yellow-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {alert.type === 'critical' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-400" />
                      )}
                      <span className="text-white">{alert.message}</span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Performance Tips Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Performance Monitoring Best Practices
            </h2>
            <p className="text-gray-300 text-lg">
              Follow these guidelines for effective performance monitoring
            </p>
          </motion.div>

          <div className="space-y-6">
            {performanceTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-blue-500/20 rounded-full p-2">
                  <tip.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-300">{tip.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Professional Performance Monitoring?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our infrastructure experts can help you implement comprehensive monitoring solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-slate-900 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Infrastructure Experts
              </a>
              <a
                href="/services/infrastructure"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                View Infrastructure Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}