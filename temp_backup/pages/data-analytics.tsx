import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart, Activity, Database, Brain, Zap, Target } from 'lucide-react';
import Layout from '../components/layout/Layout';

export default function DataAnalytics() {
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />,
      title: "Business Intelligence",
      description: "Advanced analytics and reporting platforms for data-driven decisions",
      href: "/intelligent-hr-analytics-platform"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Performance Monitoring",
      description: "Real-time performance analytics and SLO tracking systems",
      href: "/status-pages-slo"
    },
    {
      icon: <PieChart className="w-12 h-12 text-purple-400" />,
      title: "Data Visualization",
      description: "Interactive dashboards and data visualization tools",
      href: "/vector-search-starter"
    },
    {
      icon: <Activity className="w-12 h-12 text-green-400" />,
      title: "Real-time Analytics",
      description: "Live data streaming and real-time business intelligence",
      href: "/mlops-starter"
    },
    {
      icon: <Database className="w-12 h-12 text-yellow-400" />,
      title: "Data Management",
      description: "Data governance, quality, and lifecycle management",
      href: "/managed-postgres-ha"
    },
    {
      icon: <Brain className="w-12 h-12 text-pink-400" />,
      title: "AI-Powered Analytics",
      description: "Machine learning enhanced analytics and predictive insights",
      href: "/ai-powered-decision-engine"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>data-analytics | Zion Tech Group</title>
        <meta name="description" content="data-analytics - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">data-analytics</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};
export default data-analytics;