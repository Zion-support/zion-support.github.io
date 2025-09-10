import React from 'react';
import { BarChart3, TrendingUp, Database, Brain } from 'lucide-react';
import SEO from '../../components/SEO';

<<<<<<< HEAD
const DataAnalytics = () => {
  const features = [
    {
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights",
      icon: <BarChart3 className="h-8 w-8 text-blue-400" />
    },
    {
      title: "Predictive Analytics",
      description: "Predict future trends and outcomes using advanced AI models",
      icon: <TrendingUp className="h-8 w-8 text-green-400" />
    },
    {
      title: "Data Integration",
      description: "Connect and integrate data from multiple sources seamlessly",
      icon: <Database className="h-8 w-8 text-purple-400" />
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage AI to discover hidden patterns and opportunities",
      icon: <Brain className="h-8 w-8 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Data Analytics - Zion Tech Group"
        description="Advanced data analytics solutions to unlock insights from your data."
        keywords={["data analytics", "business intelligence", "predictive analytics", "data insights"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Data Analytics</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Unlock the power of your data with our comprehensive analytics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Analytics Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Processing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time data streaming</li>
                <li>• Batch processing</li>
                <li>• Data cleansing and transformation</li>
                <li>• Data quality management</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Visualization</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Interactive dashboards</li>
                <li>• Custom reports</li>
                <li>• Data visualization tools</li>
                <li>• Mobile-friendly analytics</li>
              </ul>
            </div>
=======
export default function DataAnalytics() {
  return (
    <>
      <SEO 
        title="Data Analytics - Zion Tech Group"
        description="Advanced data analytics and business intelligence solutions."
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Data Analytics</h1>
            <p className="text-xl text-slate-300">Advanced data analytics solutions.</p>
>>>>>>> 2e76c8f17382c83630cd66eed177eb9d0ef16e40
          </div>
        </div>
      </div>
    </div>
  );
}